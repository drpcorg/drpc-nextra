import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getSlotLeaders() {
  return (
    <SolanaMethod
      method="getAccountInfo"
      network="solana"
      cu={20}
      description={"Returns a list of slot leaders for a specified range, aiding in analyzing block production patterns"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="array"
      responseParamsDescription={
        "The leaders for each slot within the specified slot range."
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL} \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "getSlotLeaders",
  "params": [
    165768577,
    5
  ]
}
'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "id": 1,
  "jsonrpc": "2.0",
  "method": "getSlotLeaders",
  "params": [
    165768577,
    5
  ]
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
  "id": 1,
  "jsonrpc": "2.0",
  "method": "getSlotLeaders",
  "params": [
    165768577,
    5
  ]
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
		"id":      1,
		"jsonrpc": "2.0",
		"method":  "getSlotLeaders",
		"params":  []interface{}{165768577, 5},
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
    "id": 1,
    "jsonrpc": "2.0",
    "method": "getSlotLeaders",
    "params": [
        165768577,
        5
    ]
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
        "id": 1,
        "jsonrpc": "2.0",
        "method": "getSlotLeaders",
        "params": [
            165768577,
            5
        ]
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
  "result": [
    "2pK2DLvwEJmA8wPGVffjHSew1PqFvwvZEKJ7kfeFFbQ4",
    "3zLHv3nVGA3pJjzXErRczMHy3WfzrAxAxEGrAVXiDkZY",
    "4jKzv4NLJfVG9WAdtbKfnfE8FPJrBbZcz7zNrsfZxZbx",
    "5o2xtDFocMjD2wQx5y7kxkY5HzpFzBR9eDmXxMKU3Qrw",
    "6pFf9ULJPomD3zzwBvF2QhHmrGfww5Ez3yxBhTfMxZmv"
  ],
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "start_slot",
    type: "string",
    paramDescription:
      "The starting slot, encoded as a 64-bit unsigned integer (u64).",
  },
  {
    paramName: "limit",
    type: "string",
    paramDescription:
      "The maximum number of items, encoded as a 64-bit unsigned integer (u64).",
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
  },
];

const USE_CASES = [
  "Retrieve a list of slot leaders for a given range",
  "Identify validators responsible for block production",
  "Analyze slot leader distribution for network performance",
];

const CONSTRAINTS = [
  "Only provides data for specified slot range",
  "Requires real-time and accurate network information",
  "API rate limits may affect retrieval frequency",
];
