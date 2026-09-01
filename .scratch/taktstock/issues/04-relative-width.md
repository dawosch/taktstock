# 04: Relative width — the core feature

**What to build:** The component takes its width from its parent element. A ResizeObserver (debounced) re-runs layout at the new width and spacing adapts proportionally — no fixed width prop, no scaling of glyph size. Unlike VexFlow, the score is fluid. For SSR, an explicit initial width prop produces the first layout; hydration corrects it from the real container size.

**Blocked by:** 03-tracer-single-note-e2e

**Status:** ready-for-agent

- [ ] Component fills parent width with no width prop required
- [ ] Layout re-runs debounced on container resize
- [ ] Spacing adapts proportionally; glyph sizes stay constant
- [ ] SSR smoke test passes with an explicit initial width
- [ ] Golden-image snapshots for narrow and wide containers
