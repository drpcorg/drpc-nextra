import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getTransactionByBlockNumberAndIndex(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="eth_getTransactionByBlockNumberAndIndex"
      network="ethereum"
      cu={13}
      description={
        "Retrieves a specific transaction from a block by its number and index position"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_strings"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Detailed transaction object if found, or null if no transaction is found at the given index."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl ${DRPC_ENDPOINT_URL} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  --data '{"method":"eth_getTransactionByBlockNumberAndIndex","params":["0xc5043f", "0x0"],"id":1,"jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "eth_getTransactionByBlockNumberAndIndex",
  params: ["0xc5043f", "0x0"],
  id: 1
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
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
  jsonrpc: "2.0",
  method: "eth_getTransactionByBlockNumberAndIndex",
  params: ["0xc5043f", "0x0"],
  id: 1
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
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
		"jsonrpc": "2.0",
		"method":  "eth_getTransactionByBlockNumberAndIndex",
		"params":  []interface{}{"0xc5043f", "0x0"},
		"id":      1,
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
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByBlockNumberAndIndex",
    "params": ["0xc5043f", "0x0"],
    "id": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
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
        "jsonrpc": "2.0",
        "method": "eth_getTransactionByBlockNumberAndIndex",
        "params": ["0xc5043f", "0x0"],
        "id": 1
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
    paramName: "index",
    type: "string",
    paramDescription:
      "The index position of the transaction within the block, specified as an integer or a hexadecimal string.",
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
    type: "array_of_objects",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "blockHash",
        type: "string",
        paramDescription: "Hash of the block containing the transaction.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription: "Block number containing the transaction.",
      },
      {
        paramName: "transactionIndex",
        type: "string",
        paramDescription:
          "Position of the transaction in the block (null if pending)",
      },
      {
        paramName: "nonce",
        type: "string",
        paramDescription: "Number of prior transactions from the sender.",
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription: "32 Bytes - hash of the transaction.",
      },
      {
        paramName: "from",
        type: "string",
        paramDescription: "Transaction hash.",
      },
      {
        paramName: "gas",
        type: "string",
        paramDescription: "Gas provided by the sender.",
      },
      {
        paramName: "gasPrice",
        type: "string",
        paramDescription: "Gas price provided by the sender in wei.",
      },
      {
        paramName: "input",
        type: "string",
        paramDescription: "Data sent with the transaction.",
      },
      {
        paramName: "r",
        type: "string",
        paramDescription: "ECDSA signature r.",
      },
      {
        paramName: "s",
        type: "string",
        paramDescription: "ECDSA signature r.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription: "Receiver's address (null if contract creation).",
      },
      {
        paramName: "v",
        type: "string",
        paramDescription: "ECDSA recovery id.",
      },
      {
        paramName: "value",
        type: "string",
        paramDescription: "Value transferred in Wei.",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve transaction details by block number and index",
  "Verify transaction order within a specific block",
  "Audit transactions for a given block and index",
];

const CONSTRAINTS = [
  "Requires valid block number and index",
  "Node must be synchronized with the blockchain",
  "Accurate input parameters are necessary for results",
];
