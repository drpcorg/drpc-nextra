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

function addRedirectsIntoSections(redirectsBySection, basePath) {
  for (const section in redirectsBySection) {
    for (const method of redirectsBySection[section]) {
      PERMANENT_REDIRECTS.push({
        from: `${basePath}/${method}`,
        to: `${basePath}/${section}/${method}`,
      });
    }
  }
}

addRedirectsIntoSections(ETHEREUM_REDIRECTS_BY_SECTION, "/ethereum-api");
addRedirectsIntoSections(OPTIMISM_REDIRECTS_BY_SECTION, "/optimism-api");
addRedirectsIntoSections(SOLANA_REDIRECTS_BY_SECTION, "/solana-api");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withNextra({
  basePath: "/docs",
  output: "standalone",
  async redirects() {
    return PERMANENT_REDIRECTS.map((redirect) => ({
      source: redirect.from,
      destination: redirect.to,
      permanent: true,
    }));
  },
});

export default nextConfig;
