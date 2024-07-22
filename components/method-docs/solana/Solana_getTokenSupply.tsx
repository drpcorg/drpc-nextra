import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getTokenSupply() {
  return (
    <SolanaMethod
      method="getTokenSupply"
      network="solana"
      cu={14}
      description={"Provides the total supply of a specified SPL token, aiding developers"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the total supply of a specific token, including details such as the raw supply count and the supply formatted with the token's decimal places"
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
  --data '{"jsonrpc":"2.0", "id":1, "method":"getTokenSupply", "params": ["7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getTokenSupply",
  "params": ["7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"]
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
  "method": "getTokenSupply",
  "params": ["7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"]
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
		"method":  "getTokenSupply",
		"params":  []interface{}{"7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"},
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
    "method": "getTokenSupply",
    "params": ["7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"]
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
        "method": "getTokenSupply",
        "params": ["7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"]
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
    "value": {
      "amount": "5000000000",
      "decimals": 6,
      "uiAmount": 5000.0,
      "uiAmountString": "5000.0"
    }
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
            paramName: "addess",
            type: "string",
            },
            {
            paramName: "amount",
            type: "string",
            paramDescription: "Raw token supply, without decimals, as a u64 integer.",
            },
            {
            paramName: "decimals",
            type: "integer",
            paramDescription: "Number of decimal places the token uses.",
            },
            {
            paramName: "uiAmount",
            type: "string",
            paramDescription: "Total token supply with mint-prescribed decimals (DEPRECATED).",
            },
            {
            paramName: "uiAmountString",
            type: "string",
            paramDescription: "Total token supply as a string, with mint-prescribed decimals.",
            },
          ]
        },
    ],
  },
];

const USE_CASES = [
  "Fetch the complete supply details in the Solana network",
  "Track variations in token supply to aid in market analysis",
  "Examine token supply metrics to inform financial strategies",
];

const CONSTRAINTS = [
  "Requires valid Solana account public key",
  "Network latency can affect response time",
  "Program-specific data structures may vary significantly",
];
