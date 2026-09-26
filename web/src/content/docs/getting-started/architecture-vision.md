---
title: "Architecture Vision & Design Principles"
description: "Why single-language compilers fail across multi-tier distributed pipelines and the design principles behind Stokes."
author: "Yuliet Li (yvliet)"
license: "MIT"
---

# Architecture Vision & Design Principles

Modern hyperscale cloud architectures are polyglot by necessity. Relational and analytical databases excel at querying columnar storage; dynamic languages like Python excel at flexible data transformation and rapid feature extraction; compiled systems languages like Rust and C++ excel at deterministic, zero-allocation packet processing at the edge.

However, decoupling systems into specialized linguistic tiers creates an architectural fault line: **the untyped cross-boundary seam**.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        THE CROSS-BOUNDARY COMPILER VOID                                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   SQL Translation Unit         Python Runtime AST               Rust Compilation Unit  │
│   (Analytical Engine)          (ETL Feature Extractor)          (Edge Reverse Proxy)   │
│                                                                                        │
│   ┌────────────────────┐       ┌────────────────────┐          ┌────────────────────┐  │
│   │ ClickHouse DDL     │       │ worker.py          │          │ ingress.rs         │  │
│   │ system.columns     │       │ dict packing       │          │ [Feature; 200]     │  │
│   │ 280 rows           │       │ payload = [...]    │          │ slice.try_into()   │  │
│   └─────────┬──────────┘       └─────────┬──────────┘          └─────────┬──────────┘  │
│             │                            │                               │             │
│             ▼                            ▼                               ▼             │
│   ┌────────────────────┐       ┌────────────────────┐          ┌────────────────────┐  │
│   │ sqlfluff           │       │ mypy / ruff        │          │ rustc / clippy     │  │
│   │ Status: PASS       │       │ Status: PASS       │          │ Status: PASS       │  │
│   └────────────────────┘       └────────────────────┘          └────────────────────┘  │
│             │                            │                               │             │
│             └────────────────────────────┼───────────────────────────────┘             │
│                                          ▼                                             │
│                           THE SYSTEMIC VERIFICATION VOID                               │
│                   No compiler checks: Cardinality(SQL) <= Buffer(Rust)                 │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## The Systemic Void Across Polyglot Tiers

Consider a typical production incident path observed in large-scale edge networks:

1. **Analytical Data Layer (SQL DDL)**:
   A data engineering team provisions internal shard tables (`signals_shard_r0`, `signals_shard_r1`) for an offline analytics experiment. The DDL script executes without errors. The migration passes continuous integration under SQL linters (`sqlfluff`, `sqllineage`).

2. **Feature Extraction Pipeline (Python ETL)**:
   A background worker queries database metadata using dynamic reflection (`SELECT name FROM system.columns WHERE table LIKE 'signals%'`). Because the query omits database qualification, it reflects 280 columns instead of the 200 canonical signals. Python serializes these 280 fields into an untyped dictionary and writes it to a high-speed distributed key-value store (e.g., Redis or Quicksilver). `mypy` and `pytest` report zero defects because dynamic dictionaries conform to `dict[str, Any]`.

3. **Edge Ingress Proxy (Rust L7 Engine)**:
   A fleet of edge proxies ingests the key-value configuration. To process millions of requests per second under strict 5-microsecond budgets, the proxy avoids dynamic heap allocations on the packet path, decoding features directly into a fixed-size stack array: `[Feature; 200]`. Converting the 280-element slice via `.try_into().unwrap()` triggers an immediate `TryFromSliceError` panic. Worker threads abort, epoll event loops collapse, and the entire edge fleet enters synchronized crash loops.

---

## Why Single-Language Linters Provide False Confidence

The fundamental design flaw in modern verification tooling is **isolation**. Each linter is mathematically sound only within its own closed-world assumption:

| Compiler / Tool | Verification Domain | Blind Spot |
|---|---|---|
| `sqlfluff` | SQL AST, lexical grammar, dialect syntax | Ignores which downstream services consume query result sets. |
| `mypy` / `pyright` | Python type hints, class signatures | Treats external network payloads and serialized dictionaries as unchecked `Any`. |
| `rustc` / `clippy` | Rust borrow checker, memory safety, local monomorphization | Assumes external wire inputs will conform to declared stack buffer lengths. |
| `buf` / `protoc` | Protobuf schema syntax, backward field numbering | Does not govern dynamic SQL tables or KV payload boundaries without explicit IDL rewrites. |

Single-language linters yield false confidence because they verify syntax rather than architectural reachability. When every individual test suite in a polyglot repository reports 100% green status, the system as a whole can still be mathematically guaranteed to fail upon first contact in production.

> [!NOTE]
> The bug in a cross-boundary incident does not exist in the SQL repository, the Python repository, or the Rust repository. It exists exclusively in the mathematical cardinality relationship between tiers:
>
> $$\mathcal{C}_{\text{upstream}} > \mathcal{B}_{\text{downstream}}$$

---

## Core Architectural Principles of Stokes

Stokes is designed around three foundational systems engineering principles:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        STOKES CORE PRINCIPLES                          │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  1. Declarative Manifests vs. Intrusive IDLs                           │
│     - Zero intrusive code generation                                   │
│     - Preserves native idioms (#[repr(C)], dict, SQL views)            │
│     - Derives contracts directly from source code ASTs                 │
│                                                                        │
│  2. Zero-Runtime Overhead in Production                                │
│     - Pure static verification in CI (< 38ms)                          │
│     - Zero agent daemons or sidecars in production binaries            │
│     - L7 data plane retains sub-10ns stack allocation                  │
│                                                                        │
│  3. Tolerant Readers & Staged Rollout Coordination                     │
│     - Consumer Expands First deployment order                          │
│     - Downstream buffer capacity >= Upstream projection cardinality    │
│     - Elimination of poly-repo merge deadlocks                         │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### 1. Declarative Manifests vs. Intrusive IDLs

Traditional attempts to solve cross-boundary type safety mandate intrusive Interface Definition Languages (IDLs) such as Protobuf, gRPC, FlatBuffers, or Apache Thrift. In distributed storage pipelines, forcing an IDL introduces severe friction:
- **Impedance Mismatch**: Analytical databases (ClickHouse, PostgreSQL) execute relational algebra and dynamic metadata queries; they do not speak gRPC or Protobuf natively.
- **Forced Code Generation**: IDLs force developers to rewrite idiomatic code into generated stubs, introducing runtime serialization overhead and breaking zero-copy memory layouts (`#[repr(C, align(8))]`).
- **Unbounded Repeated Fields**: Even within Protobuf schemas, fields defined as `repeated Feature items = 1;` are unbounded at the wire level unless constrained by custom validation plugins.

Stokes rejects intrusive IDLs. Instead, it employs **non-invasive static AST extraction** paired with lightweight declarative manifests (`stokes.toml` or `stokes.yaml`):

```toml
# stokes.toml: Declarative non-intrusive boundary definition
[workspace]
name = "edge-feature-mesh"
version = "1.0.0"

[[channels]]
id = "bot_signals_v1"
wire_format = "json"
transport = "kv_store"

[channels.producer]
source = "services/etl/worker.py"
ast_query = "python_extractor_query"
cardinality_ceiling = 200

[channels.consumer]
source = "crates/proxy/src/intake.rs"
ast_query = "rust_slice_unwrap_query"
buffer_capacity = 200
```

Stokes reads your existing source code ASTs directly. You do not rewrite your database tables, rewrite your Python extractors into gRPC servers, or replace your Rust structs with bloated generated code.

### 2. Zero-Runtime Overhead in Production

Edge reverse proxies operate in an uncompromising environment: packet intake pipelines must evaluate incoming traffic in microseconds without jitter. Introducing runtime observability sidecars, dynamic eBPF probes, or runtime schema validators on the critical packet path introduces severe latency tail penalties.

Stokes enforces a strict separation of concerns:
- **Compile-Time Static Analysis**: Stokes executes in continuous integration as an AST gate (`stokes verify --strict`), terminating in under 38 milliseconds.
- **Production Data Plane**: Zero Stokes code is linked into production application binaries. Production edge proxies retain sub-10ns stack allocations, 25 contiguous cache lines, and zero pointer indirections.

```
+-------------------------------------------------------------------------+
| VERIFICATION TIMELINE                                                   |
|                                                                         |
| Pull Request Phase (CI Gate)        Production Packet Path (Data Plane) |
| [Stokes CLI: Tree-sitter AST]       [Direct L7 Intake: Rust / C++]      |
| Latency: < 38 ms                    Latency: < 10 ns (Zero Stokes Code) |
| Output: stokes.lock Verified        Throughput: Millions of reqs/sec    |
+-------------------------------------------------------------------------+
```

### 3. Tolerant Readers & Staged Rollout Coordination

In microservice environments with decoupled git repositories, enforcing cross-boundary contracts cannot rely on synchronized multi-repo atomic commits. A naive CI gate that blocks any PR altering upstream schemas creates circular merge deadlocks:
- The upstream team cannot merge their feature addition because downstream buffers are too small.
- The downstream team cannot merge their buffer expansion because upstream schemas have not been released.

Stokes formalizes the **Consumer Expands First (Tolerant Reader)** deployment protocol:

```
Step 1: Downstream Expansion (PR 101 - Edge Proxy Repository)
  - Buffer expanded: [Feature; 200] → [Feature; 512]
  - Upstream production emission remains: 200
  - Invariant evaluation: 200 <= 512 (Risk = 0.39 <= 1.0)
  - Result: CI PASSES. PR merges and deploys to production fleet.

Step 2: Upstream Emission Expansion (PR 102 - Analytics Repository)
  - ClickHouse DDL & Python extractor emission expanded: 200 → 280
  - Downstream active fleet capacity is now: 512
  - Invariant evaluation: 280 <= 512 (Risk = 0.55 <= 1.0)
  - Result: CI PASSES. PR merges safely without production downtime.
```

By verifying that consumer capacity is always greater than or equal to producer cardinality ($\mathcal{B}_{\text{downstream}} \ge \mathcal{C}_{\text{upstream}}$), Stokes enables autonomous poly-repo progression without risking runtime boundary crashes.

---

## Architectural Comparison Matrix

| Capability | Traditional Linters (`mypy`, `clippy`) | Traditional IDLs (`protobuf`, `grpc`) | Dynamic Taint Analysis (`codeql`) | Stokes Platform |
|---|---|---|---|---|
| **Analysis Scope** | Single translation unit | Wire schema definitions | Interprocedural source-to-sink | Polyglot cross-boundary interface graphs |
| **Execution Latency** | Seconds | Code generation time | Minutes to hours | Under 38 milliseconds in CI |
| **Runtime Overhead** | 0 ns | Microseconds (serialization) | 15% - 40% (if runtime tracking) | Exactly 0 ns (zero production binary injection) |
| **SQL Schema Visibility** | None | None | Limited / heuristic | Direct Tree-sitter AST + DDL introspection |
| **Multi-Repo Safe** | No | No (requires schema repos) | No | Yes (staged consumer-first verification) |
| **AI Agent Interface** | None | None | None | Native JSON-RPC MCP Server (`stokes mcp`) |

> [!TIP]
> Use Stokes as the authoritative boundary verification gate in your repository alongside your existing language-specific linters. Keep `sqlfluff` for SQL formatting, `ruff` and `mypy` for Python idioms, and `cargo clippy` for Rust idiomatic linting. Let Stokes govern the untyped seams where those tools lose visibility.
