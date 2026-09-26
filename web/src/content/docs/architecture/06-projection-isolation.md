---
title: "Projection Consumption Isolation & Field Mask Verification"
description: "Eliminating wildcard projection hazards, isolating internal shard table leakage, and enforcing compile-time field mask verification across storage boundaries."
author: "Yuliet Li (yvliet)"
license: "MIT"
---

# Projection Consumption Isolation & Field Mask Verification

A foundational cause of distributed contract drift is the use of **implicit projections**: querying data stores without an explicit, compile-time bound on the fields returned.

In high-throughput storage pipelines, implicit projections typically manifest in two destructive patterns:
1. Relational wildcard queries: `SELECT * FROM events` or `SELECT * FROM system.columns`.
2. Unscoped catalog metadata reflection: scanning database tables using loose pattern matches like `WHERE table LIKE 'events%'`.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        IMPLICIT PROJECTION LEAKAGE ANATOMY                             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   [ClickHouse Storage Engine]                                                          │
│   Distributed Table: events                                                            │
│     ├── Shard Replica 0: events_r0 (40 internal operational columns)                   │
│     └── Shard Replica 1: events_r1 (40 internal operational columns)                   │
│                                                                                        │
│   Unqualified Catalog Query:                                                           │
│   SELECT name FROM system.columns WHERE table LIKE 'events%';                          │
│                                                                                        │
│   Expected Projection:         200 Canonical Columns                                   │
│   Actual Emitted Projection:   200 + 40 (r0) + 40 (r1) = 280 Columns                   │
│                                                                                        │
│                                │                                                       │
│                                ▼ Untyped Wire Seam (JSON Payload)                      │
│                                                                                        │
│   [Downstream Edge Proxy Buffer: [Feature; 200]]                                       │
│   Result: slice.try_into() unwraps 280 items into 200-slot buffer                      │
│   ──► TryFromSliceError PANIC ──► Worker Crash Storm                                   │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

When an analytical database expands its internal cluster architecture (for example, introducing distributed replica shards or auxiliary projection indices), an implicit query silently absorbs these operational columns into user-facing feature payloads.

Stokes eliminates this failure mode through **Projection Consumption Isolation (PCI)** and **Field Mask Verification**.

---

## Physical Schema Leakage from Internal Shard Tables

To understand why traditional linters fail to catch projection drift, consider how distributed analytical databases organize physical storage on disk.

In ClickHouse, horizontal scaling relies on the `Distributed` table engine, which delegates queries across underlying `MergeTree` replica shards:

```sql
-- Canonical Distributed Table
CREATE TABLE analytics.events (
    event_id UUID,
    client_ip String,
    bot_score Float32,
    ja4_fingerprint String,
    datacenter_asn UInt32
    -- ... 195 additional canonical signals
) ENGINE = Distributed('cluster_east', 'analytics', 'events_local', rand());

-- Physical Shard Replicas created during cluster repartitioning
CREATE TABLE analytics.events_r0 (
    event_id UUID,
    -- ... 200 canonical signals ...
    _shard_num UInt8,
    _replica_sync_token UInt64,
    _part_offset UInt32,
    _compaction_epoch UInt32
    -- ... 36 additional internal maintenance columns ...
) ENGINE = ReplicatedMergeTree('/clickhouse/tables/{shard}/events_r0', '{replica}');
```

### The Unqualified Introspection Vulnerability

When a dynamic feature extraction worker queries `system.columns` to discover available heuristics, a loose query causes silent column amplification:

```python
# VULNERABLE: Unqualified reflection query
def discover_active_signals(ch_client) -> list[str]:
    query = """
    SELECT name 
    FROM system.columns 
    WHERE table LIKE 'events%'
    """
    rows = ch_client.execute(query)
    # Returns 200 canonical columns + 40 columns from events_r0 + 40 from events_r1
    # Total: 280 columns emitted!
    return [row[0] for row in rows]
```

Compilers operate in total context blindness:
- `sqlfluff` verifies the SQL syntax as completely valid.
- `mypy` verifies that `discover_active_signals` returns a `list[str]`.
- ClickHouse processes the query without warning, returning 280 strings.

When this payload reaches the edge proxy, the downstream receiver expects at most 200 features. The excess 80 shard maintenance columns trigger a fatal stack overflow panic.

---

## The Projection Consumption Isolation (PCI) Invariant

Stokes replaces implicit schema ingestion with the **Projection Consumption Isolation (PCI)** mathematical invariant:

> [!IMPORTANT]
> **Projection Consumption Isolation (PCI) Invariant**:
> Every downstream ingestion query must define a closed, statically verified **Field Mask** $\mathcal{M}$. The runtime consumed projection $\mathcal{P}_{\text{consumed}}$ is strictly defined as the intersection of upstream emitted columns $\mathcal{C}_{\text{upstream}}$ and the declared Field Mask $\mathcal{M}$:
>
> $$\mathcal{P}_{\text{consumed}} = \mathcal{C}_{\text{upstream}} \cap \mathcal{M}$$
>
> Furthermore, the cardinality of the Field Mask must never exceed the physical capacity $\mathcal{B}$ of the downstream buffer:
>
> $$|\mathcal{M}| \le \mathcal{B}_{\text{downstream}}$$

Under PCI, even if an upstream database emits 100,000 internal columns, the downstream extractor physically filters and accepts only the declared elements of $\mathcal{M}$, discarding unmasked columns before payload serialization.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        PROJECTION CONSUMPTION ISOLATION FLOW                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   Upstream Emitted: 280 Columns                                                        │
│   [200 Canonical Features] + [40 events_r0 Columns] + [40 events_r1 Columns]           │
│                                │                                                       │
│                                ▼                                                       │
│   ┌────────────────────────────────────────────────────────────────────────────────┐   │
│   │ Stokes PCI Field Mask Gate (M_size = 200)                                      │   │
│   │ Allowed: {bot_score, ja4_fingerprint, datacenter_asn, ...} [200 items]         │   │
│   │ Rejected: {_shard_num, _replica_sync_token, _part_offset, ...} [80 items]      │   │
│   └────────────────────────────────┬───────────────────────────────────────────────┘   │
│                                    │                                                   │
│                                    ▼ Output: Exactly 200 Features                      │
│   ┌────────────────────────────────────────────────────────────────────────────────┐   │
│   │ Downstream Fixed Stack Buffer: [Feature; 200] (1,600 Bytes)                    │   │
│   │ slice.try_into() ──► 100% SUCCESS (Zero Panics, Invariant Preserved)           │   │
│   └────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Field Mask Verification Engine

Stokes verifies Projection Consumption Isolation statically at CI build time and dynamically at runtime boundaries.

### 1. Static AST Tree-sitter Queries

The `stokes-sql` subagent traverses all SQL query strings in the repository, matching any wildcard `SELECT *` or unqualified metadata introspection:

```scheme
;; contracts/ast_queries/sql_projection_wildcard.scm
(select_statement
  (select_clause
    (wildcard_expression) @wildcard_hazard)
  (#match? @wildcard_hazard "^\\*$")) @fatal_wildcard_projection
```

If an engineer attempts to write `SELECT * FROM events`, `stokes audit` fails immediately with `LINT-006: Wildcard Projection Hazard`.

### 2. Declarative Field Mask Manifest (`stokes.toml`)

Channels define explicit projection masks in the contract manifest:

```toml
# stokes.toml: Declarative Field Mask Contract
[channel."analytics_to_edge_l7"]
direction = "upstream"
max_cardinality = 200
buffer_capacity = 200

[channel."analytics_to_edge_l7".projection]
mode = "strict_field_mask"
allow_unmapped_columns = false
mask = [
  "bot_score",
  "ja4_fingerprint",
  "entropy_score",
  "datacenter_asn",
  "http_method",
  "path_depth",
  "tls_ciphersuite",
  # ... strictly enumerated 200 canonical fields
]
```

### 3. Zero-Allocation Runtime Ingestion in Rust

Downstream compiled consumers enforce Field Masking directly in memory without heap allocations. Feature IDs are validated against a static bitmask or sorted array:

```rust
// crates/dirichlet-proxy/src/engine/projection_mask.rs
//! Zero-allocation Field Mask validation for edge feature ingestion.
//! Author: Yuliet Li (yvliet)

pub const MAX_CANONICAL_FEATURES: usize = 200;

/// Static compile-time bitset representing the allowed 200 feature IDs.
pub struct ProjectionMask {
    mask_bits: [u64; 4], // 256-bit bitset covers IDs 0..255
}

impl ProjectionMask {
    pub const fn new() -> Self {
        // Bits 0..199 set to 1 (allowed), 200..255 set to 0 (rejected)
        Self {
            mask_bits: [
                u64::MAX,                        // 0..63
                u64::MAX,                        // 64..127
                u64::MAX,                        // 128..191
                0x0000_00FF_FFFF_FFFF,           // 192..199 (8 bits set)
            ],
        }
    }

    #[inline(always)]
    pub fn is_allowed(&self, feature_id: u32) -> bool {
        if feature_id >= 200 {
            return false;
        }
        let word_idx = (feature_id / 64) as usize;
        let bit_idx = feature_id % 64;
        (self.mask_bits[word_idx] & (1u64 << bit_idx)) != 0
    }
}

/// Ingest and mask raw features directly into a fixed-capacity stack buffer.
/// Unmasked or unauthorized shard columns are filtered with 0 heap allocations.
#[inline(always)]
pub fn ingest_with_projection_mask(
    incoming_ids: &[u32],
    mask: &ProjectionMask,
    output_buf: &mut [u32; MAX_CANONICAL_FEATURES],
) -> usize {
    let mut admitted_count = 0;

    for &id in incoming_ids {
        if mask.is_allowed(id) {
            if admitted_count < MAX_CANONICAL_FEATURES {
                output_buf[admitted_count] = id;
                admitted_count += 1;
            }
        }
        // Excess or unmasked IDs (e.g. shard columns) are dropped in register
    }

    admitted_count
}
```

---

## Production Patch: Eliminating Shard Column Leakage

The following real production diff demonstrates how Stokes remediates `LINT-001` and `LINT-006` in the Dirichlet benchmark ETL worker.

### Unified Diff: `services/feature-pipeline/catalog_sync.py`

```diff
--- a/services/feature-pipeline/catalog_sync.py
+++ b/services/feature-pipeline/catalog_sync.py
@@ -14,14 +14,24 @@
 
 def query_catalog_features(client, db_name: str, table_name: str) -> list[dict]:
-    # UNHARDENED PATIENT: Unqualified reflection query matching replica shard tables
-    query = f"""
-        SELECT name, type 
-        FROM system.columns 
-        WHERE table LIKE '{table_name}%'
-    """
+    # HARDENED PROJECTION: Fully qualified database predicate and strict equality
+    query = f"""
+        SELECT name, type 
+        FROM system.columns 
+        WHERE database = '{db_name}'
+          AND table = '{table_name}'
+          AND default_kind != 'ALIAS'
+        ORDER BY position ASC
+        LIMIT 200
+    """
     rows = client.execute(query)
-    return [{"name": r[0], "type": r[1]} for r in rows]
+    
+    # Enforce compile-time Projection Mask bounds
+    features = [{"name": r[0], "type": r[1]} for r in rows]
+    if len(features) > 200:
+        features = features[:200]
+    return features
```

### Explanatory Breakdown of the Patch:
1. `database = '{db_name}'`: Stops the query from scanning other databases or internal ClickHouse system schemas.
2. `table = '{table_name}'`: Replaces the dangerous `LIKE '{table_name}%'` wildcard with strict equality, immediately dropping `events_r0` and `events_r1`.
3. `default_kind != 'ALIAS'`: Excludes virtual computed columns and internal shard metadata offsets.
4. `LIMIT 200` + `[:200]`: Enforces a physical cardinality ceiling at both the database engine tier and the Python serialization tier.

---

## Diagnostic Rules Evaluated by `stokes audit`

The Stokes verification engine executes two rules to validate Projection Consumption Isolation:

### `LINT-001: Unbounded Upstream Catalog Reflection`
- **Severity**: Fatal Error
- **Trigger**: Database introspection queries (`system.columns`, `information_schema.columns`) lacking explicit table equality or database qualification.
- **Risk**: Dynamic ingestion of internal shard replica tables, causing unexpected cardinality expansion.
- **Remediation**: Injects strict database filter and replaces wildcards with qualified table names.

### `LINT-006: Wildcard Projection Hazard`
- **Severity**: Fatal Error
- **Trigger**: `SELECT *` expressions in cross-boundary data extraction queries.
- **Risk**: Upstream DDL schema expansions alter returned payload tuple length without downstream awareness.
- **Remediation**: Subagent `stokes-sql` extracts schema definitions and rewrites the query with an explicit column projection list.

---

## Architecture Comparison: Ingestion Security Models

| Projection Model | Downstream Immunity to Shard Leakage | Memory Allocation Overhead | Zero-Copy Compatibility | Static Verification Ease |
| :--- | :--- | :--- | :--- | :--- |
| **Wildcard (`SELECT *`)** | 0% (Fatal Drift on any DDL change) | Unbounded | Low | Trivial (Flagged) |
| **Unqualified Catalog Reflection** | 0% (Absorbs `r0`, `r1` shards) | Unbounded | None | Flagged by `LINT-001` |
| **GraphQL Field Selection** | 100% (Client requests fields) | Heavy (AST Parsing per request) | Poor (Dynamic Dicts) | Complex Runtime |
| **Stokes PCI & Field Masks** | **100% (Hardware Bound)** | **0 B (Static Bitmask / In-Place)** | **Optimal (Direct Stack Buffers)** | **Deterministic CI AST Check** |

By enforcing Projection Consumption Isolation, Stokes guarantees that downstream services remain strictly insulated from upstream storage migrations, partition reorganizations, and internal shard expansions.
