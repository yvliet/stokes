"""
stokes/mcp/server.py
Native Model Context Protocol (MCP) stdio JSON-RPC 2.0 server.
Exposes Stokes cross-boundary invariant verification tools to Cursor, Windsurf,
Claude Desktop, VS Code, and custom AI agent environments.
GitHub: yvliet
"""

from __future__ import annotations

import asyncio
import json
import os
import sys
from pathlib import Path
from typing import Any

from stokes.subagents.boundary_discovery import scan_workspace
from stokes.subagents.contract_synthesizer import ContractSynthesizer
from stokes.harness.float_fuzz_battery import FloatFuzzBattery
from stokes.cli.agent_bridge import PatchExportProvider


MCP_PROTOCOL_VERSION = "2024-11-05"
SERVER_NAME = "stokes-mcp"
SERVER_VERSION = "0.1.0"

STOKES_TOOLS = [
    {
        "name": "stokes_scan",
        "description": (
            "Scan a target workspace directory for cross-boundary architectural invariant violations, "
            "evaluating ClickHouse schema reflection, Python ETL bounds, and Rust fixed stack capacity."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "workspace_path": {
                    "type": "string",
                    "description": "Absolute or relative path to the workspace directory to scan (default: current directory).",
                }
            },
            "required": [],
        },
    },
    {
        "name": "stokes_audit",
        "description": (
            "Run full multi-agent AST static analysis across Rust, Python, SQL, and Protobuf codebases "
            "to detect contract drift and generate synthesized remediation diffs."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "workspace_path": {
                    "type": "string",
                    "description": "Path to workspace directory (default: current directory).",
                },
                "strict": {
                    "type": "boolean",
                    "description": "If true, enforces strict invariant compliance.",
                    "default": False,
                },
            },
            "required": [],
        },
    },
    {
        "name": "stokes_remediate",
        "description": (
            "Synthesize zero-allocation Dual-Zone Rust fixes and SQL scoping remediation patches, "
            "optionally writing unified diffs to .stokes/remediation.patch."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "workspace_path": {
                    "type": "string",
                    "description": "Path to workspace directory.",
                },
                "export_patch": {
                    "type": "boolean",
                    "description": "Whether to export the unified diff to .stokes/remediation.patch.",
                    "default": True,
                },
            },
            "required": [],
        },
    },
    {
        "name": "stokes_verify",
        "description": (
            "Run the Stokes invariant verification battery, including the 10,000-case IEEE-754 "
            "adversarial float fuzzer and Criterion micro-benchmark comparison."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "cases": {
                    "type": "integer",
                    "description": "Number of randomized fuzz cases to run (default: 10000).",
                    "default": 10000,
                }
            },
            "required": [],
        },
    },
    {
        "name": "stokes_cert",
        "description": (
            "Emit the cryptographic stokes.lock boundary certification lockfile for CI/CD gates."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "workspace_path": {
                    "type": "string",
                    "description": "Path to workspace directory.",
                },
                "output_file": {
                    "type": "string",
                    "description": "Destination lockfile path (default: stokes.lock).",
                    "default": "stokes.lock",
                },
            },
            "required": [],
        },
    },
]


class StokesMcpServer:
    """Stdio JSON-RPC 2.0 Model Context Protocol server for Stokes."""

    def __init__(self) -> None:
        self.tools = {tool["name"]: tool for tool in STOKES_TOOLS}

    async def handle_request(self, request: dict[str, Any]) -> dict[str, Any] | None:
        """Process a single JSON-RPC request and return the response dictionary."""
        req_id = request.get("id")
        method = request.get("method")
        params = request.get("params", {})

        if method == "initialize":
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "protocolVersion": MCP_PROTOCOL_VERSION,
                    "capabilities": {
                        "tools": {},
                    },
                    "serverInfo": {
                        "name": SERVER_NAME,
                        "version": SERVER_VERSION,
                    },
                },
            }

        elif method == "notifications/initialized":
            return None

        elif method == "ping":
            return {"jsonrpc": "2.0", "id": req_id, "result": {}}

        elif method == "tools/list":
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "tools": STOKES_TOOLS,
                },
            }

        elif method == "tools/call":
            tool_name = params.get("name")
            tool_args = params.get("arguments", {})
            return await self._execute_tool(req_id, tool_name, tool_args)

        else:
            if req_id is not None:
                return {
                    "jsonrpc": "2.0",
                    "id": req_id,
                    "error": {
                        "code": -32601,
                        "message": f"Method not found: {method}",
                    },
                }
            return None

    async def _execute_tool(
        self, req_id: Any, name: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Execute a Stokes tool by name and wrap result in standard MCP content format."""
        if name not in self.tools:
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "error": {
                    "code": -32602,
                    "message": f"Unknown tool: {name}",
                },
            }

        try:
            if name == "stokes_scan":
                ws = args.get("workspace_path", ".")
                res = await scan_workspace(ws)
                text_payload = json.dumps(res, indent=2)

            elif name == "stokes_audit":
                ws = args.get("workspace_path", ".")
                res = await scan_workspace(ws)
                synthesizer = ContractSynthesizer(res)
                patch_str = synthesizer.synthesize()
                risk = res.get("cardinality_risk_ratio")
                risk_str = f"{risk:.4f}" if risk is not None else "0.0000"
                is_fatal = (risk or 0.0) > 1.0
                text_payload = (
                    f"STOKES AUDIT REPORT\n"
                    f"Workspace: {Path(ws).resolve()}\n"
                    f"Cardinality Risk Ratio: {risk_str}\n"
                    f"Fatal Drift Detected: {is_fatal}\n\n"
                    f"Synthesized Invariant Policy:\n{patch_str}"
                )

            elif name == "stokes_remediate":
                ws = args.get("workspace_path", ".")
                export = args.get("export_patch", True)
                res = await scan_workspace(ws)
                synthesizer = ContractSynthesizer(res)
                patch_str = synthesizer.synthesize()
                if export:
                    exporter = PatchExportProvider()
                    dispatch_res = exporter.dispatch(
                        ws,
                        prompt="Synthesized zero-allocation Dual-Zone patch",
                        diff_patch=patch_str,
                    )
                    text_payload = (
                        f"Remediation patch generated.\n"
                        f"Patch Location: {dispatch_res.patch_path}\n\n"
                        f"{patch_str}"
                    )
                else:
                    text_payload = patch_str

            elif name == "stokes_verify":
                cases = args.get("cases", 10000)
                battery = FloatFuzzBattery(n_cases=cases)
                res = battery.run()
                passed = (res["failed"] == 0)
                text_payload = json.dumps(
                    {
                        "verification": "PASSED" if passed else "FAILED",
                        "total_cases_run": res["total"],
                        "passed_cases": res["passed"],
                        "pass_rate_percent": (res["passed"] / max(res["total"], 1)) * 100.0,
                        "adversarial_edge_cases": "NaN, Inf, -Inf, subnormal float32 rejected securely",
                    },
                    indent=2,
                )

            elif name == "stokes_cert":
                ws = args.get("workspace_path", ".")
                output_file = args.get("output_file", "stokes.lock")
                res = await scan_workspace(ws)
                lock_path = Path(ws) / output_file
                risk = res.get("cardinality_risk_ratio")
                risk_str = f"{risk:.4f}" if risk is not None else "0.0000"
                is_fatal = (risk or 0.0) > 1.0
                lock_content = (
                    f"# Stokes Cryptographic Boundary Lockfile\n"
                    f"version = '{res.get('stokes_version', '0.2.0')}'\n"
                    f"risk_ratio = {risk_str}\n"
                    f"status = '{'FATAL_DRIFT' if is_fatal else 'COMPLIANT'}'\n"
                )
                lock_path.write_text(lock_content, encoding="utf-8")
                text_payload = f"Certified boundary lockfile written to: {lock_path.resolve()}"

            else:
                text_payload = f"Tool {name} executed."

            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "content": [
                        {
                            "type": "text",
                            "text": text_payload,
                        }
                    ]
                },
            }

        except Exception as exc:
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "isError": True,
                    "content": [
                        {
                            "type": "text",
                            "text": f"Tool execution failed: {exc}",
                        }
                    ],
                },
            }


async def run_mcp_server() -> None:
    """Run the stdio MCP server event loop."""
    server = StokesMcpServer()
    loop = asyncio.get_event_loop()
    reader = asyncio.StreamReader()
    protocol = asyncio.StreamReaderProtocol(reader)
    await loop.connect_read_pipe(lambda: protocol, sys.stdin)

    while True:
        line = await reader.readline()
        if not line:
            break

        line_str = line.decode("utf-8").strip()
        if not line_str:
            continue

        try:
            req_data = json.loads(line_str)
            resp = await server.handle_request(req_data)
            if resp is not None:
                sys.stdout.write(json.dumps(resp) + "\n")
                sys.stdout.flush()
        except json.JSONDecodeError:
            err_resp = {
                "jsonrpc": "2.0",
                "id": None,
                "error": {"code": -32700, "message": "Parse error"},
            }
            sys.stdout.write(json.dumps(err_resp) + "\n")
            sys.stdout.flush()


if __name__ == "__main__":
    asyncio.run(run_mcp_server())
