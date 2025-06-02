import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getFees() {
  return (
    <SolanaMethod
      method="getFees"
      network="solana"
      cu={20}
      description={"Provides with the latest fee structure information"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains details about the cluster fee rate at the queried blockhash"
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
  --data '{"jsonrpc":"2.0","id":1, "method":"getFees"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getFees"
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
  "method": "getFees"
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
		"method":  "getFees",
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
    "method": "getFees"
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
        "method": "getFees"
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
      "slot": 98108954
    },
    "value": {
      "blockhash": "6EUDAG2UBZ1J7CbpixutsELc5c6s4k8YzaWawyKH2Pit",
      "feeCalculator": {
        "lamportsPerSignature": 5000
      },
      "lastValidBlockHeight": 98109000
    }
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
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
        paramName: "value",
        type: "object",
        paramDescription: "A JSON object describing the cluster fee rate at the queried blockhash.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "blockhash",
            type: "string",
            paramDescription: "The blockhash used for the specified transaction, which is utilized in calculating the fees.",
          },
          {
            paramName: "feeCalculator",
            type: "object",
            paramDescription: "Represents the fee calculator for the specified transaction, including:",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "lamportsPerSignature",
                type: "integer",
                paramDescription: "The number of lamports required per signature in the transaction.",
              },
            ],
          },
          {
            paramName: "lastValidBlockHeight",
            type: "integer",
            paramDescription: "The last block height where the blockhash is valid.",
          },
          {
            paramName: "lastValidSlot",
            type: "integer",
            paramDescription: "The last valid slot for the specified transaction.",
          },
          ],
        },
        {
          paramName: "context",
          type: "object",
          childrenParamsType: "object",
          childrenParams: [
              {
                paramName: "apiVersion",
                type: "string",
                paramDescription: "The Solana RPC API version being used.",
              },
              {
                paramName: "slot",
                type: "integer",
                paramDescription: "The slot number corresponding to the fee calculator information.",
              },
          ],
        },
    ],
  },
];

const USE_CASES = [
  "Obtain current network fees for Solana transactions",
  "Compare transaction fees over different time periods",
  "Estimate transaction costs for budget planning",
];

const CONSTRAINTS = [
  "Data limited to current network fees",
  "API rate limits might apply to requests",
  "Potential delays in fetching fee information",
];
