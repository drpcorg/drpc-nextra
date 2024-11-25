import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_getrawtransaction(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="getrawtransaction"
      network="bitcoin"
      cu={30}
      description={"Retrieves the raw, hexadecimal-encoded data of a specific Bitcoin transaction using its transaction ID."}
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
    --data '{"method": "getrawtransaction", "params": ["10b54fd708ab2e5703979b4ba27ca0339882abc2062e77fbe51e625203a49642", 0]}'`,
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
    method: "getrawtransaction",
    params: ["10b54fd708ab2e5703979b4ba27ca0339882abc2062e77fbe51e625203a49642", 0]
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
    method: "getrawtransaction",
    params: ["10b54fd708ab2e5703979b4ba27ca0339882abc2062e77fbe51e625203a49642", 0]
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
		"method": "getrawtransaction",
		"params": []interface{}{"10b54fd708ab2e5703979b4ba27ca0339882abc2062e77fbe51e625203a49642", 0},
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
    "method": "getrawtransaction",
    "params": ["10b54fd708ab2e5703979b4ba27ca0339882abc2062e77fbe51e625203a49642", 0]
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
            "method": "getrawtransaction",
            "params": ["10b54fd708ab2e5703979b4ba27ca0339882abc2062e77fbe51e625203a49642", 0]
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
        "in_active_chain": true,
        "hex": "020000000001012c...<remaining raw transaction data>...",
        "txid": "10b54fd708ab2e5703979b4ba27ca0339882abc2062e77fbe51e625203a49642",
        "hash": "10b54fd708ab2e5703979b4ba27ca0339882abc2062e77fbe51e625203a49642",
        "size": 224,
        "vsize": 224,
        "weight": 896,
        "version": 2,
        "locktime": 0,
        "vin": [
            {
                "txid": "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
                "vout": 1,
                "scriptSig": {
                    "asm": "3045022100abcdef...<signature>...02200abcdef...<public key>...",
                    "hex": "483045022100abcdef...<signature>...02200abcdef...<public key>...",
                },
                "sequence": 4294967295,
                "txinwitness": [
                    "abcdefabcdef...<witness data>..."
                ]
            }
        ],
        "vout": [
            {
                "value": 0.015,
                "n": 0,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 abcdefabcdefabcdefabcdefabcdefabcdef OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914abcdefabcdefabcdefabcdefabcdef88ac",
                    "desc": "address",
                    "type": "pubkeyhash",
                    "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                }
            },
            {
                "value": 0.005,
                "n": 1,
                "scriptPubKey": {
                    "asm": "OP_HASH160 abcdefabcdefabcdefabcdefabcdefabcdef OP_EQUAL",
                    "hex": "a914abcdefabcdefabcdefabcdefabcdef87",
                    "desc": "address",
                    "type": "pubkeyhash",
                    "address": "1dice8EMZmqKvrGE4Qc9sPzT2vG4nJ2A7"
                }
            }
        ],
        "blockhash": "0000000000000000000abcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        "confirmations": 3,
        "blocktime": 1693527600,
        "time": 1693527600
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "txid",
    type: "string",
    paramDescription: "Required. The transaction ID."
  },
  {
    paramName: "verbose",
    type: "numeric",
    paramDescription: "Optional. A numeric parameter that can take one of the following values: '0' for hex-encoded data, '1' for JSON object, and '2' for JSON object with fee and prevout. Default is 0."
  },
  {
    paramName: "blockhash",
    type: "string",
    paramDescription: "Optional. The block in which to look for the transaction."
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
    paramName: "str",
    type: "string",
    paramDescription: "The serialized, hex-encoded data for 'txid'."
  },
  {
    paramName: "result",
    type: "object",
    paramDescription: "If verbose is set to true",
    childrenParamsType: "object",
    childrenParams: [
      {
    paramName: "in_active_chain",
    type: "boolean",
    paramDescription: "Whether the specified block is in the active chain (only present with explicit 'blockhash' argument)."
  },
  {
    paramName: "hex",
    type: "string",
    paramDescription: "The serialized, hex-encoded data for 'txid'."
  },
  {
    paramName: "txid",
    type: "string",
    paramDescription: "The transaction ID."
  },
  {
    paramName: "hash",
    type: "string",
    paramDescription: "The transaction hash (differs from txid for witness transactions)."
  },
  {
    paramName: "size",
    type: "numeric",
    paramDescription: "The transaction size."
  },
  {
    paramName: "vsize",
    type: "numeric",
    paramDescription: "The virtual transaction size (differs from the size for witness transactions)."
  },
  {
    paramName: "weight",
    type: "numeric",
    paramDescription: "The transaction's weight (between vsize*4 - 3 and vsize*4)."
  },
  {
    paramName: "version",
    type: "numeric",
    paramDescription: "The block version."
  },
  {
    paramName: "locktime",
    type: "numeric",
    paramDescription: "The transaction locktime."
  },
  {
    paramName: "vin",
    type: "array",
    paramDescription: "A JSON array. Each element serves as a transaction's input vector (vin).",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "txid",
        type: "string",
        paramDescription: "The transaction ID."
      },
      {
        paramName: "vout",
        type: "numeric",
        paramDescription: "The output number."
      },
      {
        paramName: "scriptSig",
        type: "object",
        paramDescription: "The script's signature.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "asm",
            type: "string",
            paramDescription: "The script's public key in the form of a string."
          },
          {
            paramName: "hex",
            type: "string",
            paramDescription: "The hex-encoded witness data."
          }
        ]
      },
      {
        paramName: "sequence",
        type: "numeric",
        paramDescription: "The sequence number of the script."
      },
      {
        paramName: "txinwitness",
        type: "array",
        paramDescription: "An array of JSON objects.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "hex",
            type: "string",
            paramDescription: "The hex-encoded witness data."
          }
        ]
      }
    ]
  },
  {
    paramName: "vout",
    type: "array",
    paramDescription: "A JSON array containing transaction output information.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "value",
        type: "string",
        paramDescription: "The value in BTC."
      },
      {
        paramName: "n",
        type: "numeric",
        paramDescription: "The output index."
      },
      {
        paramName: "scriptPubKey",
        type: "object",
        paramDescription: "A JSON object containing information about the PubKey script.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "asm",
            type: "string",
            paramDescription: "The script public key in the form of a string."
          },
          {
            paramName: "hex",
            type: "string",
            paramDescription: "The hex of the script's public key in string format."
          },
          {
            paramName: "desc",
            type: "string",
            paramDescription: "The inferred descriptor for the output."
          },
          {
            paramName: "type",
            type: "string",
            paramDescription: "The type of script, e.g., pubkeyhash, multisig."
          },
          {
            paramName: "address",
            type: "string",
            paramDescription: "The Bitcoin address."
          }
        ]
      }
    ]
  },
  {
    paramName: "blockhash",
    type: "string",
    paramDescription: "The block hash."
  },
  {
    paramName: "confirmations",
    type: "integer",
    paramDescription: "The number of confirmed transactions in the block."
  },
  {
    paramName: "blocktime",
    type: "integer",
    paramDescription: "The block time expressed in UNIX epoch time."
  },
  {
    paramName: "time",
    type: "integer",
    paramDescription: "Same as 'blocktime'."
  },
    ],
  },
];

const USE_CASES = [
  "Retrieve raw data of a Bitcoin transaction",
  "Analyze transaction details and inputs/outputs",
  "Audit specific Bitcoin transactions",
];

const CONSTRAINTS = [
  "Requires a valid transaction ID",
  "Only retrieves data for existing transactions",
  "Depends on node sync",
];

