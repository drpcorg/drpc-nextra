import PolygonMethod from "../../PolygonMethod/PolygonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_POLYGON } from "./constants";

export function PolygonMethod_bor_getRootHash(props: GenericMethodPropsReplacing) {
  return (
    <PolygonMethod
      method="bor_getRootHash"
      network="polygon"
      cu={10}
      description={"Retrieve the author of a block"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
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
  "method": "bor_getRootHash",
  "params": [1000, 1032],
  "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_POLYGON}';

const data = {
  jsonrpc: "2.0",
  method: "bor_getRootHash",
  params: [1000, 1032],
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
  method: "bor_getRootHash",
  params: [1000, 1032],
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
		"method": "bor_getRootHash",
		"params": []interface{}{1000, 1032},
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
    "method": "bor_getRootHash",
    "params": [1000, 1032],
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
        "method": "bor_getRootHash",
        "params": [1000, 1032]
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
  "result": "0x9ead03f7136fc6b4bdb0780b00a1c14ae5a8b6d0"
}`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "fromBlock",
    type: "integer",
    paramDescription: "REQUIRED. The block number from which the range starts.",
  },
  {
    paramName: "toBlock",
    type: "integer",
    paramDescription: "REQUIRED. The block number where the range ends.",
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
     paramDescription: "The root hash of the specified block range.",
  },
];

const USE_CASES = [
  "Retrieve the root hash of the latest block",
  "Verify block state integrity on Polygon",
  "Cross-reference root hash with other nodes",
];

const CONSTRAINTS = [
  "Requires a synced Polygon (Bor) node",
  "Only provides the latest block's root hash",
  "Works in PoS consensus environments only",
];
