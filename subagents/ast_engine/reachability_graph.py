"""
stokes/subagents/ast_engine/reachability_graph.py
Cross-language tainted dataflow evaluator.
Builds a directed semantic reachability graph G = (V, E) across SQL, Python, Rust, Proto.
GitHub: yvliet
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any


@dataclass
class ReachabilityNode:
    """
    A vertex in the semantic reachability graph.

    Represents a schema projection, serialized payload, or downstream buffer.
    """
    node_id: str
    language: str           # sql | python | rust | proto | go
    file: str
    line: int
    symbol: str             # e.g. "system.columns", "features_dict", "[Feature; 200]"
    cardinality: int | None = None      # Known cardinality bound (None = unbounded)
    is_upstream: bool = False
    is_downstream: bool = False
    tainted: bool = False

    def __hash__(self) -> int:
        return hash(self.node_id)


@dataclass
class ReachabilityEdge:
    """
    A directed edge in the semantic reachability graph.

    Represents a network transport, IPC channel, or serialization boundary.
    """
    source: str     # node_id
    target: str     # node_id
    transport: str  # e.g. "http", "kafka", "grpc", "function_call", "file_write"
    tainted: bool = False


class ReachabilityGraph:
    """
    Cross-language tainted dataflow evaluator.

    Models multi-tier architectures as a directed semantic reachability graph.
    Evaluates the Cardinality Risk Ratio C_upstream / B_downstream at every
    cross-boundary interface and identifies reachable contract violations.
    """

    MAX_ACTIVE_FEATURES = 200  # Dirichlet downstream buffer capacity

    def __init__(self) -> None:
        self.nodes: dict[str, ReachabilityNode] = {}
        self.edges: list[ReachabilityEdge] = {}
        self._adjacency: dict[str, list[str]] = {}
        self.edges = []

    def add_node(self, node: ReachabilityNode) -> None:
        """Add a vertex to the graph."""
        self.nodes[node.node_id] = node
        if node.node_id not in self._adjacency:
            self._adjacency[node.node_id] = []

    def add_edge(self, edge: ReachabilityEdge) -> None:
        """Add a directed edge to the graph."""
        self.edges.append(edge)
        self._adjacency.setdefault(edge.source, []).append(edge.target)

    def build_dirichlet_graph(self, scan_results: dict[str, Any]) -> None:
        """
        Construct the Dirichlet incident reachability graph from scan results.

        Topology:
          ClickHouse system.columns (upstream, cardinality=280)
            → Python ETL extractor (unbounded dict)
            → KV Mesh features.json (relay)
            → Rust [Feature; 200] buffer (downstream, capacity=200)
        """
        # Upstream: ClickHouse system.columns query
        sql_violations = scan_results.get("sql_violations", [])
        sql_cardinality = scan_results.get("upstream_cardinality", 280)

        n_sql = ReachabilityNode(
            node_id="clickhouse.system_columns",
            language="sql",
            file="migrations/001_bot_signals.sql",
            line=1,
            symbol="system.columns",
            cardinality=sql_cardinality,
            is_upstream=True,
            tainted=len(sql_violations) > 0,
        )
        self.add_node(n_sql)

        # Mid-tier: Python ETL extractor
        py_violations = scan_results.get("python_violations", [])
        n_python = ReachabilityNode(
            node_id="python.feature_extractor",
            language="python",
            file="services/feature-pipeline/catalog_sync.py",
            line=127,
            symbol="features_dict",
            cardinality=None,  # Unbounded without guard
            is_upstream=True,
            is_downstream=True,
            tainted=len(py_violations) > 0,
        )
        self.add_node(n_python)

        # Relay: KV Mesh / features.json
        n_kv = ReachabilityNode(
            node_id="kv.features_json",
            language="json",
            file="payloads/features.json",
            line=1,
            symbol="features[*]",
            cardinality=sql_cardinality,
        )
        self.add_node(n_kv)

        # Downstream: Rust fixed stack buffer
        rust_violations = scan_results.get("rust_violations", [])
        n_rust = ReachabilityNode(
            node_id="rust.feature_buffer",
            language="rust",
            file="crates/dirichlet-proxy/src/engine/feature_ingest.rs",
            line=42,
            symbol="[Feature; 200]",
            cardinality=self.MAX_ACTIVE_FEATURES,
            is_downstream=True,
            tainted=len(rust_violations) > 0,
        )
        self.add_node(n_rust)

        # Edges: data flow across boundaries
        self.add_edge(ReachabilityEdge(
            source="clickhouse.system_columns",
            target="python.feature_extractor",
            transport="db_query",
            tainted=n_sql.tainted,
        ))
        self.add_edge(ReachabilityEdge(
            source="python.feature_extractor",
            target="kv.features_json",
            transport="file_write",
            tainted=n_python.tainted,
        ))
        self.add_edge(ReachabilityEdge(
            source="kv.features_json",
            target="rust.feature_buffer",
            transport="http",
            tainted=n_kv.tainted or n_python.tainted,
        ))

    def evaluate_risk_ratios(self) -> list[dict[str, Any]]:
        """
        Evaluate the Cardinality Risk Ratio C_upstream / B_downstream
        at every cross-boundary interface.

        Returns a list of risk assessments for each upstream→downstream pair.
        """
        risks = []
        for edge in self.edges:
            src = self.nodes.get(edge.source)
            tgt = self.nodes.get(edge.target)
            if src is None or tgt is None:
                continue
            if not tgt.is_downstream or tgt.cardinality is None:
                continue

            c_upstream = src.cardinality
            b_downstream = tgt.cardinality

            if c_upstream is None:
                ratio = float("inf")
                status = "UNBOUNDED_CAPACITY_HAZARD"
            elif b_downstream == 0:
                ratio = float("inf")
                status = "ZERO_CAPACITY"
            else:
                ratio = c_upstream / b_downstream
                if ratio > 1.0:
                    status = "FATAL_CONTRACT_DRIFT"
                elif edge.tainted:
                    status = "TAINTED_BOUNDARY"
                else:
                    status = "INVARIANT_SATISFIED"

            risks.append({
                "source_node": edge.source,
                "target_node": edge.target,
                "transport": edge.transport,
                "c_upstream": c_upstream,
                "b_downstream": b_downstream,
                "risk_ratio": ratio,
                "status": status,
                "tainted": edge.tainted,
            })

        return risks

    def is_violation_reachable(self) -> bool:
        """
        Return True if any downstream buffer is reachable from a tainted
        upstream node via a chain of tainted edges.
        Uses DFS traversal from all tainted upstream nodes.
        """
        tainted_starts = [
            nid for nid, n in self.nodes.items()
            if n.tainted and n.is_upstream
        ]
        downstream_ids = {
            nid for nid, n in self.nodes.items()
            if n.is_downstream
        }

        visited: set[str] = set()

        def dfs(node_id: str) -> bool:
            if node_id in visited:
                return False
            visited.add(node_id)
            if node_id in downstream_ids:
                target_node = self.nodes.get(node_id)
                if target_node and target_node.tainted:
                    return True
            for neighbor in self._adjacency.get(node_id, []):
                # Follow edge if it is tainted
                for edge in self.edges:
                    if edge.source == node_id and edge.target == neighbor and edge.tainted:
                        if dfs(neighbor):
                            return True
            return False

        return any(dfs(start) for start in tainted_starts)

    def get_taint_path(self) -> list[str]:
        """Return the sequence of node IDs in the tainted path if reachable."""
        tainted_starts = [
            nid for nid, n in self.nodes.items()
            if n.tainted and n.is_upstream
        ]
        downstream_ids = {
            nid for nid, n in self.nodes.items()
            if n.is_downstream
        }

        def dfs_path(node_id: str, path: list[str], visited: set[str]) -> list[str]:
            if node_id in visited:
                return []
            visited.add(node_id)
            path = path + [node_id]
            if node_id in downstream_ids and self.nodes[node_id].tainted:
                return path
            for edge in self.edges:
                if edge.source == node_id and edge.tainted:
                    result = dfs_path(edge.target, path, visited)
                    if result:
                        return result
            return []

        for start in tainted_starts:
            path = dfs_path(start, [], set())
            if path:
                return path
        return []

    def summary(self) -> dict[str, Any]:
        """Return a summary of the reachability graph analysis."""
        risks = self.evaluate_risk_ratios()
        violations_reachable = self.is_violation_reachable()
        taint_path = self.get_taint_path()
        max_risk = max(
            (r["risk_ratio"] for r in risks if r["risk_ratio"] != float("inf")),
            default=0.0,
        )

        return {
            "total_nodes": len(self.nodes),
            "total_edges": len(self.edges),
            "tainted_nodes": sum(1 for n in self.nodes.values() if n.tainted),
            "risk_assessments": risks,
            "max_risk_ratio": max_risk,
            "violation_reachable": violations_reachable,
            "taint_propagation_path": taint_path,
        }
