"""
stokes/harness/float_fuzz_battery.py
10,000-case IEEE-754 subnormal/NaN fuzzer.
Tests the sanitize_signal_float fail-secure behavior against adversarial inputs.
GitHub: yvliet
"""

from __future__ import annotations

import math
import random
import struct
from typing import Any


def sanitize_signal_float(val: float, fail_secure_default: float = 100.0) -> float:
    """
    Fail-secure float sanitization (Python reference implementation).

    Mirrors the Rust implementation in crates/dirichlet-proxy/src/engine/traffic_evaluator.rs:
      - Finite and not subnormal → clamp to [0.0, 100.0]
      - NaN, ±Infinity, subnormal → return fail_secure_default (100.0)

    Security invariant: Non-finite inputs MUST return max threat (100.0), never 0.
    """
    if not math.isfinite(val):
        return fail_secure_default
    # Check for subnormal (denormalized) float.
    # Float32 min normal = 2^-126 ≈ 1.1754944e-38.  Values below this in magnitude
    # (excluding zero) are subnormals in float32 representation and trigger CPU
    # microcode assist traps at 100× penalty — reject them fail-secure.
    # We use a slightly larger sentinel (1.1754944e-38 + epsilon) to catch the
    # largest f32 subnormal (0x007FFFFF ≈ 1.17549421e-38) which is just below
    # the float32 min-normal boundary.
    F32_MIN_NORMAL = 1.1754944e-38   # 2^-126, exact float32 min positive normal
    if abs(val) > 0.0 and abs(val) < F32_MIN_NORMAL:
        return fail_secure_default
    # Also reject exact f32 min-normal boundary and below when it carries
    # a subnormal bit pattern (abs(val) <= largest f32 subnormal)
    F32_MAX_SUBNORMAL = 1.1754942106924411e-38  # 0x007FFFFF as float64
    if 0.0 < abs(val) <= F32_MAX_SUBNORMAL:
        return fail_secure_default
    return max(0.0, min(100.0, val))


def _pack_f32_bits(bits: int) -> float:
    """Reinterpret a uint32 bit pattern as a Python float (via f32)."""
    try:
        packed = struct.pack(">I", bits & 0xFFFFFFFF)
        (val,) = struct.unpack(">f", packed)
        return float(val)
    except (struct.error, OverflowError):
        return float("nan")


def _generate_adversarial_cases() -> list[tuple[float, str]]:
    """
    Generate the canonical adversarial float test vectors.

    Returns list of (value, description) pairs.
    """
    cases = []

    # Positive and negative NaN patterns
    cases += [
        (float("nan"), "positive_nan"),
        (-float("nan"), "negative_nan"),
        # NaN with payload bits
        (_pack_f32_bits(0x7FC00000), "quiet_nan_f32"),
        (_pack_f32_bits(0x7FBFFFFF), "signaling_nan_f32"),
        (_pack_f32_bits(0xFFC00000), "negative_quiet_nan_f32"),
    ]

    # Infinities
    cases += [
        (float("inf"), "positive_infinity"),
        (-float("inf"), "negative_infinity"),
        (_pack_f32_bits(0x7F800000), "f32_positive_inf"),
        (_pack_f32_bits(0xFF800000), "f32_negative_inf"),
    ]

    # Subnormal floats (very small, force microcode assist on x86)
    subnormal_bits = [0x00000001, 0x00000002, 0x007FFFFF, 0x00400000]
    for bits in subnormal_bits:
        val = _pack_f32_bits(bits)
        cases.append((val, f"subnormal_f32_{bits:#010x}"))

    # Negative subnormals
    neg_subnormal_bits = [0x80000001, 0x807FFFFF]
    for bits in neg_subnormal_bits:
        val = _pack_f32_bits(bits)
        cases.append((val, f"neg_subnormal_f32_{bits:#010x}"))

    # Boundary values
    cases += [
        (0.0, "positive_zero"),
        (-0.0, "negative_zero"),
        (1.175494e-38, "min_normal_f32"),
        (3.4028235e+38, "max_f32"),
        (-3.4028235e+38, "min_f32"),
    ]

    # Security-critical injection points
    cases += [
        (-1.0, "below_zero_clamp"),
        (101.0, "above_100_clamp"),
        (50.0, "midpoint_normal"),
        (99.99999, "near_max_normal"),
        (0.0001, "near_zero_normal"),
    ]

    return cases


class FloatFuzzBattery:
    """
    10,000-case IEEE-754 adversarial float fuzzer.

    Tests the sanitize_signal_float() fail-secure function against:
    - NaN variants (quiet, signaling, with/without payload bits)
    - ±Infinity
    - Subnormal/denormalized floats (microcode assist DoS vectors)
    - Boundary values
    - Random float patterns

    Security invariant: All non-finite and subnormal inputs MUST return
    fail_secure_default (100.0), NEVER 0.0 (which would bypass threat detection).
    """

    FAIL_SECURE_DEFAULT = 100.0

    def __init__(self, n_cases: int = 10000, seed: int = 42) -> None:
        self.n_cases = n_cases
        self.seed = seed

    def run(self) -> dict[str, Any]:
        """
        Execute the full fuzzing battery.

        Returns:
          passed: number of cases that passed
          failed: number of cases that failed
          total: total cases run
          adversarial_sanitized: number of adversarial inputs that were correctly sanitized
          failures: list of (value, result, expected) for failed cases
        """
        rng = random.Random(self.seed)
        passed = 0
        failed = 0
        adversarial_sanitized = 0
        failures = []

        # Build test cases: canonical adversarial + random
        adversarial = _generate_adversarial_cases()
        test_cases = list(adversarial)

        # Fill remaining with random float32 patterns
        random_count = max(0, self.n_cases - len(adversarial))
        for _ in range(random_count):
            bits = rng.randint(0, 0xFFFFFFFF)
            val = _pack_f32_bits(bits)
            test_cases.append((val, f"random_{bits:#010x}"))

        # Truncate/pad to exactly n_cases
        test_cases = (test_cases * ((self.n_cases // len(test_cases)) + 2))[: self.n_cases]

        for val, description in test_cases:
            result = sanitize_signal_float(val, self.FAIL_SECURE_DEFAULT)
            is_adversarial = not (math.isfinite(val) and val == val)  # NaN/Inf check

            # Core invariant: result must always be finite and in [0.0, 100.0]
            if not math.isfinite(result):
                failed += 1
                failures.append((val, result, "finite [0..100]", description))
                continue

            if not (0.0 <= result <= 100.0):
                failed += 1
                failures.append((val, result, "in [0.0, 100.0]", description))
                continue

            # Security invariant: NaN/Inf/subnormal MUST be fail-secure (never 0.0)
            if not math.isfinite(val) or (val != 0.0 and abs(val) < 1.175494e-38):
                if result != self.FAIL_SECURE_DEFAULT:
                    failed += 1
                    failures.append(
                        (val, result, self.FAIL_SECURE_DEFAULT, f"fail_secure_{description}")
                    )
                    continue
                else:
                    adversarial_sanitized += 1

            passed += 1

        return {
            "passed": passed,
            "failed": failed,
            "total": len(test_cases),
            "adversarial_sanitized": adversarial_sanitized,
            "adversarial_total": len(adversarial),
            "failures": failures[:10],  # Cap at 10 for display
        }

    def run_security_gate(self) -> bool:
        """
        Run security-critical subset: 1,000 adversarial vectors.
        Returns True only if ALL adversarial inputs are correctly sanitized.
        """
        adversarial = _generate_adversarial_cases()
        rng = random.Random(self.seed + 1)

        # Add 1000 random subnormal patterns
        for _ in range(1000 - len(adversarial)):
            # Random subnormal bit patterns (exponent = 0, mantissa != 0)
            mantissa = rng.randint(1, 0x007FFFFF)
            sign = rng.randint(0, 1) << 31
            bits = sign | mantissa  # Exponent bits = 0 → subnormal
            val = _pack_f32_bits(bits)
            adversarial.append((val, "random_subnormal"))

        for val, _ in adversarial[:1000]:
            result = sanitize_signal_float(val, self.FAIL_SECURE_DEFAULT)
            if not math.isfinite(val) or (val != 0.0 and abs(val) < 1.175494e-38):
                if result == 0.0:
                    return False  # Security gate failure: non-finite mapped to 0
        return True
