"""
stokes/subagents/staging_inspector.py
Ephemeral DB staging reflection inspector.
Evaluates active database catalog reflections against downstream buffer bounds.
Supports mock:// URL scheme for zero-dependency offline testing.
GitHub: yvliet
"""

from __future__ import annotations

import re
from typing import Any
from pathlib import Path


# ─── Mock Catalog: Dirichlet Staging Data ─────────────────────────────────────

# Canonical 200 features (Dirichlet baseline)
DIRICHLET_CANONICAL_COLUMNS = [
    {"database": "bot_signals", "table": "events", "name": f"feature_{i:03d}",
     "type": "Float32", "priority": 200 + (i % 50)}
    for i in range(200)
]

# Shard duplicate columns (the unscoped query defect)
DIRICHLET_SHARD_R0 = [
    {"database": "bot_signals_shard_01", "table": "events_r0",
     "name": f"shard_r0_{DIRICHLET_CANONICAL_COLUMNS[i]['name']}",
     "type": "Float32", "priority": 0, "is_shadow": True}
    for i in range(40)
]

DIRICHLET_SHARD_R1 = [
    {"database": "bot_signals_shard_02", "table": "events_r1",
     "name": f"shard_r1_{DIRICHLET_CANONICAL_COLUMNS[i]['name']}",
     "type": "Float32", "priority": 0, "is_shadow": True}
    for i in range(40)
]


class StagingInspector:
    """
    Ephemeral staging database reflection inspector.

    Connects to a staging ClickHouse or PostgreSQL instance (or mock catalog)
    and evaluates the active schema reflection against downstream buffer bounds.

    URL schemes:
      mock://dirichlet           — Dirichlet mock catalog (canonical: 200, drift: 280)
      mock://dirichlet-clean     — Dirichlet mock with scoped query (200 only)
      clickhouse://host:port/db  — Real ClickHouse (requires clickhouse-driver)
      postgresql://...           — Real PostgreSQL (requires psycopg2)
    """

    DOWNSTREAM_CAPACITY = 200  # [Feature; 200] fixed buffer

    def __init__(self, db_url: str) -> None:
        self.db_url = db_url

    async def inspect(self) -> dict[str, Any]:
        """
        Inspect the staging catalog and return a result dict containing:
        - upstream_cardinality: int
        - downstream_capacity: int
        - violations: list of ContractViolationDiagnostic dicts
        - columns: list of discovered column records
        """
        if self.db_url.startswith("mock://"):
            return await self._inspect_mock()
        elif self.db_url.startswith("clickhouse://"):
            return await self._inspect_clickhouse()
        elif self.db_url.startswith(("postgresql://", "postgres://")):
            return await self._inspect_postgres()
        else:
            return await self._inspect_mock()

    async def _inspect_mock(self) -> dict[str, Any]:
        """Use the Dirichlet mock staging catalog."""
        variant = self.db_url.replace("mock://", "").lower()

        if "clean" in variant or "scoped" in variant:
            # Scoped query: returns only canonical 200 columns
            columns = list(DIRICHLET_CANONICAL_COLUMNS)
            query_scoped = True
        else:
            # Unscoped query defect: returns 200 + 80 shard duplicates = 280
            columns = list(DIRICHLET_CANONICAL_COLUMNS) + DIRICHLET_SHARD_R0 + DIRICHLET_SHARD_R1
            query_scoped = False

        upstream = len(columns)
        downstream = self.DOWNSTREAM_CAPACITY
        risk = upstream / downstream if downstream > 0 else float("inf")

        violations = []
        if not query_scoped and upstream > downstream:
            violations.append({
                "diagnostic_id": "DIAG-STAGING-001",
                "subagent_id": "stokes-sql",
                "invariant_id": "INVARIANT_2_CATALOG_QUALIFICATION",
                "lint_rule": "LINT-001",
                "target_file": "services/feature-pipeline/catalog_sync.py",
                "span": {"start_line": 127, "start_col": 8, "end_line": 129, "end_col": 50},
                "ast_context": {
                    "node_type": "select_statement",
                    "surrounding_snippet": "SELECT name, type FROM system.columns WHERE table = 'events'",
                    "tainted_identifiers": ["system.columns", "events_r0", "events_r1"],
                },
                "root_cause": (
                    f"Staging catalog reflection returned {upstream} columns ({upstream - 200} shard duplicates). "
                    f"Missing database = currentDatabase() predicate allows shard tables to bleed through."
                ),
                "cardinality_risk_ratio": risk,
                "synthesized_remediation": {
                    "unified_diff": self._sql_remediation_diff(),
                    "suggested_ast_replacement": None,
                    "explanation": (
                        "Add AND database = currentDatabase() to scope the query "
                        "to the active ClickHouse database, excluding shard replica tables."
                    ),
                },
            })

        return {
            "url": self.db_url,
            "upstream_cardinality": upstream,
            "downstream_capacity": downstream,
            "cardinality_risk_ratio": risk,
            "query_scoped": query_scoped,
            "columns": columns[:20],  # truncate for summary
            "total_columns": len(columns),
            "shadow_columns": len([c for c in columns if c.get("is_shadow")]),
            "violations": violations,
        }

    async def _inspect_clickhouse(self) -> dict[str, Any]:
        """
        Attempt real ClickHouse catalog reflection.
        Falls back to mock if clickhouse-driver is not installed.
        """
        try:
            from clickhouse_driver import Client  # type: ignore
            url = self.db_url.replace("clickhouse://", "")
            host_port, _, db = url.partition("/")
            host, _, port_str = host_port.partition(":")
            port = int(port_str) if port_str else 9000

            client = Client(host=host, port=port, database=db or "default")
            rows = client.execute(
                "SELECT database, table, name, type FROM system.columns "
                "WHERE table = 'events' AND database = currentDatabase()"
            )
            columns = [
                {"database": r[0], "table": r[1], "name": r[2], "type": r[3]}
                for r in rows
            ]
            upstream = len(columns)
            downstream = self.DOWNSTREAM_CAPACITY
            risk = upstream / downstream if downstream else float("inf")
            return {
                "url": self.db_url,
                "upstream_cardinality": upstream,
                "downstream_capacity": downstream,
                "cardinality_risk_ratio": risk,
                "query_scoped": True,
                "columns": columns[:20],
                "total_columns": len(columns),
                "shadow_columns": 0,
                "violations": [],
            }
        except ImportError:
            return await self._inspect_mock()

    async def _inspect_postgres(self) -> dict[str, Any]:
        """
        Attempt real PostgreSQL catalog reflection.
        Falls back to mock if psycopg2 is not installed.
        """
        try:
            import psycopg2  # type: ignore
            conn = psycopg2.connect(self.db_url)
            cur = conn.cursor()
            cur.execute(
                "SELECT table_schema, table_name, column_name, data_type "
                "FROM information_schema.columns "
                "WHERE table_name = 'events' AND table_schema = current_schema()"
            )
            rows = cur.fetchall()
            cur.close()
            conn.close()
            columns = [
                {"database": r[0], "table": r[1], "name": r[2], "type": r[3]}
                for r in rows
            ]
            upstream = len(columns)
            downstream = self.DOWNSTREAM_CAPACITY
            risk = upstream / downstream if downstream else float("inf")
            return {
                "url": self.db_url,
                "upstream_cardinality": upstream,
                "downstream_capacity": downstream,
                "cardinality_risk_ratio": risk,
                "query_scoped": True,
                "columns": columns[:20],
                "total_columns": len(columns),
                "shadow_columns": 0,
                "violations": [],
            }
        except ImportError:
            return await self._inspect_mock()

    @staticmethod
    def _sql_remediation_diff() -> str:
        return """\
--- a/services/feature-pipeline/catalog_sync.py
+++ b/services/feature-pipeline/catalog_sync.py
@@ -125,7 +125,8 @@
         SELECT name, type, default_kind
         FROM system.columns
-        WHERE table = 'events'
+        WHERE table = 'events'
+          AND database = currentDatabase();
"""
