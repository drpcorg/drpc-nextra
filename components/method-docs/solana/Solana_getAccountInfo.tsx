import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getAccountInfo() {
  return (
    <SolanaMethod
      method="getAccountInfo"
      network="solana"
      cu={10}
      description={"Retrieves detailed information about a specific account on the Solana blockchain."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains detailed information about the account"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --location --request POST '${DRPC_ENDPOINT_URL}' \\
--header 'Content-Type: application/json' \\
--data-raw '  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": [
      "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
      {
        "encoding": "base58"
      }
    ]
  }'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
const body = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": [
    "ExamplePublicKeyHere", 
    {
      "encoding": "jsonParsed",
      "commitment": "finalized"
    }
  ]
});

fetch(url, {
  method: 'POST',
  headers: headers,
  body: body
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
  "method": "getAccountInfo",
  "params": [
    "ExamplePublicKeyHere",
    {
      "encoding": "jsonParsed",
      "commitment": "finalized"
    }
  ]
});

const options = {
  hostname: '${DRPC_ENDPOINT_URL}',
  path: '/v2/docs-demo',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

const req = https.request(options, (res) => {
  let responseData = '';
  res.on('data', (chunk) => {
    responseData += chunk;
  });
  res.on('end', () => {
    console.log(JSON.parse(responseData));
  });
});

req.on('error', (error) => {
  console.error(error);
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
		"method":  "getAccountInfo",
		"params": []interface{}{
			"ExamplePublicKeyHere",
			map[string]interface{}{
				"encoding":   "jsonParsed",
				"commitment": "finalized",
			},
		},
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
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
data = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": [
        "ExamplePublicKeyHere",
        {
            "encoding": "jsonParsed",
            "commitment": "finalized"
        }
    ]
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let url = "${DRPC_ENDPOINT_URL}";

    let request_body = json!({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getAccountInfo",
        "params": [
            "ExamplePublicKeyHere",
            {
                "encoding": "jsonParsed",
                "commitment": "finalized"
            }
        ]
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
      "slot": 84768334
    },
    "value": {
      "data": {
        "parsed": {
          "info": {
            "owner": "11111111111111111111111111111111",
            "lamports": 1000000000,
            "rentEpoch": 23,
            "data": []
          },
          "type": "account"
        },
        "program": "system",
        "space": 0
      },
      "executable": false,
      "lamports": 1000000000,
      "owner": "11111111111111111111111111111111",
      "rentEpoch": 23
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
    paramName: "encoding",
    type: "string",
    paramDescription: "Specifies the data encoding for the returned account information"
  },
  {
    paramName: "dataSlice",
    type: "object",
    paramDescription: "Limits the returned account data based on the specified offset and length fields. Available only for \"base58\", \"base64\", or \"base64+zstd\" encodings."
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
          paramName: "slot",
          type: "int64",
        },
        {
          paramName: "value",
          type: "object",
          childrenParamsType: "object",
          childrenParams: [
              {
                paramName: "lamports",
                type: "int64",
                paramDescription: "The number of lamports (smallest unit of SOL) assigned to this account.",
              },
              {
                paramName: "owner",
                type: "string",
                paramDescription: "Base-58 encoded public key of the program assigned to this account",
              },
              {
                paramName: "data",
                type: "string",
                paramDescription: "Data associated with the account, either as encoded binary data or in JSON format, depending on the specified encoding. Format: [data, encoding] or JSON object",
              },
              {
                paramName: "executable",
                type: "string",
                paramDescription: "dicates if the account contains a program and is read-only.",
              },
              {
                paramName: "rentEpoch",
                type: "string",
                paramDescription: "The epoch at which this account will next owe rent.",
              },
          ]
        },
    ],
  },
];

const USE_CASES = [
  "Monitor account balance changes for Solana applications",
  "Verify ownership details of a Solana account",
  "Retrieve account state for application-specific data",
];

const CONSTRAINTS = [
  "Requires valid Solana account public key",
  "Network latency can affect response time",
  "Program-specific data structures may vary significantly",
];
