import PolygonMethod from "../../PolygonMethod/PolygonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_POLYGON } from "./constants";

export function PolygonMethod_bor_getSignersAtHash(props: GenericMethodPropsReplacing) {
  return (
    <PolygonMethod
      method="bor_getSignersAtHash"
      network="polygon"
      cu={10}
      description={"Retrieve the list of signers for a block"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="string"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "An array of all the signers of the block which match the specified block hash"
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
  "method": "bor_getSignersAtHash",
  "params": ["0x29fa73e3da83ddac98f527254fe37002e052725a88904bac14f03e919e1e2876"],
  "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_POLYGON}';

const data = {
  jsonrpc: "2.0",
  method: "bor_getSignersAtHash",
  params: ["0x29fa73e3da83ddac98f527254fe37002e052725a88904bac14f03e919e1e2876"],
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
  method: "bor_getSignersAtHash",
  params: ["0x29fa73e3da83ddac98f527254fe37002e052725a88904bac14f03e919e1e2876"],
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
		"method": "bor_getSignersAtHash",
		"params": []interface{}{"0x29fa73e3da83ddac98f527254fe37002e052725a88904bac14f03e919e1e2876"},
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
    "method": "bor_getSignersAtHash",
    "params": ["0x29fa73e3da83ddac98f527254fe37002e052725a88904bac14f03e919e1e2876"],
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
        "method": "bor_getSignersAtHash",
        "params": ["0x29fa73e3da83ddac98f527254fe37002e052725a88904bac14f03e919e1e2876"]
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
  "result": [
    "0xbadeb474d3bef72e9058ea6aed0806004f548318",
    "0x75dddfb045c0f0ef72d940fe935bf36e773eb05b",
    "0x2e27a9669487d40299e526f86cb1ce8954b84b12",
    "0xda73a58f632ab9a3f095a304275ad10093c1ce88",
    "0x777ad55efc465052d6a4ab7bc75b6a15175bb399",
    "0x550365027554bd20d750f9361e460c7428ffbd75",
    "0x7bf377f69da0e46da1502d5f2bcf9fb00c3b610b"
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "hash",
    type: "string",
    paramDescription: "REQUIRED. The hash of the block.",
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
    paramDescription: "An array of all the signers of the block that match the specified block hash.",
  },
];

const USE_CASES = [
  "Get signers of a block by hash",
  "Verify validators for a specific block",
  "Analyze validator participation at a block",
];

const CONSTRAINTS = [
  "Requires valid block hash and synced node",
  "Only shows signers for the given block",
  "Works in Polygon PoS consensus only",
];

