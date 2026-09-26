"""
tests/test_agent_bridge.py
Unit tests for Stokes pluggable coding agent bridge and provider registry.
GitHub: yvliet
"""

from __future__ import annotations

import subprocess
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

from stokes.cli.agent_bridge import (
    AgentDispatchResult,
    AgentRegistry,
    AgentStatus,
    AiderAgentProvider,
    BaseAgentProvider,
    BobAgentProvider,
    ClaudeAgentProvider,
    GenericCliProvider,
    GooseAgentProvider,
    OpenHandsAgentProvider,
    PatchExportProvider,
    default_registry,
)


class TestAgentStatusAndResult:
    def test_agent_status_defaults(self):
        st = AgentStatus(name="test", display_name="Test Agent")
        assert st.name == "test"
        assert st.display_name == "Test Agent"
        assert st.is_installed is False
        assert st.is_authenticated is False
        assert st.gate_passed is False
        d = st.to_dict()
        assert d["name"] == "test"
        assert d["gate_passed"] is False

    def test_agent_dispatch_result(self):
        res = AgentDispatchResult(
            success=True,
            agent_name="claude",
            exit_code=0,
            stdout="Completed",
            stderr="",
        )
        assert res.success is True
        assert res.agent_name == "claude"
        assert res.exit_code == 0


class TestClaudeAgentProvider:
    @patch("shutil.which")
    def test_claude_not_installed(self, mock_which):
        mock_which.return_value = None
        provider = ClaudeAgentProvider()
        status = provider.evaluate()
        assert status.is_installed is False
        assert status.gate_passed is False

    @patch("shutil.which")
    @patch("subprocess.run")
    def test_claude_installed_and_authed_via_env(self, mock_run, mock_which, monkeypatch):
        mock_which.return_value = "/bin/claude"
        mock_proc = MagicMock()
        mock_proc.returncode = 0
        mock_proc.stdout = "1.0.0\n"
        mock_run.return_value = mock_proc

        monkeypatch.setenv("ANTHROPIC_API_KEY", "sk-ant-test1234")
        provider = ClaudeAgentProvider()
        status = provider.evaluate()
        assert status.is_installed is True
        assert status.is_authenticated is True
        assert status.gate_passed is True

    @patch("shutil.which")
    @patch("subprocess.run")
    def test_claude_dispatch_success(self, mock_run, mock_which, tmp_path):
        mock_which.return_value = "/bin/claude"
        mock_proc = MagicMock()
        mock_proc.returncode = 0
        mock_proc.stdout = "Applied remediation fix"
        mock_proc.stderr = ""
        mock_run.return_value = mock_proc

        provider = ClaudeAgentProvider()
        result = provider.dispatch(str(tmp_path), "Fix invariant drift")
        assert result.success is True
        assert "Applied remediation" in result.stdout


class TestAiderAgentProvider:
    @patch("shutil.which")
    def test_aider_not_installed(self, mock_which):
        mock_which.return_value = None
        provider = AiderAgentProvider()
        status = provider.evaluate()
        assert status.is_installed is False

    @patch("shutil.which")
    @patch("subprocess.run")
    def test_aider_installed_with_api_key(self, mock_run, mock_which, monkeypatch):
        mock_which.return_value = "/bin/aider"
        mock_proc = MagicMock()
        mock_proc.returncode = 0
        mock_proc.stdout = "aider 0.50.0\n"
        mock_run.return_value = mock_proc

        monkeypatch.setenv("OPENAI_API_KEY", "test-key")
        provider = AiderAgentProvider()
        status = provider.evaluate()
        assert status.is_installed is True
        assert status.is_authenticated is True
        assert status.gate_passed is True


class TestGooseAndOpenHandsProviders:
    @patch("shutil.which")
    @patch("subprocess.run")
    def test_goose_installed(self, mock_run, mock_which):
        mock_which.return_value = "/bin/goose"
        mock_proc = MagicMock()
        mock_proc.returncode = 0
        mock_proc.stdout = "goose 0.8.0\n"
        mock_run.return_value = mock_proc

        provider = GooseAgentProvider()
        status = provider.evaluate()
        assert status.is_installed is True
        assert status.gate_passed is True

    @patch("shutil.which")
    def test_openhands_not_installed(self, mock_which):
        mock_which.return_value = None
        provider = OpenHandsAgentProvider()
        status = provider.evaluate()
        assert status.is_installed is False


class TestGenericCliProvider:
    def test_generic_cli_empty_command(self):
        provider = GenericCliProvider(command_template="")
        status = provider.evaluate()
        assert status.gate_passed is False

    @patch("subprocess.run")
    def test_generic_cli_dispatch(self, mock_run, tmp_path):
        mock_proc = MagicMock()
        mock_proc.returncode = 0
        mock_proc.stdout = "Custom command executed"
        mock_proc.stderr = ""
        mock_run.return_value = mock_proc

        provider = GenericCliProvider(command_template="echo '{prompt}'")
        res = provider.dispatch(str(tmp_path), "Test Task")
        assert res.success is True
        assert "Custom command executed" in res.stdout


class TestPatchExportProvider:
    def test_patch_export_always_ready(self):
        provider = PatchExportProvider()
        status = provider.evaluate()
        assert status.is_installed is True
        assert status.gate_passed is True

    def test_patch_export_writes_file(self, tmp_path):
        provider = PatchExportProvider()
        diff = "--- a/file.rs\n+++ b/file.rs\n@@ -1 +1 @@\n-old\n+new\n"
        res = provider.dispatch(str(tmp_path), "Fix test", diff_patch=diff)
        assert res.success is True
        assert res.patch_path is not None
        patch_file = Path(res.patch_path)
        assert patch_file.is_file()
        content = patch_file.read_text(encoding="utf-8")
        assert "--- a/file.rs" in content


class TestAgentRegistry:
    def test_registry_has_core_providers(self):
        reg = AgentRegistry()
        for name in ["claude", "bob", "aider", "goose", "openhands", "generic", "patch"]:
            provider = reg.get(name)
            assert provider.id == name

    def test_registry_unknown_raises(self):
        reg = AgentRegistry()
        with pytest.raises(ValueError, match="Unknown agent provider"):
            reg.get("nonexistent")

    def test_auto_detect_falls_back_to_patch(self):
        reg = AgentRegistry()
        with patch.object(ClaudeAgentProvider, "evaluate", return_value=AgentStatus("claude", "Claude", gate_passed=False)), \
             patch.object(BobAgentProvider, "evaluate", return_value=AgentStatus("bob", "Bob", gate_passed=False)), \
             patch.object(AiderAgentProvider, "evaluate", return_value=AgentStatus("aider", "Aider", gate_passed=False)), \
             patch.object(GooseAgentProvider, "evaluate", return_value=AgentStatus("goose", "Goose", gate_passed=False)), \
             patch.object(OpenHandsAgentProvider, "evaluate", return_value=AgentStatus("openhands", "OpenHands", gate_passed=False)):
            provider = reg.auto_detect()
            assert provider.id == "patch"

    def test_detect_all_returns_all_statuses(self):
        reg = AgentRegistry()
        statuses = reg.detect_all()
        assert len(statuses) >= 7
        names = {s.name for s in statuses}
        assert "claude" in names
        assert "bob" in names
        assert "patch" in names
