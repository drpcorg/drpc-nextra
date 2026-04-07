import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_searchhistoricalprices(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Search Historical Prices"
      cu={367}
      description={"Search historical prices for supported tokens over a specified time range"}
      url={"POST https://lb.drpc.live/lambda/{key}/v1/tokens/prices/search"}
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
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
  --url https://lb.drpc.live/lambda/{key}/v1/tokens/prices/search \\
  --header 'accept: application/json' \\
  --header 'Content-Type: application/json' \\
  --data '{}'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/lambda/{key}/v1/tokens/prices/search", {
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

const res = await fetch("https://lb.drpc.live/lambda/{key}/v1/tokens/prices/search", {
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
  req, _ := http.NewRequest("POST", "https://lb.drpc.live/lambda/{key}/v1/tokens/prices/search", strings.NewReader("{}"))
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
        .post("https://lb.drpc.live/lambda/{key}/v1/tokens/prices/search")
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

url = "https://lb.drpc.live/lambda/{key}/v1/tokens/prices/search"
headers = {
    "accept": "application/json",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, data=json.dumps({}))
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": {
    "additionalProp": [
      {
        "price": 0,
        "timestamp": "string"
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
];

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "symbols",
    type: "array",
    paramDescription: "[Required] List of token symbols to query",
  },
  {
    paramName: "timestamps",
    type: "array_of_integers",
    paramDescription: "List of timestamps in seconds or milliseconds",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "data",
    type: "array_of_objects",
    paramDescription: "[Required] Price history per token",
    childrenParamsType: "object",
        childrenParams: [
          { paramName: "timestamp", type: "string", paramDescription: "Timestamp of price point" },
          { paramName: "price", type: "number", paramDescription: "Price value" },
        ],
      },
];

const USE_CASES = [
  "Fetch historical prices for one or more tokens",
  "Analyze token price trends over time"
];

const CONSTRAINTS = [
  "Only supported tokens are returned",
  "Data availability may vary by token and time range"
];