import PolygonMethod from "../../PolygonMethod/PolygonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_POLYGON } from "./constants";

export function PolygonMethod_bor_getCurrentProposer(props: GenericMethodPropsReplacing) {
  return (
    <PolygonMethod
      method="bor_getCurrentProposer"
      network="polygon"
      cu={10}
      description={"Retrieve the current block proposer"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The address of the current proposer"
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
  "method": "bor_getCurrentProposer",
  "params": [],
  "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_POLYGON}';

const data = {
  jsonrpc: "2.0",
  method: "bor_getCurrentProposer",
  params: [],
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
  method: "bor_getCurrentProposer",
  params: [],
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
		"method": "bor_getCurrentProposer",
		"params": []interface{}{},
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
    "method": "bor_getCurrentProposer",
    "params": [],
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
        "method": "bor_getCurrentProposer",
        "params": []
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
  "result": "0x1bf10ff66e3a877e4a500f1a6a5097582a1815bb"
}`;

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
    type: "string",
    paramDescription:
      "The address of current prosper.",
  },
];

const USE_CASES = [
  "Identify the current block proposer",
  "Monitor block production in real-time",
  "Validate proposer selection in the network",
];

const CONSTRAINTS = [
  "Requires a synchronized Polygon (Bor) node",
  "Only works in PoS environments",
  "Provides current proposer, no historical data",
];

