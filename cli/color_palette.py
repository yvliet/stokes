"""
stokes/cli/color_palette.py
Unified grayscale palette, ANSI tokens, status badges, and bracketless loader system.
Adopted from preview_audit_cli.py — all colors and shade glyphs are canonical.
GitHub: yvliet
"""

import sys
import os

# ─── Windows VT Support ───────────────────────────────────────────────────────

def enable_vt_support() -> None:
    """Enable ANSI virtual terminal processing on Windows; configure UTF-8 output."""
    if sys.platform == "win32":
        os.system("")
        if hasattr(sys.stdout, "reconfigure"):
            sys.stdout.reconfigure(encoding="utf-8")
        if hasattr(sys.stderr, "reconfigure"):
            sys.stderr.reconfigure(encoding="utf-8")


enable_vt_support()

# ─── ANSI Style Tokens ────────────────────────────────────────────────────────

RESET   = "\033[0m"
BOLD    = "\033[1m"
DIM     = "\033[2m"
ITALIC  = "\033[3m"

# ─── Grayscale Ramp (256-color) ───────────────────────────────────────────────

G_BG = "\033[48;5;234m"
G_0  = "\033[38;5;235m"
G_1  = "\033[38;5;238m"
G_2  = "\033[38;5;242m"
G_3  = "\033[38;5;246m"
G_4  = "\033[38;5;250m"
G_5  = "\033[38;5;255m"

# ─── Status Badge Tokens ──────────────────────────────────────────────────────

BG_EMERALD = "\033[48;5;28m\033[38;5;255m\033[1m"
BG_AMBER   = "\033[48;5;214m\033[38;5;16m\033[1m"
BG_CRIMSON = "\033[48;5;160m\033[38;5;255m\033[1m"
BG_CYAN    = "\033[48;5;31m\033[38;5;255m\033[1m"
BG_PURPLE  = "\033[48;5;97m\033[38;5;255m\033[1m"
BG_GRAY    = "\033[48;5;238m\033[38;5;255m\033[1m"

FG_EMERALD = "\033[38;5;42m"
FG_AMBER   = "\033[38;5;214m"
FG_CRIMSON = "\033[38;5;196m"
FG_CYAN    = "\033[38;5;51m"
FG_GRAY    = "\033[38;5;245m"
FG_WHITE   = "\033[38;5;255m"

# ─── Unified Grayscale Brand Palette ─────────────────────────────────────────
#
# 4 canonical tone steps shared by the optical square header and bracketless loaders.
# Each step is a tuple: (single_glyph, double_glyph, ansi_color_code).
# Glyphs and colors are always paired — they travel together in all renders.
#
# Step 0: Highlight     (bright white,   rgb ~255)
# Step 1: Light midtone (silver gray,    rgb ~248)
# Step 2: Dark midtone  (slate gray,     rgb ~241)
# Step 3: Deep shadow   (dark charcoal,  rgb ~236)

PALETTE_STEPS: list[tuple[str, str, str]] = [
    ("░", "░░", "\033[38;5;255m"),   # 0: Highlight
    ("▒", "▒▒", "\033[38;5;248m"),   # 1: Light midtone
    ("▓", "▓▓", "\033[38;5;241m"),   # 2: Dark midtone
    ("█", "██", "\033[38;5;236m"),   # 3: Deep shadow
]

# Convenience list: shade glyphs only (single-char)
SHADES: list[str] = [p[0] for p in PALETTE_STEPS]


def severity_badge(severity: str) -> str:
    """Return a formatted severity badge for terminal output."""
    mapping = {
        "FATAL":              f"{BG_CRIMSON} FATAL {RESET}",
        "CONTRACT_VIOLATION": f"{BG_AMBER} VIOLATION {RESET}",
        "WARNING":            f"{BG_AMBER} WARN {RESET}",
        "INFO":               f"{BG_CYAN} INFO {RESET}",
        "DEBUG":              f"{BG_GRAY} DEBUG {RESET}",
    }
    return mapping.get(severity.upper(), f"{BG_GRAY} {severity} {RESET}")


def status_badge(status: str) -> str:
    """Return a formatted status badge."""
    mapping = {
        "PASSED":   f"{BG_EMERALD} PASSED {RESET}",
        "FAILED":   f"{BG_CRIMSON} FAILED {RESET}",
        "RUNNING":  f"{BG_CYAN} RUNNING {RESET}",
        "AUDIT":    f"{BG_GRAY} AUDIT {RESET}",
        "SCAN":     f"{BG_GRAY} SCAN {RESET}",
        "CERT":     f"{BG_EMERALD} LOCKFILE {RESET}",
        "CI":       f"{BG_PURPLE} CI GATE {RESET}",
        "SANDBOX":  f"{BG_PURPLE} SANDBOX {RESET}",
        "SYNTHESIS": f"{BG_CYAN} BOB SYNTHESIS {RESET}",
        "DRIFT":    f"{BG_AMBER} DRIFT DETECTED {RESET}",
    }
    return mapping.get(status.upper(), f"{BG_GRAY} {status} {RESET}")
