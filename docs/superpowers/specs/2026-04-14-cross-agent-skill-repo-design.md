# Cross-Agent Skill Repo Design

## Goal

Initialize a Superpowers-style skill repository that can serve Claude Code, Codex, Cursor, GitHub Copilot, and other agents from one canonical skill catalog.

## Architecture

The `skills/` directory is the source of truth. Each skill is platform-neutral and contains a required `SKILL.md` with frontmatter and procedural instructions. Agent-specific files only explain discovery and loading.

## Initial Scope

The scaffold includes starter skills for using the library, writing docs, reviewing code, planning work, and debugging. It also includes documentation, validation scripts, and placeholder-free adapter metadata.

## Validation

Validation is script-based and dependency-free. `npm test` checks required files, starter skill frontmatter, and skill naming conventions.
