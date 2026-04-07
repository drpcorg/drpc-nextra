import WalletMethod from "../../WalletMethod/WalletMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getaprhistory() {
  return (
    <WalletMethod
      method="Get APR History"
      cu={33400}
      description={"Proxy APR history for lending/borrowing from Data Access Layer."}
      url={"POST https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history"} 
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
  --url https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history", {
  method: "POST",
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

const res = await fetch("https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history", {
  method: "POST",
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
  "strings"
)

func main() {
  req, _ := http.NewRequest("POST", "https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history", strings.NewReader("{}"))
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
        .post("https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history")
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

url = "https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history"
headers = {
    "accept": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": [
    {
      "chain": "string",
      "protocol": "string",
      "pool_id": "string",
      "asset": "string",
      "start_date": 0,
      "end_date": 0,
      "APRs": [
        {
          "type": "string",
          "reward_token_address": "string",
          "points": [
            {
              "timestamp": 0,
              "value": 0
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
];

const REQUEST_PARAMS: RequestParamProp = [
  {
  paramName: "requests",
  type: "array_of_objects",
  paramDescription: "[Required] List of APR history requests",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "chain",
      type: "string",
      paramDescription: "[Required] Chain name (e.g., ethereum)"
    },
    {
      paramName: "protocol",
      type: "string",
      paramDescription: "Protocol identifier (enum, 39 available values)"
    },
    {
      paramName: "pool_id",
      type: "string",
      paramDescription: "Pool identifier"
    },
    {
      paramName: "asset",
      type: "string",
      paramDescription: "Asset address"
    },
    {
      paramName: "start_date",
      type: "integer",
      paramDescription: "[≥ 0] Start timestamp in milliseconds"
    },
    {
      paramName: "end_date",
      type: "integer",
      paramDescription: "[≥ 0] End timestamp in milliseconds"
    }
  ]
}
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "data",
  type: "array_of_objects",
  paramDescription: "[Required] APR history data",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "chain",
      type: "string",
      paramDescription: "[Required] Chain name (e.g., ethereum)"
    },
    {
      paramName: "protocol",
      type: "string",
      paramDescription: "[Required] Protocol identifier (e.g., aave_v3)"
    },
    {
      paramName: "pool_id",
      type: "string",
      paramDescription: "[Required] Pool identifier"
    },
    {
      paramName: "asset",
      type: "string",
      paramDescription: "Asset address"
    },
    {
      paramName: "start_date",
      type: "integer",
      paramDescription: "[Required] Start timestamp in milliseconds"
    },
    {
      paramName: "end_date",
      type: "integer",
      paramDescription: "[Required] End timestamp in milliseconds"
    },
    {
      paramName: "APRs",
      type: "array_of_objects",
      paramDescription: "[Required] APR series for the requested asset",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "type",
          type: "string",
          paramDescription: "[Required] APR type (e.g., Supply interest, Borrow fees)"
        },
        {
          paramName: "reward_token_address",
          type: "string",
          paramDescription: "Reward token address"
        },
        {
          paramName: "points",
          type: "array_of_objects",
          paramDescription: "[Required] APR values over time",
          childrenParamsType: "object",
          childrenParams: [
            {
              paramName: "timestamp",
              type: "integer",
              paramDescription: "[Required] Timestamp in milliseconds"
            },
            {
              paramName: "value",
              type: "number",
              paramDescription: "APR value at the timestamp, defaults to 0"
            }
          ]
        }
      ]
    }
  ]
}
];

const USE_CASES = [
  "Retrieve historical APR data for DeFi protocols",
  "Analyze yield trends over time",
];

const CONSTRAINTS = [
  "Only supported protocols and assets are returned",
  "Historical data may be limited for older timestamps",
];