#!/bin/sh
# Stokes Autonomous Systems Invariant Verification Engine Installer
# https://trystokes.pages.dev
# Maintained by Yuliet Li (yvliet)

set -e

# Color definitions
BOLD='\033[1m'
DIM='\033[2m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
RESET='\033[0m'

printf "${BOLD}STOKES${RESET} ${DIM}→ Autonomous Cross-Boundary Systems Invariant Verification Engine${RESET}\n"
printf "${DIM}----------------------------------------------------------------------${RESET}\n"

# 1. Check for Python 3
if ! command -v python3 >/dev/null 2>&1; then
    printf "${RED}Error:${RESET} python3 is required to run Stokes. Please install Python >= 3.11.\n"
    exit 1
fi

# 2. Check Python version >= 3.11
PY_VERSION=$(python3 -c "import sys; print(f'{sys.version_info.major}.{sys.version_info.minor}')")
PY_MAJOR=$(echo "$PY_VERSION" | cut -d. -f1)
PY_MINOR=$(echo "$PY_VERSION" | cut -d. -f2)

if [ "$PY_MAJOR" -lt 3 ] || { [ "$PY_MAJOR" -eq 3 ] && [ "$PY_MINOR" -lt 11 ]; }; then
    printf "${RED}Error:${RESET} Python >= 3.11 is required (detected Python %s).\n" "$PY_VERSION"
    exit 1
fi

printf "${GREEN}✔${RESET} Detected Python %s\n" "$PY_VERSION"

# 3. Determine target bin directory
INSTALL_BIN_DIR="${HOME}/.local/bin"
mkdir -p "$INSTALL_BIN_DIR"

# 4. Install Stokes via isolated venv or pipx
STOKES_DIR="${HOME}/.stokes"
VENV_DIR="${STOKES_DIR}/venv"

if command -v pipx >/dev/null 2>&1; then
    printf "${CYAN}→${RESET} Installing latest Stokes via pipx...\n"
    pipx install stokes --force --quiet 2>/dev/null || pipx upgrade stokes --quiet 2>/dev/null
    BIN_PATH="$(which stokes 2>/dev/null || true)"
fi

if [ -z "$BIN_PATH" ] || [ ! -x "$BIN_PATH" ]; then
    printf "${CYAN}→${RESET} Provisioning isolated runtime in %s...\n" "$STOKES_DIR"
    mkdir -p "$STOKES_DIR"
    python3 -m venv "$VENV_DIR"
    "$VENV_DIR/bin/pip" install --upgrade --quiet pip setuptools wheel
    printf "${CYAN}→${RESET} Installing stokes from PyPI...\n"
    "$VENV_DIR/bin/pip" install --upgrade --quiet stokes

    # Create wrapper script in ~/.local/bin/stokes
    cat << 'EOF' > "${INSTALL_BIN_DIR}/stokes"
#!/bin/sh
exec "${HOME}/.stokes/venv/bin/stokes" "$@"
EOF
    chmod +x "${INSTALL_BIN_DIR}/stokes"
    BIN_PATH="${INSTALL_BIN_DIR}/stokes"
fi

# 5. Verify installation
printf "${GREEN}✔${RESET} Successfully installed Stokes to %s\n" "$BIN_PATH"

if [ -x "$BIN_PATH" ]; then
    VERSION_OUTPUT=$("$BIN_PATH" --version 2>&1 || true)
    printf "${GREEN}✔${RESET} Verified: ${BOLD}%s${RESET}\n" "$VERSION_OUTPUT"
fi

# 6. Check PATH
case ":$PATH:" in
    *":${INSTALL_BIN_DIR}:"*) ;;
    *)
        printf "\n${YELLOW}Notice:${RESET} %s is not in your PATH.\n" "$INSTALL_BIN_DIR"
        printf "Add it to your shell configuration:\n\n"
        printf "  ${BOLD}export PATH=\"%s:\$PATH\"${RESET}\n\n" "$INSTALL_BIN_DIR"
        ;;
esac

printf "${DIM}----------------------------------------------------------------------${RESET}\n"
printf "${BOLD}Getting Started:${RESET}\n"
printf "  stokes scan /path/to/workspace   ${DIM}# Scan AST boundaries${RESET}\n"
printf "  stokes verify --strict           ${DIM}# Run pre-merge CI gate${RESET}\n"
printf "  stokes cert --output stokes.lock ${DIM}# Emit cryptographic lockfile${RESET}\n"
printf "  stokes mcp                       ${DIM}# Launch Model Context Protocol server${RESET}\n"
printf "\n${DIM}Documentation: https://trystokes.pages.dev${RESET}\n"
