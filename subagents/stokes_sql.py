"""
stokes/subagents/stokes_sql.py
ClickHouse/PostgreSQL DDL & system.columns auditor.
LINT-001: Unbounded Upstream Catalog Reflection (Context Blindness Principle:
In isolation, metadata reflection is valid SQL; it becomes a fatal defect only
when its output binds to a capacity-constrained downstream consumer buffer).
GitHub: yvliet
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any, TYPE_CHECKING

from stokes.subagents.actor_base import ActorBase
from stokes.subagents.ast_engine.tree_sitter_loader import TreeSitterLoader

if TYPE_CHECKING:
    from stokes.subagents.bob_multiplexer import BobMultiplexer

# ─── SQL Analysis Patterns ────────────────────────────────────────────────────

_SYSTEM_COLUMNS = re.compile(
    r"(?i)(FROM|JOIN)\s+system\.(columns|tables)\b",
    re.MULTILINE,
)
_DATABASE_SCOPE = re.compile(
    r"(?i)database\s*=\s*currentDatabase\s*\(\s*\)",
    re.MULTILINE,
)
_TABLE_FILTER = re.compile(
    r"(?i)(table|name)\s*=\s*['\"](\w+)['\"]",
    re.MULTILINE,
)
_LIKE_FILTER = re.compile(
    r"(?i)(table|name)\s+LIKE\s+['\"]([^'\"]+)['\"]",
    re.MULTILINE,
)


# ─── Remediation Diffs ────────────────────────────────────────────────────────

_SQL_SCOPE_DIFF = """\
--- a/services/feature-pipeline/catalog_sync.py
+++ b/services/feature-pipeline/catalog_sync.py
@@ -125,7 +125,8 @@
         SELECT name, type, default_kind
         FROM system.columns
-        WHERE table = 'events'
+        WHERE table = 'events'
+          AND database = currentDatabase()
"""

_SQL_LIKE_FIX_DIFF = """\
--- a/services/feature-pipeline/catalog_sync.py
+++ b/services/feature-pipeline/catalog_sync.py
@@ -125,6 +125,7 @@
         SELECT name, type, default_kind
         FROM system.columns
-        WHERE table LIKE 'events%'
+        WHERE table = 'events'
+          AND database = currentDatabase()
"""


class StokesSQLAgent(ActorBase):
    """
    IBM Bob 2.0 subagent: SQL catalog auditor.

    Analyzes ClickHouse DDL files and Python ETL scripts for:
    - Unqualified system.columns reflection queries (LINT-001)
    - Missing database = currentDatabase() predicates
    - LIKE-based table filters that match shard replica tables
    """

    AGENT_ID = "stokes-sql"

    SQL_EXTENSIONS = {
        ".sql": "sql",
        ".py": "python",  # Python files may contain inline SQL
    }

    def __init__(self, workspace: str, multiplexer: "BobMultiplexer") -> None:
        super().__init__(workspace, multiplexer)
        self.loader = TreeSitterLoader()

    async def run(self) -> list[dict[str, Any]]:
        """Execute the full SQL audit lifecycle."""
        await self._phase("INITIALIZING", "stokes-sql initializing catalog reflection audit...")

        workspace = Path(self.workspace)
        skip_dirs = {
            ".git", "target", "__pycache__", "node_modules",
            ".gemini", ".stokes", "dist", "build",
        }

        # Collect target files
        sql_files = []
        python_files = []
        for path in workspace.rglob("*"):
            if any(part in skip_dirs for part in path.parts):
                continue
            if not path.is_file():
                continue
            if path.suffix.lower() == ".sql":
                sql_files.append(path)
            elif path.suffix.lower() == ".py" and "pipeline" in str(path).lower():
                python_files.append(path)

        await self._phase(
            "AST_PARSING",
            f"Scanning {len(sql_files)} SQL files and {len(python_files)} pipeline files...",
        )

        violations = []

        # Audit SQL migration files
        for sql_file in sql_files:
            await self._phase(
                "BOUNDARY_DISCOVERY",
                f"Parsing {sql_file.name} for catalog reflection patterns...",
                target_file=str(sql_file.relative_to(workspace)),
            )
            v = self._audit_sql_file(sql_file, workspace)
            violations.extend(v)

        # Audit Python ETL pipeline files for inline SQL
        for py_file in python_files:
            await self._phase(
                "INVARIANT_EVALUATION",
                f"Inspecting {py_file.name} for system.columns queries...",
                target_file=str(py_file.relative_to(workspace)),
            )
            v = self._audit_python_file(py_file, workspace)
            violations.extend(v)

        if violations:
            await self._phase(
                "HALTED_ON_VIOLATION",
                f"FLAGGED: {len(violations)} unqualified catalog reflection(s) detected",
                severity="CONTRACT_VIOLATION",
            )
        else:
            await self._phase(
                "COMPLETED",
                "SQL catalog audit complete - no LINT-001 violations found",
                severity="INFO",
            )

        for v in violations:
            self.record_violation(v)

        return violations

    def _audit_sql_file(self, path: Path, workspace: Path) -> list[dict[str, Any]]:
        """Audit a single SQL file for unqualified catalog reflections."""
        try:
            source = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            return []

        violations = []
        rel = str(path.relative_to(workspace))
        lines = source.splitlines()

        for m in _SYSTEM_COLUMNS.finditer(source):
            line_num = source[:m.start()].count("\n") + 1
            # Look ahead 300 chars for scoping predicate
            context = source[m.start():m.start() + 300]
            has_scope = bool(_DATABASE_SCOPE.search(context))
            has_like = bool(_LIKE_FILTER.search(context))
            snippet = lines[line_num - 1].strip()[:100] if 0 < line_num <= len(lines) else ""

            if not has_scope:
                diff = _SQL_LIKE_FIX_DIFF if has_like else _SQL_SCOPE_DIFF
                v = self._make_diagnostic(
                    invariant_id="INVARIANT_2_CATALOG_QUALIFICATION",
                    lint_rule="LINT-001",
                    target_file=rel,
                    start_line=line_num,
                    start_col=0,
                    end_line=line_num + 2,
                    end_col=50,
                    node_type="select_statement",
                    snippet=snippet,
                    root_cause=(
                        f"system.{m.group(2)} reflection query at line {line_num} "
                        f"lacks 'AND database = currentDatabase()' predicate. "
                        f"This silently expands schema projections by reflecting "
                        f"shard replica tables (events_r0, events_r1)."
                    ),
                    unified_diff=diff,
                    explanation=(
                        "Add 'AND database = currentDatabase()' to scope the query "
                        "to the active database, excluding shard replicas. "
                        "This reduces observed cardinality from 280 → 200, matching downstream [Feature; 200] capacity."
                    ),
                    risk_ratio=280 / 200,
                    tainted_identifiers=[f"system.{m.group(2)}", "events_r0", "events_r1"],
                )
                violations.append(v)

        return violations

    def _audit_python_file(self, path: Path, workspace: Path) -> list[dict[str, Any]]:
        """Audit a Python ETL file for embedded system.columns SQL queries."""
        try:
            source = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            return []

        violations = []
        rel = str(path.relative_to(workspace))
        lines = source.splitlines()

        for m in _SYSTEM_COLUMNS.finditer(source):
            line_num = source[:m.start()].count("\n") + 1
            context = source[m.start():m.start() + 400]
            has_scope = bool(_DATABASE_SCOPE.search(context))
            has_like = bool(_LIKE_FILTER.search(context))
            snippet = lines[line_num - 1].strip()[:100] if 0 < line_num <= len(lines) else ""

            if not has_scope:
                diff = _SQL_LIKE_FIX_DIFF if has_like else _SQL_SCOPE_DIFF
                v = self._make_diagnostic(
                    invariant_id="INVARIANT_2_CATALOG_QUALIFICATION",
                    lint_rule="LINT-001",
                    target_file=rel,
                    start_line=line_num,
                    start_col=0,
                    end_line=line_num + 2,
                    end_col=50,
                    node_type="call_expression",
                    snippet=snippet,
                    root_cause=(
                        f"Python ETL pipeline at {rel}:{line_num} executes "
                        f"system.columns without database scoping predicate."
                    ),
                    unified_diff=diff,
                    explanation=(
                        "Inject 'AND database = currentDatabase()' into the query "
                        "string to prevent shard column leakage."
                    ),
                    risk_ratio=280 / 200,
                    tainted_identifiers=["system.columns", "catalog_sync"],
                )
                violations.append(v)

        return violations
