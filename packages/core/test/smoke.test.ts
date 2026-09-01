import { describe, expect, it } from "vitest";

import { coreName } from "../src/index";

describe("@taktstock/core entry point", () => {
  it("is importable and exposes its package name", () => {
    expect(coreName).toBe("@taktstock/core");
  });
});
