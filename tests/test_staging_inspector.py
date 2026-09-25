"""
stokes/tests/test_staging_inspector.py
Ephemeral DB catalog reflection tests.
Tests the staging inspector against mock Dirichlet catalogs.
GitHub: yvliet
"""

import pytest
from stokes.subagents.staging_inspector import (
    StagingInspector,
    DIRICHLET_CANONICAL_COLUMNS,
    DIRICHLET_SHARD_R0,
    DIRICHLET_SHARD_R1,
)


class TestStagingInspectorMock:
    """Tests for the mock staging catalog inspector."""

    @pytest.mark.asyncio
    async def test_mock_dirichlet_returns_280_unscoped(self):
        """Unscoped mock catalog must return 280 columns (200 + 80 shard duplicates)."""
        inspector = StagingInspector("mock://dirichlet")
        result = await inspector.inspect()
        assert result["upstream_cardinality"] == 280
        assert result["total_columns"] == 280

    @pytest.mark.asyncio
    async def test_mock_dirichlet_clean_returns_200(self):
        """Clean/scoped mock catalog must return exactly 200 canonical columns."""
        inspector = StagingInspector("mock://dirichlet-clean")
        result = await inspector.inspect()
        assert result["upstream_cardinality"] == 200
        assert result["total_columns"] == 200

    @pytest.mark.asyncio
    async def test_mock_risk_ratio_fatal_for_dirichlet(self):
        """Unscoped Dirichlet mock must produce risk ratio = 280/200 = 1.40."""
        inspector = StagingInspector("mock://dirichlet")
        result = await inspector.inspect()
        risk = result["cardinality_risk_ratio"]
        assert abs(risk - 1.40) < 0.01

    @pytest.mark.asyncio
    async def test_mock_risk_ratio_safe_for_clean(self):
        """Clean Dirichlet mock must produce risk ratio = 1.0 (safe)."""
        inspector = StagingInspector("mock://dirichlet-clean")
        result = await inspector.inspect()
        risk = result["cardinality_risk_ratio"]
        assert risk == 1.0

    @pytest.mark.asyncio
    async def test_unscoped_produces_violations(self):
        """Unscoped mock must generate at least one LINT-001 violation."""
        inspector = StagingInspector("mock://dirichlet")
        result = await inspector.inspect()
        violations = result["violations"]
        assert len(violations) >= 1
        assert violations[0]["lint_rule"] == "LINT-001"
        assert violations[0]["invariant_id"] == "INVARIANT_2_CATALOG_QUALIFICATION"

    @pytest.mark.asyncio
    async def test_clean_produces_no_violations(self):
        """Clean/scoped mock must produce zero violations."""
        inspector = StagingInspector("mock://dirichlet-clean")
        result = await inspector.inspect()
        assert result["violations"] == []

    @pytest.mark.asyncio
    async def test_shadow_columns_counted_correctly(self):
        """Shadow shard columns must be detected and counted."""
        inspector = StagingInspector("mock://dirichlet")
        result = await inspector.inspect()
        assert result["shadow_columns"] == 80  # 40 (r0) + 40 (r1)

    @pytest.mark.asyncio
    async def test_result_has_required_fields(self):
        """Inspection result must contain all required fields."""
        inspector = StagingInspector("mock://dirichlet")
        result = await inspector.inspect()
        required = [
            "url", "upstream_cardinality", "downstream_capacity",
            "cardinality_risk_ratio", "query_scoped", "violations",
            "total_columns", "shadow_columns",
        ]
        for field in required:
            assert field in result, f"Missing field: {field}"

    @pytest.mark.asyncio
    async def test_downstream_capacity_is_200(self):
        """Downstream capacity constant must be 200 per spec."""
        inspector = StagingInspector("mock://dirichlet")
        result = await inspector.inspect()
        assert result["downstream_capacity"] == 200

    @pytest.mark.asyncio
    async def test_violation_has_synthesized_remediation(self):
        """Violations must include synthesized unified diff remediation."""
        inspector = StagingInspector("mock://dirichlet")
        result = await inspector.inspect()
        if result["violations"]:
            v = result["violations"][0]
            assert "synthesized_remediation" in v
            assert "unified_diff" in v["synthesized_remediation"]
            diff = v["synthesized_remediation"]["unified_diff"]
            assert "currentDatabase" in diff

    @pytest.mark.asyncio
    async def test_unknown_scheme_falls_back_to_mock(self):
        """Unknown URL scheme must fall back to mock behavior."""
        inspector = StagingInspector("unknown://something")
        result = await inspector.inspect()
        assert "upstream_cardinality" in result
        assert result["downstream_capacity"] == 200

    @pytest.mark.asyncio
    async def test_violation_risk_ratio_in_diagnostic(self):
        """Violation diagnostics must include the cardinality risk ratio."""
        inspector = StagingInspector("mock://dirichlet")
        result = await inspector.inspect()
        violations = result["violations"]
        if violations:
            v = violations[0]
            assert "cardinality_risk_ratio" in v
            assert v["cardinality_risk_ratio"] > 1.0


class TestStagingInspectorMockData:
    """Tests for the mock catalog data integrity."""

    def test_canonical_columns_count_is_200(self):
        """Canonical feature list must have exactly 200 entries."""
        assert len(DIRICHLET_CANONICAL_COLUMNS) == 200

    def test_shard_r0_count_is_40(self):
        """Shard r0 must have exactly 40 duplicate columns."""
        assert len(DIRICHLET_SHARD_R0) == 40

    def test_shard_r1_count_is_40(self):
        """Shard r1 must have exactly 40 duplicate columns."""
        assert len(DIRICHLET_SHARD_R1) == 40

    def test_total_unscoped_is_280(self):
        """Total unscoped columns must equal 280 (200 + 40 + 40)."""
        total = len(DIRICHLET_CANONICAL_COLUMNS) + len(DIRICHLET_SHARD_R0) + len(DIRICHLET_SHARD_R1)
        assert total == 280

    def test_canonical_columns_have_required_fields(self):
        """Canonical columns must have database, table, name, type, priority."""
        for col in DIRICHLET_CANONICAL_COLUMNS[:5]:
            assert "database" in col
            assert "table" in col
            assert "name" in col
            assert "type" in col
            assert "priority" in col

    def test_shard_columns_are_shadow(self):
        """Shard columns must be marked as is_shadow=True."""
        for col in DIRICHLET_SHARD_R0:
            assert col.get("is_shadow") is True
        for col in DIRICHLET_SHARD_R1:
            assert col.get("is_shadow") is True

    def test_shard_columns_have_priority_zero(self):
        """Shadow shard columns must have priority=0."""
        for col in DIRICHLET_SHARD_R0 + DIRICHLET_SHARD_R1:
            assert col.get("priority") == 0
