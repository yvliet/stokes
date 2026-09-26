"""
stokes/cli/terminal_overwriter.py
ANSI multi-line cursor overwriter for 60 FPS bracketless subagent progress streaming.
Supports Windows VT mode, non-TTY graceful fallback, and cursor hide/show lifecycle.
GitHub: yvliet
"""

import sys
import time
import random
from typing import Callable

from stokes.cli.color_palette import (
    PALETTE_STEPS, SHADES, RESET, BOLD, DIM,
    FG_AMBER, FG_CYAN, FG_WHITE,
)

# ─── Cursor Management ────────────────────────────────────────────────────────

def hide_cursor() -> None:
    sys.stdout.write("\033[?25l")
    sys.stdout.flush()


def show_cursor() -> None:
    sys.stdout.write("\033[?25h")
    sys.stdout.flush()


# ─── Pixel Matrix Generator ──────────────────────────────────────────────────

def generate_pixel_matrix(
    rows: int = 4,
    cols: int = 9,
    noise: float = 0.14,
    spaced: bool = False,
    double_char: bool = False,
) -> list[str]:
    """
    Generates a randomized grayscale pixel matrix with an underlying diagonal gradient.
    Uses PALETTE_STEPS to ensure exact color and shade harmony with the CLI loaders.

    Diagonal gradient: top-left = 0.0 (highlight), bottom-right = 1.0 (shadow).
    Noise: random jitter applied on top of the base gradient for organic texture.
    """
    lines = []
    for r in range(rows):
        line = ""
        for c in range(cols):
            # Diagonal gradient from top-left (highlight) to bottom-right (shadow)
            grad = (r / max(1, rows - 1) * 0.40) + (c / max(1, cols - 1) * 0.60)
            jitter = random.uniform(-noise, noise)
            val = max(0.0, min(1.0, grad + jitter))
            idx = min(3, int(val * 4))
            s_glyph, d_glyph, color = PALETTE_STEPS[idx]
            glyph = d_glyph if double_char else s_glyph
            sep = " " if (spaced and c < cols - 1) else ""
            line += f"{color}{glyph}{RESET}{sep}"
        lines.append(line)
    return lines


# ─── Bracketless Loader Renderer ─────────────────────────────────────────────

def render_loader_frame(style_name: str, step: int, subagent_idx: int) -> str:
    """
    Renders a single bracketless 5-cell loader frame (9 characters wide including spaces).

    Styles:
      shade  — 5-block cycling shade glyphs (░ ▒ ▓ █) with canonical palette colors
      blocks — Solid █ blocks cycling through 4 grayscale palette tones
      pulse  — Stair-step wave reflecting the banner diagonal art
    """
    if style_name == "shade":
        offset = (step + subagent_idx) % 4
        cells = []
        for i in range(5):
            idx = (offset + i) % 4
            s_glyph, _, color = PALETTE_STEPS[idx]
            cells.append(f"{color}{s_glyph}{RESET}")
        return " ".join(cells)

    elif style_name == "blocks":
        palette_colors = [p[2] for p in PALETTE_STEPS]
        offset = (step + subagent_idx) % len(palette_colors)
        cells = []
        for i in range(5):
            c_idx = (offset + i) % len(palette_colors)
            cells.append(f"{palette_colors[c_idx]}█{RESET}")
        return " ".join(cells)

    elif style_name == "pulse":
        sequence = [0, 1, 2, 3, 2, 1]
        offset = (step * 2 + subagent_idx) % len(sequence)
        cells = []
        for i in range(5):
            s_idx = sequence[(offset + i) % len(sequence)]
            s_glyph, _, color = PALETTE_STEPS[min(3, s_idx)]
            cells.append(f"{color}{s_glyph}{RESET}")
        return " ".join(cells)

    else:
        # Default to shade
        return render_loader_frame("shade", step, subagent_idx)


# ─── Multi-Line Overwriter ────────────────────────────────────────────────────

class MultiLineOverwriter:
    """
    Manages in-place multi-line terminal rendering at up to 60 FPS.

    Usage:
        writer = MultiLineOverwriter(num_lines=N)
        writer.initial_render(lines)
        # ... update loop ...
        writer.overwrite(lines)
    """

    RENDER_TICK_SECONDS = 1.0 / 60.0  # 16.6ms

    def __init__(self, num_lines: int) -> None:
        self.num_lines = num_lines
        self.is_tty = sys.stdout.isatty()
        self._last_render = 0.0

    def initial_render(self, lines: list[str]) -> None:
        """Render lines for the first time without cursor movement."""
        for line in lines:
            sys.stdout.write(line + "\n")
        sys.stdout.flush()
        self._last_render = time.monotonic()

    def overwrite(self, lines: list[str], force: bool = False) -> None:
        """
        Overwrite previously rendered lines in-place using ANSI cursor addressing.
        Respects the 16.6ms render tick coalescer (60 FPS) unless force=True.
        Non-TTY fallback: skips cursor movement.
        """
        if not self.is_tty:
            return

        now = time.monotonic()
        if not force and (now - self._last_render) < self.RENDER_TICK_SECONDS:
            return

        # Move cursor up N lines, then overwrite each line
        sys.stdout.write(f"\033[{self.num_lines}A")
        for line in lines:
            sys.stdout.write(f"\r\033[K{line}\n")
        sys.stdout.flush()
        self._last_render = now

    def finalize(self, lines: list[str]) -> None:
        """Force-render final state and restore cursor."""
        self.overwrite(lines, force=True)


# ─── Subagent Progress Stream Renderer ───────────────────────────────────────

def run_subagent_progress(
    subagents: list[dict],
    stage_provider: Callable[[dict, int], str] | None = None,
    style: str = "shade",
    total_ticks: int = 40,
    tick_delay: float = 0.07,
    speed: float = 1.0,
) -> None:
    """
    Render parallel subagent progress with flicker-free multi-line ANSI overwriting.

    Each subagent dict must have: name, stages (list of str)
    stage_provider: optional callable(subagent, tick) -> status string
    """
    is_tty = sys.stdout.isatty()
    num_lines = len(subagents)
    delay = tick_delay / speed

    def _format_line(sa: dict, stage_text: str, idx: int) -> str:
        prefix = "└──" if idx == num_lines - 1 else "├──"
        if "FLAGGED" in stage_text or "VIOLATION" in stage_text:
            text = f"{FG_AMBER}{stage_text}{RESET}"
        elif "READY" in stage_text or "COMPLETED" in stage_text:
            text = f"{FG_CYAN}{stage_text}{RESET}"
        else:
            text = f"{DIM}{stage_text}{RESET}"
        return f"  {prefix} {BOLD}{sa['name']}{RESET} {DIM}›{RESET} {text}"

    # Initial render
    initial_lines = []
    for idx, sa in enumerate(subagents):
        stage_text = sa["stages"][0] if stage_provider is None else stage_provider(sa, 0)
        initial_lines.append(_format_line(sa, stage_text, idx))
        sys.stdout.write(initial_lines[-1] + "\n")
    sys.stdout.flush()

    if not is_tty:
        # Non-TTY: just show final states after a brief pause
        time.sleep(0.4 / speed)
        for idx, sa in enumerate(subagents):
            final = sa["stages"][-1]
            if "FLAGGED" in final:
                indicator = f"{FG_AMBER}{final}{RESET}"
            elif "READY" in final:
                indicator = f"{FG_CYAN}{final}{RESET}"
            else:
                indicator = f"{DIM}{final}{RESET}"
            prefix = "└──" if idx == num_lines - 1 else "├──"
            print(f"  {prefix} {BOLD}{sa['name']}{RESET} {DIM}›{RESET} {indicator}")
        return

    last_render = time.monotonic()
    try:
        hide_cursor()
        for tick in range(total_ticks):
            time.sleep(delay)
            now = time.monotonic()
            if (now - last_render) < (1.0 / 60.0):
                continue

            sys.stdout.write(f"\033[{num_lines}A")
            for idx, sa in enumerate(subagents):
                if stage_provider is not None:
                    stage_text = stage_provider(sa, tick)
                else:
                    stage_idx = min(len(sa["stages"]) - 1, tick // 10)
                    stage_text = sa["stages"][stage_idx]
                line = _format_line(sa, stage_text, idx)
                sys.stdout.write(f"\r\033[K{line}\n")
            sys.stdout.flush()
            last_render = now
    finally:
        show_cursor()
