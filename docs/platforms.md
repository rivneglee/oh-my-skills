# Platform Adapters

The repository keeps skills portable and exposes small adapters for each agent surface.

## Claude Code

`.claude-plugin/plugin.json` points Claude-style plugin systems at `skills/`, `agents/`, `commands/`, and `hooks/`.

## Codex

Codex uses repository instructions and local context. `AGENTS.md` and `.codex/INSTALL.md` tell Codex to inspect `skills/` before acting.

## Cursor

Cursor can read `.cursor/rules/oh-my-skills.mdc` as an always-on rule. `.cursor-plugin/plugin.json` mirrors the plugin metadata shape for Cursor plugin workflows.

## GitHub Copilot

GitHub Copilot reads `.github/copilot-instructions.md`. `.copilot/INSTALL.md` captures CLI or plugin-style setup notes.

## Other Agents

Agents without a dedicated adapter can still use this repo by reading `README.md`, then loading the matching `skills/<name>/SKILL.md`.
