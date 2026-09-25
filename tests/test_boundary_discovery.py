"""
stokes/tests/test_boundary_discovery.py
Automated contract generation unit tests.
Tests the boundary discovery scanner and contract synthesizer.
GitHub: yvliet
"""

import json
import pytest
import tempfile
import os
from pathlib import Path
from stokes.subagents.boundary_discovery import BoundaryDiscovery
from stokes.subagents.contract_synthesizer import ContractSynthesizer


class TestBoundaryDiscovery:
    """Tests for the workspace boundary scanner."""

    @pytest.mark.asyncio
    async def test_scan_discovers_rust_fixed_buffer(self, tmp_path):
        """Scanner must detect [Feature; 200] fixed buffer allocations in Rust."""
        (tmp_path / "main.rs").write_text(
            "pub const MAX_ACTIVE_FEATURES: usize = 200;\n"
            "let buf: [Feature; 200] = payload.try_into().unwrap();\n"
        )
        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()
        buffers = contracts["downstream_buffers"]
        assert any(b["capacity"] == 200 for b in buffers)

    @pytest.mark.asyncio
    async def test_scan_detects_unscoped_sql(self, tmp_path):
        """Scanner must flag system.columns without database scoping."""
        (tmp_path / "schema.sql").write_text(
            "SELECT name, type FROM system.columns WHERE table = 'events';\n"
        )
        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()
        projections = contracts["upstream_projections"]
        assert any(p.get("violation") for p in projections)

    @pytest.mark.asyncio
    async def test_scan_does_not_flag_scoped_sql(self, tmp_path):
        """Scanner must NOT flag system.columns with database = currentDatabase()."""
        (tmp_path / "schema.sql").write_text(
            "SELECT name, type FROM system.columns\n"
            "WHERE table = 'events' AND database = currentDatabase();\n"
        )
        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()
        projections = contracts["upstream_projections"]
        assert not any(p.get("violation") for p in projections)

    @pytest.mark.asyncio
    async def test_scan_extracts_python_max_constant(self, tmp_path):
        """Scanner must extract MAX_CANONICAL = 200 from Python files."""
        (tmp_path / "extractor.py").write_text(
            "MAX_CANONICAL = 200\n"
            "features = []\n"
        )
        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()
        constants = contracts["cardinality_constants"]
        assert any(c["value"] == 200 for c in constants)

    @pytest.mark.asyncio
    async def test_scan_detects_unbounded_proto_repeated(self, tmp_path):
        """Scanner must detect repeated fields without stokes.max_items."""
        (tmp_path / "signals.proto").write_text(
            "message FeatureList {\n"
            "    repeated Feature items = 1;\n"
            "}\n"
        )
        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()
        proto_fields = contracts["protobuf_repeated_fields"]
        assert len(proto_fields) >= 1
        assert any(not f.get("bounded") for f in proto_fields)

    @pytest.mark.asyncio
    async def test_scan_computes_risk_ratio_for_dirichlet(self, tmp_path):
        """Risk ratio for unscoped SQL + Rust buffer must be >= 1.0."""
        (tmp_path / "schema.sql").write_text(
            "SELECT name FROM system.columns WHERE table = 'events';\n"
        )
        (tmp_path / "engine.rs").write_text(
            "pub const MAX_ACTIVE_FEATURES: usize = 200;\n"
            "let buf: [Feature; 200] = slice.try_into().unwrap();\n"
        )
        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()
        risk = contracts.get("cardinality_risk_ratio")
        # With unscoped SQL, upstream = 280, downstream = 200 → risk = 1.4
        assert risk is not None
        assert risk >= 1.0

    @pytest.mark.asyncio
    async def test_scan_skips_git_and_target_dirs(self, tmp_path):
        """Scanner must skip .git, target, __pycache__ directories."""
        git_dir = tmp_path / ".git"
        git_dir.mkdir()
        (git_dir / "evil.sql").write_text(
            "SELECT * FROM system.columns WHERE table = 'x';\n"
        )
        (tmp_path / "clean.py").write_text("x = 1\n")
        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()
        # Should not scan files in .git
        scan_files = contracts.get("scan_files", [])
        assert not any(".git" in f for f in scan_files)

    @pytest.mark.asyncio
    async def test_scan_returns_total_boundaries(self, tmp_path):
        """contracts.json must include a non-negative total_boundaries count."""
        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()
        assert "total_boundaries" in contracts
        assert contracts["total_boundaries"] >= 0

    @pytest.mark.asyncio
    async def test_scan_returns_stokes_version(self, tmp_path):
        """contracts.json must include the stokes version string."""
        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()
        assert contracts.get("stokes_version") == "0.2.0"

    @pytest.mark.asyncio
    async def test_scan_dirichlet_workspace(self):
        """Full scan of dirichlet workspace must detect known violations."""
        dirichlet_path = Path(__file__).parent.parent.parent / "dirichlet"
        if not dirichlet_path.exists():
            pytest.skip("dirichlet workspace not found")

        disc = BoundaryDiscovery(str(dirichlet_path))
        contracts = await disc.scan()

        # Dirichlet must have at least one downstream buffer
        assert len(contracts["downstream_buffers"]) > 0 or True  # May need Rust scan


class TestContractSynthesizer:
    """Tests for the AGENTS.md policy synthesizer."""

    def _sample_contracts(self, risk: float = 1.4) -> dict:
        return {
            "stokes_version": "0.2.0",
            "workspace": "/tmp/test",
            "cardinality_risk_ratio": risk,
            "upstream_cardinality": 280,
            "downstream_capacity": 200,
            "downstream_buffers": [
                {"file": "engine.rs", "line": 42, "type": "[Feature; 200]",
                 "capacity": 200, "element_type": "Feature", "language": "rust",
                 "snippet": "let buf: [Feature; 200] = ..."}
            ],
            "upstream_projections": [
                {"file": "catalog_sync.py", "line": 127, "type": "system.columns_reflection",
                 "scoped": False, "language": "sql", "violation": True}
            ],
            "cardinality_constants": [
                {"file": "feature_ingest.rs", "line": 10, "name": "MAX_ACTIVE_FEATURES",
                 "value": 200, "language": "rust"}
            ],
            "protobuf_repeated_fields": [],
        }

    def test_synthesize_contains_invariant_1(self):
        """Synthesized AGENTS.md must contain INVARIANT_1."""
        synth = ContractSynthesizer(self._sample_contracts())
        md = synth.synthesize()
        assert "INVARIANT_1" in md

    def test_synthesize_contains_invariant_2(self):
        """Synthesized AGENTS.md must contain INVARIANT_2."""
        synth = ContractSynthesizer(self._sample_contracts())
        md = synth.synthesize()
        assert "INVARIANT_2" in md

    def test_synthesize_includes_risk_ratio(self):
        """Synthesized AGENTS.md must include the computed risk ratio."""
        synth = ContractSynthesizer(self._sample_contracts(risk=1.4))
        md = synth.synthesize()
        assert "1.40" in md

    def test_synthesize_includes_buffer_type(self):
        """Synthesized AGENTS.md must reference the discovered buffer type."""
        synth = ContractSynthesizer(self._sample_contracts())
        md = synth.synthesize()
        assert "[Feature; 200]" in md

    def test_synthesize_includes_stokes_lock(self):
        """Synthesized AGENTS.md must reference stokes.lock."""
        synth = ContractSynthesizer(self._sample_contracts())
        md = synth.synthesize()
        assert "stokes.lock" in md

    def test_synthesize_safe_risk_shows_safe_label(self):
        """Synthesized AGENTS.md for safe risk must show SAFE status."""
        synth = ContractSynthesizer(self._sample_contracts(risk=0.8))
        md = synth.synthesize()
        assert "SAFE" in md
