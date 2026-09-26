---
title: "Model Context Protocol (MCP) Server Specification"
description: "Native JSON-RPC 2.0 Model Context Protocol specification for Stokes: tool schemas, live resources, and AI agent integration."
author: "Yuliet Li (yvliet)"
license: "MIT"
---

# Stokes Model Context Protocol (MCP) Specification

Stokes implements a native Model Context Protocol (MCP) server over standard I/O (`stdio`) using JSON-RPC 2.0 framing. Engineered by Yuliet Li (`yvliet`), the Stokes MCP server gives AI coding agents (such as IBM Bob 2.0, Cursor, Claude Code, and Windsurf) real-time visibility into cross-compiler boundaries, sparse reachability graphs, and zero-allocation memory constraints.

```
┌────────────────────────────────────────────────────────────────────────┐
│                     STOKES MCP INTEGRATION ARCHITECTURE                │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   [AI Coding Agent Host]                                               │
│   (IBM Bob 2.0 / Cursor / Claude Code / Windsurf)                      │
│             │                                                          │
│             ▼ Stdio JSON-RPC 2.0 (MCP Protocol Version 2024-11-05)     │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                     Stokes MCP Server                          │   │
│   │  - JSON-RPC Dispatcher & Request Router                        │   │
│   │  - Tree-sitter Invariant Analysis Engine                       │   │
│   │  - Autonomous Buffer Synthesizer                               │   │
│   └──────────────┬──────────────────┬──────────────────┬───────────┘   │
│                  │                  │                  │               │
│                  ▼                  ▼                  ▼               │
│          [Tools Engine]     [Resources URI]     [Guided Prompts]       │
│          - verify_boundaries- stokes://contracts- refactor_contract   │
│          - get_boundary_graph- stokes://graph/dag- explain_violation   │
│          - synthesize_buffer - stokes://lockfile                       │
│          - inspect_channel   - stokes://diagnostics                    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Protocol Lifecycle & Wire Framing

The server complies with the official MCP specification (`2024-11-05`), operating over bidirectional standard streams (`sys.stdin` and `sys.stdout`).

### 1. Connection Initialization

Clients initiate connections with the `initialize` RPC handshake:

```json
// Client Request →
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2024-11-05",
    "capabilities": {
      "roots": { "listChanged": true },
      "sampling": {}
    },
    "clientInfo": {
      "name": "ibm-bob",
      "version": "2.0.0"
    }
  }
}

// Stokes Response ←
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "protocolVersion": "2024-11-05",
    "capabilities": {
      "tools": {},
      "resources": {},
      "prompts": {}
    },
    "serverInfo": {
      "name": "stokes-mcp",
      "version": "0.2.0"
    }
  }
}
```

Upon receiving the response, the client emits the `notifications/initialized` notification:

```json
// Client Notification →
{
  "jsonrpc": "2.0",
  "method": "notifications/initialized",
  "params": {}
}
```

---

## Tool Schemas

Stokes exposes tools that enable AI agents to inspect, verify, and remediate cross-boundary contracts.

### 1. `verify_boundaries` (or `stokes_audit`)

Evaluates cross-boundary invariant compliance across SQL DDL migrations, Python ETL pipelines, and Rust proxy intake buffers.

```json
{
  "name": "verify_boundaries",
  "description": "Evaluates cross-boundary invariant compliance across SQL, Python, and Rust codebases, returning Cardinality Risk Ratios and detected drift hazards.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "workspace_path": {
        "type": "string",
        "description": "Target workspace directory path (default: current directory)."
      },
      "strict": {
        "type": "boolean",
        "description": "If true, enforces strict invariant checks and treats capacity warnings as fatal errors.",
        "default": true
      }
    },
    "required": []
  }
}
```

Sample tool response:

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "STOKES BOUNDARY VERIFICATION REPORT\nWorkspace: /workspace/dirichlet\nPeak Cardinality Risk Ratio: 1.40 (FATAL CONTRACT DRIFT)\nViolations: [LINT-001: Unscoped system.columns reflection query in services/feature-pipeline/catalog_sync.py, LINT-004: Fixed stack buffer [Feature; 200] overflow in crates/dirichlet-proxy/src/engine/feature_ingest.rs]\nRecommendation: Run synthesize_buffer or scope ClickHouse reflection query."
      }
    ]
  }
}
```

---

### 2. `get_boundary_graph`

Traverses the workspace and emits the directed sparse Interface Boundary Compatibility Graph.

```json
{
  "name": "get_boundary_graph",
  "description": "Extracts the sparse Interface Boundary Compatibility Graph, exposing schema producers, wire channels, consumer buffers, and reachability paths.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "workspace_path": {
        "type": "string",
        "description": "Target workspace directory path."
      },
      "include_isolated": {
        "type": "boolean",
        "description": "Whether to include isolated schema nodes unconsumed by downstream proxies.",
        "default": false
      }
    },
    "required": []
  }
}
```

Sample output:

```json
{
  "nodes": [
    {
      "id": "sql_bot_signals",
      "tier": "analytical_storage",
      "file": "migrations/001_bot_signals.sql",
      "cardinality": 280,
      "scoped": false
    },
    {
      "id": "wire_bot_signals",
      "tier": "wire_transport",
      "channel": "bot_signals",
      "serializer": "services/feature-pipeline/catalog_sync.py"
    },
    {
      "id": "rust_proxy_intake",
      "tier": "edge_proxy",
      "file": "crates/dirichlet-proxy/src/engine/feature_ingest.rs",
      "buffer_type": "[Feature; 200]",
      "capacity": 200
    }
  ],
  "edges": [
    {
      "source": "sql_bot_signals",
      "target": "wire_bot_signals",
      "query": "SELECT * FROM system.columns WHERE table = 'bot_signals'"
    },
    {
      "source": "wire_bot_signals",
      "target": "rust_proxy_intake",
      "risk_ratio": 1.40,
      "status": "FATAL_DRIFT"
    }
  ]
}
```

---

### 3. `synthesize_buffer` (or `stokes_codegen`)

Generates a certified zero-heap `TieredBuffer` or Dual-Zone memory layout in Rust or C++.

```json
{
  "name": "synthesize_buffer",
  "description": "Synthesizes a certified zero-heap TieredBuffer or Dual-Zone memory allocation layout to safely handle expanding upstream cardinalities without edge panics.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "item_type": {
        "type": "string",
        "description": "Rust type of element (e.g. FeatureDescriptor).",
        "default": "FeatureDescriptor"
      },
      "inline_capacity": {
        "type": "integer",
        "description": "Number of items evaluated inline on stack with zero heap allocation.",
        "default": 200
      },
      "spill_capacity": {
        "type": "integer",
        "description": "Number of bounded spillover items permitted before fail-fast error.",
        "default": 312
      }
    },
    "required": ["item_type"]
  }
}
```

---

### 4. `inspect_channel`

Inspects a specific wire channel (e.g., Redis KV key, Kafka topic, or Unix socket) for serialization guards.

```json
{
  "name": "inspect_channel",
  "description": "Inspects a designated message channel or KV store key, evaluating dynamic string concatenation hazards and payload slice guards.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "channel_id": {
        "type": "string",
        "description": "Channel identifier or pattern (e.g. 'bot_signals' or 'signals:*:*')."
      }
    },
    "required": ["channel_id"]
  }
}
```

---

### 5. `stokes_verify_patch`

Simulates and verifies a proposed unified diff before it is applied to disk.

```json
{
  "name": "stokes_verify_patch",
  "description": "Simulates and verifies a proposed code patch against Stokes invariant checks, verifying zero slice panics or boundary drift.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "patch_content": {
        "type": "string",
        "description": "Unified diff or code snippet to verify."
      },
      "target_file": {
        "type": "string",
        "description": "Target source file being patched."
      }
    },
    "required": ["patch_content"]
  }
}
```

---

## Resource Endpoints

Stokes exposes machine-authoritative system state through standard MCP resource URIs:

| Resource URI | MIME Type | Description |
|---|---|---|
| `stokes://contracts/active` | `application/json` | Discovered cross-boundary contracts, active buffer limits, and field mappings. |
| `stokes://graph/dag` | `application/json` | Complete directed acyclic graph (DAG) representing multi-tier pipeline dependencies. |
| `stokes://lockfile` | `text/plain` | Cryptographic `stokes.lock` file containing normalized AST SHA-256 digests. |
| `stokes://diagnostics` | `application/json` | Live list of active invariant violations and Cardinality Risk Ratios. |

### Reading a Resource

```json
// Client Request →
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "resources/read",
  "params": {
    "uri": "stokes://contracts/active"
  }
}

// Stokes Response ←
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "contents": [
      {
        "uri": "stokes://contracts/active",
        "mimeType": "application/json",
        "text": "{\n  \"upstream_cardinality\": 280,\n  \"downstream_capacity\": 200,\n  \"cardinality_risk_ratio\": 1.40\n}"
      }
    ]
  }
}
```

---

## Guided Agent Prompts

Stokes supplies structured prompt workflows to guide autonomous coding agents through contract remediation:

### `stokes_refactor_contract`
Instructs the agent to:
1. Ingest `stokes://contracts/active` to observe upstream field counts and downstream buffer capacities.
2. Inspect the buffer deserialization code and replace `.try_into().unwrap()` with defensive bounds checking (`Result<_, ContractError>`).
3. Call `stokes_verify_patch` to verify zero panics.
4. Execute `stokes_cert` to certify the boundary in `stokes.lock`.

### `stokes_explain_violation`
Provides a deep architectural explanation of why an unchecked fixed-size slice conversion causes edge worker fleet restarts, explaining L1D cache constraints and defensive bounds alternatives.

---

## AI Agent Integration Guide

### 1. Cursor IDE Configuration

Configure the Stokes MCP server in your project workspace by adding `.cursor/mcp.json`:

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

Add cross-boundary engineering instructions to `.cursorrules`:

```markdown
# Stokes Boundary Invariant Rules for Cursor
- When modifying ClickHouse SQL migrations or reflection queries, always scope virtual table queries with `AND database = currentDatabase()`.
- Never use `.try_into().unwrap()` or fixed slice indexing `[..N]` on untrusted network payloads in Rust.
- If upstream cardinality expands, update downstream buffer allocations first (Tolerant Reader pattern).
- Prior to finalizing any refactoring PR, invoke the Stokes MCP tool `verify_boundaries` to confirm that Peak Cardinality Risk Ratio <= 1.0.
```

---

### 2. Claude Code & Claude Desktop Configuration

Add the Stokes MCP server to `claude_desktop_config.json` or project-level Claude configuration:

```json
{
  "mcpServers": {
    "stokes": {
      "command": "stokes",
      "args": ["mcp"],
      "env": {
        "STOKES_STRICT": "1",
        "STOKES_LOG_LEVEL": "info"
      }
    }
  }
}
```

To run Stokes directly inside Claude Code CLI sessions:

```bash
claude mcp add stokes -- stokes mcp
```

---

### 3. IBM Bob 2.0 Autonomous Orchestration

Stokes includes first-class integration with the IBM Bob 2.0 autonomous agent. When `stokes audit --with-bob` or `stokes remediate --agent=bob` is executed, Stokes orchestrates the remediation lifecycle over asynchronous IPC:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   IBM BOB 2.0 AUTONOMOUS REMEDIATION LOOP              │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  1. Stokes Orchestrator extracts boundary ASTs across SQL/Python/Rust. │
│  2. Mathematical invariant engine detects Risk Ratio: 1.40 > 1.0.       │
│  3. Stokes compiles AGENTS.md policy and synthesizes remediation prompt│
│  4. Agent Bridge dispatches task payload to IBM Bob 2.0 CLI.          │
│  5. IBM Bob 2.0 ingests stokes://contracts/active via MCP stdio.       │
│  6. Bob refactors Rust intake buffer to TieredBuffer<Feature, 200, 312>│
│  7. Bob scopes ClickHouse query with AND database = currentDatabase(). │
│  8. Bob invokes stokes_verify_patch to confirm 0 unhandled panics.     │
│  9. Stokes certifies boundary, writing stokes.lock and CONFORMANCE.md. │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

#### Length-Prefixed Binary Wire Protocol for Bob IPC

When communicating over Unix domain sockets or named pipes (`/tmp/stokes-bob.sock`), Stokes uses a 4-byte big-endian length-prefixed binary framing structure:

```
┌────────────────────────────────────┬───────────────────────────────────┐
│ Length Header (4 Bytes, Big-Endian)│ Payload Body (JSON-RPC 2.0)       │
│ uint32_be (N bytes)                │ UTF-8 Encoded Request / Response  │
└────────────────────────────────────┴───────────────────────────────────┘
```

- **Maximum Frame Budget**: 16 MB (`0x01000000`). Frames exceeding this budget trigger immediate socket termination.
- **Render Tick Coalescing**: UI and agent progress events are coalesced on a 16.6ms monotonic timer (60 FPS) to prevent queue bloat.

---

## Summary & Author Attribution

The Stokes Model Context Protocol server bridges the gap between AI coding assistants and distributed systems reality, converting AI agents from localized syntax auto-completers into systems-aware architecture partners.

- **Author**: Yuliet Li (`yvliet`)
- **Protocol Standard**: Model Context Protocol (MCP 2024-11-05)
- **Transport**: Stdio JSON-RPC 2.0
- **License**: MIT License
