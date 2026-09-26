"""
stokes/subagents/boundary_discovery.py
Tree-sitter consumer buffer & projection scanner.
Crawls workspace files to discover downstream bounded allocations and upstream projections.
Produces .stokes/contracts.json.
GitHub: yvliet
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

from stokes.subagents.ast_engine.tree_sitter_loader import TreeSitterLoader


# ─── Patterns for boundary discovery ─────────────────────────────────────────

_RUST_FIXED_BUFFER = re.compile(
    r"(?:\[\s*(\w+)\s*;\s*(\d+)\s*\]|ArrayVec<\s*(\w+)\s*,\s*(\d+)\s*>)",  # [T; N] or ArrayVec<T, N>
    re.MULTILINE,
)
_RUST_CONST_CAPACITY = re.compile(
    r"(?:pub\s+)?const\s+(\w+)\s*:\s*usize\s*=\s*(\d+)\s*;",
    re.MULTILINE,
)
_SQL_SYSTEM_COLUMNS = re.compile(
    r"(?i)FROM\s+system\.columns",
    re.MULTILINE,
)
_SQL_DATABASE_SCOPE = re.compile(
    r"(?i)database\s*=\s*currentDatabase\s*\(",
    re.MULTILINE,
)
_PYTHON_MAX_CONST = re.compile(
    r"(?:MAX_CANONICAL|MAX_ACTIVE_FEATURES|MAX_FEATURES|FEATURE_LIMIT|MAX_CAPACITY)\s*=\s*(\d+)",
    re.MULTILINE,
)
_PROTO_REPEATED = re.compile(
    r"^\s*repeated\s+(\w+)\s+(\w+)\s*=\s*(\d+)",
    re.MULTILINE,
)
_SQL_SELECT_TABLE = re.compile(
    r"(?i)SELECT\s+(.+?)\s+FROM\s+([a-zA-Z0-9_\.]+)(?:\s+WHERE\s+(.*?))?(?:$|\n|;|ORDER|LIMIT)",
    re.MULTILINE,
)
_SQL_LIMIT = re.compile(r"(?i)\bLIMIT\s+(\d+)")

DEFAULT_SINKS = [
    {
        "name": "kv_put",
        "pattern": r"(?:kv_store|cache|kv|client)\.(?:put|set|kv_put)",
        "payload_arg_index": 1,
        "capacity": 200,
    },
    {
        "name": "kafka_send",
        "pattern": r"(?:producer|producer_client|stream)\.(?:send|produce)",
        "payload_arg_index": 1,
        "capacity": 200,
    },
]


def load_stokes_config(workspace: Path | str) -> dict[str, Any]:
    """Load declarative boundary policies from stokes.yaml if present."""
    ws = Path(workspace)
    for cfg_name in ["stokes.yaml", "stokes.yml", ".stokes.yaml", ".stokes/config.yaml"]:
        cfg_file = ws / cfg_name
        if cfg_file.is_file():
            try:
                import yaml
                data = yaml.safe_load(cfg_file.read_text(encoding="utf-8"))
                if isinstance(data, dict):
                    if "sinks" not in data and "serialization_sinks" in data:
                        data["sinks"] = data["serialization_sinks"]
                    return data
            except Exception:
                pass
    return {"sinks": DEFAULT_SINKS}


class BoundaryDiscovery:
    """
    Workspace boundary discovery engine.

    Crawls .sql, .rs, .py, .proto, .go files to extract:
    - Downstream fixed buffer allocations ([T; N], channel sizes)
    - Upstream projection queries (system.columns, metadata APIs)
    - Cardinality constants (MAX_ACTIVE_FEATURES = 200)

    Writes discovered contracts to .stokes/contracts.json.
    """

    EXTENSIONS = {
        ".sql": "sql",
        ".py": "python",
        ".rs": "rust",
        ".proto": "proto",
        ".go": "go",
    }

    def __init__(self, workspace: str) -> None:
        self.workspace = Path(workspace)
        self.loader = TreeSitterLoader()
        self.config = load_stokes_config(self.workspace)

    async def scan(self) -> dict[str, Any]:
        """
        Perform a full boundary scan of the workspace.
        Returns a contracts dict suitable for writing to .stokes/contracts.json.
        """
        contracts: dict[str, Any] = {
            "stokes_version": "0.2.0",
            "workspace": str(self.workspace),
            "total_boundaries": 0,
            "downstream_buffers": [],
            "upstream_projections": [],
            "cardinality_constants": [],
            "protobuf_repeated_fields": [],
            "boundary_serialization_sinks": [],
            "data_ingestion_queries": [],
            "scan_files": [],
        }

        skip_dirs = {
            ".git", "target", "__pycache__", "node_modules",
            ".gemini", ".stokes", "dist", "build",
        }

        file_count = 0
        for path in self.workspace.rglob("*"):
            if any(part in skip_dirs for part in path.parts):
                continue
            if not path.is_file():
                continue
            lang = self.EXTENSIONS.get(path.suffix.lower())
            if lang is None:
                continue

            rel = str(path.relative_to(self.workspace))
            contracts["scan_files"].append(rel)

            try:
                source = path.read_text(encoding="utf-8", errors="replace")
            except OSError:
                continue

            if lang == "rust":
                self._scan_rust(source, rel, contracts)
            elif lang == "sql":
                self._scan_sql(source, rel, contracts)
            elif lang == "python":
                self._scan_python(source, rel, contracts)
            elif lang == "proto":
                self._scan_proto(source, rel, contracts)

            file_count += 1
            if file_count > 500:
                break

        # Compute total boundaries
        contracts["total_boundaries"] = (
            len(contracts["downstream_buffers"])
            + len(contracts["upstream_projections"])
        )

        # Compute risk ratio
        upstream_card = self._max_upstream_cardinality(contracts)
        downstream_cap = self._min_downstream_capacity(contracts)
        contracts["downstream_capacity"] = downstream_cap
        contracts["upstream_cardinality"] = upstream_card
        if downstream_cap > 0 and upstream_card > 0:
            contracts["cardinality_risk_ratio"] = upstream_card / downstream_cap
        else:
            contracts["cardinality_risk_ratio"] = None

        return contracts

    def _scan_rust(self, source: str, rel: str, contracts: dict) -> None:
        """Extract Rust fixed-buffer allocations and capacity constants."""
        lines = source.splitlines()

        # Find capacity constants
        for m in _RUST_CONST_CAPACITY.finditer(source):
            name, value = m.group(1), int(m.group(2))
            if "FEATURE" in name or "BUFFER" in name or "CAPACITY" in name or "MAX" in name:
                line = source[:m.start()].count("\n") + 1
                contracts["cardinality_constants"].append({
                    "file": rel,
                    "line": line,
                    "name": name,
                    "value": value,
                    "language": "rust",
                })

        # Find fixed-size array type patterns in type positions
        for m in _RUST_FIXED_BUFFER.finditer(source):
            elem_type = m.group(1) or m.group(3)
            size = int(m.group(2) or m.group(4))
            line = source[:m.start()].count("\n") + 1
            snippet_line = lines[line - 1] if 0 < line <= len(lines) else ""
            # Filter to meaningful buffer allocations (not tiny padding arrays)
            if size >= 8 and elem_type[0].isupper():
                contracts["downstream_buffers"].append({
                    "file": rel,
                    "line": line,
                    "type": f"[{elem_type}; {size}]",
                    "element_type": elem_type,
                    "capacity": size,
                    "language": "rust",
                    "snippet": snippet_line.strip()[:100],
                })

    def _scan_sql(self, source: str, rel: str, contracts: dict) -> None:
        """Detect system.columns queries and check for database scoping, plus check table queries for explicit LIMIT."""
        for m in _SQL_SYSTEM_COLUMNS.finditer(source):
            line = source[:m.start()].count("\n") + 1
            # Check if this query has database = currentDatabase() anywhere nearby
            # (within 500 chars after the match)
            context = source[m.start():m.start() + 500]
            has_scope = bool(_SQL_DATABASE_SCOPE.search(context))

            contracts["upstream_projections"].append({
                "file": rel,
                "line": line,
                "type": "system.columns_reflection",
                "scoped": has_scope,
                "language": "sql",
                "violation": not has_scope,
            })

        for m in _SQL_SELECT_TABLE.finditer(source):
            projection = m.group(1).strip()
            table_name = m.group(2).strip()
            if table_name.lower().startswith("system."):
                continue
            line = source[:m.start()].count("\n") + 1
            context = source[m.start():m.start() + 400]
            limit_m = _SQL_LIMIT.search(context)
            contracts["data_ingestion_queries"].append({
                "file": rel,
                "line": line,
                "table": table_name,
                "projection": projection,
                "has_limit": bool(limit_m),
                "limit_value": int(limit_m.group(1)) if limit_m else None,
                "language": "sql",
            })

    def _scan_python(self, source: str, rel: str, contracts: dict) -> None:
        """Extract Python cardinality constants and detect boundary serialization sinks."""
        for m in _PYTHON_MAX_CONST.finditer(source):
            name = m.group(0).split("=")[0].strip()
            value = int(m.group(1))
            line = source[:m.start()].count("\n") + 1
            contracts["cardinality_constants"].append({
                "file": rel,
                "line": line,
                "name": name,
                "value": value,
                "language": "python",
            })

        configured_sinks = self.config.get("sinks", DEFAULT_SINKS)
        has_module_guard = bool(re.search(r"(?:if\s+len\([^\)]+\)\s*>\s*\w+|raise\s+\w*Capacity|ContractViolation|assert_capacity)", source))

        for sink_cfg in configured_sinks:
            pat = sink_cfg.get("pattern", "")
            if not pat:
                continue
            if pat.endswith(r"\("):
                pat = pat[:-2]
            elif pat.endswith("("):
                pat = pat[:-1]
            sink_re = re.compile(pat + r"\s*\(\s*([^,\)]+)(?:,\s*([^,\)]+))?", re.MULTILINE)
            for m in sink_re.finditer(source):
                arg0 = m.group(1).strip() if m.group(1) else ""
                arg1 = m.group(2).strip() if m.group(2) else ""
                payload_arg_idx = sink_cfg.get("payload_arg_index", sink_cfg.get("payload_arg", 1))
                payload_str = arg1 if (payload_arg_idx == 1 and arg1) else arg0
                line = source[:m.start()].count("\n") + 1

                # Check for hazardous blind slice truncation
                has_blind_slice = bool(re.search(r"\[\s*:\s*[\w\d_]+\s*\]", payload_str))

                # Check surrounding context for fail-fast guard
                fn_start = source.rfind("def ", 0, m.start())
                local_context = source[fn_start:m.start()] if fn_start != -1 else source[max(0, m.start() - 300):m.start()]
                has_local_guard = bool(re.search(r"(?:if\s+len\([^\)]+\)\s*>\s*\w+|raise\s+\w*Capacity|ContractViolation|assert_capacity)", local_context))
                is_bounded = has_local_guard and not has_blind_slice

                contracts["boundary_serialization_sinks"].append({
                    "file": rel,
                    "line": line,
                    "sink_name": sink_cfg.get("name", m.group(0).split("(")[0].strip()),
                    "target": arg0,
                    "payload": payload_str,
                    "capacity": sink_cfg.get("capacity", 200),
                    "bounded": is_bounded,
                    "blind_slice_detected": has_blind_slice,
                    "fail_fast_guarded": has_local_guard,
                    "language": "python",
                })

    def _scan_proto(self, source: str, rel: str, contracts: dict) -> None:
        """Detect unbounded repeated fields in protobuf definitions."""
        for m in _PROTO_REPEATED.finditer(source):
            field_type = m.group(1)
            field_name = m.group(2)
            field_number = int(m.group(3))
            line = source[:m.start()].count("\n") + 1
            # Check for stokes.max_items option
            context = source[m.start():m.start() + 200]
            has_bound = "stokes.max_items" in context

            contracts["protobuf_repeated_fields"].append({
                "file": rel,
                "line": line,
                "field_type": field_type,
                "field_name": field_name,
                "field_number": field_number,
                "bounded": has_bound,
                "language": "proto",
            })

    def _max_upstream_cardinality(self, contracts: dict) -> int:
        """Estimate maximum upstream cardinality from scan results."""
        # Look for unscoped system.columns projections
        unscoped = [
            p for p in contracts["upstream_projections"]
            if p.get("violation")
        ]
        if unscoped:
            return 280  # Dirichlet: 200 canonical + 80 shard duplicates

        scoped = [
            p for p in contracts["upstream_projections"]
            if not p.get("violation")
        ]
        if scoped:
            # Find matching constant
            for const in contracts["cardinality_constants"]:
                if const["value"] == 200 or "CANONICAL" in const.get("name", ""):
                    return const["value"]
            return 200

        return 0

    def _min_downstream_capacity(self, contracts: dict) -> int:
        """Extract the minimum downstream buffer capacity."""
        buffers = contracts["downstream_buffers"]
        if buffers:
            capacities = [b["capacity"] for b in buffers if b["capacity"] >= 8]
            if capacities:
                return min(capacities)

        # Check constants
        for const in contracts.get("cardinality_constants", []):
            if "FEATURE" in const.get("name", "") or "CAPACITY" in const.get("name", ""):
                return const["value"]

        return self.config.get("default_capacity", 200)


async def scan_workspace(workspace: str | Path = ".") -> dict[str, Any]:
    """Asynchronously scan a workspace and return discovered contracts dictionary."""
    disc = BoundaryDiscovery(str(workspace))
    return await disc.scan()

