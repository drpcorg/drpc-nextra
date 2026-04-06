import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
  PathParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getsupportedchains(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Get Supported Chains"
      network=""
      cu={367}
      description={ "Returns a list of all chains supported in Data API"
      }
      url={"GET https://lb.drpc.live/lambda/{key}/v1/chains"
    }
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
  --url https://lb.drpc.live/lambda/{key}/v1/chains \\
  --header 'accept: application/json'`,
},
{
  language: "js",
  code: () => `fetch("https://lb.drpc.live/lambda/{key}/v1/chains", {
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

const res = await fetch("https://lb.drpc.live/lambda/{key}/v1/chains", {
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
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/lambda/{key}/v1/chains", nil)
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
        .get("https://lb.drpc.live/lambda/{key}/v1/chains")
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

url = "https://lb.drpc.live/lambda/{key}/v1/chains"
headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`,
}
];

const RESPONSE_JSON = `{
  "next_page_token": "arbitrum",
  "data": {
    "chains": [
      {
        "type": "chain",
        "id": "arbitrum",
        "id_numeric": 42161,
        "name": "Arbitrum",
        "native_token_id": "eth"
      }
    ]
  }
}`;

const PATH_PARAMS: PathParamProp = [
    {
    paramName: "key",
    type: "string",
    paramDescription:
      "[Required] Your dRPC API key",
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
    paramDescription:
      "[Required] Chains data",
    childrenParamsType: "array_of_objects",
    childrenParams: [
      {
        paramName: "chains",
        type: "array_of_objects",
        paramDescription:
          "[Required] list of supported chains",
        childrenParamsType: "object",
        childrenParams: [

            {
        paramName: "type",
        type: "string",
        paramDescription:
          "[Required] Item type",
      },
      {
        paramName: "id",
        type: "string",
        paramDescription:
          "[Required] id of a chain in Wallet API",
      },
      {
        paramName: "id_numeric",
        type: "integer",
        paramDescription: "Numeric id of the chain",
      },
      {
        paramName: "name",
        type: "string",
        paramDescription:
          "[Required] Community name of the chain",
      },
      {
        paramName: "native_token_id",
        type: "string",
        paramDescription:
          "[Required] token_id of a chain native currency in Wallet API",
      },

            ],
      },
        ],
  },
];

const USE_CASES = [
  "Retrieve the list of all supported blockchain networks",
  "Check if a specific chain is supported before making requests",
];

const CONSTRAINTS = [
  "The response reflects only currently supported chains",
  "No filtering parameters are supported",
];
