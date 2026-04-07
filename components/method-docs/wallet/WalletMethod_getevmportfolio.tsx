import WalletMethod from "../../WalletMethod/WalletMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getevmportfolio() {
  return (
    <WalletMethod
      method="Get EVM Portfolio"
      cu={9185}
      description={"Returns comprehensive portfolio information for a wallet address, including native token balances, ERC-20 tokens, and DeFi positions across supported chains"}
      url={"GET https://lb.drpc.live/{chain}/{key}/lambda/v2/wallets/{address}/balances"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      requestParams={REQUEST_PARAMS}
      queryParams={QUERY_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request GET \\
  --url https://lb.drpc.live/{chain}/{key}/lambda/v2/wallets/{address}/balances \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v2/wallets/{address}/balances", {
  method: "GET",
  headers: {
    "accept": "application/json"
  }
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);`,
  },
  {
    language: "node",
    code: () => `import fetch from "node-fetch";

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v2/wallets/{address}/balances", {
  method: "GET",
  headers: {
    "accept": "application/json"
  }
});

const data = await res.json();
console.log(data);`,
  },
  {
    language: "go",
    code: () => `package main

import (
  "fmt"
  "io"
  "net/http"
)

func main() {
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/{chain}/{key}/lambda/v2/wallets/{address}/balances", nil)
  req.Header.Set("accept", "application/json")

  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()

  body, _ := io.ReadAll(resp.Body)
  fmt.Println(string(body))
}`,
  },
  {
    language: "rust",
    code: () => `use reqwest::header::ACCEPT;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();

    let res = client
        .get("https://lb.drpc.live/{chain}/{key}/lambda/v2/wallets/{address}/balances")
        .header(ACCEPT, "application/json")
        .send()
        .await?;

    let body = res.text().await?;
    println!("{}", body);

    Ok(())
}`,
  },
  {
    language: "python",
    code: () => `import requests

url = "https://lb.drpc.live/{chain}/{key}/lambda/v2/wallets/{address}/balances"
headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": {
    "total_net_worth_usd": 83104610.57318147,
    "portfolio_allocation_usd": {
      "wallet": 696.2668659837276,
      "deposit": 83103914.30631548,
      "borrow": 0
    },
    "assets": [
      {
        "type": "defi",
        "id": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84-ethereum-aave v3 lending-deposit",
        "name": "Aave V3 Lending",
        "defi_id": "Aave V3 Lending",
        "defi_name": "Aave V3",
        "defi_url": "https://app.aave.com",
        "defi_icon_url": "https://static.lambda.p2p.org/protocols/aave-pool-v3.png",
        "chain_id": "ethereum",
        "chain_id_numeric": 1,
        "chain_name": "Ethereum",
        "chain_icon_url": "https://static.lambda.p2p.org/chains/ethereum.png",
        "value_usd": 83103914.30631548,
        "value_usd_change_1d": -764585.7447870523,
        "attributes": {
          "pool_address": "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
          "rewards_value_usd": 0,
          "rewards_usd_change_1d": 0,
          "deposits": [
            {
              "category": "deposit",
              "token_id": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
              "token_symbol": "stETH",
              "token_name": "Lido Staked ETH",
              "contract_address": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
              "decimals": 18,
              "amount_string": "41719504281041810000000",
              "amount": 41719.50428104181,
              "price_usd": 1991.96792336,
              "value_usd": 83103914.30631548,
              "value_usd_change_1d": -764585.7447870523,
              "attributes": {
                "pnl_links": [],
                "icon_url": "https://static.lambda.p2p.org/tokens/eth/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png",
                "contract_implementations": [
                  {
                    "chain_id": "ethereum",
                    "chain_id_numeric": 1,
                    "chain_name": "Ethereum",
                    "address": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
                    "decimals": 18
                  },
                  {
                    "chain_id": "arbitrum",
                    "chain_id_numeric": 42161,
                    "chain_name": "Arbitrum",
                    "address": "0xabc...123",
                    "decimals": 18
                  }
                ]
              }
            }
          ],
          "loans": [],
          "rewards": [],
          "pnl_links": []
        }
      },
      {
        "type": "token",
        "id": "base-ethereum-asset-asset",
        "chain_id": "ethereum",
        "chain_id_numeric": 1,
        "chain_name": "Ethereum",
        "chain_icon_url": "https://static.lambda.p2p.org/chains/ethereum.png",
        "value_usd": 696.2668659837276,
        "value_usd_change_1d": -7.308658452814029,
        "attributes": {
          "token_id": "eth",
          "token_symbol": "ETH",
          "token_name": "Ethereum",
          "decimals": 18,
          "amount_string": "349696576689666633",
          "amount": 0.3496965766896666,
          "price_usd": 1991.06,
          "pnl_links": [],
          "contract_implementations": []
        }
      },
      {
        "type": "token",
        "id": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84-ethereum-asset-asset",
        "chain_id": "ethereum",
        "chain_id_numeric": 1,
        "chain_name": "Ethereum",
        "chain_icon_url": "https://static.lambda.p2p.org/chains/ethereum.png",
        "value_usd": 1.9919679233600003e-15,
        "value_usd_change_1d": -1.8326817587199723e-17,
        "attributes": {
          "token_id": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
          "token_symbol": "stETH",
          "token_name": "Lido Staked ETH",
          "contract_address": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
          "decimals": 18,
          "amount_string": "1",
          "amount": 0,
          "price_usd": 1991.06,
          "pnl_links": [
            "http://localhost:3301/api/v1/wallets/0x70ac8647e2ef008cb54db8e55657bced850c5032/chains/ethereum/pnl-history?position_id=0xae7ab96520de3a18e5e111b5eaab095312d7fe84&category=erc20"
          ],
          "icon_url": "https://static.lambda.p2p.org/tokens/eth/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png",
          "contract_implementations": []
        }
      }
    ],
    "meta_tokens": [
      {
        "type": "token",
        "id": "0xd9a442856c234a39a81a089c06451ebaa4306a72-ethereum-asset-asset",
        "chain_id": "ethereum",
        "chain_id_numeric": 1,
        "chain_name": "Ethereum",
        "chain_icon_url": "https://static.lambda.p2p.org/chains/ethereum.png",
        "value_usd": 2636.0385228235514,
        "value_usd_change_1d": 157.8171827220167,
        "attributes": {
          "token_id": "eb4d58b0-1cb0-42bb-b700-2489e078ee26",
          "token_symbol": "pufETH",
          "token_name": "pufETH",
          "contract_address": "0xd9a442856c234a39a81a089c06451ebaa4306a72",
          "decimals": 18,
          "amount_string": "800132917490221744",
          "amount": 0.8001329174902218,
          "price_usd": 3294.50078256,
          "pnl_links": [],
          "icon_url": "https://static.lambda.p2p.org/tokens/eth/0xd9a442856c234a39a81a089c06451ebaa4306a72.png",
          "contract_implementations": [
            {
              "chain_id": "ethereum",
              "chain_id_numeric": 1,
              "chain_name": "Ethereum",
              "address": "0xd9a442856c234a39a81a089c06451ebaa4306a72",
              "decimals": 18
            },
            {
              "chain_id": "soneium",
              "chain_id_numeric": 1868,
              "chain_name": "Soneium",
              "address": "0x6c460b2c6d6719562d5da43e5152b375e79b9a8b",
              "decimals": 18
            }
          ]
        },
        "asset_type": "token"
      }
    ]
  }
}`;

const PATH_PARAMS: ReqResParam[] = [
  {
    paramName: "chain",
    type: "string",
    paramDescription: "[Required] Target EVM chain (e.g. ethereum, polygon)",
  },
  {
    paramName: "key",
    type: "string",
    paramDescription: "[Required] Your dRPC API key",
  },
  {
    paramName: "address",
    type: "string",
    paramDescription: "[Required] Wallet address",
  },
];
const REQUEST_PARAMS: RequestParamProp = [];
const QUERY_PARAMS: RequestParamProp = [
  {
    paramName: "chain_id",
    type: "string",
    paramDescription: "Filter by specific chain ID as defined in Wallet API. If not provided, data from all supported chains will be included.",
  },
  {
    paramName: "asset_type",
    type: "string",
    paramDescription: "Specify the type of assets to return.",
    paramEnum: [
      {
        value: "TOKEN",
        description: "Returns only wallet-held tokens (e.g., ERC-20s)",
      },
      {
        value: "DEFI",
        description: "Returns only DeFi positions",
      },
      {
        value: "ALL",
        isDefault: true,
        description: "returns both",
      },
    ],
  },
   {
    paramName: "assets_ids",
    type: "string",
    paramDescription: "Optional list of specific asset or DeFi protocol IDs to include. Use token IDs (e.g., 'eth') or protocol IDs (e.g., 'sushiswap_v2'). If omitted, all available assets will be returned.",
  },
  {
    paramName: "include_zero_price_tokens",
    type: "boolean",
    paramDescription: "If True (default), includes tokens with price equal to 0 (e.g., airdrops, unverified tokens). Set to False to exclude such tokens, which helps reduce spam in portfolios.",
  },
  {
    paramName: "include_meta_tokens",
    type: "boolean",
    paramDescription: "If True, the response will include meta tokens—tokens that represent underlying assets in DeFi protocols. These tokens typically indicate positions in liquidity pools, lending platforms, or yield strategies. For example, aEthUSDT represents a USDT position supplied to the AAVE protocol. Default: false.",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "data",
    type: "object",
    paramDescription: "[Required] User balances data.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "total_net_worth_usd",
        type: "number",
        paramDescription: "[Required] Total value in usd of all wallet's assets",
      },
      {
        paramName: "portfolio_allocation_usd",
        type: "object",
        paramDescription: "[Required] all the portfolio allocations",
        childrenParamsType: "object",
        childrenParams: [
            {
        paramName: "wallet",
        type: "number",
        paramDescription: "[Required] Total value of assets that are on the address",
      },
         {
        paramName: "deposit",
        type: "number",
        paramDescription: "[Required] Total value of assets deposited in DeFi",
      },
        {
        paramName: "borrow",
        type: "number",
        paramDescription: "[Required] Total value of borrowed assets",
      },
        ]  ,
      },
      {
        paramName: "assets",
        type: "array",
        paramDescription: "[Required] User's defi positions and tokens.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "type",
            type: "string",
            paramDescription: "[Required] Asset type in Wallet API",
            paramEnum: [
                {
        value: "liquid_staking_token",
        description: null,
      },
              {
                value: "token",
        description: null,
      },
                {
                value: "defi",
        description: null,
      },
            ],
          },
          {
            paramName: "id",
            type: "string",
            paramDescription: "[Required] id of a asset in Wallet API",
          },
          {
            paramName: "name",
            type: "string",
            paramDescription: "name of defi position. Possible types: Lending, Liquidity Pool, Deposit, Yield, Staked, Farming",
          },
          {
            paramName: "defi_id",
            type: "string",
            paramDescription: "id of a DeFi in Wallet API",
          },
          {
            paramName: "defi_name",
            type: "string",
            paramDescription: "Community name of DeFi",
          },
          {
            paramName: "defi_url",
            type: "string",
            paramDescription: "Link to the DeFi website",
          },
          {
            paramName: "defi_icon_url",
            type: "string",
            paramDescription: "URL to download icon of the DeFi.",
          },
          {
            paramName: "chain_id",
            type: "string",
            paramDescription: "id of a chain in Wallet API",
          },
           {
            paramName: "chain_id_numeric",
            type: "numeric",
            paramDescription: "[Required] Numeric id of the chain",
          },
          {
            paramName: "chain_name",
            type: "string",
            paramDescription: "[Required] Community name of a chain",
          },
          {
            paramName: "chain_icon_url",
            type: "string",
            paramDescription: "URL to download icon of the chain.",
          },
          {
            paramName: "value_usd",
            type: "number",
            paramDescription: "[Required] Total asset usd value on a wallet",
          },
          {
            paramName: "value_usd_change_1d",
            type: "number",
            paramDescription: "[Required] USD value changes in last day",
          },
          {
  paramName: "attributes",
  type: "object",
  paramDescription: "[Required] Defi position token attributes",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "pnl_links",
      type: "array_of_strings",
      paramDescription: "Links to get PNL for token or its token wrappers"
    },
    {
      paramName: "icon_url",
      type: "string",
      paramDescription: "URL to download icon of the token"
    },
    {
      paramName: "contract_implementations",
      type: "array_of_objects",
      paramDescription: "List of contract addresses for this token across supported chains",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "chain_id",
          type: "string",
          paramDescription: "[Required] Unique identifier of the chain in Lambda API (e.g., ethereum, arbitrum, polygon)"
        },
        {
          paramName: "chain_id_numeric",
          type: "integer",
          paramDescription: "Numeric chain ID (e.g., 1 for Ethereum, 42161 for Arbitrum)"
        },
        {
          paramName: "chain_name",
          type: "string",
          paramDescription: "[Required] Community name of the chain (e.g., Ethereum, Arbitrum)"
        },
        {
          paramName: "address",
          type: "string",
          paramDescription: "[Required] Token contract address on the given chain"
        },
        {
          paramName: "decimals",
          type: "integer",
          paramDescription: "[Required] Number of decimal places the token uses on this chain"
        }
      ]
    },
    {
  paramName: "loans",
  type: "array_of_objects",
  paramDescription: "[Required] List of loan tokens in this position",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "category",
      type: "string",
      paramDescription: "[Required] The position category indicating the type of DeFi interaction"
    },
    {
      paramName: "token_id",
      type: "string",
      paramDescription: "[Required] Unique identifier for the token"
    },
    {
      paramName: "token_symbol",
      type: "string",
      paramDescription: "[Required] Token symbol"
    },
    {
      paramName: "token_name",
      type: "string",
      paramDescription: "[Required] Full name of the token"
    },
    {
      paramName: "contract_address",
      type: "string",
      paramDescription: "Smart contract address of the token on the blockchain"
    },
    {
      paramName: "decimals",
      type: "integer",
      paramDescription: "[Required] Number of decimal places used by the token"
    },
    {
      paramName: "amount_string",
      type: "string",
      paramDescription: "[Required] Token amount in smallest unit without decimal conversion (raw blockchain value)"
    },
    {
      paramName: "amount",
      type: "number",
      paramDescription: "[Required] Human-readable token amount after decimal conversion"
    },
    {
      paramName: "price_usd",
      type: "number",
      paramDescription: "[Required] Price of one token in USD"
    },
    {
      paramName: "value_usd",
      type: "number",
      paramDescription: "[Required] Total USD value of the token position"
    },
    {
      paramName: "value_usd_change_1d",
      type: "number",
      paramDescription: "[Required] 24-hour change in USD value due to price fluctuations"
    },
    {
      paramName: "attributes",
      type: "object",
      paramDescription: "[Required] Defi position token attributes",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "pnl_links",
          type: "array_of_strings",
          paramDescription: "Links to get PNL for token or its token wrappers"
        },
        {
          paramName: "icon_url",
          type: "string",
          paramDescription: "URL to download icon of the token"
        },
        {
          paramName: "contract_implementations",
          type: "array_of_objects",
          paramDescription: "List of contract addresses for this token across supported chains",
          childrenParamsType: "object",
          childrenParams: [
            {
              paramName: "chain_id",
              type: "string",
              paramDescription: "[Required] Unique identifier of the chain in Lambda API (e.g., ethereum, arbitrum, polygon)"
            },
            {
              paramName: "chain_id_numeric",
              type: "integer",
              paramDescription: "Numeric chain ID (e.g., 1 for Ethereum, 42161 for Arbitrum)"
            },
            {
              paramName: "chain_name",
              type: "string",
              paramDescription: "[Required] Community name of the chain (e.g., Ethereum, Arbitrum)"
            },
            {
              paramName: "address",
              type: "string",
              paramDescription: "[Required] Token contract address on the given chain"
            },
            {
              paramName: "decimals",
              type: "integer",
              paramDescription: "[Required] Number of decimal places the token uses on this chain"
            }
          ]
        }
      ]
    }
  ]
},
{
  paramName: "rewards",
  type: "array_of_objects",
  paramDescription: "[Required] List of rewards in this position",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "category",
      type: "string",
      paramDescription: "[Required] The position category indicating the type of DeFi interaction"
    },
    {
      paramName: "token_id",
      type: "string",
      paramDescription: "[Required] Unique identifier for the token"
    },
    {
      paramName: "token_symbol",
      type: "string",
      paramDescription: "[Required] Token symbol"
    },
    {
      paramName: "token_name",
      type: "string",
      paramDescription: "[Required] Full name of the token"
    },
    {
      paramName: "contract_address",
      type: "string",
      paramDescription: "Smart contract address of the token on the blockchain"
    },
    {
      paramName: "decimals",
      type: "integer",
      paramDescription: "[Required] Number of decimal places used by the token"
    },
    {
      paramName: "amount_string",
      type: "string",
      paramDescription: "[Required] Token amount in smallest unit without decimal conversion (raw blockchain value)"
    },
    {
      paramName: "amount",
      type: "number",
      paramDescription: "[Required] Human-readable token amount after decimal conversion"
    },
    {
      paramName: "price_usd",
      type: "number",
      paramDescription: "[Required] Price of one token in USD"
    },
    {
      paramName: "value_usd",
      type: "number",
      paramDescription: "[Required] Total USD value of the token position"
    },
    {
      paramName: "value_usd_change_1d",
      type: "number",
      paramDescription: "[Required] 24-hour change in USD value due to price fluctuations"
    },
    {
      paramName: "attributes",
      type: "object",
      paramDescription: "[Required] Defi position token attributes",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "pnl_links",
          type: "array_of_strings",
          paramDescription: "Links to get PNL for DeFi position"
        },
        {
          paramName: "composite_symbol",
          type: "string",
          paramDescription: "Token pair symbol for liquidity pool positions"
        }
      ]
    }
  ]
},
  ]
},
          {
            paramName: "asset_type",
            type: "string",
            paramDescription: "[Required] Inferred asset type. Possible values:",
            paramEnum: [
              {
                value: "token",
                description: "Standard wallet token (ERC-20)",
              },
              {
                value: "lp",
                description: "Liquidity pool position",
              },
              {
                value: "staking",
                description: "Staked or locked tokens",
              },
              {
  value: "loan",
  description: "Borrowed position",
},
{
  value: "reward",
  description: "Rewards or airdrops",
},
{
  value: "stream",
  description: "Vesting or streaming contract",
},
{
  value: "yield",
  description: "Yield farming position",
},
{
  value: "farming",
  description: "Farming position",
},
{
  value: "vesting",
  description: "Vesting position",
},
{
  value: "deposit",
  description: "Generic DeFi deposit (non-LP)",
},
{
  value: "unknown",
  description: "Unable to classify",
},
            ],
          },
        ],
      },
           {
        paramName: "meta_tokens",
        type: "array_of_objects",
        paramDescription: "[Required] List of tokens that represent underlying assets in DeFi protocols.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "type",
            type: "string",
            paramDescription: "[Required] Asset type in Wallet API",
            paramEnum: [
                {
        value: "liquid_staking_token",
        description: null,
      },
              {
                value: "token",
        description: null,
      },
                {
                value: "defi",
        description: null,
      },
            ],
          },
          {
            paramName: "id",
            type: "string",
            paramDescription: "[Required] id of a asset in Wallet API",
          },
          {
            paramName: "chain_id",
            type: "string",
            paramDescription: "id of a chain in Wallet API",
          },
           {
            paramName: "chain_id_numeric",
            type: "numeric",
            paramDescription: "[Required] Numeric id of the chain",
          },
          {
            paramName: "chain_name",
            type: "string",
            paramDescription: "[Required] Community name of a chain",
          },
          {
            paramName: "chain_icon_url",
            type: "string",
            paramDescription: "URL to download icon of the chain.",
          },
          {
            paramName: "value_usd",
            type: "number",
            paramDescription: "[Required] Total asset usd value on a wallet",
          },
          {
            paramName: "value_usd_change_1d",
            type: "number",
            paramDescription: "[Required] USD value changes in last day",
          },
          {
            paramName: "attributes",
            type: "object",
            paramDescription: "[Required] Asset-specific fields",
            childrenParamsType: "object",
            childrenParams: [
              {
            paramName: "token_id",
            type: "string",
            paramDescription: "[Required] ID of the token.",
          },
                 {
            paramName: "token_symbol",
            type: "string",
            paramDescription: "[Required] Symbol of the token.",
          },
          {
            paramName: "token_name",
            type: "string",
            paramDescription: "[Required] Name of the token",
          },
          {
            paramName: "contract_address",
            type: "string",
            paramDescription: "[Required] Address of the token.",
          },
          {
            paramName: "decimals",
            type: "integer",
            paramDescription: "[Required] Number of decimal.",
          },
          {
            paramName: "amount_string",
            type: "integer",
            paramDescription: "[Required] Amount of tokens without decimals..",
          },
          {
            paramName: "amount",
            type: "number",
            paramDescription: "[Required] Token balance.",
          },
          {
            paramName: "price_usd",
            type: "number",
            paramDescription: "[Required] Token price in USD.",
          },
          {
            paramName: "pnl_links",
            type: "array_of_strings",
            paramDescription: "Links to get PNL for token inside the DeFi position.",
          },
          {
            paramName: "icon_url",
            type: "string",
            paramDescription: "URL to download icon of the token.",
          },
          {
            paramName: "contract_implementations",
            type: "array_of_objects",
            paramDescription: "List of contract addresses for this token across supported chains.",
            childrenParamsType: "object",
            childrenParams: [
                {
            paramName: "chain_id",
            type: "string",
            paramDescription: "[Required] The unique identifier of the chain in Wallet API where this token implementation exists. Example: 'ethereum', 'arbitrum', 'polygon'.",
          },
          {
            paramName: "chain_id_numeric",
            type: "integer",
            paramDescription: "[Required] The numeric chain ID. Example: 1 for Ethereum, 42161 for Arbitrum.",
          },
          {
            paramName: "chain_name",
            type: "string",
            paramDescription: "[Required] The community name of the chain. Example: 'Ethereum', 'Arbitrum'.",
          },
          {
            paramName: "address",
            type: "string",
            paramDescription: "[Required] The token contract address on the given chain. Example: '0xa0b8...'.",
          },
          {
            paramName: "decimals",
            type: "string",
            paramDescription: "[Required] Number of decimal places the token uses on this chain. Used to convert between base units and human-readable format. Example: 6 for USDC, 18 for ETH.",
          },
            ],

          },
            ]
          },
          {
            paramName: "asset_type",
            type: "string",
            paramDescription: "[Required] Inferred asset type. Possible values:",
            paramEnum: [
              {
                value: "token",
                description: "Standard wallet token (ERC-20)",
              },
              {
                value: "lp",
                description: "Liquidity pool position",
              },
              {
                value: "staking",
                description: "Staked or locked tokens",
              },
              {
  value: "loan",
  description: "Borrowed position",
},
{
  value: "reward",
  description: "Rewards or airdrops",
},
{
  value: "stream",
  description: "Vesting or streaming contract",
},
{
  value: "yield",
  description: "Yield farming position",
},
{
  value: "farming",
  description: "Farming position",
},
{
  value: "vesting",
  description: "Vesting position",
},
{
  value: "deposit",
  description: "Generic DeFi deposit (non-LP)",
},
{
  value: "unknown",
  description: "Unable to classify",
},
            ],
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve all token balances for a wallet on a specific EVM chain",
  "Display user portfolio in wallets and dashboards",
];

const CONSTRAINTS = [
  "Supports only EVM-compatible chains",
  "Requires valid wallet address and chain parameters",
];