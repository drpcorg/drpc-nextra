import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_sendTransaction() {
  return (
    <SolanaMethod
      method="sendTransaction"
      network="solana"
      cu={10}
      description={"The method in Solana allows developers to send a signed transaction to the network"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        ""
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
  --data '{"method":"sendTransaction","params":["ENTER_ENCODED_TRANSACTION_ID"],"id":1,"jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "method": "sendTransaction",
  "params": ["ENTER_ENCODED_TRANSACTION_ID"],
  "id": 1,
  "jsonrpc": "2.0"
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
  "method": "sendTransaction",
  "params": ["ENTER_ENCODED_TRANSACTION_ID"],
  "id": 1,
  "jsonrpc": "2.0"
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
		"method": "sendTransaction",
		"params": []interface{}{"ENTER_ENCODED_TRANSACTION_ID"},
		"id":     1,
		"jsonrpc": "2.0",
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
    "method": "sendTransaction",
    "params": ["ENTER_ENCODED_TRANSACTION_ID"],
    "id": 1,
    "jsonrpc": "2.0"
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
        "method": "sendTransaction",
        "params": ["ENTER_ENCODED_TRANSACTION_ID"],
        "id": 1,
        "jsonrpc": "2.0"
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
  "result": "5uYdsS7m7pD1w1CVq8RCbVQJ1Ff1ECUdvys3Y6aM4RTKZ7aQRQ7Eg2Bz8K9j2s3d8N2FkZ2MfZn5a1X7CxZ1",
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transaction",
    type: "string",
    paramDescription: "The transaction data encoded as a string. For more information on submitting signed transactions, visit the provided link.",
    childrenParams: [
      {
        paramName: "skipPreflight",
        type: "boolean",
        paramDescription: "(Default: false) If true, skips preflight transaction checks."
      },
      {
        paramName: "preflightCommitment",
        type: "string",
        paramDescription: "(Default: finalized) The commitment level used for preflight."
      },
      {
        paramName: "encoding",
        type: "string",
        paramDescription: "The format for encoding account data, which can be one of: base58 (slow), base64, base64+zstd, or jsonParsed."
      },
      {
        paramName: "maxRetries",
        type: "uint64",
        paramDescription: "Maximum retries for the RPC node to send the transaction to the leader. If not provided, retries continue until the transaction is finalized or the blockhash expires."
      },
      {
        paramName: "minContextSlot",
        type: "integer",
        paramDescription: "The minimum slot for evaluating the request."
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
  "Send transactions on the Solana network efficiently",
  "Facilitate token transfers between Solana accounts",
  "Execute smart contract calls through transactions",
];

const CONSTRAINTS = [
  "Requires sufficient SOL balance for transaction fees",
  "Dependent on network congestion and performance",
  "API rate limits may impact transaction throughput",
];
