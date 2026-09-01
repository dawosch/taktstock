import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { coreName } from "@taktstock/core";
import { reactName } from "../src/index";

function Probe() {
  return (
    <span>
      {reactName}:{coreName}
    </span>
  );
}

describe("@taktstock/react entry point", () => {
  it("is importable and exposes its package name", () => {
    expect(reactName).toBe("@taktstock/react");
  });

  it("renders a component that pulls in @taktstock/core via the workspace", () => {
    render(<Probe />);
    screen.getByText("@taktstock/react:@taktstock/core");
  });
});
