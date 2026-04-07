import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getyieldrecommendations(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Get Yield Recommendations"
      cu={210420}
      description={"Get the missing yield for your tokens and DeFi positions. The endpoint provides historical rewards and compares them to potential earnings."}
      url={"POST https://lb.drpc.live/lambda/{key}/v1/wallets/{address}/recommendations"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      requestParams={REQUEST_PARAMS}
      queryParamsType="none"
      requestParamsType="array_of_objects"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
  --url https://lb.drpc.live/lambda/{key}/v1/wallets/{address}/recommendations \\
  --header 'accept: application/json' \\
  --header 'content-type: application/json' \\
  `,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/lambda/{key}/v1/wallets/{address}/recommendations", {
  method: "POST",
  headers: {
    "accept": "application/json",
    "content-type": "application/json"
  },
 
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);`,
  },
  {
    language: "node",
    code: () => `import fetch from "node-fetch";

const res = await fetch("https://lb.drpc.live/lambda/{key}/v1/wallets/{address}/recommendations", {
  method: "POST",
  headers: {
    "accept": "application/json",
    "content-type": "application/json"
  },
  
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
 
  req, _ := http.NewRequest("POST", "https://lb.drpc.live/lambda/{key}/v1/wallets/{address}/recommendations", bytes.NewBuffer(payload))
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
        .post("https://lb.drpc.live/lambda/{key}/v1/wallets/{address}/recommendations")
        .header(ACCEPT, "application/json")
        .header(CONTENT_TYPE, "application/json")
      
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

url = "https://lb.drpc.live/lambda/{key}/v1/wallets/{address}/recommendations"
headers = {
    "accept": "application/json",
    "content-type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": [
    {
      "asset": "string",
      "protocol": "string",
      "chain_name": "string",
      "interval": 0,
      "amount_lost_usd": 0,
      "recommendation": [
        {
          "protocol": "Aave",
          "protocol_url": "https://app.aave.com",
          "protocol_icon_url": "https://static.lambda.p2p.org/protocols/aave-pool-v3.png",
          "expected_apr": 0.05
        },
        {
          "protocol": "Morpho",
          "protocol_url": "https://app.morpho.org/ethereum/earn",
          "protocol_icon_url": "https://static.lambda.p2p.org/protocols/morpho-blue.png",
          "expected_apr": 0.04
        }
      ],
      "details": [
        {
          "start": "2025-03-01T00:00:00Z",
          "end": "2025-03-08T00:00:00Z",
          "usd_from": 11,
          "usd_to": 11.3,
          "rewards_usd": 0.3,
          "recommendation": [
            {
              "protocol": "AAVE V3",
              "usd_to": 11.5,
              "potential_rewards_usd": 0.5
            },
            {
              "protocol": "MORPHO",
              "usd_to": 11.4,
              "potential_rewards_usd": 0.4
            }
          ]
        }
      ]
    }
  ]
}`;

const PATH_PARAMS: ReqResParam[] = [
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

const REQUEST_PARAMS: RequestParamProp = [
   {
    paramName: "period",
    type: "networth_period",
    paramDescription: "Period of time",
  },
  {
    paramName: "vaults",
    type: "array",
    paramDescription: "Vaults filter that will be used to calculate recommendations. Default: none",
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
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "data",
  type: "array",
  paramDescription: "[Required] List of yield optimization opportunities.",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "asset",
      type: "string",
      paramDescription: "[Required] Token symbol being analyzed."
    },
    {
      paramName: "protocol",
      type: "string",
      paramDescription: "[Required] Current protocol holding the asset."
    },
    {
      paramName: "chain_name",
      type: "string",
      paramDescription: "[Required] Chain name."
    },
    {
      paramName: "interval",
      type: "integer",
      paramDescription: "[Required] Length of the interval in milliseconds."
    },
    {
      paramName: "amount_lost_usd",
      type: "number",
      paramDescription: "[Required] Total unrealized reward difference."
    },
    {
      paramName: "recommendation",
      type: "array",
      paramDescription: "[Required] List of alternate protocols and APRs that could have been more profitable.",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "protocol",
          type: "string",
          paramDescription: "[Required] Protocol name being recommended."
        },
        {
          paramName: "protocol_url",
          type: "string",
          paramDescription: "Link to the recommended protocol's website."
        },
        {
          paramName: "protocol_icon_url",
          type: "string",
          paramDescription: "Link to the protocol's icon."
        },
        {
          paramName: "vault",
          type: "string",
          paramDescription: "Vault of the protocol."
        },
        {
          paramName: "expected_apr",
          type: "number",
          paramDescription: "[Required] Expected annual percentage rate (APR) for this protocol."
        }
      ]
    },
    {
      paramName: "details",
      type: "array",
      paramDescription: "[Required] Detailed interval-level performance and per-protocol simulations.",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "start",
          type: "string",
          paramDescription: "[Required] Start of the interval in ISO 8601 format."
        },
        {
          paramName: "end",
          type: "string",
          paramDescription: "[Required] End of the interval in ISO 8601 format."
        },
        {
          paramName: "usd_from",
          type: "number",
          paramDescription: "[Required] USD value at the start of the interval."
        },
        {
          paramName: "usd_to",
          type: "number",
          paramDescription: "[Required] USD value at the end of the interval."
        },
        {
          paramName: "rewards_usd",
          type: "number",
          paramDescription: "[Required] Actual rewards earned."
        },
        {
          paramName: "recommendation",
          type: "array",
          paramDescription: "[Required] Per-protocol simulated results for the same time range.",
          childrenParamsType: "object",
          childrenParams: [
            {
              paramName: "protocol",
              type: "string",
              paramDescription: "[Required] Name of the protocol used for the simulation."
            },
            {
              paramName: "usd_to",
              type: "number",
              paramDescription: "[Required] Simulated future value in USD if funds were moved to this protocol."
            },
            {
              paramName: "vault",
              type: "string",
              paramDescription: "Vault of the protocol."
            },
            {
              paramName: "potential_rewards_usd",
              type: "number",
              paramDescription: "[Required] Difference between simulated and actual rewards in USD over the interval."
            }
          ]
        }
      ]
    }
  ]
}
];

const USE_CASES = [
  "Discover yield opportunities for wallet assets",
  "Optimize portfolio allocation for higher returns",
  "Build DeFi recommendation engines",
];

const CONSTRAINTS = [
  "For holdings (not DeFi), current rewards are 0.",
  "Current rewards are separated from balances.",
  "Recommendations are customized per client. If you’re a Web3 wallet or dApp, let us know, and we’ll provide filtered recommendations for your app.",
];