import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getMultipleAccounts() {
  return (
    <SolanaMethod
      method="getMultipleAccounts"
      network="solana"
      cu={11}
      description={"Retrieves detailed information for multiple specified accounts in a single request"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains detailed information about the accounts"
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
  --data '{"jsonrpc": "2.0","id": 1,"method": "getMultipleAccounts","params": [["vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg","4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"],{"dataSlice": {"offset": 0,"length": 0}}]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getMultipleAccounts",
  "params": [
    ["vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg", "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"],
    {"dataSlice": {"offset": 0, "length": 0}}
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
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getMultipleAccounts",
  "params": [
    ["vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg", "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"],
    {"dataSlice": {"offset": 0, "length": 0}}
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
		"jsonrpc": "2.0",
		"id":      1,
		"method":  "getMultipleAccounts",
		"params":  []interface{}{
			[]string{"vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg", "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"},
			map[string]interface{}{"dataSlice": map[string]interface{}{"offset": 0, "length": 0}},
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
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getMultipleAccounts",
    "params": [
        ["vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg", "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"],
        {"dataSlice": {"offset": 0, "length": 0}}
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
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getMultipleAccounts",
        "params": [
            ["vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg", "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"],
            {"dataSlice": {"offset": 0, "length": 0}}
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
    "value": [
      {
        "data": ["", "base64"],
        "executable": false,
        "lamports": 1000000000,
        "owner": "11111111111111111111111111111111",
        "rentEpoch": 250
      },
      {
        "data": ["", "base64"],
        "executable": false,
        "lamports": 950000000,
        "owner": "11111111111111111111111111111111",
        "rentEpoch": 250
      }
    ]
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "accountPublicKey",
    type: "string",
    paramDescription:
      "The public key of the account to query.",
  },
  {
    paramName: "encoding",
    type: "string",
    paramDescription: "Specifies the data encoding for the returned account information"
  },
  {
    paramName: "dataSlice",
    type: "object",
    paramDescription: "Limits the returned account data based on the specified offset and length fields. Available only for \"base58\", \"base64\", or \"base64+zstd\" encodings."
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
    type: "string",
    childrenParamsType: "array",
    childrenParams: [
        {
          paramName: "context",
          type: "object",
          paramDescription: "Contains information about the current state of the program",
          childrenParamsType: "object",
          childrenParams: [
        {
          paramName: "slot",
          type: "integer",
          paramDescription: "The slot number used to retrieve the fee calculator.",
        },
        {
          paramName: "apiVersion",
          type: "string",
          paramDescription: "The version of the Solana RPC API being used",
        },
        ],
        },
        {
          paramName: "value",
          type: "object",
          childrenParamsType: "object",
          childrenParams: [
              {
                paramName: "lamports",
                type: "int64",
                paramDescription: "The number of lamports (smallest unit of SOL) assigned to this account.",
              },
              {
                paramName: "owner",
                type: "string",
                paramDescription: "Base-58 encoded public key of the program assigned to this account",
              },
              {
                paramName: "data",
                type: "string",
                paramDescription: "Data associated with the account, either as encoded binary data or in JSON format, depending on the specified encoding. Format: [data, encoding] or JSON object",
              },
              {
                paramName: "executable",
                type: "boolean",
                paramDescription: "dicates if the account contains a program and is read-only.",
              },
              {
                paramName: "rentEpoch",
                type: "integer",
                paramDescription: "The epoch at which this account will next owe rent.",
              },
          ]
        },
    ],
  },
];

const USE_CASES = [
  "Retrieve data for multiple Solana accounts simultaneously",
  "Analyze the status of various accounts efficiently",
  "Monitor multiple accounts for security and performance",
];

const CONSTRAINTS = [
  "Limited to the specified accounts in the request",
  "Dependent on API rate limits and quotas",
  "Potential delays with large data sets",
];
