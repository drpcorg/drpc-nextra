import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_blockchain() {
  return (
    <CosmosMethod
      method="blockchain"
      network="Cosmos"
      cu={20}
      description={"Retrieves a range of block data within a specific height range"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The parameters used to retrieve blocks within a specific height range from the blockchain"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --location '${DRPC_ENDPOINT_URL_COSMOS}' \\
--header 'Content-Type: application/json' \\
--data '{
      "jsonrpc": "2.0",
      "method": "blockchain",
      "params": [20431584, 20431604],
      "id": 1
    }'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_COSMOS}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "blockchain",
  "params": [20431584, 20431604],
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
  "method": "blockchain",
  "params": [20431584, 20431604],
  "id": 1
});

const options = {
  hostname: '${DRPC_ENDPOINT_URL_COSMOS}',
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
	url := "${DRPC_ENDPOINT_URL_COSMOS}"

	requestBody, err := json.Marshal(map[string]interface{}{
		"jsonrpc": "2.0",
		"method":  "blockchain",
		"params": []interface{}{
			20431584,
			20431604,
		},
		"id": 1,
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

url = '${DRPC_ENDPOINT_URL_COSMOS}'
headers = {
    'Content-Type': 'application/json'
}

data = {
    "jsonrpc": "2.0",
    "method": "blockchain",
    "params": [20431584, 20431604],
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
    let url = "${DRPC_ENDPOINT_URL_COSMOS}";

    let request_body = json!({
        "jsonrpc": "2.0",
        "method": "blockchain",
        "params": [20431584, 20431604],
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
    "last_height": "20431604",
    "block_metas": [
      {
        "block_id": {
          "hash": "0x1234567890ABCDEF...",
          "parts": {
            "total": 1,
            "hash": "0xABCDEF1234567890..."
          }
        },
        "header": {
          "version": {
            "block": "11",
            "app": "0"
          },
          "chain_id": "cosmoshub-4",
          "height": "20431584",
          "time": "2022-10-12T10:55:50.385Z",
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
      }
      // Other blocks would be included here
    ]
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
      paramName: "minHeight",
      type: "string",
      paramDescription: "The minimum block height to start retrieving blocks from."
    },
    {
      paramName: "maxHeight",
      type: "string",
      paramDescription: "The maximum block height to stop retrieving blocks at."
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
    paramDescription: "Contains the information about the blockchain from the specified block height range, including the blocks' metadata and block IDs.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "last_height",
        type: "string",
        paramDescription: "The height of the last block in the requested range."
      },
      {
        paramName: "block_metas",
        type: "array",
        paramDescription: "An array containing metadata for each block in the range.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "block_id",
            type: "object",
            paramDescription: "The unique identifier of the block.",
            childrenParams: [
              {
                paramName: "hash",
                type: "string",
                paramDescription: "The unique hash of the block."
              },
              {
                paramName: "parts",
                type: "object",
                paramDescription: "Information about the parts of the block.",
                childrenParams: [
                  {
                    paramName: "total",
                    type: "integer",
                    paramDescription: "The total number of parts in the block."
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
            paramName: "header",
            type: "object",
            paramDescription: "Header information for the block.",
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
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve a range of block headers",
  "Analyze blockchain activity over multiple blocks",
  "Verify block integrity across a range",
];

const CONSTRAINTS = [
  "Performance impact with large ranges",
  "Data inconsistency during chain reorganizations",
  "Rate limiting on public RPC endpoints",
];
