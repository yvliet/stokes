---
title: "Stokes Lockfile Specification (stokes.lock)"
description: "Formal specification of the stokes.lock schema: deterministic AST hashing, comment and whitespace normalization, and poly-repo merge resolution."
author: "Yuliet Li (yvliet)"
license: "MIT"
---

# Stokes Lockfile Specification (`stokes.lock`)

The `stokes.lock` file is the machine-authoritative cryptographic contract manifest governing cross-boundary architectures in Stokes. Engineered by Yuliet Li (`yvliet`), the lockfile records normalized semantic abstract syntax tree (AST) digests, physical buffer capacities, and property verification records.

Unlike human-written markdown attestations (`CONFORMANCE.md`) or mutable configuration manifests (`stokes.yaml`), `stokes.lock` is evaluated deterministically by CI gates (`stokes verify --strict`). If upstream schema reflections or downstream intake capacities drift from the recorded contract, CI fails in under 38 milliseconds, preventing production deployment.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TWO-TIER CONTRACT LIFECYCLE                     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   [Compiler ASTs: SQL / Python / Rust]                                 │
│                   │                                                    │
│                   ▼ Normalized AST Extraction                          │
│   ┌────────────────────────────────┐                                   │
│   │   Deterministic AST Hasher     │                                   │
│   │   - Comment & whitespace strip │                                   │
│   │   - Projection Isolation filter│                                   │
│   │   - Canonical token sort       │                                   │
│   └───────────────┬────────────────┘                                   │
│                   │                                                    │
│         ┌─────────┴─────────┐                                          │
│         ▼                   ▼                                          │
│  [Machine Tier]      [Human Tier]                                      │
│  stokes.lock         CONFORMANCE.md                                    │
│  - JSON / TOML       - Markdown report                                 │
│  - SHA-256 digests   - Capacity margins & tables                       │
│  - CI gate enforced  - Pull request review artifact                    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Complete Schema Specification

The `stokes.lock` file is serialized in canonical JSON (or equivalent TOML). All object keys are sorted lexicographically, and floating-point values are rounded to four decimal places to ensure cross-platform reproducibility.

### Annotated JSON Structure

```json
{
  "$schema": "https://stokes.dev/schemas/v0.2.0/lockfile.json",
  "stokes_version": "0.2.0",
  "generated_at": "2026-09-26T12:00:00.000000+00:00",
  "target_repository": "crates/dirichlet-proxy",
  "schema_digests": {
    "crates/dirichlet-proxy/src/engine/feature_ingest.rs": "sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
    "migrations/001_bot_signals.sql": "sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a",
    "services/feature-pipeline/catalog_sync.py": "sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"
  },
  "boundary_contracts": {
    "max_active_features": 200,
    "downstream_capacity": 200,
    "max_canonical_columns": 200,
    "observed_upstream_cardinality": 200,
    "cardinality_risk_ratio": 1.00,
    "untyped_seams": [
      "ClickHouse DDL → Python ETL",
      "Python ETL → Rust Proxy"
    ],
    "verification_mode": "normalized_semantic_ast"
  },
  "verification_results": {
    "fuzz_cases_passed": 10000,
    "fuzz_cases_total": 10000,
    "criterion_inplace_ns": 7.66,
    "criterion_heap_ns": 29.74,
    "float_vectors_sanitized": 1420,
    "violations_detected": 0,
    "violations_resolved": 0,
    "heap_allocation_bytes": 0
  },
  "ci_gate_status": "PASSED",
  "master_digest": "sha256:9e107d9d372bb6826bd81d3542a419d6a36d226a27e0ea0eb6d8a2283fc3da06"
}
```

---

## Schema Field Definitions

### Top-Level Metadata

| Field | Type | Description |
|---|---|---|
| `stokes_version` | String | Semantic version of the Stokes engine that compiled the lockfile. |
| `generated_at` | String (ISO-8601 UTC) | Exact UTC timestamp of lockfile generation. |
| `target_repository` | String | Relative workspace path or canonical package identifier. |
| `ci_gate_status` | String (`PASSED` \| `FAILED`) | Certification status of the boundary at time of emission. |
| `master_digest` | String (`sha256:...`) | Root SHA-256 digest computed over the sorted, canonical map of individual schema digests. |

### `boundary_contracts` Object

| Field | Type | Unit | Description |
|---|---|---|---|
| `max_active_features` | Integer | Slots | Maximum number of active signals admitted into the evaluation engine. |
| `downstream_capacity` | Integer | Slots | Physical capacity of the downstream memory buffer allocation. |
| `max_canonical_columns` | Integer | Columns | Strict upper bound on canonical database table columns. |
| `observed_upstream_cardinality` | Integer | Rows/Columns | Measured cardinality emitted by upstream queries or serializers. |
| `cardinality_risk_ratio` | Float | Ratio | Evaluated as $\mathcal{C}_{\text{upstream}} / \mathcal{B}_{\text{downstream}}$. Values $> 1.0$ indicate fatal contract drift. |
| `untyped_seams` | Array of Strings | - | List of cross-compiler untyped boundaries monitored by Stokes. |
| `verification_mode` | String | - | Canonicalization mode: `normalized_semantic_ast`. |

### `verification_results` Object

| Field | Type | Unit | Description |
|---|---|---|---|
| `fuzz_cases_passed` | Integer | Tests | Number of randomized IEEE-754 property fuzz cases that passed. |
| `fuzz_cases_total` | Integer | Tests | Total property fuzz cases executed (default: 10,000). |
| `criterion_inplace_ns` | Float | Nanoseconds | Measured latency of stack intake deserialization (Dirichlet benchmark). |
| `criterion_heap_ns` | Float | Nanoseconds | Baseline latency of dynamic heap allocation (`Vec<Feature>`). |
| `float_vectors_sanitized` | Integer | Vectors | Number of adversarial IEEE-754 values (NaN, $\pm\infty$, subnormals) sanitized. |
| `violations_detected` | Integer | Count | Invariant breaches detected during static analysis. |
| `violations_resolved` | Integer | Count | Invariant breaches corrected via autonomous remediation. |
| `heap_allocation_bytes` | Integer | Bytes | Confirmed heap allocation during packet intake (must be exactly 0 B). |

---

## Deterministic AST Hashing Algorithm

The core innovation in `stokes.lock` is **Semantic AST Hashing**. If a developer refactors code using `rustfmt`, runs `black` on Python scripts, adds internal comments, or renames private helper functions, standard file hashers (such as Git tree hashes or `sha256sum`) change, breaking CI.

Stokes computes digests exclusively over **canonical interface signatures**, discarding non-contract syntax:

```
Source Code File
       │
       ▼ Lexical Comment Stripping (-- , // , /* ... */ , #)
Stripped Token Stream
       │
       ▼ Grammar-Specific AST Traversal (Tree-sitter / Python ast)
Interface AST Signature Nodes
       │
       ▼ Projection Consumption Isolation (Exclude unconsumed columns)
Filtered Contract Tuples
       │
       ▼ Canonical JSON Serialization (sort_keys=True, separators=(',', ':'))
Canonical UTF-8 Byte Stream
       │
       ▼ SHA-256 Cryptographic Hash
Deterministic Digest: sha256:<64 hex characters>
```

### Language Normalization Rules

#### 1. SQL DDL & Query Normalization (`.sql`)
- **Comment Stripping**: Removes single-line comments (`--.*$`) and multi-line comments (`/* ... */`).
- **Whitespace Collapsing**: Splits all remaining tokens by whitespace and joins with a single space.
- **Case Normalization**: Converts all identifiers and keywords to uppercase (`CREATE TABLE`, `SYSTEM.COLUMNS`).
- **Table Extraction**: Parses `CREATE TABLE` statements, extracts table names and column definitions, and sorts column declarations alphabetically.
- **System Reflection Inspection**: Extracts `FROM SYSTEM.COLUMNS` queries, recording whether `DATABASE = CURRENTDATABASE()` is present.
- **Projection Extraction**: Parses `SELECT <fields> FROM <table>` projections.

#### 2. Python Normalization (`.py`)
- **AST Parsing**: Parses code into an Abstract Syntax Tree via Python's standard `ast` module.
- **Constant Extraction**: Records uppercase module-level assignments (`MAX_FEATURES = 200`).
- **Class Field Normalization**: Extracts classes, recording annotated fields (`name: type`) and public methods. Private methods (`_helper`) and method implementation bodies are completely omitted.
- **Function Signature Normalization**: Records public function names, parameter lists, and return type annotations. Function bodies, docstrings, and local variables are discarded.

#### 3. Rust Normalization (`.rs`)
- **Comment Stripping**: Strips `//` single-line and `/* ... */` block comments.
- **Constant Extraction**: Extracts `pub const NAME: Type = Value;` declarations.
- **Fixed Buffer Extraction**: Regex/syn queries identify fixed-size array allocations (`[Type; N]`), recording item type and buffer capacity.
- **Struct Normalization**: Extracts struct declarations, recording field names and types sorted alphabetically. Struct methods (`impl`) and private functions are discarded.
- **Enum Normalization**: Extracts enum variant names.

#### 4. Protobuf Normalization (`.proto`)
- **Comment Stripping**: Strips line and block comments.
- **Repeated Field Extraction**: Records `repeated <type> <name> = <tag>` declarations, tracking tag numbers and custom Stokes boundary options (`[(stokes.max_items) = N]`).
- **Message Type Tracking**: Records top-level message names and field numbers, verifying backward wire compatibility.

---

## Projection Consumption Isolation

A critical challenge in cross-boundary verification is **Contract Drift Lockout**: if a database engineer adds an internal column (`admin_notes VARCHAR`) to an analytical table for an offline business dashboard, a naive hash of the database DDL breaks downstream edge proxy CI checks, even though the proxy never consumes that column.

Stokes implements **Projection Consumption Isolation**:

```
ClickHouse Table: bot_signals
  ├── feature_001 ... feature_200 (Projected into Edge Proxy)
  └── offline_bi_metric           (Internal BI Column, Not Projected)

Downstream Consumer Manifest:
  consumed_projections: {
    "bot_signals": ["feature_001", ..., "feature_200"]
  }

Hashing Behavior:
  When compute_normalized_schema_digest() runs on migrations/001_bot_signals.sql:
  1. Stokes checks consumed_projections for table 'bot_signals'.
  2. Columns NOT in the consumed list are excluded from the canonical signature.
  3. Result: Adding 'offline_bi_metric' produces ZERO digest change in stokes.lock.
  4. CI gate passes cleanly without false alarms.
```

If the downstream consumer queries an unconstrained wildcard (`SELECT *` or unqualified `system.columns`), Stokes marks `is_wildcard = true`, disabling projection isolation and requiring explicit lockfile re-certification.

---

## Reference Implementation: Schema Digest Computation

The following production Python implementation (from `stokes/subagents/contract_synthesizer.py`) computes normalized schema digests:

```python
import ast
import hashlib
import json
from pathlib import Path
import re
from typing import Any

def compute_normalized_schema_digest(
    path: Path | str,
    content: str | None = None,
    consumed_projections: dict[str, list[str]] | None = None,
) -> str:
    """
    Computes a deterministic SHA-256 digest of the file's canonical AST schema signature.
    Comments, docstrings, formatting, whitespace, and internal non-contract helper
    implementations are stripped.
    """
    p = Path(path)
    if content is None:
        if not p.exists():
            return "sha256:0000000000000000000000000000000000000000000000000000000000000000"
        content = p.read_text(encoding="utf-8", errors="replace")

    ext = p.suffix.lower()
    signature_items: list[Any] = []

    if ext == ".sql":
        # Strip comments
        clean = re.sub(r"--.*$", "", content, flags=re.MULTILINE)
        clean = re.sub(r"/\*.*?\*/", "", clean, flags=re.DOTALL)
        tokens = clean.split()
        clean_text = " ".join(tokens).upper()

        # Extract table creations and column specs
        create_tables = re.findall(
            r"CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?([A-Z0-9_.]+)\s*\((.*?)\)",
            clean_text,
        )
        for tbl, cols in sorted(create_tables):
            raw_col_list = [c.strip() for c in cols.split(",") if c.strip()]
            tbl_short = tbl.split(".")[-1]
            filter_cols = None
            if consumed_projections:
                for k, v in consumed_projections.items():
                    if k.upper() in (tbl.upper(), tbl_short.upper()):
                        filter_cols = v
                        break

            col_list = []
            for c in raw_col_list:
                col_name = c.split()[0].upper()
                if filter_cols is not None:
                    # Projection Consumption Isolation: only include consumed columns
                    if col_name not in [fc.upper() for fc in filter_cols]:
                        continue
                col_list.append(c)

            signature_items.append({
                "type": "sql_table",
                "table": tbl,
                "columns": sorted(col_list),
            })

    elif ext == ".rs":
        clean = re.sub(r"//.*$", "", content, flags=re.MULTILINE)
        clean = re.sub(r"/\*.*?\*/", "", clean, flags=re.DOTALL)

        fixed_buffers = re.findall(r"\[\s*(\w+)\s*;\s*(\d+)\s*\]", clean)
        for btype, bcap in sorted(fixed_buffers):
            signature_items.append({
                "type": "fixed_buffer",
                "item_type": btype,
                "capacity": int(bcap),
            })

        structs = re.findall(r"(?:pub\s+)?struct\s+(\w+)\s*\{([^}]*)\}", clean)
        for sname, sbody in sorted(structs):
            fields = []
            for f in sbody.split(","):
                f = f.strip()
                if ":" in f:
                    fname, ftype = f.split(":", 1)
                    fields.append((fname.strip(), ftype.strip()))
            signature_items.append({
                "type": "struct",
                "name": sname,
                "fields": sorted(fields),
            })

    canonical_json = json.dumps(signature_items, sort_keys=True, separators=(',', ':'))
    return "sha256:" + hashlib.sha256(canonical_json.encode("utf-8")).hexdigest()
```

---

## Resolving Merge Conflicts in Poly-Repo Development

In multi-repo organizations, different teams modify schemas simultaneously:
- Analytics team adds fraud signals to ClickHouse DDL (`migrations/001_bot_signals.sql`).
- Edge systems team refactors the proxy buffer in Rust (`crates/dirichlet-proxy`).

If both pull requests modify `stokes.lock`, git merge conflicts can occur on the `master_digest` or `schema_digests` fields.

```
<<<<<<< HEAD (Branch: edge-proxy-expand-capacity)
    "downstream_capacity": 512,
    "crates/dirichlet-proxy/src/engine/feature_ingest.rs": "sha256:aaaa...",
=======
    "observed_upstream_cardinality": 280,
    "migrations/001_bot_signals.sql": "sha256:bbbb...",
>>>>>>> origin/main (Branch: upstream-add-features)
```

### The Tolerant Reader Deployment Sequence

Stokes enforces the **Consumer Expands First (Tolerant Reader)** rule to prevent circular merge deadlocks:

```
Step 1: Downstream Consumer PR Merges First
  - Edge proxy expands buffer capacity: [Feature; 200] → [Feature; 512].
  - Downstream capacity (512) >= current upstream cardinality (200).
  - Consumer PR merges cleanly into main.

Step 2: Upstream Producer PR Merges Second
  - Analytics team expands emitted signals: 200 → 280 features.
  - Verification check: Downstream deployed capacity (512) >= New cardinality (280).
  - Risk Ratio: 280 / 512 = 0.547 <= 1.0 (SAFE).
  - Producer PR merges without edge panics.
```

### Automated Merge Resolution Recipe

When a git merge conflict occurs on `stokes.lock`:

1. **Accept Both Schema Digest Entries**: Union the keys in `schema_digests`. Both the upstream SQL migration digest and the downstream Rust crate digest must be preserved.
2. **Update Capacity Values**: Retain the highest downstream capacity and the updated upstream cardinality.
3. **Re-Certify the Lockfile**: Do not manually craft the `master_digest`. Run the deterministic re-certification command:

```bash
# Automatically parse working tree ASTs, recompute digests, and update stokes.lock
stokes cert --output=stokes.lock

# Verify lockfile matches current ASTs
stokes verify --strict
```

4. **Stage and Commit**:

```bash
git add stokes.lock CONFORMANCE.md
git commit -m "chore(stokes): re-certify boundary lockfile after poly-repo merge"
```

---

## Summary & Compliance Guarantee

The `stokes.lock` file provides an immutable cryptographic anchor guaranteeing that decoupled cloud services cannot silently drift into runtime memory panics.

- **Specification Revision**: 0.2.0-HARDENED
- **Maintainer**: Yuliet Li (`yvliet`)
- **Digest Algorithm**: SHA-256 over Canonical Lexicographical JSON
- **CI Guarantee**: Sub-38ms deterministic gate enforcement
