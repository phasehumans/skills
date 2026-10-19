---
name: pr-ready
description: >
  Prepares a polished, verified pull request by running checks, auditing the diff,
  and drafting a concise PR description.
argument-hint: "[target-branch]"
---

# PR Ready Playbook

You are preparing a feature branch for review and merge.
Your objective is to ensure the branch passes all verification checks, contains no accidental clutter, and includes a clear, helpful pull request summary.

## Preparation Steps

### Step 1: Verification Gate
Run all project verification commands before staging:
- Type checking (e.g. `tsc --noEmit` or `bun run typecheck`)
- Linting and format checks (e.g. `npm run lint` or `biome check`)
- Test suites (e.g. `bun test` or `npm test`)

Do not proceed if any check fails.

### Step 2: Clean Up Diffs
Inspect the git diff against the target branch (`git status`, `git diff`):
- Remove leftover `console.log`, debugging breakpoints, and temporary scratch files.
- Verify no untracked secrets, `.env` files, or binary artifacts are staged.
- Ensure only files relevant to the feature or bug fix are included.

### Step 3: Generate Pull Request Summary
Draft a clean, structured PR description:

```markdown
## Overview
Brief 1-2 sentence description explaining the purpose of the PR and the problem it solves.

## Key Changes
- High-level change 1
- High-level change 2

## Verification
- Commands executed: `bun test`, `npm run lint`
- Results: all tests passing, zero lint warnings
```
