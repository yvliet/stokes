# Stokes

**Autonomous Cross-Boundary Systems Invariant Verification Engine for AI Agents**  
Universal Multi-Agent Orchestrator & Native MCP Server | GitHub: [yvliet](https://github.com/yvliet)

---

## Overview

Stokes is a static analysis and runtime verification engine for detecting cross-boundary invariant violations in polyglot systems (Rust, Python, SQL, Protobuf, ClickHouse). It functions both as an autonomous CI/CD gatekeeper and as an agent-agnostic verification brain.

Stokes bridges static contract discovery with AI coding workflows:
- **Direct Multi-Agent Dispatch**: Stokes analyzes cross-boundary AST contracts, detects fatal schema drift or buffer overruns, and orchestrates remediation tasks directly across Claude Code, IBM Bob 2.0, Aider, Goose, OpenHands, or custom CLI agents.
- **Native MCP Server**: Exposes Stokes boundary scanning, invariant audits, remediation synthesis, and certificate emission directly to IDE agents (Cursor, Windsurf, Claude Desktop) via the Model Context Protocol (`stokes mcp`).
- **Autonomous Patch Synthesis**: Synthesizes verified unified diff patches with zero external tool dependencies via `stokes patch` or `--export-patch`.

---

## Installation

```bash
pip install stokes
```

Requires Python ≥ 3.11.

---

## Quick Start

```bash
# Scan a workspace for boundary violations
stokes scan /path/to/workspace

# Run a full audit with multi-agent remediation synthesis
stokes audit /path/to/workspace

# Dispatch automated remediation to an AI agent (auto-detects Claude, Bob, Aider, etc.)
stokes remediate /path/to/workspace --agent auto

# Dispatch remediation specifically to Claude Code
stokes remediate /path/to/workspace --agent claude

# Export verified unified diff patches without running an interactive agent
stokes patch /path/to/workspace --output-dir ./patches

# Start the native Model Context Protocol (MCP) server for IDE agents
stokes mcp

# Verify invariants (CI/CD gate - non-zero exit on failure)
stokes verify --strict

# Emit the stokes.lock cryptographic boundary lockfile
stokes cert --output stokes.lock
```

---

## Universal Multi-Agent Integration

Stokes is built with a pluggable provider architecture (`AgentRegistry`), decoupling static invariant verification from any single AI vendor or CLI tool.

| Provider | Identifier | Invocation Strategy | Supported Mode |
|---|---|---|---|
| **Claude Code** | `claude` | `claude -p <prompt>` | Autonomous CLI headless / print |
| **IBM Bob 2.0** | `bob` | `bob run <prompt>` | Hackathon agent orchestrator |
| **Aider** | `aider` | `aider --message <prompt>` | In-repo git committer & editor |
| **Goose** | `goose` | `goose run -t <prompt>` | Autonomous dev agent session |
| **OpenHands** | `openhands` | `openhands-cli -t <prompt>` | Containerized dev agent |
| **Generic CLI** | `custom` | `--agent-cmd "my-agent {prompt}"` | Arbitrary custom agent scripts |
| **Patch Export** | `patch` | Native AST diff synthesizer | Zero-dependency `.patch` files |

### Auto-Detection & Fallback

When running `stokes remediate <workspace> --agent auto`, Stokes checks your system path in priority order:
1. `claude` (Claude Code)
2. `bob` (IBM Bob 2.0 CLI)
3. `aider` (Aider AI)
4. `goose` (Block Goose)
5. `openhands` (OpenHands CLI)
6. **Fallback**: `patch` (synthesizes verified unified diffs to disk)

---

## Native Model Context Protocol (MCP)

Stokes includes a built-in stdio MCP server implementing JSON-RPC 2.0. Any MCP-compliant IDE or desktop client can query boundary contracts and trigger automated invariant fixes in real time.

### Configuration

Add Stokes to your IDE MCP configuration file (e.g., `.cursor/mcp.json` for Cursor, or `claude_desktop_config.json` for Claude Desktop):

```json
{
  "mcpServers": {
    "stokes": {
      "command": "stokes",
      "args": ["mcp"]
    }
  }
}
```

Or run via Python directly:

```json
{
  "mcpServers": {
    "stokes": {
      "command": "python",
      "args": ["-m", "stokes.mcp"]
    }
  }
}
```

### Exposed MCP Tools

- `stokes_scan`: Scans a directory for cross-boundary invariants, cardinality mismatches, and protocol boundaries.
- `stokes_audit`: Performs a comprehensive invariant audit and generates detailed remediation plans with unified diff patches.
- `stokes_remediate`: Executes automated remediation through the configured AI agent or outputs unified patches.
- `stokes_verify`: Fast invariant verification gate for pre-commit checks and CI workflows.
- `stokes_cert`: Cryptographically signs verified invariants and writes a `stokes.lock` artifact.

---

## Core Invariants Enforced

| Rule | Severity | Description |
|---|---|---|
| `LINT-001` | FATAL ERROR | `system.columns` query without `database = currentDatabase()` scoping |
| `LINT-002` | FATAL ERROR | Unbounded ETL iteration loop without `[:MAX_CANONICAL]` guard |
| `LINT-003` | WARNING | Schema mesh broadcast without SHA-256 digest validation |
| `LINT-004` | FATAL ERROR | Fixed-size stack buffer conversion via unchecked `.try_into().unwrap()` |
| `LINT-005` | WARNING | Heap allocation detected on microsecond packet processing path |

---

## Cardinality Risk Ratio

```
Risk = C_upstream / B_downstream

Risk <= 1.0  →  INVARIANT SATISFIED
Risk > 1.0   →  FATAL CONTRACT DRIFT
```

---

## Key Contracts

- **Wire Protocol**: 4-byte big-endian length-prefixed frames, 16 MB maximum budget.
- **Float Sanitization**: Reject NaN / ±Infinity / subnormals; clamp to [0.0, 100.0].
- **Dual-Zone Memory**: `MAX_ACTIVE_FEATURES = 200` (Zone 0: slots 0-127 CORE RESERVED, Zone 1: slots 128-199 DYNAMIC ADAPTIVE).
- **Event Bus**: `asyncio.Queue(maxsize=1024)`, 16.6 ms render tick interval.

---

## Hackathon Compliance & Attribution

This project strictly adheres to the official IBM Bob 2.0 Hackathon regulations.

> *"Yes, you can use pre-prepared synthetic sample code and demo UI templates as long as they are clearly disclosed in your repository and all the core Bob analysis and project logic are built during the hackathon."*  
> - **Hamza | lablab.ai** (Discord message ID: `1553083130045268114`, September 25, 2026 at 23:37 WIB)

Full verification captures and role verifications are documented in [docs/compliance/COMPLIANCE.md](docs/compliance/COMPLIANCE.md). Exported task session screenshots, task IDs, and ongoing milestone checkpoints are documented in [bob_sessions/](bob_sessions/README.md).

- **Active Build with IBM Bob 2.0 (WIP)**: Core AST reachability engine, subagents, and test batteries constructed during the hackathon build window. Active Bob token consumption checkpoints logged in [bob_sessions/](bob_sessions/README.md) (35.064 Bobcoins burned to date across 5 intermediate task sessions; project is currently in active development).
- **Disclosed Baseline Templates**: Dirichlet benchmark patient (`dirichlet/`) and demo web UI documentation shell (`web/`).

---

## License

MIT - Copyright (c) 2026 yvliet
