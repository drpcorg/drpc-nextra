import WalletMethod from "../../WalletMethod/WalletMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_gettransactionshistory() {
  return (
    <WalletMethod
      method="Get Transactions History"
      cu={1837}
      description={"Returns a chronological list of blockchain transactions for the specified wallet address"}
      url={["Per chain: GET https://lb.drpc.live/{chain}/{key}/lambda/v1/transactions/{address}/history", "Multichain: GET https://lb.drpc.live/lambda/{key}/v1/transactions/{address}/history"]}
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
  --url https://lb.drpc.live/{chain}/{key}/lambda/v1/transactions/{address}/history \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/transactions/{address}/history", {
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

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/transactions/{address}/history", {
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
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/{chain}/{key}/lambda/v1/transactions/{address}/history", nil)
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
        .get("https://lb.drpc.live/{chain}/{key}/lambda/v1/transactions/{address}/history")
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

url = "https://lb.drpc.live/{chain}/{key}/lambda/v1/transactions/{address}/history"
headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "next_page_token": "6de32230-8b88-4637-8cf2-28c1eefe2a24",
  "data": [
    {
      "type": "receive",
      "hash": "0x59fd7afbc5d33628e60cfdb0b735da073bac28c046a808dbcc795edd7598b362",
      "block": 19071142,
      "timestamp": 1706034371000,
      "sender_address": "0x710bda329b2a6224e4b44833de30f38e7f81d564",
      "recipient_address": "0xb8901acb165ed027e32754e0ffe830802919727f",
      "status": "confirmed",
      "nonce": 569460,
      "chain_id": "ethereum",
      "chain_name": "Ethereum",
      "chain_id_numeric": 1,
      "defi": {
        "address": "0xb8901acb165ed027e32754e0ffe830802919727f",
        "name": "Hop Protocol"
      },
      "fee": {
        "token_name": "Ethereum",
        "token_symbol": "ETH",
        "token_address": "",
        "token_price": 2211.06,
        "token_decimals": 18,
        "token_amount_string": "1799324179642211",
        "token_amount": 0.0017993241796422,
        "value_usd": 3.9784137206396823
      },
      "transfers": [
        {
          "direction": "in",
          "sender_address": "0xb8901acb165ed027e32754e0ffe830802919727f",
          "recipient_address": "0xbed2bd7e0e7c593db6c32654e28f6a8b90f9288a",
          "token": {
            "name": "Ethereum",
            "symbol": "ETH",
            "address": ""
          },
          "price": 2211.06,
          "decimals": 18,
          "amount_string": "7097893158465857",
          "amount": 0.0070978931584659,
          "value_usd": 15.693867646957614
        }
      ],
      "approvals": [],
      "attributes": {
        "is_trash": false
      }
    },
    {
      "type": "deposit",
      "hash": "0x11cd26d074a3965efca1de31d3b9e62f4776b6a89705e8b2fa7331cad5a95295",
      "block": 21134441,
      "timestamp": 1730966411000,
      "sender_address": "0xbed2bd7e0e7c593db6c32654e28f6a8b90f9288a",
      "recipient_address": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
      "status": "confirmed",
      "nonce": 3,
      "chain_id": "ethereum",
      "chain_name": "Ethereum",
      "chain_id_numeric": 1,
      "defi": {
        "address": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
        "name": "SushiSwap"
      },
      "fee": {
        "token_name": "Ethereum",
        "token_symbol": "ETH",
        "token_address": "",
        "token_price": 2820.19,
        "token_decimals": 18,
        "token_amount_string": "2021915715800139",
        "token_amount": 0.0020219157158001,
        "value_usd": 5.7021864825422846
      },
      "transfers": [
        {
          "direction": "in",
          "sender_address": "0x0000000000000000000000000000000000000000",
          "recipient_address": "0xbed2bd7e0e7c593db6c32654e28f6a8b90f9288a",
          "token": {
            "name": "Sushi ETH/USDT Pool",
            "symbol": "SLP",
            "address": "0x06da0fd433c1a5d7a4faa01111c044910a184553"
          },
          "decimals": 18,
          "amount_string": "29804362001",
          "amount": 2.9804362e-8
        },
        {
          "direction": "out",
          "sender_address": "0xbed2bd7e0e7c593db6c32654e28f6a8b90f9288a",
          "recipient_address": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
          "token": {
            "name": "Ethereum",
            "symbol": "ETH",
            "address": ""
          },
          "price": 2820.19,
          "decimals": 18,
          "amount_string": "1024937862292196",
          "amount": 0.0010249378622922,
          "value_usd": 2.8905195098578393
        },
        {
          "direction": "out",
          "sender_address": "0xbed2bd7e0e7c593db6c32654e28f6a8b90f9288a",
          "recipient_address": "0x06da0fd433c1a5d7a4faa01111c044910a184553",
          "token": {
            "name": "Tether USD",
            "symbol": "USDT",
            "icon_url": "https://static.lambda.p2p.org/tokens/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "price": 1.0000111721,
          "decimals": 6,
          "amount_string": "2886491",
          "amount": 2.886491,
          "value_usd": 2.886523248166101
        }
      ],
      "approvals": [],
      "attributes": {
        "is_trash": false
      }
    },
    {
      "type": "approve",
      "hash": "0x5c77c6b56e6a6cca04a52624a1a0d03553a9d238f50124aa328fe783f0c39b65",
      "block": 21864339,
      "timestamp": 1739774003000,
      "sender_address": "0xbed2bd7e0e7c593db6c32654e28f6a8b90f9288a",
      "recipient_address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "status": "confirmed",
      "nonce": 7,
      "chain_id": "ethereum",
      "chain_name": "Ethereum",
      "chain_id_numeric": 1,
      "defi": {
        "address": "0x8bb4c975ff3c250e0ceea271728547f3802b36fd"
      },
      "fee": {
        "token_name": "Ethereum",
        "token_symbol": "ETH",
        "token_address": "",
        "token_price": 2681.96,
        "token_decimals": 18,
        "token_amount_string": "59240015634219",
        "token_amount": 0.0000592400156342,
        "value_usd": 0.15887935233029904
      },
      "transfers": [],
      "approvals": [
        {
          "token": {
            "name": "Tether USD",
            "symbol": "USDT",
            "icon_url": "https://static.lambda.p2p.org/tokens/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "amount": 24,
          "sender_address": "0x8bb4c975ff3c250e0ceea271728547f3802b36fd"
        }
      ],
      "attributes": {
        "is_trash": false
      }
    }
  ]
}`;

const PATH_PARAMS: ReqResParam[] = [
  {
    paramName: "chain",
    type: "string",
    paramDescription: "Target chain (per chain requests only)",
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
    paramName: "chain_ids",
    type: "array",
    paramDescription: "Id of chains in Wallet API. default: all chains",
  },
  {
    paramName: "start",
    type: "integer",
    paramDescription: "Start timestamp in millis",
  },
  {
    paramName: "end",
    type: "integer",
    paramDescription: "End timestamp in millis",
  },
  {
    paramName: "limit",
    type: "integer",
    paramDescription: "Number transactions to return. Default is 100",
  },
  {
    paramName: "page_token",
    type: "string",
    paramDescription: "Token to retrieve next page.",
  },
];

const REQUEST_PARAMS: RequestParamProp = [];

const RESPONSE_PARAMS: ReqResParam[] = [
    {
      "paramName": "next_page_token",
      "type": "string",
      "paramDescription": "Token to retrieve next page."
    },
    {
      "paramName": "data",
      "type": "array",
      "paramDescription": "[Required] Tokens data",
      "childrenParamsType": "object",
      "childrenParams": [
        {
          "paramName": "type",
          "type": "string",
          "paramDescription": "[Required] Transaction type",
          "paramEnum": [
            { "value": "receive", "description": null },
            { "value": "deposit", "description": null },
            { "value": "approve", "description": null },
            { "value": "swap", "description": null },
            { "value": "send", "description": null },
            { "value": "burn", "description": null },
            { "value": "deploy", "description": null }  ,
            { "value": "execute", "description": null }
          ]
        },
        {
          "paramName": "hash",
          "type": "string",
          "paramDescription": "[Required] Transaction hash"
        },
        {
          "paramName": "block",
          "type": "integer",
          "paramDescription": "[Required] Block number"
        },
        {
          "paramName": "timestamp",
          "type": "integer",
          "paramDescription": "[Required] Timestamp"
        },
        {
          "paramName": "sender_address",
          "type": "string",
          "paramDescription": "[Required] Sender address"
        },
        {
          "paramName": "recipient_address",
          "type": "string",
          "paramDescription": "[Required] Recipient address"
        },
        {
          "paramName": "status",
          "type": "string",
          "paramDescription": "[Required] Transaction status"
        },
        {
          "paramName": "nonce",
          "type": "integer",
          "paramDescription": "[Required] Transaction nonce"
        },
        {
          "paramName": "chain_id",
          "type": "string",
          "paramDescription": "[Required] id of a chain in Lambda API"
        },
        {
          "paramName": "chain_name",
          "type": "string",
          "paramDescription": "[Required] name of a chain in Lambda API"
        },
        {
          "paramName": "chain_id_numeric",
          "type": "integer",
          "paramDescription": "Numeric id of the chain"
        },
        {
          "paramName": "chain_icon_url",
          "type": "string",
          "paramDescription": "URL to download icon of the chain."
        },
        {
          "paramName": "defi",
          "type": "object",
          "paramDescription": "Defi application",
          "childrenParamsType": "object",
          "childrenParams": [
            { "paramName": "address", "type": "string", "paramDescription": "Defi address" },
            { "paramName": "name", "type": "string", "paramDescription": "Defi name" }
          ]
        },
        {
          "paramName": "fee",
          "type": "object",
          "paramDescription": "Transaction fee",
          "childrenParamsType": "object",
          "childrenParams": [
            { "paramName": "token_name", "type": "string", "paramDescription": "Token name" },
            { "paramName": "token_symbol", "type": "string", "paramDescription": "Token symbol" },
            { "paramName": "token_address", "type": "string", "paramDescription": "Token address" },
            { "paramName": "token_price", "type": "number", "paramDescription": "Token price" },
            { "paramName": "token_decimals", "type": "integer", "paramDescription": "Token decimals" },
            { "paramName": "token_amount_string", "type": "string", "paramDescription": "Token amount without decimals" },
            { "paramName": "token_amount", "type": "number", "paramDescription": "Token amount" },
            { "paramName": "value_usd", "type": "number", "paramDescription": "Value USD" }
          ]
        },
        {
          "paramName": "transfers",
          "type": "array",
          "paramDescription": "[Required] Transaction transfers",
          "childrenParamsType": "object",
          "childrenParams": [
            { "paramName": "direction", "type": "string", "paramDescription": "[Required] Direction of transaction" },
            { "paramName": "sender_address", "type": "string", "paramDescription": "[Required] Sender address" },
            { "paramName": "recipient_address", "type": "string", "paramDescription": "[Required] Recipient address" },
            {
              "paramName": "token",
              "type": "object",
              "paramDescription": "Token",
              "childrenParamsType": "object",
              "childrenParams": [
                { "paramName": "name", "type": "string", "paramDescription": "Token name" },
                { "paramName": "symbol", "type": "string", "paramDescription": "Token symbol" },
                { "paramName": "address", "type": "string", "paramDescription": "Token address" },
                { "paramName": "icon_url", "type": "string", "paramDescription": "Token icon URL" }
              ]
            },
            { "paramName": "nft", "type": "nft_info", "paramDescription": "Nft" },
            { "paramName": "price", "type": "number", "paramDescription": "Token price" },
            { "paramName": "decimals", "type": "integer", "paramDescription": "Token decimals" },
            { "paramName": "amount_string", "type": "string", "paramDescription": "[Required] Token Amount without decimals" },
            { "paramName": "amount", "type": "number", "paramDescription": "[Required] Token Amount" },
            { "paramName": "value_usd", "type": "number", "paramDescription": "Value USD" }
          ]
        },
        {
          "paramName": "approvals",
          "type": "array",
          "paramDescription": "[Required] Transaction approvals",
          "childrenParamsType": "object",
          "childrenParams": [
            {
              "paramName": "token",
              "type": "object",
              "paramDescription": "Token",
              "childrenParamsType": "object",
              "childrenParams": [
                { "paramName": "name", "type": "string", "paramDescription": "Token name" },
                { "paramName": "symbol", "type": "string", "paramDescription": "Token symbol" },
                { "paramName": "address", "type": "string", "paramDescription": "Token address" },
                { "paramName": "icon_url", "type": "string", "paramDescription": "Token icon URL" }
              ]
            },
            { "paramName": "nft", "type": "nft_info", "paramDescription": "nft" },
            { "paramName": "amount", "type": "number", "paramDescription": "[Required] Token Amount" },
            { "paramName": "sender_address", "type": "string", "paramDescription": "[Required] Sender address" }
          ]
        },
        {
          "paramName": "attributes",
          "type": "object",
          "paramDescription": "[Required] Transaction attributes",
          childrenParamsType: "boolean",
          childrenParams: [
              { "paramName": "is_trash", "type": "boolean", "paramDescription": "Is trash" },
          ]  ,
        }
      ]
    }
];

const USE_CASES = [
  "Retrieve full transaction history for a wallet",
  "Track incoming and outgoing transfers",
];

const CONSTRAINTS = [
  "Requires valid chain and wallet address",
  "Pagination is required for large transaction histories",
];