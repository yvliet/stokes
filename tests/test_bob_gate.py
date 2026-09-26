"""
tests/test_bob_gate.py
Unit tests for the IBM Bob 2.0 preflight authentication gate and dispatcher.
GitHub: yvliet
"""

from __future__ import annotations

import subprocess
from unittest.mock import MagicMock, patch

import pytest

from stokes.cli.bob_gate import (
    BobDispatchResult,
    BobGateStatus,
    check_bob_auth,
    dispatch_bob_remediation,
    evaluate_bob_gate,
    find_bob_executable,
    get_bob_version,
    print_bob_gate_card,
)


class TestBobGateDiscovery:
    def test_status_dataclass_defaults(self):
        status = BobGateStatus()
        assert status.is_installed is False
        assert status.version is None
        assert status.cli_path is None
        assert status.is_authenticated is False
        assert status.gate_passed is False
        assert isinstance(status.reasons, list)

    def test_status_to_dict(self):
        status = BobGateStatus(
            is_installed=True,
            version="2.0.5",
            cli_path="/usr/local/bin/bob",
            is_authenticated=True,
            gate_passed=True,
        )
        d = status.to_dict()
        assert d["is_installed"] is True
        assert d["version"] == "2.0.5"
        assert d["cli_path"] == "/usr/local/bin/bob"
        assert d["gate_passed"] is True

    @patch("shutil.which")
    def test_find_bob_executable_in_path(self, mock_which):
        mock_which.return_value = "/bin/bob"
        assert find_bob_executable() == "/bin/bob"

    @patch("shutil.which")
    def test_find_bob_executable_missing(self, mock_which):
        mock_which.return_value = None
        with patch.dict("os.environ", {"APPDATA": ""}):
            assert find_bob_executable() is None

    @patch("subprocess.run")
    def test_get_bob_version_success(self, mock_run):
        mock_proc = MagicMock()
        mock_proc.returncode = 0
        mock_proc.stdout = "2.0.5\ncommit: abc123\n"
        mock_run.return_value = mock_proc

        assert get_bob_version("/fake/bob") == "2.0.5"

    @patch("subprocess.run")
    def test_get_bob_version_failure_returns_none(self, mock_run):
        mock_run.side_effect = subprocess.TimeoutExpired(cmd=["bob"], timeout=3)
        assert get_bob_version("/fake/bob") is None


class TestBobGateAuth:
    def test_check_bob_auth_with_env_key(self, monkeypatch):
        monkeypatch.setenv("BOB_API_KEY", "test-token-123")
        authed, path = check_bob_auth()
        assert authed is True
        assert "API Key" in (path or "")

    def test_check_bob_auth_with_watsonx_key(self, monkeypatch):
        monkeypatch.delenv("BOB_API_KEY", raising=False)
        monkeypatch.setenv("WATSONX_API_KEY", "watsonx-token-456")
        authed, path = check_bob_auth()
        assert authed is True

    def test_check_bob_auth_missing_everything(self, monkeypatch, tmp_path):
        monkeypatch.delenv("BOB_API_KEY", raising=False)
        monkeypatch.delenv("IBM_CLOUD_API_KEY", raising=False)
        monkeypatch.delenv("WATSONX_API_KEY", raising=False)

        with patch("pathlib.Path.home", return_value=tmp_path):
            authed, path = check_bob_auth()
            assert authed is False
            assert path is None


class TestBobGateEvaluation:
    @patch("stokes.cli.bob_gate.find_bob_executable")
    def test_evaluate_bob_gate_not_installed(self, mock_find):
        mock_find.return_value = None
        status = evaluate_bob_gate()
        assert status.is_installed is False
        assert status.gate_passed is False
        assert any("not found" in r for r in status.reasons)

    @patch("stokes.cli.bob_gate.find_bob_executable")
    @patch("stokes.cli.bob_gate.get_bob_version")
    @patch("stokes.cli.bob_gate.check_bob_auth")
    def test_evaluate_bob_gate_unauthenticated(self, mock_auth, mock_version, mock_find):
        mock_find.return_value = "/bin/bob"
        mock_version.return_value = "2.0.5"
        mock_auth.return_value = (False, None)

        status = evaluate_bob_gate()
        assert status.is_installed is True
        assert status.is_authenticated is False
        assert status.gate_passed is False
        assert any("session or API credentials" in r for r in status.reasons)

    @patch("stokes.cli.bob_gate.find_bob_executable")
    @patch("stokes.cli.bob_gate.get_bob_version")
    @patch("stokes.cli.bob_gate.check_bob_auth")
    def test_evaluate_bob_gate_passed(self, mock_auth, mock_version, mock_find):
        mock_find.return_value = "/bin/bob"
        mock_version.return_value = "2.0.5"
        mock_auth.return_value = (True, "/home/user/.bob/db/bob.db")

        status = evaluate_bob_gate()
        assert status.is_installed is True
        assert status.is_authenticated is True
        assert status.gate_passed is True
        assert len(status.reasons) == 0


class TestBobDispatcher:
    @patch("stokes.cli.bob_gate.find_bob_executable")
    def test_dispatch_when_executable_missing(self, mock_find):
        mock_find.return_value = None
        res = dispatch_bob_remediation(".", "remediate")
        assert res.success is False
        assert res.exit_code == 127
        assert "not found" in res.stderr

    @patch("stokes.cli.bob_gate.find_bob_executable")
    @patch("subprocess.run")
    def test_dispatch_success(self, mock_run, mock_find):
        mock_find.return_value = "/bin/bob"
        mock_proc = MagicMock()
        mock_proc.returncode = 0
        mock_proc.stdout = "Task completed by Bob"
        mock_proc.stderr = ""
        mock_run.return_value = mock_proc

        res = dispatch_bob_remediation(".", "Fix Invariant 1", timeout_seconds=10)
        assert res.success is True
        assert res.exit_code == 0
        assert "Task completed" in res.stdout

    @patch("stokes.cli.bob_gate.find_bob_executable")
    @patch("subprocess.run")
    def test_dispatch_timeout(self, mock_run, mock_find):
        mock_find.return_value = "/bin/bob"
        mock_run.side_effect = subprocess.TimeoutExpired(cmd=["bob"], timeout=5)

        res = dispatch_bob_remediation(".", "Fix Invariant 1", timeout_seconds=5)
        assert res.success is False
        assert res.exit_code == 124
        assert "timed out" in res.stderr


class TestBobGateCardPrinting:
    def test_print_card_passed_does_not_crash(self, capsys):
        status = BobGateStatus(
            is_installed=True,
            version="2.0.5",
            cli_path="/bin/bob",
            is_authenticated=True,
            auth_db_path="~/.bob/db/bob.db",
            gate_passed=True,
        )
        print_bob_gate_card(status)
        captured = capsys.readouterr().out
        assert "BOB GATE: PASSED" in captured

    def test_print_card_missing_does_not_crash(self, capsys):
        status = BobGateStatus(is_installed=False, reasons=["Not found in PATH"])
        print_bob_gate_card(status)
        captured = capsys.readouterr().out
        assert "BOB GATE: MISSING" in captured

    def test_print_card_auth_required_does_not_crash(self, capsys):
        status = BobGateStatus(
            is_installed=True,
            version="2.0.5",
            cli_path="/bin/bob",
            is_authenticated=False,
            gate_passed=False,
            reasons=["Auth required"],
        )
        print_bob_gate_card(status)
        captured = capsys.readouterr().out
        assert "BOB GATE: AUTH REQUIRED" in captured
