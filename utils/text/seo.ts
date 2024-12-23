const METHOD_DOCS_URL_BASES_MAP = {
  "/arbitrum-api": "Arbitrum",
  "/cosmos-api": "Cosmos",
  "/ethereum-api": "Ethereum",
  "/optimism-api": "Optimism",
  "/solana-api": "Solana",
  "/polygon-api": "Polygon",
  "/avalanche-api": "Avalanche",
  "/mantle-api": "Mantle",
  "/bitcoinapi": "Bitcoin",
  "/ton-api": "TON",
  "/bitcoin-api": "Bitcoin",
  "/base-api": "Base",
  "/celo-api": "Celo",
};

const METHOD_DOCS_URL_BASES_MAP_KEYS = Object.keys(METHOD_DOCS_URL_BASES_MAP);

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
  "consensusandchaininfo",
  "smartcontractexecution",
  "tokendata",
  "connectioninfo",
  "feeinfo",
];

type RouteCheckResult = {
  is: boolean;
  blockchain: string | undefined;
};

export function isDocsPage(value: string): RouteCheckResult {
  const base = METHOD_DOCS_URL_BASES_MAP_KEYS.find((base) =>
    value.startsWith(base)
  );
  return {
    is: base !== undefined,
    blockchain: base ? METHOD_DOCS_URL_BASES_MAP[base] : undefined,
  };
}

export function isDocsInfoPage(value: string): RouteCheckResult {
  const base = METHOD_DOCS_URL_BASES_MAP_KEYS.find(
    (base) => value === base || value === `${base}/`
  );
  return {
    is: base !== undefined,
    blockchain: base ? METHOD_DOCS_URL_BASES_MAP[base] : undefined,
  };
}

export function isDocsChapterPage(value: string): RouteCheckResult {
  const base = METHOD_DOCS_URL_BASES_MAP_KEYS.find((base) =>
    METHOD_DOCS_URL_CHAPTERS.some((chapter) => value === `${base}/${chapter}`)
  );

  return {
    is: base !== undefined,
    blockchain: base ? METHOD_DOCS_URL_BASES_MAP[base] : undefined,
  };
}

export function isDocsMethodPage(value: string): RouteCheckResult {
  const base = METHOD_DOCS_URL_BASES_MAP_KEYS.find((base) =>
    METHOD_DOCS_URL_CHAPTERS.some(
      (chapter) =>
        // Check if the URL starts with the base and the chapter but is not the same as the chapter
        value.startsWith(`${base}/${chapter}`) && value !== `${base}/${chapter}`
    )
  );

  return {
    is: base !== undefined,
    blockchain: base ? METHOD_DOCS_URL_BASES_MAP[base] : undefined,
  };
}

export function shouldMakeInvisibleHeading(value: string) {
  return (
    isDocsPage(value).is &&
    !isDocsInfoPage(value).is &&
    !isDocsChapterPage(value).is
  );
}
