import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_call() {
  return (
    <EthereumMethod
      method="eth_call"
      network="ethereum"
      cu={21}
      description={
          "Performs a message call instantly without recording it as a transaction on the blockchain"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_objects"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={"The result of the call."}
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
  "method": "eth_call",
  "params": [
    "0x61A80",
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
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  id: 1,
  jsonrpc: "2.0",
  method: "eth_call",
  params: [
    "0x61A80",
    {
      to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      gas: "0x0",
      gasPrice: "0x9184e72a000",
      value: "0x0",
      data: "0x"
    }
  ]
};

fetch(url, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const fetch = require('node-fetch');

const url = '${DRPC_ENDPOINT_URL}';

const data = {
  id: 1,
  jsonrpc: "2.0",
  method: "eth_call",
  params: [
    "0x61A80",
    {
      to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      gas: "0x0",
      gasPrice: "0x9184e72a000",
      value: "0x0",
      data: "0x"
    }
  ]
};

fetch(url, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));
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

	data := map[string]interface{}{
		"id":      1,
		"jsonrpc": "2.0",
		"method":  "eth_call",
		"params": []interface{}{
			"0x61A80",
			map[string]interface{}{
				"to":       "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
				"gas":      "0x0",
				"gasPrice": "0x9184e72a000",
				"value":    "0x0",
				"data":     "0x",
			},
		},
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshaling JSON:", err)
		return
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
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

data = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_call",
    "params": [
        "0x61A80",
        {
            "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
            "gas": "0x0",
            "gasPrice": "0x9184e72a000",
            "value": "0x0",
            "data": "0x"
        }
    ]
}

response = requests.post(url, headers={'accept': 'application/json', 'content-type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "${DRPC_ENDPOINT_URL}";

    let data = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_call",
        "params": [
            "0x61A80",
            {
                "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
                "gas": "0x0",
                "gasPrice": "0x9184e72a000",
                "value": "0x0",
                "data": "0x"
            }
        ]
    });

    let client = Client::new();
    let res = client.post(url)
        .json(&data)
        .send()
        .await?
        .json::<serde_json::Value>()
        .await?;

    println!("{:#?}", res);

    Ok(())
}
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xb1770efb14906e509893b6190359658208ae64d0c56e22f748a1b0869885559e"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transaction",
    type: "object",
    paramDescription:
      "The transaction call object which contains the following fields.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "from",
        type: "string",
        paramDescription: "(optional) Sender's address.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription: "Recipient's address.",
      },
      {
        paramName: "gas",
        type: "integer",
        paramDescription:
          "(optional) Gas limit for the transaction.",
      },
      {
        paramName: "gasPrice",
        type: "integer",
        paramDescription:
          "(optional) Gas price in wei.",
      },
      {
        paramName: "value",
        type: "integer",
        paramDescription:
          "(optional) Amount of wei to send.",
      },
      {
        paramName: "data",
        type: "string",
        paramDescription:
          "(optional) Encoded method signature and parameters.",
      },
    ],
  },
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
        description: "Transactions that have been broadcast but not yet included in a block.",
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
  },
];

const USE_CASES = [
  "Simulate contract function execution without blockchain state change",
  "Retrieve return values from smart contract functions",
  "Estimate gas usage for contract function calls",
];

const CONSTRAINTS = [
  "Starting from Geth 1.9.13, eth_call checks the sender's " +
    " " +
    "balance to ensure sufficient gas for execution if either:" +
    " " +
    "The gas_price parameter is populated," +
    " " +
    "the contract function modifies the blockchain state.",
  "In these cases, the from address must have enough gas as if" +
    "executing a write transaction, even though eth_call itself doesn't consume gas.",
];
