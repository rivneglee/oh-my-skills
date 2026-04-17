# Cross-Agent Skill Repo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the initial cross-agent skill repository scaffold focused on the `log-validation` skill.

**Architecture:** Keep `skills/` as the canonical catalog and use thin platform adapter files for Claude Code, Codex, Cursor, and GitHub Copilot. Start with `log-validation` as the first focused domain skill and use dependency-free Node scripts for validation and skill generation.

**Tech Stack:** Markdown, JSON, Node.js built-in modules.

---

### Task 1: Structure Validation

**Files:**
- Create: `tests/validate-structure.mjs`

- [x] **Step 1: Write the failing validation script**

Create a Node script that asserts required directories, adapter files, the focused starter skill, and docs exist.

- [x] **Step 2: Run validation to verify it fails**

Run: `node tests/validate-structure.mjs`
Expected: failure listing missing scaffold files.

### Task 2: Repository Scaffold

**Files:**
- Create: root instructions, platform adapters, docs, scripts, and starter skills.

- [x] **Step 1: Add scaffold files**

Create the platform-neutral `log-validation` skill catalog plus thin adapter files.

- [ ] **Step 2: Run validation to verify it passes**

Run: `npm test`
Expected: structure and skill validation pass.
