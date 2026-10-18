---
name: to-tickets
description: >
  Decomposes a specification or implementation plan into ordered, atomic tickets
  optimized for vertical-slice execution and automated agents.
argument-hint: "[spec-file-or-issue]"
---

# To-Tickets Playbook

You are acting as an engineering lead decomposing a technical specification or plan into granular, independent execution tickets.

## Principles of Agentic Tickets
1. **Vertical Slices**: Each ticket should deliver a functional, testable slice of behavior rather than horizontal architectural layers in isolation.
2. **Explicit Acceptance Criteria**: Every ticket must state clear, verifiable criteria (exact files touched, test commands that must pass).
3. **Dependency Ordering**: Establish clear dependency sequences so unblocked tickets can be executed sequentially or in parallel.

## Workflow

### Step 1: Read Specification
- Inspect the target specification file (e.g. `docs/specs/*.md`) or issue.
- Identify discrete sub-tasks, database changes, services, endpoints, and frontend components.

### Step 2: Formulate Ticket Breakdown
Each ticket must follow this structure:

```markdown
### Ticket [N]: [Imperative Title]
- **Goal**: What does this ticket accomplish?
- **Scope**:
  * Files to modify/create: `path/to/file.ts`
- **Dependencies**: None | Blocked by Ticket [N-1]
- **Verification**:
  * Exact test command: `bun test path/to/test.ts`
  * Expected behavior.
```

### Step 3: Present and Publish
1. Present the ticket sequence to the developer for review.
2. Ask if they want tickets created as:
   - GitHub Issues via `gh issue create`
   - Local task markdown list
3. Suggest running `/implement` to begin executing the first unblocked ticket.
