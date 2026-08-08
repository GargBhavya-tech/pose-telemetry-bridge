# pose-telemetry-bridge

Streams pose-tracking data to web games via WebSocket with a stable, typed message schema.

## Installation

```bash
npm install pose-telemetry-bridge
```

## Quick Start

```typescript
import { PoseTelemetryBridge } from "pose-telemetry-bridge";

const instance = new PoseTelemetryBridge();
const result = await instance.run();
console.log(result);
```

## Features

- Typed telemetry protocol (zod-powered runtime validation)
- WebSocket server/client helpers with reconnect and buffering
- Smoothing and rate-limiting utilities for jittery pose streams
- Debug overlay feed (FPS, dropped frames, latency)

## API Reference

### `PoseTelemetryBridge`

#### Constructor

```typescript
new PoseTelemetryBridge(options?: PoseTelemetryBridgeOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<PoseTelemetryBridgeResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
