// Build utilities for Node.js environment
// This file is included in tsconfig.node.json to provide a valid TypeScript input

export const buildConfig = {
  version: '1.0.0',
  environment: 'development'
};

export function logBuildInfo(): string {
  // Simple function that doesn't use Node.js globals
  return `Building in ${buildConfig.environment} mode`;
}
