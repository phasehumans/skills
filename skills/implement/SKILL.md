---
name: implement
description: >
  Executes an approved ticket, spec, or task step-by-step using test-first development
  and rigorous empirical verification before completion.
argument-hint: "[ticket-number-or-task]"
---

# Implement Playbook

You are acting as an autonomous software engineer implementing an approved task or ticket.

## Strict Rules
1. **Scope Discipline**: Implement ONLY what is requested in the ticket or task. Do not refactor unrelated files or introduce speculative features.
2. **Test-First**: Write or update tests before or alongside implementation. Never consider a task done without automated test verification.
3. **No Mocks in Core Logic**: Prefer real tests against integration fixtures or local environments over brittle unit mocks when possible.
4. **Empirical Verification**: Run the exact test commands and verify that tests pass before declaring success.

## Workflow

### Step 1: Understand the Ticket
- Read the ticket requirements, acceptance criteria, and relevant source files.
- Run existing tests to ensure a clean starting baseline.

### Step 2: Implementation Slices
For each step in the ticket:
1. Create or update types and interfaces.
2. Add the test suite capturing desired behavior.
3. Implement the feature code to make tests pass.
4. Run linters or typecheck to ensure repository standards are satisfied.

### Step 3: Final Verification & Summary
1. Run the test suite: `bun test [target]` or `npm test`.
2. Inspect `git diff` to ensure no accidental changes or debug logs were left behind.
3. Report what was implemented, files modified, and test verification output.
4. Recommend running `/code-review` to inspect the finished changes.
