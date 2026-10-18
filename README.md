# December Skills & Playbooks

Official collection of disciplined software engineering playbooks and agent skills for [December](https://github.com/phasehumans/december), Claude Code, and Google Antigravity.

Inspired by [Matt Pocock's skills](https://github.com/mattpocock/skills), this repository replaces fragile, monolithic system prompts and hardcoded CLI commands with modular, human-in-the-loop markdown runbooks.

---

## The Idea-to-Ship Spine

```
/grill-me  ──>  /to-spec (or /plan)  ──>  /to-tickets  ──>  /implement  ──>  /code-review
(Align)         (Plan architecture)       (Decompose)       (TDD slice)      (Verify)
```

1. **/grill-me**: Socratic interview before implementation. Probes architectural choices, contracts, and edge cases using interactive questions.
2. **/to-spec** (or **/plan**): Converts aligned ideas into formal technical specifications and step-by-step implementation plans without touching code yet.
3. **/to-tickets**: Decomposes a specification or plan into vertical-slice, agent-ready tickets.
4. **/implement**: Executes tickets step-by-step test-first with empirical verification before finishing.
5. **/code-review**: Inspects changes and diffs for architectural rot, smells, regressions, and security issues.

---

## Additional Skills

- **/tdd**: Drives feature development through strict Test-Driven Development (Red -> Green -> Refactor) cycles.
- **/handoff**: Compacts session state, decisions, and unexecuted tasks into a handoff artifact for another agent.
- **/setup-december-skills**: Configures a repository for autonomous agent engineering (issue tracker, triage labels, domain docs).

---

## Installation

### Using December CLI
```bash
# Install globally (~/.december/skills)
december skill add phasehumans/skills --global

# Or install in your active project (.december/skills)
december skill add phasehumans/skills
```

### Using Vercel Skills CLI
```bash
npx skills add phasehumans/skills
```

---

## Compatibility

Every skill in this repository adheres to the cross-agent `SKILL.md` specification with YAML frontmatter:
- **December CLI Agent** (native support)
- **Anthropic Claude Code** (`.claude/skills` / `.agents/skills`)
- **Google Antigravity** (`.gemini/config/skills` / `.agents/skills`)
- **OpenAI Codex**

---

## License

MIT
