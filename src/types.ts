/**
 * Configuration options for PoseTelemetryBridge.
 */
export interface PoseTelemetryBridgeOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: Typed telemetry protocol (zod-powered runtime validation)
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: WebSocket server/client helpers with reconnect and buffering
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Smoothing and rate-limiting utilities for jittery pose streams
   */
  feature3?: Record<string, unknown>;

  /**
   * Configuration for: Debug overlay feed (FPS, dropped frames, latency)
   */
  feature4?: Record<string, unknown>;
}

/**
 * Result returned by PoseTelemetryBridge operations.
 */
export interface PoseTelemetryBridgeResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
