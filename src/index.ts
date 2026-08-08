/**
 * pose-telemetry-bridge
 * Streams pose-tracking data to web games via WebSocket with a stable, typed message schema.
 */

export { PoseTelemetryBridge } from "./typed-telemetry-protocol-zodpo";
export type { PoseTelemetryBridgeOptions, PoseTelemetryBridgeResult } from "./types";
export { PoseTelemetryBridgeError, ConfigurationError, ValidationError } from "./errors";
