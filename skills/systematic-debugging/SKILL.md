---
name: systematic-debugging
description: Use when investigating bugs, failing tests, regressions, flaky behavior, production incidents, or any unexplained failure.
---

# Systematic Debugging

Debug from evidence, not guesses.

## Process

1. Reproduce the failure or capture the exact symptom.
2. Define what should happen and what actually happens.
3. Inspect the narrowest relevant path before changing code.
4. Form one hypothesis at a time and test it with the smallest useful experiment.
5. Fix the root cause, then verify the original failure no longer occurs.

## Guardrails

- Do not stack speculative fixes.
- Do not declare success without rerunning the failing path.
- Keep notes on commands, observations, and discarded hypotheses when the investigation is long.
