---
title: "Poly-Repo Contract Coordination & Version Skew Prevention"
description: "Mathematical choreography of distributed deployments, Downstream-First capacity expansion, cross-repo cryptographic digests, and eliminating merge deadlocks."
author: "Yuliet Li (yvliet)"
license: "MIT"
---

# Poly-Repo Contract Coordination & Version Skew Prevention

In enterprise microservice and edge topologies, multi-tier storage pipelines rarely reside inside a single monolithic repository. Analytical database migrations (ClickHouse, Snowflake), stream processors (Python, Flink), and ingress reverse proxies (Rust, C++) typically live in distinct code repositories maintained by decoupled teams:

```
┌───────────────────────┐       ┌───────────────────────┐       ┌───────────────────────┐
│  repo-analytics-ddl   │       │  repo-feature-worker  │       │   repo-edge-proxy     │
│  (ClickHouse Schemas) │       │  (Python ETL Engine)  │       │   (Rust L7 Proxy)     │
│                       │       │                       │       │                       │
│  git: commits / tags  │       │  git: commits / tags  │       │  git: commits / tags  │
└──────────┬────────────┘       └──────────┬────────────┘       └──────────┬────────────┘
           │                               │                               │
           ▼                               ▼                               ▼
    Release Train 1                 Release Train 2                 Release Train 3
   (Bi-weekly Friday)              (Daily Continuous)              (Weekly Canary)
           │                               │                               │
           └───────────────────────►───────┴───────────────►───────────────┘
                                           ▼
                         TEMPORAL DISTRIBUTED SKEW WINDOW
                   Upstream emits 280 cols → Downstream buffer is 200
```

When repositories release on independent schedules, version skew is not an anomaly. It is the steady-state operating condition of the system. Without formal contract coordination across repository boundaries, ordinary schema expansions trigger catastrophic edge panics.

Stokes formalizes poly-repo contract coordination through mathematical deployment choreography, cross-repo cryptographic AST hashing, and a deadlock-free staging protocol.

---

## The Downstream-First Deployment Sequence

Distributed contract safety requires enforcing a strict temporal invariant across production rollouts:

> [!IMPORTANT]
> **The Downstream-First Invariant**:
> At every point in physical time $t$, the downstream consumer's ingested buffer capacity $\mathcal{B}_{\text{downstream}}(t)$ must be greater than or equal to the upstream producer's emitted cardinality $\mathcal{C}_{\text{upstream}}(t)$:
>
> $$\forall t \in \mathbb{R}^+, \quad \mathcal{B}_{\text{downstream}}(t) \ge \mathcal{C}_{\text{upstream}}(t)$$

Violating this ordering produces an immediate buffer overflow or slice unwrap failure at the ingestion boundary.

### The Asymmetric State Transition Lifecycle

Consider expanding a fraud detection pipeline from 200 canonical features to 280 features. The expansion requires three distinct phases across the repositories:

```
Phase 0: Baseline State
  repo-analytics-ddl:  Cardinality = 200
  repo-edge-proxy:     Capacity    = 200
  Risk Ratio:          200 / 200 = 1.00 (SAFE)

Step 1: Downstream Expansion (repo-edge-proxy deploys FIRST)
  repo-edge-proxy:     Capacity    = 512 (Expanded Buffer)
  repo-analytics-ddl:  Cardinality = 200 (Unchanged)
  Risk Ratio:          200 / 512 = 0.39 (SAFE)

Step 2: Upstream Migration (repo-analytics-ddl deploys SECOND)
  repo-analytics-ddl:  Cardinality = 280 (Expanded Schema)
  repo-edge-proxy:     Capacity    = 512 (Active)
  Risk Ratio:          280 / 512 = 0.55 (SAFE)

Step 3: Downstream Compaction (repo-edge-proxy compacts LAST, Optional)
  repo-edge-proxy:     Capacity    = 280 (Tightened Buffer)
  repo-analytics-ddl:  Cardinality = 280 (Active)
  Risk Ratio:          280 / 280 = 1.00 (OPTIMAL)
```

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                      DOWNSTREAM-FIRST VS. UPSTREAM-FIRST TIMELINE                      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   DOWNSTREAM-FIRST SEQUENCE (VERIFIED & SAFE)                                          │
│   t0: Downstream: 200, Upstream: 200 ──► Risk = 1.00                                   │
│   t1: Downstream deploys 512 slots   ──► Risk = 200 / 512 = 0.39 (Capacity Lead)       │
│   t2: Upstream emits 280 features    ──► Risk = 280 / 512 = 0.55 (Safe Ingestion)     │
│                                                                                        │
│   UPSTREAM-FIRST SEQUENCE (FATAL CONTRACT DRIFT)                                       │
│   t0: Downstream: 200, Upstream: 200 ──► Risk = 1.00                                   │
│   t1: Upstream emits 280 features    ──► Risk = 280 / 200 = 1.40 ──► PANIC / CRASH    │
│   t2: Downstream never reaches prod  ──► Entire fleet crashes in restart loops         │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

> [!CAUTION]
> If the upstream producer merges and deploys first, the downstream consumer immediately receives a payload of cardinality 280 while operating with a buffer of 200. Any call to `slice.try_into().unwrap()` causes an unrecoverable panic, taking down the edge proxy before the downstream patch can ever be released.

---

## Cross-Repo AST Digest Hashing in `stokes.lock`

To enforce contract compatibility across decoupled git repositories without requiring shared submodules or mono-repo synchronization, Stokes computes deterministic cryptographic digests directly from language ASTs.

The machine-authoritative lockfile (`stokes.lock`) records the SHA-256 digest of normalized abstract syntax trees for every boundary interface:

```json
{
  "$schema": "https://stokes.dev/schemas/v1/lockfile.json",
  "version": 1,
  "generated_by": "stokes-engine v0.2.0-hardened",
  "author": "yvliet",
  "contracts": {
    "dirichlet.l7_features": {
      "channel_id": "analytics_to_edge_l7",
      "upstream": {
        "repository": "github.com/org/repo-analytics-ddl",
        "commit": "9f8a3d1c4b2e8a7f0e6d5c4b3a2f1e0d9c8b7a6f",
        "file": "migrations/001_bot_signals.sql",
        "ast_digest": "sha256:7b5d63f03b221087cf28b0754ff31e05be4c9a419bdfc836928e4695ce2dc03a",
        "cardinality_bound": 280,
        "projection_fields": [
          "bot_score",
          "ja4_fingerprint",
          "entropy_score",
          "datacenter_asn"
        ]
      },
      "downstream": {
        "repository": "github.com/org/repo-edge-proxy",
        "commit": "3c2a1b0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b",
        "file": "crates/dirichlet-proxy/src/engine/feature_ingest.rs",
        "ast_digest": "sha256:1a4f89d3e5b7c9102837465abdf0123456789abcdef0123456789abcdef01234",
        "buffer_capacity": 512,
        "max_intake_bytes": 5242880
      },
      "invariants": {
        "cardinality_risk_ratio": 0.546875,
        "status": "SATISFIED",
        "zero_allocation_verified": true,
        "fail_secure_float_verified": true
      }
    }
  }
}
```

### Deterministic AST Normalization

Raw source code file hashes (such as `git hash-object` or `sha256sum file.rs`) are unsuitable for contract verification because they fluctuate upon cosmetic modifications: adding a comment, changing indentation, or reordering unrelated helper functions.

Stokes extracts boundary nodes via Tree-sitter, strips trivia (comments, whitespace, documentation attributes), normalizes types to canonical primitives, and serializes the AST into a canonical S-expression before hashing:

```
Raw Source Code ──► Tree-sitter Parse ──► Filter Boundary Nodes ──► Canonical IR ──► SHA-256 Digest
```

If an upstream database engineer modifies comments or adds an unrelated index in `001_bot_signals.sql`, the normalized AST digest remains invariant. But if a column is added or a type changes from `UInt16` to `UInt64`, the digest mutates deterministically, invalidating downstream lockfiles.

---

## Eliminating Circular Merge Deadlocks in Git Workflows

In a poly-repo environment enforced by strict CI gates, a classic circular dependency deadlock arises if not architected correctly:

1. **Repo A (Consumer)** cannot merge its PR expanding buffer capacity to 512 because its CI gate checks `stokes.lock`, which requires an approved upstream contract from Repo B.
2. **Repo B (Producer)** cannot merge its PR expanding cardinality to 280 because its CI gate checks `stokes.lock`, which rejects the merge because Repo A has not yet deployed capacity 512.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        THE POLY-REPO CIRCULAR MERGE DEADLOCK                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│     repo-edge-proxy PR #412                       repo-analytics-ddl PR #89            │
│   (Expand buffer from 200 to 512)               (Add 80 fraud feature columns)         │
│                 │                                             │                        │
│                 ▼ CI Check:                                   ▼ CI Check:              │
│       stokes verify --strict                        stokes verify --strict             │
│                 │                                             │                        │
│                 ▼                                             ▼                        │
│     BLOCKED: Upstream contract                   BLOCKED: Downstream proxy             │
│     not published on main!                       not deployed to production!           │
│                 │                                             │                        │
│                 └────────────────► DEADLOCK ◄─────────────────┘                        │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

Stokes breaks this circular deadlock through the **2-Phase Semantic Staging Protocol**.

### The 2-Phase Semantic Staging Protocol

Stokes models capacity expansion using explicit capability stages in `stokes.toml`:

#### Phase 1: Capacity Preparation (`prepare` stage)

The downstream consumer declares capability for expanded capacity without requiring upstream to emit it immediately:

```toml
# repo-edge-proxy: stokes.toml
[channel."analytics_to_edge_l7"]
direction = "downstream"
current_buffer_capacity = 200
staged_buffer_capacity = 512
stage = "prepare"
```

The downstream CI executes:

```bash
stokes verify --stage=prepare
```

This gate verifies that:
1. The code safely allocates 512 slots in stack or static memory.
2. The Dual-Zone partitioning logic correctly manages 128 Core slots and 384 Dynamic slots.
3. Invariant $\mathcal{B}_{\text{staged}} \ge \mathcal{C}_{\text{current}}$ holds ($512 \ge 200$).

The downstream PR merges cleanly to `main` and deploys to production. Once deployed, the proxy's active physical capacity is 512 slots.

#### Phase 2: Upstream Production Expansion (`commit` stage)

With the downstream fleet running with 512 slots in production, the upstream repository issues its schema migration PR:

```toml
# repo-analytics-ddl: stokes.toml
[channel."analytics_to_edge_l7"]
direction = "upstream"
emitted_cardinality = 280
remote_downstream_lock = "https://internal-registry.corp/locks/edge-proxy.lock"
stage = "commit"
```

The upstream CI executes:

```bash
stokes verify --stage=commit --remote-lock=edge-proxy.lock
```

The verification engine inspects the verified production lockfile of `repo-edge-proxy`:
- Verified Downstream Capacity: $512$
- Proposed Upstream Cardinality: $280$
- Evaluated Risk: $280 / 512 = 0.546 \le 1.0$ (PASSED)

The upstream PR merges and deploys safely with zero circular dependency, zero manual override flags, and zero risk of runtime panic.

---

## Production CI Integration: Complete GitHub Actions Workflows

Below are complete, production-grade GitHub Actions workflows implementing the Downstream-First verification gate across both repositories.

### Downstream Consumer Workflow (`repo-edge-proxy`)

```yaml
# repo-edge-proxy: .github/workflows/stokes-boundary-gate.yml
name: Stokes Downstream Boundary Verification Gate

on:
  pull_request:
    paths:
      - 'crates/dirichlet-proxy/**'
      - 'stokes.toml'
      - 'stokes.lock'
  push:
    branches: [main]

permissions:
  contents: read
  pull-requests: write

jobs:
  verify-downstream-contracts:
    name: Verify Invariant & Capacity Bounds
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v4

      - name: Install Stokes CLI Engine
        run: |
          curl -sSL https://get.stokes.dev/linux-x86_64/stokes -o /usr/local/bin/stokes
          chmod +x /usr/local/bin/stokes
          stokes --version

      - name: Execute Strict Boundary Audit
        id: stokes_audit
        run: |
          stokes verify --strict \
            --manifest=stokes.toml \
            --lockfile=stokes.lock \
            --json-out=stokes-report.json

      - name: Generate PR Attestation Summary
        if: always()
        run: |
          stokes attestation \
            --input=stokes-report.json \
            --format=markdown \
            --output=CONFORMANCE.md
          cat CONFORMANCE.md >> $GITHUB_STEP_SUMMARY

      - name: Publish Verified Lockfile Artifact
        if: github.ref == 'refs/heads/main' && success()
        run: |
          # Publish machine lockfile to internal artifact registry or S3 bucket
          echo "Publishing stokes.lock digest to edge lock distribution mesh..."
          curl -X PUT https://registry.internal.net/v1/locks/edge-proxy.lock \
            -H "Authorization: Bearer ${{ secrets.LOCK_REGISTRY_TOKEN }}" \
            --data-binary @stokes.lock
```

### Upstream Producer Workflow (`repo-analytics-ddl`)

```yaml
# repo-analytics-ddl: .github/workflows/stokes-upstream-gate.yml
name: Stokes Upstream Boundary Verification Gate

on:
  pull_request:
    paths:
      - 'migrations/**'
      - 'schemas/**'
      - 'stokes.toml'

permissions:
  contents: read
  pull-requests: write

jobs:
  verify-upstream-expansion:
    name: Verify Poly-Repo Contract Clearance
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: Checkout DDL Source
        uses: actions/checkout@v4

      - name: Install Stokes CLI Engine
        run: |
          curl -sSL https://get.stokes.dev/linux-x86_64/stokes -o /usr/local/bin/stokes
          chmod +x /usr/local/bin/stokes

      - name: Fetch Live Downstream Production Lockfile
        run: |
          curl -sSf https://registry.internal.net/v1/locks/edge-proxy.lock \
            -H "Authorization: Bearer ${{ secrets.LOCK_REGISTRY_TOKEN }}" \
            -o .stokes/remote-edge-proxy.lock

      - name: Execute Strict Poly-Repo Compatibility Check
        run: |
          stokes verify --strict \
            --manifest=stokes.toml \
            --remote-lock=.stokes/remote-edge-proxy.lock \
            --stage=commit

      - name: Fail on Unauthorized Cardinality Overflow
        if: failure()
        run: |
          echo "::error file=migrations/::Stokes detected upstream cardinality exceeds deployed downstream capacity!"
          echo "::error::Downstream edge-proxy must deploy expanded capacity BEFORE this PR can merge."
          exit 1
```

---

## Architectural Comparison Matrix

| Evaluation Dimension | Uncoordinated Poly-Repo | Git Submodules / Monorepo | Intrusive IDL (Protobuf/gRPC) | Stokes Poly-Repo Protocol |
| :--- | :--- | :--- | :--- | :--- |
| **Cross-Repo Type Safety** | None (Context Blind) | High (Manual Sync) | Medium (Schema Only) | **Mathematical Invariant** |
| **Downstream Capacity Verification** | Zero | Zero (Ignores Buffer Sizes) | Zero (Repeated unbounded) | **Enforced ($C \le B$)** |
| **Merge Deadlock Freedom** | High Deadlock Risk | High Merge Friction | Medium Friction | **Zero Deadlocks (2-Phase)** |
| **Deployment Choreography** | Manual Runbooks | Rigid Lockstep Rollouts | Manual Choreography | **Automated via Staging Gates** |
| **Runtime Overhead** | 0 ns | 0 ns | 150-800 ns per msg | **0 ns (Purely Compile/CI Gate)** |
| **AST Digest Precision** | None | File Git-Hash (Fragile) | Protocol Hash | **Normalized Structural AST** |

By formalizing cross-repo deployment sequencing and encoding buffer invariants directly into deterministic lockfiles, Stokes eliminates the single largest cause of distributed edge outages: silent version skew across decoupled engineering repositories.
