"""
stokes/subagents/contract_synthesizer.py
Automated AGENTS.md policy synthesizer from discovered boundary contracts.
GitHub: yvliet
"""

from __future__ import annotations

from typing import Any
import datetime
import datetime as _dt


class ContractSynthesizer:
    """
    Generates a declarative AGENTS.md invariant contract policy
    from a .stokes/contracts.json boundary manifest.

    The synthesized AGENTS.md is ingested by IBM Bob 2.0 subagents
    to drive invariant evaluation and remediation synthesis.
    """

    def __init__(self, contracts: dict[str, Any]) -> None:
        self.contracts = contracts

    def synthesize(self) -> str:
        """
        Generate a complete AGENTS.md document from the discovered contracts.
        Returns the full Markdown string.
        """
        c = self.contracts
        risk = c.get("cardinality_risk_ratio")
        upstream = c.get("upstream_cardinality", 0)
        downstream = c.get("downstream_capacity", 200)
        buffers = c.get("downstream_buffers", [])
        projections = c.get("upstream_projections", [])
        violations = [p for p in projections if p.get("violation")]
        constants = c.get("cardinality_constants", [])
        workspace = c.get("workspace", "./")

        risk_str = f"{risk:.2f}" if risk is not None else "N/A"
        risk_status = "FATAL CONTRACT DRIFT" if (risk or 0) > 1.0 else "SAFE"
        risk_emoji = "⚠️" if (risk or 0) > 1.0 else "✅"

        # Find primary buffer
        primary_buf = buffers[0] if buffers else None
        buf_type = primary_buf["type"] if primary_buf else "[Feature; 200]"
        buf_file = primary_buf["file"] if primary_buf else "crates/dirichlet-proxy/src/engine/feature_ingest.rs"
        buf_cap = primary_buf["capacity"] if primary_buf else 200

        # Find primary projection
        primary_proj = projections[0] if projections else None
        proj_file = primary_proj["file"] if primary_proj else "services/feature-pipeline/catalog_sync.py"

        timestamp = _dt.datetime.now(_dt.timezone.utc).isoformat()

        lines = [
            f"# Stokes Invariant Contract Policy",
            f"# Auto-synthesized from boundary discovery.",
            f"# Workspace: {workspace}",
            f"# Generated: {timestamp}",
            f"# GitHub: yvliet",
            f"",
            f"## Executive Summary",
            f"",
            f"- **Upstream Cardinality (C_upstream)**: {upstream}",
            f"- **Downstream Capacity (B_downstream)**: {downstream}",
            f"- **Cardinality Risk Ratio**: {risk_str} {risk_emoji} {risk_status}",
            f"- **Violations Discovered**: {len(violations)}",
            f"",
        ]

        # Invariant 1: Infallible Intake
        lines += [
            f"## INVARIANT_1: Infallible Intake Elimination",
            f"",
            f"**Severity**: FATAL  ",
            f"**Rule**: No fixed-size stack buffer on a hot packet intake path shall use",
            f"`.try_into().unwrap()` or any panicking slice-to-array conversion.",
            f"**Downstream Buffer**: `{buf_type}` in `{buf_file}`  ",
            f"**Capacity**: {buf_cap} slots  ",
            f"**Risk**: `{upstream} upstream / {downstream} downstream = {risk_str}`",
            f"",
        ]

        # Invariant 2: Catalog Qualification
        lines += [
            f"## INVARIANT_2: Transitive Catalog Qualification",
            f"",
            f"**Severity**: FATAL  ",
            f"**Rule**: All `system.columns` reflection queries MUST include",
            f"`AND database = currentDatabase()`.  ",
            f"**Upstream Projection**: `{proj_file}`  ",
            f"**Unscoped Queries**: {len(violations)} found",
            f"",
        ]

        # Dynamic constants
        if constants:
            lines += [
                f"## Discovered Boundary Constants",
                f"",
            ]
            for const in constants[:10]:
                lines.append(f"- `{const['name']} = {const['value']}` in `{const['file']}:{const['line']}`")
            lines.append("")

        # Downstream buffers
        if buffers:
            lines += [
                f"## Discovered Downstream Buffers",
                f"",
            ]
            for buf in buffers[:10]:
                lines.append(
                    f"- `{buf['type']}` in `{buf['file']}:{buf['line']}` "
                    f"(capacity={buf['capacity']})"
                )
            lines.append("")

        # Proto repeated fields
        proto_fields = c.get("protobuf_repeated_fields", [])
        unbounded = [f for f in proto_fields if not f.get("bounded")]
        if unbounded:
            lines += [
                f"## INVARIANT_4: Protobuf Cardinality Bound",
                f"",
                f"**Severity**: WARNING  ",
                f"**Unbounded repeated fields**: {len(unbounded)}",
                f"",
            ]
            for pf in unbounded[:5]:
                lines.append(
                    f"- `repeated {pf['field_type']} {pf['field_name']}` "
                    f"in `{pf['file']}:{pf['line']}` - missing `[(stokes.max_items) = N]`"
                )
            lines.append("")

        lines += [
            f"## Stokes Lock Contract",
            f"",
            f"`stokes.lock` - machine-authoritative cryptographic boundary lockfile.  ",
            f"`CONFORMANCE.md` - human-readable PR attestation.  ",
            f"`stokes verify --strict` - CI/CD gate (non-zero exit blocks merge).",
            f"",
            f"---",
            f"**Certified by**: yvliet (GitHub: yvliet)",
        ]

        return "\n".join(lines)
