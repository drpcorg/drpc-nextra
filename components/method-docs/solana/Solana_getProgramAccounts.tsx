import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getProgramAccounts() {
  return (
    <SolanaMethod
      method="getProgramAccounts"
      network="solana"
      cu={20}
      description={"Fetches all accounts owned by a specified program"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "An RpcResponse JSON object containing details about the node and its account."
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
  --data '{"jsonrpc":"2.0", "id":1, "method":"getProgramAccounts", "params": ["PROGRAM_TO_SEARCH"]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getProgramAccounts",
  "params": ["PROGRAM_TO_SEARCH"]
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
  "method": "getProgramAccounts",
  "params": ["PROGRAM_TO_SEARCH"]
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
		"method":  "getProgramAccounts",
		"params":  []interface{}{"PROGRAM_TO_SEARCH"},
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
    "method": "getProgramAccounts",
    "params": ["PROGRAM_TO_SEARCH"]
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
        "method": "getProgramAccounts",
        "params": ["PROGRAM_TO_SEARCH"]
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
      "pubkey": "FhtkR4pKYQ7fM5bGY4r8mPzRmAz5k1tyczdpa53dWHTQ",
      "account": {
        "lamports": 2039280,
        "owner": "PROGRAM_TO_SEARCH",
        "data": "",
        "executable": false,
        "rentEpoch": 114
      }
    },
    {
      "pubkey": "5TJAgGy9iHVjd1S4Ad4gBb2dhS5i7kRaT1p7eyJw5Hbn",
      "account": {
        "lamports": 1000000,
        "owner": "PROGRAM_TO_SEARCH",
        "data": "",
        "executable": false,
        "rentEpoch": 114
      }
    }
  ],
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
    paramName: "minContextSlot",
    type: "integer",
    paramDescription:
      "The minimum slot at which the request can be evaluated.",
  },
  {
    paramName: "withContext",
    type: "string",
    paramDescription:
      "Wraps the result in an RpcResponse JSON object.",
  },
  {
    paramName: "filters",
    type: "string",
    paramDescription:
      "Filters results using up to 4 filter objects.",
  },
  {
    paramName: "dataSlice",
    type: "string",
    paramDescription:
      "Returns account data using the specified offset ('usize') and length ('usize') fields. Only available for base58, base64, or base64+zstd encodings.",
  },
  {
    paramName: "encoding",
    type: "string",
    paramDescription: "Specifies the data encoding for the returned account information"
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
          paramName: "accountPublicKey",
          type: "string",
          paramDescription: "The public key of the account to query.",
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
                type: "boolean",
                paramDescription: "dicates if the account contains a program and is read-only.",
              },
              {
                paramName: "rentEpoch",
                type: "integer",
                paramDescription: "The epoch at which this account will next owe rent.",
              },
              {
                paramName: "space",
                type: "integer",
                paramDescription: "The amount of storage space required to store the token account.",
              },
          ]
        },
    ],
  },
];

const USE_CASES = [
  "Retrieve all accounts associated with a specific program",
  "Analyze program accounts for operational insights",
  "Monitor changes in program accounts over time",
];

const CONSTRAINTS = [
  "Limited to accounts of a specified program",
  "Dependent on current network synchronization",
  "API rate limits may affect data retrieval",
];
