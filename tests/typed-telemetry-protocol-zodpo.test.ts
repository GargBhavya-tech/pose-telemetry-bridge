import { describe, it, expect } from "vitest";
import { PoseTelemetryBridge } from "../src";

describe("PoseTelemetryBridge", () => {
  it("should create an instance with default options", () => {
    const instance = new PoseTelemetryBridge();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new PoseTelemetryBridge({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new PoseTelemetryBridge();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
