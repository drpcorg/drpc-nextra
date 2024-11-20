import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_listunspent(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="listunspent"
      network="bitcoin"
      cu={30}
      description={"Lists unspent transaction outputs for addresses."}
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
    code: () => `curl  -X POST \\
 --url '\ ${DRPC_ENDPOINT_URL_BITCOIN}' \\
 --header 'Content-Type: application/json' \\
 --data '{"jsonrpc": "1.0", "id": "curltest", "method": "listunspent", "params": [6, 9999999, [] , true, { "minimumAmount": 0.005 } ]}'`,
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
    jsonrpc: "1.0",
    id: "curltest",
    method: "listunspent",
    params: [6, 9999999, [], true, { "minimumAmount": 0.005 }]
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
    jsonrpc: "1.0",
    id: "curltest",
    method: "listunspent",
    params: [6, 9999999, [], true, { "minimumAmount": 0.005 }]
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
		"jsonrpc": "1.0",
		"id":      "curltest",
		"method":  "listunspent",
		"params":  []interface{}{6, 9999999, []interface{}{}, true, map[string]interface{}{"minimumAmount": 0.005}},
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
    "jsonrpc": "1.0",
    "id": "curltest",
    "method": "listunspent",
    "params": [6, 9999999, [], True, { "minimumAmount": 0.005 }]
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
            "jsonrpc": "1.0",
            "id": "curltest",
            "method": "listunspent",
            "params": [6, 9999999, [], true, { "minimumAmount": 0.005 }]
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
    "jsonrpc": "1.0",
    "id": "curltest",
    "result": [
        {
            "txid": "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "vout": 0,
            "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
            "amount": 0.01,
            "confirmations": 10,
            "scriptPubKey": "76a914abcdefabcdefabcdefabcdefabcdef88ac"
        },
        {
            "txid": "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "vout": 1,
            "address": "1dice8EMZmqKvrGE4Qc9sPzT2vG4nJ2A7",
            "amount": 0.005,
            "confirmations": 15,
            "scriptPubKey": "76a9141234567890abcdefabcdefabcdef88ac"
        }
    ]
}

`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "minconf",
    type: "numeric",
    paramDescription: "Optional. Default is 1. The minimum confirmations to filter."
  },
  {
    paramName: "maxconf",
    type: "numeric",
    paramDescription: "Optional. Default is 9999999. The maximum confirmations to filter."
  },
  {
    paramName: "addresses",
    type: "array",
    paramDescription: "Optional. Default is an empty array. The Bitcoin addresses to filter.",
  },
  {
    paramName: "include_unsafe",
    type: "boolean",
    paramDescription: "Optional. Default is true. Include outputs that are not safe to spend."
  },
  {
    paramName: "query_options",
    type: "object",
    paramDescription: "Optional. JSON object with query options.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "minimumAmount",
        type: "numeric",
        paramDescription: "Optional. Default is 0. Minimum value of each UTXO in BTC."
      },
      {
        paramName: "maximumAmount",
        type: "numeric",
        paramDescription: "Optional. Default is unlimited. Maximum value of each UTXO in BTC."
      },
      {
        paramName: "maximumCount",
        type: "numeric",
        paramDescription: "Optional. Default is unlimited. Maximum number of UTXOs."
      },
      {
        paramName: "minimumSumAmount",
        type: "numeric",
        paramDescription: "Optional. Default is unlimited. Minimum sum value of all UTXOs in BTC."
      }
    ]
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
        paramName: "outputs",
        type: "array",
        paramDescription: "A JSON array of transaction outputs.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "txid",
            type: "string",
            paramDescription: "The transaction ID."
          },
          {
            paramName: "vout",
            type: "number",
            paramDescription: "The vout value."
          },
          {
            paramName: "address",
            type: "string",
            paramDescription: "The Bitcoin address."
          },
          {
            paramName: "label",
            type: "string",
            paramDescription: "The associated label, or an empty string for the default label."
          },
          {
            paramName: "scriptPubKey",
            type: "string",
            paramDescription: "The script key."
          },
          {
            paramName: "amount",
            type: "number",
            paramDescription: "The transaction output amount in BTC."
          },
          {
            paramName: "confirmations",
            type: "number",
            paramDescription: "The number of confirmations."
          },
          {
            paramName: "redeemScript",
            type: "string",
            paramDescription: "The redeemScript if scriptPubKey is P2SH."
          },
          {
            paramName: "witnessScript",
            type: "string",
            paramDescription: "The witnessScript if the scriptPubKey is P2WSH or P2SH-P2WSH."
          },
          {
            paramName: "spendable",
            type: "boolean",
            paramDescription: "Whether we have the private keys to spend this output."
          },
          {
            paramName: "solvable",
            type: "boolean",
            paramDescription: "Whether we know how to spend this output, ignoring the lack of keys."
          },
          {
            paramName: "reused",
            type: "boolean",
            paramDescription: "Whether this output is reused/dirty (only present if avoid_reuse is set)."
          },
          {
            paramName: "desc",
            type: "string",
            paramDescription: "A descriptor for spending this output (only when solvable)."
          },
          {
            paramName: "safe",
            type: "boolean",
            paramDescription: "Whether this output is considered safe to spend. Unconfirmed transactions from outside keys and unconfirmed replacement transactions are considered unsafe."
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "List unspent transaction outputs (UTXOs) in a wallet",
  "Analyze available funds for spending",
  "Audit wallet UTXO details",
];

const CONSTRAINTS = [
  "Requires a synced wallet",
  "Only lists UTXOs for the specified addresses",
  "Depends on node sync",
];



