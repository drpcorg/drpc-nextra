import WalletMethod from "../../WalletMethod/WalletMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_gethistoricalnetworth() {
  return (
    <WalletMethod
      method="Get Historical Net Worth"
      cu={27555}
      description={
        "Returns the historical balance of all tokens for a specified wallet address, showing token holdings at different points in time."
      }
      url={[
        "Per chain: GET https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/tokens-net-worth",
        "Multichain: GET https://lb.drpc.live/lambda/{key}/v1/wallets/{address}/tokens-net-worth",
      ]}
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
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request GET \\
  --url https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/tokens-net-worth \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/tokens-net-worth", {
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

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/tokens-net-worth", {
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
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/tokens-net-worth", nil)
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
        .get("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/tokens-net-worth")
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

url = "https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/tokens-net-worth"
headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": {
    "points": [
      {
        "timestamp": 1733142900,
        "value": 4.495974120264539
      },
      {
        "timestamp": 1733143200,
        "value": 4.498005266850357
      },
      {
        "timestamp": 1733143500,
        "value": 4.4914756913229406
      },
      {
        "timestamp": 1733143800,
        "value": 4.484235837541586
      }
    ]
  }
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
    paramName: "chain_id",
    type: "string",
    paramDescription: "Id of a chain in Wallet API API. Default: all chains",
  },
  {
    paramName: "period",
    type: "networth_period",
    paramDescription: "Period of time",
  },
];
const REQUEST_PARAMS: RequestParamProp = [];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "data",
    type: "object",
    paramDescription: "[Required] Wallet net-worth data.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "points",
        type: "array_of_objects",
        paramDescription: "[Required] History of the wallet net-worth.e",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "timestamp",
            type: "integer",
            paramDescription: "Timestamp of the poin",
          },
          {
            paramName: "value",
            type: "number",
            paramDescription: "Value of the point in USD.",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Track historical portfolio value over time",
  "Analyze wallet performance and growth",
];

const CONSTRAINTS = [
  "IMPORTANT: It doesn't include DeFi changes",
  "Time range parameters affect response size and performance",
];
