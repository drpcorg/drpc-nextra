import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getStakeActivation() {
  return (
    <SolanaMethod
      method="getStakeActivation"
      network="solana"
      cu={20}
      description={"Provides the activation status of a stake account, including its active, inactive, and activating stake amounts"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Provides the activation status of a stake account"
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
  --data '{"jsonrpc":"2.0","id":1, "method":"getStakeActivation", "params": ["Buc3N8TitzhVtvy7sm85YWpY2F5PAAKV2iLP1cZAbwrJ"]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getStakeActivation",
  "params": ["Buc3N8TitzhVtvy7sm85YWpY2F5PAAKV2iLP1cZAbwrJ"]
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
  "method": "getStakeActivation",
  "params": ["Buc3N8TitzhVtvy7sm85YWpY2F5PAAKV2iLP1cZAbwrJ"]
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
		"method":  "getStakeActivation",
		"params":  []interface{}{"Buc3N8TitzhVtvy7sm85YWpY2F5PAAKV2iLP1cZAbwrJ"},
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
    "method": "getStakeActivation",
    "params": ["Buc3N8TitzhVtvy7sm85YWpY2F5PAAKV2iLP1cZAbwrJ"]
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
        "method": "getStakeActivation",
        "params": ["Buc3N8TitzhVtvy7sm85YWpY2F5PAAKV2iLP1cZAbwrJ"]
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
    "state": "active",
    "active": 123456789,
    "inactive": 0
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
    paramName: "epoch",
    type: "string",
    paramDescription: "The epoch for which to retrieve the stake activation information."
  },
  {
    paramName: "minContextSlot",
    type: "object",
    paramDescription: "The minimum slot at which the request can be evaluated."
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
                paramName: "active",
                type: "integer",
                paramDescription: "The amount of stake that is currently active, in lamports.",
              },
              {
                paramName: "inactive",
                type: "integer",
                paramDescription: "The amount of stake that is currently inactive, in lamports.",
              },
              {
                paramName: "state",
                type: "boolean",
                paramDescription: " The activation state of the stake, which can be \"inactive\", \"activating\", \"active\", or \"deactivating\".",
              },
          ],
        },
    ],
  },
];

const USE_CASES = [
  "Fetch the current activation status of staked accounts",
  "Track activation changes to manage staking more effectively",
  "Evaluate stake activation to maximize staking rewards",
];

const CONSTRAINTS = [
  "Only covers present stake activation information",
  "Requires latest network data for accuracy",
  "API rate restrictions may limit retrieval rate",
];
