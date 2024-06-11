import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getUncleByBlockNumberAndIndex() {
  return (
    <EthereumMethod
      method="eth_getUncleByBlockNumberAndIndex"
      network="ethereum"
      cu={15}
      description={
        "Returns information about an uncle of a block by number and uncle index position."
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
        "A block object with the following fields, or null when no block was found."
      }
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
  "params": [
    "0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
    "0x0"
  ],
  "method": "eth_getUncleByBlockHashAndIndex"
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  id: 1,
  jsonrpc: "2.0",
  params: [
    "0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
    "0x0"
  ],
  method: "eth_getUncleByBlockHashAndIndex"
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
  params: [
    "0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
    "0x0"
  ],
  method: "eth_getUncleByBlockHashAndIndex"
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
		"params": []interface{}{
			"0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
			"0x0",
		},
		"method": "eth_getUncleByBlockHashAndIndex",
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
    "params": [
        "0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
        "0x0"
    ],
    "method": "eth_getUncleByBlockHashAndIndex"
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
        "params": [
            "0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
            "0x0"
        ],
        "method": "eth_getUncleByBlockHashAndIndex"
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
  "result": null
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "array_of_strings",
    paramDescription: 'The block hash or the block tags.',
    paramEnum: [
      {
        value: "latest",
        isDefault: true,
        description: "the blockchain's most recent block",
      },
      {
        value: "safe",
        description: "a block validated by the beacon chain",
      },
      {
        value: "finalized",
        description: "a block confirmed by over two-thirds of validators",
      },
      {
        value: "earliest",
        description: "the first or genesis block",
      },
      {
        value: "pending",
        description: "transactions broadcasted but not yet included in a block",
      },
    ],
  },
  {
    paramName: "index",
    type: "string",
    paramDescription: ' The uncle\'\'s index position (in hex).'
  },
];

const RESPONSE_PARAMS: ResponseParam[] = [
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
      "A block object with the following fields, or null when no block was found.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "nonce",
        type: "string",
        paramDescription:
          "8 Bytes - hash of the generated proof-of-work, null when its pending block.",
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription:
          "32 Bytes - hash of the block, null when its pending block.",
      },
      {
        paramName: "baseFeePerGas",
        type: "string",
        paramDescription:
          "32 Bytes - hash of the block, null when its pending block.",
      },
      {
        paramName: "number",
        type: "string",
        paramDescription:
          "The block number, null when its pending block.",
      },
      {
        paramName: "parentHash",
        type: "string",
        paramDescription: "32 Bytes - hash of the parent block.",
      },
      {
        paramName: "sha3Uncles",
        type: "string",
        paramDescription:
          "32 Bytes - SHA3 of the uncles data in the block.",
      },
      {
        paramName: "logsBloom",
        type: "string",
        paramDescription:
          "256 Bytes - the bloom filter for the logs of the block, null when its pending block.",
      },
      {
        paramName: "transactionsRoot",
        type: "boolean",
        paramDescription:
          "32 Bytes - the root of the transaction trie of the block.",
      },
      {
        paramName: "stateRoot",
        type: "array_of_strings",
        paramDescription:
          "32 Bytes - the root of the final state trie of the block.",
      },
      {
        paramName: "receiptsRoot",
        type: "string",
        paramDescription:
          "32 Bytes - the root of the receipts trie of the block.",
      },
      {
        paramName: "miner",
        type: "string",
        paramDescription:
          "20 Bytes - the address of the beneficiary to whom the mining rewards were given.",
      },
      {
        paramName: "difficulty",
        type: "string",
        paramDescription:
          "Integer of the difficulty for this block.",
      },
      {
        paramName: "totalDifficulty",
        type: "string",
        paramDescription:
          "Integer of the total difficulty of the chain until this block.",
      },
      {
        paramName: "extraData",
        type: "string",
        paramDescription:
          "The \"extra data\" field of this block.",
      },
      {
        paramName: "size",
        type: "string",
        paramDescription:
          "Integer the size of this block in bytes.",
      },
      {
        paramName: "gasLimit",
        type: "string",
        paramDescription:
          "The maximum gas allowed in this block.",
      },
      {
        paramName: "timestamp",
        type: "string",
        paramDescription:
          "The unix timestamp for when the block was collated.",
      },
      {
        paramName: "transactions",
        type: "string",
        paramDescription:
          "Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.",
      },
      {
        paramName: "uncles",
        type: "string",
        paramDescription:
          "Array of uncle hashes.",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve specific uncle block by number and index",
  "Analyze uncle blocks to understand fork occurrences",
  "Validate uncle block data for blockchain consistency",
];

const CONSTRAINTS = [
  "Requires valid block number and index input",
  "Node must be fully synchronized with blockchain",
  "Depends on accurate block hash and index",
];
