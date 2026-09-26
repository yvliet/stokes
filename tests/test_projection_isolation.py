"""
tests/test_projection_isolation.py
Unit tests verifying Projection Consumption Isolation, boundary serialization sink bounding,
and cross-boundary contract invariant synthesis.
Author: Yuliet Li (yvliet)
"""

from pathlib import Path
import pytest

from stokes.subagents.boundary_discovery import BoundaryDiscovery
from stokes.subagents.contract_synthesizer import (
    compute_normalized_schema_digest,
    ContractSynthesizer,
)


class TestProjectionConsumptionIsolation:
    """Verifies that internal upstream schema additions never trigger contract lockout on consumers."""

    def test_internal_column_addition_does_not_alter_consumer_digest(self, tmp_path: Path):
        """
        If a table has an internal reporting column added, downstream consumers selecting
        explicit projection columns see zero change in their contract digest.
        """
        sql_before = """
        CREATE TABLE bot_signals (
            feature_id UInt32,
            weight Float32,
            updated_at DateTime
        ) ENGINE = MergeTree() ORDER BY feature_id;
        """

        sql_after_internal_addition = """
        CREATE TABLE bot_signals (
            feature_id UInt32,
            weight Float32,
            updated_at DateTime,
            -- Internal reporting columns added by data team
            internal_dashboard_score Float64,
            experiment_bucket_id String,
            debug_node_ip IPv4
        ) ENGINE = MergeTree() ORDER BY feature_id;
        """

        consumed = {"bot_signals": ["feature_id", "weight", "updated_at"]}

        file_before = tmp_path / "before.sql"
        file_before.write_text(sql_before, encoding="utf-8")

        file_after = tmp_path / "after.sql"
        file_after.write_text(sql_after_internal_addition, encoding="utf-8")

        digest_before = compute_normalized_schema_digest(file_before, consumed_projections=consumed)
        digest_after = compute_normalized_schema_digest(file_after, consumed_projections=consumed)

        assert digest_before == digest_after, "Adding internal non-consumed columns must not alter consumer contract digest"

    def test_modifying_consumed_column_alters_digest(self, tmp_path: Path):
        """If a consumed column definition changes, the digest MUST change."""
        sql_v1 = """
        CREATE TABLE bot_signals (
            feature_id UInt32,
            weight Float32
        ) ENGINE = MergeTree() ORDER BY feature_id;
        """

        sql_v2_type_change = """
        CREATE TABLE bot_signals (
            feature_id UInt64, -- changed from UInt32 to UInt64
            weight Float32
        ) ENGINE = MergeTree() ORDER BY feature_id;
        """

        consumed = {"bot_signals": ["feature_id", "weight"]}

        f1 = tmp_path / "v1.sql"
        f1.write_text(sql_v1, encoding="utf-8")

        f2 = tmp_path / "v2.sql"
        f2.write_text(sql_v2_type_change, encoding="utf-8")

        d1 = compute_normalized_schema_digest(f1, consumed_projections=consumed)
        d2 = compute_normalized_schema_digest(f2, consumed_projections=consumed)

        assert d1 != d2, "Type alteration of consumed column must alter contract digest"

    def test_dropping_consumed_column_alters_digest(self, tmp_path: Path):
        """If a consumed column is dropped, the digest MUST change."""
        sql_v1 = """
        CREATE TABLE bot_signals (
            feature_id UInt32,
            weight Float32
        ) ENGINE = MergeTree() ORDER BY feature_id;
        """

        sql_v2_dropped = """
        CREATE TABLE bot_signals (
            feature_id UInt32
        ) ENGINE = MergeTree() ORDER BY feature_id;
        """

        consumed = {"bot_signals": ["feature_id", "weight"]}

        f1 = tmp_path / "v1.sql"
        f1.write_text(sql_v1, encoding="utf-8")

        f2 = tmp_path / "v2.sql"
        f2.write_text(sql_v2_dropped, encoding="utf-8")

        d1 = compute_normalized_schema_digest(f1, consumed_projections=consumed)
        d2 = compute_normalized_schema_digest(f2, consumed_projections=consumed)

        assert d1 != d2, "Dropping a consumed column must alter contract digest"


class TestBoundarySerializationSinkDiscovery:
    """Verifies scanning of Python boundary serialization sinks and SQL LIMIT clauses."""

    @pytest.mark.asyncio
    async def test_python_serialization_sink_detected(self, tmp_path: Path):
        py_code = """
        # Python ETL pipeline
        MAX_CANONICAL = 200

        def export_features_safe(features):
            # Safe fail-fast guarded serialization
            if len(features) > MAX_CANONICAL:
                raise ValueError("Capacity exceeded")
            kv_store.put("bot_model", features)

        def export_features_raw(features):
            # Unclamped serialization
            cache.set("raw_model", features)
        """
        (tmp_path / "export.py").write_text(py_code, encoding="utf-8")

        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()

        sinks = contracts.get("boundary_serialization_sinks", [])
        assert len(sinks) == 2

        clamped = [s for s in sinks if s["target"] == '"bot_model"'][0]
        assert clamped["bounded"] is True

        unclamped = [s for s in sinks if s["target"] == '"raw_model"'][0]
        assert unclamped["bounded"] is False

    @pytest.mark.asyncio
    async def test_sql_limit_clause_detected(self, tmp_path: Path):
        sql_code = """
        -- Safe bounded query
        SELECT id, weight FROM features WHERE active = 1 LIMIT 200;

        -- Unbounded data ingestion query
        SELECT id, weight FROM features WHERE active = 1;
        """
        (tmp_path / "query.sql").write_text(sql_code, encoding="utf-8")

        disc = BoundaryDiscovery(str(tmp_path))
        contracts = await disc.scan()

        queries = contracts.get("data_ingestion_queries", [])
        assert len(queries) >= 2

        bounded_q = [q for q in queries if q["has_limit"]]
        assert len(bounded_q) >= 1
        assert bounded_q[0]["limit_value"] == 200

        unbounded_q = [q for q in queries if not q["has_limit"]]
        assert len(unbounded_q) >= 1


class TestInvariantSynthesizerOutageReality:
    """Verifies that synthesized policy explains panic vs. 100% outage and sink bounds."""

    def test_synthesize_contains_outage_explanation_and_invariant_5(self):
        contracts = {
            "upstream_cardinality": 280,
            "downstream_capacity": 200,
            "cardinality_risk_ratio": 1.4,
            "downstream_buffers": [{
                "file": "crates/dirichlet-proxy/src/engine.rs",
                "line": 42,
                "type": "[Feature; 200]",
                "capacity": 200,
            }],
            "upstream_projections": [{
                "file": "services/feature-pipeline/sync.py",
                "line": 18,
                "type": "system.columns_reflection",
                "violation": True,
            }],
            "boundary_serialization_sinks": [{
                "file": "services/feature-pipeline/sync.py",
                "line": 55,
                "target": "kv_store",
                "payload": "features",
                "bounded": False,
            }],
        }

        synth = ContractSynthesizer()
        output = synth.synthesize(contracts)

        # Check Invariant 1 explains panic vs 100% outage
        assert "INVARIANT_1" in output
        assert "100% request error blackouts" in output or "100%" in output
        assert "upstream contract verification" in output

        # Check Invariant 5 exists for unbounded sinks
        assert "INVARIANT_5" in output
        assert "missing fail-fast capacity guard" in output
