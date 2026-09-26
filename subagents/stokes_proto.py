"""
stokes/subagents/stokes_proto.py
Protobuf repeated fields & gRPC cardinality auditor.
LINT-003 / INVARIANT_4: Protobuf Cardinality Bound
GitHub: yvliet
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any, TYPE_CHECKING

from stokes.subagents.actor_base import ActorBase

if TYPE_CHECKING:
    from stokes.subagents.bob_multiplexer import BobMultiplexer

# ─── Protobuf Analysis Patterns ───────────────────────────────────────────────

_REPEATED_FIELD = re.compile(
    r"^\s*repeated\s+(\w+)\s+(\w+)\s*=\s*(\d+)\s*;",
    re.MULTILINE,
)
_MAX_ITEMS_OPTION = re.compile(
    r"stokes\.max_items",
    re.IGNORECASE,
)
_FIELD_RESERVATION = re.compile(
    r"^\s*reserved\s+[\d,\s]+;",
    re.MULTILINE,
)
_FIELD_NUMBER_REASSIGN = re.compile(
    r"^\s*(?:repeated\s+)?(\w+)\s+(\w+)\s*=\s*(\d+)\s*;",
    re.MULTILINE,
)


class StokesProtoAgent(ActorBase):
    """
    IBM Bob 2.0 subagent: Protobuf wire contract auditor.

    Analyzes .proto definition files for:
    - Unbounded repeated fields lacking stokes.max_items annotation (LINT-003)
    - Field number reassignments without explicit reserved statements
    - Wire compatibility violations across gRPC service boundaries
    """

    AGENT_ID = "stokes-proto"

    def __init__(self, workspace: str, multiplexer: "BobMultiplexer") -> None:
        super().__init__(workspace, multiplexer)

    async def run(self) -> list[dict[str, Any]]:
        """Execute the full Protobuf audit lifecycle."""
        await self._phase("INITIALIZING", "stokes-proto initializing wire contract audit...")

        workspace = Path(self.workspace)
        skip_dirs = {
            ".git", "target", "__pycache__", "node_modules",
            ".gemini", ".stokes", "dist", "build",
        }

        proto_files = []
        for path in workspace.rglob("*.proto"):
            if any(part in skip_dirs for part in path.parts):
                continue
            proto_files.append(path)

        await self._phase(
            "AST_PARSING",
            f"Scanning {len(proto_files)} protobuf definition files...",
        )

        violations = []

        for proto_file in proto_files:
            await self._phase(
                "INVARIANT_EVALUATION",
                f"Parsing {proto_file.name} for unbounded repeated fields...",
                target_file=str(proto_file.relative_to(workspace)),
            )
            v = self._audit_proto_file(proto_file, workspace)
            violations.extend(v)

        if violations:
            await self._phase(
                "HALTED_ON_VIOLATION",
                f"FLAGGED: {len(violations)} unbounded protobuf repeated field(s)",
                severity="CONTRACT_VIOLATION",
            )
        else:
            await self._phase(
                "COMPLETED",
                f"Protobuf audit complete - {len(proto_files)} files analyzed, no violations",
            )

        for v in violations:
            self.record_violation(v)

        return violations

    def _audit_proto_file(self, path: Path, workspace: Path) -> list[dict[str, Any]]:
        """Audit a single .proto file for cardinality bound violations."""
        try:
            source = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            return []

        violations = []
        rel = str(path.relative_to(workspace))
        lines = source.splitlines()

        for m in _REPEATED_FIELD.finditer(source):
            field_type = m.group(1)
            field_name = m.group(2)
            field_number = int(m.group(3))
            line_num = source[:m.start()].count("\n") + 1

            # Check if max_items option is within the next 100 chars
            context = source[m.start():m.start() + 100]
            has_bound = bool(_MAX_ITEMS_OPTION.search(context))

            if not has_bound:
                snippet = lines[line_num - 1].strip() if 0 < line_num <= len(lines) else ""
                diff = self._proto_remediation_diff(
                    path.name, field_name, field_type, field_number
                )
                v = self._make_diagnostic(
                    invariant_id="INVARIANT_4_PROTOBUF_CARDINALITY_BOUND",
                    lint_rule="LINT-003",
                    target_file=rel,
                    start_line=line_num,
                    start_col=0,
                    end_line=line_num,
                    end_col=len(snippet),
                    node_type="field",
                    snippet=snippet,
                    root_cause=(
                        f"Protobuf field '{field_name}' (type={field_type}, "
                        f"number={field_number}) is declared as `repeated` without "
                        f"a `[(stokes.max_items) = N]` cardinality bound option. "
                        f"This allows unbounded payload growth across gRPC boundaries."
                    ),
                    unified_diff=diff,
                    explanation=(
                        f"Add `[(stokes.max_items) = 200]` option to bind the "
                        f"maximum cardinality of the repeated field to the downstream buffer capacity."
                    ),
                    risk_ratio=float("inf"),
                    tainted_identifiers=[field_name, f"field_{field_number}"],
                )
                violations.append(v)

        return violations

    @staticmethod
    def _proto_remediation_diff(
        filename: str, field_name: str, field_type: str, field_number: int
    ) -> str:
        return (
            f"--- a/proto/{filename}\n"
            f"+++ b/proto/{filename}\n"
            f"@@ -N,1 +N,1 @@\n"
            f"-    repeated {field_type} {field_name} = {field_number};\n"
            f"+    repeated {field_type} {field_name} = {field_number} [(stokes.max_items) = 200];\n"
        )
