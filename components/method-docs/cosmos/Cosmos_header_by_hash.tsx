import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_header_by_hash() {
  return (
    <CosmosMethod
      method="header_by_hash"
      network="Cosmos"
      cu={20}
      description={"Retrieves the number of unconfirmed transactions"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="integer"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains the header information of the specified block"
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
      "method": "header_by_hash",
      "params": [
          "0x645507DC48B4EF4BFF51826A0A5B73FD8CF926036AA4F6697D748FFC0B56D134"
      ],
      "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "header_by_hash",
  "params": [
    "0x645507DC48B4EF4BFF51826A0A5B73FD8CF926036AA4F6697D748FFC0B56D134"
  ],
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
  "method": "header_by_hash",
  "params": [
    "0x645507DC48B4EF4BFF51826A0A5B73FD8CF926036AA4F6697D748FFC0B56D134"
  ],
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
		"method":  "header_by_hash",
		"params":  []interface{}{"0x645507DC48B4EF4BFF51826A0A5B73FD8CF926036AA4F6697D748FFC0B56D134"},
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
    "method": "header_by_hash",
    "params": [
        "0x645507DC48B4EF4BFF51826A0A5B73FD8CF926036AA4F6697D748FFC0B56D134"
    ],
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
        "method": "header_by_hash",
        "params": [
            "0x645507DC48B4EF4BFF51826A0A5B73FD8CF926036AA4F6697D748FFC0B56D134"
        ],
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
    "header": {
      "version": {
        "block": "11",
        "app": "0"
      },
      "chain_id": "cosmoshub-4",
      "height": "13735848",
      "time": "2022-03-10T15:19:10.385Z",
      "last_block_id": {
        "hash": "0x1234567890...",
        "parts": {
          "total": 1,
          "hash": "0x9876543210..."
        }
      },
      "last_commit_hash": "0xABCDE12345...",
      "data_hash": "0x56789ABCDEF...",
      "validators_hash": "0x123456789ABC...",
      "next_validators_hash": "0xDEF123456789...",
      "consensus_hash": "0xABCDEF123456...",
      "app_hash": "0x12345ABCDEF...",
      "last_results_hash": "0xFEDCBA54321...",
      "evidence_hash": "0x98765ABCDE...",
      "proposer_address": "12345ABCDE..."
    }
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
      paramName: "hash",
      type: "string",
      paramDescription: "The hash of the block for which the header information is being requested."
    }
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
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "version",
        type: "object",
        paramDescription: "The version of the block and application.",
        childrenParams: [
          {
            paramName: "block",
            type: "string",
            paramDescription: "The version of the block."
          },
          {
            paramName: "app",
            type: "string",
            paramDescription: "The version of the application."
          }
        ]
      },
      {
        paramName: "chain_id",
        type: "string",
        paramDescription: "The identifier of the blockchain."
      },
      {
        paramName: "height",
        type: "string",
        paramDescription: "The height of the block in the blockchain."
      },
      {
        paramName: "time",
        type: "string",
        paramDescription: "The timestamp when the block was created."
      },
      {
        paramName: "last_block_id",
        type: "object",
        paramDescription: "The ID of the previous block.",
        childrenParams: [
          {
            paramName: "hash",
            type: "string",
            paramDescription: "The hash of the previous block."
          },
          {
            paramName: "parts",
            type: "object",
            paramDescription: "Information about the parts of the previous block.",
            childrenParams: [
              {
                paramName: "total",
                type: "integer",
                paramDescription: "The total number of parts in the previous block."
              },
              {
                paramName: "hash",
                type: "string",
                paramDescription: "The hash of the parts of the previous block."
              }
            ]
          }
        ]
      },
      {
        paramName: "last_commit_hash",
        type: "string",
        paramDescription: "The hash of the last commit."
      },
      {
        paramName: "data_hash",
        type: "string",
        paramDescription: "The hash of the block's data."
      },
      {
        paramName: "validators_hash",
        type: "string",
        paramDescription: "The hash of the validators set for this block."
      },
      {
        paramName: "next_validators_hash",
        type: "string",
        paramDescription: "The hash of the next validators set."
      },
      {
        paramName: "consensus_hash",
        type: "string",
        paramDescription: "The hash of the consensus parameters."
      },
      {
        paramName: "app_hash",
        type: "string",
        paramDescription: "The hash of the application state after this block."
      },
      {
        paramName: "last_results_hash",
        type: "string",
        paramDescription: "The hash of the results from the last block."
      },
      {
        paramName: "evidence_hash",
        type: "string",
        paramDescription: "The hash of any evidence of misbehavior included in the block."
      },
      {
        paramName: "proposer_address",
        type: "string",
        paramDescription: "The address of the block proposer."
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve block header by its hash",
  "Validate block details using its hash",
  "Cross-check header information with block hash",
];

const CONSTRAINTS = [
  "Requires exact block hash for retrieval",
  "Returns header, not full block data",
  "Real-time chain reorganizations may affect accuracy",
];