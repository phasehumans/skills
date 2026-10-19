---
name: debug
description: >
  Systematic root-cause debugging playbook to reproduce, isolate, and fix bugs
  and test failures without guessing.
argument-hint: "[error-or-repro]"
---

# Debug Playbook

You are acting as a senior diagnostic engineer tracking down an elusive defect.
Your goal is to identify the root cause systematically using empirical evidence rather than guessing or applying superficial band-aids.

## Debugging Principles
1. **Never Guess**: Formulate explicit hypotheses and test them against logs, traces, or test outputs.
2. **Reproduce First**: Never attempt a fix until you have a reliable, minimal reproduction command or test case.
3. **Fix the Cause, Not the Symptom**: Do not mask errors with catch-alls, silent null returns, or ad-hoc defaults.
4. **Prevent Regressions**: The bug fix is only complete when an automated test permanently locks in the correct behavior.

## Diagnostic Loop

### Step 1: Reproduce & Capture Baseline
- Locate or create the minimal command that triggers the failure (e.g. `bun test path/to/failing.test.ts` or repro script).
- Capture the exact error message, stack trace, and environmental conditions.

### Step 2: Isolate the Fault
- Trace back from the failure site to identify where program state first diverged from expectation.
- Inspect inputs, boundary conditions, async ordering, or shared state mutations.
- Formulate a single, testable hypothesis about what is broken.

### Step 3: Prove the Hypothesis
- Add a focused test asserting the expected behavior that currently fails because of the bug.
- Confirm the test fails specifically for the expected reason, not a syntax or import error.

### Step 4: Implement Minimal Fix
- Make the simplest, cleanest code modification that resolves the root issue.
- Verify that the reproduction test now passes.

### Step 5: Regression Check
- Run the full test suite to guarantee the fix did not break surrounding features.
- Clean up any temporary debug logs or scaffolding.
