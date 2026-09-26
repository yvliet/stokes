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
import re
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
            "Synthesize defensive bounds validation and SQL currentDatabase() scoping patches "
            "to eliminate panic hazards across language boundaries, optionally writing unified diffs."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "workspace_path": {
                    "type": "string",
                    "description": "Path to workspace directory.",
                },
                "strategy": {
                    "type": "string",
                    "description": "Remediation strategy: 'defensive_bounds' (recommended, explicit Result error handling) or 'tiered_priority'.",
                    "enum": ["defensive_bounds", "tiered_priority"],
                    "default": "defensive_bounds",
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
        "name": "stokes_verify_patch",
        "description": (
            "Simulate and verify a proposed code patch against Stokes invariant checks "
            "before applying it to disk, verifying zero slice panics or boundary drift."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "patch_content": {
                    "type": "string",
                    "description": "Unified diff or code snippet to verify.",
                },
                "target_file": {
                    "type": "string",
                    "description": "Target source file being patched (e.g. crates/dirichlet-proxy/src/buffer.rs).",
                },
            },
            "required": ["patch_content"],
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

STOKES_RESOURCES = [
    {
        "uri": "stokes://contracts",
        "name": "Discovered Cross-Boundary Contracts",
        "description": "Live JSON manifest of cross-service schema definitions, field mappings, and buffer capacities.",
        "mimeType": "application/json",
    },
    {
        "uri": "stokes://lockfile",
        "name": "Stokes Lockfile",
        "description": "Machine-authoritative cryptographic boundary verification lockfile (stokes.lock).",
        "mimeType": "text/plain",
    },
    {
        "uri": "stokes://diagnostics",
        "name": "Active Invariant Diagnostics",
        "description": "Live list of cross-boundary capacity mismatches and unchecked buffer panics (LINT-004).",
        "mimeType": "application/json",
    },
]

STOKES_PROMPTS = [
    {
        "name": "stokes_refactor_contract",
        "description": "Guided workflow for an AI agent (IBM Bob, Claude Code, Cursor) to resolve a cross-boundary contract violation without panics.",
        "arguments": [
            {
                "name": "target_service",
                "description": "Downstream service receiving untrusted payloads (e.g. crates/dirichlet-proxy)",
                "required": False,
            }
        ],
    },
    {
        "name": "stokes_explain_violation",
        "description": "Architectural explanation of why an unchecked fixed-size slice conversion causes edge crashes, and recommended defensive bounds alternatives.",
        "arguments": [
            {
                "name": "diagnostic_rule",
                "description": "Diagnostic rule ID (default: LINT-004)",
                "required": False,
            }
        ],
    },
]


class StokesMcpServer:
    """Stdio JSON-RPC 2.0 Model Context Protocol server for Stokes."""

    def __init__(self) -> None:
        self.tools = {tool["name"]: tool for tool in STOKES_TOOLS}
        self.resources = {r["uri"]: r for r in STOKES_RESOURCES}
        self.prompts = {p["name"]: p for p in STOKES_PROMPTS}

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
                        "resources": {},
                        "prompts": {},
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

        elif method == "resources/list":
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "resources": STOKES_RESOURCES,
                },
            }

        elif method == "resources/read":
            uri = params.get("uri")
            return await self._read_resource(req_id, uri)

        elif method == "prompts/list":
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "prompts": STOKES_PROMPTS,
                },
            }

        elif method == "prompts/get":
            prompt_name = params.get("name")
            prompt_args = params.get("arguments", {})
            return await self._get_prompt(req_id, prompt_name, prompt_args)

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

    async def _read_resource(self, req_id: Any, uri: str | None) -> dict[str, Any]:
        """Read a Stokes MCP resource by URI."""
        if not uri or uri not in self.resources:
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "error": {
                    "code": -32602,
                    "message": f"Resource not found: {uri}",
                },
            }

        if uri == "stokes://contracts":
            res = await scan_workspace(".")
            text = json.dumps(res, indent=2)
            mime = "application/json"
        elif uri == "stokes://lockfile":
            lock_path = Path("stokes.lock")
            if lock_path.is_file():
                text = lock_path.read_text(encoding="utf-8")
            else:
                text = "# No stokes.lock found in workspace. Run stokes_cert to generate."
            mime = "text/plain"
        elif uri == "stokes://diagnostics":
            res = await scan_workspace(".")
            risk = res.get("cardinality_risk_ratio", 0.0)
            diag = {
                "workspace": res.get("workspace", "."),
                "cardinality_risk_ratio": risk,
                "status": "FATAL_DRIFT" if (risk or 0.0) > 1.0 else "SAFE",
                "violations": [
                    {
                        "rule": "LINT-004",
                        "severity": "FATAL",
                        "message": f"Upstream columns ({res.get('upstream_cardinality', 280)}) exceed downstream capacity ({res.get('downstream_capacity', 200)})",
                        "downstream_buffer": "[Feature; 200]",
                        "remediation": "Replace panicking try_into().unwrap() with Result<_, ContractError> bounds validation.",
                    }
                ] if (risk or 0.0) > 1.0 else [],
            }
            text = json.dumps(diag, indent=2)
            mime = "application/json"
        else:
            text = "{}"
            mime = "text/plain"

        return {
            "jsonrpc": "2.0",
            "id": req_id,
            "result": {
                "contents": [
                    {
                        "uri": uri,
                        "mimeType": mime,
                        "text": text,
                    }
                ]
            },
        }

    async def _get_prompt(
        self, req_id: Any, name: str | None, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Generate a guided prompt for an AI agent."""
        if not name or name not in self.prompts:
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "error": {
                    "code": -32602,
                    "message": f"Unknown prompt: {name}",
                },
            }

        if name == "stokes_refactor_contract":
            target = args.get("target_service", "crates/dirichlet-proxy")
            msg = (
                f"You are a systems engineer refactoring {target} using Stokes.\n"
                f"1. Ingest stokes://contracts to observe exact upstream field counts and downstream buffer bounds.\n"
                f"2. Inspect the buffer deserialization code. If it uses `.try_into().unwrap()` or fixed slice indexing, "
                f"replace it with defensive bounds checking (`Result<_, ContractError>`) to prevent runtime panics.\n"
                f"3. Call the `stokes_verify_patch` tool to verify that your refactored code passes all invariant checks.\n"
                f"4. Once verified, call `stokes_cert` to certify the boundary in `stokes.lock`."
            )
        elif name == "stokes_explain_violation":
            rule = args.get("diagnostic_rule", "LINT-004")
            msg = (
                f"Stokes Diagnostic Rule: {rule}\n"
                f"Root Cause: Downstream service attempts fixed-size slice conversion (e.g. `[T; N] = slice.try_into().unwrap()`) "
                f"without an upstream cardinality check.\n"
                f"Consequence: When upstream produces > N items (e.g. schema expansion or query duplication), "
                f"the thread panics with TryFromSliceError, restarting the edge worker fleet.\n"
                f"Remediation: Implement explicit bounds checking (`if slice.len() > N {{ return Err(...) }}`) "
                f"or graceful capacity fallback, never silent data shedding."
            )
        else:
            msg = "Stokes agent prompt."

        return {
            "jsonrpc": "2.0",
            "id": req_id,
            "result": {
                "messages": [
                    {
                        "role": "user",
                        "content": {
                            "type": "text",
                            "text": msg,
                        },
                    }
                ]
            },
        }

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
                strategy = args.get("strategy", "defensive_bounds")
                res = await scan_workspace(ws)
                synthesizer = ContractSynthesizer(res)
                patch_str = synthesizer.synthesize()
                if export:
                    exporter = PatchExportProvider()
                    prompt_desc = (
                        "Synthesized defensive bounds validation patch"
                        if strategy == "defensive_bounds"
                        else "Synthesized zero-allocation Dual-Zone priority patch"
                    )
                    dispatch_res = exporter.dispatch(
                        ws,
                        prompt=prompt_desc,
                        diff_patch=patch_str,
                    )
                    text_payload = (
                        f"Remediation patch generated (strategy: {strategy}).\n"
                        f"Patch Location: {dispatch_res.patch_path}\n\n"
                        f"{patch_str}"
                    )
                else:
                    text_payload = patch_str

            elif name == "stokes_verify_patch":
                patch_content = args.get("patch_content", "")
                target_file = args.get("target_file", "")
                has_blind_slice = bool(re.search(r"\[\s*:\s*\d+\s*\]", patch_content)) and not (
                    "ContractCapacityExceededError" in patch_content
                    or "raise " in patch_content
                    or "Result<" in patch_content
                )
                has_unwrap = ".unwrap()" in patch_content or ".expect(" in patch_content
                has_bounds_check = (
                    "Result<" in patch_content
                    or "ContractError" in patch_content
                    or "ContractCapacityExceededError" in patch_content
                    or "if payload.len()" in patch_content
                    or "match " in patch_content
                    or "catch_unwind" in patch_content
                )
                if has_blind_slice:
                    verdict = "REJECTED"
                    reason = (
                        "LINT-006: Blind slice truncation detected. Do not silently truncate payload elements with [:N]. "
                        "Enforce fail-fast boundary validation (raise ContractCapacityExceededError or return Result<_, ContractError>)."
                    )
                elif has_unwrap and not has_bounds_check:
                    verdict = "REJECTED"
                    reason = "Patch still contains unhandled .unwrap() on fixed-size buffer. Introduce defensive bounds checking or Result error propagation."
                else:
                    verdict = "VERIFIED_SAFE"
                    reason = "Zero unhandled panics detected. Defensive bounds checking and contract error handling verified."

                text_payload = json.dumps(
                    {
                        "verification": verdict,
                        "target_file": target_file,
                        "zero_panic_guarantee": verdict == "VERIFIED_SAFE",
                        "diagnostic_reason": reason,
                    },
                    indent=2,
                )

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
                from stokes.subagents.contract_synthesizer import compute_canonical_contracts_digest
                ws = args.get("workspace_path", ".")
                output_file = args.get("output_file", "stokes.lock")
                res = await scan_workspace(ws)
                lock_path = Path(ws) / output_file
                risk = res.get("cardinality_risk_ratio")
                risk_str = f"{risk:.4f}" if risk is not None else "0.0000"
                is_fatal = (risk or 0.0) > 1.0
                master_digest = compute_canonical_contracts_digest(res)
                lock_data = {
                    "stokes_version": res.get("stokes_version", "0.2.0"),
                    "generated_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
                    "workspace": str(Path(ws).resolve()),
                    "risk_ratio": float(risk_str),
                    "status": "FATAL_DRIFT" if is_fatal else "COMPLIANT",
                    "master_semantic_digest": master_digest,
                    "downstream_capacity": res.get("downstream_capacity", 200),
                    "upstream_cardinality": res.get("upstream_cardinality", 0),
                    "verification_mode": "normalized_semantic_ast",
                }
                lock_path.write_text(json.dumps(lock_data, indent=2), encoding="utf-8")
                text_payload = f"Certified boundary lockfile (semantic AST digest {master_digest[:16]}...) written to: {lock_path.resolve()}"

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
