import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_gettransaction(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="gettransaction"
      network="bitcoin"
      cu={20}
      description={"Provides detailed information about a specific transaction."}
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
    code: () => `curl --request POST \\
     --url '\ ${DRPC_ENDPOINT_URL_BITCOIN}' \\
     --header 'Content-Type: application/json' \\
     --data '{"jsonrpc": "1.0", "id": "curltest", "method": "gettransaction", "params": ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"]}'`,
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
    method: "gettransaction",
    params: ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"]
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
    method: "gettransaction",
    params: ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"]
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
		"method":  "gettransaction",
		"params":  []interface{}{"1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"},
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
    "method": "gettransaction",
    "params": ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"]
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
            "method": "gettransaction",
            "params": ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"]
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
    "result": {
        "in_active_chain": true,
        "hex": "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
        "txid": "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
        "hash": "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
        "size": 250,
        "vsize": 250,
        "weight": 1000,
        "version": 2,
        "locktime": 0,
        "vin": [ /* inputs */ ],
        "vout": [ /* outputs */ ],
        "blockhash": "00000000abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        "confirmations": 5,
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
    paramName: "include_watchonly",
    type: "boolean",
    paramDescription: "Optional. Default is true for watch-only wallets, otherwise false. Whether to include watch-only addresses in balance calculation and details."
  },
  {
    paramName: "verbose",
    type: "boolean",
    paramDescription: "Optional. Default is false. Whether to include a decoded field containing the decoded transaction (equivalent to RPC decoderawtransaction)."
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
    paramName: "amount",
    type: "number",
    paramDescription: "The amount in BTC."
  },
  {
    paramName: "fee",
    type: "number",
    paramDescription: "The amount of the fee in BTC. This is negative and only available for the 'send' category of transactions."
  },
  {
    paramName: "confirmations",
    type: "number",
    paramDescription: "The number of confirmations for the transaction. Negative confirmations means the transaction conflicted that many blocks ago."
  },
  {
    paramName: "generated",
    type: "boolean",
    paramDescription: "Only present if the transaction only input is a coinbase one."
  },
  {
    paramName: "trusted",
    type: "boolean",
    paramDescription: "Only present if we consider the transaction to be trusted and safe to spend from."
  },
  {
    paramName: "blockhash",
    type: "string",
    paramDescription: "The block hash containing the transaction."
  },
  {
    paramName: "blockheight",
    type: "number",
    paramDescription: "The block height containing the transaction."
  },
  {
    paramName: "blockindex",
    type: "number",
    paramDescription: "The index of the transaction in the block that includes it."
  },
  {
    paramName: "blocktime",
    type: "number",
    paramDescription: "The block time expressed in UNIX epoch time."
  },
  {
    paramName: "txid",
    type: "string",
    paramDescription: "The transaction ID."
  },
  {
    paramName: "walletconflicts",
    type: "array",
    paramDescription: "Conflicting transaction IDs.",
  },
  {
    paramName: "time",
    type: "number",
    paramDescription: "The transaction time expressed in UNIX epoch time."
  },
  {
    paramName: "timereceived",
    type: "number",
    paramDescription: "The time received expressed in UNIX epoch time."
  },
  {
    paramName: "comment",
    type: "string",
    paramDescription: "If a comment is associated with the transaction, only present if not empty."
  },
  {
    paramName: "bip125-replaceable",
    type: "string",
    paramDescription: "Whether this transaction could be replaced due to BIP125 (replace-by-fee); may be unknown for unconfirmed transactions not in the mempool."
  },
  {
    paramName: "details",
    type: "array",
    paramDescription: "An array of detailed information about the transaction.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "involvesWatchonly",
        type: "boolean",
        paramDescription: "Only returns true if imported addresses were involved in the transaction."
      },
      {
        paramName: "address",
        type: "string",
        paramDescription: "The Bitcoin address involved in the transaction."
      },
      {
        paramName: "category",
        type: "string",
        paramDescription: "The transaction category. Possible values: 'send', 'receive', 'generate', 'immature', 'orphan'."
      },
      {
        paramName: "amount",
        type: "number",
        paramDescription: "The amount in BTC."
      },
      {
        paramName: "label",
        type: "string",
        paramDescription: "A comment for the address/transaction, if any."
      },
      {
        paramName: "vout",
        type: "number",
        paramDescription: "The output index."
      },
      {
        paramName: "fee",
        type: "number",
        paramDescription: "The amount of the fee in BTC. This is negative and only available for the 'send' category of transactions."
      },
      {
        paramName: "abandoned",
        type: "boolean",
        paramDescription: "'true' if the transaction has been abandoned (inputs are respendable). Only available for the 'send' category of transactions."
      }
    ]
  },
  {
    paramName: "hex",
    type: "string",
    paramDescription: "Raw data for the transaction."
  },
  {
    paramName: "decoded",
    type: "object",
    paramDescription: "Optional, the decoded transaction (only present when `verbose` is passed). Equivalent to the RPC decoderawtransaction method, or the RPC getrawtransaction method when `verbose` is passed."
  }
    ],
  },
];

const USE_CASES = [
  "Retrieve details of a specific Bitcoin transaction",
  "Analyze transaction inputs, outputs, and confirmations",
  "Audit wallet transaction history",
];

const CONSTRAINTS = [
  "Requires a valid transaction ID",
  "Only supports wallet transactions",
  "Depends on node sync",
];


