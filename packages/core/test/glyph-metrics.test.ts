import { describe, expect, it } from "vitest";

import bravuraJson from "../src/bravura/bravura.json";
import type { BravuraMetadata } from "../src/bravura";
import { glyphMetrics } from "../src/index";

const metadata = bravuraJson as unknown as BravuraMetadata;

describe("glyphMetrics", () => {
  it("returns gClef metrics from the SMuFL metadata, in staff spaces", () => {
    const metrics = glyphMetrics("gClef");
    expect(metrics?.advanceWidth).toBe(2.684);
    expect(metrics?.bBoxNE).toEqual({ x: 2.684, y: 4.392 });
    expect(metrics?.bBoxSW).toEqual({ x: 0, y: -2.632 });
  });

  it("returns noteheadBlack metrics", () => {
    const metrics = glyphMetrics("noteheadBlack");
    expect(metrics?.advanceWidth).toBe(1.18);
    expect(metrics?.bBoxNE).toEqual({ x: 1.18, y: 0.5 });
    expect(metrics?.bBoxSW).toEqual({ x: 0, y: -0.5 });
  });

  it("returns undefined for glyphs the font does not define", () => {
    expect(glyphMetrics("notAGlyph")).toBeUndefined();
  });

  it("pins the vendored Bravura version", () => {
    expect(metadata.fontVersion).toBe(1.482);
  });

  it("stays consistent with the vendored SMuFL metadata across glyphs", () => {
    for (const name of [
      "accidentalSharp",
      "accidentalFlat",
      "timeSig4",
      "restQuarter",
      "noteheadHalf",
    ]) {
      const metrics = glyphMetrics(name);
      const rawBBox = metadata.glyphBBoxes[name];
      const rawAdvance = metadata.glyphAdvanceWidths[name];
      expect(metrics).toBeDefined();
      expect(metrics?.advanceWidth).toBe(rawAdvance);
      expect(metrics?.bBoxNE).toEqual({
        x: rawBBox?.bBoxNE[0],
        y: rawBBox?.bBoxNE[1],
      });
      expect(metrics?.bBoxSW).toEqual({
        x: rawBBox?.bBoxSW[0],
        y: rawBBox?.bBoxSW[1],
      });
      expect(metrics!.bBoxNE.y).toBeGreaterThan(metrics!.bBoxSW.y);
      expect(metrics!.bBoxNE.x).toBeGreaterThanOrEqual(metrics!.bBoxSW.x);
    }
  });
});
