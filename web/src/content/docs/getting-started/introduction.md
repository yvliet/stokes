---
title: "Introduction to Stokes"
description: "Cross-boundary systems invariant verification engine and autonomous multi-agent synthesis."
author: "Yuliet Li (yvliet)"
license: "MIT"
---

# Introduction to Stokes

Stokes is a cross-boundary systems invariant verification engine designed for polyglot distributed architectures. Built by Yuliet Li (`yvliet`), Stokes eliminates catastrophic cloud outages caused by semantic drift across compiler boundaries.

Modern cloud infrastructure does not break within single-language silos; it breaks at the untyped seams connecting analytical databases, asynchronous event pipelines, dynamic extractors, and low-latency edge proxies. Stokes detects, models, and prevents these failures at compile time in CI and during automated pull request gates.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CROSS-BOUNDARY COMPILER BLINDNESS SEAM                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   [Analytical DDL: SQL]      [Feature Extractor: Python]      [Edge Reverse Proxy: Rust]│
│   migrations/004_stats.sql    services/etl/worker.py           crates/proxy/src/intake.rs│
│            │                             │                                  │          │
│            ▼                             ▼                                  ▼          │
│     ClickHouse Schema             Dynamic Dict                     [Feature; 200]      │
│     280 Columns Emitted           280 Items Serialized             Fixed Stack Array   │
│            │                             │                                  │          │
│       sqlfluff: PASS                mypy: PASS                         rustc: PASS     │
│            │                             │                                  │          │
│            └──────────────►──────────────┴────────────────►─────────────────┘          │
│                                                                                        │
│   FATAL RUNTIME COLLISION: Mathematical Boundary Breach (280 features > 200 buffer)    │
│   Result: TryFromSliceError panic / 100% 502 Bad Gateway blackout across edge fleet    │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

> [!IMPORTANT]
> Compilers are blind to external systems boundaries. `sqlfluff` verifies valid SQL syntax. `mypy` verifies Python type annotations. `rustc` enforces borrow semantics and memory safety within local compilation units. None of these tools can observe that a SQL schema modification emits 280 fields into an edge proxy stack buffer allocated for 200 elements.

---

## The Context Blindness Principle

In multi-tier microservice architectures, data contracts span heterogeneous technologies:
1. **Tier 1 (Analytical Catalog)**: Databases like ClickHouse, PostgreSQL, or Snowflake execute DDL migrations and export table columns via virtual introspection tables (`system.columns`, `information_schema`).
2. **Tier 2 (ETL & Serialization)**: Dynamic workers written in Python, Node.js, or Go ingest catalog metadata, construct dynamic dictionaries, and broadcast payloads over Redis, Kafka, or distributed KV stores.
3. **Tier 3 (Edge Intake)**: High-throughput L7 reverse proxies written in Rust (Pingora, Envoy) or C++ consume payloads into fixed-size stack arrays to avoid dynamic heap allocations and maintain sub-microsecond packet intake latencies.

When upstream analytics teams introduce internal shard columns or new feature flags, downstream proxy services crash on deserialization. Single-language linters cannot catch this because each repository compiles cleanly in isolation. We define this systemic vulnerability as **Context Blindness**:

$$\text{Visibility}(\text{Compiler}_i) \cap \text{Domain}(\text{Compiler}_j) = \emptyset \quad \forall \; i \neq j$$

Stokes solves Context Blindness by lifting interface signatures from isolated abstract syntax trees (ASTs) into a unified, sparse **Interface Boundary Compatibility Graph**.

---

## Core System Architecture

Stokes delivers cross-boundary verification and autonomous repair sharing a unified semantic core:

```
                                  ┌───────────────────────────┐
                                  │      Stokes Core Engine   │
                                  │ (Semantic AST Extraction) │
                                  └─────────────┬─────────────┘
                                                │
                       ┌────────────────────────┴────────────────────────┐
                       ▼                                                 ▼
        ┌─────────────────────────────┐                   ┌─────────────────────────────┐
        │    Next-Gen Systems Linter  │                   │ Autonomous Agent Synthesis  │
        │ - Sub-38ms CI execution gate│                   │ - Multi-agent bridge (Bob)  │
        │ - Sparse boundary graph     │                   │ - Certified TieredBuffer    │
        │ - stokes.lock verification  │                   │ - Unified diff generation   │
        │ - Native MCP agent server   │                   │ - Zero runtime panic patch  │
        └─────────────────────────────┘                   └─────────────────────────────┘
```

### 1. Next-Gen Systems Linter (< 38ms Gate)
The Stokes command-line engine runs as a zero-dependency static analysis gate in continuous integration pipelines:
- **Tree-sitter Parsing**: Compiles Tree-sitter C-grammars to extract schema projections from SQL, Python, Rust, and Protobuf in parallel.
- **Sparse Boundary Analysis**: Discards non-boundary internal function bodies, evaluating only declared interfaces and wire sinks.
- **Microsecond Graph Resolution**: Verifies cardinality bounds, alignment constraints, and type projections across boundaries in under 1 millisecond.
- **Lockfile Enforcement**: Compares semantic AST digests against `stokes.lock`, failing PRs with non-zero exit codes if unhedged breaking changes occur.

```
Execution Budget (38ms CI Target):
  Phase 1: Tree-sitter C-parsing (boundary files)      →  8.2 ms
  Phase 2: Boundary signature filtering                →  6.4 ms
  Phase 3: Sparse boundary graph evaluation            →  0.8 ms
  Phase 4: AST normalization & canonicalization        → 12.1 ms
  Phase 5: SHA-256 digest computation & lockfile check →  4.5 ms
  Phase 6: Terminal output & process exit              →  3.2 ms
  Total Execution Latency                              → 35.2 ms
```

### 2. Autonomous Multi-Agent Invariant Synthesis
Stokes connects boundary analysis directly to AI coding workflows:
- **Direct Multi-Agent Dispatch**: Transmits exact mathematical invariants, cardinality bounds, and fail-fast constraints to IBM Bob 2.0, Claude Code, Cursor, and custom CLI tools.
- **Certified Buffer Synthesis (`stokes codegen`)**: Synthesizes verified `TieredBuffer<T, INLINE, SPILL>` implementations with $< 1\text{ ns}$ inline evaluation and zero runtime panics.
- **Native MCP Protocol (`stokes mcp`)**: Full JSON-RPC 2.0 stdio server providing IDE agents with live boundary contracts, AST diagnostics, and verified patch simulation.

---

## The Cardinality Invariant

The primary mathematical invariant enforced by Stokes across all system boundaries is the **Cardinality Decision Invariant**:

$$\text{Risk} = \frac{\mathcal{C}_{\text{upstream}}}{\mathcal{B}_{\text{downstream}}}$$

Where:
- $\mathcal{C}_{\text{upstream}}$ is the maximum potential cardinality emitted by upstream queries, reflection loops, or unbounded message fields.
- $\mathcal{B}_{\text{downstream}}$ is the physical buffer capacity of downstream consumer memory allocations.

```
Boundary Invariant Conditions:
  Risk <= 1.0 AND Upstream Bounded  →  INVARIANT SATISFIED (Contract Verified)
  Risk > 1.0 (Finite Overflow)      →  FATAL CONTRACT DRIFT (Reachable Panic)
  Risk = Infinity (Unbounded Wire)  →  UNBOUNDED CAPACITY HAZARD (OOM / Denial of Service)
```

> [!WARNING]
> When upstream cardinality $\mathcal{C}_{\text{upstream}} = 280$ and downstream capacity $\mathcal{B}_{\text{downstream}} = 200$, $\text{Risk} = 1.40 > 1.0$. Downstream conversion via direct slice slicing or `.try_into().unwrap()` is mathematically guaranteed to panic at runtime under production load.

---

## Core Diagnostic Rules

Stokes evaluates five diagnostic rules across heterogeneous boundaries:

| Rule Code | Severity | Trigger Condition | Root Cause & Failure Mode |
|---|---|---|---|
| `LINT-001` | FATAL | `system.columns` without `database = currentDatabase()` | Ingestion of replica shard tables (`r0`, `r1`), silently inflating column projection count. |
| `LINT-002` | FATAL | Dynamic dictionary serialization without slice guards | Unbounded feature reflection loop bypasses Python type check, creating downstream buffer overflow. |
| `LINT-003` | WARNING | Distributed KV mesh broadcast without schema hash | Dynamic schema propagation without cryptographic integrity checks; vulnerable to stale configuration drift. |
| `LINT-004` | FATAL | Direct `.try_into().unwrap()` on fixed stack buffer | Immediate `TryFromSliceError` panic or 502 Bad Gateway drop when upstream cardinality exceeds buffer size $N$. |
| `LINT-005` | WARNING | Heap allocations on microsecond intake hot path | Cache line evictions degrading latency from sub-10ns register evaluation to microsecond tail spikes. |

---

## Multi-Agent Verification Architecture

Stokes couples static verification with an autonomous multi-agent core. Built on the IBM Bob 2.0 runtime, Stokes orchestrates five specialized language subagents communicating over length-prefixed binary sockets:

- `stokes-sql`: Tree-sitter SQL AST visitor detecting unqualified schema queries and catalog reflections.
- `stokes-proto`: Protobuf AST analyzer detecting unbounded `repeated` fields lacking boundary options.
- `stokes-python`: Python AST traverser finding unguarded dictionary loops and serialization sinks.
- `stokes-rust`: Rust syn/Tree-sitter parser identifying fixed stack buffer unwraps and cache-unfriendly allocations.
- `stokes-verify`: Verification harness running property tests and synthesizing verified unified diff patches.

```
┌────────────────────────────────────────────────────────────────────────┐
│                    IBM BOB 2.0 MULTI-AGENT ORCHESTRATION               │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│                      ┌──────────────────────┐                          │
│                      │  Stokes Orchestrator │                          │
│                      └──────────┬───────────┘                          │
│                                 │ Length-Prefixed Binary Wire (IPC)    │
│            ┌──────────────┬─────┴────────┬──────────────┐              │
│            ▼              ▼              ▼              ▼              │
│     ┌─────────────┐┌─────────────┐┌─────────────┐┌─────────────┐       │
│     │ stokes-sql  ││stokes-python││ stokes-rust ││stokes-verify│       │
│     └──────┬──────┘└──────┬──────┘└──────┬──────┘└──────┬──────┘       │
│            │              │              │              │              │
│            └──────────────┴──────┬───────┴──────────────┘              │
│                                  ▼ Streaming Event Bus                 │
│                      ┌──────────────────────┐                          │
│                      │ ANSI Multi-Line TUI  │                          │
│                      │ 60 FPS Render Tick   │                          │
│                      └──────────────────────┘                          │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Author & Attribution

Stokes is engineered exclusively by **Yuliet Li (`yvliet`)**.

- **Maintainer**: Yuliet Li (`yvliet`)
- **License**: MIT License
- **Target Runtimes**: SQL (ClickHouse, PostgreSQL), Python 3.11+, Rust 1.80+, Protobuf v3/v2
- **Flagship Benchmark**: Dirichlet Proxy (Cloudflare Nov 18, 2025 Incident Model)
