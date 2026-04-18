---
name: log-validation
description: Use when validating logs, traces, command output, CI output, application logs, or incident evidence before making claims or decisions.
---

# Log Validation

Validate logs as evidence before drawing conclusions.

## Process

1. Identify the claim the logs need to prove or disprove.
2. Capture the exact log source, command, time range, environment, and filters used.
3. Preserve the raw relevant lines before summarizing them.
4. Check ordering, timestamps, correlation IDs, request IDs, exit codes, and severity levels.
5. Separate direct observations from inferences.
6. Look for missing context that could invalidate the conclusion.
7. State the validation result with the evidence and any remaining uncertainty.

## Evidence Rules

- Do not claim success from partial logs.
- Do not ignore warnings, retries, skipped tests, or nonzero exit codes.
- Do not treat absence of an error as proof unless the expected signal would definitely appear.
- Prefer fresh logs from the failing or target path over stale or unrelated output.

## Output Format
Diagram


Use this order:

1. Claim being validated
2. Log source and scope
3. Relevant evidence
4. Inference
5. Remaining gaps or confidence limits
