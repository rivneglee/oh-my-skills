import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const skillsDir = join(root, "skills");
const failures = [];
const namePattern = /^[a-z0-9][a-z0-9-]*[a-z0-9]$|^[a-z0-9]$/;

for (const entry of readdirSync(skillsDir)) {
  const skillDir = join(skillsDir, entry);
  if (!statSync(skillDir).isDirectory() || entry.startsWith("_")) {
    continue;
  }

  if (!namePattern.test(entry)) {
    failures.push(`invalid skill directory name: ${entry}`);
    continue;
  }

  const skillFile = join(skillDir, "SKILL.md");
  let content;
  try {
    content = readFileSync(skillFile, "utf8");
  } catch {
    failures.push(`missing SKILL.md for ${entry}`);
    continue;
  }

  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontmatterMatch) {
    failures.push(`${entry}/SKILL.md missing YAML frontmatter`);
    continue;
  }

  const frontmatter = frontmatterMatch[1];
  if (!new RegExp(`^name: ${entry}$`, "m").test(frontmatter)) {
    failures.push(`${entry}/SKILL.md frontmatter name must match directory`);
  }
  if (!/^description: .{20,}$/m.test(frontmatter)) {
    failures.push(`${entry}/SKILL.md description must be at least 20 characters`);
  }
  if (!/^# .+/m.test(content.slice(frontmatterMatch[0].length))) {
    failures.push(`${entry}/SKILL.md missing body heading`);
  }
}

if (failures.length > 0) {
  console.error("Skill validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Skill validation passed.");
