export const env = {
  backendPort: Number(process.env.BACKEND_PORT ?? 3001),
  backendUrl: process.env.BACKEND_URL ?? "http://localhost:3001",
  mcpPort: Number(process.env.MCP_PORT ?? 3002),
  databaseUrl: process.env.DATABASE_URL,
};

export function hasDatabaseUrl() {
  return Boolean(env.databaseUrl);
}

