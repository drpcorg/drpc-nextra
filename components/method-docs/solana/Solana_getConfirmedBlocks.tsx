import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getConfirmedBlocks() {
  return (
    <SolanaMethod
      method="getConfirmedBlocks"
      network="solana"
      cu={10}
      description={"The method in Solana enables to obtain a list of confirmed blocks"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "An array listing the confirmed block numbers between start_slot and end_slot"
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
  --data '{"jsonrpc": "2.0","id":1,"method":"getConfirmedBlocks","params":[94101945, 94101948]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getConfirmedBlocks",
  "params": [94101945, 94101948]
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
  "method": "getConfirmedBlocks",
  "params": [94101945, 94101948]
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
		"method":  "getConfirmedBlocks",
		"params":  []interface{}{94101945, 94101948},
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
    "method": "getConfirmedBlocks",
    "params": [94101945, 94101948]
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
        "method": "getConfirmedBlocks",
        "params": [94101945, 94101948]
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
    94101945,
    94101946,
    94101947,
    94101948
  ],
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "start_slot",
    type: "string",
    paramDescription:
      "The start slot number represented as a 64-bit unsigned integer (u64).",
  },
  {
    paramName: "end_slot",
    type: "string",
    paramDescription:
      "The end slot number represented as a 64-bit unsigned integer (u64).",
  },
  {
    paramName: "object",
    type: "array",
    paramDescription: "The configuration object containing the following fields:",
    childrenParams: [
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
      {
        paramName: "encoding",
        type: "object",
        paramDescription: " (Default: json) The encoding format for account data. Options include \"base58\" (slow), \"base64\", \"base64+zstd\", or \"jsonParsed\""
      },
      {
        paramName: "transactionDetails",
        type: "string",
        paramDescription: "(Default: full) Specifies the level of transaction details in the response. Options include \"full\", \"signatures\", and \"none\"."
      },
      {
        paramName: "rewards",
        type: "boolean",
        paramDescription: "(Default: true) Determines whether to include the rewards array in the response"
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
    type: "array_of_integers",
    paramDescription: "If provided, or up to the latest confirmed block. The range can span up to 500,000 slots.",
  },
];

const USE_CASES = [
  "Retrieve a range of confirmed block numbers for analysis",
  "Monitor a sequence of blocks for transaction tracking",
  "Analyze block confirmations over a specific range",
];

const CONSTRAINTS = [
  "Requires valid block number range",
  "Network delays can affect data retrieval",
  "High-frequency requests may lead to rate limiting",
];
