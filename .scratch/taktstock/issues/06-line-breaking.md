# 06: Line breaking (reflow)

**What to build:** When the parent is narrow, measures flow onto a second staff line (multiple systems); a wide container fits them on one. The layout decision is a pure function of score and width — no DOM measurement inside layout. Demo: shrink the container and watch measures wrap onto new systems.

**Blocked by:** 04-relative-width, 05-rhythm-and-measures

**Status:** ready-for-agent

- [ ] Measures wrap onto new systems based purely on width
- [ ] Systems stack vertically with a consistent staff distance
- [ ] Layout stays deterministic: same score + width → same tree
- [ ] Golden-image snapshots: same melody at two widths, one vs. two systems
