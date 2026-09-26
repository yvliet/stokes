"""
stokes/cli/agent_bridge.py
Pluggable Agent Bridge & Provider Registry for Stokes.
Enables cross-boundary invariant remediation across Claude Code, IBM Bob 2.0,
Aider, Goose, OpenHands, custom CLI scripts, and unified patch export.
GitHub: yvliet
"""

from __future__ import annotations

import os
import shutil
import subprocess
import sys
import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from stokes.cli.color_palette import (
    RESET, BOLD, DIM, FG_EMERALD, FG_AMBER, FG_CRIMSON, FG_CYAN, FG_WHITE,
    BG_EMERALD, BG_AMBER, BG_CRIMSON, BG_CYAN, BG_GRAY,
)


@dataclass
class AgentStatus:
    """Status record of a specific coding agent provider."""
    name: str
    display_name: str
    is_installed: bool = False
    version: str | None = None
    cli_path: str | None = None
    is_authenticated: bool = False
    auth_info: str | None = None
    gate_passed: bool = False
    reasons: list[str] = field(default_factory=list)

    def to_dict(self) -> dict[str, Any]:
        return {
            "name": self.name,
            "display_name": self.display_name,
            "is_installed": self.is_installed,
            "version": self.version,
            "cli_path": self.cli_path,
            "is_authenticated": self.is_authenticated,
            "auth_info": self.auth_info,
            "gate_passed": self.gate_passed,
            "reasons": self.reasons,
        }


@dataclass
class AgentDispatchResult:
    """Outcome of dispatching an invariant task to an agent."""
    success: bool
    agent_name: str
    exit_code: int
    stdout: str
    stderr: str
    error_message: str | None = None
    patch_path: str | None = None
    telemetry: dict[str, Any] = field(default_factory=dict)


def _find_binary(name: str) -> str | None:
    """Locate binary in PATH or Windows npm global bin."""
    resolved = shutil.which(name)
    if resolved:
        return resolved

    if sys.platform == "win32":
        cmd_name = f"{name}.cmd"
        resolved_cmd = shutil.which(cmd_name)
        if resolved_cmd:
            return resolved_cmd

        appdata = os.environ.get("APPDATA", "")
        if appdata:
            candidate = Path(appdata) / "npm" / cmd_name
            if candidate.is_file():
                return str(candidate)

    return None


def _probe_version(executable_path: str, flag: str = "--version", timeout: int = 5) -> str | None:
    """Safely probe version output of an executable."""
    try:
        proc = subprocess.run(
            [executable_path, flag],
            stdin=subprocess.DEVNULL,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=timeout,
            check=False,
        )
        if proc.returncode == 0 and proc.stdout.strip():
            lines = proc.stdout.strip().splitlines()
            return lines[0].strip()
    except (subprocess.TimeoutExpired, OSError):
        pass
    return None


# ─── Agent Providers ─────────────────────────────────────────────────────────

class BaseAgentProvider:
    """Abstract base class for coding agent providers."""
    id: str = "base"
    display_name: str = "Base Agent"

    def evaluate(self) -> AgentStatus:
        raise NotImplementedError

    def dispatch(
        self,
        workspace_path: str,
        prompt: str,
        diff_patch: str = "",
        timeout_seconds: int = 90,
    ) -> AgentDispatchResult:
        raise NotImplementedError


class ClaudeAgentProvider(BaseAgentProvider):
    """Claude Code CLI agent provider."""
    id: str = "claude"
    display_name: str = "Claude Code"

    def evaluate(self) -> AgentStatus:
        status = AgentStatus(name=self.id, display_name=self.display_name)
        exe = _find_binary("claude")
        if exe:
            status.is_installed = True
            status.cli_path = exe
            status.version = _probe_version(exe)

        api_key = os.environ.get("ANTHROPIC_API_KEY", "").strip()
        claude_config = Path.home() / ".claude" / "config.json"

        if api_key:
            status.is_authenticated = True
            status.auth_info = f"Environment Variable (ANTHROPIC_API_KEY: ...{api_key[-4:]})"
        elif claude_config.is_file():
            status.is_authenticated = True
            status.auth_info = "Local Claude Config (~/.claude/config.json)"

        if not status.is_installed:
            status.reasons.append("Claude Code CLI executable ('claude') not found in PATH")
        elif not status.is_authenticated:
            status.reasons.append("Neither ANTHROPIC_API_KEY nor ~/.claude config detected")
        else:
            status.gate_passed = True

        return status

    def dispatch(
        self,
        workspace_path: str,
        prompt: str,
        diff_patch: str = "",
        timeout_seconds: int = 90,
    ) -> AgentDispatchResult:
        exe = _find_binary("claude")
        if not exe:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message="Claude Code CLI executable not found",
            )

        cmd = [exe, "-p", prompt]
        try:
            proc = subprocess.run(
                cmd,
                cwd=workspace_path,
                capture_output=True,
                text=True,
                encoding="utf-8",
                errors="replace",
                timeout=timeout_seconds,
                check=False,
            )
            return AgentDispatchResult(
                success=(proc.returncode == 0),
                agent_name=self.id,
                exit_code=proc.returncode,
                stdout=proc.stdout,
                stderr=proc.stderr,
                error_message=None if proc.returncode == 0 else f"Process exited with code {proc.returncode}",
            )
        except subprocess.TimeoutExpired:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message=f"Claude Code dispatch timed out after {timeout_seconds} seconds",
            )
        except Exception as exc:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message=str(exc),
            )


class BobAgentProvider(BaseAgentProvider):
    """IBM Bob 2.0 CLI agent provider."""
    id: str = "bob"
    display_name: str = "IBM Bob 2.0"

    def evaluate(self) -> AgentStatus:
        from stokes.cli.bob_gate import evaluate_bob_gate
        bg = evaluate_bob_gate()
        return AgentStatus(
            name=self.id,
            display_name=self.display_name,
            is_installed=bg.is_installed,
            version=bg.version,
            cli_path=bg.cli_path,
            is_authenticated=bg.is_authenticated,
            auth_info=bg.auth_db_path,
            gate_passed=bg.gate_passed,
            reasons=bg.reasons,
        )

    def dispatch(
        self,
        workspace_path: str,
        prompt: str,
        diff_patch: str = "",
        timeout_seconds: int = 90,
    ) -> AgentDispatchResult:
        from stokes.cli.bob_gate import dispatch_bob_remediation
        res = dispatch_bob_remediation(workspace_path, prompt, timeout_seconds=timeout_seconds)
        return AgentDispatchResult(
            success=res.success,
            agent_name=self.id,
            exit_code=res.exit_code,
            stdout=res.stdout,
            stderr=res.stderr,
            error_message=res.error_message,
        )


class AiderAgentProvider(BaseAgentProvider):
    """Aider command-line coding agent provider."""
    id: str = "aider"
    display_name: str = "Aider"

    def evaluate(self) -> AgentStatus:
        status = AgentStatus(name=self.id, display_name=self.display_name)
        exe = _find_binary("aider")
        if exe:
            status.is_installed = True
            status.cli_path = exe
            status.version = _probe_version(exe)

        keys = ["OPENAI_API_KEY", "ANTHROPIC_API_KEY", "GEMINI_API_KEY", "DEEPSEEK_API_KEY"]
        found_key = next((k for k in keys if os.environ.get(k, "").strip()), None)
        if found_key:
            status.is_authenticated = True
            status.auth_info = f"Environment Variable ({found_key})"

        if not status.is_installed:
            status.reasons.append("Aider CLI executable ('aider') not found in PATH")
        elif not status.is_authenticated:
            status.reasons.append("No supported model API key found in environment for Aider")
        else:
            status.gate_passed = True

        return status

    def dispatch(
        self,
        workspace_path: str,
        prompt: str,
        diff_patch: str = "",
        timeout_seconds: int = 90,
    ) -> AgentDispatchResult:
        exe = _find_binary("aider")
        if not exe:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message="Aider CLI executable not found",
            )

        cmd = [exe, "--message", prompt, "--yes", "--no-git"]
        try:
            proc = subprocess.run(
                cmd,
                cwd=workspace_path,
                capture_output=True,
                text=True,
                encoding="utf-8",
                errors="replace",
                timeout=timeout_seconds,
                check=False,
            )
            return AgentDispatchResult(
                success=(proc.returncode == 0),
                agent_name=self.id,
                exit_code=proc.returncode,
                stdout=proc.stdout,
                stderr=proc.stderr,
                error_message=None if proc.returncode == 0 else f"Process exited with code {proc.returncode}",
            )
        except Exception as exc:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message=str(exc),
            )


class GooseAgentProvider(BaseAgentProvider):
    """Goose open-source AI agent provider."""
    id: str = "goose"
    display_name: str = "Goose"

    def evaluate(self) -> AgentStatus:
        status = AgentStatus(name=self.id, display_name=self.display_name)
        exe = _find_binary("goose")
        if exe:
            status.is_installed = True
            status.cli_path = exe
            status.version = _probe_version(exe)
            status.is_authenticated = True
            status.gate_passed = True
        else:
            status.reasons.append("Goose CLI executable ('goose') not found in PATH")

        return status

    def dispatch(
        self,
        workspace_path: str,
        prompt: str,
        diff_patch: str = "",
        timeout_seconds: int = 90,
    ) -> AgentDispatchResult:
        exe = _find_binary("goose")
        if not exe:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message="Goose CLI executable not found",
            )

        cmd = [exe, "run", "--text", prompt]
        try:
            proc = subprocess.run(
                cmd,
                cwd=workspace_path,
                capture_output=True,
                text=True,
                encoding="utf-8",
                errors="replace",
                timeout=timeout_seconds,
                check=False,
            )
            return AgentDispatchResult(
                success=(proc.returncode == 0),
                agent_name=self.id,
                exit_code=proc.returncode,
                stdout=proc.stdout,
                stderr=proc.stderr,
                error_message=None if proc.returncode == 0 else f"Process exited with code {proc.returncode}",
            )
        except Exception as exc:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message=str(exc),
            )


class OpenHandsAgentProvider(BaseAgentProvider):
    """OpenHands agent provider."""
    id: str = "openhands"
    display_name: str = "OpenHands"

    def evaluate(self) -> AgentStatus:
        status = AgentStatus(name=self.id, display_name=self.display_name)
        exe = _find_binary("openhands")
        if exe:
            status.is_installed = True
            status.cli_path = exe
            status.version = _probe_version(exe)
            status.is_authenticated = True
            status.gate_passed = True
        else:
            status.reasons.append("OpenHands CLI executable not found in PATH")
        return status

    def dispatch(
        self,
        workspace_path: str,
        prompt: str,
        diff_patch: str = "",
        timeout_seconds: int = 90,
    ) -> AgentDispatchResult:
        exe = _find_binary("openhands")
        if not exe:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message="OpenHands CLI executable not found",
            )
        try:
            proc = subprocess.run(
                [exe, "--prompt", prompt],
                cwd=workspace_path,
                capture_output=True,
                text=True,
                timeout=timeout_seconds,
                check=False,
            )
            return AgentDispatchResult(
                success=(proc.returncode == 0),
                agent_name=self.id,
                exit_code=proc.returncode,
                stdout=proc.stdout,
                stderr=proc.stderr,
            )
        except Exception as exc:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message=str(exc),
            )


class GenericCliProvider(BaseAgentProvider):
    """Arbitrary CLI agent provider configured via custom command string."""
    id: str = "generic"
    display_name: str = "Generic CLI Agent"

    def __init__(self, command_template: str | None = None) -> None:
        self.command_template = command_template or os.environ.get("STOKES_AGENT_CMD", "")

    def evaluate(self) -> AgentStatus:
        status = AgentStatus(name=self.id, display_name=self.display_name)
        if self.command_template.strip():
            status.is_installed = True
            status.is_authenticated = True
            status.gate_passed = True
            status.auth_info = f"Command: {self.command_template}"
        else:
            status.reasons.append("No custom command specified (--agent-cmd or STOKES_AGENT_CMD)")
        return status

    def dispatch(
        self,
        workspace_path: str,
        prompt: str,
        diff_patch: str = "",
        timeout_seconds: int = 90,
    ) -> AgentDispatchResult:
        if not self.command_template.strip():
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message="No command template specified for Generic CLI agent",
            )

        patch_file = Path(workspace_path) / ".stokes" / "remediation.patch"
        cmd_str = self.command_template.format(
            workspace=workspace_path,
            prompt=prompt,
            patch=str(patch_file),
        )

        try:
            proc = subprocess.run(
                cmd_str,
                shell=True,
                cwd=workspace_path,
                capture_output=True,
                text=True,
                timeout=timeout_seconds,
                check=False,
            )
            return AgentDispatchResult(
                success=(proc.returncode == 0),
                agent_name=self.id,
                exit_code=proc.returncode,
                stdout=proc.stdout,
                stderr=proc.stderr,
                error_message=None if proc.returncode == 0 else f"Process exited with code {proc.returncode}",
            )
        except Exception as exc:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message=str(exc),
            )


class PatchExportProvider(BaseAgentProvider):
    """Standalone Unified Diff / Patch exporter requiring zero installed agents."""
    id: str = "patch"
    display_name: str = "Unified Diff Exporter"

    def evaluate(self) -> AgentStatus:
        return AgentStatus(
            name=self.id,
            display_name=self.display_name,
            is_installed=True,
            is_authenticated=True,
            gate_passed=True,
            auth_info="Direct File Emission (.stokes/remediation.patch)",
        )

    def dispatch(
        self,
        workspace_path: str,
        prompt: str,
        diff_patch: str = "",
        timeout_seconds: int = 90,
    ) -> AgentDispatchResult:
        stokes_dir = Path(workspace_path) / ".stokes"
        stokes_dir.mkdir(parents=True, exist_ok=True)
        patch_path = stokes_dir / "remediation.patch"

        try:
            patch_content = diff_patch.strip()
            if not patch_content:
                patch_content = (
                    "# Stokes Invariant Remediation Patch\n"
                    f"# Generated for workspace: {workspace_path}\n"
                    f"# Diagnostic Task: {prompt}\n"
                )
            patch_path.write_text(patch_content + "\n", encoding="utf-8")

            return AgentDispatchResult(
                success=True,
                agent_name=self.id,
                exit_code=0,
                stdout=f"Remediation patch written to: {patch_path}",
                stderr="",
                patch_path=str(patch_path),
            )
        except Exception as exc:
            return AgentDispatchResult(
                success=False,
                agent_name=self.id,
                exit_code=-1,
                stdout="",
                stderr="",
                error_message=f"Failed to write patch: {exc}",
            )


# ─── Agent Registry ─────────────────────────────────────────────────────────

class AgentRegistry:
    """Registry managing available coding agent providers."""

    def __init__(self) -> None:
        self._providers: dict[str, BaseAgentProvider] = {
            "claude": ClaudeAgentProvider(),
            "bob": BobAgentProvider(),
            "aider": AiderAgentProvider(),
            "goose": GooseAgentProvider(),
            "openhands": OpenHandsAgentProvider(),
            "generic": GenericCliProvider(),
            "patch": PatchExportProvider(),
        }

    def register(self, provider: BaseAgentProvider) -> None:
        """Register a new custom agent provider."""
        self._providers[provider.id] = provider

    def get(self, name: str, command_template: str | None = None) -> BaseAgentProvider:
        """Lookup provider by name."""
        key = name.lower().strip()
        if key == "generic" and command_template:
            return GenericCliProvider(command_template=command_template)
        if key in self._providers:
            return self._providers[key]
        raise ValueError(
            f"Unknown agent provider '{name}'. Supported: {', '.join(self._providers.keys())}"
        )

    def detect_all(self) -> list[AgentStatus]:
        """Evaluate and return statuses for all registered providers."""
        statuses = []
        for provider in self._providers.values():
            try:
                statuses.append(provider.evaluate())
            except Exception as exc:
                statuses.append(AgentStatus(
                    name=provider.id,
                    display_name=provider.display_name,
                    reasons=[f"Evaluation error: {exc}"],
                ))
        return statuses

    def auto_detect(self) -> BaseAgentProvider:
        """
        Auto-detect the best available coding agent.
        Prefers authenticated interactive agents, falling back to patch export.
        """
        priority_order = ["claude", "bob", "aider", "goose", "openhands"]
        for agent_id in priority_order:
            provider = self._providers[agent_id]
            try:
                status = provider.evaluate()
                if status.gate_passed:
                    return provider
            except Exception:
                continue

        # Default fallback to patch exporter
        return self._providers["patch"]


# Global default registry instance
default_registry = AgentRegistry()


def print_agent_registry_card(statuses: list[AgentStatus]) -> None:
    """Print an ANSI overview card showing all detected agent providers."""
    print(f"  {BG_GRAY} AGENTS {RESET} {BOLD}Stokes Universal Coding Agent Registry{RESET}")
    print(f"  {DIM}  {'Provider':<18} {'Status':<14} {'Version / Path':<28} {'Auth'}{RESET}")
    print(f"  {DIM}  {'-' * 70}{RESET}")

    for st in statuses:
        if st.gate_passed:
            badge = f"{FG_EMERALD}AVAILABLE{RESET}"
        elif st.is_installed:
            badge = f"{FG_AMBER}NO AUTH  {RESET}"
        else:
            badge = f"{DIM}NOT FOUND{RESET}"

        ver = st.version or (st.cli_path if st.cli_path else "-")
        if len(ver) > 26:
            ver = ver[:23] + "..."

        auth = st.auth_info or (st.reasons[0] if st.reasons else "-")
        if len(auth) > 28:
            auth = auth[:25] + "..."

        print(f"    {st.display_name:<18} {badge:<23} {ver:<28} {auth}")
    print()
