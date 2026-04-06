import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
  PathParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getsupportedchainbyid(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Get Supported Chain By Id"
      network=""
      cu={367}
      description={"Returns detailed information for a specific blockchain network"}
      url={"GET https://lb.drpc.live/lambda/{key}/v1/chains/{chain_id}"}
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
  --url https://lb.drpc.live/lambda/{key}/v1/chains/{chain_id} \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/lambda/{key}/v1/chains/{chain_id}", {
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

const res = await fetch("https://lb.drpc.live/lambda/{key}/v1/chains/{chain_id}", {
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
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/lambda/{key}/v1/chains/{chain_id}", nil)
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
        .get("https://lb.drpc.live/lambda/{key}/v1/chains/{chain_id}")
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

url = "https://lb.drpc.live/lambda/{key}/v1/chains/{chain_id}"
headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": {
    "type": "chain",
    "id": "arbitrum",
    "id_numeric": 42161,
    "name": "Arbitrum",
    "native_token_id": "eth"
  }
}`;

const PATH_PARAMS: PathParamProp = [
  {
    paramName: "key",
    type: "string",
    paramDescription: "[Required] Your dRPC API key",
  },
  {
    paramName: "chain_id",
    type: "string",
    paramDescription: "[Required] Chain ID in Wallet API",
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
            paramName: "id_numeric",
            type: "integer",
            paramDescription: "Numeric chain ID",
          },
          {
            paramName: "name",
            type: "string",
            paramDescription: "[Required] Chain name",
          },
          {
            paramName: "native_token_id",
            type: "string",
            paramDescription: "[Required] Native token identifier",
          },
        ],
  },
];

const USE_CASES = [
  "Retrieve detailed information about a specific blockchain network",
  "Validate a chain before sending requests to it",
];

const CONSTRAINTS = [
  "Requires a valid chain_id parameter",
  "Returns data only for chains currently supported",
];