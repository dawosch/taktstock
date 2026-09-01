# 01: Monorepo scaffold & tooling

**What to build:** A working npm-workspaces monorepo containing the two packages `@taktstock/core` (pure TypeScript engraving engine, zero React) and `@taktstock/react` (React bindings). TypeScript strict mode enforced, builds wired (tsup for core, Vite library mode for react), Vitest running green in both packages, Changesets initialized. Nothing domain-specific yet — this is the prefactoring so every later ticket lands green.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] `npm test` runs green in both packages
- [ ] Both packages build (tsup / Vite library mode) and can be imported independently
- [ ] TypeScript strict mode enforced, zero errors
- [ ] Changesets initialized; adding an empty changeset works
- [ ] Each package has its own package.json and entry point
