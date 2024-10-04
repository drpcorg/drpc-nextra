const METHOD_DOCS_URL_BASES = [
  "/arbitrum-api",
  "/cosmos-api",
  "/ethereum-api",
  "/optimism-api",
  "/solana-api",
  "/polygon-api",
  "/avalanche-api",
  "/mantle-api"
];

export function shouldMakeInvisibleHeading(value: string) {
  const isDocsPage = METHOD_DOCS_URL_BASES.some((base) =>
    value.startsWith(base)
  );
  const isDocsInfoPage = METHOD_DOCS_URL_BASES.some(
    (base) => value === base || value === `${base}/`
  );

  return isDocsPage && !isDocsInfoPage;
}
