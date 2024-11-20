import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_getblock(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="getblock"
      network="bitcoin"
      cu={30}
      description={"Retrieves detailed data about a specific block."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
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
    code: () => `curl \ ${DRPC_ENDPOINT_URL_BITCOIN} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  --data '{"method": "getblock", "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"]}'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_BITCOIN}\`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    method: "getblock",
    params: ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"]
  })
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

const url = \`${DRPC_ENDPOINT_URL_BITCOIN}\`;

axios.post(url, {
    method: "getblock",
    params: ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"]
}, {
    headers: {
        'Content-Type': 'application/json'
    }
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));`,
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
	url := "${DRPC_ENDPOINT_URL_BITCOIN}"

	data := map[string]interface{}{
		"method": "getblock",
		"params": []interface{}{"00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"},
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshalling JSON:", err)
		return
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
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

url = '${DRPC_ENDPOINT_URL_BITCOIN}'

data = {
    "method": "getblock",
    "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"]
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, json=data)
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
    let url = "${DRPC_ENDPOINT_URL_BITCOIN}";

    let client = Client::new();
    let res = client.post(url)
        .header("Content-Type", "application/json")
        .json(&json!({
            "method": "getblock",
            "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"]
        }))
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
        "hash": "00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09",
        "confirmations": 100,
        "size": 285,
        "height": 681543,
        "version": 2,
        "versionHex": "00000002",
        "merkleroot": "d5e4c4a0ab04c870d75dbb80afae3e56b9e2196744f5b3277d50f0067e65b920",
        "time": 1625569780,
        "mediantime": 1625569780,
        "nonce": 123456789,
        "bits": "17024d43",
        "difficulty": 1.234567,
        "tx": [
            "txid1",
            "txid2",
            "txid3"
        ],
        "previousblockhash": "00000000b0abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        "nextblockhash": "00000000d0abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "blockhash",
    type: "string",
    paramDescription: "Required. The hash of the block."
  },
  {
    paramName: "verbosity",
    type: "integer",
    paramDescription: "Optional. Default is 1. Use 0 for hex-encoded data, 1 for a JSON object, 2 for JSON object with transaction data, and 3 for JSON object with transaction data including prevout information for inputs."
  }
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
    paramDescription: "If verbosity = 0. A string that is serialized, hex-encoded data for block hash."
  },
  {
      paramName: "result",
      type: "string",
      paramDescription: "If verbosity = 1",
      childrenParamsType: "object",
      childrenParams: [
          {
    paramName: "hex",
    type: "string",
    paramDescription: "The block hash."
  },
  {
    paramName: "confirmations",
    type: "integer",
    paramDescription: "The number of confirmations, or -1 if the block is not on the main chain."
  },
  {
    paramName: "size",
    type: "numeric",
    paramDescription: "The size of the block."
  },
  {
    paramName: "strippedsize",
    type: "numeric",
    paramDescription: "The block size excluding witness data."
  },
  {
    paramName: "weight",
    type: "integer",
    paramDescription: "The block weight as defined in BIP 141."
  },
  {
    paramName: "height",
    type: "integer",
    paramDescription: "The block height or index."
  },
  {
    paramName: "version",
    type: "integer",
    paramDescription: "The block version."
  },
  {
    paramName: "versionHex",
    type: "string",
    paramDescription: "The block version formatted in hexadecimal."
  },
  {
    paramName: "merkleroot",
    type: "string",
    paramDescription: "The merkle root."
  },
  {
    paramName: "tx",
    type: "array",
    paramDescription: "An array with transaction IDs.",
    childrenParamsType: "string",
    childrenParams: [
      {
        paramName: "hex",
        type: "string",
        paramDescription: "The transaction ID."
      }
    ]
  },
  {
    paramName: "time",
    type: "numeric",
    paramDescription: "The block time expressed in UNIX epoch time."
  },
  {
    paramName: "mediantime",
    type: "numeric",
    paramDescription: "The median block time expressed in UNIX epoch time."
  },
  {
    paramName: "nonce",
    type: "numeric",
    paramDescription: "Number that miners adjust in order to find a block hash that meets the network's specified difficulty target."
  },
  {
    paramName: "bits",
    type: "string",
    paramDescription: "The value of the nBits field in the block header."
  },
  {
    paramName: "difficulty",
    type: "number",
    paramDescription: "The estimated amount of work done to find this block relative to the estimated amount of work done to find block 0."
  },
  {
    paramName: "chainwork",
    type: "string",
    paramDescription: "Expected number of hashes required to produce the current chain."
  },
  {
    paramName: "nTx",
    type: "integer",
    paramDescription: "The number of transactions in the block."
  },
  {
    paramName: "previousblockhash",
    type: "string",
    paramDescription: "The hash of the previous block."
  },
  {
    paramName: "nextblockhash",
    type: "string",
    paramDescription: "The hash of the next block."
  },
  {
    paramName: "error",
    type: "string",
    paramDescription: "The error message, if any."
  },
    ],
  },
  {
    paramName: "result",
    type: "array",
    paramDescription: "If verbosity = 2. An array with detailed transaction information.",
  }
];

const USE_CASES = [
  "Retrieve detailed data of a specific Bitcoin block",
  "Analyze transactions and metadata within a block",
  "Audit blockchain structure and block contents",
];

const CONSTRAINTS = [
  "Requires a valid block hash",
  "Only retrieves data for existing blocks",
  "Depends on node sync",
];




