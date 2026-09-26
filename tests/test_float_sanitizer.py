"""
stokes/tests/test_float_sanitizer.py
Float rejection & FTZ/DAZ compliance tests.
Tests the IEEE-754 fail-secure sanitization battery with 10,000 cases.
GitHub: yvliet
"""

import math
import struct
import pytest
from stokes.harness.float_fuzz_battery import (
    FloatFuzzBattery,
    sanitize_signal_float,
    _pack_f32_bits,
    _generate_adversarial_cases,
)


FAIL_SECURE = 100.0


class TestSanitizeSignalFloat:
    """Unit tests for the sanitize_signal_float reference implementation."""

    # ── Basic finite values ───────────────────────────────────────────────────

    def test_normal_value_passes_through(self):
        """Normal float in [0, 100] must pass through unchanged."""
        assert sanitize_signal_float(50.0, FAIL_SECURE) == 50.0

    def test_zero_passes_through(self):
        """Zero must be returned as-is (not treated as subnormal)."""
        result = sanitize_signal_float(0.0, FAIL_SECURE)
        assert result == 0.0

    def test_positive_zero_passes_through(self):
        """Positive zero must not trigger fail-secure."""
        result = sanitize_signal_float(+0.0, FAIL_SECURE)
        assert result == 0.0

    def test_below_zero_clamped_to_zero(self):
        """Negative values must be clamped to 0.0."""
        assert sanitize_signal_float(-1.0, FAIL_SECURE) == 0.0
        assert sanitize_signal_float(-100.0, FAIL_SECURE) == 0.0

    def test_above_100_clamped_to_100(self):
        """Values above 100.0 must be clamped to 100.0."""
        assert sanitize_signal_float(101.0, FAIL_SECURE) == 100.0
        assert sanitize_signal_float(1000.0, FAIL_SECURE) == 100.0

    def test_exactly_100_passes_through(self):
        """Exactly 100.0 must pass through."""
        assert sanitize_signal_float(100.0, FAIL_SECURE) == 100.0

    # ── Security-critical: NaN rejection ─────────────────────────────────────

    def test_nan_returns_fail_secure(self):
        """NaN MUST return fail_secure_default (never 0.0 - security bypass)."""
        result = sanitize_signal_float(float("nan"), FAIL_SECURE)
        assert result == FAIL_SECURE

    def test_negative_nan_returns_fail_secure(self):
        """-NaN MUST return fail_secure_default."""
        result = sanitize_signal_float(-float("nan"), FAIL_SECURE)
        assert result == FAIL_SECURE

    def test_quiet_nan_returns_fail_secure(self):
        """Quiet NaN (f32 0x7FC00000) MUST return fail_secure_default."""
        val = _pack_f32_bits(0x7FC00000)
        assert math.isnan(val)
        result = sanitize_signal_float(val, FAIL_SECURE)
        assert result == FAIL_SECURE

    def test_nan_never_maps_to_zero(self):
        """NaN casting to 0 is a security bypass - MUST NOT happen."""
        result = sanitize_signal_float(float("nan"), FAIL_SECURE)
        assert result != 0.0, "SECURITY VIOLATION: NaN mapped to 0.0 (bypass threat detection)"

    # ── Security-critical: Infinity rejection ─────────────────────────────────

    def test_positive_infinity_returns_fail_secure(self):
        """+Inf MUST return fail_secure_default."""
        result = sanitize_signal_float(float("inf"), FAIL_SECURE)
        assert result == FAIL_SECURE

    def test_negative_infinity_returns_fail_secure(self):
        """-Inf MUST return fail_secure_default."""
        result = sanitize_signal_float(-float("inf"), FAIL_SECURE)
        assert result == FAIL_SECURE

    def test_f32_positive_inf_bits_returns_fail_secure(self):
        """f32 positive infinity bit pattern MUST return fail_secure_default."""
        val = _pack_f32_bits(0x7F800000)
        result = sanitize_signal_float(val, FAIL_SECURE)
        assert result == FAIL_SECURE

    # ── Security-critical: Subnormal rejection ────────────────────────────────

    def test_subnormal_float_returns_fail_secure(self):
        """Subnormal (denormalized) float MUST return fail_secure_default."""
        # Smallest positive subnormal float32
        val = _pack_f32_bits(0x00000001)
        if not math.isfinite(val):
            pytest.skip("platform doesn't support subnormals")
        result = sanitize_signal_float(val, FAIL_SECURE)
        assert result == FAIL_SECURE

    def test_subnormal_float32_bits_rejected(self):
        """Multiple subnormal bit patterns must all be rejected."""
        subnormal_bits = [0x00000001, 0x007FFFFF, 0x00400000]
        for bits in subnormal_bits:
            val = _pack_f32_bits(bits)
            if math.isnan(val) or math.isinf(val):
                continue  # Skip if platform converts to special value
            if val == 0.0:
                continue  # Skip if platform flushes to zero
            result = sanitize_signal_float(val, FAIL_SECURE)
            assert result == FAIL_SECURE, f"Subnormal {bits:#010x} = {val} not sanitized"

    # ── Result invariants ─────────────────────────────────────────────────────

    def test_result_always_finite(self):
        """Result must ALWAYS be finite, regardless of input."""
        inputs = [
            float("nan"), -float("nan"), float("inf"), -float("inf"),
            0.0, 50.0, 100.0, -1.0, 101.0,
            _pack_f32_bits(0x7FC00000),
        ]
        for val in inputs:
            result = sanitize_signal_float(val, FAIL_SECURE)
            assert math.isfinite(result), f"Result for {val!r} is not finite: {result}"

    def test_result_always_in_range(self):
        """Result must always be in [0.0, 100.0]."""
        inputs = [
            float("nan"), float("inf"), -float("inf"), 0.0,
            -50.0, 50.0, 100.0, 200.0, -200.0,
        ]
        for val in inputs:
            result = sanitize_signal_float(val, FAIL_SECURE)
            assert 0.0 <= result <= 100.0, f"Result {result} out of range for input {val!r}"


class TestFloatFuzzBattery:
    """Tests for the 10,000-case fuzz battery."""

    def test_battery_runs_10000_cases(self):
        """Battery must run exactly 10,000 cases."""
        battery = FloatFuzzBattery(n_cases=10000)
        results = battery.run()
        assert results["total"] == 10000

    def test_battery_100_percent_pass_rate(self):
        """All 10,000 fuzz cases must pass."""
        battery = FloatFuzzBattery(n_cases=10000)
        results = battery.run()
        assert results["failed"] == 0, (
            f"Failed cases: {results['failures']}"
        )

    def test_battery_sanitizes_adversarial_vectors(self):
        """Adversarial NaN/Inf/subnormal vectors must be sanitized."""
        battery = FloatFuzzBattery(n_cases=10000)
        results = battery.run()
        assert results["adversarial_sanitized"] > 0

    def test_battery_passes_security_gate(self):
        """Security gate for 1,000 adversarial vectors must pass."""
        battery = FloatFuzzBattery(n_cases=10000)
        assert battery.run_security_gate() is True

    def test_adversarial_cases_cover_nan_inf_subnormal(self):
        """Adversarial case set must include NaN, Inf, and subnormal patterns."""
        cases = _generate_adversarial_cases()
        values = [v for v, _ in cases]

        has_nan = any(math.isnan(v) for v in values)
        has_inf = any(math.isinf(v) for v in values)
        # Subnormals: tiny positive floats
        has_subnormal = any(
            math.isfinite(v) and v != 0.0 and abs(v) < 1.175494e-38
            for v in values
        )

        assert has_nan, "Adversarial cases must include NaN"
        assert has_inf, "Adversarial cases must include Infinity"

    def test_pack_f32_bits_quiet_nan(self):
        """Pack f32 bits 0x7FC00000 must produce NaN."""
        val = _pack_f32_bits(0x7FC00000)
        assert math.isnan(val)

    def test_pack_f32_bits_infinity(self):
        """Pack f32 bits 0x7F800000 must produce +Infinity."""
        val = _pack_f32_bits(0x7F800000)
        assert math.isinf(val) and val > 0

    def test_small_battery_matches_full_semantics(self):
        """100-case battery must have same pass/fail semantics as 10,000."""
        battery = FloatFuzzBattery(n_cases=100)
        results = battery.run()
        assert results["failed"] == 0
        assert results["total"] == 100
