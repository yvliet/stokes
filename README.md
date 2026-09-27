<div align="center">

  <a href="https://trystokes.pages.dev">
    <img src="assets/banner-dark.svg#gh-dark-mode-only" alt="stokes" width="160" />
    <img src="assets/banner-light.svg#gh-light-mode-only" alt="stokes" width="160" />
  </a>

# stokes

### autonomous cross-boundary systems invariant verification engine.

[![license: mit](https://img.shields.io/badge/license-MIT-09090b.svg?logo=opensourceinitiative&logoColor=white)](https://github.com/yvliet/stokes/blob/main/LICENSE)
[![pypi](https://img.shields.io/badge/pypi-v0.2.0-161b22.svg?logo=pypi&logoColor=white)](https://pypi.org/project/stokes/)
[![python](https://img.shields.io/badge/python-3.11%20%7C%203.12%20%7C%203.13-09090b.svg?logo=python&logoColor=white)](pyproject.toml)
[![targets](https://img.shields.io/badge/targets-SQL%20%7C%20Proto%20%7C%20Python%20%7C%20Rust-161b22.svg?logo=rust&logoColor=white)](https://trystokes.pages.dev/contracts)
[![ci gate](https://img.shields.io/badge/ci_gate-strict%20pass%20(<38ms)-09090b.svg?logo=githubactions&logoColor=white)](https://github.com/yvliet/stokes/blob/main/CONFORMANCE.md)
[![live portal](https://img.shields.io/badge/live_portal-trystokes.pages.dev-161b22.svg?logo=cloudflare&logoColor=white)](https://trystokes.pages.dev)
[![built with](https://img.shields.io/badge/built_with-IBM%20Bob%202.0-09090b.svg?logo=ibm&logoColor=white)](https://github.com/yvliet/stokes/tree/main/bob_sessions)

[why stokes?](#1-why-stokes) •
[outage case study](#2-the-cloudflame-outage-case-study) •
[key capabilities](#3-key-capabilities) •
[architecture](#4-architecture-and-verification-pipeline) •
[developer quickstart](#5-developer-quickstart) •
[compliance & retrospective](#6-hackathon-compliance-and-retrospective) •
[documentation](#7-documentation-and-help) •
[license](#8-license)

</div>

## 1. why stokes?

modern distributed systems rarely crash from isolated syntax bugs or compiler errors. they crash at untyped seams across language and infrastructure boundaries.

consider a standard high-throughput cloud architecture:
1. analytical data stores (e.g. clickhouse, postgresql) define table schemas and emit dynamic catalog metadata.
2. dynamic feature extractors (e.g. python, typescript) query database catalogs and pack signal dictionaries into runtime payloads.
3. edge reverse proxies (e.g. rust pingora/fl2, c++ envoy) decode payloads into fixed-size stack arrays to guarantee deterministic sub-microsecond latency without heap allocations.

when an upstream migration or internal shard reflection exposes additional columns, the query projection expands (e.g. from 200 canonical features to 280 rows). monolingual tooling is blind to this drift:
- `sqlfluff` confirms valid sql syntax.
- `mypy` confirms valid python dictionary types.
- `rustc` confirms memory safety and borrow semantics.

every compiler passes in isolation. yet when the 280-element payload reaches the edge proxy, converting the dynamic slice into a fixed stack array (`[Feature; 200]`) via `.try_into().unwrap()` triggers an immediate `TryFromSliceError` panic. worker threads crash, epoll event loops abort, and the entire edge fleet enters synchronized crash loops.

stokes eliminates this failure mode. it parses abstract syntax trees across sql, protobuf, python, and rust, constructs a unified cross-boundary reachability graph, verifies capacity constraints ($N_{produced} \le C_{consumed}$), and blocks uncontracted schema drift in ci in under 38ms.

## 2. the cloudflame outage case study

stokes includes **cloudflame**, a synthetic production testbed modeling the cloudflare november 18, 2025 global outage cascade.

the multi-tier failure chain unfolds across four stages:
1. **clickhouse ddl reflection** (`migrations/`): an unqualified `system.columns` query unintentionally reflects internal shard tables (`r0`, `r1`), expanding the emitted feature count from 200 to 280 columns.
2. **python serialization sink** (`services/pipeline/extractor.py`): the pipeline ingests the query result dynamically and serializes all 280 elements into key-value payloads without validation guards.
3. **kv configuration broadcast**: the 280-element payload replicates globally across edge nodes.
4. **rust l7 edge proxy panic** (`crates/cloudflame-proxy/`): the proxy attempts to unpack the 280 elements into a fixed `[Feature; 200]` stack allocation on its packet processing hot path. the `.try_into().unwrap()` call panics, killing worker threads and blackholing global traffic.

when evaluated against cloudflame, stokes provides instant detection and autonomous remediation:
- **detection**: `stokes verify` computes a **cardinality risk ratio of 1.40** (280 upstream signals vs. 200 downstream buffer slots) and flags fatal contract drift before code is committed.
- **remediation**: `stokes remediate --apply` generates a two-tier zero-allocation patch:
  1. filters upstream reflection: adds `WHERE database = currentDatabase()` to clickhouse schema queries.
  2. partitions downstream memory: replaces single fixed arrays with dual-zone bounded stack buffers (`[Feature; 128]` active hot-path + `[Feature; 72]` overflow).

## 3. key capabilities

- **parallel ast analyzer suite**: 8 specialized subagents powered by tree-sitter s-expressions (`stokes-sql`, `stokes-proto`, `stokes-python`, `stokes-rust`, `stokes-verify`, `boundary_discovery`, `contract_synthesizer`, and `staging_inspector`).
- **cross-boundary reachability graph**: maps multi-tier producer-consumer relationships into a directed acyclic graph and solves linear capacity inequalities in under 1ms.
- **cryptographic conformance layer**: enforces boundary integrity via machine-authoritative `stokes.lock` (sha-256 semantic ast digests) and human-readable `CONFORMANCE.md` audit receipts for pr reviewers.
- **micro-benchmark & fuzzing harness**: executes criterion benchmark verification (asserting 7.66 ns hot-path latency and 0 bytes heap allocation) alongside a 10,000-case randomized ieee-754 float fuzzing battery.
- **native model context protocol (mcp) server**: exposes 9 tools, 4 resources, and 2 guided prompt templates via json-rpc 2.0 stdio for ibm bob 2.0, claude code, and cursor.
- **ansi terminal driver**: 60 fps multi-line cursor addressability (`\033[<N>A`), 3x3 matrix bracket headers, bracketless grayscale loading tickers, and tree-nested progress visualizers.

## 4. architecture and verification pipeline

the verification pipeline executes in three deterministic stages:

1. **extraction**: tree-sitter visitors traverse source trees across sql, protobuf, python, and rust, extracting database columns, protobuf field numbers, dictionary key mappings, and stack buffer definitions while discarding non-contract whitespace, comments, and local variable formatting.
2. **analysis**: the reachability engine traces data flow from producer endpoints to consumer buffers, checking capacity inequalities ($N_{upstream} \le C_{downstream}$) and asserting zero heap allocation invariants.
3. **attestation**: cryptographic sha-256 signatures are evaluated against `stokes.lock`. if contracts match, a passing attestation is written to `CONFORMANCE.md`; if drift is detected, the status check exits with code 1.

## 5. developer quickstart

### prerequisites

- **python**: `>= 3.11`
- **optional**: `tree-sitter >= 0.22` (for native c grammar bindings; pure ast regex fallback included)

### installation

install via official install script:

```bash
curl -fsSL https://trystokes.pages.dev/install.sh | sh
```

or install from pypi:

```bash
pip install stokes
```

### everyday cli commands

- **initialize a workspace**:
  ```bash
  stokes init
  ```
  scaffolds `.stokes/`, `stokes.yaml`, and initial `stokes.lock`.

- **run verification gate**:
  ```bash
  stokes verify --strict
  ```
  evaluates cross-boundary invariants. for ci/cd automation, pass `--format=json` or `--format=junit`.

- **export reachability dag**:
  ```bash
  stokes graph --format=svg > boundary-graph.svg
  ```
  exports boundary graph in svg, dot, or json format.

- **propose automated remediations**:
  ```bash
  stokes remediate --apply
  ```
  applies zero-allocation patches directly to source files.

- **start model context protocol (mcp) server**:
  ```bash
  stokes mcp
  ```
  launches the json-rpc 2.0 stdio server for ide coding agents.

## 6. hackathon compliance and retrospective

stokes was engineered for the official **ibm bob 2.0 hackathon**. in alignment with competition rules, this section provides transparent disclosure of organizer rulings, scope delineation, bobcoin expenditure, and retrospective findings.

### official organizer & mentor rulings

- **ruling 1: pre-prepared assets & code scaffolding permissions**  
  *speaker*: Hamza | lablab.ai (`hamzaimran_8`, Discord Message ID: `1553083130045268114`, Sept 25, 2026, 23:37 WIB)  
  *ruling*: pre-prepared synthetic sample code and demo ui templates are explicitly permitted provided they are disclosed in the repository and all core bob analysis and project logic are built during the hackathon window.

- **ruling 2: bobalytics telemetry & tooling guidance**  
  *speaker*: Vedant Sharma | lablab.ai Admin & Mentor (`vedantsharma01`, User ID: `1230067605713453137`, Sept 26, 2026)  
  *ruling*: confirmed a known bobalytics telemetry synchronization bug where commits pushed to github were not captured in earlier ide builds, and task history data could desync. clarified that exported task session summaries and token meter ledgers serve as the authoritative development record.

### scope & asset delineation

| asset category | file tree paths | description & authorship origin |
| :--- | :--- | :--- |
| **100% in-sprint build** | `stokes/cli/`<br/>`stokes/subagents/`<br/>`stokes/harness/`<br/>`stokes/tests/` | authored with ibm bob 2.0 during sprint: cli runner (`verify`, `init`, `graph`, `scan`, `audit`, `remediate`, `cert`, `mcp`), 8-component parallel analyzer suite, tree-sitter ast queries, 10,000 float tests, binary ipc framing, 196 tests passing in 4.04s. |
| **disclosed supplementary build** | `stokes/mcp/` | model context protocol json-rpc stdio server engineered using complementary tooling to conserve bobcoins for core engines. |
| **disclosed templates** | `cloudflame/`<br/>`web/src/` | pre-prepared synthetic testbed modeling cloudflare nov 18, 2025 outage and astro documentation shell. |

### ibm bob 2.0 token audit ledger

- **total hackathon token allocation**: `40.000 bobcoins`
- **bobcoins burned to date**: `37.294 bobcoins` (session sum) / `39.390 bobcoins` (active meter burn)
- **remaining budget**: `0.610 bobcoins` (1% remaining, 99% utilized)
- **sprint status**: verified production release (196 passing unit and integration tests)

| session | task id | context length | bobcoins | executed milestones |
| :---: | :--- | :---: | :---: | :--- |
| **01** | `eca6a6d36cbe730f5c1064bc5f7970e4` | 208.9k / 270.0k (77%) | 27.180 | core verification scaffolding, tree-sitter ast queries, 5 analyzers, fuzzing battery, test suite |
| **02** | `bc3669627aec37f22070a3c49aa93209` | 22.3k / 270.0k (8%) | 0.534 | git lifecycle setup and initial github upstream synchronization |
| **03** | `ee34ccd0b15f8e99001def36425c2fc1` | 37.7k / 270.0k (14%) | 1.450 | pypi packaging, twine validation, and initial package distribution |
| **04** | `f5100dc74eccb43137abd7edea0fb559` | 103.9k / 270.0k (38%) | 3.600 | dark mode token standardization and astro component theme alignment |
| **05** | `fbd8a21d8eaa665c34a2d1e91ef85a0f` | 60.4k / 270.0k (22%) | 2.300 | matrix bracket banner, tree-nested analyzers, and cli/web terminal visual parity |
| **06** | `12fc8f06d0682b75ba1cc841e6320a7a` | 87.5k / 270.0k (32%) | 2.230 | cli additions (`init`, `graph`), machine-readable ci flags (`--format=json\|junit`), 196 tests passing |

full session logs, commit hashes, and verification screenshots are preserved in [`bob_sessions/`](https://github.com/yvliet/stokes/tree/main/bob_sessions).

### retrospective & resource asymmetry feedback

building an enterprise systems verification platform across 4 languages pushed hackathon trial bounds. active development revealed several practical challenges:

1. **solo vs. multi-member team token asymmetry**:
   - the hackathon allocated a flat **40.000 bobcoins** per registered workspace.
   - for 6-person teams, collective pools reached **240 bobcoins** (40 coins x 6 seats). solo builders operated under a strict 40-coin ceiling.
   - solo developers building production-grade systems architectures had 1/6th the autonomous generation budget of full squads. over **39.390 bobcoins** were burned, requiring extreme prompt rationing and moving secondary tooling (such as the mcp server) to complementary environments to protect budget for the core compiler engine.
2. **locked workspace constraints**:
   - participants could not link personal ibm bob subscriptions or bring external compute credits into the competition workspace, leaving no margin for heavy multi-pass refactoring.
3. **bobalytics telemetry reliability**:
   - due to the bobalytics github commit tracking bug confirmed by mentor `vedantsharma01`, automated telemetry showed zero lines written for remote git operations, necessitating manual preservation of session screenshots and token logs.

### recommendations for future hackathons

- **unified team credit pools**: provision a flat, project-level token pool (e.g. 150-200 bobcoins per registered repository) rather than per-seat quotas, guaranteeing equity between solo hackers and larger teams.
- **personal account bridging**: provide an optional api or subscription bridge allowing developers to connect personal ibm bob subscriptions when project complexity exceeds trial tiers.

## 7. documentation and help

complete documentation, guides, and architectural specifications are available on the live portal and in the repository:

- **[live documentation portal](https://trystokes.pages.dev/docs)**: complete guides covering architecture, ast engine, and subagent swarm.
- **[cli reference](https://trystokes.pages.dev/cli)**: detailed flag specifications, exit codes, and output formatting.
- **[analyzers catalog](https://trystokes.pages.dev/analyzers)**: deep dive into all 8 ast analyzer visitors and query patterns.
- **[cryptographic conformance](https://github.com/yvliet/stokes/blob/main/CONFORMANCE.md)**: conformance attestation certificate and boundary capacity margins.
- **[lockfile specification](https://trystokes.pages.dev/docs#reference/lockfile-spec)**: semantic ast normalization and hashing specification.
- **[mcp protocol guide](https://trystokes.pages.dev/docs#reference/mcp-protocol)**: json-rpc 2.0 protocol and tool definitions.
- **[technical specification](https://github.com/yvliet/stokes/blob/main/01_TECHNICAL_SPECIFICATION.md)**: enterprise systems architecture and data flow blueprint.
- **[token audit ledger](https://github.com/yvliet/stokes/tree/main/bob_sessions)**: authoritative ibm bob task session summaries and verification captures.

## 8. license

stokes is open-source software licensed under the **[mit license](https://github.com/yvliet/stokes/blob/main/LICENSE)**.

certified by: **Yuliet Li** (github: [`yvliet`](https://github.com/yvliet))
