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
  "/bitcoin-api",
  "/base-api",
  "/celo-api",
  "/bsc-api",
  "/bartio-api",
  "/fantom-api",
  "/soneium-api",
  "/sonic-api",
  "/viction-api",
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
  "ethereumbasedifference",
  "ethereumcelodifference",
  "addressmanagement",
  "consensusandchaininfo" ,
  "smartcontractexecution",
  "tokendata",
  "connectioninfo",
  "feeinfo",
  "ethereumbscdifference",
  "ethereumfantomdifference",
  "ethereumbartiodifference",
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
