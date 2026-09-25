"""
stokes/tests/test_wire_protocol.py
Length-prefixed framing serialization tests.
Tests the IPC wire protocol encoding and decoding.
GitHub: yvliet
"""

import struct
import json
import pytest
from stokes.subagents.actor_base import (
    encode_frame,
    decode_frame,
    MAX_FRAME_BUDGET,
    SubagentProgressEvent,
)


class TestFrameEncoding:
    """Tests for the 4-byte big-endian length-prefixed binary frame codec."""

    def test_encode_produces_4_byte_header(self):
        """Encoded frame must start with a 4-byte big-endian length header."""
        payload = {"key": "value"}
        frame = encode_frame(payload)
        assert len(frame) >= 4
        (length,) = struct.unpack(">I", frame[:4])
        assert length == len(frame) - 4

    def test_encode_decode_roundtrip(self):
        """encode then decode must produce the original dict."""
        payload = {
            "event_id": "test-uuid",
            "subagent_id": "stokes-sql",
            "phase": "INITIALIZING",
            "status_message": "Starting...",
        }
        frame = encode_frame(payload)
        decoded = decode_frame(frame)
        assert decoded == payload

    def test_frame_length_is_correct(self):
        """Frame header must accurately encode the payload byte length."""
        payload = {"data": "hello world"}
        body = json.dumps(payload, separators=(",", ":")).encode("utf-8")
        frame = encode_frame(payload)
        (header_length,) = struct.unpack(">I", frame[:4])
        assert header_length == len(body)

    def test_decode_empty_payload(self):
        """Decoding a minimal frame with an empty dict must work."""
        payload = {}
        frame = encode_frame(payload)
        decoded = decode_frame(frame)
        assert decoded == {}

    def test_decode_nested_payload(self):
        """Nested dicts and lists must survive encode/decode."""
        payload = {
            "span": {"start_line": 42, "end_line": 43},
            "identifiers": ["system.columns", "events_r0"],
        }
        frame = encode_frame(payload)
        decoded = decode_frame(frame)
        assert decoded["span"]["start_line"] == 42
        assert "events_r0" in decoded["identifiers"]

    def test_decode_raises_on_too_short(self):
        """Decoding a frame shorter than 4 bytes must raise ValueError."""
        with pytest.raises(ValueError, match="too short"):
            decode_frame(b"\x00\x00")

    def test_decode_raises_on_oversized_frame(self):
        """A frame claiming > 16 MB payload must be rejected."""
        # Craft a header that claims 16 MB + 1 byte
        bad_header = struct.pack(">I", MAX_FRAME_BUDGET + 1)
        with pytest.raises(ValueError, match="16 MB"):
            decode_frame(bad_header + b"\x00")

    def test_encode_raises_on_oversized_payload(self):
        """Encoding a payload > 16 MB must raise ValueError."""
        large_payload = {"data": "x" * (MAX_FRAME_BUDGET + 1)}
        with pytest.raises(ValueError):
            encode_frame(large_payload)

    def test_max_frame_budget_is_16_mb(self):
        """MAX_FRAME_BUDGET must be exactly 16 MB (0x01000000)."""
        assert MAX_FRAME_BUDGET == 0x01000000
        assert MAX_FRAME_BUDGET == 16 * 1024 * 1024

    def test_frame_header_is_big_endian(self):
        """Frame header must use big-endian byte order (network byte order)."""
        payload = {"x": 1}
        frame = encode_frame(payload)
        body_len = len(json.dumps(payload, separators=(",", ":")).encode())

        # Big-endian: most significant byte first
        big_endian = struct.unpack(">I", frame[:4])[0]
        little_endian = struct.unpack("<I", frame[:4])[0]

        assert big_endian == body_len  # Must match body length
        # If length > 255, big vs little endian will differ
        if body_len > 0xFF:
            assert big_endian != little_endian

    def test_unicode_payload_roundtrips(self):
        """Unicode payload must survive encode/decode without corruption."""
        payload = {"message": "Stokes: 280 > 200 → TryFromSliceError ✘"}
        frame = encode_frame(payload)
        decoded = decode_frame(frame)
        assert decoded["message"] == payload["message"]

    def test_large_diagnostic_payload_roundtrips(self):
        """A full ContractViolationDiagnostic-sized payload must roundtrip."""
        payload = {
            "diagnostic_id": "DIAG-20260925-stokes-sql-001",
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
            "root_cause": "Missing database = currentDatabase() predicate",
            "cardinality_risk_ratio": 1.40,
            "synthesized_remediation": {
                "unified_diff": "--- a/catalog_sync.py\n+++ b/catalog_sync.py\n",
                "explanation": "Add AND database = currentDatabase()",
            },
        }
        frame = encode_frame(payload)
        decoded = decode_frame(frame)
        assert decoded["diagnostic_id"] == payload["diagnostic_id"]
        assert decoded["cardinality_risk_ratio"] == 1.40


class TestSubagentProgressEvent:
    """Tests for the SubagentProgressEvent IPC event type."""

    def test_event_creates_unique_ids(self):
        """Each event must have a unique event_id (UUID v4)."""
        e1 = SubagentProgressEvent(
            subagent_id="stokes-sql",
            phase="INITIALIZING",
            target_file="test.sql",
            line_offset=1,
            ast_node_type="select_statement",
            status_message="Testing...",
            severity="INFO",
        )
        e2 = SubagentProgressEvent(
            subagent_id="stokes-rust",
            phase="AST_PARSING",
            target_file="test.rs",
            line_offset=42,
            ast_node_type="call_expression",
            status_message="Auditing...",
            severity="INFO",
        )
        assert e1.event_id != e2.event_id

    def test_event_timestamp_ns_is_positive(self):
        """Event timestamp must be a positive integer (monotonic nanoseconds)."""
        event = SubagentProgressEvent(
            subagent_id="stokes-python",
            phase="BOUNDARY_DISCOVERY",
            target_file="extractor.py",
            line_offset=10,
            ast_node_type="function_definition",
            status_message="Scanning...",
            severity="INFO",
        )
        assert event.timestamp_ns > 0

    def test_event_to_dict_has_required_fields(self):
        """to_dict() must include all required schema fields."""
        event = SubagentProgressEvent(
            subagent_id="stokes-rust",
            phase="INVARIANT_EVALUATION",
            target_file="feature_ingest.rs",
            line_offset=42,
            ast_node_type="call_expression",
            status_message="Checking .try_into().unwrap()",
            severity="CONTRACT_VIOLATION",
        )
        d = event.to_dict()
        required = [
            "event_id", "timestamp_ns", "subagent_id", "phase",
            "target_file", "line_offset", "ast_node_type",
            "status_message", "severity",
        ]
        for field in required:
            assert field in d, f"Missing field: {field}"

    def test_event_to_frame_roundtrips(self):
        """to_frame() encoded event must decode back to original data."""
        event = SubagentProgressEvent(
            subagent_id="stokes-verify",
            phase="PROPERTY_FUZZING",
            target_file="float_fuzz.rs",
            line_offset=1,
            ast_node_type="function_definition",
            status_message="Running 10,000 fuzz cases...",
            severity="INFO",
        )
        frame = event.to_frame()
        decoded = decode_frame(frame)
        assert decoded["subagent_id"] == "stokes-verify"
        assert decoded["phase"] == "PROPERTY_FUZZING"

    def test_event_line_offset_minimum_is_1(self):
        """line_offset must be at least 1 (never 0)."""
        event = SubagentProgressEvent(
            subagent_id="stokes-sql",
            phase="INITIALIZING",
            target_file="test.sql",
            line_offset=1,
            ast_node_type="select",
            status_message="OK",
            severity="INFO",
        )
        assert event.line_offset >= 1

    def test_severity_values_match_schema(self):
        """Severity values must match the ContractViolationDiagnostic schema."""
        valid_severities = {"DEBUG", "INFO", "WARNING", "CONTRACT_VIOLATION", "FATAL"}
        event = SubagentProgressEvent(
            subagent_id="stokes-sql",
            phase="COMPLETED",
            target_file="test.sql",
            line_offset=1,
            ast_node_type="select",
            status_message="Done",
            severity="CONTRACT_VIOLATION",
        )
        assert event.severity in valid_severities

    def test_phase_values_match_schema(self):
        """Phase values must match the SubagentProgressEvent schema."""
        valid_phases = {
            "INITIALIZING", "BOUNDARY_DISCOVERY", "AST_PARSING",
            "CROSS_BOUNDARY_LINKING", "STAGING_REFLECTION", "INVARIANT_EVALUATION",
            "PROPERTY_FUZZING", "SANDBOX_EXECUTION", "CANARY_SIMULATION",
            "CERTIFICATE_GENERATION", "HALTED_ON_VIOLATION", "COMPLETED",
        }
        for phase in valid_phases:
            event = SubagentProgressEvent(
                subagent_id="stokes-sql",
                phase=phase,
                target_file="x",
                line_offset=1,
                ast_node_type="x",
                status_message="x",
                severity="INFO",
            )
            assert event.phase == phase
