import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { glyphMetrics } from "@taktstock/core";

function Probe() {
  const clef = glyphMetrics("gClef");
  return <span>gClef:{clef ? clef.advanceWidth : "missing"}</span>;
}

describe("@taktstock/react entry point", () => {
  it("renders a component that pulls glyph metrics from @taktstock/core", () => {
    render(<Probe />);
    screen.getByText("gClef:2.684");
  });
});
