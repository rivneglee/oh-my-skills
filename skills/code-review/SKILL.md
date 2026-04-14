---
name: code-review
description: Use when asked to review code, pull requests, diffs, branches, patches, or proposed changes before merge.
---

# Code Review

Review for correctness first. Style and polish are secondary.

## Process

1. Identify the intended behavior from the request, issue, spec, or surrounding code.
2. Inspect the diff and the touched call paths.
3. Look for behavioral regressions, missing edge cases, security issues, data loss risks, and test gaps.
4. Verify with tests or focused commands when practical.
5. Report findings first, ordered by severity, with file and line references.

## Review Output

Use this order:

1. Findings
2. Open questions or assumptions
3. Test coverage and residual risk
4. Brief summary only if useful

If there are no findings, say that directly and mention any verification limits.
