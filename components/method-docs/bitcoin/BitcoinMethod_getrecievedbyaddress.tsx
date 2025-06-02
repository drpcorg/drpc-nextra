import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_getrecievedbyaddress(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="getreceivedbyaddress"
      network="bitcoin"
      cu={20}
      description={"Shows the total amount received by a specific address."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
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
  code: () => `curl \ ${DRPC_ENDPOINT_URL_BITCOIN} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  --data '{ "jsonrpc": "1.0", "id": "curltest", "method": "getreceivedbyaddress", "params": ["bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl", 6] }'`,
},
{
  language: "js",
  code: () => `const url = \`${DRPC_ENDPOINT_URL_BITCOIN}\`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    jsonrpc: "1.0",
    id: "curltest",
    method: "getreceivedbyaddress",
    params: ["bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl", 6]
  })
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));`,
},
{
  language: "node",
  code: () => `const axios = require('axios');

const url = \`${DRPC_ENDPOINT_URL_BITCOIN}\`;

axios.post(url, {
    jsonrpc: "1.0",
    id: "curltest",
    method: "getreceivedbyaddress",
    params: ["bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl", 6]
}, {
    headers: {
        'Content-Type': 'application/json'
    }
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));`,
},
{
  language: "go",
  code: () => `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	url := "${DRPC_ENDPOINT_URL_BITCOIN}"

	data := map[string]interface{}{
		"jsonrpc": "1.0",
		"id": "curltest",
		"method": "getreceivedbyaddress",
		"params": []interface{}{"bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl", 6},
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshalling JSON:", err)
		return
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error making request:", err)
		return
	}
	defer resp.Body.Close()

	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)

	fmt.Println(result)
}
`,
},
{
  language: "python",
  code: () => `import requests

url = '${DRPC_ENDPOINT_URL_BITCOIN}'

data = {
    "jsonrpc": "1.0",
    "id": "curltest",
    "method": "getreceivedbyaddress",
    "params": ["bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl", 6]
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, json=data)
res = response.json()

print(res)
`,
},
{
  language: "rust",
  code: () => `use reqwest::Client;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "${DRPC_ENDPOINT_URL_BITCOIN}";

    let client = Client::new();
    let res = client.post(url)
        .header("Content-Type", "application/json")
        .json(&json!({
            "jsonrpc": "1.0",
            "id": "curltest",
            "method": "getreceivedbyaddress",
            "params": ["bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl", 6]
        }))
        .send()
        .await?
        .json::<serde_json::Value>()
        .await?;

    println!("{:#?}", res);

    Ok(())
}
`,
},
];

const RESPONSE_JSON = `{
    "jsonrpc": "1.0",
    "id": "1",
    "result": 0.025
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "address",
    type: "string",
    paramDescription: "Required. The Bitcoin address for transactions."
  },
  {
    paramName: "minconf",
    type: "numeric",
    paramDescription: "Optional. Default is 1. Only include transactions confirmed at least this many times."
  }
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "id",
    type: "integer",
  },
  {
    paramName: "jsonrpc",
    type: "string",
  },
  {
    paramName: "result",
    type: "numeric",
    childrenParamsType: "numeric",
    childrenParams: [
      {
        paramName: "n",
        type: "numeric",
        paramDescription: "The total amount in BTC received at this address."
      }
    ],
  },
];

const USE_CASES = [
  "Track total received by an address",
  "Monitor incoming funds",
  "Analyze transaction activity per address"
];

const CONSTRAINTS = [
  "Requires a synced wallet",
  "Only works with confirmed transactions",
];



