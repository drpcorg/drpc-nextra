import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_getconnectioncount(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="getconnectioncount"
      network="bitcoin"
      cu={20}
      description={"Returns the number of active connections to other nodes."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
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
  --data '{ "method": "getconnectioncount" }'`,
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
    method: "getconnectioncount"
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
    method: "getconnectioncount"
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
		"method": "getconnectioncount",
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
    "method": "getconnectioncount"
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
            "method": "getconnectioncount"
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
    "jsonrpc": "2.0",
    "id": "curltest",
    "result": 8
}
`;

const REQUEST_PARAMS: RequestParamProp = null;

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
        paramDescription: "The total number of connections to other nodes, both inbound and outbound."
      },
      {
        paramName: "error",
        type: "string",
        paramDescription: "The error message, if any."
      }
    ],
  },
];

const USE_CASES = [
  "Get number of peer connections",
  "Monitor node's network status",
  "Check active peer count"
];

const CONSTRAINTS = [
  "Node must be running",
  "Only counts active connections",
  "Depends on node's connectivity"
];





