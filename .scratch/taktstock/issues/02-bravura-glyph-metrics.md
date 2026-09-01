# 02: Bravura integration & glyph metrics

**What to build:** Bravura ships as a bundled webfont together with its SMuFL metadata, and the core package exposes glyph metrics (bounding box, advance width) by glyph name — loaded from the metadata file, never measured from a rendered font. Layout can therefore be computed before any font loads: deterministic, SSR-safe. A small demo page proves the font renders.

**Blocked by:** 01-scaffold-and-tooling

**Status:** ready-for-agent

- [ ] Bravura woff2 ships with the packages
- [ ] Core API returns bbox + advance width for a glyph by SMuFL name
- [ ] Metrics come from the metadata file, not runtime measurement (SSR-safe)
- [ ] Unit test reads metrics for known glyphs (e.g. gClef, noteheadBlack)
- [ ] Demo page renders glyphs in Bravura
