import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getInflationReward() {
  return (
    <SolanaMethod
      method="getInflationReward"
      network="solana"
      cu={20}
      description={"Retrieves information about the inflation rewards earned by a specific account"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The inflation rewards earned by an account"
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
  --data '{"jsonrpc":"2.0","id":1, "method":"getInflationReward", "params": [["ADDRESS_TO_SEARCH_1", "ADDRESS_TO_SEARCH_2"], {"epoch": 2}] }'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getInflationReward",
  "params": [["ADDRESS_TO_SEARCH_1", "ADDRESS_TO_SEARCH_2"], {"epoch": 2}]
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
  "method": "getInflationReward",
  "params": [["ADDRESS_TO_SEARCH_1", "ADDRESS_TO_SEARCH_2"], {"epoch": 2}]
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
		"method":  "getInflationReward",
		"params":  []interface{}{[]string{"ADDRESS_TO_SEARCH_1", "ADDRESS_TO_SEARCH_2"}, map[string]interface{}{"epoch": 2}},
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
    "method": "getInflationReward",
    "params": [["ADDRESS_TO_SEARCH_1", "ADDRESS_TO_SEARCH_2"], {"epoch": 2}]
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
        "method": "getInflationReward",
        "params": [["ADDRESS_TO_SEARCH_1", "ADDRESS_TO_SEARCH_2"], {"epoch": 2}]
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
    {
      "epoch": 2,
      "effectiveSlot": 12345678,
      "amount": 1000,
      "postBalance": 500000,
      "commission": 5
    },
    {
      "epoch": 2,
      "effectiveSlot": 12345678,
      "amount": 1500,
      "postBalance": 600000,
      "commission": 10
    }
  ],
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "minContextSlot",
    type: "object",
    paramDescription: "The minimum slot number at which the request can be evaluated."
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
          paramName: "epoch",
          type: "integer",
          paramDescription: "The epoch in which the reward was issued.",
        },
        {
          paramName: "effectiveSlot",
          type: "integer",
          paramDescription: "The slot number at which the rewards become effective.",
        },
        {
          paramName: "amount",
          type: "integer",
          paramDescription: "The reward amount in lamports.",
        },
        {
          paramName: "postBalance",
          type: "integer",
          paramDescription: "The account balance in lamports after receiving the reward.",
        },
        {
          paramName: "commission",
          type: "integer",
          paramDescription: "The commission rate of the vote account when the reward was credited.",
        },
        ],
  },
];

const USE_CASES = [
  "Retrieve inflation rewards for staking accounts",
  "Analyze rewards data to optimize staking strategies",
  "Monitor earned rewards for financial reporting",
];

const CONSTRAINTS = [
  "Limited to inflation rewards for specific account",
  "Subject to API call rate limitations",
  "Potential delays in retrieving reward information",
];
