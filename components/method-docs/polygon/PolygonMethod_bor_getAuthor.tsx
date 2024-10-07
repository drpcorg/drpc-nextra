import PolygonMethod from "../../PolygonMethod/PolygonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_POLYGON } from "./constants";

export function PolygonMethod_bor_getAuthor(props: GenericMethodPropsReplacing) {
  return (
    <PolygonMethod
      method="bor_getAuthor"
      network="polygon"
      cu={10}
      description={"Retrieve the author of a block"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="string"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The address of the block author."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl ${DRPC_ENDPOINT_URL_POLYGON} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  --data '{
  "jsonrpc": "2.0",
  "method": "bor_getAuthor",
  "params": ["0x1000"],
  "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_POLYGON}';

const data = {
  jsonrpc: "2.0",
  method: "bor_getAuthor",
  params: ["0x1000"],
  id: 1
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

const url = '${DRPC_ENDPOINT_URL_POLYGON}';

const data = {
  jsonrpc: "2.0",
  method: "bor_getAuthor",
  params: ["0x1000"],
  id: 1
};

axios.post(url, data)
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
`,
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
	url := "${DRPC_ENDPOINT_URL_POLYGON}"

	data := map[string]interface{}{
		"id": 1,
		"jsonrpc": "2.0",
		"method": "bor_getAuthor",
		"params": []interface{}{"0x1000"},
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshaling JSON:", err)
		return
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
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
import json

url = '${DRPC_ENDPOINT_URL_POLYGON}'

data = {
    "jsonrpc": "2.0",
    "method": "bor_getAuthor",
    "params": ["0x1000"],
    "id": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
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
    let url = "${DRPC_ENDPOINT_URL_POLYGON}";

    let data = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "bor_getAuthor",
        "params": ["0x1000"]
    });

    let client = Client::new();
    let res = client.post(url)
        .json(&data)
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
  "result": "0x0375b2fc7140977c9c76d45421564e354ed42277"
}`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "blockNumber",
    type: "string",
    paramDescription: "The latest tag or block number encoded in hexadecimal format.",
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
    paramDescription:
      "The address of the block author.",
  },
];

const USE_CASES = [
  "Get the latest block number for syncing",
  "Verify blockchain progress up to the current block",
  "Check latest block number for monitoring purposes",
];

const CONSTRAINTS = [
  "Node must be synchronized with the network",
  "Requires access to a reliable node",
  "Network latency may affect response time",
];
