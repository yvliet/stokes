"""
stokes/tests/test_semantic_hashing.py
Unit tests verifying Normalized Semantic AST Schema Hashing.
Confirms that comments, docstrings, formatting, and internal refactors
produce identical cryptographic digests, while schema and boundary changes
produce distinct digests.
GitHub: yvliet
"""

import pytest
from pathlib import Path
from stokes.subagents.contract_synthesizer import (
    compute_normalized_schema_digest,
    compute_canonical_contracts_digest,
)


class TestSemanticSchemaHashing:
    """Tests for normalized semantic AST schema hashing."""

    def test_python_comments_and_formatting_do_not_alter_digest(self, tmp_path):
        """Adding comments or reformatted whitespace in Python must preserve the digest."""
        p1 = tmp_path / "model_v1.py"
        p2 = tmp_path / "model_v2.py"

        p1.write_text(
            "MAX_ACTIVE_FEATURES = 200\n\n"
            "class FeatureRecord:\n"
            "    id: int\n"
            "    name: str\n"
        )

        p2.write_text(
            "# This is a newly added module comment\n"
            "MAX_ACTIVE_FEATURES = 200\n\n"
            "class FeatureRecord:\n"
            "    # Field documentation comment\n"
            "    id: int\n\n"
            "    name: str\n"
            "# Trailing comment\n"
        )

        d1 = compute_normalized_schema_digest(p1)
        d2 = compute_normalized_schema_digest(p2)
        assert d1 == d2, "Comments and whitespace must not alter semantic AST digest"

    def test_python_schema_constant_change_alters_digest(self, tmp_path):
        """Altering a schema constant value must produce a new digest."""
        p1 = tmp_path / "model_v1.py"
        p2 = tmp_path / "model_v2.py"

        p1.write_text("MAX_ACTIVE_FEATURES = 200\n")
        p2.write_text("MAX_ACTIVE_FEATURES = 280\n")

        d1 = compute_normalized_schema_digest(p1)
        d2 = compute_normalized_schema_digest(p2)
        assert d1 != d2, "Changing schema constant must alter semantic digest"

    def test_sql_comments_do_not_alter_digest(self, tmp_path):
        """Adding comments to SQL DDL must preserve the digest."""
        p1 = tmp_path / "schema_v1.sql"
        p2 = tmp_path / "schema_v2.sql"

        p1.write_text(
            "CREATE TABLE bot_signals (\n"
            "    signal_id UInt64,\n"
            "    score Float32\n"
            ");\n"
        )

        p2.write_text(
            "-- Migration header comment\n"
            "CREATE TABLE bot_signals (\n"
            "    -- Primary key\n"
            "    signal_id UInt64,\n"
            "    /* Multi-line\n"
            "       description */\n"
            "    score Float32\n"
            ");\n"
        )

        d1 = compute_normalized_schema_digest(p1)
        d2 = compute_normalized_schema_digest(p2)
        assert d1 == d2, "SQL comments must not alter semantic digest"

    def test_sql_column_change_alters_digest(self, tmp_path):
        """Adding a column to SQL DDL must produce a new digest."""
        p1 = tmp_path / "schema_v1.sql"
        p2 = tmp_path / "schema_v2.sql"

        p1.write_text(
            "CREATE TABLE bot_signals (\n"
            "    signal_id UInt64\n"
            ");\n"
        )
        p2.write_text(
            "CREATE TABLE bot_signals (\n"
            "    signal_id UInt64,\n"
            "    extra_feature Float32\n"
            ");\n"
        )

        d1 = compute_normalized_schema_digest(p1)
        d2 = compute_normalized_schema_digest(p2)
        assert d1 != d2, "Adding a column to SQL schema must alter digest"

    def test_rust_comments_and_formatting_do_not_alter_digest(self, tmp_path):
        """Adding comments or rustfmt styling to Rust must preserve the digest."""
        p1 = tmp_path / "engine_v1.rs"
        p2 = tmp_path / "engine_v2.rs"

        p1.write_text(
            "pub const MAX_FEATURES: usize = 200;\n"
            "pub struct IngestBuffer {\n"
            "    pub features: [Feature; 200],\n"
            "}\n"
        )

        p2.write_text(
            "// High performance intake buffer\n"
            "pub const MAX_FEATURES: usize = 200;\n\n"
            "/* Doc comments */\n"
            "pub struct IngestBuffer {\n"
            "    // Inner field comment\n"
            "    pub features: [Feature; 200],\n"
            "}\n"
        )

        d1 = compute_normalized_schema_digest(p1)
        d2 = compute_normalized_schema_digest(p2)
        assert d1 == d2, "Rust comments must not alter semantic digest"

    def test_rust_buffer_capacity_change_alters_digest(self, tmp_path):
        """Altering buffer capacity in Rust must produce a new digest."""
        p1 = tmp_path / "engine_v1.rs"
        p2 = tmp_path / "engine_v2.rs"

        p1.write_text("pub struct IngestBuffer { pub features: [Feature; 200] }\n")
        p2.write_text("pub struct IngestBuffer { pub features: [Feature; 280] }\n")

        d1 = compute_normalized_schema_digest(p1)
        d2 = compute_normalized_schema_digest(p2)
        assert d1 != d2, "Altering buffer capacity must alter semantic digest"

    def test_contracts_digest_consistency(self):
        """Contracts digest must be deterministic regardless of dictionary insertion order."""
        c1 = {
            "upstream_cardinality": 280,
            "downstream_capacity": 200,
            "cardinality_risk_ratio": 1.4,
            "downstream_buffers": [{"type": "[Feature; 200]", "capacity": 200}],
            "upstream_projections": [{"query": "system.columns", "unscoped": True}],
            "cardinality_constants": [{"name": "MAX_FEATURES", "value": 200}],
        }
        c2 = {
            "cardinality_constants": [{"name": "MAX_FEATURES", "value": 200}],
            "cardinality_risk_ratio": 1.4,
            "downstream_capacity": 200,
            "upstream_projections": [{"query": "system.columns", "unscoped": True}],
            "downstream_buffers": [{"type": "[Feature; 200]", "capacity": 200}],
            "upstream_cardinality": 280,
        }
        assert compute_canonical_contracts_digest(c1) == compute_canonical_contracts_digest(c2)
