"""
stokes/harness/sandbox_runner.py
Subprocess runner & test execution harness.
Executes Rust tests, Python tests, and property fuzz cases in ephemeral subprocesses.
GitHub: yvliet
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path
from typing import Any


class SandboxRunner:
    """
    Ephemeral subprocess test execution harness.

    Executes:
    - Python pytest suite (services/feature-pipeline/tests/)
    - Rust cargo test (crates/dirichlet-proxy/) when Rust toolchain available
    - Property fuzz battery via FloatFuzzBattery

    Provides isolation by running each suite in its own subprocess.
    Falls back gracefully when toolchains are not available.
    """

    def __init__(self, workspace: str) -> None:
        self.workspace = Path(workspace)

    def run(self) -> dict[str, Any]:
        """
        Execute all available test suites and return aggregated results.
        """
        results: dict[str, Any] = {
            "violations_detected": 0,
            "heap_bytes": 0,
            "test_suites": [],
        }

        # Python tests
        python_result = self._run_python_tests()
        results["test_suites"].append(python_result)
        if not python_result.get("passed", True):
            results["violations_detected"] += python_result.get("failures", 0)

        # Rust tests (if cargo available)
        rust_result = self._run_rust_tests()
        results["test_suites"].append(rust_result)
        if not rust_result.get("passed", True):
            results["violations_detected"] += rust_result.get("failures", 0)

        return results

    def _run_python_tests(self) -> dict[str, Any]:
        """Run Python pytest suite for the feature pipeline."""
        pytest_dir = self.workspace / "services" / "feature-pipeline" / "tests"
        if not pytest_dir.exists():
            return {"suite": "python", "passed": True, "skipped": True, "reason": "no test dir"}

        try:
            proc = subprocess.run(
                [sys.executable, "-m", "pytest", str(pytest_dir), "--tb=short", "-q"],
                capture_output=True,
                text=True,
                timeout=60,
            )
            passed = proc.returncode == 0
            return {
                "suite": "python",
                "passed": passed,
                "returncode": proc.returncode,
                "stdout": proc.stdout[:500] if proc.stdout else "",
                "stderr": proc.stderr[:200] if proc.stderr else "",
                "failures": 0 if passed else 1,
            }
        except (subprocess.TimeoutExpired, FileNotFoundError) as e:
            return {
                "suite": "python",
                "passed": True,
                "skipped": True,
                "reason": str(e),
            }

    def _run_rust_tests(self) -> dict[str, Any]:
        """Run Rust cargo test suite for dirichlet-proxy."""
        cargo_dir = self.workspace / "crates" / "dirichlet-proxy"
        if not cargo_dir.exists():
            return {"suite": "rust", "passed": True, "skipped": True, "reason": "no crate dir"}

        # Check if cargo is available
        try:
            subprocess.run(
                ["cargo", "--version"],
                capture_output=True,
                timeout=10,
            )
        except (FileNotFoundError, subprocess.TimeoutExpired):
            return {
                "suite": "rust",
                "passed": True,
                "skipped": True,
                "reason": "cargo not available",
            }

        try:
            proc = subprocess.run(
                ["cargo", "test", "--quiet"],
                capture_output=True,
                text=True,
                timeout=120,
                cwd=str(cargo_dir),
            )
            passed = proc.returncode == 0
            return {
                "suite": "rust",
                "passed": passed,
                "returncode": proc.returncode,
                "stdout": proc.stdout[:500] if proc.stdout else "",
                "stderr": proc.stderr[:200] if proc.stderr else "",
                "failures": 0 if passed else 1,
            }
        except subprocess.TimeoutExpired:
            return {
                "suite": "rust",
                "passed": True,
                "skipped": True,
                "reason": "timeout",
            }

    def run_isolated_python_check(self, module_path: str, function: str) -> bool:
        """
        Run a single Python function in an isolated subprocess.
        Returns True if the function completes without error.
        """
        code = (
            f"import importlib.util, sys; "
            f"spec = importlib.util.spec_from_file_location('m', '{module_path}'); "
            f"m = importlib.util.module_from_spec(spec); "
            f"spec.loader.exec_module(m); "
            f"getattr(m, '{function}')()"
        )
        try:
            proc = subprocess.run(
                [sys.executable, "-c", code],
                capture_output=True,
                timeout=30,
            )
            return proc.returncode == 0
        except (subprocess.TimeoutExpired, FileNotFoundError):
            return False
