.PHONY: all install test lint typecheck clean run-scan run-audit run-verify help

PYTHON ?= python3
STOKES_TARGET ?= ../dirichlet
PYTEST_FLAGS ?= -v --tb=short

all: install test

# ─── Installation ────────────────────────────────────────────────────────────

install:
	$(PYTHON) -m pip install -e ".[dev]" --quiet

install-tree-sitter:
	$(PYTHON) -m pip install -e ".[dev,tree-sitter]" --quiet

# ─── Testing ─────────────────────────────────────────────────────────────────

test:
	$(PYTHON) -m pytest $(PYTEST_FLAGS) tests/

test-verbose:
	$(PYTHON) -m pytest -vvs tests/

test-fast:
	$(PYTHON) -m pytest -x --tb=short tests/

test-coverage:
	$(PYTHON) -m pytest --cov=stokes --cov-report=term-missing tests/

# ─── Stokes CLI Targets ───────────────────────────────────────────────────────

run-scan:
	$(PYTHON) -m stokes.cli.main scan $(STOKES_TARGET)

run-audit:
	$(PYTHON) -m stokes.cli.main audit $(STOKES_TARGET)

run-stage-check:
	$(PYTHON) -m stokes.cli.main stage-check mock://dirichlet

run-verify:
	$(PYTHON) -m stokes.cli.main verify

run-verify-strict:
	$(PYTHON) -m stokes.cli.main verify --strict

run-cert:
	$(PYTHON) -m stokes.cli.main cert --output stokes.lock

run-demo:
	$(PYTHON) -m stokes.cli.main audit $(STOKES_TARGET) --non-interactive

# ─── Lint & Quality ──────────────────────────────────────────────────────────

lint:
	@echo "[stokes] Running flake8 lint..."
	$(PYTHON) -m flake8 stokes/ tests/ --max-line-length=120 --extend-ignore=E501 || true

typecheck:
	@echo "[stokes] Running mypy type check..."
	$(PYTHON) -m mypy stokes/ --ignore-missing-imports --no-strict-optional || true

format:
	@echo "[stokes] Formatting with black..."
	$(PYTHON) -m black stokes/ tests/ || true

# ─── Clean ───────────────────────────────────────────────────────────────────

clean:
	find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	find . -type d -name .stokes -exec rm -rf {} + 2>/dev/null || true
	find . -name "*.pyc" -delete 2>/dev/null || true
	find . -name "*.pyo" -delete 2>/dev/null || true
	rm -f stokes.lock CONFORMANCE.md 2>/dev/null || true
	@echo "[stokes] Clean complete."

clean-all: clean
	rm -rf .venv dist build *.egg-info 2>/dev/null || true

# ─── Help ────────────────────────────────────────────────────────────────────

help:
	@echo "Stokes — Autonomous Cross-Boundary Invariant Verification Engine"
	@echo ""
	@echo "Usage: make [target]"
	@echo ""
	@echo "  install          Install stokes in editable mode with dev deps"
	@echo "  test             Run full test suite"
	@echo "  test-fast        Run tests with -x (stop on first failure)"
	@echo "  test-verbose     Run tests with full output"
	@echo "  run-scan         Run stokes scan on dirichlet target"
	@echo "  run-audit        Run stokes audit on dirichlet target"
	@echo "  run-stage-check  Run stokes stage-check with mock catalog"
	@echo "  run-verify       Run stokes verify harness"
	@echo "  run-cert         Run stokes cert and emit stokes.lock"
	@echo "  lint             Run flake8 linter"
	@echo "  typecheck        Run mypy type checker"
	@echo "  clean            Remove build artifacts and cache"
	@echo "  help             Show this help message"
