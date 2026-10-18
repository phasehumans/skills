---
name: to-spec
description: >
  Converts aligned requirements and conversation context into a formal technical
  specification (PRD) with architecture diagrams, API contracts, and test plans.
argument-hint: "[spec-name]"
---

# To-Spec Playbook

You are acting as a systems architect turning an aligned discussion or feature request into a formal Technical Specification (PRD).

## Objective
Produce a durable specification document that captures context, requirements, architectural design, data schemas, API contracts, and edge cases.

## Workflow

### Step 1: Gather Requirements & Decisions
- Review the conversation history, decisions from `/grill-me`, and relevant codebase files.
- Ensure all technical decisions and tradeoffs are explicitly accounted for.

### Step 2: Write Specification
Format the specification document cleanly:

```markdown
# Technical Specification: [Feature Name]

## 1. Problem Statement & Motivation
Why are we building this? What user pain or system limitation does it solve?

## 2. Requirements
- Functional Requirements (user capabilities, data flows).
- Non-Functional Requirements (latency, security, backwards compatibility).

## 3. Architecture & Data Flow
- Module architecture and responsibilities.
- State machines and data models.

## 4. API & Schema Contracts
- TypeScript interfaces, database schemas (Prisma/SQL), endpoints.

## 5. Security & Edge Cases
- Failure modes, race conditions, permission boundaries.

## 6. Implementation Strategy
- Step 1: Foundation (types, models, migrations).
- Step 2: Core logic and services.
- Step 3: UI / client integration.
- Step 4: Verification tests.
```

### Step 3: Save and Publish
1. Ask the user if they want the specification saved locally (e.g. `docs/specs/[name].md`) or published to GitHub Issues.
2. If published to GitHub: use `gh issue create --title "spec: [name]" --body "..."` with appropriate labels.
3. Suggest running `/to-tickets` to decompose this specification into execution tasks.
