import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
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
    "latest",
    "0x0"
  ],
  "method": "eth_getUncleByBlockNumberAndIndex"
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
  "params": [
    "latest",
    "0x0"
  ],
  "method": "eth_getUncleByBlockNumberAndIndex"
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
  "params": [
    "latest",
    "0x0"
  ],
  "method": "eth_getUncleByBlockNumberAndIndex"
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
		"params":  []interface{}{"latest", "0x0"},
		"method":  "eth_getUncleByBlockNumberAndIndex",
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
    "params": ["latest", "0x0"],
    "method": "eth_getUncleByBlockNumberAndIndex"
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
        "params": ["latest", "0x0"],
        "method": "eth_getUncleByBlockNumberAndIndex"
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
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "author": "0x8e5c6e6350d5799f45b564c3419d5d06d1a7de32",
    "difficulty": "0x2b1ae4d6e2df3",
    "extraData": "0x6d696e656420776974682067657468706f6f6c2e636f6d",
    "gasLimit": "0x7a1200",
    "gasUsed": "0x0",
    "hash": "0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b",
    "logsBloom": "0x0",
    "miner": "0x8e5c6e6350d5799f45b564c3419d5d06d1a7de32",
    "mixHash": "0x59daa4a1e74f051b4e009e1913af947a494dbb08c1761da00758cd287e6cd926",
    "nonce": "0x0000000000000000",
    "number": "0x1b4",
    "parentHash": "0x5e2d4c5a2c0c579db3ed23d6581e33e58603ecdb7e01ef94b1b1d1f392dd5ea9",
    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad0df6ddf4c2e648a1e4dbe849f3a0929",
    "size": "0x220",
    "stateRoot": "0xd7f8974fb5ac78d7a94f0b5121e357eebcc3a7b45b1e59f616b7f1e70b64c76d",
    "timestamp": "0x55ba467c",
    "totalDifficulty": "0x3b6b3e06244483",
    "transactions": [],
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "array_of_strings",
    paramDescription: "The block hash or the block tags.",
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
    paramDescription: " The uncle''s index position (in hex).",
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
        paramDescription: "The block number, null when its pending block.",
      },
      {
        paramName: "parentHash",
        type: "string",
        paramDescription: "32 Bytes - hash of the parent block.",
      },
      {
        paramName: "sha3Uncles",
        type: "string",
        paramDescription: "32 Bytes - SHA3 of the uncles data in the block.",
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
        paramDescription: "Integer of the difficulty for this block.",
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
        paramDescription: 'The "extra data" field of this block.',
      },
      {
        paramName: "size",
        type: "string",
        paramDescription: "Integer the size of this block in bytes.",
      },
      {
        paramName: "gasLimit",
        type: "string",
        paramDescription: "The maximum gas allowed in this block.",
      },
      {
        paramName: "timestamp",
        type: "string",
        paramDescription: "The unix timestamp for when the block was collated.",
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
        paramDescription: "Array of uncle hashes.",
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
