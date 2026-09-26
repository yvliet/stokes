---
title: "Hackathon Compliance & Asset Disclosure"
description: "Formal compliance documentation: lablab.ai organizer ruling, clean delineation of build sprint assets vs pre-prepared templates, and IBM Bob token audit ledger."
author: "Yuliet Li (yvliet)"
license: "MIT"
---

# Hackathon Compliance & Asset Disclosure

This document provides formal, comprehensive disclosure regarding compliance with the official IBM Bob 2.0 Hackathon regulations, sprint build window criteria, pre-prepared asset permissions, and token expenditure ledgers. Engineered by Yuliet Li (`yvliet`), Stokes maintains 100% transparent attribution.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        COMPLIANCE ARCHITECTURE AT A GLANCE             │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   [Official Organizer Ruling]                                          │
│   lablab.ai Discord Message ID: 1553083130045268114                    │
│   Permits pre-prepared synthetic sample code and demo UI templates     │
│   when transparently disclosed and core Bob analysis is built in-sprint│
│                                                                        │
│         ┌───────────────────────────┴───────────────────────────┐      │
│         ▼                                                       ▼      │
│  [100% In-Sprint Build (Bob 2.0)]       [Disclosed Pre-Prepared Assets]│
│  - CLI suite & ANSI 60 FPS renderer     - Dirichlet proxy testbed      │
│  - 5-subagent autonomous swarm          - Astro presentation shell     │
│  - Tree-sitter AST reachability engine                                 │
│  - Length-prefixed binary IPC framing                                  │
│  - 10,000-case float fuzzer & tests                                    │
│  - Native MCP stdio JSON-RPC server                                    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Official Organizer Ruling

During the official hackathon question-and-answer period, the lablab.ai organizing team issued a formal ruling clarifying permissions regarding pre-prepared sample code, benchmarks, and UI presentation shells:

> *"Yes, you can use pre-prepared synthetic sample code and demo UI templates as long as they are clearly disclosed in your repository and all the core Bob analysis and project logic are built during the hackathon. For using and animating the IBM Bob mascot, I am checking with the IBM team to confirm their branding permissions - stay tuned for an update on that shortly. for 2 i am confirming sorry for that"*

### Verification Metadata

| Field | Detail |
|---|---|
| **Speaker** | Hamza \| lablab.ai (`hamzaimran_8`) |
| **Official Roles** | `lablab.ai team`, `Moderator`, `lablab.ai Mentor` |
| **Platform** | Official Hackathon Discord Server |
| **Channel** | `#ask-anything` |
| **Message ID** | `1553083130045268114` |
| **Timestamp** | September 25, 2026 at 23:37 WIB (UTC+7) |
| **Reference Artifacts** | `stokes/docs/compliance/lablab_organizer_ruling_msg.png`<br>`stokes/docs/compliance/lablab_organizer_profile.png` |

> [!NOTE]
> Per the organizer ruling, all core Stokes analysis, subagent orchestration, AST graph traversal, and verification engines were authored 100% from scratch inside the hackathon window using IBM Bob 2.0.

---

## 2. Scope & Delineation of Repository Assets

To guarantee complete auditability, the repository maintains an unambiguous separation between components built during the hackathon sprint and pre-prepared reference assets.

```
stokes/
├── 100% BUILT DURING HACKATHON BUILD WINDOW (IBM Bob 2.0)
│   ├── cli/                   ← Terminal UI driver, ANSI overwriter, formatters, commands
│   ├── subagents/             ← 5 specialized subagents, actor base, multiplexer
│   ├── subagents/ast_engine/  ← Tree-sitter query engine & reachability graph
│   ├── harness/               ← 10,000-case float fuzzer, Criterion parser, sandbox
│   ├── mcp/                   ← Native Model Context Protocol stdio JSON-RPC server
│   ├── tests/                 ← 111 unit & integration tests passing in 0.55s
│   ├── AGENTS.md              ← Synthesized multi-agent contract policy
│   ├── stokes.lock            ← Cryptographic normalized AST boundary lockfile
│   └── CONFORMANCE.md         ← Human-readable PR attestation report
│
└── DISCLOSED PRE-PREPARED REFERENCE TEMPLATES & BENCHMARKS
    ├── dirichlet/             ← Synthetic testbed modeling Cloudflare Nov 18, 2025 outage
    └── web/src/               ← Staged Astro presentation layout and documentation shell
```

### Assets Built 100% During the Hackathon Build Window with IBM Bob 2.0

Every line of core project logic, AST analysis, and agent orchestration was synthesized and verified during the official hackathon sprint:

1. **CLI Subcommand Suite & ANSI Renderer (`stokes/cli/`)**:
   - `main.py`: Complete CLI entrypoint supporting `verify`, `check`, `scan`, `audit`, `remediate`, `codegen`, `cert`, `diff`, `graph`, `init`, and `mcp`.
   - `terminal_overwriter.py`: 60 FPS multi-line cursor addressability (`\033[<N>A`), bracketless grayscale loading tickers, and tree-nested subagent progress visualizers.
   - `formatters.py`: 3x3 matrix bracket headers, diagnostic alert cards, and ANSI unified diff formatters.
   - `agent_bridge.py`: Dynamic AI agent bridge dispatching invariant constraints to IBM Bob 2.0, Claude Code, Cursor, and patch exporters.

2. **Autonomous Subagent Swarm (`stokes/subagents/`)**:
   - `stokes-sql`: Specialized ClickHouse AST visitor detecting unqualified `system.columns` reflections across database replica shards.
   - `stokes-proto`: Protobuf AST visitor locating unbounded `repeated` message fields lacking capacity annotations.
   - `stokes-python`: Python AST traverser finding unguarded dictionary feature loops and serialization sinks.
   - `stokes-rust`: Rust syn/Tree-sitter parser identifying fixed stack array `.try_into().unwrap()` hazards.
   - `stokes-verify`: Ephemeral sandbox runner executing Criterion micro-benchmarks and adversarial property fuzzers.

3. **Cross-Boundary AST Reachability Graph (`stokes/subagents/ast_engine/`)**:
   - `tree_sitter_loader.py`: Native Tree-sitter C-grammar binding loader for SQL, Protobuf, Python, and Rust.
   - `reachability_graph.py`: Sparse boundary graph topology solving linear cardinality inequalities across interface nodes in under 1 millisecond.

4. **Asynchronous IPC Framing & Multiplexer (`stokes/subagents/actor_base.py`, `stokes/subagents/bob_multiplexer.py`)**:
   - 4-byte big-endian binary length header framing supporting up to 16 MB frame budgets.
   - Bounded queues (`asyncio.Queue(maxsize=1024)`) and 16.6ms monotonic render tick coalescing.

5. **Verification & Fuzzing Harness (`stokes/harness/`)**:
   - `float_fuzz_battery.py`: 10,000-case randomized IEEE-754 adversarial float fuzzer intercepting NaN, subnormals, and infinity.
   - `criterion_runner.py`: Criterion micro-benchmark parser asserting in-place stack evaluation (7.66 ns vs 29.74 ns heap baseline).
   - `chaos_engine.py`: BGP Route Flap Dampening simulator and carrier penalty budget tracker.

6. **Test Suite (`stokes/tests/`)**:
   - 111 comprehensive unit and integration tests passing in 0.55s across CLI flags, AST queries, IPC framing, and lockfile hashing.

7. **Native Model Context Protocol Server (`stokes/mcp/server.py`)**:
   - JSON-RPC 2.0 stdio server exposing 9 tools, 4 resource URIs, and 2 guided prompt templates to IDE coding agents.

---

### Disclosed Pre-Prepared Templates & Benchmarks

In strict conformance with the lablab.ai organizer ruling, the following templates and baseline benchmarks were prepared prior to the build window and are fully disclosed:

1. **Dirichlet Testbed (`dirichlet/`)**:
   - A synthetic microservice architecture modeling the Cloudflare November 18, 2025 outage cascade.
   - Includes ClickHouse DDL schema migrations, a Python feature pipeline, and a Rust Pingora/FL2-style L7 reverse proxy (`crates/dirichlet-proxy`).
   - Serves as the concrete patient against which Stokes executes invariant verification and autonomous remediation.

2. **Web UI Presentation Shell (`web/`)**:
   - Staged Astro frontend layout and presentation template used for the documentation portal and product showcase.

---

## 3. IBM Bob 2.0 Token Audit Ledger

Stokes was developed through active collaboration with the IBM Bob 2.0 autonomous agent. Per hackathon guidelines, all Bob development tasks and token consumption metrics are recorded in an audit ledger:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        IBM BOB 2.0 TOKEN BURN DASHBOARD                │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Total Hackathon Token Allocation : 40.000 Bobcoins                    │
│  Bobcoins Burned to Date          : 35.064 Bobcoins (Active Burn)      │
│  Remaining Allocated Tokens       :  4.936 Bobcoins                    │
│  Audited Intermediate Sessions    : 5 Checkpoints                      │
│  Sprint Status                    : Verified Production Release        │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Interim Task Session Ledger

| Session | Task ID | Context Length | Bobcoins | Executed Tasks | Milestone Objective | Commit / Release |
|:---:|:---|:---:|:---:|:---:|:---|:---|
| **01** | `eca6a6d36cbe730f5c1064bc5f7970e4` | 208.9k / 270.0k (77%) | 27.180 | 10 subtasks | Core verification scaffolding, Tree-sitter AST queries, 5 subagents, fuzzing battery, test suite | [`58787e4`](https://github.com/yvliet/stokes/commit/58787e4) |
| **02** | `bc3669627aec37f22070a3c49aa93209` | 22.3k / 270.0k (8%) | 0.534 | 5 subtasks | Git repository lifecycle, identity setup, and initial GitHub remote push | [`yvliet/stokes`](https://github.com/yvliet/stokes) |
| **03** | `ee34ccd0b15f8e99001def36425c2fc1` | 37.7k / 270.0k (14%) | 1.450 | 6 subtasks | PyPI wheel build, twine validation, and initial package distribution | `pip install stokes` |
| **04** | `f5100dc74eccb43137abd7edea0fb559` | 103.9k / 270.0k (38%) | 3.600 | 8 subtasks | Dark mode charcoal palette and token standardization across Astro components | [`a1c02e6`](https://github.com/yvliet/stokes/commit/a1c02e6) |
| **05** | `fbd8a21d8eaa665c34a2d1e91ef85a0f` | 60.4k / 270.0k (22%) | 2.300 | 9 subtasks | 3x3 matrix bracket banner, tree connector subagents, and CLI/web terminal visual parity | [`f4818b3`](https://github.com/yvliet/stokes/commit/f4818b3) |

---

## 4. Session Breakdown & Audit Details

### Session 01: Core Verification Engine & Multi-Agent Scaffolding
- **Task ID**: `eca6a6d36cbe730f5c1064bc5f7970e4`
- **Context Length**: 208.9k / 270.0k tokens (77%)
- **Bobcoin Expenditure**: 27.180 Bobcoins
- **Scope**: Stokes core scaffolding, Tree-sitter AST queries, 5 subagents, fuzzing battery, and test modules.
- **Completed Subtasks**:
  - Subtask 1: Build `stokes/` directory structure and core module hierarchy.
  - Subtask 2: Author `contracts/`: AST query `.scm` files and JSON schemas.
  - Subtask 3: Implement `subagents/ast_engine/`: `tree_sitter_loader.py` and `reachability_graph.py`.
  - Subtask 4: Implement `subagents/`: `actor_base`, `bob_multiplexer`, `boundary_discovery`, `contract_synthesizer`.
  - Subtask 5: Author `subagents/`: `stokes_sql`, `stokes_proto`, `stokes_python`, `stokes_rust`, `stokes_verify`.
  - Subtask 6: Author `cli/`: `color_palette`, `terminal_overwriter`, `formatters`, `main`.
  - Subtask 7: Implement `harness/`: `chaos_engine`, `criterion_runner`, `float_fuzz_battery`, `sandbox_runner`.
  - Subtask 8: Write `tests/`: 6 test modules covering all subsystems.
  - Subtask 9: Configure `pyproject.toml`, `Makefile`, `AGENTS.md`, and module init files.
  - Subtask 10: Run test suite and validate initial passes.

### Session 02: Git Repository Lifecycle & Remote Publishing
- **Task ID**: `bc3669627aec37f22070a3c49aa93209`
- **Context Length**: 22.3k / 270.0k tokens (8%)
- **Bobcoin Expenditure**: 0.534 Bobcoins
- **Scope**: Clean git repository configuration and initial upstream synchronization to GitHub.
- **Completed Subtasks**:
  - Subtask 1: Create and update `.gitignore` in `stokes/`.
  - Subtask 2: Configure Git identity and set default branch to `main`.
  - Subtask 3: Stage all source files and author initial conventional commit.
  - Subtask 4: Initialize remote GitHub repository (`yvliet/stokes`) and push main branch.
  - Subtask 5: Verify remote repository status and branch protections.

### Session 03: PyPI Packaging, Validation & Distribution Gate
- **Task ID**: `ee34ccd0b15f8e99001def36425c2fc1`
- **Context Length**: 37.7k / 270.0k tokens (14%)
- **Bobcoin Expenditure**: 1.450 Bobcoins
- **Scope**: Verified package published to PyPI (`pip install stokes`).
- **Completed Subtasks**:
  - Step 1: Run complete test suite (111 tests) and verify passes.
  - Step 2: Clean existing build artifacts (`dist/`, `build/`, `*.egg-info`).
  - Step 3: Compile source distribution and wheel (`python -m build`).
  - Step 4: Validate distribution metadata and long description with `twine check`.
  - Step 5: Upload release to PyPI.
  - Step 6: Post-release verification (`pip install` test in clean virtual environment).

### Session 04: Dark Mode Palette Alignment & Token Standardization
- **Task ID**: `f5100dc74eccb43137abd7edea0fb559`
- **Context Length**: 103.9k / 270.0k tokens (38%)
- **Bobcoin Expenditure**: 3.600 Bobcoins
- **Scope**: Align dark mode tokens across Astro documentation components with palette.
- **Completed Subtasks**:
  - Subtask 1: Audit existing CSS variables in `web/src/styles/global.css`.
  - Subtask 2: Standardize dark theme background (`#0d1117`), card (`#161b22`), and border (`#30363d`) tokens.
  - Subtask 3: Update `WindowCard.astro` hardcoded color overrides.
  - Subtask 4: Update `CliTerminal.astro` to use semantic theme tokens.
  - Subtask 5: Update `ShowcaseSections.astro` code wells.
  - Subtask 6: Run `npm run build` in `web/` to confirm clean static compilation.
  - Subtask 7: Author conventional commit (`style(web): align dark mode palette with charcoal tokens`).
  - Subtask 8: Push updates to origin main.

### Session 05: CLI Matrix Bracket Header & Tree Subagent Visualizer
- **Task ID**: `fbd8a21d8eaa665c34a2d1e91ef85a0f`
- **Context Length**: 60.4k / 270.0k tokens (22%)
- **Bobcoin Expenditure**: 2.300 Bobcoins
- **Scope**: Achieve 100% visual parity between CLI streaming terminal and web demo visualizer.
- **Completed Subtasks**:
  - Subtask 1: Map target files across CLI formatters and web Astro components.
  - Subtask 2: Update `web/src/components/CliTerminal.astro` with 3x3 matrix bracket and tree connectors.
  - Subtask 3: Synchronize identical changes to `src/components/CliTerminal.astro`.
  - Subtask 4: Update `cli/formatters.py` with 3x3 matrix bracket ASCII/Unicode banner.
  - Subtask 5: Update `cli/terminal_overwriter.py` with tree connector subagent progress lines.
  - Subtask 6: Run `pytest` to confirm zero regressions in terminal output parsing.
  - Subtask 7: Run `npm run build` to verify Astro build integrity.
  - Subtask 8: Validate git diff to verify parity between web components and CLI output.
  - Subtask 9: Author conventional commit (`feat(cli): switch to 3x3 matrix bracket header and tree nested subagents`).

---

## 5. Verification & Attestation

This compliance document serves as the binding attribution statement for Project Stokes in the IBM Bob 2.0 Hackathon.

- **Solo Creator & Maintainer**: Yuliet Li (`yvliet`)
- **Official Repository**: [https://github.com/yvliet/stokes](https://github.com/yvliet/stokes)
- **PyPI Release**: [https://pypi.org/project/stokes/](https://pypi.org/project/stokes/)
- **Live Documentation**: [https://stokes.dev](https://stokes.dev)
- **Compliance Status**: FULLY CONFORMANT WITH ORGANIZER RULING
