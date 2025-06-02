import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_gettxout(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="gettxout"
      network="bitcoin"
      cu={20}
      description={"Fetches details of an unspent transaction output."}
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
    --data '{"method": "gettxout", "params": ["txid", 1]}'`,
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
    method: "gettxout",
    params: ["txid", 1]
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
    method: "gettxout",
    params: ["txid", 1]
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
		"method": "gettxout",
		"params": []interface{}{"txid", 1},
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
    "method": "gettxout",
    "params": ["txid", 1]
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
            "method": "gettxout",
            "params": ["txid", 1]
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
    "id": "curltest",
    "result": {
        "bestblock": "0000000000000000000abcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        "confirmations": 5,
        "value": 0.1,
        "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 abcdefabcdefabcdefabcdefabcdefabcdef OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a914abcdefabcdefabcdefabcdefabcdef88ac",
            "type": "pubkeyhash",
            "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
        }
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
    paramName: "n",
    type: "numeric",
    paramDescription: "Required. The output index (vout number)."
  },
  {
    paramName: "include_mempool",
    type: "boolean",
    paramDescription: "Optional. Default is true. Whether to include the mempool."
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
        type: "object",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "bestblock",
            type: "string",
            paramDescription: "The block hash at the tip of the chain."
          },
          {
            paramName: "confirmations",
            type: "number",
            paramDescription: "The number of confirmations received for the transaction."
          },
          {
            paramName: "value",
            type: "number",
            paramDescription: "The transaction value in BTC."
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
                paramDescription: "The script public key in the form of string."
              },
              {
                paramName: "hex",
                type: "string",
                paramDescription: "The hexadecimal representation of the transaction."
              },
              {
                paramName: "reqSigs",
                type: "number",
                paramDescription: "Number of required signatures."
              },
              {
                paramName: "type",
                type: "string",
                paramDescription: "The type of script, e.g., pubkeyhash, multisig."
              },
              {
                paramName: "addresses",
                type: "array",
                paramDescription: "A JSON array of Bitcoin addresses.",
                childrenParamsType: "string",
                childrenParams: []
              }
            ]
          },
          {
            paramName: "coinbase",
            type: "boolean",
            paramDescription: "It is true if the transaction output belongs to a coinbase transaction, otherwise it's false for all other transactions."
          }
        ],
      },
    ];

const USE_CASES = [
  "Retrieve details of an unspent transaction output",
  "Analyze UTXO value and script details",
  "Audit specific outputs for transactions",
];

const CONSTRAINTS = [
  "Requires valid transaction ID and output index",
  "Only for unspent outputs",
  "Depends on node sync",
];

