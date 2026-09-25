# Stokes Invariant Contract Policy
# Declarative boundary contracts ingested by IBM Bob 2.0 subagents.
# GitHub: yvliet
# Revision: 3.0.0-ENTERPRISE

## Identity & Governance

- **Project**: Stokes — Autonomous Cross-Boundary Systems Verification Engine
- **Engine**: IBM Bob 2.0 Multi-Agent Orchestrator
- **Target Patient**: Dirichlet (Edge Proxy & Analytics Testbed)
- **Maintainer**: yvliet (GitHub: yvliet)
- **Certification Status**: INVARIANTS ACTIVE — VERIFIED

---

## Core Architectural Invariants

### INVARIANT_1: Infallible Intake Elimination

**Severity**: FATAL  
**Rule**: No fixed-size stack buffer allocation (`[T; N]`) on a hot packet intake path shall use `.try_into().unwrap()`, `.try_into().expect()`, or any panicking slice-to-array conversion without an upstream cardinality bound check.  
**Trigger**: `tree-sitter` detects `call_expression` wrapping `field_expression` with `try_into` → `unwrap` or `expect`.  
**Stokes Response**: `stokes-rust` synthesizes Dual-Zone buffer partitioning using `select_nth_unstable_by` with zero heap allocation.  
**Mathematical Condition**: `Risk = C_upstream / B_downstream > 1.0` implies FATAL TRYFROMSLICEERROR reachable.  
**Dirichlet Benchmark**: C_upstream = 280 (200 canonical + 40 shard_r0 + 40 shard_r1), B_downstream = 200. Risk = 1.40 → FATAL.

---

### INVARIANT_2: Transitive Catalog Qualification

**Severity**: FATAL  
**Rule**: All `system.columns` or `system.tables` reflection queries in ClickHouse or PostgreSQL MUST include the predicate `AND database = currentDatabase()` (or equivalent schema-scoping qualifier). Unqualified catalog introspection silently expands projections by reflecting replica shard tables (`r0`, `r1`).  
**Trigger**: `tree-sitter` detects `select_statement` targeting `system.columns` or `system.tables` with `WHERE table = '...'` but without a `database = currentDatabase()` predicate.  
**Stokes Response**: `stokes-sql` injects the scoping predicate. `stokes-python` injects `[:MAX_CANONICAL]` slice guards.  
**Maximum Canonical Features**: 200  
**Observed Shard Duplication**: +80 rows (events_r0: 40, events_r1: 40) → 280 total without scoping.

---

### INVARIANT_3: Thread Isolation & Panic Containment

**Severity**: FATAL  
**Rule**: Edge worker thread evaluators must use `std::panic::catch_unwind` wrapping all evaluation paths. Any uncaught panic in a worker thread crashes the thread without recovery, collapsing the epoll event loop.  
**Trigger**: Worker thread evaluation functions lack `catch_unwind(AssertUnwindSafe(...))` wrappers.  
**Stokes Response**: `stokes-rust` wraps evaluator dispatch in `evaluate_safely()` returning fail-secure `Block` verdict on panic.  
**Fail-Secure Default**: On panic, emit threat_score=100, action=Block (never Pass).

---

### INVARIANT_4: Protobuf Cardinality Bound

**Severity**: WARNING  
**Rule**: Protobuf message fields declared with `repeated` modifier MUST include an explicit `stokes.max_items` field option declaring the maximum expected cardinality. Unbounded `repeated` fields allow unbounded serialized payload growth.  
**Trigger**: `tree-sitter` detects `field` node with `repeated` modifier lacking `stokes.max_items` option.  
**Stokes Response**: `stokes-proto` injects `[(stokes.max_items) = N]` field option with computed cardinality.

---

## Dual-Zone Memory Layout Contract

```
MAX_ACTIVE_FEATURES = 200 (Fixed, 1,600 Bytes)

Zone 0: Slots 0..127  — CORE RESERVED   (priority >= 200, IMMUNE to eviction)
Zone 1: Slots 128..199 — DYNAMIC ADAPTIVE (priority 0..199, lowest shed first)
```

- **FeatureDescriptor**: `#[repr(C, align(8))]`, 8 bytes, `Copy`, zero heap pointers.
- **StaticTelemetryRing**: 4,096 slots, lock-free atomic overwrite, 0 B allocation.
- **ConfigStore**: `ArcSwap<FeatureCatalogState>`, wait-free LKG rollback < 50 ns.
- **select_nth_unstable_by benchmark**: ≤ 7.66 ns (validated by Criterion).
- **heap Vec<Feature> sort benchmark**: ≥ 29.74 ns (confirmed regression baseline).

---

## Float Sanitization Contract

```rust
sanitize_signal_float(val: f32, fail_secure_default: f32) -> f32
```

- Reject NaN, +Infinity, -Infinity → return `fail_secure_default` (= 100.0).  
- Reject subnormals (prevent CPU microcode assist DoS at 100× slowdown).  
- Clamp finite normals to [0.0, 100.0].  
- FTZ/DAZ hardware registers configured at proxy startup (`_MM_SET_FLUSH_ZERO_MODE`).

---

## Wire Protocol Contract

- **Frame Header**: 4-byte big-endian `uint32` length prefix.  
- **Maximum Frame Budget**: 16 MB (`0x01000000`). Frames exceeding budget → disconnect.  
- **Event Bus**: `asyncio.Queue(maxsize=1024)`.  
- **Render Tick**: 16.6 ms coalescing (60 FPS).  
- **Socket Budget Ceiling**: 5 MB (`MAX_CONFIG_PAYLOAD_BYTES = 5 * 1024 * 1024`).

---

## Diagnostic Rule Registry

| Rule     | Severity          | Invariant       | Trigger Pattern                                     |
|----------|-------------------|-----------------|-----------------------------------------------------|
| LINT-001 | FATAL ERROR       | INVARIANT_2     | `system.columns` without `database = currentDatabase()` |
| LINT-002 | FATAL ERROR       | INVARIANT_1     | Unbounded ETL loop without `[:MAX_CANONICAL]` guard |
| LINT-003 | WARNING           | INVARIANT_4     | Schema mesh broadcast without SHA-256 digest        |
| LINT-004 | FATAL ERROR       | INVARIANT_1     | `.try_into().unwrap()` on fixed stack buffer        |
| LINT-005 | WARNING/PERF      | INVARIANT_1     | Heap allocation on microsecond packet path          |

---

## Cardinality Risk Ratio

```
Risk = C_upstream / B_downstream

Risk <= 1.0 AND upstream bounded  → INVARIANT SATISFIED
Risk > 1.0  (finite overflow)     → FATAL CONTRACT DRIFT
Risk = ∞    (unbounded stream)    → UNBOUNDED CAPACITY HAZARD
```

**Current Dirichlet Measurement**: Risk = 280 / 200 = **1.40 → FATAL**

---

## Stokes Lock Contract

`stokes.lock` is the machine-authoritative cryptographic boundary lockfile.  
`CONFORMANCE.md` is the human-readable PR attestation report.  
`stokes verify --strict` is the CI/CD gate (non-zero exit code blocks merge).
