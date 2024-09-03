import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_genesis_chunked() {
  return (
    <CosmosMethod
      method="genesis_chunked"
      network="Cosmos"
      cu={10}
      description={"Retrieves the genesis file in chunks"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="integer"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains the requested chunk of the genesis file"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --location '${DRPC_ENDPOINT_URL}' \\
--header 'Content-Type: application/json' \\
--data '{
    "jsonrpc": "2.0",
    "method": "genesis_chunked",
    "params": [
        0
    ],
    "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "genesis_chunked",
  "params": [0],
  "id": 1
});

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: data
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const https = require('https');

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "genesis_chunked",
  "params": [0],
  "id": 1
});

const options = {
  hostname: '${DRPC_ENDPOINT_URL}',
  path: '',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, res => {
  let responseData = '';

  res.on('data', chunk => {
    responseData += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(responseData));
  });
});

req.on('error', error => {
  console.error('Error:', error);
});

req.write(data);
req.end();
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
	url := "${DRPC_ENDPOINT_URL}"

	requestBody, err := json.Marshal(map[string]interface{}{
		"jsonrpc": "2.0",
		"method":  "genesis_chunked",
		"params":  []interface{}{0},
		"id": 1
	})

	if err != nil {
		fmt.Println("Error marshaling JSON:", err)
		return
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(requestBody))
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

url = '${DRPC_ENDPOINT_URL}'
headers = {
    'Content-Type': 'application/json'
}

data = {
    "jsonrpc": "2.0",
    "method": "genesis_chunked",
    "params": [0],
    "id": 1
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;
use tokio;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let url = "${DRPC_ENDPOINT_URL}";

    let request_body = json!({
        "jsonrpc": "2.0",
        "method": "genesis_chunked",
        "params": [0],
        "id": 1
    });

    let response = client.post(url)
        .json(&request_body)
        .send()
        .await?;

    let response_text = response.text().await?;
    println!("{}", response_text);

    Ok(())
}
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "result": {
    "chunk": {
      "index": "0",
      "data": "BASE64_ENCODED_DATA",
      "proof": {
        "total": "1",
        "index": "0",
        "leaf_hash": "HASH",
        "aunts": []
      }
    }
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
      paramName: "chunk",
      type: "integer",
      paramDescription: "The chunk number to be retrieved from the genesis file"
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
    type: "object",
    paramDescription: "Contains the requested chunk of the genesis file, including its data and size.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "data",
        type: "string",
        paramDescription: "The base64-encoded data of the requested chunk from the genesis file."
      },
      {
        paramName: "chunk_size",
        type: "integer",
        paramDescription: "The size of the retrieved chunk in bytes."
      },
      {
        paramName: "total_chunks",
        type: "integer",
        paramDescription: "The total number of chunks that make up the entire genesis file."
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve a specific chunk of the genesis file",
  "Analyze the genesis file in segments",
  "Efficiently download large genesis data in chunks",
];

const CONSTRAINTS = [
  "Requires multiple requests for large genesis files",
  "Reconstructing the full genesis may be complex",
  "Data integrity must be verified for each chunk",
];
