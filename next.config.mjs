import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

const PERMANENT_REDIRECTS = [
  {
    from: "/archive-nodes",
    to: "/howitworks/archive-nodes",
  },
  {
    from: "/arbitrum-api/debugandtrace/trace_call",
    to: "/arbitrum-api/debugandtrace/debug_traceCall",
  },
  {
    from: "/bartio-api/:slug*",
    to: "/berachain-api/:slug*",
  },
  {
    from: "/howitworks/faucets",
    to: "/faucets",
  },
  {
    from: "/mev-protection",
    to: "/howitworks/mev-protection",
  },
  {
    from: "/optimism-api/ethereumoptimismdifference-zxcv",
    to: "/optimism-api/ethereumoptimismdifference",
  },
  {
    from: "/celo-api/debugandtrace/arbtrace_replayBlockTransactions",
    to: "/celo-api/debugandtrace/trace_replayBlockTransactions",
  },
  // Redirection group
  {
    from: "/subscriptions/evm",
    to: "/pricing/subscriptions/evm",
  },
  {
    from: "/howitworks/subscriptions/evm",
    to: "/pricing/subscriptions/evm",
  },
  // Redirection group
  {
    from: "/subscriptions/solana",
    to: "/pricing/subscriptions/solana",
  },

  {
    from: "/howitworks/subscriptions/solana",
    to: "/pricing/subscriptions/solana",
  },
  {
    from: "/wallet-api/portfolio/gettransactionshistory",
    to: "/data-api/transactions-api/gettransactionshistory",
  },
  {
    from: "/overview-wallet-api",
    to: "/overview-data-api",
  },
  {
    from: "/quickstart-wallet-api",
    to: "/quickstart-data-api",
  },
];

const ETHEREUM_REDIRECTS_BY_SECTION = {
  debugandtrace: [
    "debug_traceBlockByHash",
    "trace_callMany",
    "trace_get",
    "trace_rawTransaction",
    "trace_replayBlockTransactionsvmTrace",
    "trace_replayTransaction",
  ],
  blocksinfo: [
    "eth_blockNumber",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByNumber",
    "eth_newBlockFilter",
  ],
  gasestimation: [
    "eth_estimateGas",
    "eth_maxPriorityFeePerGas",
    "eth_feeHistory",
  ],
  accountinfo: ["eth_getBalance", "eth_getCode"],
  transactionsinfo: [
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_newPendingTransactionFilter",
  ],
  gettinguncles: [
    "eth_getUncleByBlockNumberAndIndex",
    "eth_getUncleCountByBlockNumber",
  ],
  eventlogs: ["eth_uninstallFilter"],
  subscriptions: ["eth_unsubscribe"],
  chaininfo: ["net_version"],
  web3: ["web3_clientVersion"],
};

const OPTIMISM_REDIRECTS_BY_SECTION = {
  debugandtrace: [
    "debug_traceBlockByHash",
    "trace_block",
    "trace_call",
    "trace_callMany",
    "trace_get",
    "trace_replayBlockTransactionsvmTrace",
    "trace_replayTransactionvmTrace",
    "trace_Transaction",
  ],
  web3: ["web3_clientVersion"],
  gasestimation: ["eth_maxPriorityFeePerGas", "eth_feeHistory"],
  blocksinfo: [
    "eth_getBlockByNumber",
    "eth_getBlockReceipts",
    "eth_getFilterLogs",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
    "eth_newBlockFilter",
  ],
  transactionsinfo: ["eth_getTransactionCount"],
  gettinguncles: ["eth_getUncleCountByBlockHash"],
  mining: ["eth_mining"],
  chaininfo: ["eth_protocolVersion", "eth_syncing", "net_listening"],
  executingtransactions: ["eth_sendRawTransaction"],
  eventlogs: ["eth_uninstallFilter"],
};

const SOLANA_REDIRECTS_BY_SECTION = {
  accountinfo: [
    "getAccountInfo",
    "getLargestAccounts",
    "getProgramAccounts",
    "getStakeActivation",
    "getVoteAccounts",
  ],
  blocksinfo: [
    "getBlock",
    "getBlockHeight",
    "getBlockProduction",
    "isBlockhashValid",
  ],
  networkinfo: [
    "getFeeCalculatorForBlockhash",
    "getFees",
    "getFirstAvailableBlock",
    "getHighestSnapshotSlot",
  ],
  networkinflationinfo: ["getInflationGovernor", "getInflationReward"],
  nodeinfo: ["getHealth", "getVersion"],
  slotinfo: ["getSlotLeader", "getMaxRetransmitSlot", "getMaxShredInsertSlot"],
  transactionsinfo: [
    "getSignaturesForAddress",
    "getTransaction",
    "getTransactionCount",
    "simulateTransaction",
  ],
  tokenInfo: [
    "getTokenSupply",
    "getTokenAccountBalance",
    "getTokenAccountsByDelegate",
    "getTokenAccountsByOwner",
    "getTokenLargestAccounts",
    "requestAirdrop",
  ],
};

const TRON_REDIRECTS_BY_SECTION = {
  accountinfo: [
    "eth_accounts",
    "eth_getBalance",
    "eth_getCode",
    "eth_getProof",
    "eth_getStorageAt",
  ],
  blocksinfo: [
    "eth_blockNumber",
    "eth_getBlockByHash",
    "eth_getBlockByHashfull",
    "eth_getBlockByNumber",
    "eth_getBlockByNumberfull",
    "eth_newBlockFilter",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
  ],
  chaininfo: [
    "eth_chainId",
    "eth_protocolVersion",
    "net_listening",
    "net_version",
    "net_peerCount",
    "eth_syncing",
    "eth_hashrate",
  ],
  debugandtrace: [
    "trace_filter",
    "trace_rawTransaction",
    "trace_block",
    "trace_replayBlockTransactions",
    "debug_traceBlockByHash",
  ],
  eventlogs: [
    "eth_getLogs",
    "eth_newFilter",
    "eth_getFilterChanges",
    "eth_uninstallFilter",
    "eth_getFilterLogs",
  ],
  executingtransactions: ["eth_call", "eth_sendRawTransaction"],
  gasestimation: [
    "eth_feeHistory",
    "eth_estimateGas",
    "eth_gasPrice",
    "eth_createAccessList",
    "eth_maxPriorityFeePerGas",
  ],
  gettinguncles: [
    "eth_getUncleByBlockHashAndIndex",
    "eth_getUncleByBlockNumberAndIndex",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleCountByBlockNumber",
  ],
  mining: ["eth_coinbase", "eth_mining"],
  transactionsinfo: [
    "eth_getTransactionByHash",
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_newPendingTransactionFilter",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
  ],
  web3: ["web3_clientVersion", "web3_sha3"],
};

const WALLET_API_METHODS_BY_SECTION = {
  chain: ["getsupportedchains", "getsupportedchainbyid"],
  portfolio: [
    "getevmportfolio",
    "getnonevmportfolio",
    "gethistoricalnetworth",
    "getpnlhistory",
    "getaggregatedpnl",
    "getpnlformultiplewallets",
    "getyieldrecommendations",
  ],
  token: [
    "getsupportedtokens",
    "gettokeninfobyid",
    "getsupportedpricesymbols",
    "searchhistoricalprices",
  ],
  nft: [
    "getwalletnfts",
    "getnftcollections",
    "getnftmetadatabyid",
    "refreshnftmetadata",
  ],
  protocols: ["getaprhistory"],
};

const WALLET_API_SECTION_RENAME = {
  chain: "blockchain-api",
  portfolio: "portfolio-api",
  token: "token-api",
  nft: "nft-api",
  protocols: "protocols-api",
};

function addRedirectsIntoSections(redirectsBySection, fromBasePath, toBasePath = fromBasePath) {
  for (const section in redirectsBySection) {
    for (const method of redirectsBySection[section]) {
      PERMANENT_REDIRECTS.push({
        from: `${fromBasePath}/${method}`,
        to: `${toBasePath}/${section}/${method}`,
      });
    }
  }
}
function addRedirectsForRelocatedSections(
  redirectsBySection,
  basePath,
  newSegment
) {
  const relocatedBasePath = `${basePath}/${newSegment}`;

  for (const section in redirectsBySection) {
    for (const method of redirectsBySection[section]) {
      PERMANENT_REDIRECTS.push({
        from: `${basePath}/${section}/${method}`,
        to: `${relocatedBasePath}/${section}/${method}`,
      });
    }
  }
}

function addWalletApiRedirects() {
  for (const oldSection in WALLET_API_METHODS_BY_SECTION) {
    const newSection = WALLET_API_SECTION_RENAME[oldSection];
    for (const method of WALLET_API_METHODS_BY_SECTION[oldSection]) {
      PERMANENT_REDIRECTS.push({
        from: `/wallet-api/${oldSection}/${method}`,
        to: `/data-api/${newSection}/${method}`,
      });
    }
  }
}

addRedirectsIntoSections(ETHEREUM_REDIRECTS_BY_SECTION, "/ethereum-api");
addRedirectsIntoSections(OPTIMISM_REDIRECTS_BY_SECTION, "/optimism-api");
addRedirectsIntoSections(SOLANA_REDIRECTS_BY_SECTION, "/solana-api");
addRedirectsForRelocatedSections(
  TRON_REDIRECTS_BY_SECTION,
  "/tron-api",
  "tron-json-rpc-api"
);

addWalletApiRedirects();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withNextra({
  basePath: "/docs",
  output: "standalone",
  experimental: {
    // Reduces peak memory during `next build` by processing pages with a
    // single worker instead of one per CPU core — trades build speed for
    // memory headroom while the actual OOM cause is still being tracked down.
    cpus: 1,
    workerThreads: false,
  },
  async redirects() {
    return PERMANENT_REDIRECTS.map((redirect) => ({
      source: redirect.from,
      destination: redirect.to,
      permanent: true,
    }));
  },
});

export default nextConfig;
