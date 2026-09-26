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
