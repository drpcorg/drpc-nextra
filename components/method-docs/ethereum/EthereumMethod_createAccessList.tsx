import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_createAccessList(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="eth_createAccessList"
      network="ethereum"
      cu={30}
      description={"Creates an EIP2930 access list from a Transaction object"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={""}
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL} \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_createAccessList",
  "params": [
    {
      "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x0",
      "gasPrice": "0x9184e72a000",
      "value": "0x0",
      "data": "0x"
    }
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const fetch = require('node-fetch');

const url = '${DRPC_ENDPOINT_URL}';
const headers = {
  'accept': 'application/json',
  'content-type': 'application/json'
};

const body = JSON.stringify({
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_createAccessList",
  "params": [
    {
      "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x0",
      "gasPrice": "0x9184e72a000",
      "value": "0x0",
      "data": "0x"
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

const options = {
  hostname: '${DRPC_ENDPOINT_URL}',
  path: '/v2/docs-demo',
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  }
};

const req = https.request(options, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});

req.on('error', error => {
  console.error('Error:', error);
});

const body = JSON.stringify({
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_createAccessList",
  "params": [
    {
      "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x0",
      "gasPrice": "0x9184e72a000",
      "value": "0x0",
      "data": "0x"
    }
  ]
});

req.write(body);
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
		"id":     1,
		"jsonrpc": "2.0",
		"method":  "eth_createAccessList",
		"params": []interface{}{
			map[string]interface{}{
				"to":       "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
				"gas":      "0x0",
				"gasPrice": "0x9184e72a000",
				"value":    "0x0",
				"data":     "0x",
			},
		},
	})

	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(requestBody))
	if err != nil {
		fmt.Println("Error:", err)
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
    'accept': 'application/json',
    'content-type': 'application/json'
}

data = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_createAccessList",
    "params": [
        {
            "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
            "gas": "0x0",
            "gasPrice": "0x9184e72a000",
            "value": "0x0",
            "data": "0x"
        }
    ]
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::header::{ACCEPT, CONTENT_TYPE};
use serde_json::json;
use tokio;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let url = "${DRPC_ENDPOINT_URL}";

    let request_body = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_createAccessList",
        "params": [
            {
                "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
                "gas": "0x0",
                "gasPrice": "0x9184e72a000",
                "value": "0x0",
                "data": "0x"
            }
        ]
    });

    let response = client.post(url)
        .header(ACCEPT, "application/json")
        .header(CONTENT_TYPE, "application/json")
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
  "id": 0,
  "jsonrpc": "string",
  "result": {
    "id": 1,
    "jsonrpc": "2.0",
    "result": "0x5b3c3f3f5cbf12c9c9d79b97c52b8f26a89e55e1"
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription: "(optional) Block number as an integer, or string",
    paramEnum: [
      {
        value: "latest",
        isDefault: true,
        description: "The most recent block in the blockchain (default).",
      },
      {
        value: "earliest",
        description: "The first block, also known as the genesis block.",
      },
      {
        value: "pending",
        description:
          "Transactions that have been broadcast but not yet included in a block.",
      },
    ],
  },
  {
    paramName: "transaction_detail_flag",
    type: "boolean",
    paramDescription:
      "When set to true, the method returns complete transaction objects. If false, it only returns the transaction hashes.",
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
    paramDescription:
      "A block object, or null if no block is found, contains the following fields:",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "accessList",
        type: "array_of_objects",
        paramDescription:
          "List of objects containing addresses and storage keys",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "address",
            type: "string",
            paramDescription: "The address accessed by the transaction.",
          },
          {
            paramName: "storageKeys",
            type: "string",
            paramDescription: "Storage keys utilized by the transaction.",
          },
        ],
      },
      {
        paramName: "gasUsed",
        type: "string",
        paramDescription:
          "The estimated gas consumed when the access list is included.",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve specific block details using block hash",
  "Verify block transactions and metadata by hash",
  "Analyze block data for blockchain consistency checks",
];

const CONSTRAINTS = [
  "Requires valid block hash input",
  "Node must be synchronized with blockchain",
  "Accurate hash essential for correct block details",
];
