.DEFAULT_GOAL := help

help: ## List available commands
	@grep -E '^[a-zA-Z_-]+:.*##' $(MAKEFILE_LIST) | awk -F ':.*## ' '{printf "  %-12s %s\n", $$1, $$2}'

install: ## Install Hugo via Homebrew
	brew install hugo

server: ## Run local dev server with live reload
	@command -v hugo >/dev/null 2>&1 || { echo "hugo is not installed. Run 'make install' first."; exit 1; }
	hugo server -D --ignoreCache --disableFastRender --noHTTPCache --watch --minify

doctor: ## Check if Hugo is installed
	@command -v hugo >/dev/null 2>&1 && echo "hugo: OK ($(hugo version))" || echo "hugo: NOT INSTALLED (run 'make install')"
