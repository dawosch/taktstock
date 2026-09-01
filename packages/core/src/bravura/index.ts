import bravuraJson from "./bravura.json";

export interface Point {
  x: number;
  y: number;
}

export interface BBoxJson {
  readonly bBoxNE: [number, number];
  readonly bBoxSW: [number, number];
}

export interface BravuraMetadata {
  readonly fontName: string;
  readonly fontVersion: number;
  readonly glyphBBoxes: Readonly<Record<string, BBoxJson>>;
  readonly glyphAdvanceWidths: Readonly<Record<string, number>>;
}

const metadata = bravuraJson as unknown as BravuraMetadata;

export interface GlyphMetrics {
  bBoxNE: Point;
  bBoxSW: Point;
  advanceWidth: number;
}

const toPoint = ([x, y]: readonly [number, number]): Point => ({ x, y });

export function glyphMetrics(glyphName: string): GlyphMetrics | undefined {
  const bbox = metadata.glyphBBoxes[glyphName];
  const advanceWidth = metadata.glyphAdvanceWidths[glyphName];
  if (!bbox || advanceWidth === undefined) {
    return undefined;
  }
  return {
    bBoxNE: toPoint(bbox.bBoxNE),
    bBoxSW: toPoint(bbox.bBoxSW),
    advanceWidth,
  };
}
