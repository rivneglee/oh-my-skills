---
name: using-oh-my-skills
description: Use at the start of work in repositories that include Oh My Skills, especially before validating logs, traces, command output, CI output, or incident evidence.
---

# Using Oh My Skills

Before acting, inspect available skills and choose the most relevant workflow.

## Process

1. List `skills/` and identify skills related to the user request.
2. Read the matching `SKILL.md` before doing the work.
3. If multiple skills apply, use the process skill first, then the domain skill.
4. Follow user instructions over skill instructions when they conflict.
5. If no skill applies, continue with normal engineering judgment.

## Selection Rules

- Log, trace, command output, CI output, and incident evidence work should use `log-validation`.
- If no focused skill applies, continue with normal engineering judgment and avoid inventing unavailable workflows.
