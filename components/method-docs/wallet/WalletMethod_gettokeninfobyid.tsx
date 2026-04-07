import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_gettokeninfobyid(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Get Token Info By Id"
      network=""
      cu={367}
      description={"Returns detailed information for a specific blockchain network"}
      url={"GET https://lb.drpc.live/lambda/{key}/v1/tokens/{token_id}"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      queryParamsType="none"
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
  --url GET https://lb.drpc.live/lambda/{key}/v1/tokens/{token_id} \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/lambda/{key}/v1/tokens/{token_id}", {
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

const res = await fetch("https://lb.drpc.live/lambda/{key}/v1/tokens/{token_id}", {
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
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/lambda/{key}/v1/tokens/{token_id}", nil)
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
        .get("https://lb.drpc.live/lambda/{key}/v1/tokens/{token_id}")
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

url = "https://lb.drpc.live/lambda/{key}/v1/tokens/{token_id}"
headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": {
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
}`;

const PATH_PARAMS: ReqResParam[] = [
  {
    paramName: "key",
    type: "string",
    paramDescription: "[Required] Your dRPC API key",
  },
  {
    paramName: "token_id",
    type: "string",
    paramDescription: "[Required] Token ID in Wallet API",
  },
];

const REQUEST_PARAMS: RequestParamProp = null;

const RESPONSE_PARAMS: ReqResParam[] = [
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
  ]
}
        ],
  },
];

const USE_CASES = [
  "Retrieve detailed information about a specific token",
  "Validate a token",
];

const CONSTRAINTS = [
  "Requires a valid token_id parameter",
  "Returns data only for tokens currently supported",
];