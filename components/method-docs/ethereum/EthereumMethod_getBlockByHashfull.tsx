import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getBlockByHashfull(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="eth_getBlockByHash#full"
      network="ethereum"
      cu={60}
      description={
        "Fetches detailed information about a block using its hash, including all its transactions when transaction_detail_flag is set to true"
      }
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
  "method": "eth_getBlockByHash",
  "params": [
    "0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3",
    true
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "eth_getBlockByHash",
  params: ["0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3", true],
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
  method: "eth_getBlockByHash",
  params: ["0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3", true],
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
		"method":  "eth_getBlockByHash",
		"params":  []interface{}{"0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3", true},
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
    "method": "eth_getBlockByHash",
    "params": ["0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3", true],
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
        "method": "eth_getBlockByHash",
        "params": ["0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3", true],
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
  "result": {
    "difficulty": "0x4ea3f27bc",
    "extraData": "0x65746865726d696e652d6575312d32",
    "gasLimit": "0x47e7c4",
    "gasUsed": "0x6384",
    "hash": "0x5bad55fbd7e0f20eac95f45f55f997216de10aaf176314c236b0c3c93c5d1f17",
    "logsBloom": "0x0",
    "miner": "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5",
    "mixHash": "0x75b1f48901cf1d37ad43c2b29eafeb1f3ae5cf5c5d55b1b3be6b2be4a25d6ec6",
    "nonce": "0x539bd4979b50162d",
    "number": "0x1b4",
    "parentHash": "0x8e3d7ea52a14b9d773c37d67e2a4b8e6a12573c3d60a1cd1a58455d3008d1c9d",
    "receiptsRoot": "0xbcdfc35b86bedf72e283106f1f9a03c8d99a6de2b1cba6b01ff3e78e924e05c8",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad0d4e8eeb004cfe8dec7d1f3469a7f5f",
    "size": "0x220",
    "stateRoot": "0x7d00dcd0e0d14e6f7d9dc57116d0e5f76b0abdc716a1d7e6b4df87eae7795b7a",
    "timestamp": "0x55ba467c",
    "totalDifficulty": "0x78ed983323d",
    "transactions": [
      {
        "blockHash": "0x5bad55fbd7e0f20eac95f45f55f997216de10aaf176314c236b0c3c93c5d1f17",
        "blockNumber": "0x1b4",
        "from": "0x5cb2045c43d14a5f5e5f1ea60c5b02e0a93032cf",
        "gas": "0x7d3c",
        "gasPrice": "0xba43b7400",
        "hash": "0x1a85165ac88f73b7a290104f614cf08d8b4f3e193f41f209c3716d9c237139f5",
        "input": "0x",
        "nonce": "0x15",
        "to": "0x3535353535353535353535353535353535353535",
        "transactionIndex": "0x0",
        "value": "0x1bc16d674ec80000",
        "v": "0x1c",
        "r": "0x5e1d3a76fbf824220e68236e2d51cb98f349a5a6e4f43e3f471f5d0421d4aee2",
        "s": "0x5e1d3a76fbf824220e68236e2d51cb98f349a5a6e4f43e3f471f5d0421d4aee2"
      }
      // Additional transaction objects can be included here
    ],
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "hash",
    type: "string",
    paramDescription: "The 32-byte identifier of the block.",
  },
  {
    paramName: "transaction_detail_flag",
    type: "boolean",
    paramDescription:
      "When set to true, full transaction objects are returned; otherwise, only the transaction hashes are provided.",
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
    paramDescription: "Contains detailed information about the block if found.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "nonce",
        type: "string",
        paramDescription:
          "8-byte hash of the generated proof-of-work; null for pending blocks.",
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription: "32-byte block hash; null for pending blocks.",
      },
      {
        paramName: "baseFeePerGas",
        type: "string",
        paramDescription:
          "Base fee per gas in wei for the block, encoded in hexadecimal.",
      },
      {
        paramName: "number",
        type: "string",
        paramDescription: "Block number; null for pending blocks.",
      },
      {
        paramName: "parentHash",
        type: "string",
        paramDescription: "32-byte hash of the parent block.",
      },
      {
        paramName: "sha3Uncles",
        type: "string",
        paramDescription: "32-byte SHA3 hash of the uncles data.",
      },
      {
        paramName: "logsBloom",
        type: "string",
        paramDescription:
          "256-byte bloom filter for the block's logs; null for pending blocks.",
      },
      {
        paramName: "transactionsRoot",
        type: "string",
        paramDescription: "32-byte root of the transaction trie.",
      },
      {
        paramName: "stateRoot",
        type: "string",
        paramDescription: "32-byte root of the final state trie.",
      },
      {
        paramName: "receiptsRoot",
        type: "string",
        paramDescription: "32-byte root of the receipts trie.",
      },
      {
        paramName: "miner",
        type: "string",
        paramDescription: "20-byte address of the mining reward recipient.",
      },
      {
        paramName: "difficulty",
        type: "string",
        paramDescription: "Difficulty level of the block.",
      },
      {
        paramName: "totalDifficulty",
        type: "string",
        paramDescription: "Total difficulty of the chain up to this block.",
      },
      {
        paramName: "extraData",
        type: "string",
        paramDescription: "Extra data field of the block.",
      },
      {
        paramName: "size",
        type: "string",
        paramDescription: "Size of the block in bytes.",
      },
      {
        paramName: "gasLimit",
        type: "string",
        paramDescription: "Maximum gas allowed in the block.",
      },
      {
        paramName: "gasUsed",
        type: "string",
        paramDescription: "Total gas used by all transactions in the block.",
      },
      {
        paramName: "timestamp",
        type: "string",
        paramDescription: "Unix timestamp of the block creation.",
      },
      {
        paramName: "transactions",
        paramDescription: "Array of transaction objects",
        type: "array",
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
            paramDescription:
              "Block number containing this transaction; null for pending transactions.",
          },
          {
            paramName: "transactionIndex",
            type: "string",
            paramDescription:
              "Index position of the transaction in the block; null for pending transactions.",
          },
          {
            paramName: "nonce",
            type: "string",
            paramDescription: "Number of prior transactions from the sender.",
          },
          {
            paramName: "hash",
            type: "string",
            paramDescription: "2-byte transaction hash.",
          },
          {
            paramName: "from",
            type: "string",
            paramDescription: "20-byte address of the sender.",
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
            paramDescription: "ECDSA signature s.",
          },
          {
            paramName: "to",
            type: "string",
            paramDescription:
              "20-byte address of the receiver; null for contract creation transactions.",
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
      {
        paramName: "uncles",
        type: "array_of_strings",
        paramDescription: "List of uncle block hashes.",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve full block details using block hash",
  "Get transactions and metadata for a specific block",
  "Analyze block data for blockchain synchronization checks",
];

const CONSTRAINTS = [
  "Requires valid block hash as input parameter",
  "Full transaction data increases response size significantly",
  "Node must be fully synchronized with the blockchain",
];
