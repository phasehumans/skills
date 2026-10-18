<p align="center">
  <img src="./assets/logo.svg" alt="december" width="80" height="80" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@trydecember/skills"><img src="https://img.shields.io/npm/v/@trydecember/skills.svg" alt="npm version" /></a>
  <a href="https://skills.sh/phasehumans/skills"><img src="https://skills.sh/b/phasehumans/skills" alt="skills.sh" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/phasehumans/skills.svg" alt="license" /></a>
</p>

December skills is a (so much) better skill set for coding agents. It provides disciplined, human-in-the-loop engineering playbooks for [December](https://github.com/phasehumans/december), Claude Code, Cursor, Codex, and Google Antigravity.

Instead of monolithic, brittle system prompts, December skills breaks down software delivery into composable, testable runbooks that keep developers in control.

**Also documented on the web at <a href="https://trydecember.com/docs/skills" target="_blank">trydecember.com/docs/skills</a>**

---

### The Idea-to-Ship Spine

A disciplined five-stage pipeline from napkin sketch to verified code:

```
/grill-me  ──>  /to-spec (or /plan)  ──>  /to-tickets  ──>  /implement  ──>  /code-review
(Align)         (Plan architecture)       (Decompose)       (TDD slice)      (Verify)
```

1. **/grill-me**: Socratic interview before writing code. Surfaces hidden assumptions, clarifies edge cases, and aligns on contracts.
2. **/to-spec** (or **/plan**): Converts aligned intent into clear technical specifications and step-by-step implementation plans without touching code yet.
3. **/to-tickets**: Decomposes specs and plans into vertical-slice, agent-ready tickets.
4. **/implement**: Executes tickets step-by-step test-first with empirical verification commands.
5. **/code-review**: Audits diffs for architectural rot, smells, regressions, and AGENTS.md compliance.

---

### Playbooks Included

| Skill | Invocation | Description |
| :--- | :--- | :--- |
| **Grill Me** | `/grill-me [topic]` | Socratic pre-implementation interview to sharpen designs |
| **Plan** | `/plan [goal]` | Multi-phase plan with blast radius and verification steps |
| **To Spec** | `/to-spec [context]` | Generates formal PRDs and architecture specifications |
| **To Tickets** | `/to-tickets [spec]` | Decomposes architecture into prioritized vertical slices |
| **Implement** | `/implement [ticket]` | Executes tickets test-first with empirical verification |
| **Code Review** | `/code-review` | Rigorous diff review for quality, regressions, and smells |
| **TDD** | `/tdd [feature]` | Enforces strict Red -> Green -> Refactor test cycles |
| **Handoff** | `/handoff` | Compacts session context into a structured handoff document |
| **Setup Skills** | `/setup-december-skills` | Scaffolds issue tracker, triage labels, and domain docs |

---

### Get Started

#### 1. In December CLI

December has native skill support built in:

```bash
# Add to active project (.december/skills)
december skill add phasehumans/skills

# Or install globally (~/.december/skills)
december skill add phasehumans/skills --global
```

Every skill immediately becomes an in-session slash command (e.g. `/grill-me`, `/plan`, `/code-review`).

#### 2. Across Claude Code, Cursor, Codex, and Antigravity

Install via the open Vercel Skills CLI:

```bash
npx skills add phasehumans/skills
```

#### 3. Via NPM Package

For projects tracking agent skills in `package.json`:

```bash
npm install -D @trydecember/skills
npx skills experimental_sync
```

---

### Compatibility

Every skill conforms to the open `SKILL.md` specification with YAML frontmatter. Compatible with:

- **December CLI** (native)
- **Anthropic Claude Code** (`.claude/skills` / `.agents/skills`)
- **Google Antigravity** (`.gemini/config/skills` / `.agents/skills`)
- **OpenAI Codex** (`.codex/skills`)
- **Cursor & Windsurf** (`.agents/skills`)

---

### Feedback & Bugs

Found a bug or have a playbook suggestion? [Open an issue](https://github.com/phasehumans/skills/issues) or email us at [team@trydecember.com](mailto:team@trydecember.com)
