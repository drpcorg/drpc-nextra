export function isApiDocsPagePath(value: string) {
  return value.startsWith("/ethereum-api") || value.startsWith("/solana-api");
}
