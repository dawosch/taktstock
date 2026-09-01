# 03: Tracer bullet — one note, end to end

**What to build:** The complete path from data to pixels: a minimal score object (a single note with pitch, duration and an optional `id`) goes through the pure layout function `layout(score, width) → LayoutTree`, which describes staff lines, a treble clef and one notehead. A React component renders that tree as SVG. Golden-image snapshot test plus an SSR smoke test. Note `id`s exist in the data model from day one so interaction can build on them later.

**Blocked by:** 02-bravura-glyph-metrics

**Status:** ready-for-agent

- [ ] `layout(score, width)` returns a LayoutTree describing staff lines, clef and one notehead
- [ ] React component renders the LayoutTree as SVG
- [ ] Notes carry an optional `id` in the data model
- [ ] Golden-image snapshot test passes
- [ ] SSR smoke test: `renderToString` produces valid SVG with no DOM measurement
