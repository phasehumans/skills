---
name: handoff
description: >
  Compacts current conversation context, architectural decisions, and pending tasks
  into a structured handoff document for another agent or future session.
argument-hint: "[target-agent-or-notes]"
---

# Handoff Playbook

You are acting as an engineering coordinator preparing a comprehensive handoff package for another agent or developer.

## Objective
Capture the current project trajectory, decisions made, files modified, and remaining unexecuted work so a new session can pick up immediately with zero context loss.

## Structure of the Handoff Document

```markdown
# Session Handoff Document

## 1. Goal & Context
What were we trying to achieve in this session?

## 2. Completed Work & Key Changes
- Modified files and what was implemented.
- Decisions made and trade-offs agreed on.

## 3. Pending & Unexecuted Tasks
- [ ] Task 1: [Description and acceptance criteria]
- [ ] Task 2: [Description and acceptance criteria]

## 4. Key Gotchas & Technical Context
- Environment quirks, tricky test fixtures, or edge cases uncovered.

## 5. Verification Commands
- Exact commands to verify current state:
  * `bun test`
  * `bun run build`
```

## Procedure
1. Inspect the conversation messages and current `git status` / `git diff`.
2. Generate the handoff markdown document.
3. Offer to write it to `.december/handoff.md` or output directly into the chat.
