---
title: "Quickstart & CLI Guide"
description: "Installation, project initialization, boundary contract locking, and CI verification with Stokes."
author: "Yuliet Li (yvliet)"
license: "MIT"
---

# Quickstart & CLI Guide

This guide walks through installing Stokes, initializing a cross-boundary workspace, establishing cryptographic boundary contracts, running deterministic CI verification, and configuring the native Model Context Protocol (MCP) server for local IDE coding agents.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        STOKES ONBOARDING LIFECYCLE                     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   1. Install Binary     curl -fsSL https://stokes.dev/install.sh | sh  │
│          │                                                             │
│          ▼                                                             │
│   2. Initialize         stokes init                                    │
│          │              (Discovers boundaries & generates stokes.toml) │
│          ▼                                                             │
│   3. Lock Contract      stokes cert --output stokes.lock               │
│          │              (Computes SHA-256 AST normalizations)          │
│          ▼                                                             │
│   4. CI Verification    stokes verify --strict                         │
│          │              (Runs sub-38ms deterministic AST gate)         │
│          ▼                                                             │
│   5. IDE Agent Loop     stokes mcp                                     │
│                         (Exposes stdio JSON-RPC tools to Cursor/Claude)│
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Installation

Stokes is distributed as a standalone, zero-dependency native binary or as a Python package for developer environments.

### Option A: Shell Installer (Recommended for CI & Linux/macOS)

```bash
curl -fsSL https://stokes.dev/install.sh | sh
```

The installer verifies the release checksum and places the `stokes` binary in your local path (`/usr/local/bin` or `~/.local/bin`).

### Option B: Cargo (Rust Toolchain)

```bash
cargo install stokes-cli --locked
```

### Option C: Python Package (Agent Orchestration & MCP Core)

```bash
pip install stokes
```

Verify the installation:

```bash
stokes --version
# stokes v0.2.0-hardened (rev: 3.0.0-ENTERPRISE)
```

---

## 2. Project Initialization

Navigate to the root of your polyglot project or monorepo and run `stokes init`:

```bash
cd /workspace/distributed-platform
stokes init
```

During initialization, Stokes scans your repository utilizing Tree-sitter parsers to automatically detect:
1. SQL migration scripts (ClickHouse DDL, PostgreSQL DDL).
2. Wire serialization endpoints (Python dictionary packing, JSON producers, Kafka topics).
3. Downstream ingestion buffers (Rust fixed stack arrays `[T; N]`, C++ structures).

Upon completion, `stokes init` emits a declarative configuration file: `stokes.toml`.

```
Discovered boundaries:
  [SQL DDL]    migrations/001_initial_schema.sql
  [Python]     services/pipeline/extractor.py
  [Rust Proxy] crates/edge-proxy/src/intake.rs

Generated stokes.toml with 1 bound channel.
```

---

## 3. Defining Cross-Boundary Contracts (`stokes.toml`)

The `stokes.toml` manifest defines the semantic bindings connecting upstream producers with downstream consumers across your architecture:

```toml
# stokes.toml: Declarative systems boundary specification
[workspace]
name = "enterprise-feature-mesh"
version = "1.0.0"
strict_mode = true

[[channels]]
id = "bot_signals_v1"
wire_format = "json"
transport = "kv_store"

# Upstream Analytical Database Tier
[channels.producer.sql]
schema_file = "migrations/004_bot_signals.sql"
table_name = "bot_signals"
expected_columns = 200

# Upstream Feature Extraction Tier
[channels.producer.python]
source_file = "services/pipeline/extractor.py"
function_target = "extract_features"
cardinality_ceiling = 200

# Downstream Edge Ingress Proxy Tier
[channels.consumer.rust]
source_file = "crates/edge-proxy/src/intake.rs"
target_symbol = "FeatureIntakeBuffer"
buffer_capacity = 200
memory_alignment_bytes = 8
max_l1d_footprint_bytes = 32768
```

> [!NOTE]
> `stokes.toml` is a declarative verification manifest, not an Interface Definition Language (IDL). It generates zero code, adds zero serialization stubs, and imposes zero runtime overhead on your production binaries.

---

## 4. Cryptographic Boundary Locking (`stokes.lock`)

To prevent silent contract drift in polyglot teams, Stokes compiles semantic AST signatures into a deterministic, machine-authoritative lockfile: `stokes.lock`.

Run `stokes cert` to compute normalized AST hashes:

```bash
stokes cert --output stokes.lock
```

This generates `stokes.lock`, containing cryptographic SHA-256 digests of parsed AST interfaces:

```json
{
  "version": 1,
  "generator": "stokes v0.2.0-hardened",
  "workspace": "enterprise-feature-mesh",
  "channels": {
    "bot_signals_v1": {
      "channel_id": "bot_signals_v1",
      "transport": "kv_store",
      "wire_format": "json",
      "invariants": {
        "max_cardinality": 200,
        "downstream_capacity": 200,
        "risk_ratio": 1.0,
        "zero_heap_allocation": true
      },
      "signatures": {
        "sql_ast_sha256": "4f82d7c9a1e0b5f36e897d2830f81d77a9c3e21890ef7654b123456789abcdef",
        "python_ast_sha256": "8a3e7b1c90f23d4e65a78912bcdef34567890123456789abcdef0123456789ab",
        "rust_ast_sha256": "c5d4e3f2a1b09876543210fedcba9876543210fedcba9876543210fedcba9876"
      }
    }
  }
}
```

> [!IMPORTANT]
> The AST digests in `stokes.lock` are computed over normalized syntax representations: comments, whitespace, variable renamings, and internal implementation details are stripped before hashing. Only declared interface boundaries, table definitions, and fixed buffer capacities affect the digest.

---

## 5. Running Verification in CI (`stokes verify --strict`)

In CI/CD environments, Stokes acts as an uncompromising gatekeeper. Running `stokes verify --strict` parses all boundary files, checks the sparse boundary graph, evaluates the Cardinality Risk Ratio, and validates signatures against `stokes.lock`:

```bash
stokes verify --strict
```

### Successful CI Verification Output (Exit Code 0)

```
[STOKES] Verifying cross-boundary contracts in workspace: enterprise-feature-mesh
  ✔ SQL DDL: migrations/004_bot_signals.sql (200 canonical columns)
  ✔ Python ETL: services/pipeline/extractor.py (slice guard [:200] active)
  ✔ Rust Proxy: crates/edge-proxy/src/intake.rs (buffer: [FeatureDescriptor; 200])
  ✔ Cardinality Check: C_upstream (200) <= B_downstream (200) | Risk = 1.00
  ✔ Memory Layout: 1,600 bytes (4.8% of 32 KB L1D cache, 25 cache lines)
  ✔ Lockfile digest matched: stokes.lock verified

[PASS] 0 invariant violations detected across 3 language boundaries (36.4 ms)
```

### Failed Contract Drift Output (Exit Code 1)

If an analytical migration adds internal shard columns without expanding downstream proxy capacity, Stokes halts CI immediately:

```
[STOKES] FATAL CONTRACT VIOLATION DETECTED
  Rule: LINT-001 / LINT-004 (Fixed Stack Buffer Overflow Hazard)
  Boundary Channel: bot_signals_v1

  Upstream Cardinality:   280 columns (migrations/005_stats_shard.sql:14)
  Downstream Capacity:    200 slots   (crates/edge-proxy/src/intake.rs:42)
  Cardinality Risk Ratio: 280 / 200 = 1.40 > 1.00 (FATAL TRYFROMSLICEERROR REACHABLE)

  Root Cause:
    system.columns reflection query in services/pipeline/extractor.py:28
    omits 'database = currentDatabase()' filter, ingesting 80 shard columns from r0/r1.

  Result: Pull request rejected. Merge blocked. (34.8 ms)
```

### GitHub Actions Workflow Integration

Embed Stokes directly into your repository CI pipeline:

```yaml
# .github/workflows/stokes.yml
name: Stokes Systems Boundary Gate

on:
  pull_request:
    branches: [main, production]
  push:
    branches: [main]

jobs:
  verify-boundaries:
    name: Verify Cross-Compiler Contracts
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install Stokes
        run: |
          curl -fsSL https://stokes.dev/install.sh | sh
          echo "$HOME/.local/bin" >> $GITHUB_PATH

      - name: Run Stokes Strict Verification Gate
        run: stokes verify --strict
```

---

## 6. Local Model Context Protocol (MCP) Server Launch

Stokes provides a built-in Model Context Protocol (MCP) server operating over standard input/output (`stdio`). This allows AI development tools such as Cursor, Windsurf, Claude Code, and IBM Bob 2.0 to inspect boundary contracts, run property tests, and synthesize zero-allocation patches natively within your editor.

### Launching the MCP Server

```bash
stokes mcp
```

### Configuring IDE Clients

#### Cursor Configuration (`.cursor/mcp.json`)

Add the following to your project's `.cursor/mcp.json`:

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

#### Claude Desktop Configuration (`claude_desktop_config.json`)

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

### Exposed MCP Tools

When connected via MCP, the following tools are available to coding agents:

- `stokes_scan`: Scans a directory for untyped seams, unbounded loops, and slice unwraps.
- `stokes_audit`: Performs deep static analysis and outputs detailed remediation plans.
- `stokes_verify`: Fast invariant verification pass returning structured JSON diagnostics.
- `stokes_remediate`: Dispatches automated AST repairs to synthesize safe Dual-Zone fallback routines.
- `stokes_cert`: Cryptographically updates and re-signs `stokes.lock`.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MCP SERVER TOOL INTERACTION                     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   IDE Agent (Cursor / Claude)               Stokes MCP Server (stdio)  │
│               │                                         │              │
│               ├─────── callTool("stokes_verify") ──────►│              │
│               │                                         │              │
│               │◄────── { passed: false, risk: 1.40 } ───┤              │
│               │                                         │              │
│               ├─────── callTool("stokes_remediate") ───►│              │
│               │                                         │              │
│               │◄────── { unified_diff: "@@ -42,7 +42..."}              │
│               │                                         │              │
└────────────────────────────────────────────────────────────────────────┘
```

> [!TIP]
> When modifying database schemas or Rust edge buffers, ask your IDE agent: *"Verify the cross-boundary contracts with Stokes before pushing."* The agent will call `stokes_verify` through MCP and alert you to cardinality mismatches before code review.
