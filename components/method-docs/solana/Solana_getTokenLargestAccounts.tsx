import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getTokenLargestAccounts() {
  return (
    <SolanaMethod
      method="getTokenLargestAccounts"
      network="solana"
      cu={20}
      description={"Returns the largest token accounts of a specified SPL token, helping identify major holders and analyze token concentration"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "returns the largest token accounts for a specified mint, including their addresses and balances, providing a snapshot of the largest holders of that token"
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
  --data '{"jsonrpc":"2.0", "id":1, "method":"getTokenLargestAccounts", "params": ["1YDQ35V8g68FGvcT85haHwAXv1U7XMzuc4mZeEXfrjE"]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getTokenLargestAccounts",
  "params": ["1YDQ35V8g68FGvcT85haHwAXv1U7XMzuc4mZeEXfrjE"]
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
  "method": "getTokenLargestAccounts",
  "params": ["1YDQ35V8g68FGvcT85haHwAXv1U7XMzuc4mZeEXfrjE"]
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
		"method":  "getTokenLargestAccounts",
		"params":  []interface{}{"1YDQ35V8g68FGvcT85haHwAXv1U7XMzuc4mZeEXfrjE"},
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
    "method": "getTokenLargestAccounts",
    "params": ["1YDQ35V8g68FGvcT85haHwAXv1U7XMzuc4mZeEXfrjE"]
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
        "method": "getTokenLargestAccounts",
        "params": ["1YDQ35V8g68FGvcT85haHwAXv1U7XMzuc4mZeEXfrjE"]
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
        "address": "3jYsNSJdV89z4iGxURz4ifKXHpFp7kB1TsX7u3ZQ76F3",
        "amount": "5000000000",
        "decimals": 6,
        "uiAmount": 5000.0,
        "uiAmountString": "5000.0"
      },
      {
        "address": "6Fjs8jGqZ4iKy3JsmJJZ7NYA1X9v1wvFmiZD12FkSt9r",
        "amount": "3000000000",
        "decimals": 6,
        "uiAmount": 3000.0,
        "uiAmountString": "3000.0"
      },
      {
        "address": "5H3szVqE8fb7vXc9FskKJ2K6X2uS3g9Jx5iLqrPh9zJQ",
        "amount": "2000000000",
        "decimals": 6,
        "uiAmount": 2000.0,
        "uiAmountString": "2000.0"
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
  "Fetch the top accounts holding a particular token",
  "Track major token holders to gauge distribution",
  "Examine ownership concentration for a given token",
];

const CONSTRAINTS = [
  "Limited to the specified token's account data",
  "Depends on current network data accuracy",
  "API rate limitations might limit query frequency",
];
