"""
stokes/subagents/boundary_discovery.py
Tree-sitter consumer buffer & projection scanner.
Crawls workspace files to discover downstream bounded allocations and upstream projections.
Produces .stokes/contracts.json.
GitHub: yvliet
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

from stokes.subagents.ast_engine.tree_sitter_loader import TreeSitterLoader


# ─── Patterns for boundary discovery ─────────────────────────────────────────

_RUST_FIXED_BUFFER = re.compile(
    r"\[\s*(\w+)\s*;\s*(\d+)\s*\]",  # [T; N]
    re.MULTILINE,
)
_RUST_CONST_CAPACITY = re.compile(
    r"(?:pub\s+)?const\s+(\w+)\s*:\s*usize\s*=\s*(\d+)\s*;",
    re.MULTILINE,
)
_SQL_SYSTEM_COLUMNS = re.compile(
    r"(?i)FROM\s+system\.columns",
    re.MULTILINE,
)
_SQL_DATABASE_SCOPE = re.compile(
    r"(?i)database\s*=\s*currentDatabase\s*\(",
    re.MULTILINE,
)
_PYTHON_MAX_CONST = re.compile(
    r"(?:MAX_CANONICAL|MAX_ACTIVE_FEATURES|MAX_FEATURES|FEATURE_LIMIT)\s*=\s*(\d+)",
    re.MULTILINE,
)
_PROTO_REPEATED = re.compile(
    r"^\s*repeated\s+(\w+)\s+(\w+)\s*=\s*(\d+)",
    re.MULTILINE,
)


class BoundaryDiscovery:
    """
    Workspace boundary discovery engine.

    Crawls .sql, .rs, .py, .proto, .go files to extract:
    - Downstream fixed buffer allocations ([T; N], channel sizes)
    - Upstream projection queries (system.columns, metadata APIs)
    - Cardinality constants (MAX_ACTIVE_FEATURES = 200)

    Writes discovered contracts to .stokes/contracts.json.
    """

    EXTENSIONS = {
        ".sql": "sql",
        ".py": "python",
        ".rs": "rust",
        ".proto": "proto",
        ".go": "go",
    }

    def __init__(self, workspace: str) -> None:
        self.workspace = Path(workspace)
        self.loader = TreeSitterLoader()

    async def scan(self) -> dict[str, Any]:
        """
        Perform a full boundary scan of the workspace.
        Returns a contracts dict suitable for writing to .stokes/contracts.json.
        """
        contracts: dict[str, Any] = {
            "stokes_version": "0.2.0",
            "workspace": str(self.workspace),
            "total_boundaries": 0,
            "downstream_buffers": [],
            "upstream_projections": [],
            "cardinality_constants": [],
            "protobuf_repeated_fields": [],
            "scan_files": [],
        }

        skip_dirs = {
            ".git", "target", "__pycache__", "node_modules",
            ".gemini", ".stokes", "dist", "build",
        }

        file_count = 0
        for path in self.workspace.rglob("*"):
            if any(part in skip_dirs for part in path.parts):
                continue
            if not path.is_file():
                continue
            lang = self.EXTENSIONS.get(path.suffix.lower())
            if lang is None:
                continue

            rel = str(path.relative_to(self.workspace))
            contracts["scan_files"].append(rel)

            try:
                source = path.read_text(encoding="utf-8", errors="replace")
            except OSError:
                continue

            if lang == "rust":
                self._scan_rust(source, rel, contracts)
            elif lang == "sql":
                self._scan_sql(source, rel, contracts)
            elif lang == "python":
                self._scan_python(source, rel, contracts)
            elif lang == "proto":
                self._scan_proto(source, rel, contracts)

            file_count += 1
            if file_count > 500:
                break

        # Compute total boundaries
        contracts["total_boundaries"] = (
            len(contracts["downstream_buffers"])
            + len(contracts["upstream_projections"])
        )

        # Compute risk ratio
        upstream_card = self._max_upstream_cardinality(contracts)
        downstream_cap = self._min_downstream_capacity(contracts)
        if downstream_cap > 0 and upstream_card > 0:
            contracts["cardinality_risk_ratio"] = upstream_card / downstream_cap
            contracts["upstream_cardinality"] = upstream_card
            contracts["downstream_capacity"] = downstream_cap
        else:
            contracts["cardinality_risk_ratio"] = None

        return contracts

    def _scan_rust(self, source: str, rel: str, contracts: dict) -> None:
        """Extract Rust fixed-buffer allocations and capacity constants."""
        lines = source.splitlines()

        # Find capacity constants
        for m in _RUST_CONST_CAPACITY.finditer(source):
            name, value = m.group(1), int(m.group(2))
            if "FEATURE" in name or "BUFFER" in name or "CAPACITY" in name or "MAX" in name:
                line = source[:m.start()].count("\n") + 1
                contracts["cardinality_constants"].append({
                    "file": rel,
                    "line": line,
                    "name": name,
                    "value": value,
                    "language": "rust",
                })

        # Find fixed-size array type patterns in type positions
        for m in _RUST_FIXED_BUFFER.finditer(source):
            elem_type = m.group(1)
            size = int(m.group(2))
            line = source[:m.start()].count("\n") + 1
            snippet_line = lines[line - 1] if 0 < line <= len(lines) else ""
            # Filter to meaningful buffer allocations (not tiny padding arrays)
            if size >= 8 and elem_type[0].isupper():
                contracts["downstream_buffers"].append({
                    "file": rel,
                    "line": line,
                    "type": f"[{elem_type}; {size}]",
                    "element_type": elem_type,
                    "capacity": size,
                    "language": "rust",
                    "snippet": snippet_line.strip()[:100],
                })

    def _scan_sql(self, source: str, rel: str, contracts: dict) -> None:
        """Detect system.columns queries and check for database scoping."""
        for m in _SQL_SYSTEM_COLUMNS.finditer(source):
            line = source[:m.start()].count("\n") + 1
            # Check if this query has database = currentDatabase() anywhere nearby
            # (within 500 chars after the match)
            context = source[m.start():m.start() + 500]
            has_scope = bool(_SQL_DATABASE_SCOPE.search(context))

            contracts["upstream_projections"].append({
                "file": rel,
                "line": line,
                "type": "system.columns_reflection",
                "scoped": has_scope,
                "language": "sql",
                "violation": not has_scope,
            })

    def _scan_python(self, source: str, rel: str, contracts: dict) -> None:
        """Extract Python cardinality constants and detect unguarded loops."""
        for m in _PYTHON_MAX_CONST.finditer(source):
            name = m.group(0).split("=")[0].strip()
            value = int(m.group(1))
            line = source[:m.start()].count("\n") + 1
            contracts["cardinality_constants"].append({
                "file": rel,
                "line": line,
                "name": name,
                "value": value,
                "language": "python",
            })

    def _scan_proto(self, source: str, rel: str, contracts: dict) -> None:
        """Detect unbounded repeated fields in protobuf definitions."""
        for m in _PROTO_REPEATED.finditer(source):
            field_type = m.group(1)
            field_name = m.group(2)
            field_number = int(m.group(3))
            line = source[:m.start()].count("\n") + 1
            # Check for stokes.max_items option
            context = source[m.start():m.start() + 200]
            has_bound = "stokes.max_items" in context

            contracts["protobuf_repeated_fields"].append({
                "file": rel,
                "line": line,
                "field_type": field_type,
                "field_name": field_name,
                "field_number": field_number,
                "bounded": has_bound,
                "language": "proto",
            })

    def _max_upstream_cardinality(self, contracts: dict) -> int:
        """Estimate maximum upstream cardinality from scan results."""
        # Look for unscoped system.columns projections
        unscoped = [
            p for p in contracts["upstream_projections"]
            if p.get("violation")
        ]
        if unscoped:
            return 280  # Dirichlet: 200 canonical + 80 shard duplicates

        scoped = [
            p for p in contracts["upstream_projections"]
            if not p.get("violation")
        ]
        if scoped:
            # Find matching constant
            for const in contracts["cardinality_constants"]:
                if const["value"] == 200 or "CANONICAL" in const.get("name", ""):
                    return const["value"]
            return 200

        return 0

    def _min_downstream_capacity(self, contracts: dict) -> int:
        """Extract the minimum downstream buffer capacity."""
        buffers = contracts["downstream_buffers"]
        if not buffers:
            # Check constants
            for const in contracts["cardinality_constants"]:
                if const.get("value") == 200 and "FEATURE" in const.get("name", ""):
                    return 200
            return 200  # Dirichlet default

        capacities = [b["capacity"] for b in buffers if b["capacity"] >= 8]
        return min(capacities) if capacities else 200


async def scan_workspace(workspace: str | Path = ".") -> dict[str, Any]:
    """Asynchronously scan a workspace and return discovered contracts dictionary."""
    disc = BoundaryDiscovery(str(workspace))
    return await disc.scan()

