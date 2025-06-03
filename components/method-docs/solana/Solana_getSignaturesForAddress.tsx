import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getSignaturesForAddress() {
  return (
    <SolanaMethod
      method="getSignaturesForAddress"
      network="solana"
      cu={20}
      description={"Retrieves confirmed signatures for transactions involving a specified address"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "A JSON object containing transaction details."
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
  -d $'
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getSignaturesForAddress",
      "params": ["Vote111111111111111111111111111111111111111",{"limit": 1}]
      }
  '
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getSignaturesForAddress",
  "params": ["Vote111111111111111111111111111111111111111", {"limit": 1}]
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
  "method": "getSignaturesForAddress",
  "params": ["Vote111111111111111111111111111111111111111", {"limit": 1}]
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
		"method":  "getSignaturesForAddress",
		"params":  []interface{}{"Vote111111111111111111111111111111111111111", map[string]interface{}{"limit": 1}},
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
    "method": "getSignaturesForAddress",
    "params": ["Vote111111111111111111111111111111111111111", {"limit": 1}]
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
        "method": "getSignaturesForAddress",
        "params": ["Vote111111111111111111111111111111111111111", {"limit": 1}]
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
      "signature": "3bY7Zr2WgtQz8dqRfZ9P3vHzS9wTx9uG23M1RH1KPzvDkt6ggQ5cjjyHT1JgD9HdEvFnUdN8C1LjR8FZbcHD7Cxh",
      "slot": 98123569,
      "err": null,
      "memo": null,
      "blockTime": 1635907302
    }
  ],
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "account_address",
    type: "string",
    paramDescription:
      "The account address encoded in base-58 format.",
  },
  {
    paramName: "config",
    type: "object",
    paramDescription:
      "Configuration options for the query, including:",
    childrenParamsType: "object",
    childrenParams: [
        {
          paramName: "limit",
          type: "integer",
          paramDescription:
            "Maximum number of transaction signatures to return, ranging from 1 to 1000. Defaults to 1000.",
        },
        {
          paramName: "before",
          type: "string",
          paramDescription:
            "Start searching backwards from this transaction signature. If not specified, the search begins from the latest confirmed block.",
        },
        {
          paramName: "until",
          type: "string",
          paramDescription:
            "Search until this transaction signature, if found before the limit is reached.",
        },
        {
          paramName: "commitment",
          type: "string",
          paramDescription:
            "Specifies the commitment level. Options are: finalized, confirmed, processed",
        },
        {
          paramName: "limit",
          type: "integer",
          paramDescription:
            "Maximum number of transaction signatures to return, ranging from 1 to 1000. Defaults to 1000.",
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
          paramName: "blockTime",
          type: "integer",
          paramDescription: "The estimated production time of the block as a Unix timestamp. Null if not available.",
        },
        {
          paramName: "confirmationStatus",
          type: "string",
          paramDescription: "The transaction's confirmation status in the cluster, which can be \"processed\", \"confirmed\", or \"finalized\".",
        },
        {
          paramName: "err",
          type: "object",
          paramDescription: "Error code if the transaction failed, or null if it succeeded.",
        },
        {
          paramName: "memo",
          type: "string",
          paramDescription: "The memo associated with the transaction, or null if no memo is present.",
        },
        {
          paramName: "signature",
          type: "string",
          paramDescription: "The transaction's signature, encoded in base58.",
        },
        {
          paramName: "slot",
          type: "integer",
          paramDescription: "The slot number where the transaction was confirmed.",
        },
    ],
  },
];

const USE_CASES = [
  "Fetch transaction signatures associated with a specific address",
  "Track transaction history for a particular Solana address",
  "Verify recent transactions for an account",
];

const CONSTRAINTS = [
  "Only includes transaction signatures for the specified address",
  "Requires current blockchain data for accuracy",
  "API rate limits may restrict access frequency",
];
