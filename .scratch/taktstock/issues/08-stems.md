# 08: Stems & stem direction

**What to build:** Every note value that needs a stem gets one, with direction chosen automatically from the note's position relative to the middle staff line. A per-note override (`stem: "up" | "down"`) exists in the data model from the start.

**Blocked by:** 05-rhythm-and-measures

**Status:** ready-for-agent

- [ ] Stems render on all note values that need them
- [ ] Direction is automatic (middle-line rule)
- [ ] Per-note override for stem direction
- [ ] Golden-image snapshot covering both directions
