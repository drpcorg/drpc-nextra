import WalletMethod from "../../WalletMethod/WalletMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getaggregatedpnl() {
  return (
    <WalletMethod
      method="Get Aggregated PNL"
      cu={334000}
      description={"Returns aggregated Profit & Loss data for multiple wallets or positions"}
      url={"POST https://lb.drpc.live/{chain}/{key}/lambda/v1/aggregated-pnl-history"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      queryParamsType="none"
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_objects"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
  --url https://lb.drpc.live/{chain}/{key}/lambda/v1/aggregated-pnl-history \\
  --header 'accept: application/json' \\
  --header 'content-type: application/json' \\
  --data '{
    "addresses": ["0x..."],
    "from_timestamp": 1710000000,
    "to_timestamp": 1711000000,
    "interval": "day"
  }'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/aggregated-pnl-history", {
  method: "POST",
  headers: {
    "accept": "application/json",
    "content-type": "application/json"
  },
  body: JSON.stringify({
    addresses: ["0x..."],
    from_timestamp: 1710000000,
    to_timestamp: 1711000000,
    interval: "day"
  })
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);`,
  },
  {
    language: "node",
    code: () => `import fetch from "node-fetch";

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/aggregated-pnl-history", {
  method: "POST",
  headers: {
    "accept": "application/json",
    "content-type": "application/json"
  },
  body: JSON.stringify({
    addresses: ["0x..."],
    from_timestamp: 1710000000,
    to_timestamp: 1711000000,
    interval: "day"
  })
});

const data = await res.json();
console.log(data);`,
  },
  {
    language: "go",
    code: () => `package main

import (
  "bytes"
  "fmt"
  "io"
  "net/http"
)

func main() {
  payload := []byte(\`{
    "addresses": ["0x..."],
    "from_timestamp": 1710000000,
    "to_timestamp": 1711000000,
    "interval": "day"
  }\`)

  req, _ := http.NewRequest("POST", "https://lb.drpc.live/{chain}/{key}/lambda/v1/aggregated-pnl-history", bytes.NewBuffer(payload))
  req.Header.Set("accept", "application/json")
  req.Header.Set("content-type", "application/json")

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
    code: () => `use reqwest::header::{ACCEPT, CONTENT_TYPE};
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();

    let res = client
        .post("https://lb.drpc.live/{chain}/{key}/lambda/v1/aggregated-pnl-history")
        .header(ACCEPT, "application/json")
        .header(CONTENT_TYPE, "application/json")
        .json(&json!({
            "addresses": ["0x..."],
            "from_timestamp": 1710000000,
            "to_timestamp": 1711000000,
            "interval": "day"
        }))
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

url = "https://lb.drpc.live/{chain}/{key}/lambda/v1/aggregated-pnl-history"
headers = {
    "accept": "application/json",
    "content-type": "application/json"
}

payload = {
    "addresses": ["0x..."],
    "from_timestamp": 1710000000,
    "to_timestamp": 1711000000,
    "interval": "day"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": [
    {
      "chain_id": "base",
      "chain_name": "Base",
      "chain_icon_url": "https://static.lambda.p2p.org/chains/base.png",
      "category": "erc20",
      "wallet_address": "0xdb6e9e7390e9acc34619e56efa48ade01cff6f12",
      "position_id": "0xdbfefd2e8460a6ee4955a68582f85708baea60a3",
      "summary": {
        "start": "2025-08-06T00:00:01+00:00",
        "end": "2025-09-05T08:30:01+00:00",
        "pnl_usd": 2822871.721936092,
        "tokens": [
          {
            "id": "0xdbfefd2e8460a6ee4955a68582f85708baea60a3",
            "symbol": "superOETHb",
            "name": "Super OETH",
            "position_type": "supply",
            "icon_url": "https://static.lambda.p2p.org/tokens/base/0xdbfefd2e8460a6ee4955a68582f85708baea60a3.png",
            "defi_id": "erc20",
            "defi_name": "Erc20",
            "attributes": {
              "address": "0xdbfefd2e8460a6ee4955a68582f85708baea60a3",
              "decimals": 18,
              "chain_id": "base",
              "chain_name": "Base",
              "chain_id_numeric": 8453
            },
            "start_balance": {
              "balance": 2628.0887891055277,
              "price": 3627.1475841511256
            },
            "end_balance": {
              "balance": 4128.087289105528,
              "price": 4310.9683282972
            }
          }
        ]
      },
      "pnl_history": [
        {
          "time": "2025-08-06T00:00:01+00:00",
          "balance_usd": 9532465.902338771,
          "reward_usd": 0,
          "reward_usd_net": 0,
          "pnl_usd": 0,
          "profit_gains_usd": 0,
          "token_amount": 2628.0887891055277
        },
        {
          "time": "2025-08-06T10:04:08+00:00",
          "balance_usd": 9532465.902338771,
          "reward_usd": 0,
          "reward_usd_net": 0,
          "pnl_usd": 0,
          "profit_gains_usd": 0,
          "token_amount": 2628.0887891055277
        }
      ],
      "user_activities": [
        {
          "time": "2025-08-06T10:04:09+00:00",
          "type": "deposit",
          "symbol": "superOETHb",
          "amount": 1499.9985000000001,
          "value_usd": 5440715.935505313,
          "transaction_hash": "0x8e7b341a70da11525d247928ee2894cd4b57ca7f8addf0d4a304c87d8588710f"
        }
      ],
      "reward_history": []
    }
  ]
}`;

const PATH_PARAMS: ReqResParam[] = [
  {
    paramName: "chain",
    type: "string",
    paramDescription: "[Required] Target chain",
  },
  {
    paramName: "key",
    type: "string",
    paramDescription: "[Required] Your dRPC API key",
  },
];

const REQUEST_PARAMS: RequestParamProp = [
  {
      paramName: "start_timestamp",
      type: "integer",
      paramDescription: "≥ 0. The start timestamp in milliseconds. Default: now - 30 days."
    },
    {
      paramName: "end_timestamp",
      type: "integer",
      paramDescription: "≥ 0. The end timestamp in milliseconds. Default: now."
    },
    {
      paramName: "granularity",
      type: "string",
      paramDescription: "Granularity. Default: day.",
      paramEnum: [
        {value: "month", description: null },
        { value: "week", description: null },
        { value: "day", description: null },
        { value: "hour", description: null },
        { value: "five_minutes", description: null },
        { value: "any", description: null }
      ]
    },
    {
      paramName: "points_limit",
      type: "integer",
      paramDescription: "2 to 100. The maximum number of points to return. Default: 100. Max: 100."
    },
  {
    paramName: "positions",
    type: "array_of_objects",
    paramDescription: "List of specific positions (wallet address + category + position ID) to calculate aggregated PnL for. Each position represents a unique token or DeFi position.",
    childrenParamsType:"object",
    childrenParams: [
        {
      paramName: "address",
      type: "string",
      paramDescription: "Wallet address of the position"
    },
        {
      "paramName": "category",
      "type": "string",
      "paramDescription": "[Required] The category of the PnL.",
      "paramEnum": [
        { "value": "erc20", "description": "ERC-20 tokens" },
        { "value": "native", "description": "Native tokens" },
        { "value": "aave-v3-supply", "description": "AAVE V3 Lending" },
        { "value": "aave-v3-borrow", "description": "AAVE V3 Borrowing" },
        { "value": "uni-v2-supply", "description": "Uniswap V2" },
        { "value": "uni-v3-supply", "description": "Uniswap V3" },
        { "value": "sushi-v2-supply", "description": "SushiSwap V2" },
        { "value": "sushi-v3-supply", "description": "SushiSwap V3" },
        { "value": "lido", "description": "Lido" },
        { "value": "venus-supply", "description": "Venus Supply" },
        { "value": "venus-staking", "description": "Venus Staking" },
        { "value": "balancer-v2", "description": "Balancer V2" },
        { "value": "aura", "description": "Aura" },
        { "value": "morpho-vault", "description": "Morpho Vault" },
        { "value": "morpho-market-supply", "description": "Morpho Market Supply" },
        { "value": "morpho-market-borrow", "description": "Morpho Market Borrow" },
        { "value": "morpho-market-collateral", "description": "Morpho Market Collateral" },
        { "value": "renzo", "description": "Renzo" },
        { "value": "ether-fi", "description": "Ether.fi" },
        { "value": "sky", "description": "Sky" },
        { "value": "euler-vesting", "description": "Euler Vesting" },
        { "value": "euler-supply", "description": "Euler Supply" },
        { "value": "euler-borrow", "description": "Euler Borrow" },
        { "value": "pendle", "description": "Pendle" },
        { "value": "ethena-staking", "description": "Ethena Staking" },
        { "value": "ethena-locked", "description": "Ethena Locked" },
        { "value": "ethena-cooldown", "description": "Ethena Cooldown" },
        { "value": "gearbox", "description": "Gearbox" },
        { "value": "fluid", "description": "Fluid" },
        { "value": "kiln", "description": "Kiln" },
        { "value": "compound-v3-supply", "description": "Compound V3 CToken Supply" },
        { "value": "compound-v3-borrow", "description": "Compound V3 Lending Borrow" },
        { "value": "compound-v3-reward", "description": "Compound V3 COMP Rewards" },
        { "value": "compound-v3-collateral", "description": "Compound V3 Lending Collateral" }
      ]
    },
    {
  paramName: "position_id",
  type: "string",
  paramDescription: "[Required] The position ID, which depends on the category",
  paramEnum: [
    {
      value: "Uniswap V3 / SushiSwap V3",
      description: "{Pool Address}-{Numeric NFT position ID} (e.g., 0xf6c4e4f339912541d3f8ed99dba64a1372af5e5b-123456)"
    },
    {
      value: "Uniswap V2 / SushiSwap V2",
      description: "Pool address (hash) (e.g., 0xf6c4e4f339912541d3f8ed99dba64a1372af5e5b)"
    },
    {
      value: "Aave V3 / ERC-20",
      description: "aToken/aDebtToken address (e.g., 0xefd6c64533602ac55ab64442307f6fe2c9307305)"
    },
    {
      value: "Morpho Vault",
      description: "pool address (e.g., 0x0f359fd18bda75e9c49bc027e7da59a4b01bf32a)"
    },
    {
      value: "Morpho Market Supply/Borrow/Collateral",
      description: "Market id bytes (e.g., 0x64d65c9a2d91c36d56fbc42d69e979335320169b3df63bf92789e2c8883fcc64)"
    },
    {
      value: "Lido",
      description: "stETH/wstETH address (e.g., 0xae7ab96520de3a18e5e111b5eaab095312d7fe84)"
    },
    {
      value: "Venus Supply",
      description: "vToken address (e.g., 0xc82780db1257c788f262fbbda960b3706dfdcaf2)"
    },
    {
      value: "Venus Staking",
      description: "staking pool address (e.g., 0xa0882c2d5df29233a092d2887a258c2b90e9b994)"
    },
    {
      value: "Balancer V2",
      description: "pool address (e.g., 0x1e19cf2d73a72ef1332c882f20534b6519be0276)"
    },
    {
      value: "Aura",
      description: "pool address (e.g., 0xdd1fe5ad401d4777ce89959b7fa587e569bf125d)"
    },
    {
      value: "Renzo",
      description: "ezETH, pzETH, ezREZ or ezEIGEN address (e.g., 0xdf6097a9e585E3d72556D19fA147562FfEf5D3C7)"
    },
    {
      value: "Ether.fi",
      description: "eETH, weETH or vault address (e.g., 0x35fa164735182de50811e8e2e824cfb9b6118ac2)"
    },
    {
      value: "Sky",
      description: "pool address (e.g., 0xa3931d71877c0e7a3148cb7eb4463524fec27fbd)"
    },
    {
      value: "Euler",
      description: "pool address (e.g., 0xf3e621395fc714b90da337aa9108771597b4e696)"
    },
    {
      value: "Euler Vesting",
      description: "pool address (e.g., 0xf3e621395fc714b90da337aa9108771597b4e696)"
    },
    {
      value: "Euler Supply",
      description: "{eToken Address}-{subaccount index} (e.g., 0xf3e621395fc714b90da337aa9108771597b4e696-3)"
    },
    {
      value: "Euler Borrow",
      description: "{eDebtToken Address}-{subaccount index} (e.g., 0x6200860bcdcb23d3b67a46769affeb91db2b175a-2)"
    },
    {
      value: "Pendle",
      description: "(AMM, SY, YT, PT, STAKING) pool address (e.g., 0x6d98a2b6cdbf44939362a3e99793339ba2016af4)"
    },
    {
      value: "Gearbox",
      description: "pool address, diselToken, dToken (e.g., 0xff94993fa7ea27efc943645f95adb36c1b81244b)"
    },
    {
      value: "Curve",
      description: "pool address of curve_lp_token/gauge_address/veCRV/scrvUSD/vesting (e.g., 0xecd5e75afb02efa118af914515d6521aabd189f1)"
    },
    {
      value: "Curve Collateral",
      description: "pool address of curve llamalend lending (e.g., 0xeda215b7666936ded834f76f3fbc6f323295110a)"
    },
    {
      value: "Curve Borrow",
      description: "pool address of curve llamalend lending (e.g., 0xeda215b7666936ded834f76f3fbc6f323295110a)"
    },
    {
      value: "Fluid",
      description: "fToken address of fluid yield (e.g., 0x6a29a46e21c730dca1d8b23d637c101cec605c5b)"
    },
    {
      value: "Kiln",
      description: "pool address of kiln (e.g., 0x2401c39d7ba9e283668a53fcc7b8f5fd9e716fdf)"
    },
    {
      value: "Compound V3 Supply",
      description: "cToken address (e.g., 0xc3d688b66703497daa19211eedff47f25384cdc3)"
    },
    {
      value: "Compound V3 Lending Borrow",
      description: "cToken address (e.g., 0xc3d688b66703497daa19211eedff47f25384cdc3)"
    },
    {
      value: "Compound V3 COMP Rewards",
      description: "cToken address (e.g., 0xc3d688b66703497daa19211eedff47f25384cdc3)"
    },
    {
      value: "Compound V3 Lending Collateral",
      description: "cToken-collateral_token_address address (e.g., 0xc3d688b66703497daa19211eedff47f25384cdc3-0x2260fac5e5542a773aa44fbcfedf7c193bc2c599)"
    }
  ]
},
    ]
  },

];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  "paramName": "data",
  "type": "array",
  "paramDescription": "[Required] Returns historical records of Profit and Loss (PnL) over time.",
  "childrenParamsType": "object",
  "childrenParams": [
    {
      "paramName": "chain_id",
      "type": "string",
      "paramDescription": "[Required] id of the chain"
    },
    {
      "paramName": "chain_name",
      "type": "string",
      "paramDescription": "[Required] name of the chain"
    },
    {
      "paramName": "chain_icon_url",
      "type": "string",
      "paramDescription": "URL of the chain",
      "childrenParamsType": "nullable"
    },
    {
      "paramName": "category",
      "type": "string",
      "paramDescription": "[Required] Category or DeFi id of the position.",
      "paramEnum": [
        { "value": "erc20", "description": null },
        { "value": "native", "description": null },
        { "value": "aave-v3-supply", "description": null },
        { "value": "aave-v3-borrow", "description": null },
        { "value": "uni-v2-supply", "description": null },
        { "value": "uni-v3-supply", "description": null },
        { "value": "sushi-v2-supply", "description": null },
        { "value": "sushi-v3-supply", "description": null },
        { "value": "lido", "description": null },
        { "value": "venus-supply", "description": null },
        { "value": "venus-borrow", "description": null },
        { "value": "venus-staking", "description": null },
        { "value": "balancer-v2", "description": null },
        { "value": "aura", "description": null },
        { "value": "morpho-vault", "description": null },
        { "value": "morpho-market-supply", "description": null },
        { "value": "morpho-market-borrow", "description": null },
        { "value": "morpho-market-collateral", "description": null },
        { "value": "renzo", "description": null },
        { "value": "ether-fi", "description": null },
        { "value": "rocket", "description": null },
        { "value": "sky", "description": null },
      ]
    },
    {
      "paramName": "wallet_address",
      "type": "string",
      "paramDescription": "[Required] Wallet address of the position."
    },
    {
      "paramName": "position_id",
      "type": "string",
      "paramDescription": "[Required] Position id of the position."
    },
    {
      "paramName": "summary",
      "type": "object",
      "paramDescription": "[Required] Summary of the PnL and tokens.",
      "childrenParamsType": "object",
      "childrenParams": [
        {
          "paramName": "start",
          "type": "string",
          "paramDescription": "Start timestamp of the summary period."
        },
        {
          "paramName": "end",
          "type": "string",
          "paramDescription": "End timestamp of the summary period."
        },
        {
          "paramName": "pnl_usd",
          "type": "number",
          "paramDescription": "Total PnL in USD."
        },
        {
          "paramName": "tokens",
          "type": "array",
          "paramDescription": "List of tokens in the position.",
          "childrenParamsType": "object",
          "childrenParams": [
            { "paramName": "id", "type": "string", "paramDescription": "Token ID." },
            { "paramName": "symbol", "type": "string", "paramDescription": "Token symbol." },
            { "paramName": "name", "type": "string", "paramDescription": "Token name." },
            { "paramName": "position_type", "type": "string", "paramDescription": "Type of position (e.g., supply, borrow)." },
            { "paramName": "icon_url", "type": "string", "paramDescription": "URL to download token icon." },
            { "paramName": "defi_id", "type": "string", "paramDescription": "DeFi ID of the token." },
            { "paramName": "defi_name", "type": "string", "paramDescription": "Community name of DeFi." },
            { "paramName": "attributes", "type": "object", "paramDescription": "Token attributes.", "childrenParamsType": "object", "childrenParams": [
              { "paramName": "address", "type": "string", "paramDescription": "Token contract address." },
              { "paramName": "decimals", "type": "number", "paramDescription": "Token decimals." },
              { "paramName": "chain_id", "type": "string", "paramDescription": "Chain id." },
              { "paramName": "chain_name", "type": "string", "paramDescription": "Chain name." },
              { "paramName": "chain_id_numeric", "type": "number", "paramDescription": "Numeric chain id." }
            ]},
            { "paramName": "start_balance", "type": "object", "paramDescription": "Starting token balance and price.", "childrenParamsType": "object", "childrenParams": [
              { "paramName": "balance", "type": "number", "paramDescription": "Balance at start." },
              { "paramName": "price", "type": "number", "paramDescription": "Token price at start in USD." }
            ]},
            { "paramName": "end_balance", "type": "object", "paramDescription": "Ending token balance and price.", "childrenParamsType": "object", "childrenParams": [
              { "paramName": "balance", "type": "number", "paramDescription": "Balance at end." },
              { "paramName": "price", "type": "number", "paramDescription": "Token price at end in USD." }
            ]}
          ]
        }
      ]
    },
    {
      "paramName": "pnl_history",
      "type": "array",
      "paramDescription": "[Required] List of asset changes over time.",
      "childrenParamsType": "object",
      "childrenParams": [
        { "paramName": "time", "type": "string", "paramDescription": "[Required] Timestamp of the PnL entry." },
        { "paramName": "balance_usd", "type": "number", "paramDescription": "[Required] Position balance in USD at the given timestamp." },
        { "paramName": "reward_usd", "type": "number", "paramDescription": "[Required] Rewards earned in tokens converted to USD (current price)." },
        { "paramName": "reward_usd_net", "type": "number", "paramDescription": "[Required] Rewards in tokens converted using latest price." },
        { "paramName": "pnl_usd", "type": "number", "paramDescription": "[Required] Total change in portfolio value compared to initial state." },
        { "paramName": "profit_gains_usd", "type": "number", "paramDescription": "[Required] Net change in token balance adjusted for price fluctuations." },
        { "paramName": "token_amount", "type": "number", "paramDescription": "[Required] Amount of tokens in the position." }
      ]
    },
    {
      "paramName": "user_activities",
      "type": "array",
      "paramDescription": "[Required] Withdrawal/Deposits in scope of PnL interval.",
      "childrenParamsType": "object",
      "childrenParams": [
        { "paramName": "time", "type": "string", "paramDescription": "[Required] Timestamp of the user activity." },
        { "paramName": "type", "type": "string", "paramDescription": "[Required] Type of user activity.", "paramEnum": [
          { "value": "deposit", "description": null },
          { "value": "withdraw", "description": null }
        ]},
        { "paramName": "symbol", "type": "string", "paramDescription": "[Required] Token symbol affected." },
        { "paramName": "amount", "type": "number", "paramDescription": "[Required] Amount of tokens changed." },
        { "paramName": "value_usd", "type": "number", "paramDescription": "[Required] Value of the token in USD." },
        { "paramName": "transaction_hash", "type": "string", "paramDescription": "[Required] Transaction hash of the activity." }
      ]
    },
    {
      "paramName": "reward_history",
      "type": "array",
      "paramDescription": "[Required] List of rewards earned during the PnL interval.",
      "childrenParamsType": "object",
      "childrenParams": [
        { "paramName": "time", "type": "string", "paramDescription": "[Required] Timestamp of the reward." },
        { "paramName": "type", "type": "string", "paramDescription": "[Required] Type of reward.", "paramEnum": [
          { "value": "supply", "description": null },
          { "value": "borrow", "description": null },
          { "value": "stake", "description": null },
          { "value": "reward", "description": null }
        ]},
        { "paramName": "symbol", "type": "string", "paramDescription": "[Required] Token symbol of the reward." },
        { "paramName": "name", "type": "string", "paramDescription": "[Required] Token name of the reward." },
        { "paramName": "icon_url", "type": "string", "paramDescription": "URL to download icon of the token.", "childrenParamsType": "nullable" },
        { "paramName": "amount", "type": "number", "paramDescription": "[Required] Amount of reward tokens." },
        { "paramName": "price", "type": "number", "paramDescription": "[Required] Price of the reward token in USD." }
      ]
    }
  ]
}
];


const USE_CASES = [
  "The user’s own funds are separated from rewards. This allows us to account for both Profit & Loss movements and rewards, while incoming transfers, top-ups, and withdrawals are not considered as sources of income or loss",
  "Support blue chip tokens and DeFi positions across major EVM chains."
];

const CONSTRAINTS = [
   "The current version is limited to open DeFi positions, while the next update will support historical closed positions as well.",
  "Requires valid chain and wallet address",
  "Time range parameters affect response size",
];