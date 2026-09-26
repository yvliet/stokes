"""
Unit tests for enterprise configurable sinks, fail-fast boundary serialization (LINT-006),
dynamic upper-bounded buffer capacity, and poly-repo Tolerant Reader sequence verification.

Author: Yuliet Li (GitHub: yvliet)
"""

import argparse
import json
import pytest
from pathlib import Path
from unittest.mock import AsyncMock, patch

from stokes.subagents.boundary_discovery import BoundaryDiscovery, load_stokes_config
from stokes.subagents.stokes_python import StokesPythonAgent
from stokes.subagents.stokes_rust import StokesRustAgent
from stokes.subagents.bob_multiplexer import AgentMultiplexer
from stokes.mcp.server import StokesMcpServer
from stokes.cli.main import cmd_check


@pytest.mark.asyncio
async def test_load_stokes_config_defaults(tmp_path: Path):
    """Test that default sinks are returned when no stokes.yaml is present."""
    cfg = load_stokes_config(tmp_path)
    assert "sinks" in cfg
    sink_names = [s["name"] for s in cfg["sinks"]]
    assert "kv_put" in sink_names
    assert "kafka_send" in sink_names


@pytest.mark.asyncio
async def test_load_stokes_config_custom_sinks(tmp_path: Path):
    """Test custom sink registration via stokes.yaml."""
    config_file = tmp_path / "stokes.yaml"
    config_file.write_text(
        """
serialization_sinks:
  - name: "feature_store.publish_snapshot"
    pattern: "publish_snapshot"
    payload_arg: 1
    default_capacity: 512
        """.strip(),
        encoding="utf-8",
    )

    cfg = load_stokes_config(str(tmp_path))
    sink_names = [s["name"] for s in cfg["sinks"]]
    assert "feature_store.publish_snapshot" in sink_names


@pytest.mark.asyncio
async def test_boundary_discovery_custom_sink_and_fail_fast(tmp_path: Path):
    """Test discovery of custom sinks and fail-fast vs blind slice detection."""
    cfg_file = tmp_path / "stokes.yaml"
    cfg_file.write_text(
        """
serialization_sinks:
  - name: "custom_publisher.emit"
    pattern: "custom_publisher.emit"
    payload_arg: 0
    default_capacity: 256
        """.strip(),
        encoding="utf-8",
    )

    py_file = tmp_path / "emitter.py"
    py_file.write_text(
        """
def send_events(data):
    custom_publisher.emit(data)
        """.strip(),
        encoding="utf-8",
    )

    disc = BoundaryDiscovery(str(tmp_path))
    contracts = await disc.scan()
    sinks = contracts.get("boundary_serialization_sinks", [])
    assert len(sinks) >= 1
    custom_sink = [s for s in sinks if s["sink_name"] == "custom_publisher.emit"][0]
    assert custom_sink["bounded"] is False
    assert custom_sink["fail_fast_guarded"] is False


@pytest.mark.asyncio
async def test_lint_006_blind_slice_flagged_in_python_agent(tmp_path: Path):
    """Test that LINT-006 is raised when code performs blind slice truncation."""
    py_dir = tmp_path / "services" / "feature-pipeline"
    py_dir.mkdir(parents=True)
    py_file = py_dir / "catalog_sync.py"
    py_file.write_text(
        """
def export_signals(signals):
    # Blind slicing anti-pattern
    truncated = signals[:200]
    return truncated
        """.strip(),
        encoding="utf-8",
    )

    mux = AgentMultiplexer()
    agent = StokesPythonAgent(str(tmp_path), mux)
    violations = await agent.run()

    rules = [v["lint_rule"] for v in violations]
    assert "LINT-006" in rules
    lint_006 = [v for v in violations if v["lint_rule"] == "LINT-006"][0]
    assert "blind slice truncation" in lint_006["root_cause"].lower()


@pytest.mark.asyncio
async def test_rust_agent_upper_bounded_capacity(tmp_path: Path):
    """Test that Stokes parses [Feature; 512] or ArrayVec<Feature, 512> as capacity 512."""
    rs_dir = tmp_path / "crates" / "proxy" / "src"
    rs_dir.mkdir(parents=True)
    rs_file = rs_dir / "ingest.rs"
    rs_file.write_text(
        """
pub struct FeatureBuffer {
    buffer: [Feature; 512],
}
        """.strip(),
        encoding="utf-8",
    )

    disc = BoundaryDiscovery(str(tmp_path))
    contracts = await disc.scan()
    assert contracts["downstream_capacity"] == 512


@pytest.mark.asyncio
async def test_mcp_verify_patch_rejects_blind_slice():
    """Test that stokes_verify_patch MCP tool rejects blind slice patches."""
    server = StokesMcpServer()
    req = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "tools/call",
        "params": {
            "name": "stokes_verify_patch",
            "arguments": {
                "patch_content": "let payload = raw_bytes[:200];",
                "target_file": "ingest.rs",
            },
        },
    }

    res = await server.handle_request(req)
    res_text = res["result"]["content"][0]["text"]
    res_data = json.loads(res_text)
    assert res_data["verification"] == "REJECTED"
    assert "LINT-006" in res_data["diagnostic_reason"]


@pytest.mark.asyncio
async def test_mcp_verify_patch_accepts_fail_fast_guard():
    """Test that stokes_verify_patch MCP tool accepts fail-fast capacity checks."""
    server = StokesMcpServer()
    req = {
        "jsonrpc": "2.0",
        "id": 2,
        "method": "tools/call",
        "params": {
            "name": "stokes_verify_patch",
            "arguments": {
                "patch_content": (
                    "if payload.len() > 200 {\n"
                    "    return Err(ContractError::CapacityExceeded);\n"
                    "}"
                ),
                "target_file": "ingest.rs",
            },
        },
    }

    res = await server.handle_request(req)
    res_text = res["result"]["content"][0]["text"]
    res_data = json.loads(res_text)
    assert res_data["verification"] == "VERIFIED_SAFE"


@pytest.mark.asyncio
async def test_poly_repo_sequence_verification(tmp_path: Path):
    """Test poly-repo sequence verification where consumer capacity must exceed or equal producer cardinality."""
    consumer_dir = tmp_path / "consumer_repo"
    producer_dir = tmp_path / "producer_repo"
    consumer_dir.mkdir()
    producer_dir.mkdir()

    # Consumer with capacity 512
    (consumer_dir / "buffer.rs").write_text("pub struct B { buf: [Feature; 512] }", encoding="utf-8")

    # Producer with unscoped query yielding 280
    (producer_dir / "catalog.sql").write_text(
        "SELECT name, type FROM system.columns WHERE table = 'events'",
        encoding="utf-8",
    )

    args_valid = argparse.Namespace(
        consumer=str(consumer_dir),
        producer=str(producer_dir),
        path=".",
    )
    rc_valid = await cmd_check(args_valid)
    assert rc_valid == 0  # Consumer 512 >= Producer 280: Passed

    # Consumer with small capacity 200
    (consumer_dir / "buffer.rs").write_text("pub struct B { buf: [Feature; 200] }", encoding="utf-8")
    rc_invalid = await cmd_check(args_valid)
    assert rc_invalid == 1  # Producer 280 > Consumer 200: Fatal sequence violation
