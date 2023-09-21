import { describe, it } from "vitest";
import { callFactory } from "../src/module/utils";

describe("Utils tests", () => {
  it("callFactory - will fail", () => {
    callFactory();
  });
});
