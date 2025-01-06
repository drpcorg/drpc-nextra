import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getFilterChanges(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="eth_getFilterChanges"
      network="ethereum"
      cu={20}
      description={
        "Retrieves the changes (logs or transaction hashes) for a filter created with eth_newFilter or eth_newBlockFilter"
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
        "The array of log objects or transaction hashes that represent the changes detected by the filter. "
      }
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
  "params": [
    "0x1"
  ],
  "method": "eth_getFilterChanges"
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  id: 1,
  jsonrpc: "2.0",
  method: "eth_getFilterChanges",
  params: ["0x1"]
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
  method: "eth_getFilterChanges",
  params: ["0x1"]
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
		"method":  "eth_getFilterChanges",
		"params":  []interface{}{"0x1"},
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
    "method": "eth_getFilterChanges",
    "params": ["0x1"]
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
        "method": "eth_getFilterChanges",
        "params": ["0x1"]
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
  "result": [
    {
      "address": "0x79c912fef520be002c2b6e57ec4324e260f38e50",
      "topics": [
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
        "0x000000000000000000000000b94cb72c9b6282b78107a7c8a5eb74de08177935",
        "0x0000000000000000000000009c12939390052919af3155f41bf4160fd3666a6f"
      ],
      "data": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      "blockNumber": "0x45cb8ed",
      "transactionHash": "0xa850e378548efda5217e6853fd56cded533d1a61377838abc4ddcc2b13d0acde",
      "transactionIndex": "0x0",
      "blockHash": "0x60d83df96893805e81eca600a67570cea16481dee40d5e9b210eac215352b714",
      "logIndex": "0x0",
      "removed": false
    }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "filterID",
    type: "string",
    paramDescription: "The ID of the filter for which to retrieve changes.",
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
    paramDescription:
      "The content of this array depends on the type of filter created.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "blockHash",
        type: "string",
        paramDescription:
          "32-byte hash of the block containing the log, or null if pending.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription:
          "Block number containing the log, or null if pending.",
      },
      {
        paramName: "transactionIndex",
        type: "string",
        paramDescription:
          "Index position of the transaction that generated the log, or null if pending.",
      },
      {
        paramName: "address",
        type: "string",
        paramDescription: "20-byte address from which the log originated.",
      },
      {
        paramName: "logIndex",
        type: "string",
        paramDescription:
          "Index position of the log in the block, or null if pending.",
      },
      {
        paramName: "data",
        type: "string",
        paramDescription:
          "Non-indexed arguments of the log, in 32-byte segments.",
      },
      {
        paramName: "removed",
        type: "boolean",
        paramDescription:
          "Indicates if the log was removed due to a chain reorganization (true) or is valid (false).",
      },
      {
        paramName: "topics",
        type: "array_of_strings",
        paramDescription:
          "Array of zero to four 32-byte data strings of indexed log arguments.",
      },
      {
        paramName: "transactionHash",
        type: "string",
        paramDescription:
          "Hash of the transaction that generated the log, or null if pending.",
      },
      {
        paramName: "logsBloom",
        type: "string",
        paramDescription:
          "256-byte bloom filter for quick log retrieval by light clients.",
      },
      {
        paramName: "status",
        type: "integer",
        paramDescription:
          "Status of the transaction: 1 for success, 0 for failure.",
      },
      {
        paramName: "effectiveGasPrice",
        paramDescription: "The effective gas price for the transaction.",
        type: "string",
      },
      {
        paramName: "type",
        paramDescription: "Type of the transaction.",
        type: "string",
      },
    ],
  },
];

const USE_CASES = [
  "Check for updates on created filter logs",
  "Monitor changes in blockchain events with filter",
  "Track specific contract events for real-time updates",
];

const CONSTRAINTS = [
  "Available only on paid tier",
  "Node must support filter change queries",
  "Accurate filter ID essential for relevant updates",
];
