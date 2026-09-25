"""
stokes/subagents/actor_base.py
Abstract base worker coroutine & IPC event emitter for IBM Bob 2.0 subagents.
All domain-specific subagents (stokes-sql, stokes-python, etc.) extend this base.
GitHub: yvliet
"""

from __future__ import annotations

import asyncio
import json
import struct
import time
import uuid
from abc import ABC, abstractmethod
from dataclasses import asdict, dataclass, field
from typing import Any, TYPE_CHECKING

if TYPE_CHECKING:
    from stokes.subagents.bob_multiplexer import BobMultiplexer


# ─── IPC Wire Protocol ────────────────────────────────────────────────────────

MAX_FRAME_BUDGET = 0x01000000  # 16 MB


def encode_frame(payload: dict[str, Any]) -> bytes:
    """
    Encode a dict as a length-prefixed binary frame.
    Frame: [4-byte big-endian uint32 length][UTF-8 JSON body]
    """
    body = json.dumps(payload, separators=(",", ":")).encode("utf-8")
    if len(body) > MAX_FRAME_BUDGET:
        raise ValueError(f"Frame exceeds 16 MB budget ({len(body)} bytes)")
    header = struct.pack(">I", len(body))
    return header + body


def decode_frame(data: bytes) -> dict[str, Any]:
    """
    Decode a length-prefixed binary frame back to a dict.
    Raises ValueError if frame is malformed or oversized.
    """
    if len(data) < 4:
        raise ValueError("Frame too short: missing length header")
    (length,) = struct.unpack(">I", data[:4])
    if length > MAX_FRAME_BUDGET:
        raise ValueError(f"Frame length {length} exceeds 16 MB budget")
    body = data[4 : 4 + length]
    return json.loads(body.decode("utf-8"))


# ─── Typed Progress Event ─────────────────────────────────────────────────────

@dataclass
class SubagentProgressEvent:
    """Typed progress event emitted by subagents over the IPC event bus."""
    subagent_id: str
    phase: str
    target_file: str
    line_offset: int
    ast_node_type: str
    status_message: str
    severity: str
    event_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    timestamp_ns: int = field(default_factory=time.monotonic_ns)
    column_offset: int = 0
    ast_symbol_name: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    def to_frame(self) -> bytes:
        return encode_frame(self.to_dict())


# ─── Abstract Base Actor ──────────────────────────────────────────────────────

class ActorBase(ABC):
    """
    Abstract base class for all Stokes IBM Bob 2.0 subagent workers.

    Provides:
    - Structured event emission over the multiplexer event bus
    - Length-prefixed IPC frame encoding
    - Lifecycle phases matching the SubagentProgressEvent schema
    - Async coroutine execution model
    """

    AGENT_ID: str = "stokes-base"

    def __init__(self, workspace: str, multiplexer: "BobMultiplexer") -> None:
        self.workspace = workspace
        self.mux = multiplexer
        self._violations: list[dict[str, Any]] = []

    async def emit(
        self,
        phase: str,
        status_message: str,
        target_file: str = "",
        line_offset: int = 1,
        ast_node_type: str = "unknown",
        severity: str = "INFO",
        ast_symbol_name: str | None = None,
    ) -> None:
        """
        Emit a SubagentProgressEvent to the multiplexer event bus.
        Encodes as a length-prefixed binary frame.
        """
        event = SubagentProgressEvent(
            subagent_id=self.AGENT_ID,
            phase=phase,
            target_file=target_file,
            line_offset=max(1, line_offset),
            ast_node_type=ast_node_type,
            status_message=status_message,
            severity=severity,
            ast_symbol_name=ast_symbol_name,
        )
        await self.mux.publish(event.to_dict())

    def record_violation(self, violation: dict[str, Any]) -> None:
        """Record a ContractViolationDiagnostic."""
        self._violations.append(violation)

    @abstractmethod
    async def run(self) -> list[dict[str, Any]]:
        """
        Execute the subagent's full analysis lifecycle.
        Returns a list of ContractViolationDiagnostic dicts.
        """
        ...

    async def _phase(
        self,
        phase: str,
        message: str,
        target_file: str = "",
        severity: str = "INFO",
    ) -> None:
        """Convenience wrapper: emit a phase transition event."""
        await self.emit(
            phase=phase,
            status_message=message,
            target_file=target_file,
            severity=severity,
            ast_node_type=phase.lower(),
        )

    def _make_diagnostic(
        self,
        invariant_id: str,
        lint_rule: str,
        target_file: str,
        start_line: int,
        start_col: int,
        end_line: int,
        end_col: int,
        node_type: str,
        snippet: str,
        root_cause: str,
        unified_diff: str,
        explanation: str,
        risk_ratio: float | None = None,
        tainted_identifiers: list[str] | None = None,
    ) -> dict[str, Any]:
        """Build a fully-typed ContractViolationDiagnostic dict."""
        import datetime

        diag_id = f"DIAG-{datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%d')}-{self.AGENT_ID}-{len(self._violations) + 1:03d}"
        return {
            "diagnostic_id": diag_id,
            "subagent_id": self.AGENT_ID,
            "invariant_id": invariant_id,
            "lint_rule": lint_rule,
            "target_file": target_file,
            "span": {
                "start_line": start_line,
                "start_col": start_col,
                "end_line": end_line,
                "end_col": end_col,
            },
            "ast_context": {
                "node_type": node_type,
                "surrounding_snippet": snippet,
                "tainted_identifiers": tainted_identifiers or [],
            },
            "root_cause": root_cause,
            "cardinality_risk_ratio": risk_ratio,
            "synthesized_remediation": {
                "unified_diff": unified_diff,
                "suggested_ast_replacement": None,
                "explanation": explanation,
            },
        }
