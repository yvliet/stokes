"""
tests/test_mcp_server.py
Unit tests for Stokes Model Context Protocol (MCP) JSON-RPC stdio server.
GitHub: yvliet
"""

from __future__ import annotations

import json
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

from stokes.mcp.server import (
    MCP_PROTOCOL_VERSION,
    SERVER_NAME,
    SERVER_VERSION,
    STOKES_TOOLS,
    StokesMcpServer,
)


@pytest.fixture
def mcp_server():
    return StokesMcpServer()


@pytest.mark.asyncio
async def test_mcp_initialize(mcp_server):
    req = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "initialize",
        "params": {
            "protocolVersion": "2024-11-05",
            "capabilities": {},
            "clientInfo": {"name": "test-client", "version": "1.0"},
        },
    }
    resp = await mcp_server.handle_request(req)
    assert resp["jsonrpc"] == "2.0"
    assert resp["id"] == 1
    result = resp["result"]
    assert result["protocolVersion"] == MCP_PROTOCOL_VERSION
    assert result["serverInfo"]["name"] == SERVER_NAME
    assert result["serverInfo"]["version"] == SERVER_VERSION
    assert "tools" in result["capabilities"]


@pytest.mark.asyncio
async def test_mcp_ping(mcp_server):
    req = {"jsonrpc": "2.0", "id": 42, "method": "ping"}
    resp = await mcp_server.handle_request(req)
    assert resp["jsonrpc"] == "2.0"
    assert resp["id"] == 42
    assert resp["result"] == {}


@pytest.mark.asyncio
async def test_mcp_notifications_initialized(mcp_server):
    req = {"jsonrpc": "2.0", "method": "notifications/initialized"}
    resp = await mcp_server.handle_request(req)
    assert resp is None


@pytest.mark.asyncio
async def test_mcp_tools_list(mcp_server):
    req = {"jsonrpc": "2.0", "id": 2, "method": "tools/list"}
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 2
    tools = resp["result"]["tools"]
    tool_names = [t["name"] for t in tools]
    assert "stokes_scan" in tool_names
    assert "stokes_audit" in tool_names
    assert "stokes_verify" in tool_names
    assert "stokes_remediate" in tool_names
    assert "stokes_cert" in tool_names


@pytest.mark.asyncio
async def test_mcp_tool_call_scan(mcp_server, tmp_path):
    req = {
        "jsonrpc": "2.0",
        "id": 3,
        "method": "tools/call",
        "params": {
            "name": "stokes_scan",
            "arguments": {"workspace_path": str(tmp_path)},
        },
    }
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 3
    assert "result" in resp
    content = resp["result"]["content"][0]["text"]
    data = json.loads(content)
    assert "total_boundaries" in data
    assert "stokes_version" in data


@pytest.mark.asyncio
async def test_mcp_tool_call_verify(mcp_server):
    req = {
        "jsonrpc": "2.0",
        "id": 4,
        "method": "tools/call",
        "params": {
            "name": "stokes_verify",
            "arguments": {"cases": 100},
        },
    }
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 4
    content = resp["result"]["content"][0]["text"]
    data = json.loads(content)
    assert data["verification"] == "PASSED"
    assert data["total_cases_run"] == 100


@pytest.mark.asyncio
async def test_mcp_tool_call_remediate_patch(mcp_server, tmp_path):
    req = {
        "jsonrpc": "2.0",
        "id": 5,
        "method": "tools/call",
        "params": {
            "name": "stokes_remediate",
            "arguments": {
                "workspace_path": str(tmp_path),
                "export_patch": True,
            },
        },
    }
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 5
    assert "result" in resp
    text = resp["result"]["content"][0]["text"]
    assert "Remediation patch generated" in text
    patch_file = tmp_path / ".stokes" / "remediation.patch"
    assert patch_file.is_file()


@pytest.mark.asyncio
async def test_mcp_tool_call_unknown_tool(mcp_server):
    req = {
        "jsonrpc": "2.0",
        "id": 99,
        "method": "tools/call",
        "params": {
            "name": "unknown_tool",
            "arguments": {},
        },
    }
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 99
    assert "error" in resp
    assert resp["error"]["code"] == -32602


@pytest.mark.asyncio
async def test_mcp_unknown_method(mcp_server):
    req = {
        "jsonrpc": "2.0",
        "id": 100,
        "method": "non_existent_method",
    }
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 100
    assert "error" in resp
    assert resp["error"]["code"] == -32601


@pytest.mark.asyncio
async def test_mcp_resources_list(mcp_server):
    req = {"jsonrpc": "2.0", "id": 10, "method": "resources/list"}
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 10
    assert "result" in resp
    uris = [r["uri"] for r in resp["result"]["resources"]]
    assert "stokes://contracts" in uris
    assert "stokes://lockfile" in uris
    assert "stokes://diagnostics" in uris


@pytest.mark.asyncio
async def test_mcp_resources_read_contracts(mcp_server):
    req = {
        "jsonrpc": "2.0",
        "id": 11,
        "method": "resources/read",
        "params": {"uri": "stokes://contracts"},
    }
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 11
    assert "result" in resp
    contents = resp["result"]["contents"]
    assert len(contents) == 1
    assert contents[0]["uri"] == "stokes://contracts"
    assert contents[0]["mimeType"] == "application/json"


@pytest.mark.asyncio
async def test_mcp_prompts_list(mcp_server):
    req = {"jsonrpc": "2.0", "id": 12, "method": "prompts/list"}
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 12
    assert "result" in resp
    names = [p["name"] for p in resp["result"]["prompts"]]
    assert "stokes_refactor_contract" in names
    assert "stokes_explain_violation" in names


@pytest.mark.asyncio
async def test_mcp_prompts_get(mcp_server):
    req = {
        "jsonrpc": "2.0",
        "id": 13,
        "method": "prompts/get",
        "params": {"name": "stokes_refactor_contract", "arguments": {}},
    }
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 13
    assert "result" in resp
    messages = resp["result"]["messages"]
    assert len(messages) == 1
    assert "stokes://contracts" in messages[0]["content"]["text"]


@pytest.mark.asyncio
async def test_mcp_tool_call_verify_patch_safe(mcp_server):
    safe_patch = """\
+ if payload.len() > 200 {
+     return Err(ContractError::CapacityExceeded { received: payload.len(), max: 200 });
+ }
+ let features: [Feature; 200] = payload[..200].try_into().map_err(|_| ContractError::Invalid)?;
"""
    req = {
        "jsonrpc": "2.0",
        "id": 14,
        "method": "tools/call",
        "params": {
            "name": "stokes_verify_patch",
            "arguments": {
                "patch_content": safe_patch,
                "target_file": "crates/dirichlet-proxy/src/buffer.rs",
            },
        },
    }
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 14
    data = json.loads(resp["result"]["content"][0]["text"])
    assert data["verification"] == "VERIFIED_SAFE"
    assert data["zero_panic_guarantee"] is True


@pytest.mark.asyncio
async def test_mcp_tool_call_verify_patch_rejected(mcp_server):
    panicking_patch = """\
+ let features: [Feature; 200] = payload.as_slice().try_into().unwrap();
"""
    req = {
        "jsonrpc": "2.0",
        "id": 15,
        "method": "tools/call",
        "params": {
            "name": "stokes_verify_patch",
            "arguments": {
                "patch_content": panicking_patch,
                "target_file": "crates/dirichlet-proxy/src/buffer.rs",
            },
        },
    }
    resp = await mcp_server.handle_request(req)
    assert resp["id"] == 15
    data = json.loads(resp["result"]["content"][0]["text"])
    assert data["verification"] == "REJECTED"
    assert data["zero_panic_guarantee"] is False

