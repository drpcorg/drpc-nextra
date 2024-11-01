const METHOD_DOCS_URL_BASES = [
  "/arbitrum-api",
  "/cosmos-api",
  "/ethereum-api",
  "/optimism-api",
  "/solana-api",
  "/polygon-api",
  "/avalanche-api",
  "/mantle-api",
  "/bitcoinapi",
  "/ton-api"  ,
];

const METHOD_DOCS_URL_CHAPTERS = [
  "blocksinfo",
  "transactionsinfo",
  "debugandtrace",
  "accountinfo",
  "eventlogs",
  "chaininfo",
  "executingtransactions",
  "gasestimation",
  "gettinguncles",
  "web3",
  "subscriptions",
  "mining",
  "consensusinfo",
  "networkinflationinfo",
  "networkinfo",
  "nodeinfo",
  "slotinfo",
  "tokeninfo",
  "borspecific",
  "memorypool",
  "ethereumarbitrumdifference",
  "ethereumavalanchedifference",
  "ethereummantledifference",
  "ethereumoptimismdifference",
  "ethereumpolygondifference",
  "addressmanagement",
  "consensusandchaininfo" ,
  "smartcontractexecution",
  "tokendata",
];

export function shouldMakeInvisibleHeading(value: string) {
  const isDocsPage = METHOD_DOCS_URL_BASES.some((base) =>
    value.startsWith(base)
  );
  const isDocsInfoPage = METHOD_DOCS_URL_BASES.some(
    (base) => value === base || value === `${base}/`
  );
  const isDocsChapterPage = METHOD_DOCS_URL_BASES.some((base) =>
    METHOD_DOCS_URL_CHAPTERS.some((chapter) => value === `${base}/${chapter}`)
  );

  return isDocsPage && !isDocsInfoPage && !isDocsChapterPage;
}
