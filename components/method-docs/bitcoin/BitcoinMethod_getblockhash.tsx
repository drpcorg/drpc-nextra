import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_getblockhash(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="getblockhash"
      network="bitcoin"
      cu={20}
      description={"Retrieves the hash of a block by height."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="integer"
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
    code: () => `curl --request POST \\
     --url '\ ${DRPC_ENDPOINT_URL_BITCOIN}' \\
     --header 'Content-Type: application/json' \\
     --data '{"method": "getblockhash", "params": [1000], "id": 1, "jsonrpc": "2.0"}'`,
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
    method: "getblockhash",
    params: [1000],
    id: 1,
    jsonrpc: "2.0"
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
    method: "getblockhash",
    params: [1000],
    id: 1,
    jsonrpc: "2.0"
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
		"method": "getblockhash",
		"params": []interface{}{1000},
		"id":     1,
		"jsonrpc": "2.0",
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
    "method": "getblockhash",
    "params": [1000],
    "id": 1,
    "jsonrpc": "2.0"
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
            "method": "getblockhash",
            "params": [1000],
            "id": 1,
            "jsonrpc": "2.0"
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
    "id": 1,
    "result": "0000000000000b4d3eecf8f6c8e4f678dce7061b15e0e4f0a1e9b123456789ab0"
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "height",
    type: "numeric",
    paramDescription: "Required. The height index of the block in the blockchain."
  },
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
    type: "string",
    paramDescription: "The hash of the block."
  },
  {
    paramName: "error",
    type: "string",
    paramDescription: "The error message, if any."
  }
];

const USE_CASES = [
  "Retrieve the hash of a specific Bitcoin block",
  "Verify block identity by height",
  "Audit blockchain structure with block hashes",
];

const CONSTRAINTS = [
  "Requires valid block height",
  "Only retrieves hashes for existing blocks",
  "Depends on node sync",
];


