export function isApiDocsPagePath(value: string) {
  return (
    value.startsWith("/ethereum-api") ||
    value.startsWith("/solana-api") ||
    value.startsWith("/optimism-api") ||
    value.startsWith("/cosmos-api") ||
    value.startsWith("/arbitrum-api")
  );
}
