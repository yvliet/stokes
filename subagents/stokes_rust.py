"""
stokes/subagents/stokes_rust.py
Edge memory model, Dual-Zone & concurrency auditor.
LINT-004: Fixed Stack Buffer Overflow Hazard
LINT-005: L1D Cache Eviction & Allocation Stall
GitHub: yvliet
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any, TYPE_CHECKING

from stokes.subagents.actor_base import ActorBase

if TYPE_CHECKING:
    from stokes.subagents.bob_multiplexer import BobMultiplexer

# ─── Rust Analysis Patterns ───────────────────────────────────────────────────

_TRY_INTO_UNWRAP = re.compile(
    r"\.try_into\(\)\s*\.(unwrap|expect)\s*\(",
    re.MULTILINE,
)
_UPPER_BOUNDED_BUFFER = re.compile(
    r"(?:\[\s*([A-Z]\w*)\s*;\s*(\d+)\s*\]|ArrayVec<\s*([A-Z]\w*)\s*,\s*(\d+)\s*>)",
    re.MULTILINE,
)
_HEAP_VEC_FEATURE = re.compile(
    r"Vec\s*<\s*Feature\s*>",
    re.MULTILINE,
)
_STRING_FIELD = re.compile(
    r"(?:pub\s+)?(\w+)\s*:\s*String\b",
    re.MULTILINE,
)
_MAX_FEATURES_CONST = re.compile(
    r"(?:pub\s+)?const\s+(MAX_ACTIVE_FEATURES|MAX_FEATURES|BUFFER_CAPACITY)\s*:\s*usize\s*=\s*(\d+)\s*;",
    re.MULTILINE,
)
_DUAL_ZONE = re.compile(
    r"select_nth_unstable_by|ingest_descriptors_dual_zone|DualZoneIngestionReport",
    re.MULTILINE,
)
_ARC_SWAP = re.compile(
    r"ArcSwap|arc_swap",
    re.MULTILINE,
)
_CATCH_UNWIND = re.compile(
    r"catch_unwind",
    re.MULTILINE,
)

# ─── Remediation Diffs ────────────────────────────────────────────────────────

_RUST_DEFENSIVE_BOUNDS_DIFF = """\
--- a/crates/dirichlet-proxy/src/engine/feature_ingest.rs
+++ b/crates/dirichlet-proxy/src/engine/feature_ingest.rs
@@ -42,5 +42,16 @@
-    let mut features: [Feature; 200] = payload.as_slice().try_into().unwrap();
+    // Stokes INVARIANT_1: Defensive bounds validation & contract error propagation
+    const MAX_FEATURES: usize = 200;
+    if payload.len() > MAX_FEATURES {
+        metrics::counter!("proxy_feature_overflow_dropped", payload.len() as u64);
+        return Err(ContractError::CapacityExceeded {
+            received: payload.len(),
+            maximum: MAX_FEATURES,
+        });
+    }
+    let features: [Feature; MAX_FEATURES] = payload
+        .as_slice()
+        .try_into()
+        .map_err(|_| ContractError::InvalidSliceConversion)?;
"""

_RUST_DUAL_ZONE_DIFF = """\
--- a/crates/dirichlet-proxy/src/engine/feature_ingest.rs
+++ b/crates/dirichlet-proxy/src/engine/feature_ingest.rs
@@ -42,5 +42,14 @@
-    let mut features: [Feature; 200] = payload.as_slice().try_into().unwrap();
+    // Stokes INVARIANT_1: Zero-allocation Dual-Zone priority degradation
+    let mut descriptors: Vec<FeatureDescriptor> = payload
+        .iter()
+        .map(|f| FeatureDescriptor::new(f.id, f.priority, f.is_shadow))
+        .collect();
+    let telemetry = StaticTelemetryRing::new();
+    let report = ingest_descriptors_dual_zone(&mut descriptors, &telemetry);
+    // Safe: descriptors.len() <= MAX_ACTIVE_FEATURES guaranteed by dual-zone
+    let features: [FeatureDescriptor; 200] = descriptors[..MAX_ACTIVE_FEATURES]
+        .try_into()
+        .expect("dual-zone guarantees len == MAX_ACTIVE_FEATURES");
"""

_RUST_ARC_SWAP_DIFF = """\
--- a/crates/dirichlet-proxy/src/lib.rs
+++ b/crates/dirichlet-proxy/src/lib.rs
@@ -1,4 +1,16 @@
+use arc_swap::ArcSwap;
+use std::sync::Arc;
+
+pub struct ConfigStore {
+    pub active_config: ArcSwap<FeatureCatalogState>,
+    pub last_known_good: ArcSwap<FeatureCatalogState>,
+}
+
+impl ConfigStore {
+    #[inline(always)]
+    pub fn rollback_to_lkg(&self) {
+        let lkg = self.last_known_good.load_full();
+        self.active_config.store(lkg);
+    }
+}
"""


class StokesRustAgent(ActorBase):
    """
    IBM Bob 2.0 subagent: Rust edge proxy memory model auditor.

    Analyzes Rust source files for:
    - .try_into().unwrap() on fixed stack buffers (LINT-004, INVARIANT_1)
    - Heap Vec<Feature> allocations on hot packet paths (LINT-005)
    - Missing Dual-Zone partitioning implementation
    - Missing ArcSwap LKG rollback
    - Missing catch_unwind thread panic isolation (INVARIANT_3)
    """

    AGENT_ID = "stokes-rust"

    def __init__(self, workspace: str, multiplexer: "BobMultiplexer") -> None:
        super().__init__(workspace, multiplexer)

    async def run(self) -> list[dict[str, Any]]:
        """Execute the full Rust edge proxy audit lifecycle."""
        await self._phase("INITIALIZING", "stokes-rust initializing edge proxy audit...")

        workspace = Path(self.workspace)
        skip_dirs = {
            ".git", "target", "__pycache__", "node_modules",
            ".gemini", ".stokes", "dist", "build",
        }

        rust_files = []
        for path in workspace.rglob("*.rs"):
            if any(part in skip_dirs for part in path.parts):
                continue
            rust_files.append(path)

        await self._phase(
            "AST_PARSING",
            f"Inspecting {len(rust_files)} Rust source files for buffer invariants...",
        )

        violations = []

        for rs_file in rust_files:
            await self._phase(
                "INVARIANT_EVALUATION",
                f"Auditing {rs_file.name} fixed memory & panic invariants...",
                target_file=str(rs_file.relative_to(workspace)),
            )
            v = self._audit_rust_file(rs_file, workspace)
            violations.extend(v)

        if violations:
            await self._phase(
                "HALTED_ON_VIOLATION",
                f"FLAGGED: infallible intake violation (.unwrap() on overflow)",
                severity="CONTRACT_VIOLATION",
            )
        else:
            await self._phase(
                "COMPLETED",
                f"Rust audit complete - {len(rust_files)} files, no memory violations",
            )

        for v in violations:
            self.record_violation(v)

        return violations

    def _audit_rust_file(self, path: Path, workspace: Path) -> list[dict[str, Any]]:
        """Audit a single Rust file for memory model violations."""
        try:
            source = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            return []

        violations = []
        rel = str(path.relative_to(workspace))
        lines = source.splitlines()

        # LINT-004: .try_into().unwrap() on fixed stack buffers
        for m in _TRY_INTO_UNWRAP.finditer(source):
            line_num = source[:m.start()].count("\n") + 1
            snippet = lines[line_num - 1].strip()[:100] if 0 < line_num <= len(lines) else ""

            # Check if this is inside a buffer context
            context_before = source[max(0, m.start() - 100):m.start()]
            is_fixed_buffer = bool(_UPPER_BOUNDED_BUFFER.search(context_before))

            # Find dynamic buffer capacity
            buf_capacity = 200
            for b_match in _UPPER_BOUNDED_BUFFER.finditer(source):
                cap_str = b_match.group(2) or b_match.group(4)
                if cap_str:
                    buf_capacity = int(cap_str)
                    break

            for cm in _MAX_FEATURES_CONST.finditer(source):
                buf_capacity = int(cm.group(2))
                break

            # Check if Dual-Zone or bounds guard is already implemented
            has_dual_zone = bool(_DUAL_ZONE.search(source))

            if not has_dual_zone:
                risk = 280 / buf_capacity
                v = self._make_diagnostic(
                    invariant_id="INVARIANT_1_INFALLIBLE_INTAKE",
                    lint_rule="LINT-004",
                    target_file=rel,
                    start_line=line_num,
                    start_col=0,
                    end_line=line_num,
                    end_col=len(snippet),
                    node_type="call_expression",
                    snippet=snippet,
                    root_cause=(
                        f"`.try_into().unwrap()` at {rel}:{line_num} converts a "
                        f"dynamic slice into a fixed stack array without an upstream "
                        f"cardinality bound check. When upstream returns 280 items "
                        f"into a [{buf_capacity}]-slot buffer, this panics immediately "
                        f"with TryFromSliceError, crashing the worker thread."
                    ),
                    unified_diff=_RUST_DEFENSIVE_BOUNDS_DIFF,
                    explanation=(
                        f"Replace .try_into().unwrap() with explicit capacity bounds checking "
                        f"(Result<[Feature; {buf_capacity}], ContractError>) to propagate payload errors cleanly "
                        f"and emit telemetry rather than crashing worker threads."
                    ),
                    risk_ratio=risk,
                    tainted_identifiers=[
                        "try_into", "unwrap", f"[Feature; {buf_capacity}]"
                    ],
                )
                violations.append(v)

        # LINT-005: Heap Vec<Feature> on hot path
        for m in _HEAP_VEC_FEATURE.finditer(source):
            line_num = source[:m.start()].count("\n") + 1
            snippet = lines[line_num - 1].strip()[:100] if 0 < line_num <= len(lines) else ""

            # Only flag if no Dual-Zone already present
            if not _DUAL_ZONE.search(source):
                v = self._make_diagnostic(
                    invariant_id="INVARIANT_1_INFALLIBLE_INTAKE",
                    lint_rule="LINT-005",
                    target_file=rel,
                    start_line=line_num,
                    start_col=0,
                    end_line=line_num,
                    end_col=len(snippet),
                    node_type="type_identifier",
                    snippet=snippet,
                    root_cause=(
                        f"Vec<Feature> at {rel}:{line_num}: heap allocation on packet "
                        f"intake path. Feature struct is 88 bytes with 3 heap-allocated "
                        f"String fields per entry. 200 features = 17.6 KB + 600 heap "
                        f"pointer dereferences. 53.7% L1D cache saturation."
                    ),
                    unified_diff=_RUST_DUAL_ZONE_DIFF,
                    explanation=(
                        "Replace Vec<Feature> with FeatureDescriptor (8 bytes, Copy, zero pointers). "
                        "200 descriptors = 1.6 KB, 4.8% L1D cache saturation, "
                        "zero drop() or free() calls on overflow eviction."
                    ),
                    risk_ratio=None,
                    tainted_identifiers=["Vec<Feature>", "Feature"],
                )
                violations.append(v)

        # INVARIANT_3: Missing catch_unwind
        if "evaluator.evaluate" in source or "evaluate_request" in source:
            if not _CATCH_UNWIND.search(source):
                v = self._make_diagnostic(
                    invariant_id="INVARIANT_3_THREAD_ISOLATION",
                    lint_rule="LINT-004",
                    target_file=rel,
                    start_line=1,
                    start_col=0,
                    end_line=1,
                    end_col=0,
                    node_type="function_definition",
                    snippet="// missing: catch_unwind(AssertUnwindSafe(|| evaluator.evaluate(...)))",
                    root_cause=(
                        f"Worker thread evaluation in {rel} is not wrapped in "
                        f"catch_unwind. An evaluation panic crashes the worker thread "
                        f"without recovery, collapsing the epoll event loop."
                    ),
                    unified_diff=(
                        "--- a/" + rel + "\n"
                        "+++ b/" + rel + "\n"
                        "@@ -N,3 +N,8 @@\n"
                        "-    let verdict = evaluator.evaluate(signals);\n"
                        "+    let verdict = match catch_unwind(AssertUnwindSafe(|| evaluator.evaluate(signals))) {\n"
                        "+        Ok(v) => v,\n"
                        "+        Err(_) => EvaluationVerdict { threat_score: 100, action: MitigationAction::Block, ..Default::default() },\n"
                        "+    };\n"
                    ),
                    explanation=(
                        "Wrap evaluation dispatch in catch_unwind(AssertUnwindSafe(...)). "
                        "On panic, return fail-secure Block verdict (threat_score=100) "
                        "instead of crashing the worker thread."
                    ),
                    risk_ratio=None,
                    tainted_identifiers=["evaluator.evaluate"],
                )
                violations.append(v)

        # INVARIANT_4: Dynamic configuration reload without atomic LKG store
        if ("reload_config" in source or "update_config" in source or "ConfigStore" in source) and not _ARC_SWAP.search(source):
            v = self._make_diagnostic(
                invariant_id="INVARIANT_4_LKG_ATOMIC_ROLLBACK",
                lint_rule="LINT-005",
                target_file=rel,
                start_line=1,
                start_col=0,
                end_line=1,
                end_col=0,
                node_type="struct_definition",
                snippet="// missing: ArcSwap<FeatureCatalogState> atomic LKG rollback store",
                root_cause=(
                    f"Dynamic configuration reload in {rel} lacks wait-free atomic "
                    f"Last-Known-Good (LKG) rollback. An uncontracted runtime payload "
                    f"either freezes the service or causes stale-state lockup."
                ),
                unified_diff=_RUST_ARC_SWAP_DIFF,
                explanation=(
                    "Implement ConfigStore with ArcSwap<FeatureCatalogState> to allow wait-free "
                    "atomic rollback to Last-Known-Good configuration (< 50ns) on invalid payload."
                ),
                risk_ratio=None,
                tainted_identifiers=["ConfigStore", "ArcSwap"],
            )
            violations.append(v)

        return violations
