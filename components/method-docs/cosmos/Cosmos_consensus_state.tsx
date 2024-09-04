import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_consensus_state() {
  return (
    <CosmosMethod
      method="consensus_state"
      network="Cosmos"
      cu={20}
      description={"Retrieves how to retrieve the current consensus state"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains the current consensus state of the blockchain"
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
    "method": "consensus_state",
    "params": [],
    "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "consensus_state",
  "params": [],
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
  "method": "consensus_state",
  "params": [],
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
		"method":  "consensus_state",
		"params":  []interface{}{},
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
    "method": "consensus_state",
    "params": [],
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
        "method": "consensus_state",
        "params": [],
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
    "round_state": {
      "height": "20431584",
      "round": "0",
      "step": "COMMIT",
      "votes": {
        "prevotes": [],
        "precommits": []
      },
      "proposer": "12345ABCDE..."
    },
    "validators": {
      "total_voting_power": "1000000000",
      "validator_set": [
        {
          "address": "ABCDE12345...",
          "voting_power": "500000000"
        },
        {
          "address": "67890FGHIJ...",
          "voting_power": "500000000"
        }
      ]
    }
  },
  "id": 1
}
`;

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
    type: "object",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "round_state",
        type: "object",
        paramDescription: "The current round state of the consensus process, including round number and step.",
        childrenParams: [
          {
            paramName: "height",
            type: "string",
            paramDescription: "The current block height in the consensus process."
          },
          {
            paramName: "round",
            type: "integer",
            paramDescription: "The current round number in the consensus process."
          },
          {
            paramName: "step",
            type: "string",
            paramDescription: "The current step in the consensus process."
          },
          {
            paramName: "proposal_block",
            type: "object",
            paramDescription: "Details about the proposed block in the current round, if any.",
            childrenParams: [
              {
                paramName: "block_id",
                type: "object",
                paramDescription: "The identifier of the proposed block.",
                childrenParams: [
                  {
                    paramName: "hash",
                    type: "string",
                    paramDescription: "The unique hash of the proposed block."
                  },
                  {
                    paramName: "parts",
                    type: "object",
                    paramDescription: "Information about the block parts.",
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
                paramName: "block_parts_header",
                type: "object",
                paramDescription: "Header information about the parts of the proposed block.",
                childrenParams: [
                  {
                    paramName: "total",
                    type: "integer",
                    paramDescription: "The total number of block parts."
                  },
                  {
                    paramName: "hash",
                    type: "string",
                    paramDescription: "The hash of the block parts."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        paramName: "validators",
        type: "array",
        paramDescription: "Array of validators participating in the consensus process.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "address",
            type: "string",
            paramDescription: "The address of the validator."
          },
          {
            paramName: "pub_key",
            type: "string",
            paramDescription: "The public key of the validator."
          },
          {
            paramName: "voting_power",
            type: "string",
            paramDescription: "The voting power of the validator."
          },
          {
            paramName: "proposer_priority",
            type: "string",
            paramDescription: "The priority of the validator as a proposer."
          }
        ]
      },
      {
        paramName: "proposal",
        type: "object",
        paramDescription: "Details of the current proposal in the consensus process.",
        childrenParams: [
          {
            paramName: "proposal_id",
            type: "string",
            paramDescription: "The unique identifier of the proposal."
          },
          {
            paramName: "proposal_hash",
            type: "string",
            paramDescription: "The hash of the proposal."
          },
          {
            paramName: "pol_round",
            type: "integer",
            paramDescription: "The round in which the proposal was locked."
          },
          {
            paramName: "pol_votes",
            type: "array",
            paramDescription: "Votes received in the proof-of-lock round.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "validator_address",
                type: "string",
                paramDescription: "The address of the validator who cast the vote."
              },
              {
                paramName: "vote_type",
                type: "string",
                paramDescription: "The type of vote cast by the validator."
              }
            ]
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Monitor the current state of the consensus process",
  "Check validator participation in the consensus round",
  "Verify the current round and step in consensus",
];

const CONSTRAINTS = [
  "Real-time data may vary rapidly",
  "Requires understanding of consensus mechanics",
  "Not useful for finalized block data",
];





