import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getpnlformultiplewallets(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Get PnL for Multiple Wallets"
      network=""
      cu={334000}
      description={"The Wallet PnL (Profit and Loss) data is provided for entire wallets, aggregating all positions and tokens within each specified wallet address"}
      url={"POST https://lb.drpc.live/{chain}/{key}/lambda/v1/wallet-pnl-history"}
      isRESTApi={true}
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
      responseParamsDescription={""}
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
  --url https://lb.drpc.live/{chain}/{key}/lambda/v1/wallet-pnl-history \\
  --header 'accept: application/json' \\
  --header 'Content-Type: application/json' \\
  --data '{}'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallet-pnl-history", {
  method: "POST",
  headers: {
    "accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);`,
  },
  {
    language: "node",
    code: () => `import fetch from "node-fetch";

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallet-pnl-history", {
  method: "POST",
  headers: {
    "accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
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
  "strings"
)

func main() {
  req, _ := http.NewRequest("POST", "https://lb.drpc.live/{chain}/{key}/lambda/v1/wallet-pnl-history", strings.NewReader("{}"))
  req.Header.Set("accept", "application/json")
  req.Header.Set("Content-Type", "application/json")

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

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();

    let res = client
        .post("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallet-pnl-history")
        .header(ACCEPT, "application/json")
        .header(CONTENT_TYPE, "application/json")
        .body("{}")
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
import json

url = "https://lb.drpc.live/{chain}/{key}/lambda/v1/wallet-pnl-history"
headers = {
    "accept": "application/json",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, data=json.dumps({}))
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
    paramDescription: "[Required] Chain name",
  },
  {
    paramName: "key",
    type: "string",
    paramDescription: "[Required] Your dRPC API key",
  },
];

const REQUEST_PARAMS: RequestParamProp = [
  {
      "paramName": "start_timestamp",
      "type": "integer",
      "paramDescription": "≥ 0. The start timestamp in milliseconds. Default: now - 30 days."
    },
    {
      "paramName": "end_timestamp",
      "type": "integer",
      "paramDescription": "≥ 0. The end timestamp in milliseconds. Default: now."
    },
    {
      "paramName": "granularity",
      "type": "string",
      "paramDescription": "Granularity of PnL points. Defaults to day.",
      "paramEnum": [
        { "value": "month", "description": null },
        { "value": "week", "description": null },
        { "value": "day", "description": null },
        { "value": "hour", "description": null },
        { "value": "five_minutes", "description": null },
        { "value": "any", "description": null }
      ]
    },
    {
      "paramName": "points_limit",
      "type": "integer",
      "paramDescription": "2 to 100. The maximum number of points to return. Default: 100. Max: 100."
    },
    {
      "paramName": "addresses",
      "type": "array_of_strings",
      "paramDescription": "List of wallet addresses to calculate PnL for. All positions within these wallets will be included in the aggregated calculation."
    }
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