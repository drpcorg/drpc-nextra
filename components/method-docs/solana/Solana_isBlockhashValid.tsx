import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_isBlockhashValid() {
  return (
    <SolanaMethod
      method="isBlockhashValid"
      network="solana"
      cu={20}
      description={"Checks the validity of a specified blockhash, assisting in verifying blockhashes for transaction processing and blockchain operations"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="boolean"
      responseParamsDescription={
        " Returns true if the blockhash remains valid; otherwise, it returns false."
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl ${DRPC_ENDPOINT_URL} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  -d '
    {
      "id":45,
      "jsonrpc":"2.0",
      "method":"isBlockhashValid",
      "params":[
        "ENTER_BLOCKHASH_ID_HERE",
        {"commitment":"processed"}
      ]
    }
'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "id": 45,
  "jsonrpc": "2.0",
  "method": "isBlockhashValid",
  "params": [
    "ENTER_BLOCKHASH_ID_HERE",
    {"commitment": "processed"}
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
  "id": 45,
  "jsonrpc": "2.0",
  "method": "isBlockhashValid",
  "params": [
    "ENTER_BLOCKHASH_ID_HERE",
    {"commitment": "processed"}
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
		"id":      45,
		"jsonrpc": "2.0",
		"method":  "isBlockhashValid",
		"params":  []interface{}{
			"ENTER_BLOCKHASH_ID_HERE",
			map[string]string{"commitment": "processed"},
		},
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
    "id": 45,
    "jsonrpc": "2.0",
    "method": "isBlockhashValid",
    "params": [
        "ENTER_BLOCKHASH_ID_HERE",
        {"commitment": "processed"}
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
        "id": 45,
        "jsonrpc": "2.0",
        "method": "isBlockhashValid",
        "params": [
            "ENTER_BLOCKHASH_ID_HERE",
            {"commitment": "processed"}
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
  "result": {
    "context": {
      "slot": 98123569
    },
    "value": true
  },
  "id": 45
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockhash",
    type: "string",
  },
  {
    paramName: "minContextSlot",
    type: "integer",
    paramDescription:
      "The minimum slot number at which the request can be evaluated.",
  },
  {
    paramName: "delinquentSlotDistance",
    type: "integer",
    paramDescription:
      "Specifies the number of slots a validator must fall behind the tip to be considered delinquent. This parameter is passed as an integer, and it is not recommended to specify this argument.",
  },
  {
    paramName: "commitment",
    type: "string",
    paramDescription: "The level of commitment required for the query",
    paramEnum: [
      {
        value: "finalized",
        description:
          "The node will query the most recent block confirmed by supermajority of the cluster as having reached maximum lockout, meaning the cluster has recognized this block as finalized",
      },
      {
        value: "confirmed",
        description:
          "The node will query the most recent block that has been voted on by supermajority of the cluster",
      },
      {
        value: "processed",
        description:
          "The node will query its most recent block. Note that the block may not be complete",
      },
    ],
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
    type: "boolean",
  },
];

const USE_CASES = [
  "Verify the validity of a specific blockhash",
  "Ensure blockhash accuracy for transaction processing",
  "Validate blockhashes to maintain network integrity",
];

const CONSTRAINTS = [
  "Only checks the validity of the provided blockhash",
  "Dependent on the current state of the network",
  "API rate limits may restrict frequent validation",
];
