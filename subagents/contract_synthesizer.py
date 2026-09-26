"""
stokes/subagents/contract_synthesizer.py
Automated AGENTS.md policy synthesizer and semantic AST schema hashing.
Extracts normalized boundary signatures across SQL, Python, Rust, and Protobuf
to guarantee that non-breaking formatting or comment changes never break CI.
GitHub: yvliet
"""

from __future__ import annotations

import ast
import datetime as _dt
import hashlib
import json
from pathlib import Path
import re
from typing import Any


def compute_normalized_schema_digest(
    path: Path | str,
    content: str | None = None,
    consumed_projections: dict[str, list[str]] | None = None,
) -> str:
    """
    Computes a deterministic SHA-256 digest of the file's canonical AST schema signature.
    Comments, docstrings, formatting, whitespace, and internal non-contract helper
    implementations are stripped, ensuring non-breaking refactors (like black/rustfmt)
    never invalidate the lockfile.

    If `consumed_projections` is specified (e.g. `{"features": ["feature_id", "weight"]}`),
    Projection Consumption Isolation is enforced: internal table columns not consumed by
    downstream boundaries are excluded from the digest, preventing contract lockout on
    internal database changes.
    """
    p = Path(path)
    if content is None:
        if not p.exists():
            return "sha256:0000000000000000000000000000000000000000000000000000000000000000"
        content = p.read_text(encoding="utf-8", errors="replace")

    ext = p.suffix.lower()
    signature_items: list[Any] = []

    if ext == ".sql":
        # Strip comments
        clean = re.sub(r"--.*$", "", content, flags=re.MULTILINE)
        clean = re.sub(r"/\*.*?\*/", "", clean, flags=re.DOTALL)
        tokens = clean.split()
        clean_text = " ".join(tokens).upper()

        # Extract table creations and column specs
        create_tables = re.findall(r"CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?([A-Z0-9_.]+)\s*\((.*?)\)", clean_text)
        for tbl, cols in sorted(create_tables):
            raw_col_list = [c.strip() for c in cols.split(",") if c.strip()]
            tbl_short = tbl.split(".")[-1]
            filter_cols = None
            if consumed_projections:
                for k, v in consumed_projections.items():
                    if k.upper() in (tbl.upper(), tbl_short.upper()):
                        filter_cols = v
                        break

            col_list = []
            for c in raw_col_list:
                col_name = c.split()[0].upper()
                if filter_cols is not None:
                    # Projection Consumption Isolation: only include consumed columns
                    if col_name not in [fc.upper() for fc in filter_cols]:
                        continue
                col_list.append(c)

            signature_items.append({"type": "sql_table", "table": tbl, "columns": sorted(col_list)})

        # Extract system reflection queries
        sys_queries = re.findall(r"FROM\s+SYSTEM\.COLUMNS.*?(?:WHERE\s+(.*?))?(?:ORDER|GROUP|LIMIT|;|$)", clean_text)
        for sq in sys_queries:
            has_db_filter = "DATABASE" in sq and "CURRENTDATABASE" in sq
            signature_items.append({"type": "sql_system_columns", "db_scoped": bool(has_db_filter)})

        # Extract SELECT projection queries
        select_queries = re.findall(r"SELECT\s+(.+?)\s+FROM\s+([A-Z0-9_.]+)", clean_text)
        for proj, src_table in select_queries:
            proj_cols = [p.strip() for p in proj.split(",") if p.strip()]
            signature_items.append({
                "type": "sql_select_projection",
                "table": src_table,
                "columns": sorted(proj_cols),
                "is_wildcard": "*" in proj or "SYSTEM.COLUMNS" in src_table,
            })

        if not signature_items:
            signature_items.append({"type": "sql_tokens", "tokens": tokens})

    elif ext == ".py":
        try:
            tree = ast.parse(content)
            for node in tree.body:
                if isinstance(node, ast.Assign):
                    for target in node.targets:
                        if isinstance(target, ast.Name) and target.id.isupper():
                            val = ast.unparse(node.value) if hasattr(ast, "unparse") else ""
                            signature_items.append({"type": "const", "name": target.id, "value": val})
                elif isinstance(node, ast.AnnAssign):
                    if isinstance(node.target, ast.Name) and node.target.id.isupper():
                        val = ast.unparse(node.value) if (node.value and hasattr(ast, "unparse")) else ""
                        signature_items.append({"type": "const", "name": node.target.id, "value": val})
                elif isinstance(node, ast.ClassDef):
                    fields = []
                    for item in node.body:
                        if isinstance(item, ast.AnnAssign) and isinstance(item.target, ast.Name):
                            ann = ast.unparse(item.annotation) if hasattr(ast, "unparse") else ""
                            fields.append((item.target.id, ann))
                        elif isinstance(item, ast.FunctionDef) and not item.name.startswith("_"):
                            args = [a.arg for a in item.args.args]
                            ret = ast.unparse(item.returns) if (item.returns and hasattr(ast, "unparse")) else ""
                            fields.append((item.name, args, ret))
                    signature_items.append({
                        "type": "class",
                        "name": node.name,
                        "bases": [ast.unparse(b) for b in node.bases] if hasattr(ast, "unparse") else [],
                        "fields": sorted(fields, key=lambda x: str(x[0])),
                    })
                elif isinstance(node, ast.FunctionDef) and not node.name.startswith("_"):
                    args = [a.arg for a in node.args.args]
                    ret = ast.unparse(node.returns) if (node.returns and hasattr(ast, "unparse")) else ""
                    signature_items.append({"type": "function", "name": node.name, "args": args, "returns": ret})
        except SyntaxError:
            clean = re.sub(r"#.*$", "", content, flags=re.MULTILINE)
            signature_items.append({"type": "py_tokens", "tokens": clean.split()})

    elif ext == ".rs":
        clean = re.sub(r"//.*$", "", content, flags=re.MULTILINE)
        clean = re.sub(r"/\*.*?\*/", "", clean, flags=re.DOTALL)

        consts = re.findall(r"(?:pub\s+)?const\s+(\w+)\s*:\s*([A-Za-z0-9_]+)\s*=\s*([^;]+);", clean)
        for cname, ctype, cval in sorted(consts):
            signature_items.append({"type": "const", "name": cname, "data_type": ctype, "value": cval.strip()})

        fixed_buffers = re.findall(r"\[\s*(\w+)\s*;\s*(\d+)\s*\]", clean)
        for btype, bcap in sorted(fixed_buffers):
            signature_items.append({"type": "fixed_buffer", "item_type": btype, "capacity": int(bcap)})

        structs = re.findall(r"(?:pub\s+)?struct\s+(\w+)\s*\{([^}]*)\}", clean)
        for sname, sbody in sorted(structs):
            fields = []
            for f in sbody.split(","):
                f = f.strip()
                if ":" in f:
                    fname, ftype = f.split(":", 1)
                    fields.append((fname.strip(), ftype.strip()))
            signature_items.append({"type": "struct", "name": sname, "fields": sorted(fields)})

        enums = re.findall(r"(?:pub\s+)?enum\s+(\w+)\s*\{([^}]*)\}", clean)
        for ename, ebody in sorted(enums):
            variants = [v.strip().split("(")[0].strip() for v in ebody.split(",") if v.strip()]
            signature_items.append({"type": "enum", "name": ename, "variants": sorted(variants)})

        if not signature_items:
            signature_items.append({"type": "rs_tokens", "tokens": clean.split()})

    elif ext == ".proto":
        clean = re.sub(r"//.*$", "", content, flags=re.MULTILINE)
        clean = re.sub(r"/\*.*?\*/", "", clean, flags=re.DOTALL)

        repeated = re.findall(r"repeated\s+(\w+)\s+(\w+)\s*=\s*(\d+)(?:\s*\[(.*?)\])?;", clean)
        for rtype, rname, rtag, ropts in sorted(repeated):
            signature_items.append({
                "type": "proto_repeated",
                "field_type": rtype,
                "field_name": rname,
                "tag": int(rtag),
                "options": ropts.strip() if ropts else "",
            })
        messages = re.findall(r"message\s+(\w+)\s*\{([^}]*)\}", clean)
        for mname, _ in sorted(messages):
            signature_items.append({"type": "proto_message", "name": mname})

        if not signature_items:
            signature_items.append({"type": "proto_tokens", "tokens": clean.split()})

    else:
        tokens = content.split()
        signature_items.append({"type": "generic_tokens", "tokens": tokens})

    canonical_json = json.dumps(signature_items, sort_keys=True, separators=(',', ':'))
    return "sha256:" + hashlib.sha256(canonical_json.encode("utf-8")).hexdigest()


def compute_canonical_contracts_digest(contracts: dict[str, Any]) -> str:
    """
    Computes a canonical SHA-256 digest of the discovered boundary contracts.
    """
    normalized = {
        "upstream_cardinality": contracts.get("upstream_cardinality", 0),
        "downstream_capacity": contracts.get("downstream_capacity", 0),
        "cardinality_risk_ratio": round(contracts.get("cardinality_risk_ratio", 0.0), 4),
        "downstream_buffers": sorted(
            [{"type": b.get("type"), "capacity": b.get("capacity")} for b in contracts.get("downstream_buffers", [])],
            key=lambda x: (x["type"] or "", x["capacity"] or 0),
        ),
        "upstream_projections": sorted(
            [{"query": p.get("query"), "unscoped": p.get("unscoped", False)} for p in contracts.get("upstream_projections", [])],
            key=lambda x: (x["query"] or "", x["unscoped"]),
        ),
        "cardinality_constants": sorted(
            [{"name": c.get("name"), "value": c.get("value")} for c in contracts.get("cardinality_constants", [])],
            key=lambda x: (x["name"] or "", x["value"] or 0),
        ),
    }
    canonical_json = json.dumps(normalized, sort_keys=True, separators=(',', ':'))
    return "sha256:" + hashlib.sha256(canonical_json.encode("utf-8")).hexdigest()


class ContractSynthesizer:
    """
    Generates a declarative AGENTS.md invariant contract policy
    from a .stokes/contracts.json boundary manifest.

    The synthesized AGENTS.md is ingested by IBM Bob 2.0 and other coding agents
    to drive cross-boundary invariant evaluation and remediation synthesis.
    """

    def __init__(self, contracts: dict[str, Any] | None = None) -> None:
        self.contracts = contracts or {}

    def synthesize(self, contracts: dict[str, Any] | None = None) -> str:
        """
        Generate a complete AGENTS.md document from the discovered contracts.
        Returns the full Markdown string.
        """
        if contracts is not None:
            self.contracts = contracts
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
            f"# Auto-synthesized from boundary discovery across untyped architectural seams.",
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

        # Invariant 1: Infallible Intake Elimination & Cross-Boundary Protection
        lines += [
            f"## INVARIANT_1: Infallible Intake Elimination & Outage Prevention",
            f"",
            f"**Severity**: FATAL  ",
            f"**Rule**: No fixed-size stack buffer on a hot packet intake path shall use",
            f"`.try_into().unwrap()` or uncontracted slice-to-array conversions.",
            f"**Architectural Invariant**: Localized Rust error handling (`Result<_, Error>`)",
            f"prevents thread crashes but converts oversized payloads into 100% request error blackouts.",
            f"Stokes enforces upstream contract verification so invalid payloads are blocked in PR CI",
            f"before reaching production edge nodes.",
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

        # Invariant 5: Fail-Fast Boundary Serialization Guarding
        sinks = c.get("boundary_serialization_sinks", [])
        unbounded_sinks = [s for s in sinks if not s.get("bounded")]
        if unbounded_sinks:
            lines += [
                f"## INVARIANT_5: Fail-Fast Boundary Serialization Guarding",
                f"",
                f"**Severity**: HIGH  ",
                f"**Rule**: Payloads serialized into wire sinks (KV put, Kafka send, IPC sockets, or internal SDK wrappers)",
                f"MUST enforce an explicit fail-fast capacity guard (e.g. `if len(payload) > MAX_ITEMS: raise ContractCapacityExceededError(...)`).",
                f"Blind slice truncation (`[:N]`) is forbidden (LINT-006) to prevent silent data corruption.",
                f"**Unguarded Serialization Sinks**: {len(unbounded_sinks)} found",
                f"",
            ]
            for us in unbounded_sinks[:5]:
                lines.append(
                    f"- `{us['payload']}` to `{us['target']}` in `{us['file']}:{us['line']}` - missing fail-fast capacity guard"
                )
            lines.append("")

        lines += [
            f"## Stokes Lock Contract",
            f"",
            f"`stokes.lock` - machine-authoritative normalized semantic AST schema lockfile.  ",
            f"`CONFORMANCE.md` - human-readable PR attestation.  ",
            f"`stokes verify --strict` - deterministic CI/CD gate (non-zero exit blocks merge).",
            f"",
            f"---",
            f"**Certified by**: yvliet (GitHub: yvliet)",
        ]

        return "\n".join(lines)
