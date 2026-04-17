import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const repositoryUrl = "https://github.com/rivneglee/oh-my-skills";

const requiredFiles = [
  "README.md",
  "CLAUDE.md",
  "AGENTS.md",
  ".gitignore",
  ".gitattributes",
  "package.json",
  ".claude-plugin/plugin.json",
  ".claude-plugin/marketplace.json",
  ".codex/INSTALL.md",
  ".cursor-plugin/plugin.json",
  ".cursor/rules/oh-my-skills.mdc",
  ".github/copilot-instructions.md",
  ".copilot/INSTALL.md",
  "docs/architecture.md",
  "docs/adding-skills.md",
  "docs/platforms.md",
  "docs/superpowers/specs/2026-04-14-cross-agent-skill-repo-design.md",
  "docs/superpowers/plans/2026-04-14-cross-agent-skill-repo.md",
  "skills/using-oh-my-skills/SKILL.md",
  "skills/log-validation/SKILL.md",
  "skills/_template/SKILL.md",
  "scripts/new-skill.mjs",
  "scripts/validate-skills.mjs",
];

const removedFiles = [
  "skills/writing-docs/SKILL.md",
  "skills/code-review/SKILL.md",
  "skills/planning/SKILL.md",
  "skills/systematic-debugging/SKILL.md",
];

const requiredDirs = [
  "agents",
  "commands",
  "docs",
  "docs/superpowers/specs",
  "docs/superpowers/plans",
  "hooks",
  "scripts",
  "skills",
  "tests",
];

const failures = [];

for (const dir of requiredDirs) {
  const fullPath = join(root, dir);
  if (!existsSync(fullPath) || !statSync(fullPath).isDirectory()) {
    failures.push(`missing directory: ${dir}`);
  }
}

for (const file of requiredFiles) {
  const fullPath = join(root, file);
  if (!existsSync(fullPath) || !statSync(fullPath).isFile()) {
    failures.push(`missing file: ${file}`);
  }
}

for (const file of removedFiles) {
  const fullPath = join(root, file);
  if (existsSync(fullPath)) {
    failures.push(`removed starter skill still exists: ${file}`);
  }
}

const skillNames = [
  "using-oh-my-skills",
  "log-validation",
];

for (const skillName of skillNames) {
  const file = `skills/${skillName}/SKILL.md`;
  const fullPath = join(root, file);
  if (!existsSync(fullPath)) {
    continue;
  }

  const content = readFileSync(fullPath, "utf8");
  if (!content.startsWith("---\n")) {
    failures.push(`${file} does not start with YAML frontmatter`);
  }
  if (!content.includes(`name: ${skillName}`)) {
    failures.push(`${file} missing matching name frontmatter`);
  }
  if (!/^description: .+/m.test(content)) {
    failures.push(`${file} missing description frontmatter`);
  }
  if (!content.includes("# ")) {
    failures.push(`${file} missing body heading`);
  }
}

const filesToScan = requiredFiles.filter((file) => existsSync(join(root, file)));
for (const file of filesToScan) {
  const content = readFileSync(join(root, file), "utf8");
  if (/\b(TBD|TODO|FIXME|lorem ipsum)\b|your-org/i.test(content)) {
    failures.push(`${file} contains placeholder text`);
  }
}

const repositoryFiles = [
  "README.md",
  "package.json",
  ".claude-plugin/plugin.json",
  ".cursor-plugin/plugin.json",
  ".codex/INSTALL.md",
  ".copilot/INSTALL.md",
];

for (const file of repositoryFiles) {
  const fullPath = join(root, file);
  if (!existsSync(fullPath)) {
    continue;
  }

  const content = readFileSync(fullPath, "utf8");
  if (!content.includes(repositoryUrl)) {
    failures.push(`${file} missing repository URL ${repositoryUrl}`);
  }
}

if (failures.length > 0) {
  console.error("Structure validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Structure validation passed.");
