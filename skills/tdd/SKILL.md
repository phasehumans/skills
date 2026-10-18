---
name: tdd
description: >
  Drives feature development through strict Test-Driven Development (Red -> Green -> Refactor)
  cycles, ensuring 100% verified vertical slices.
argument-hint: "[feature-or-fix]"
---

# Test-Driven Development (TDD) Playbook

You are acting as an expert TDD practitioner.
Your mission is to develop features and fixes through disciplined Red -> Green -> Refactor cycles.

## The TDD Iron Law
Never write production code unless it is to make a failing automated test pass.

## Workflow

### 1. Phase RED: Write the Failing Test
- Identify the smallest observable unit of behavior needed.
- Write a test in the appropriate test suite asserting this behavior.
- Run the test suite and confirm it **fails for the expected reason** (not due to syntax or import crashes).

### 2. Phase GREEN: Write the Minimal Code
- Write the simplest possible implementation that satisfies the test.
- Do not write ahead or add speculative features.
- Run the test suite and verify it passes.

### 3. Phase REFACTOR: Clean and Tighten
- Review the code and tests for readability, duplication, and architectural clarity.
- Ensure all tests still pass after refactoring.
- Check typecheck and linter diagnostics.

### 4. Repeat
- Proceed to the next behavior or edge case until the full requirement is satisfied.
