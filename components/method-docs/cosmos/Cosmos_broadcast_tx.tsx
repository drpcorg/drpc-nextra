import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_broadcast_tx() {
  return (
    <CosmosMethod
      method="broadcast_tx"
      network="Cosmos"
      cu={10}
      description={"Retrieves how to broadcast transactions"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="string"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains the result of the transaction broadcast"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --location '${DRPC_ENDPOINT_URL}' \\
--header 'Content-Type: application/json' \\
--data '{
    "jsonrpc": "2.0",
    "method": "broadcast_tx",
    "params": ["YOUR_TRANSACTION"],
    "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "broadcast_tx",
  "params": ["YOUR_TRANSACTION"],
  "id": 1
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
  "method": "broadcast_tx",
  "params": ["YOUR_TRANSACTION"],
  "id": 1
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
		"method":  "broadcast_tx",
		"params":  []interface{}{"YOUR_TRANSACTION"},
		"id": 1,
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
    "method": "broadcast_tx",
    "params": ["YOUR_TRANSACTION"],
    "id": 1
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
        "method": "broadcast_tx",
        "params": ["YOUR_TRANSACTION"],
        "id": 1
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
    "code": 0,
    "data": "TX_HASH",
    "log": "Transaction successfully broadcasted",
    "hash": "TX_HASH"
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
      paramName: "tx",
      type: "string",
      paramDescription: "The encoded transaction to be broadcast. The transaction should be base64 encoded."
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
    type: "object",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "code",
        type: "integer",
        paramDescription: "The status code indicating the outcome of the transaction. A code of 0 typically means success."
      },
      {
        paramName: "data",
        type: "string",
        paramDescription: "The data associated with the transaction, often including relevant details or identifiers."
      },
      {
        paramName: "log",
        type: "string",
        paramDescription: "The log message providing details about the transaction's processing and outcome."
      },
      {
        paramName: "codespace",
        type: "string",
        paramDescription: "The codespace within which the status code is defined, indicating the module that generated the code."
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription: "The unique hash of the transaction, serving as an identifier for the broadcast transaction."
      },
      {
        paramName: "error",
        type: "object",
        paramDescription: "Details of the error, if any occurred during the transaction processing."
      },
    ],
  },
];

const USE_CASES = [
  "Broadcast signed transaction to the network",
  "Send transactions for inclusion in the blockchain",
  "Ensure transaction propagation across the network",
];

const CONSTRAINTS = [
  "Network congestion might delay transaction processing",
  "Broadcasted transactions are subject to validation",
  "Incorrectly formatted transactions may result in errors",
];
