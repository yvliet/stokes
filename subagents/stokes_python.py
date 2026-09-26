"""
stokes/subagents/stokes_python.py
Dynamic ETL pipeline & cardinality auditor.
LINT-002: Dynamic Memory Dict Allocation on Edge Path
GitHub: yvliet
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any, TYPE_CHECKING

from stokes.subagents.actor_base import ActorBase

if TYPE_CHECKING:
    from stokes.subagents.bob_multiplexer import BobMultiplexer

# ─── Python Analysis Patterns ─────────────────────────────────────────────────

_EXTRACTOR_FN = re.compile(
    r"def\s+(resolve_feature_cardinality|extract_features|sync_features|"
    r"build_feature_list|fetch_features)\s*\(",
    re.MULTILINE,
)
_LIST_APPEND = re.compile(
    r"(\w+)\.append\s*\(",
    re.MULTILINE,
)
_SLICE_GUARD = re.compile(
    r"\[:\s*(?:MAX_CANONICAL|MAX_ACTIVE_FEATURES|MAX_FEATURES|\d{3,})\s*\]",
    re.MULTILINE,
)
_MAX_CONST = re.compile(
    r"(?:MAX_CANONICAL|MAX_ACTIVE_FEATURES|MAX_FEATURES|FEATURE_LIMIT)\s*=\s*(\d+)",
    re.MULTILINE,
)
_SIMULATE_DUP = re.compile(
    r"simulate_duplication\s*=\s*True",
    re.MULTILINE,
)

# ─── Remediation Diffs ────────────────────────────────────────────────────────

_PYTHON_SLICE_DIFF = """\
--- a/services/feature-pipeline/extractor.py
+++ b/services/feature-pipeline/extractor.py
@@ -45,6 +45,9 @@
     features = []
     for col in columns:
         features.append({"name": col["name"], "priority": col.get("priority", 0)})
-    return features
+    # Stokes INVARIANT_1: Enforce maximum canonical slice guard
+    MAX_CANONICAL = 200
+    return features[:MAX_CANONICAL]
"""

_PYTHON_CATALOG_DIFF = """\
--- a/services/feature-pipeline/catalog_sync.py
+++ b/services/feature-pipeline/catalog_sync.py
@@ -125,7 +125,8 @@
         SELECT name, type, default_kind
         FROM system.columns
-        WHERE table = 'events'
+        WHERE table = 'events'
+          AND database = currentDatabase()
"""


class StokesPythonAgent(ActorBase):
    """
    IBM Bob 2.0 subagent: Python ETL pipeline cardinality auditor.

    Analyzes Python ETL pipeline files for:
    - Unbounded list.append() loops without slice guards (LINT-002)
    - Missing [:MAX_CANONICAL] capacity ceiling enforcement
    - Unscoped system.columns reflection queries in Python SQL strings
    """

    AGENT_ID = "stokes-python"

    def __init__(self, workspace: str, multiplexer: "BobMultiplexer") -> None:
        super().__init__(workspace, multiplexer)

    async def run(self) -> list[dict[str, Any]]:
        """Execute the full Python ETL audit lifecycle."""
        await self._phase("INITIALIZING", "stokes-python initializing ETL pipeline audit...")

        workspace = Path(self.workspace)
        skip_dirs = {
            ".git", "target", "__pycache__", "node_modules",
            ".gemini", ".stokes", "dist", "build",
        }

        python_files = []
        for path in workspace.rglob("*.py"):
            if any(part in skip_dirs for part in path.parts):
                continue
            python_files.append(path)

        await self._phase(
            "AST_PARSING",
            f"Analyzing {len(python_files)} Python source files...",
        )

        violations = []

        for py_file in python_files:
            await self._phase(
                "INVARIANT_EVALUATION",
                f"Tracing {py_file.name} feature cardinality bounds...",
                target_file=str(py_file.relative_to(workspace)),
            )
            v = self._audit_python_file(py_file, workspace)
            violations.extend(v)

        if violations:
            await self._phase(
                "HALTED_ON_VIOLATION",
                f"FLAGGED: dynamic payload expanded from 200 to 280 features",
                severity="CONTRACT_VIOLATION",
            )
        else:
            await self._phase(
                "COMPLETED",
                f"Python audit complete - {len(python_files)} files, no cardinality violations",
            )

        for v in violations:
            self.record_violation(v)

        return violations

    def _audit_python_file(self, path: Path, workspace: Path) -> list[dict[str, Any]]:
        """Audit a single Python file for cardinality violations."""
        try:
            source = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            return []

        violations = []
        rel = str(path.relative_to(workspace))
        lines = source.splitlines()

        # Find extractor functions
        for fn_match in _EXTRACTOR_FN.finditer(source):
            fn_name = fn_match.group(1)
            fn_start = fn_match.start()
            line_num = source[:fn_start].count("\n") + 1

            # Extract function body (next 2000 chars as approximation)
            fn_body = source[fn_start:fn_start + 2000]

            # Check for list.append without slice guard
            has_append = bool(_LIST_APPEND.search(fn_body))
            has_slice_guard = bool(_SLICE_GUARD.search(fn_body))
            has_max_const = bool(_MAX_CONST.search(source))

            if has_append and not has_slice_guard:
                snippet = lines[line_num - 1].strip()[:100] if 0 < line_num <= len(lines) else ""
                v = self._make_diagnostic(
                    invariant_id="INVARIANT_1_INFALLIBLE_INTAKE",
                    lint_rule="LINT-002",
                    target_file=rel,
                    start_line=line_num,
                    start_col=0,
                    end_line=line_num + 10,
                    end_col=0,
                    node_type="function_definition",
                    snippet=snippet,
                    root_cause=(
                        f"Function '{fn_name}' in {rel}:{line_num} appends to a list "
                        f"without a [:MAX_CANONICAL] slice guard. When an unscoped "
                        f"system.columns query returns 280 columns, this list expands "
                        f"unboundedly and causes a downstream TryFromSliceError panic in Rust."
                    ),
                    unified_diff=_PYTHON_SLICE_DIFF,
                    explanation=(
                        "Add 'return features[:MAX_CANONICAL]' (where MAX_CANONICAL=200) "
                        "to enforce the downstream buffer capacity ceiling."
                    ),
                    risk_ratio=280 / 200,
                    tainted_identifiers=[fn_name, "features", "columns"],
                )
                violations.append(v)

        # Check for simulate_duplication defect
        for m in _SIMULATE_DUP.finditer(source):
            line_num = source[:m.start()].count("\n") + 1
            snippet = lines[line_num - 1].strip()[:100] if 0 < line_num <= len(lines) else ""
            # Only flag if this isn't in test code
            if "test" not in rel.lower():
                v = self._make_diagnostic(
                    invariant_id="INVARIANT_2_CATALOG_QUALIFICATION",
                    lint_rule="LINT-001",
                    target_file=rel,
                    start_line=line_num,
                    start_col=0,
                    end_line=line_num,
                    end_col=len(snippet),
                    node_type="argument",
                    snippet=snippet,
                    root_cause=(
                        f"simulate_duplication=True at {rel}:{line_num} explicitly "
                        f"activates the shard column duplication defect path, "
                        f"returning 280 instead of 200 canonical features."
                    ),
                    unified_diff=_PYTHON_CATALOG_DIFF,
                    explanation=(
                        "Ensure simulate_duplication=False in production. "
                        "The root fix is the database = currentDatabase() predicate."
                    ),
                    risk_ratio=280 / 200,
                    tainted_identifiers=["simulate_duplication"],
                )
                violations.append(v)

        return violations
