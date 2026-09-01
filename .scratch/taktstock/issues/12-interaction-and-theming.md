# 12: Interaction & theming

**What to build:** Click and hover on notes via `onNoteClick(id, note, event)` / `onNoteHover(...)`, backed by stable `data-note-id` attributes on the SVG (hit targets survive line breaks and re-layout). Colors and theming become configurable: staff, noteheads, stems, highlights.

**Blocked by:** 04-relative-width, 05-rhythm-and-measures

**Status:** ready-for-agent

- [ ] Click/hover events expose note id and the original event
- [ ] SVG elements carry stable `data-note-id` attributes
- [ ] Colors configurable for staff, notes, stems and highlights
- [ ] Demo: clicking a note colors it
- [ ] Interaction works across system breaks and after re-layout
