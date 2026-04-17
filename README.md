# Oh My Skills

Oh My Skills is a cross-agent skill library for coding assistants. It currently focuses on one core workflow: validating logs and command output before agents make claims or decisions.

Repository: https://github.com/rivneglee/oh-my-skills

## Repository Model

- `skills/` is the source of truth. Each skill lives in its own folder with a required `SKILL.md`.
- Platform folders only describe how an agent should discover or load those skills.
- `docs/` explains the repository conventions and supported agent surfaces.
- `scripts/` contains small maintenance tools for creating and validating skills.
- `tests/` contains repository checks that keep the scaffold coherent.

## Current Skill Focus

- `using-oh-my-skills` teaches agents to inspect the library before acting.
- `log-validation` validates logs, traces, command output, CI output, and incident evidence.

## Quick Start

Clone the repo:

```bash
git clone https://github.com/rivneglee/oh-my-skills.git
cd oh-my-skills
```

Run the structure checks:

```bash
npm test
```

Create another skill later:

```bash
npm run new-skill -- api-migration
```

Add instructions to the generated `skills/api-migration/SKILL.md`, then run `npm test` again.

## Skill Shape

Every skill uses this minimum structure:

```text
skills/example-skill/
└── SKILL.md
```

Optional supporting files can live beside `SKILL.md`:

```text
skills/example-skill/
├── SKILL.md
├── references/
├── scripts/
└── assets/
```

Keep `SKILL.md` concise. Move detailed reference material into `references/` and tell the agent when to open it.

## Supported Agent Surfaces

- Claude Code: `.claude-plugin/`
- Codex: `.codex/INSTALL.md`, `AGENTS.md`
- Cursor: `.cursor-plugin/`, `.cursor/rules/`
- GitHub Copilot: `.github/copilot-instructions.md`, `.copilot/`

See `docs/platforms.md` for the intent of each adapter.
