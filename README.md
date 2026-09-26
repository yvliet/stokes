# Stokes

**Autonomous Cross-Boundary Systems Invariant Verification Engine**  
Built on IBM Bob 2.0 | GitHub: [yvliet](https://github.com/yvliet)

---

## Overview

Stokes is a static analysis and runtime verification engine for detecting cross-boundary invariant violations in polyglot systems. It integrates with IBM Bob 2.0's multi-agent orchestrator to enforce architectural contracts across Rust, Python, SQL, and Protobuf codebases.

## Installation

```bash
pip install stokes
```

Requires Python ≥ 3.11.

## Quick Start

```bash
# Scan a workspace for boundary violations
stokes scan /path/to/workspace

# Run a full audit with remediation synthesis
stokes audit /path/to/workspace

# Verify invariants (CI/CD gate - non-zero exit on failure)
stokes verify --strict

# Emit the stokes.lock cryptographic boundary lockfile
stokes cert --output stokes.lock
```

## Core Invariants Enforced

| Rule     | Severity    | Description |
|----------|-------------|-------------|
| LINT-001 | FATAL ERROR | `system.columns` without `database = currentDatabase()` scoping |
| LINT-002 | FATAL ERROR | Unbounded ETL loop without `[:MAX_CANONICAL]` guard |
| LINT-003 | WARNING     | Schema mesh broadcast without SHA-256 digest |
| LINT-004 | FATAL ERROR | `.try_into().unwrap()` on fixed-size stack buffer |
| LINT-005 | WARNING     | Heap allocation on microsecond packet path |

## Cardinality Risk Ratio

```
Risk = C_upstream / B_downstream

Risk <= 1.0  →  INVARIANT SATISFIED
Risk > 1.0   →  FATAL CONTRACT DRIFT
```

## Key Contracts

- **Wire Protocol**: 4-byte big-endian length-prefixed frames, 16 MB max budget
- **Float Sanitization**: Reject NaN / ±Infinity / subnormals; clamp to [0.0, 100.0]
- **Dual-Zone Memory**: MAX_ACTIVE_FEATURES = 200 (Zone 0: slots 0–127 CORE RESERVED, Zone 1: slots 128–199 DYNAMIC ADAPTIVE)
- **Event Bus**: `asyncio.Queue(maxsize=1024)`, 16.6 ms render tick

## Hackathon Compliance & Attribution

This project strictly adheres to the official IBM Bob 2.0 Hackathon regulations.

> *"Yes, you can use pre-prepared synthetic sample code and demo UI templates as long as they are clearly disclosed in your repository and all the core Bob analysis and project logic are built during the hackathon."*  
> - **Hamza | lablab.ai** (Discord message ID: `1553083130045268114`, September 25, 2026 at 23:37 WIB)

Full verification captures and role verifications are documented in [docs/compliance/COMPLIANCE.md](docs/compliance/COMPLIANCE.md).

- **Built with IBM Bob 2.0 during Hackathon**: Stokes CLI, 4 autonomous subagents, Tree-sitter AST reachability engine, 10,000-case float fuzzer, Criterion micro-benchmark parser, and 111-test suite.
- **Disclosed Baseline Templates & Canvas Fork**: Dirichlet benchmark patient (`dirichlet/`), demo web UI template, and Stokes Studio canvas (`stokes/web/openpencil-repo/`, adapted from a stripped fork of OpenPencil without Figma/media overhead for storage pipeline DAG routing).

## License

MIT - Copyright (c) 2026 yvliet
