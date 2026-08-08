/**
 * Custom error classes for pose-telemetry-bridge.
 */

/**
 * Base error class for all PoseTelemetryBridge errors.
 */
export class PoseTelemetryBridgeError extends Error {
  /** Machine-readable error code. */
  readonly code: string;

  constructor(message: string, code = "POSETELEMETRYBRIDGE_ERROR") {
    super(message);
    this.name = "PoseTelemetryBridgeError";
    this.code = code;
  }
}

/**
 * Raised when the SDK is misconfigured.
 */
export class ConfigurationError extends PoseTelemetryBridgeError {
  constructor(message: string) {
    super(message, "CONFIGURATION_ERROR");
    this.name = "ConfigurationError";
  }
}

/**
 * Raised when input validation fails.
 */
export class ValidationError extends PoseTelemetryBridgeError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/**
 * Raised when an operation exceeds its time limit.
 */
export class TimeoutError extends PoseTelemetryBridgeError {
  constructor(message: string) {
    super(message, "TIMEOUT_ERROR");
    this.name = "TimeoutError";
  }
}
