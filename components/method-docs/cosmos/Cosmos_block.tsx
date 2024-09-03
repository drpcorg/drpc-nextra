import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_block() {
  return (
    <CosmosMethod
      method="block"
      network="Cosmos"
      cu={10}
      description={"Retrieves detailed block data"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Return the block of a height"
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
      "method": "block",
      "params": [20431584],
      "id": 1
    }'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "block",
  "params": [20431584],
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
  "method": "block",
  "params": [20431584],
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
		"method":  "block",
		"params":  []interface{}{20431584},
		"id":      1,
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
    "method": "block",
    "params": [20431584],
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
        "method": "block",
        "params": [20431584],
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
    "block_id": {
      "hash": "ABCDE1234567890...",
      "parts": {
        "total": 1,
        "hash": "FGHIJ1234567890..."
      }
    },
    "block": {
      "header": {
        "version": {
          "block": "11",
          "app": "0"
        },
        "chain_id": "cosmoshub-4",
        "height": "20431584",
        "time": "2022-10-12T10:55:50.385Z",
        "last_block_id": {
          "hash": "KL1234567890...",
          "parts": {
            "total": 1,
            "hash": "MNOPQ1234567890..."
          }
        },
        "last_commit_hash": "RSTU1234567890...",
        "data_hash": "VWXY1234567890...",
        "validators_hash": "ZABC1234567890...",
        "next_validators_hash": "DEFG1234567890...",
        "consensus_hash": "HIJK1234567890...",
        "app_hash": "LMNOP1234567890...",
        "last_results_hash": "QRST1234567890...",
        "evidence_hash": "UVWXY1234567890...",
        "proposer_address": "12345ABCDE..."
      },
      "data": {
        "txs": [
          "ABCDEFG1234567890..."
        ]
      },
      "evidence": {
        "evidence": []
      },
      "last_commit": {
        "height": "20431583",
        "round": 0,
        "block_id": {
          "hash": "QRSTU1234567890...",
          "parts": {
            "total": 1,
            "hash": "VWXYZ1234567890..."
          }
        },
        "signatures": [
          {
            "block_id_flag": 2,
            "validator_address": "ABCDEFGH1234567...",
            "timestamp": "2022-10-12T10:55:50.385Z",
            "signature": "12345ABCDE..."
          }
        ]
      }
    }
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "height",
    type: "integer",
    paramDescription: "The block height to return. If no height is provided, the latest block is to be fetched"
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
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "block_id",
        type: "object",
        paramDescription: "Details about the block's unique identifier.",
        childrenParams: [
          {
            paramName: "hash",
            type: "string",
            paramDescription: "The unique hash of the block."
          },
          {
            paramName: "parts",
            type: "object",
            paramDescription: "Information about block parts.",
            childrenParams: [
              {
                paramName: "total",
                type: "integer",
                paramDescription: "The total number of parts."
              },
              {
                paramName: "hash",
                type: "string",
                paramDescription: "The hash of the block parts."
              }
            ]
          }
        ]
      },
      {
        paramName: "block",
        type: "object",
        paramDescription: "Contains the detailed information about the block itself.",
        childrenParams: [
          {
            paramName: "header",
            type: "object",
            paramDescription: "The header information of the block.",
            childrenParams: [
              {
                paramName: "version",
                type: "object",
                paramDescription: "The version information of the block.",
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
                paramDescription: "The hash of the consensus."
              },
              {
                paramName: "app_hash",
                type: "string",
                paramDescription: "The hash of the application state after this block."
              },
              {
                paramName: "last_results_hash",
                type: "string",
                paramDescription: "The hash of the results of the last block."
              },
              {
                paramName: "evidence_hash",
                type: "string",
                paramDescription: "The hash of any evidence of misbehavior."
              },
              {
                paramName: "proposer_address",
                type: "string",
                paramDescription: "The address of the block proposer."
              }
            ]
          },
          {
            paramName: "data",
            type: "object",
            paramDescription: "The transactions contained in the block.",
            childrenParams: [
              {
                paramName: "txs",
                type: "array",
                paramDescription: "An array of transactions included in the block.",
                childrenParamsType: "string"
              }
            ]
          },
          {
            paramName: "evidence",
            type: "object",
            paramDescription: "Evidence of any malicious behavior.",
            childrenParams: [
              {
                paramName: "evidence",
                type: "array",
                paramDescription: "Array of evidence.",
                childrenParamsType: "object",
                childrenParams: []
              }
            ]
          },
          {
            paramName: "last_commit",
            type: "object",
            paramDescription: "Information about the last commit.",
            childrenParams: [
              {
                paramName: "height",
                type: "string",
                paramDescription: "The height of the block that was committed."
              },
              {
                paramName: "round",
                type: "integer",
                paramDescription: "The round number of the last commit."
              },
              {
                paramName: "block_id",
                type: "object",
                paramDescription: "The block ID that was committed.",
                childrenParams: [
                  {
                    paramName: "hash",
                    type: "string",
                    paramDescription: "The hash of the committed block."
                  },
                  {
                    paramName: "parts",
                    type: "object",
                    paramDescription: "The parts of the committed block.",
                    childrenParams: [
                      {
                        paramName: "total",
                        type: "integer",
                        paramDescription: "The total number of parts of the committed block."
                      },
                      {
                        paramName: "hash",
                        type: "string",
                        paramDescription: "The hash of the parts of the committed block."
                      }
                    ]
                  }
                ]
              },
              {
                paramName: "signatures",
                type: "array",
                paramDescription: "Array of signatures for the last commit.",
                childrenParamsType: "object",
                childrenParams: [
                  {
                    paramName: "block_id_flag",
                    type: "integer",
                    paramDescription: "Flag indicating the block ID."
                  },
                  {
                    paramName: "validator_address",
                    type: "string",
                    paramDescription: "The address of the validator."
                  },
                  {
                    paramName: "timestamp",
                    type: "string",
                    paramDescription: "The timestamp of the signature."
                  },
                  {
                    paramName: "signature",
                    type: "string",
                    paramDescription: "The signature of the validator."
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve details of a specific block by height",
  "Analyze transactions within a specific block",
  "Verify block data for blockchain synchronization",
];

const CONSTRAINTS = [
  "Block height might not exist on all nodes",
  "Historical block data may be pruned",
  "Heavy load may affect node performance",
];
