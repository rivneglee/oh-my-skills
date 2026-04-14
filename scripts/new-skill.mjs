import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rawName = process.argv[2];

if (!rawName) {
  console.error("Usage: npm run new-skill -- <skill-name>");
  process.exit(1);
}

const name = rawName
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

if (!name || !/^[a-z0-9][a-z0-9-]*[a-z0-9]$|^[a-z0-9]$/.test(name)) {
  console.error(`Invalid skill name: ${rawName}`);
  process.exit(1);
}

const skillDir = join(process.cwd(), "skills", name);
const skillFile = join(skillDir, "SKILL.md");

if (existsSync(skillFile)) {
  console.error(`Skill already exists: skills/${name}/SKILL.md`);
  process.exit(1);
}

mkdirSync(skillDir, { recursive: true });
writeFileSync(
  skillFile,
  `---\nname: ${name}\ndescription: Use when this ${name} workflow is relevant to the user's request.\n---\n\n# ${name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")}\n\n## Process\n\n1. Define when this skill applies.\n2. List the required workflow steps.\n3. Describe how to verify completion.\n`,
);

console.log(`Created skills/${name}/SKILL.md`);
