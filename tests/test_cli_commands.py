"""
stokes/tests/test_cli_commands.py
CLI subcommand tests: init, graph, verify (--format, --lockfile).
GitHub: yvliet
"""

from __future__ import annotations

import argparse
import asyncio
import json
import sys
import xml.etree.ElementTree as ET
from io import StringIO
from pathlib import Path

import pytest


# ─── Helpers ─────────────────────────────────────────────────────────────────

def _run(coro):
    """Run an async coroutine in a new event loop."""
    return asyncio.get_event_loop().run_until_complete(coro)


# ─── stokes init ─────────────────────────────────────────────────────────────

class TestCmdInit:
    """Tests for the `stokes init` subcommand."""

    @pytest.mark.asyncio
    async def test_cmd_init_scaffolding(self, tmp_path):
        """init must create .stokes/, contracts.json, stokes.yaml, AGENTS.md, stokes.lock."""
        from stokes.cli.main import cmd_init

        args = argparse.Namespace(path=str(tmp_path), force=False)
        rc = await cmd_init(args)

        assert rc == 0
        stokes_dir = tmp_path / ".stokes"
        assert stokes_dir.is_dir(), ".stokes/ directory must exist"

        contracts_path = stokes_dir / "contracts.json"
        assert contracts_path.exists(), ".stokes/contracts.json must exist"
        contracts = json.loads(contracts_path.read_text())
        assert "stokes_version" in contracts

        stokes_yaml = tmp_path / "stokes.yaml"
        assert stokes_yaml.exists(), "stokes.yaml must be created"
        yaml_content = stokes_yaml.read_text()
        assert "stokes_version" in yaml_content
        assert "0.2.0" in yaml_content

        agents_md = tmp_path / "AGENTS.md"
        assert agents_md.exists(), "AGENTS.md must be synthesized"
        assert len(agents_md.read_text()) > 0

        lock_path = stokes_dir / "stokes.lock"
        assert lock_path.exists(), ".stokes/stokes.lock must be generated"
        lock_data = json.loads(lock_path.read_text())
        assert "stokes_version" in lock_data

    @pytest.mark.asyncio
    async def test_cmd_init_without_force_preserves_existing(self, tmp_path):
        """init without --force must not overwrite existing .stokes/ directory."""
        from stokes.cli.main import cmd_init

        # First init
        args = argparse.Namespace(path=str(tmp_path), force=False)
        rc_first = await cmd_init(args)
        assert rc_first == 0

        # Write a sentinel value into contracts.json
        contracts_path = tmp_path / ".stokes" / "contracts.json"
        sentinel = {"_sentinel": "do_not_overwrite", "stokes_version": "0.2.0"}
        contracts_path.write_text(json.dumps(sentinel), encoding="utf-8")

        # Second init without --force should bail out
        args2 = argparse.Namespace(path=str(tmp_path), force=False)
        rc_second = await cmd_init(args2)
        assert rc_second == 0

        # Sentinel must still be present
        after = json.loads(contracts_path.read_text())
        assert after.get("_sentinel") == "do_not_overwrite", (
            "--force guard failed: contracts.json was overwritten"
        )

    @pytest.mark.asyncio
    async def test_cmd_init_force_overwrites(self, tmp_path):
        """init with --force must overwrite existing .stokes/ contents."""
        from stokes.cli.main import cmd_init

        # First init
        args = argparse.Namespace(path=str(tmp_path), force=False)
        await cmd_init(args)

        # Second init with --force
        args_force = argparse.Namespace(path=str(tmp_path), force=True)
        rc = await cmd_init(args_force)
        assert rc == 0

        # contracts.json must be a valid discovery result (not our sentinel)
        contracts_path = tmp_path / ".stokes" / "contracts.json"
        data = json.loads(contracts_path.read_text())
        assert data.get("stokes_version") == "0.2.0"

    @pytest.mark.asyncio
    async def test_cmd_init_stokes_yaml_contains_target(self, tmp_path):
        """Generated stokes.yaml must contain the workspace target name."""
        from stokes.cli.main import cmd_init

        args = argparse.Namespace(path=str(tmp_path), force=False)
        await cmd_init(args)

        yaml_path = tmp_path / "stokes.yaml"
        content = yaml_path.read_text()
        target_name = tmp_path.name
        assert target_name in content, (
            f"stokes.yaml must contain target name '{target_name}'"
        )


# ─── stokes graph ─────────────────────────────────────────────────────────────

class TestCmdGraph:
    """Tests for the `stokes graph` subcommand."""

    @pytest.mark.asyncio
    async def test_cmd_graph_dot_format(self, tmp_path, capsys):
        """graph --format=dot must emit valid Graphviz DOT syntax."""
        from stokes.cli.main import cmd_graph

        args = argparse.Namespace(path=str(tmp_path), format="dot", output=None)
        rc = await cmd_graph(args)
        assert rc == 0

        captured = capsys.readouterr()
        dot_output = captured.out
        assert "digraph StokesBoundaryGraph" in dot_output, (
            "DOT output must contain 'digraph StokesBoundaryGraph'"
        )
        assert "rankdir=LR" in dot_output, "DOT output must contain 'rankdir=LR'"
        assert dot_output.strip().endswith("}"), "DOT output must end with closing brace"

    @pytest.mark.asyncio
    async def test_cmd_graph_json_format(self, tmp_path, capsys):
        """graph --format=json must emit valid JSON with 'nodes' and 'edges' keys."""
        from stokes.cli.main import cmd_graph

        args = argparse.Namespace(path=str(tmp_path), format="json", output=None)
        rc = await cmd_graph(args)
        assert rc == 0

        captured = capsys.readouterr()
        data = json.loads(captured.out)
        assert "nodes" in data, "JSON output must contain 'nodes' key"
        assert "edges" in data, "JSON output must contain 'edges' key"
        assert isinstance(data["nodes"], list)
        assert isinstance(data["edges"], list)

    @pytest.mark.asyncio
    async def test_cmd_graph_json_node_schema(self, tmp_path, capsys):
        """graph --format=json nodes must include id, label, type, capacity fields."""
        from stokes.cli.main import cmd_graph

        args = argparse.Namespace(path=str(tmp_path), format="json", output=None)
        await cmd_graph(args)

        captured = capsys.readouterr()
        data = json.loads(captured.out)
        for node in data["nodes"]:
            assert "id" in node
            assert "label" in node
            assert "type" in node
            assert "capacity" in node

    @pytest.mark.asyncio
    async def test_cmd_graph_json_edge_schema(self, tmp_path, capsys):
        """graph --format=json edges must include source, target, channel fields."""
        from stokes.cli.main import cmd_graph

        # Provide a workspace with actual boundaries to generate edges
        (tmp_path / "schema.sql").write_text(
            "SELECT name FROM system.columns WHERE table = 'events';\n"
        )
        (tmp_path / "engine.rs").write_text(
            "pub const MAX_ACTIVE_FEATURES: usize = 200;\n"
            "let buf: [Feature; 200] = slice.try_into().unwrap();\n"
        )
        args = argparse.Namespace(path=str(tmp_path), format="json", output=None)
        await cmd_graph(args)

        captured = capsys.readouterr()
        data = json.loads(captured.out)
        for edge in data["edges"]:
            assert "source" in edge
            assert "target" in edge
            assert "channel" in edge

    @pytest.mark.asyncio
    async def test_cmd_graph_output_to_file(self, tmp_path, capsys):
        """graph --output must write to the specified file."""
        from stokes.cli.main import cmd_graph

        out_file = tmp_path / "graph.dot"
        args = argparse.Namespace(path=str(tmp_path), format="dot", output=str(out_file))
        rc = await cmd_graph(args)
        assert rc == 0
        assert out_file.exists(), "Output file must be created"
        content = out_file.read_text()
        assert "digraph StokesBoundaryGraph" in content

    @pytest.mark.asyncio
    async def test_cmd_graph_svg_fallback_no_dot_binary(self, tmp_path, capsys, monkeypatch):
        """graph --format=svg without 'dot' binary must fall back to DOT output on stdout."""
        import shutil as _shutil
        from stokes.cli.main import cmd_graph

        # Patch shutil.which to simulate no 'dot' binary
        monkeypatch.setattr(_shutil, "which", lambda _: None)

        args = argparse.Namespace(path=str(tmp_path), format="svg", output=None)
        rc = await cmd_graph(args)
        assert rc == 0
        captured = capsys.readouterr()
        assert "digraph StokesBoundaryGraph" in captured.out


# ─── stokes verify --format ──────────────────────────────────────────────────

class TestCmdVerifyFormat:
    """Tests for the `stokes verify --format` and `--lockfile` flags."""

    @pytest.mark.asyncio
    async def test_cmd_verify_format_json(self, tmp_path, capsys):
        """verify --format=json must emit a valid JSON object with expected keys."""
        from stokes.cli.main import cmd_verify

        args = argparse.Namespace(
            path=str(tmp_path),
            format="json",
            lockfile=None,
            strict=False,
            consumer=None,
            producer=None,
        )
        rc = await cmd_verify(args)
        assert rc == 0

        captured = capsys.readouterr()
        data = json.loads(captured.out)

        assert "status" in data
        assert data["status"] in ("PASSED", "FAILED")
        assert "target" in data
        assert "timestamp" in data
        assert "lockfile_verified" in data
        assert "fuzz_tests" in data
        assert "passed" in data["fuzz_tests"]
        assert "total" in data["fuzz_tests"]
        assert "benchmarks" in data
        assert "inplace_ns" in data["benchmarks"]
        assert "heap_ns" in data["benchmarks"]
        assert "speedup" in data["benchmarks"]
        assert "violations_count" in data

    @pytest.mark.asyncio
    async def test_cmd_verify_format_junit(self, tmp_path, capsys):
        """verify --format=junit must emit valid XML with <testsuites> root element."""
        from stokes.cli.main import cmd_verify

        args = argparse.Namespace(
            path=str(tmp_path),
            format="junit",
            lockfile=None,
            strict=False,
            consumer=None,
            producer=None,
        )
        rc = await cmd_verify(args)
        assert rc == 0

        captured = capsys.readouterr()
        xml_text = captured.out

        # Must be parseable XML
        root = ET.fromstring(xml_text)
        assert root.tag == "testsuites", "Root element must be <testsuites>"
        assert root.get("name") == "stokes-verification"

        suites = list(root)
        assert len(suites) == 3, "Must have exactly 3 <testsuite> elements"
        suite_names = {s.get("name") for s in suites}
        assert "boundary-contracts" in suite_names
        assert "fuzz-battery" in suite_names
        assert "lockfile-integrity" in suite_names

    @pytest.mark.asyncio
    async def test_cmd_verify_with_lockfile_matching(self, tmp_path, capsys):
        """verify --lockfile must pass when lockfile digest matches current schema."""
        from stokes.cli.main import cmd_verify, cmd_cert

        # Generate a lockfile from the workspace
        lock_path = tmp_path / "stokes.lock"
        await cmd_cert(argparse.Namespace(path=str(tmp_path), output=str(lock_path)))
        capsys.readouterr()  # flush cert output

        # Now verify against it - should pass (digests match)
        args = argparse.Namespace(
            path=str(tmp_path),
            format="json",
            lockfile=str(lock_path),
            strict=False,
            consumer=None,
            producer=None,
        )
        rc = await cmd_verify(args)
        captured = capsys.readouterr()
        data = json.loads(captured.out)

        assert data["lockfile_verified"] is True
        assert rc == 0

    @pytest.mark.asyncio
    async def test_cmd_verify_with_lockfile_drift(self, tmp_path, capsys):
        """verify --lockfile must detect drift when a schema file is modified after lockfile was generated."""
        from stokes.cli.main import cmd_verify, cmd_cert
        from stokes.subagents.contract_synthesizer import compute_normalized_schema_digest

        # Create a schema file and generate lockfile
        schema_file = tmp_path / "schema.sql"
        schema_file.write_text(
            "CREATE TABLE events (id UInt64, name String);\n"
        )

        lock_path = tmp_path / "stokes.lock"
        await cmd_cert(argparse.Namespace(path=str(tmp_path), output=str(lock_path)))
        capsys.readouterr()

        # Tamper with the lockfile digest to simulate drift
        lock_data = json.loads(lock_path.read_text())
        schema_digests = lock_data.get("schema_digests", {})
        # Find the schema file key and corrupt its digest
        for k in list(schema_digests.keys()):
            if k.endswith(".sql"):
                schema_digests[k] = "sha256:" + "0" * 64
                break
        else:
            # No SQL file was picked up; inject a fake one
            schema_digests["schema.sql"] = "sha256:" + "0" * 64

        lock_data["schema_digests"] = schema_digests
        lock_path.write_text(json.dumps(lock_data, indent=2))

        # Verify should detect the mismatch
        args = argparse.Namespace(
            path=str(tmp_path),
            format="json",
            lockfile=str(lock_path),
            strict=False,
            consumer=None,
            producer=None,
        )
        rc = await cmd_verify(args)
        captured = capsys.readouterr()
        data = json.loads(captured.out)

        assert data["lockfile_verified"] is False, (
            "lockfile_verified must be False when digest is tampered"
        )
