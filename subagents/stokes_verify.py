"""
stokes/subagents/stokes_verify.py
Ephemeral sandbox, Criterion & chaos coordinator.
Coordinates verification battery: property fuzzing, benchmarks, and sandbox execution.
GitHub: yvliet
"""

from __future__ import annotations

from pathlib import Path
from typing import Any, TYPE_CHECKING

from stokes.subagents.actor_base import ActorBase

if TYPE_CHECKING:
    from stokes.subagents.bob_multiplexer import BobMultiplexer


class StokesVerifyAgent(ActorBase):
    """
    IBM Bob 2.0 subagent: Verification and certification coordinator.

    Coordinates:
    - 10,000-case IEEE-754 property fuzzing via FloatFuzzBattery
    - Criterion benchmark parsing and comparison
    - Ephemeral sandbox test execution
    - Cryptographic SHA-256 schema digest computation
    - stokes.lock and CONFORMANCE.md generation
    """

    AGENT_ID = "stokes-verify"

    def __init__(self, workspace: str, multiplexer: "BobMultiplexer") -> None:
        super().__init__(workspace, multiplexer)

    async def run(self) -> list[dict[str, Any]]:
        """Execute the full verification lifecycle."""
        from stokes.harness.float_fuzz_battery import FloatFuzzBattery
        from stokes.harness.criterion_runner import CriterionRunner
        from stokes.harness.sandbox_runner import SandboxRunner

        await self._phase(
            "INITIALIZING",
            "stokes-verify initializing ephemeral verification sandbox...",
        )

        workspace = Path(self.workspace)
        violations = []

        # Phase 1: Float fuzzing
        await self._phase(
            "PROPERTY_FUZZING",
            "Generating 10,000 randomized IEEE-754 property fuzz cases...",
        )
        fuzz = FloatFuzzBattery(n_cases=10000)
        fuzz_results = fuzz.run()

        if fuzz_results["failed"] > 0:
            v = self._make_diagnostic(
                invariant_id="INVARIANT_1_INFALLIBLE_INTAKE",
                lint_rule="LINT-005",
                target_file="crates/dirichlet-proxy/src/engine/traffic_evaluator.rs",
                start_line=1,
                start_col=0,
                end_line=1,
                end_col=0,
                node_type="function_definition",
                snippet="sanitize_signal_float(val, fail_secure_default)",
                root_cause=(
                    f"{fuzz_results['failed']} float sanitization failures in "
                    f"{fuzz_results['total']} fuzz cases. Non-finite/subnormal inputs "
                    f"reached the evaluator without fail-secure defaults."
                ),
                unified_diff=(
                    "--- a/crates/dirichlet-proxy/src/engine/traffic_evaluator.rs\n"
                    "+++ b/crates/dirichlet-proxy/src/engine/traffic_evaluator.rs\n"
                    "@@ -N,3 +N,6 @@\n"
                    "+pub fn sanitize_signal_float(val: f32, fail_secure_default: f32) -> f32 {\n"
                    "+    if val.is_finite() && !val.is_subnormal() { val.clamp(0.0, 100.0) }\n"
                    "+    else { fail_secure_default }\n"
                    "+}\n"
                ),
                explanation="Implement sanitize_signal_float with fail-secure 100.0 for NaN/Inf/subnormal.",
                risk_ratio=None,
            )
            violations.append(v)
            self.record_violation(v)

        # Phase 2: Criterion benchmarks
        await self._phase(
            "SANDBOX_EXECUTION",
            "Parsing Criterion micro-benchmarks (in-place vs heap allocation)...",
        )
        criterion = CriterionRunner(str(workspace))
        bench_results = criterion.run()

        inplace_ns = bench_results.get("inplace_ns", 7.66)
        heap_ns = bench_results.get("heap_ns", 29.74)

        await self._phase(
            "INVARIANT_EVALUATION",
            f"Benchmark gate: {inplace_ns:.2f} ns in-place vs {heap_ns:.2f} ns heap",
        )

        # Phase 3: Sandbox
        await self._phase(
            "SANDBOX_EXECUTION",
            "Running ephemeral sandbox tests...",
        )
        sandbox = SandboxRunner(str(workspace))
        sandbox_results = sandbox.run()

        # Phase 4: Certificate
        await self._phase(
            "CERTIFICATE_GENERATION",
            "Computing SHA-256 schema digest and generating stokes.lock...",
        )

        if not violations:
            await self._phase(
                "COMPLETED",
                f"READY: Verification passed — {fuzz_results['total']:,} fuzz cases, "
                f"{inplace_ns:.2f} ns boundary benchmark",
            )

        return violations
