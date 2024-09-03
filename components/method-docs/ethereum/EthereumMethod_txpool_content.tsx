import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_txpool_content(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="txpool_content"
      network="ethereum"
      cu={1000}
      description={
        "Retrieves the contents of the transaction pool, including pending and queued transactions"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains details about the current state of the transaction pool"
      }
      {...props}
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
    "method": "txpool_content",
    "params": [],
    "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "txpool_content",
  "params": [],
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
  "method": "txpool_content",
  "params": [],
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
		"method":  "txpool_content",
		"params":  []interface{}{},
		"id": 1
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
    "method": "txpool_content",
    "params": [],
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
        "method": "txpool_content",
        "params": [],
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
  "id": 1,
  "result": {
    "pending": {
      "0x1234567890abcdef1234567890abcdef12345678": {
        "0x1": {
          "blockHash": null,
          "blockNumber": null,
          "from": "0x1234567890abcdef1234567890abcdef12345678",
          "gas": "0x5208",
          "gasPrice": "0x4a817c800",
          "hash": "0x9a1e1ab6e3d7852e8230b7b79b7e6bf4e108f6de7d3f4ebf88e5fd1c1e6fdd1f",
          "input": "0x",
          "nonce": "0x1",
          "to": "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
          "transactionIndex": null,
          "value": "0x0",
          "v": "0x1b",
          "r": "0x1f7dfd312e0e0d29e88c7cb2d979ec4b357118960f9a4d2c6eb9b637b0930c92",
          "s": "0x1cbb017447adff4b3e91820f0d8b1c2fd27ea154c7dbf4f3fffbf658c87f57e8"
        }
      }
    },
    "queued": {}
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = null;

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
        paramName: "pending",
        type: "object",
        paramDescription: "An object containing all pending transactions organized by sender address.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "address",
            type: "object",
            paramDescription: "An object containing all pending transactions for a specific sender address.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "nonce",
                type: "object",
                paramDescription: "An object representing a specific transaction by its nonce for this sender address.",
                childrenParamsType: "object",
                childrenParams: [
                  {
                    paramName: "blockHash",
                    type: "string",
                    paramDescription: "The hash of the block containing the transaction."
                  },
                  {
                    paramName: "blockNumber",
                    type: "string",
                    paramDescription: "The number of the block containing the transaction."
                  },
                  {
                    paramName: "from",
                    type: "string",
                    paramDescription: "The address of the sender."
                  },
                  {
                    paramName: "gas",
                    type: "string",
                    paramDescription: "The gas provided by the sender for the transaction."
                  },
                  {
                    paramName: "gasPrice",
                    type: "string",
                    paramDescription: "The gas price provided by the sender in Wei."
                  },
                  {
                    paramName: "hash",
                    type: "string",
                    paramDescription: "The hash of the transaction."
                  },
                  {
                    paramName: "input",
                    type: "string",
                    paramDescription: "The data sent along with the transaction."
                  },
                  {
                    paramName: "nonce",
                    type: "string",
                    paramDescription: "The number of transactions sent from the sender's address."
                  },
                  {
                    paramName: "to",
                    type: "string",
                    paramDescription: "The address of the receiver."
                  },
                  {
                    paramName: "transactionIndex",
                    type: "string",
                    paramDescription: "The index position of the transaction in the block."
                  },
                  {
                    paramName: "value",
                    type: "string",
                    paramDescription: "The value of the transaction in Wei."
                  },
                  {
                    paramName: "v",
                    type: "string",
                    paramDescription: "The V component of the signature."
                  },
                  {
                    paramName: "r",
                    type: "string",
                    paramDescription: "The R component of the signature."
                  },
                  {
                    paramName: "s",
                    type: "string",
                    paramDescription: "The S component of the signature."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        paramName: "queued",
        type: "object",
        paramDescription: "An object containing all queued transactions organized by sender address.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "address",
            type: "object",
            paramDescription: "An object containing all queued transactions for a specific sender address.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "nonce",
                type: "object",
                paramDescription: "An object representing a specific transaction by its nonce for this sender address.",
                childrenParamsType: "object",
                childrenParams: [
                  {
                    paramName: "blockHash",
                    type: "string",
                    paramDescription: "The hash of the block containing the transaction."
                  },
                  {
                    paramName: "blockNumber",
                    type: "string",
                    paramDescription: "The number of the block containing the transaction."
                  },
                  {
                    paramName: "from",
                    type: "string",
                    paramDescription: "The address of the sender."
                  },
                  {
                    paramName: "gas",
                    type: "string",
                    paramDescription: "The gas provided by the sender for the transaction."
                  },
                  {
                    paramName: "gasPrice",
                    type: "string",
                    paramDescription: "The gas price provided by the sender in Wei."
                  },
                  {
                    paramName: "hash",
                    type: "string",
                    paramDescription: "The hash of the transaction."
                  },
                  {
                    paramName: "input",
                    type: "string",
                    paramDescription: "The data sent along with the transaction."
                  },
                  {
                    paramName: "nonce",
                    type: "string",
                    paramDescription: "The number of transactions sent from the sender's address."
                  },
                  {
                    paramName: "to",
                    type: "string",
                    paramDescription: "The address of the receiver."
                  },
                  {
                    paramName: "transactionIndex",
                    type: "string",
                    paramDescription: "The index position of the transaction in the block."
                  },
                  {
                    paramName: "value",
                    type: "string",
                    paramDescription: "The value of the transaction in Wei."
                  },
                  {
                    paramName: "v",
                    type: "string",
                    paramDescription: "The V component of the signature."
                  },
                  {
                    paramName: "r",
                    type: "string",
                    paramDescription: "The R component of the signature."
                  },
                  {
                    paramName: "s",
                    type: "string",
                    paramDescription: "The S component of the signature."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve details of pending transactions in the txpool",
  "Monitor transaction pool for unconfirmed transactions",
  "Analyze transaction data before blockchain confirmation",
];

const CONSTRAINTS = [
  "Transaction pool size may be large",
  "Pending transactions may be evicted or replaced",
  "Real-time updates require frequent polling",
];