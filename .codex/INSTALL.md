# Codex Installation

Use this repository as a local skill source for Codex-oriented workflows.

1. Clone or open the repository.
2. Copy or reference `AGENTS.md` from projects where Codex should use these skills.
3. Keep `skills/` available to the agent.
4. Ask Codex to inspect `skills/` before planning, reviewing, documenting, or debugging work.

For project-local usage, point Codex at this repository and say:

```text
Use the skill library in this repository. Read AGENTS.md, then inspect skills/ for matching skills before acting.
```
