---
title: "Command Line Interface (CLI) Reference"
description: "Comprehensive systems reference for the Stokes CLI: subcommands, flags, exit codes, CI environment variables, and ANSI terminal rendering."
author: "Yuliet Li (yvliet)"
license: "MIT"
---

# Stokes CLI Reference

The Stokes Command Line Interface (`stokes`) is the unified systems tool for cross-boundary contract verification, semantic AST diffing, automated buffer synthesis, and CI/CD gate enforcement. Engineered by Yuliet Li (`yvliet`), the CLI operates as a standalone zero-dependency binary delivering sub-38ms execution latency in automated pipelines.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        STOKES CLI SUBSYSTEM TOPOLOGY                   │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│                          stokes [COMMAND] [FLAGS]                      │
│                                     │                                  │
│         ┌───────────────────────────┼───────────────────────────┐      │
│         ▼                           ▼                           ▼      │
│  [Pipeline Gates]            [Autonomous Engines]        [Agent Bridge]│
│  - verify                    - codegen                   - mcp         │
│  - check                     - diff                      - audit       │
│  - cert                      - graph                     - remediate   │
│  - scan                      - init                      - patch       │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Global CLI Conventions & Environment Variables

All Stokes commands accept standard POSIX flags and adhere to twelve-factor CLI architecture.

### Global Options

| Option | Shorthand | Type | Description |
|---|---|---|---|
| `--version` | `-V` | Flag | Print Stokes engine version, target architecture, and exit. |
| `--help` | `-h` | Flag | Print context-sensitive subcommand help and flag definitions. |

### Environment Variables

Stokes can be configured through environment variables to simplify execution in containerized CI/CD environments (GitHub Actions, GitLab CI, Buildkite):

```bash
# Force strict exit code failure on any contract warning or drift
export STOKES_STRICT=1

# Specify custom cryptographic lockfile location (default: ./stokes.lock)
export STOKES_LOCKFILE_PATH=/etc/stokes/production.lock

# Disable VT-100 ANSI color sequences for raw machine log parsing
export STOKES_NO_COLOR=1

# CI environment detection (auto-disables interactive animations)
export CI=true

# Preferred autonomous agent backend for remediation dispatch
export STOKES_AGENT=bob

# Set base workspace root for poly-repo cross-boundary evaluation
export STOKES_WORKSPACE=/workspace

# Set internal engine logging verbosity (trace, debug, info, warn, error)
export STOKES_LOG_LEVEL=info
```

---

## Terminal Rendering Engine & ANSI Architecture

Stokes features a custom reactive terminal UI driver designed for systems engineering environments. It avoids generic terminal dependencies and implements direct VT-100 escape code rendering.

```
┌────────────────────────────────────────────────────────────────────────┐
│                      REACTIVE ANSI DRIVER CAPABILITIES                 │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  1. 3x3 Matrix Bracket Banner: High-density unicode box drawing.       │
│  2. In-Place Cursor Overwrite: ANSI code \033[<N>A for multi-line      │
│     progress without terminal scroll pollution.                        │
│  3. 60 FPS Bracketless Loaders: Smooth 16.6ms monotonic tick           │
│     coalescing to eliminate UI stutter and queue bloat.                │
│  4. Tree-Nested Connectors: Visual hierarchical display of concurrent  │
│     subagents (stokes-sql, stokes-python, stokes-rust, stokes-proto).  │
│  5. Dynamic Unified Diff Highlighting: Syntax-colored additions and    │
│     deletions for generated boundary patches.                          │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

On Windows platforms (`win32`), Stokes automatically initializes virtual terminal processing via Windows Console API calls (`ENABLE_VIRTUAL_TERMINAL_PROCESSING`) and reconfigures standard I/O streams to UTF-8 before emitting escape codes.

---

## Exit Codes Reference

Stokes returns deterministic POSIX exit codes to integrate directly with automated build and deployment pipelines:

| Exit Code | Classification | Operational Semantics | Recommended CI Action |
|:---:|---|---|---|
| `0` | **Success / Compliant** | All cross-boundary invariants hold. Emitted schema cardinality $\mathcal{C} \le \mathcal{B}$ downstream capacity. Cryptographic AST digests match `stokes.lock`. | Allow pull request merge; proceed to packaging. |
| `1` | **Contract Breach / Fatal Drift** | Invariant violated. Peak Cardinality Risk Ratio $> 1.0$, unhandled slice `.unwrap()` detected, or AST digests do not match `stokes.lock`. | Block pull request merge; notify author and dispatch remediation. |
| `2` | **Configuration / Manifest Error** | Missing `.stokes/contracts.json` or invalid CLI arguments under `--strict` mode. | Verify workspace path and run `stokes scan` or `stokes init`. |
| `130` | **Interrupted** | Process received `SIGINT` (Ctrl+C) or execution timed out. | Abort pipeline step. |

---

## Command Reference

### `stokes verify`

Execute comprehensive cross-boundary contract verification, property fuzzing batteries, micro-benchmark validations, and CI gate assertions.

```bash
stokes verify [PATH] [OPTIONS]
```

#### Detailed Description
`stokes verify` is the primary continuous integration gate command. It parses source files across language boundaries, extracts declared schema limits, evaluates the Cardinality Risk Ratio ($\text{Risk} = \mathcal{C} / \mathcal{B}$), runs an adversarial 10,000-case IEEE-754 float fuzzer, and evaluates micro-benchmarks against Criterion baselines.

#### Arguments & Options

| Option | Type | Default | Description |
|---|---|---|---|
| `PATH` | Positional | `.` | Target workspace path containing boundaries to verify. |
| `--strict` | Boolean | `true` | Exit with code `1` if any invariant breach, unhandled unwrap, or digest mismatch is found. |
| `--consumer PATH` | String | `None` | Path to downstream consumer repository for poly-repo sequence verification. |
| `--producer PATH` | String | `None` | Path to upstream producer repository for poly-repo sequence verification. |
| `--lockfile PATH` | String | `stokes.lock` | Path to cryptographic boundary lockfile to verify AST digests against. |
| `--format FORMAT` | String | `ansi` | Output format: `ansi` (interactive TUI), `json` (machine readable), `junit` (CI test runner). |

#### Example Usage

```bash
# Standard CI verification run
stokes verify --strict

# Poly-repo Tolerant Reader verification across decoupled repositories
stokes verify \
  --consumer=../edge-proxy-service \
  --producer=../analytics-pipeline \
  --strict

# Emit structured JSON report for downstream automation
stokes verify --format=json > verification-report.json
```

---

### `stokes codegen`

Synthesize certified zero-heap intake buffers (`TieredBuffer`), boundary adapters, and invariant property test vectors directly into target source code.

```bash
stokes codegen [PATH] [OPTIONS]
```

#### Detailed Description
When downstream services consume unbounded or expanding upstream payloads, developers often resort to dynamic heap allocations (`Vec<T>`), causing L1D cache eviction stalls and allocator lock contention. `stokes codegen` analyzes the upstream schema cardinality and automatically synthesizes a high-performance, two-tier bounded intake struct in Rust or C++.

The synthesized `TieredBuffer<T, INLINE, SPILL>` provides:
1. **Inline Stack Storage**: Array storage for up to `INLINE` items evaluated in $< 1 \text{ ns}$ with zero heap allocation.
2. **Bounded Spillover Storage**: Bounded secondary array for up to `SPILL` items, preserving 100% data fidelity without memory exhaustion.
3. **Resilience Contract**: Complete elimination of thread panics and 502 Bad Gateway blackouts.

#### Arguments & Options

| Option | Type | Default | Description |
|---|---|---|---|
| `PATH` | Positional | `.` | Target workspace path. |
| `--consumer PATH` | String | `None` | Target source file containing the intake buffer to patch. |
| `--write` | Flag | `false` | Apply synthesized changes directly to target source files on disk. |
| `--export-patch` | Flag | `false` | Export synthesized unified diff to `.stokes/remediation.patch`. |

#### Example Usage & Output

```bash
stokes codegen crates/dirichlet-proxy --consumer=src/engine/feature_ingest.rs --write
```

Synthesized Rust buffer intake pattern:

```rust
// Autogenerated by Stokes Autonomous Buffer Synthesizer v0.2.0
// Boundary: ClickHouse DDL (280 features) → Rust L7 Proxy (200 base capacity)

#[repr(C, align(64))]
pub struct TieredBuffer<T: Copy, const INLINE: usize, const SPILL: usize> {
    pub inline: [std::mem::MaybeUninit<T>; INLINE],
    pub spill: [std::mem::MaybeUninit<T>; SPILL],
    pub inline_len: usize,
    pub spill_len: usize,
}

impl<T: Copy, const INLINE: usize, const SPILL: usize> TieredBuffer<T, INLINE, SPILL> {
    pub const CAPACITY: usize = INLINE + SPILL;

    #[inline(always)]
    pub fn push(&mut self, item: T) -> Result<(), ContractCapacityExceededError> {
        if self.inline_len < INLINE {
            unsafe { self.inline[self.inline_len].as_mut_ptr().write(item); }
            self.inline_len += 1;
            Ok(())
        } else if self.spill_len < SPILL {
            unsafe { self.spill[self.spill_len].as_mut_ptr().write(item); }
            self.spill_len += 1;
            Ok(())
        } else {
            Err(ContractCapacityExceededError {
                received: self.inline_len + self.spill_len + 1,
                limit: Self::CAPACITY,
            })
        }
    }
}
```

---

### `stokes mcp`

Launch the native Model Context Protocol (MCP) server over standard I/O (`stdio`) using JSON-RPC 2.0 framing.

```bash
stokes mcp
```

#### Detailed Description
Exposes the complete Stokes verification engine, sparse boundary graph traversal, and automated patching tools directly to AI coding agents, including Cursor, Claude Code, Windsurf, and IBM Bob 2.0. The server supports the MCP 2024-11-05 protocol version.

#### Example Usage

```bash
# Launch stdio MCP listener (invoked by IDE host or agent orchestrator)
stokes mcp
```

Agent configuration block (`~/.cursor/mcp.json` or `claude_desktop_config.json`):

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

---

### `stokes diff`

Compute semantic contract diffs between git revisions, branches, or local worktrees, stripping non-breaking whitespace and formatting changes.

```bash
stokes diff [REVISION_A] [REVISION_B] [OPTIONS]
```

#### Detailed Description
Standard `git diff` produces syntax diffs: changing whitespace, renaming internal private variables, or reformatting with `rustfmt` / `black` produces noise that triggers false alarms in deployment pipelines. `stokes diff` parses the boundary AST of both revisions, normalizes signatures, and reports only breaking contract modifications:
- Expanded column cardinality in SQL DDL migrations
- Reduced stack buffer capacity in downstream consumers
- Dropped or renamed public wire serialization fields
- Unbounded repeated protobuf tags

#### Arguments & Options

| Option | Type | Default | Description |
|---|---|---|---|
| `REVISION_A` | Positional | `HEAD~1` | Base git commit, branch, or tag. |
| `REVISION_B` | Positional | `HEAD` | Target git commit, branch, or working tree. |
| `--path PATH` | String | `.` | Workspace path to analyze. |
| `--stat` | Flag | `false` | Emit summary count of contract additions and breaking breaches. |

#### Example Usage

```bash
# Compare current working tree against main branch
stokes diff origin/main HEAD

# Check contract drift between git tags
stokes diff v1.4.0 v1.5.0 --stat
```

---

### `stokes graph`

Traverse discovered system boundaries and emit the Interface Boundary Compatibility Graph in DOT, JSON, or SVG format.

```bash
stokes graph [PATH] [OPTIONS]
```

#### Detailed Description
Lifts polyglot codebases into a directed reachability graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$, linking analytical SQL tables, Python ETL reflection routines, and Rust L7 edge proxies. The generated output highlights critical paths where upstream cardinality exceeds downstream intake buffers.

#### Arguments & Options

| Option | Type | Default | Description |
|---|---|---|---|
| `PATH` | Positional | `.` | Workspace path. |
| `--format` | Choice | `dot` | Output format: `dot`, `json`, `svg`. |
| `--direction` | Choice | `lr` | Graph orientation: `lr` (left to right), `td` (top down). |
| `--output FILE` | String | `stdout` | Destination file path for rendered graph. |

#### Example Usage

```bash
# Emit Graphviz DOT graph to stdout
stokes graph --format=dot

# Render SVG dependency topology directly
stokes graph --format=svg --output=docs/boundary-graph.svg

# Inspect JSON graph nodes for custom tooling
stokes graph --format=json | jq '.edges[] | select(.risk_ratio > 1.0)'
```

Sample DOT output:

```dot
digraph StokesBoundaryGraph {
  rankdir=LR;
  node [shape=box, fontname="Courier", fontsize=10];
  
  // Producer schema nodes
  sql_bot_signals [label="ClickHouse: bot_signals\nCardinality: 280 cols", color="#da3633"];
  
  // Transport wire nodes
  py_etl [label="Python: catalog_sync.py\nDynamic Dict Payload", color="#d29922"];
  
  // Consumer buffer nodes
  rust_proxy [label="Rust: feature_ingest.rs\nCapacity: 200 slots", color="#da3633"];
  
  // Directed reachability edges
  sql_bot_signals -> py_etl [label="system.columns\n(unscoped)"];
  py_etl -> rust_proxy [label="wire payload\nRisk = 1.40 (FATAL)", color="#da3633", penwidth=2.0];
}
```

---

### `stokes init`

Scaffold a new Stokes contract boundary configuration, manifest template, and baseline lockfile in the target repository.

```bash
stokes init [PATH] [OPTIONS]
```

#### Detailed Description
Initializes the `.stokes/` directory, discovers existing SQL migrations, Python pipelines, and Rust crates, and synthesizes an initial `stokes.yaml` manifest alongside a certified `stokes.lock`.

#### Arguments & Options

| Option | Type | Default | Description |
|---|---|---|---|
| `PATH` | Positional | `.` | Destination repository path. |
| `--force` | Flag | `false` | Overwrite existing `.stokes/` directory and `stokes.lock`. |

#### Example Usage

```bash
stokes init
```

Scaffolded `stokes.yaml` specification:

```yaml
version: "0.2.0"
workspace: "."

channels:
  - id: "bot_signals_v1"
    pattern: "signals:*:*"
    capacity_limit: 200
    fail_fast: true

boundaries:
  producers:
    - path: "migrations/001_bot_signals.sql"
      type: "clickhouse_ddl"
      scope_database: true
  consumers:
    - path: "crates/dirichlet-proxy/src/engine/feature_ingest.rs"
      type: "rust_fixed_buffer"
      max_capacity: 200
```

---

### `stokes scan`

Crawl the target workspace to discover cross-boundary schemas, serialization sinks, and consumer buffers, outputting `.stokes/contracts.json`.

```bash
stokes scan [PATH] [--generate-contract]
```

#### Detailed Description
Scans workspace files, detects active language runtimes (SQL, Python, Rust, Protobuf), and runs initial Tree-sitter AST queries. If `--generate-contract` is provided, Stokes automatically compiles an `AGENTS.md` contract policy file used by AI coding agents.

```bash
stokes scan ../dirichlet --generate-contract
```

---

### `stokes audit`

Dispatch parallel specialized subagents to evaluate contract compliance across SQL, Python, Rust, and Protobuf codebases.

```bash
stokes audit [PATH] [OPTIONS]
```

#### Arguments & Options

| Option | Type | Default | Description |
|---|---|---|---|
| `PATH` | Positional | `.` | Target directory to audit. |
| `--strict` | Boolean | `true` | Exit 1 on any invariant breach. |
| `--agent AGENT` | Choice | `None` | Dispatch remediation to specific agent: `claude`, `bob`, `aider`, `goose`, `openhands`, `generic`, `patch`. |
| `--agent-cmd CMD` | String | `None` | Custom command template for generic agent (e.g. `'my-agent {prompt}'`). |
| `--with-bob` | Flag | `false` | Dispatch detected drift directly to IBM Bob 2.0 CLI. |
| `--export-patch` | Flag | `false` | Write synthesized patch directly to `.stokes/remediation.patch`. |
| `--speed N` | Float | `2.0` | TUI progress animation playback speed multiplier. |

```bash
# Audit with direct dispatch to IBM Bob 2.0
stokes audit --with-bob

# Audit and export patch without interactive prompts
stokes audit --export-patch --non-interactive
```

---

### `stokes check`

Fast, deterministic CI boundary contract gate designed to run in under 38 milliseconds.

```bash
stokes check [PATH] [--consumer PATH] [--producer PATH] [--strict]
```

#### Detailed Description
Evaluates boundary contracts at PR review time to prevent downstream edge panics and upstream pipeline blackouts. Supports poly-repo sequence verification using `--consumer` and `--producer` to enforce the **Consumer Expands First (Tolerant Reader)** rule:
- Downstream consumer buffer PR must merge and deploy first.
- Upstream producer cardinality expansion PR may merge only once downstream capacity $\ge$ new producer cardinality.

```bash
stokes check \
  --consumer=../edge-proxy \
  --producer=../analytics-pipeline \
  --strict
```

---

### `stokes remediate`

Evaluate contract drift and immediately invoke an AI coding agent to apply verified code repairs.

```bash
stokes remediate [PATH] [--agent AGENT] [--with-bob] [--export-patch]
```

Dispatches AST constraints, Peak Cardinality Risk Ratios, and fail-secure patch requirements to the specified AI agent to autonomously refactor unhandled unwraps and unqualified SQL reflection queries.

```bash
stokes remediate --agent=bob
```

---

### `stokes cert`

Generate machine-authoritative `stokes.lock` and human-readable `CONFORMANCE.md` attestation files.

```bash
stokes cert [--output FILE] [PATH]
```

Runs the verification battery, computes normalized semantic AST SHA-256 digests across all discovered schemas, and emits the cryptographic certification record.

```bash
stokes cert --output=stokes.lock
```

---

### `stokes stage-check`

Connect to a live staging database to evaluate active catalog column cardinality against downstream buffer limits.

```bash
stokes stage-check [DATABASE_URL]
```

Inspects `system.columns` or `information_schema` on a staging ClickHouse or PostgreSQL instance to detect schema expansions before migrations reach production.

```bash
stokes stage-check "clickhouse://admin:secret@staging-ch.internal:9000/telemetry"
```

---

## Continuous Integration Automation

### GitHub Actions Workflow

Create `.github/workflows/stokes.yml` to enforce boundary contracts on every pull request:

```yaml
name: Stokes Boundary Gate

on:
  pull_request:
    branches: [main, master]
  push:
    branches: [main, master]

jobs:
  verify-contracts:
    name: Verify Cross-Boundary Invariants
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.13"

      - name: Install Stokes
        run: pip install stokes

      - name: Run Deterministic Boundary Verification
        env:
          STOKES_STRICT: "1"
          CI: "true"
        run: |
          stokes verify --strict --format=ansi

      - name: Verify Stokes Lockfile Integrity
        run: |
          stokes cert --output=stokes.lock.ci
          diff -u stokes.lock stokes.lock.ci
```

---

## Summary & Author Attribution

The Stokes CLI guarantees that architectural contracts across analytical databases, serialization layers, and low-latency edge proxies are verified deterministically before code deployment.

- **Author**: Yuliet Li (`yvliet`)
- **Repository**: [https://github.com/yvliet/stokes](https://github.com/yvliet/stokes)
- **PyPI Package**: `stokes` (`pip install stokes`)
- **License**: MIT License
