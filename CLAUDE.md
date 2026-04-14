# Oh My Skills Agent Instructions

This repository contains a portable skill library for coding agents.

## Before Acting

1. Inspect `skills/` for a skill that matches the user request.
2. If a skill applies, read its `SKILL.md` before doing related work.
3. Follow the skill instructions unless the user gives a conflicting instruction.
4. Prefer repository scripts over ad hoc rewrites when maintaining this library.

## Skill Authoring Rules

- Each skill must live in `skills/<skill-name>/SKILL.md`.
- Skill names use lowercase letters, digits, and hyphens.
- `SKILL.md` must start with YAML frontmatter containing `name` and `description`.
- Keep skill bodies focused on instructions an agent needs at task time.
- Put longer details in `references/`, generated assets in `assets/`, and deterministic helpers in `scripts/`.

## Validation

Run:

```bash
npm test
```

The validation checks repository structure and skill frontmatter.
