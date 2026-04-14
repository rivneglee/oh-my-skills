---
name: planning
description: Use when turning a feature idea, bugfix, migration, refactor, or ambiguous request into a concrete implementation plan.
---

# Planning

Convert intent into small, verifiable engineering steps.

## Process

1. Inspect current repository structure and relevant files.
2. Clarify scope when the request is ambiguous or risky.
3. Propose the smallest design that satisfies the goal.
4. Break work into steps that each have a clear file target and verification command.
5. Include test-first steps for behavior changes.

## Plan Standards

- Name exact files to create or modify.
- State what each file is responsible for.
- Include commands and expected outcomes.
- Keep unrelated refactors out of scope.
- Prefer incremental verification over one final check.
