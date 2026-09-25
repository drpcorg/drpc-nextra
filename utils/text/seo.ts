const METHOD_DOCS_URL_BASES_MAP = {
  "/api-reference/arbitrum-api": "Arbitrum",
  "/api-reference/cosmos-api": "Cosmos",
  "/api-reference/ethereum-api": "Ethereum",
  "/api-reference/optimism-api": "Optimism",
  "/api-reference/solana-api": "Solana",
  "/api-reference/polygon-api": "Polygon",
  "/api-reference/avalanche-api": "Avalanche",
  "/api-reference/mantle-api": "Mantle",
  "/api-reference/bitcoinapi": "Bitcoin",
  "/api-reference/ton-api": "TON",
  "/api-reference/bitcoin-api": "Bitcoin",
  "/api-reference/base-api": "Base",
  "/api-reference/celo-api": "Celo",
  "/api-reference/bsc-api": "BNB Smart Chain",
  "/api-reference/berachain-api": "Berachain",
  "/api-reference/fantom-api": "Fantom",
  "/api-reference/soneium-api": "Soneium",
  "/api-reference/sonic-api": "Sonic",
  "/api-reference/viction-api": "Viction",
  "/api-reference/superseed-api": "Superseed",
  "/api-reference/tron-api": "Tron",
  "/data-api": "Data API",
  "/api-reference/robinhood-api": "Robinhood",
  "/api-reference/arc-api": "Arc",
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
  "ethereumfantomdifference",
  "ethereumbscdifference",
  "ethereumbartiodifference",
  "ethereumsuperseeddifference",
  "blockchain-api",
  "portfolio-api",
  "token-api",
  "nft-api",
  "protocols-api",
  "transaction-api",
  "arcnamespace",
];

type RouteCheckResult = {
  is: boolean;
  blockchain: string | undefined;
};

// Starts with '/ethereum-api', '/optimism-api', etc.
function isDocsPage(value: string): RouteCheckResult {
  const base = METHOD_DOCS_URL_BASES_MAP_KEYS.find((base) =>
    value.startsWith(base)
  );
  return {
    is: base !== undefined,
    blockchain: base ? METHOD_DOCS_URL_BASES_MAP[base] : undefined,
  };
}

// Equals to '/ethereum-api', '/optimism-api', etc.
export function isDocsInfoPage(value: string): RouteCheckResult {
  const base = METHOD_DOCS_URL_BASES_MAP_KEYS.find(
    (base) => value === base || value === `${base}/`
  );
  return {
    is: base !== undefined,
    blockchain: base ? METHOD_DOCS_URL_BASES_MAP[base] : undefined,
  };
}

// Equals to '/ethereum-api/blocksinfo', etc.
function isDocsChapterPage(value: string): RouteCheckResult {
  const base = METHOD_DOCS_URL_BASES_MAP_KEYS.find((base) =>
    METHOD_DOCS_URL_CHAPTERS.some((chapter) => value === `${base}/${chapter}`)
  );

  return {
    is: base !== undefined,
    blockchain: base ? METHOD_DOCS_URL_BASES_MAP[base] : undefined,
  };
}

// Starts with '/ethereum-api/blocksinfo', etc. but not equals to '/ethereum-api/blocksinfo'
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

export const DEFAULT_META_TITLE = "Docs: RPC & Chain Methods Documentation | dRPC";
export const DEFAULT_META_DESCRIPTION = "Access RPC documentation, chain method references, and integration guides. Clear technical resources for developers building on dRPC.";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";