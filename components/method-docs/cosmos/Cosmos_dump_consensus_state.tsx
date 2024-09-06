import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_dump_consensus_state() {
  return (
    <CosmosMethod
      method="dump_consensus_state"
      network="Cosmos"
      cu={20}
      description={"Retrieves how to obtain a detailed snapshot of the consensus state"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains a comprehensive dump of the consensus state"
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
    "method": "dump_consensus_state",
    "params": [],
    "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_COSMOS}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "dump_consensus_state",
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
  "method": "dump_consensus_state",
  "params": [],
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
		"method":  "dump_consensus_state",
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

url = '${DRPC_ENDPOINT_URL_COSMOS}'
headers = {
    'Content-Type': 'application/json'
}

data = {
    "jsonrpc": "2.0",
    "method": "dump_consensus_state",
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
    let url = "${DRPC_ENDPOINT_URL_COSMOS}";

    let request_body = json!({
        "jsonrpc": "2.0",
        "method": "dump_consensus_state",
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
    "height": "20431584",
    "round": "0",
    "step": "COMMIT",
    "validators": [
      {
        "address": "12345ABCDE...",
        "voting_power": "500000000",
        "proposer_priority": "-1"
      },
      {
        "address": "67890FGHIJ...",
        "voting_power": "500000000",
        "proposer_priority": "1"
      }
    ],
    "proposer": "12345ABCDE...",
    "commit_votes": [],
    "last_commit": {
      "block_id": {
        "hash": "0x1234567890ABCDEF...",
        "parts": {
          "total": 1,
          "hash": "0x9876543210..."
        }
      },
      "signatures": []
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
        paramDescription: "Details about the current round in the consensus process, such as height, round number, step, and timing.",
        childrenParams: [
          {
            paramName: "height",
            type: "string",
            paramDescription: "The block height at which the current round is taking place."
          },
          {
            paramName: "round",
            type: "integer",
            paramDescription: "The number of the current round in the consensus process."
          },
          {
            paramName: "step",
            type: "string",
            paramDescription: "The current step or phase of the consensus round."
          },
          {
            paramName: "start_time",
            type: "string",
            paramDescription: "The timestamp marking the beginning of the current round."
          },
          {
            paramName: "commit_time",
            type: "string",
            paramDescription: "The timestamp when the commit occurred during the consensus round."
          }
        ]
      },
      {
        paramName: "validators",
        type: "object",
        paramDescription: "Information about the validators participating in the current round, including their addresses, public keys, and voting power.",
        childrenParams: [
          {
            paramName: "validators",
            type: "array",
            paramDescription: "A list of validators involved in the consensus round.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "address",
                type: "string",
                paramDescription: "The unique address of the validator."
              },
              {
                paramName: "pub_key",
                type: "object",
                paramDescription: "The public key of the validator, used for signing transactions.",
                childrenParams: [
                  {
                    paramName: "type",
                    type: "string",
                    paramDescription: "The type of the public key."
                  },
                  {
                    paramName: "value",
                    type: "string",
                    paramDescription: "The actual value of the public key."
                  }
                ]
              },
              {
                paramName: "voting_power",
                type: "string",
                paramDescription: "The voting power assigned to the validator, influencing its weight in the consensus process."
              },
              {
                paramName: "proposer_priority",
                type: "string",
                paramDescription: "The priority of the validator as a block proposer in the round."
              }
            ]
          },
          {
            paramName: "proposer",
            type: "object",
            paramDescription: "Details about the validator who is the proposer in the current round, including address and public key.",
            childrenParams: [
              {
                paramName: "address",
                type: "string",
                paramDescription: "The address of the proposer."
              },
              {
                paramName: "pub_key",
                type: "object",
                paramDescription: "The public key of the proposer.",
                childrenParams: [
                  {
                    paramName: "type",
                    type: "string",
                    paramDescription: "The type of the public key."
                  },
                  {
                    paramName: "value",
                    type: "string",
                    paramDescription: "The value of the public key."
                  }
                ]
              },
              {
                paramName: "voting_power",
                type: "string",
                paramDescription: "The voting power of the proposer."
              },
              {
                paramName: "proposer_priority",
                type: "string",
                paramDescription: "The priority assigned to the proposer in the round."
              }
            ]
          }
        ]
      },
      {
        paramName: "proposal",
        type: "object",
        paramDescription: "Details of the proposed block in the current round, including the block itself and any associated parts.",
        childrenParams: [
          {
            paramName: "proposal_block",
            type: "string",
            paramDescription: "The block that has been proposed, if any."
          },
          {
            paramName: "proposal_block_parts",
            type: "string",
            paramDescription: "The parts that make up the proposed block."
          },
          {
            paramName: "proposal_receive_time",
            type: "string",
            paramDescription: "The time when the proposal was received by the network."
          }
        ]
      },
      {
        paramName: "locked_round",
        type: "integer",
        paramDescription: "Indicates the round number that is currently locked in the consensus process."
      },
      {
        paramName: "locked_block",
        type: "string",
        paramDescription: "The block that is currently locked in the consensus process."
      },
      {
        paramName: "locked_block_parts",
        type: "string",
        paramDescription: "The parts that make up the locked block."
      },
      {
        paramName: "valid_round",
        type: "integer",
        paramDescription: "The round number that is considered valid in the consensus process."
      },
      {
        paramName: "valid_block",
        type: "string",
        paramDescription: "The block that is considered valid in the consensus process."
      },
      {
        paramName: "valid_block_parts",
        type: "string",
        paramDescription: "The parts that make up the valid block."
      },
      {
        paramName: "votes",
        type: "array",
        paramDescription: "A list of votes cast during the round, including prevotes and precommits.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "round",
            type: "integer",
            paramDescription: "The round number associated with the votes."
          },
          {
            paramName: "prevotes",
            type: "array",
            paramDescription: "An array of prevotes received in the round.",
            childrenParamsType: "string"
          },
          {
            paramName: "prevotes_bit_array",
            type: "string",
            paramDescription: "A bit array representing the prevotes."
          },
          {
            paramName: "precommits",
            type: "array",
            paramDescription: "An array of precommits received in the round.",
            childrenParamsType: "string"
          },
          {
            paramName: "precommits_bit_array",
            type: "string",
            paramDescription: "A bit array representing the precommits."
          },
          {
            paramName: "commit_round",
            type: "integer",
            paramDescription: "The round at which the commit occurred."
          }
        ]
      },
      {
        paramName: "last_commit",
        type: "object",
        paramDescription: "Information about the last commit, including the votes and the majority peers.",
        childrenParams: [
          {
            paramName: "votes",
            type: "array",
            paramDescription: "An array of votes in the last commit.",
            childrenParamsType: "string"
          },
          {
            paramName: "votes_bit_array",
            type: "string",
            paramDescription: "A bit array representing the votes in the last commit."
          },
          {
            paramName: "peer_maj_23s",
            type: "string",
            paramDescription: "The majority of peers (2/3) required for the commit."
          }
        ]
      },
      {
        paramName: "last_validators",
        type: "object",
        paramDescription: "Details of the validators in the last round, including their addresses, public keys, voting power, and proposer priority.",
        childrenParams: [
          {
            paramName: "validators",
            type: "array",
            paramDescription: "An array of validators from the last round.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "address",
                type: "string",
                paramDescription: "The address of the validator."
              },
              {
                paramName: "pub_key",
                type: "object",
                paramDescription: "Details of the public key used by the validator.",
                childrenParams: [
                  {
                    paramName: "type",
                    type: "string",
                    paramDescription: "The type of the public key."
                  },
                  {
                    paramName: "value",
                    type: "string",
                    paramDescription: "The value of the public key."
                  }
                ]
              },
              {
                paramName: "voting_power",
                type: "string",
                paramDescription: "The voting power assigned to the validator."
              },
              {
                paramName: "proposer_priority",
                type: "string",
                paramDescription: "The priority of the validator as a proposer in the last round."
              }
            ]
          },
          {
            paramName: "proposer",
            type: "object",
            paramDescription: "Details of the proposer in the last round, including address and public key.",
            childrenParams: [
              {
                paramName: "address",
                type: "string",
                paramDescription: "The address of the proposer."
              },
              {
                paramName: "pub_key",
                type: "object",
                paramDescription: "Details of the public key used by the proposer.",
                childrenParams: [
                  {
                    paramName: "type",
                    type: "string",
                    paramDescription: "The type ofthe public key."
                  },
                  {
                    paramName: "value",
                    type: "string",
                    paramDescription: "The value of the public key."
                  }
                ]
              },
              {
                paramName: "voting_power",
                type: "string",
                paramDescription: "The voting power of the proposer."
              },
              {
                paramName: "proposer_priority",
                type: "string",
                paramDescription: "The priority of the proposer."
              }
            ]
          }
        ]
      },
      {
        paramName: "triggered_timeout_precommit",
        type: "boolean",
        paramDescription: "Indicates whether a timeout precommit was triggered during the round."
      },
      {
        paramName: "peers",
        type: "array",
        paramDescription: "An array of peer nodes participating in the consensus process.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "node_address",
            type: "string",
            paramDescription: "The address of the peer node."
          },
          {
            paramName: "peer_state",
            type: "object",
            paramDescription: "Details about the peer's state, including its round state and consensus statistics.",
            childrenParams: [
              {
                paramName: "round_state",
                type: "object",
                paramDescription: "The round state of the peer node, including its height, round, and step.",
                childrenParams: [
                  {
                    paramName: "height",
                    type: "string",
                    paramDescription: "The height of the round."
                  },
                  {
                    paramName: "round",
                    type: "integer",
                    paramDescription: "The round number the peer is currently in."
                  },
                  {
                    paramName: "step",
                    type: "string",
                    paramDescription: "The step in the consensus process that the peer is on."
                  },
                  {
                    paramName: "start_time",
                    type: "string",
                    paramDescription: "The start time of the peer's current round."
                  },
                  {
                    paramName: "proposal",
                    type: "object",
                    paramDescription: "Details about the proposal in the peer's current round.",
                    childrenParams: [
                      {
                        paramName: "proposal_block_part_set_header",
                        type: "object",
                        paramDescription: "Header information about the parts of the proposal block, including the total number of parts.",
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
                  },
                  {
                    paramName: "proposal_block_parts",
                    type: "string",
                    paramDescription: "Information about the block parts in the proposal."
                  },
                  {
                    paramName: "proposal_pol_round",
                    type: "integer",
                    paramDescription: "The round in which the proposal was locked."
                  },
                  {
                    paramName: "proposal_pol",
                    type: "string",
                    paramDescription: "The proposal policy for the round."
                  },
                  {
                    paramName: "prevotes",
                    type: "string",
                    paramDescription: "The prevotes received in the peer's current round."
                  },
                  {
                    paramName: "precommits",
                    type: "string",
                    paramDescription: "The precommits received in the peer's current round."
                  },
                  {
                    paramName: "last_commit_round",
                    type: "integer",
                    paramDescription: "The round of the last commit."
                  },
                  {
                    paramName: "last_commit",
                    type: "string",
                    paramDescription: "The details of the last commit."
                  },
                  {
                    paramName: "catchup_commit_round",
                    type: "integer",
                    paramDescription: "The round of the catchup commit."
                  },
                  {
                    paramName: "catchup_commit",
                    type: "string",
                    paramDescription: "The details of the catchup commit."
                  }
                ]
              },
              {
                paramName: "stats",
                type: "object",
                paramDescription: "Statistics related to the peer's votes and block parts.",
                childrenParams: [
                  {
                    paramName: "votes",
                    type: "integer",
                    paramDescription: "The number of votes the peer has cast."
                  },
                  {
                    paramName: "block_parts",
                    type: "integer",
                    paramDescription: "The number of block parts the peer has processed."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Analyze full consensus state of the blockchain",
  "Troubleshoot consensus-related issues and conflicts",
  "Monitor validator voting power and priorities",
];

const CONSTRAINTS = [
  "Large data payload can be resource-intensive",
  "Requires in-depth understanding of consensus mechanics",
  "Real-time data can change rapidly during consensus",
];
