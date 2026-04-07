import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getsupportedtokens(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Get Supported Tokens"
      network=""
      cu={1102}
      description={ "Returns a paginated list of all tokens supported by Lambda API across different blockchain networks."}
      url={"Per-chain: GET https://lb.drpc.live/{chain}/{key}/lambda/v1/tokens"}
      url1={"Multichain: GET https://lb.drpc.live/lambda/{key}/v1/tokens"}
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
      responseParamsDescription={
        ""
      }
      isRESTApi={true}
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [

  {
  language: "shell",
  code: () => `curl --request GET \\
  --url https://lb.drpc.live/{chain}/{key}/lambda/v1/tokens \\
  --header 'accept: application/json'`,
},
{
  language: "js",
  code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/tokens", {
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

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/tokens", {
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
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/{chain}/{key}/lambda/v1/tokens", nil)
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
        .get("https://lb.drpc.live/{chain}/{key}/lambda/v1/tokens")
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

url = "https://lb.drpc.live/{chain}/{key}/lambda/v1/tokens"
headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`,
}
];

const RESPONSE_JSON = `{
  "next_page_token": "1",
  "data": {
    "tokens": [
      {
        "type": "token",
        "id": "8de20069-4b73-4752-90f1-a5633ae4cbe9",
        "symbol": "U",
        "name": "Uranium3o8",
        "icon_url": "https://static.lambda.p2p.org/tokens/arbitrum/0x6604b5da093f3f35066c6c79e51d581a44c35288.png",
        "implementations": [
          {
            "chain_id": "arbitrum",
            "chain_name": "Arbitrum",
            "chain_id_numeric": 42161,
            "address": "0x6604b5da093f3f35066c6c79e51d581a44c35288",
            "decimals": 18
          },
          {
            "chain_id": "ethereum",
            "chain_name": "Ethereum",
            "chain_id_numeric": 1,
            "address": "0x8cc379a292a47cb8406fb1bd8a6d98f442275f0e",
            "decimals": 18
          }
        ]
      }
    ]
  }
}`;

const PATH_PARAMS: ReqResParam[] = [
    {
    paramName: "key",
    type: "string",
    paramDescription:
      "[Required] Your dRPC API key",
  },
  {
    paramName: "chain",
    type: "string",
    paramDescription:
      "Chain name (only for per-chain URL).",
  },
    ];

const QUERY_PARAMS: RequestParamProp = [
  {
    paramName: "page_token",
    type: "string",
    paramDescription:
      "Token to retrieve next page.",
  },
  {
    paramName: "limit",
    type: "integer",
    paramDescription:
      "[Required] Amount of items to be retrieved.",
  },
  {
    paramName: "chain_id",
    type: "string",
    paramDescription:
      "Id of a chain. default: all chains",
  },
];

const REQUEST_PARAMS: RequestParamProp = [];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "next_page_token",
    type: "string",
    paramDescription: "Token to retrieve next page.",
  },
  {
    paramName: "data",
    type: "object",
    paramDescription: "[Required] Chain data",
    childrenParamsType: "object",
    childrenParams: [
          {
            paramName: "type",
            type: "string",
            paramDescription: "[Required] Item type",
          },
          {
            paramName: "id",
            type: "string",
            paramDescription: "[Required] Chain ID in Wallet API",
          },
          {
            paramName: "symbol",
            type: "string",
            paramDescription: "[Required] Symbol of the token",
          },
          {
            paramName: "name",
            type: "string",
            paramDescription: "[Required] Token name",
          },
          {
            paramName: "icon_url",
            type: "string",
            paramDescription: "URL to download icon of the token.",
          },
      {
        paramName: "implementations",
        type: "array",
        paramDescription: "[Required] List of chains where tokens are implemented.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "chain_id",
            type: "string",
            paramDescription: "[Required] id of a chain in Lambda API"
          },
          {
            paramName: "chain_name",
            type: "string",
            paramDescription: "[Required] name of a chain in Lambda API"
          },
          {
            paramName: "chain_id_numeric",
            type: "integer",
            paramDescription: "Numeric id of the chain"
          },
          {
            paramName: "address",
            type: "string",
            paramDescription: "[Required] Token contract address in related chain"
          },
          {
            paramName: "decimals",
            type: "integer",
            paramDescription: "[Required] Decimals"
          }
        ],

      },
        ],
},
        ];


const USE_CASES = [
  "Retrieve the list of all supported tokens",
  "Check if a specific token is supported",
];

const CONSTRAINTS = [
  "The response reflects only currently supported tokens and may change over time",
  "No filtering parameters are supported",
];
