"""
stokes/harness/criterion_runner.py
Criterion benchmark parser & comparator.
Reads Criterion JSON output from dirichlet target/criterion/ directory.
GitHub: yvliet
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any


# ─── Reference Benchmarks (from Dirichlet target/criterion/) ─────────────────

# These are the authoritative measured values from the Dirichlet Criterion suite.
# In-place select_nth_unstable_by: 7.66 ns (vs 29.74 ns heap Vec::sort)
REFERENCE_INPLACE_NS = 7.66
REFERENCE_HEAP_NS = 29.74

# Acceptable regression budget: +10% over reference
REGRESSION_THRESHOLD = 1.10


class CriterionRunner:
    """
    Criterion benchmark parser and comparator.

    Reads Criterion benchmark JSON output from the dirichlet Rust crate's
    target/criterion/ directory and extracts:
    - in_place_select_nth latency (ns)
    - heap_allocated_vec latency (ns)
    - speedup ratio

    Falls back to reference values (7.66 ns / 29.74 ns) when Criterion
    output files are not present (offline / CI without Rust toolchain).
    """

    CRITERION_PATH_CANDIDATES = [
        "crates/dirichlet-proxy/target/criterion/feature_ingestion",
        "target/criterion/feature_ingestion",
        "../dirichlet/crates/dirichlet-proxy/target/criterion/feature_ingestion",
    ]

    def __init__(self, workspace: str) -> None:
        self.workspace = Path(workspace)

    def run(self) -> dict[str, Any]:
        """
        Parse Criterion results and return benchmark metrics.

        Returns:
          inplace_ns: float - in-place select_nth latency in nanoseconds
          heap_ns: float - heap sort latency in nanoseconds
          speedup: float - heap_ns / inplace_ns ratio
          source: str - "criterion" | "reference"
          regression: bool - True if inplace_ns > REFERENCE * threshold
        """
        inplace_ns = self._parse_criterion_bench("in_place_select_nth")
        heap_ns = self._parse_criterion_bench("heap_allocated_vec")

        if inplace_ns is None:
            inplace_ns = REFERENCE_INPLACE_NS
            source = "reference"
        else:
            source = "criterion"

        if heap_ns is None:
            heap_ns = REFERENCE_HEAP_NS

        speedup = heap_ns / max(inplace_ns, 0.001)
        regression = inplace_ns > REFERENCE_INPLACE_NS * REGRESSION_THRESHOLD

        return {
            "inplace_ns": inplace_ns,
            "heap_ns": heap_ns,
            "speedup": speedup,
            "source": source,
            "regression": regression,
            "regression_threshold_ns": REFERENCE_INPLACE_NS * REGRESSION_THRESHOLD,
            "reference_inplace_ns": REFERENCE_INPLACE_NS,
            "reference_heap_ns": REFERENCE_HEAP_NS,
        }

    def _parse_criterion_bench(self, bench_name: str) -> float | None:
        """
        Attempt to parse a Criterion estimate from the JSON output file.

        Criterion stores results in:
          target/criterion/<group>/<bench_name>/new/estimates.json

        The 'median' estimate point_estimate is in nanoseconds.
        """
        for candidate in self.CRITERION_PATH_CANDIDATES:
            base = self.workspace / candidate
            estimates_path = base / bench_name / "new" / "estimates.json"
            if estimates_path.exists():
                try:
                    data = json.loads(estimates_path.read_text())
                    median = data.get("median", {}).get("point_estimate")
                    if median is not None:
                        return float(median)
                except (json.JSONDecodeError, KeyError, TypeError):
                    continue

            # Also try the "base" subdirectory
            estimates_path = base / bench_name / "base" / "estimates.json"
            if estimates_path.exists():
                try:
                    data = json.loads(estimates_path.read_text())
                    median = data.get("median", {}).get("point_estimate")
                    if median is not None:
                        return float(median)
                except (json.JSONDecodeError, KeyError, TypeError):
                    continue

        return None

    def compare_against_reference(self, measured_ns: float) -> dict[str, Any]:
        """
        Compare a measured latency against the reference benchmark.

        Returns pass/fail with margin analysis.
        """
        ratio = measured_ns / REFERENCE_INPLACE_NS
        passed = ratio <= REGRESSION_THRESHOLD
        return {
            "measured_ns": measured_ns,
            "reference_ns": REFERENCE_INPLACE_NS,
            "ratio": ratio,
            "passed": passed,
            "margin_pct": (REGRESSION_THRESHOLD - ratio) * 100,
        }
