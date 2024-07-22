import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getVoteAccounts() {
  return (
    <SolanaMethod
      method="getVoteAccounts"
      network="solana"
      cu={5}
      description={"The method in Solana retrieves the current software version of the node"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains arrays of current and delinquent accounts with detailed fields for each."
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
  --data '{"jsonrpc":"2.0","id":1, "method":"getVoteAccounts"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getVoteAccounts"
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
  "method": "getVoteAccounts"
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
		"method":  "getVoteAccounts",
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
    "method": "getVoteAccounts"
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
        "method": "getVoteAccounts"
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
    "current": [
      {
        "votePubkey": "Vote111111111111111111111111111111111111111",
        "nodePubkey": "Node111111111111111111111111111111111111111",
        "activatedStake": 1234567890,
        "commission": 10,
        "lastVote": 12345678,
        "epochVoteAccount": true,
        "epochCredits": [
          [123, 456, 789]
        ]
      }
    ],
    "delinquent": [
      {
        "votePubkey": "Vote222222222222222222222222222222222222222",
        "nodePubkey": "Node222222222222222222222222222222222222222",
        "activatedStake": 987654321,
        "commission": 15,
        "lastVote": 87654321,
        "epochVoteAccount": false,
        "epochCredits": [
          [321, 654, 987]
        ]
      }
    ]
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "votePubkey",
    type: "string",
    paramDescription:
      " Return results only for this validator's vote address, encoded in base-58.",
  },
  {
    paramName: "keepUnstakedDelinquents",
    type: "boolean",
    paramDescription:
      "Indicates whether to include delinquent validators with no stake in the results.",
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
    type: "string",
    childrenParamsType: "array",
    childrenParams: [
        {
          paramName: "current",
          type: "object",
          childrenParamsType: "object",
          paramDescription: "Details of currently active accounts",
          childrenParams: [
              {
                paramName: "activatedStake",
                type: "uint64",
                paramDescription: "The active stake in lamports for this epoch (u64 integer)",
              },
              {
                paramName: "commission",
                type: "integer",
                paramDescription: "The percentage of rewards owed to the vote account (0-100).",
              },
              {
                paramName: "epochCredits",
                type: "string",
                paramDescription: "History of earned credits for up to five epochs, in the format: epoch, credits, previousCredits.",
              },
              {
                paramName: "epochVoteAccount",
                type: "boolean",
                paramDescription: "Boolean indicating if the vote account is staked for this epoch.",
              },
              {
                paramName: "lastVote",
                type: "string",
                paramDescription: "The most recent slot voted on by this account.",
              },
              {
                paramName: "nodePubkey",
                type: "string",
                paramDescription: "Validator identity, base-58 encoded.",
              },
              {
                paramName: "rootSlot",
                type: "string",
                paramDescription: "The current root slot for this vote account.",
              },
              {
                paramName: "votePubkey",
                type: "string",
                paramDescription: "The vote account address, base-58 encoded.",
              },
          ]
        },
        {
          paramName: "delinquent",
          type: "array",
          childrenParamsType: "array",
          paramDescription: "Details of delinquent accounts:",
          childrenParams: [
              {
                paramName: "activatedStake",
                type: "uint64",
                paramDescription: "The active stake in lamports for this epoch (u64 integer)",
              },
              {
                paramName: "commission",
                type: "integer",
                paramDescription: "The percentage of rewards owed to the vote account (0-100).",
              },
              {
                paramName: "epochCredits",
                type: "string",
                paramDescription: "History of earned credits for up to five epochs, in the format: epoch, credits, previousCredits.",
              },
              {
                paramName: "epochVoteAccount",
                type: "boolean",
                paramDescription: "Boolean indicating if the vote account is staked for this epoch.",
              },
              {
                paramName: "lastVote",
                type: "string",
                paramDescription: "The most recent slot voted on by this account.",
              },
              {
                paramName: "nodePubkey",
                type: "string",
                paramDescription: "Validator identity, base-58 encoded.",
              },
              {
                paramName: "rootSlot",
                type: "string",
                paramDescription: "The current root slot for this vote account.",
              },
              {
                paramName: "votePubkey",
                type: "string",
                paramDescription: "The vote account address, base-58 encoded.",
              },
          ]
        },
    ],
  },
];

const USE_CASES = [
  "Retrieve information about current vote accounts in Solana",
  "Monitor vote accounts to assess network participation",
  "Analyze voting data for network governance insights",
];

const CONSTRAINTS = [
  "Limited to the data of active vote accounts",
  "Dependent on accurate and up-to-date network information",
  "API rate limits may restrict frequent data retrieval",
];
