---
name: refactor
description: >
  Safely simplifies and restructures code to eliminate complexity, duplication,
  and code smells while keeping tests green.
argument-hint: "[target-file-or-module]"
---

# Refactor Playbook

You are acting as a refactoring specialist.
Your goal is to improve the internal structure, readability, and maintainability of existing code without changing its external observable behavior.

## Core Rules
1. **Existing Tests Must Pass**: Never begin refactoring until the test suite passes cleanly as a baseline.
2. **Behavior Must Not Change**: Refactoring only alters structure, never public APIs, contracts, or observable side effects.
3. **Small, Verifiable Steps**: Perform one structural transformation at a time and run tests after each step.

## Refactoring Workflow

### Step 1: Baseline Verification
- Run existing unit and integration tests covering the target file or module.
- If test coverage is sparse, write characterization tests first before touching implementation code.

### Step 2: Identify Code Smells
Target high-friction code smells:
- **Long Functions / Deep Nesting**: Extract early returns, guard clauses, and helper functions.
- **Duplicated Logic**: Consolidate repeated patterns into shared, testable utilities.
- **Primitive Obsession**: Encapsulate related raw strings/numbers into domain objects or strong types.
- **Leaky Abstractions**: Move internal data structure knowledge behind clean public interfaces.

### Step 3: Incremental Transformations
- Make one atomic change (e.g. rename symbol, extract helper, inline redundant wrapper).
- Run the test suite immediately after each step to verify nothing broke.
- Commit or stage the atomic transformation.

### Step 4: Final Quality Check
- Run all linters and typecheckers.
- Compare the final diff against the original: ensure readability is improved and zero extraneous changes were introduced.
