# Architecture

Oh My Skills separates reusable agent behavior from platform-specific loading.

## Source Of Truth

`skills/` is canonical. A skill must be understandable without knowing which agent loaded it. Platform-specific details belong in adapter folders, not in the skill body.

## Adapter Folders

- `.claude-plugin/` describes plugin metadata for Claude-style plugin discovery.
- `.codex/` contains setup instructions for Codex users.
- `.cursor-plugin/` and `.cursor/rules/` provide Cursor-facing metadata and always-on guidance.
- `.github/copilot-instructions.md` and `.copilot/` provide Copilot-facing guidance.

## Supporting Areas

- `agents/` can hold reusable reviewer or worker prompts.
- `commands/` can hold command-style workflows.
- `hooks/` can hold lifecycle hook definitions for platforms that support hooks.
- `scripts/` holds deterministic maintenance tools.
- `tests/` holds checks for repository shape and skill metadata.

The initial scaffold keeps these areas light so the repo can grow without committing to unused automation.
