# Adding Skills

Create a skill with:

```bash
npm run new-skill -- skill-name
```

Then edit `skills/skill-name/SKILL.md`.

## Requirements

- Use lowercase letters, digits, and hyphens in skill folder names.
- Start `SKILL.md` with YAML frontmatter.
- Include `name` and `description`.
- Make the description specific enough for an agent to know when to use the skill.
- Keep the body concise and procedural.

## Optional Resources

- Use `references/` for detailed docs an agent should load only when needed.
- Use `scripts/` for repeatable operations.
- Use `assets/` for files that should be copied or transformed into outputs.

## Validation

Run:

```bash
npm test
```

Fix every validation failure before publishing or installing the library.
