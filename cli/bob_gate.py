"""
stokes/cli/bob_gate.py
Preflight Authentication & Availability Gate for IBM Bob 2.0 CLI.
Dispatches autonomous remediation tasks to IBM Bob when authenticated.
GitHub: yvliet
"""

from __future__ import annotations

import os
import shutil
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from stokes.cli.color_palette import (
    RESET, BOLD, DIM, FG_EMERALD, FG_AMBER, FG_CRIMSON, FG_CYAN, FG_WHITE,
    BG_EMERALD, BG_AMBER, BG_CRIMSON, BG_CYAN, BG_GRAY,
)


@dataclass
class BobGateStatus:
    """Status record of the IBM Bob 2.0 environment gate."""
    is_installed: bool = False
    version: str | None = None
    cli_path: str | None = None
    is_authenticated: bool = False
    auth_db_path: str | None = None
    gate_passed: bool = False
    reasons: list[str] = field(default_factory=list)

    def to_dict(self) -> dict[str, Any]:
        return {
            "is_installed": self.is_installed,
            "version": self.version,
            "cli_path": self.cli_path,
            "is_authenticated": self.is_authenticated,
            "auth_db_path": self.auth_db_path,
            "gate_passed": self.gate_passed,
            "reasons": self.reasons,
        }


@dataclass
class BobDispatchResult:
    """Outcome of dispatching an invariant task to Bob."""
    success: bool
    exit_code: int
    stdout: str
    stderr: str
    error_message: str | None = None


def find_bob_executable() -> str | None:
    """Locate the IBM Bob CLI executable in PATH or standard install paths."""
    resolved = shutil.which("bob")
    if resolved:
        return resolved

    if sys.platform == "win32":
        resolved_cmd = shutil.which("bob.cmd")
        if resolved_cmd:
            return resolved_cmd

        appdata = os.environ.get("APPDATA", "")
        if appdata:
            candidate = Path(appdata) / "npm" / "bob.cmd"
            if candidate.is_file():
                return str(candidate)

    return None


def get_bob_version(executable_path: str) -> str | None:
    """Probe Bob CLI version via --version with a fast timeout."""
    try:
        env = os.environ.copy()
        env.pop("BOB_SESSION", None)
        proc = subprocess.run(
            [executable_path, "--version"],
            stdin=subprocess.DEVNULL,
            capture_output=True,
            text=True,
            timeout=5,
            env=env,
            check=False,
        )
        if proc.returncode == 0 and proc.stdout.strip():
            lines = proc.stdout.strip().splitlines()
            return lines[0].strip()
    except (subprocess.TimeoutExpired, OSError):
        pass
    return None


def check_bob_auth() -> tuple[bool, str | None]:
    """
    Check if IBM Bob 2.0 session tokens or databases exist.
    Inspects user profile directory for active session state.
    Headless execution ('bob run') strictly requires an API key in environment.
    """
    if os.environ.get("BOB_API_KEY"):
        return True, "API Key (BOB_API_KEY environment variable active)"
    if os.environ.get("IBM_CLOUD_API_KEY"):
        return True, "API Key (IBM_CLOUD_API_KEY environment variable active)"
    if os.environ.get("WATSONX_API_KEY"):
        return True, "API Key (WATSONX_API_KEY environment variable active)"

    # Check for Bob local session database or settings
    user_home = Path.home()
    bob_db = user_home / ".bob" / "db" / "bob.db"
    bob_settings = user_home / ".bob" / "settings" / "settings.json"
    if (bob_db.is_file() and bob_db.stat().st_size > 0) or bob_settings.is_file():
        return False, "Local session found (~/.bob/db), but headless execution requires BOB_API_KEY"

    return False, None


def evaluate_bob_gate() -> BobGateStatus:
    """
    Run preflight verification gate for IBM Bob 2.0.
    Returns structured status indicating readiness.
    """
    status = BobGateStatus()

    # Step 1: Binary discovery
    exe = find_bob_executable()
    if not exe:
        status.is_installed = False
        status.reasons.append("IBM Bob CLI ('bob') not found in PATH or standard global paths.")
        return status

    status.is_installed = True
    status.cli_path = exe
    status.version = get_bob_version(exe) or "2.0.x"

    # Step 2: Authentication check
    authed, auth_path = check_bob_auth()
    status.is_authenticated = authed
    status.auth_db_path = auth_path

    if not authed:
        if auth_path:
            status.reasons.append(auth_path)
        else:
            status.reasons.append(
                "No active IBM Bob session or API credentials found in environment or ~/.bob/db."
            )
        status.gate_passed = False
        return status

    status.gate_passed = True
    return status


def print_bob_gate_card(status: BobGateStatus) -> None:
    """Render terminal status card for the Bob Preflight Gate."""
    if status.gate_passed:
        print(f"  {BG_EMERALD} BOB GATE: PASSED {RESET} {BOLD}IBM Bob 2.0 CLI Verified{RESET}")
        print(f"  {DIM}binary:{RESET}  {status.cli_path} ({FG_EMERALD}v{status.version}{RESET})")
        print(f"  {DIM}session:{RESET} {FG_EMERALD}Active{RESET} (verified via {status.auth_db_path})")
        print(f"  {DIM}status:{RESET}  Autonomous multi-agent synthesis authorized.")
        print()
    elif not status.is_installed:
        print(f"  {BG_CRIMSON} BOB GATE: MISSING {RESET} {BOLD}IBM Bob 2.0 CLI Not Detected{RESET}")
        print(f"  {DIM}reason:{RESET}  {status.reasons[0] if status.reasons else 'Command not found'}")
        print()
        print(f"  {BOLD}To install IBM Bob Shell globally:{RESET}")
        print(f"    {FG_CYAN}npm install -g bobshell{RESET}")
        print()
        print(f"  {DIM}fallback:{RESET} Continuing with deterministic Stokes static analysis.")
        print()
    else:
        print(f"  {BG_AMBER} BOB GATE: AUTH REQUIRED {RESET} {BOLD}IBM Bob API Key Required{RESET}")
        print(f"  {DIM}binary:{RESET}  {status.cli_path} (v{status.version})")
        print(f"  {DIM}reason:{RESET}  {status.reasons[0] if status.reasons else 'Authentication required'}")
        print()
        print(f"  {BOLD}To authorize headless IBM Bob 2.0 execution:{RESET}")
        print(f"    Set environment variable: {FG_CYAN}export BOB_API_KEY=<your-key>{RESET}")
        print(f"    Or in PowerShell:          {FG_CYAN}$env:BOB_API_KEY = \"<your-key>\"{RESET}")
        print()
        print(f"  {DIM}fallback:{RESET} Proceeding with local deterministic unified diffs.")
        print()


def dispatch_bob_remediation(
    workspace_path: str,
    prompt: str,
    timeout_seconds: int = 45,
) -> BobDispatchResult:
    """
    Dispatch autonomous task to IBM Bob CLI via headless execution.
    Executes 'bob run --accept-license --trust -w <workspace> <prompt>'.
    """
    exe = find_bob_executable()
    if not exe:
        return BobDispatchResult(
            success=False,
            exit_code=127,
            stdout="",
            stderr="IBM Bob CLI ('bob') not found",
            error_message="Executable missing",
        )

    env = os.environ.copy()
    env.pop("BOB_SESSION", None)

    cmd = [
        exe,
        "run",
        "--accept-license",
        "--trust",
        "-w",
        str(Path(workspace_path).resolve()),
        prompt,
    ]

    try:
        proc = subprocess.run(
            cmd,
            stdin=subprocess.DEVNULL,
            capture_output=True,
            text=True,
            timeout=timeout_seconds,
            env=env,
            check=False,
        )
        return BobDispatchResult(
            success=(proc.returncode == 0),
            exit_code=proc.returncode,
            stdout=proc.stdout,
            stderr=proc.stderr,
            error_message=None if proc.returncode == 0 else f"Process exited with code {proc.returncode}",
        )
    except subprocess.TimeoutExpired:
        return BobDispatchResult(
            success=False,
            exit_code=124,
            stdout="",
            stderr=f"Bob task timed out after {timeout_seconds} seconds",
            error_message="Execution timeout",
        )
    except OSError as e:
        return BobDispatchResult(
            success=False,
            exit_code=1,
            stdout="",
            stderr=str(e),
            error_message=str(e),
        )
