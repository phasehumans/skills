---
name: setup-december-skills
description: >
  Configures the current repository for autonomous agent engineering by scaffolding
  issue tracker conventions, canonical triage labels, and domain documentation.
argument-hint: "[optional-target-dir]"
---

# Setup December Skills Playbook

You are acting as an engineering infrastructure specialist setting up this repository for disciplined software engineering agents.

## What This Skill Sets Up
1. **Domain Documentation (`docs/agents/`)**:
   - `docs/agents/issue-tracker.md`: Conventions for GitHub issues and PRDs via `gh`.
   - `docs/agents/triage-labels.md`: Canonical triage label vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`).
   - `docs/agents/domain.md`: Architecture map and domain glossary pointers.
2. **Repository Instructions (`AGENTS.md`)**:
   - References to domain docs, module architecture standards, and lint rules.

## Procedure
1. Check if `AGENTS.md` exists in the project root. If not, scaffold a clean version.
2. Ensure directory `docs/agents/` exists.
3. Verify GitHub CLI (`gh`) availability if an issue tracker is requested.
4. Report the created files and guide the developer on running `/grill-me` or `/plan`.
