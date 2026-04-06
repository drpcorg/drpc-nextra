import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
  PathParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getnonevmportfolio(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Get Non-EVM Portfolio"
      network=""
      cu={3340}
      description={"Returns information about all assets in a wallet. It includes: native balance, tokens, DeFi"}
      url={"GET https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/balances"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      queryParams={QUERY_PARAMS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={""}
      isRESTApi={true}
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request GET \\
  --url https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/balances \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/balances", {
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

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/balances", {
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
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/balances", nil)
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
        .get("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/balances")
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

url = "https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/balances"
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

const PATH_PARAMS: PathParamProp = [
  {
    paramName: "chain",
    type: "string",
    paramDescription: "[Required] Target non-EVM chain",
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
const QUERY_PARAMS: RequestParamProp = [
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
    paramName: "include_zero_price_tokens",
    type: "boolean",
    paramDescription: "If True (default), includes tokens with price equal to 0 (e.g., airdrops, unverified tokens). Set to False to exclude such tokens, which helps reduce spam in portfolios.",
  },
];
const REQUEST_PARAMS: RequestParamProp = [];

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
  paramName: "attributes",
  type: "object",
  paramDescription: "[Required] Asset-specific fields   ",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "rewards_value_usd",
      type: "number",
      paramDescription: "[Required] Current USD value of this position rewards"
    },
    {
      paramName: "extra",
      type: "object",
      paramDescription: "Extra fields for this position"
    },
    {
      paramName: "deposits",
      type: "array_of_objects",
      paramDescription: "[Required] List of deposit tokens in this position",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "category",
          type: "string",
          paramDescription: "[Required] Category of the token"
        },
        {
          paramName: "token_id",
          type: "string",
          paramDescription: "[Required] ID of the token"
        },
        {
          paramName: "token_symbol",
          type: "string",
          paramDescription: "Symbol of the token"
        },
        {
          paramName: "token_name",
          type: "string",
          paramDescription: "Name of the token"
        },
        {
          paramName: "contract_address",
          type: "string",
          paramDescription: "[Required] Address of the token"
        },
        {
          paramName: "decimals",
          type: "integer",
          paramDescription: "Number of decimals"
        },
        {
          paramName: "amount_string",
          type: "string",
          paramDescription: "[Required] Amount of tokens without decimals"
        },
        {
          paramName: "amount",
          type: "number",
          paramDescription: "[Required] Amount of tokens"
        },
        {
          paramName: "price_usd",
          type: "number",
          paramDescription: "[Required] Token price in USD"
        },
        {
          paramName: "value_usd",
          type: "number",
          paramDescription: "[Required] Value of token in USD"
        },
        {
  paramName: "attributes",
  type: "object",
  paramDescription: "[Required] Attributes of the token",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "apr",
      type: "object",
      paramDescription: "Current APR (Annual Percentage Rate) data for this specific token. Available for tokens in supported lending/borrowing protocols"
    },
    {
      paramName: "icon_url",
      type: "string",
      paramDescription: "URL to download icon of the token"
    },
    {
      paramName: "extra",
      type: "object",
      paramDescription: "Extra fields for this token"
    }
  ]
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
          paramDescription: "[Required] Category of the token"
        },
        {
          paramName: "token_id",
          type: "string",
          paramDescription: "[Required] ID of the token"
        },
        {
          paramName: "token_symbol",
          type: "string",
          paramDescription: "Symbol of the token"
        },
        {
          paramName: "token_name",
          type: "string",
          paramDescription: "Name of the token"
        },
        {
          paramName: "contract_address",
          type: "string",
          paramDescription: "[Required] Address of the token"
        },
        {
          paramName: "decimals",
          type: "integer",
          paramDescription: "Number of decimals"
        },
        {
          paramName: "amount_string",
          type: "string",
          paramDescription: "[Required] Amount of tokens without decimals"
        },
        {
          paramName: "amount",
          type: "number",
          paramDescription: "[Required] Amount of tokens"
        },
        {
          paramName: "price_usd",
          type: "number",
          paramDescription: "[Required] Token price in USD"
        },
        {
          paramName: "value_usd",
          type: "number",
          paramDescription: "[Required] Value of token in USD"
        },
        {
  paramName: "attributes",
  type: "object",
  paramDescription: "[Required] Attributes of the token",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "apr",
      type: "object",
      paramDescription: "Current APR (Annual Percentage Rate) data for this specific token. Available for tokens in supported lending/borrowing protocols"
    },
    {
      paramName: "icon_url",
      type: "string",
      paramDescription: "URL to download icon of the token"
    },
    {
      paramName: "extra",
      type: "object",
      paramDescription: "Extra fields for this token"
    }
  ]
},
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
          paramDescription: "[Required] Category of the token"
        },
        {
          paramName: "token_id",
          type: "string",
          paramDescription: "[Required] ID of the token"
        },
        {
          paramName: "token_symbol",
          type: "string",
          paramDescription: "Symbol of the token"
        },
        {
          paramName: "token_name",
          type: "string",
          paramDescription: "Name of the token"
        },
        {
          paramName: "contract_address",
          type: "string",
          paramDescription: "[Required] Address of the token"
        },
        {
          paramName: "decimals",
          type: "integer",
          paramDescription: "Number of decimals"
        },
        {
          paramName: "amount_string",
          type: "string",
          paramDescription: "[Required] Amount of tokens without decimals"
        },
        {
          paramName: "amount",
          type: "number",
          paramDescription: "[Required] Amount of tokens"
        },
        {
          paramName: "price_usd",
          type: "number",
          paramDescription: "[Required] Token price in USD"
        },
        {
          paramName: "value_usd",
          type: "number",
          paramDescription: "[Required] Value of token in USD"
        },
        {
  paramName: "attributes",
  type: "object",
  paramDescription: "[Required] Attributes of the token",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "apr",
      type: "object",
      paramDescription: "Current APR (Annual Percentage Rate) data for this specific token. Available for tokens in supported lending/borrowing protocols"
    },
    {
      paramName: "icon_url",
      type: "string",
      paramDescription: "URL to download icon of the token"
    },
    {
      paramName: "extra",
      type: "object",
      paramDescription: "Extra fields for this token"
    }
  ]
},
      ]
    },
    {
      paramName: "leverages",
      type: "array_of_objects",
      paramDescription: "List of leverage positions",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "category",
          type: "string",
          paramDescription: "[Required] Category of the token"
        },
        {
          paramName: "token_id",
          type: "string",
          paramDescription: "[Required] ID of the token"
        },
        {
          paramName: "token_symbol",
          type: "string",
          paramDescription: "Symbol of the token"
        },
        {
          paramName: "token_name",
          type: "string",
          paramDescription: "Name of the token"
        },
        {
          paramName: "contract_address",
          type: "string",
          paramDescription: "[Required] Address of the token"
        },
        {
          paramName: "decimals",
          type: "integer",
          paramDescription: "Number of decimals"
        },
        {
          paramName: "amount_string",
          type: "string",
          paramDescription: "[Required] Amount of tokens without decimals"
        },
        {
          paramName: "amount",
          type: "number",
          paramDescription: "[Required] Amount of tokens (position size)"
        },
        {
          paramName: "price_usd",
          type: "number",
          paramDescription: "[Required] Token price in USD"
        },
        {
          paramName: "value_usd",
          type: "number",
          paramDescription: "[Required] Value of token in USD"
        },
        {
          paramName: "collateral_value_usd",
          type: "number",
          paramDescription: "Value of collateral in USD"
        },
        {
          paramName: "notional_value_usd",
          type: "number",
          paramDescription: "Position size value in USD"
        },
        {
  paramName: "attributes",
  type: "object",
  paramDescription: "[Required] Attributes of the token",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "apr",
      type: "object",
      paramDescription: "Current APR (Annual Percentage Rate) data for this specific token. Available for tokens in supported lending/borrowing protocols (POSITIONAPR)"
    },
    {
      paramName: "icon_url",
      type: "string",
      paramDescription: "URL to download icon of the token"
    },
    {
      paramName: "extra",
      type: "object",
      paramDescription: "Extra fields for this token"
    }
  ]
},
      ]
    },
    {
      paramName: "unsettled",
      type: "array_of_objects",
      paramDescription: "List of unsettled items in this position",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "token_id",
          type: "string",
          paramDescription: "ID of the token"
        },
        {
          paramName: "token_symbol",
          type: "string",
          paramDescription: "Symbol of the token"
        },
        {
          paramName: "token_name",
          type: "string",
          paramDescription: "Name of the token"
        },
        {
          paramName: "contract_address",
          type: "string",
          paramDescription: "Address of the token"
        },
        {
          paramName: "value_usd",
          type: "number",
          paramDescription: "[Required] Value of token in USD"
        },
        {
          paramName: "icon_url",
          type: "string",
          paramDescription: "URL to download icon of the token"
        }
      ]
    }
  ]
}
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve balances for a wallet on a non-EVM chain",
  "Validate wallet assets before performing operations",
];

const CONSTRAINTS = [
  "Requires valid chain and wallet address parameters",
  "Supports only non-EVM chains",
];