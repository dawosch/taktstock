import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import fontUrl from "../fonts/Bravura.woff2?url";

const bravuraCss = readFileSync(
  resolve(process.cwd(), "src/bravura.css"),
  "utf8",
);

describe("Bravura webfont", () => {
  it("ships an @font-face declaration pointing at the bundled woff2", () => {
    expect(bravuraCss).toContain("@font-face");
    expect(bravuraCss).toContain("Bravura");
    expect(bravuraCss).toContain("Bravura.woff2");
  });

  it("ships the woff2 as an importable asset", () => {
    expect(fontUrl.endsWith("Bravura.woff2")).toBe(true);
  });
});
