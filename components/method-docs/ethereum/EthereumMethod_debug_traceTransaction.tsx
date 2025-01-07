import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_debug_traceTransaction(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="debug_traceTransaction"
      network="ethereum"
      cu={90}
      description={
        "Traces the execution of a given transaction, providing detailed information about its internal operations for debugging purposes"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={"Array of block traces."}
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
--data '{"method":"debug_traceTransaction","params":["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", {"tracer": "callTracer"}], "id":1,"jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "debug_traceTransaction",
  params: ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { tracer: "callTracer" }],
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
  method: "debug_traceTransaction",
  params: ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { tracer: "callTracer" }],
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
		"method":  "debug_traceTransaction",
		"params":  []interface{}{"0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", map[string]string{"tracer": "callTracer"}},
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
    "method": "debug_traceTransaction",
    "params": ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { "tracer": "callTracer" }],
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
        "method": "debug_traceTransaction",
        "params": ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { "tracer": "callTracer" }],
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
  "result": [
    {
      "action": {
        "callType": "call",
        "from": "0x83806d539d4ea1c140489a06660319c9a303f874",
        "gas": "0x1a1f8",
        "input": "0x",
        "to": "0x1c39ba39e4735cb65978d4db400ddd70a72dc750",
        "value": "0x7a16c911b4d00000"
      },
      "blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
      "blockNumber": 3068185,
      "result": {
        "gasUsed": "0x2982",
        "output": "0x"
      },
      "subtraces": 2,
      "traceAddress": [],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 2,
      "type": "call"
    },
    {
      "action": {
        "callType": "call",
        "from": "0x1c39ba39e4735cb65978d4db400ddd70a72dc750",
        "gas": "0x13e99",
        "input": "0x16c72721",
        "to": "0x2bd2326c993dfaef84f696526064ff22eba5b362",
        "value": "0x0"
      },
      "blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
      "blockNumber": 3068185,
      "result": {
        "gasUsed": "0x183",
        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
      },
      "subtraces": 0,
      "traceAddress": [
        0
      ],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 2,
      "type": "call"
    },
    {
      "action": {
        "callType": "call",
        "from": "0x1c39ba39e4735cb65978d4db400ddd70a72dc750",
        "gas": "0x8fc",
        "input": "0x",
        "to": "0x70faa28a6b8d6829a4b1e649d26ec9a2a39ba413",
        "value": "0x7a16c911b4d00000"
      },
      "blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
      "blockNumber": 3068185,
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [
        1
      ],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 2,
      "type": "call"
    }
  ],
  "id": 0
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription: "Specifies the block number to locate the transaction.",
  },
  {
    paramName: "tracer",
    type: "object",
    paramDescription: "Supports callTracer and prestateTracer.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "tracer",
        type: "string",
        paramDescription: "Default value is callTracer.",
      },
      {
        paramName: "tracerConfig",
        type: "object",
        childrenParamsType: "boolean",
        childrenParams: [
          {
            paramName: "onlyTopCall",
            type: "boolean",
          },
        ],
      },
      {
        paramName: "timeout",
        type: "string",
        paramDescription:
          'Specifies a custom timeout for JavaScript-based tracing calls. Default is 5 seconds, maximum is 10 seconds. Valid units are "ns", "us", "ms", "s", with optional fractions, e.g., "200ms".',
      },
    ],
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
      "Detailed trace data for the specified transaction, including call stack, gas usage, and execution results.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "callTracer",
        type: "object",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "from",
            type: "string",
            paramDescription: "Sender's address.",
          },
          {
            paramName: "to",
            type: "string",
            paramDescription: "Receiver's address.",
          },
          {
            paramName: "value",
            type: "string",
            paramDescription: "Amount transferred in wei.",
          },
          {
            paramName: "gas",
            type: "string",
            paramDescription: "Gas allocated for the call.",
          },
          {
            paramName: "input",
            type: "string",
            paramDescription: "Data sent with the call.",
          },

          {
            paramName: "gasUsed",
            type: "string",
            paramDescription: "Gas consumed by the trace.",
          },
          {
            paramName: "output",
            type: "string",
            paramDescription: "Result of the call.",
          },
          {
            paramName: "error",
            type: "string",
            paramDescription: "Any error encountered.",
          },
          {
            paramName: "revertReason",
            type: "string",
            paramDescription: "Solidity revert reason, if any.",
          },
          {
            paramName: "calls",
            type: "array",
            paramDescription: "list of sub-calls",
          },
        ],
      },
      {
        paramName: "prestateTracer",
        type: "object",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "balance",
            type: "string",
            paramDescription: "Account balance in wei.",
          },
          {
            paramName: "nonce",
            type: "uint64",
            paramDescription: "The transaction count for the account.",
          },
          {
            paramName: "code",
            type: "string",
            paramDescription: "Hex-encoded contract bytecode.",
          },
          {
            paramName: "storage",
            type: "map[string]string",
            paramDescription: "Contract's storage slots.",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Debug detailed execution of a specific transaction",
  "Analyze smart contract interactions within a transaction",
  "Trace internal operations and calls of a transaction",
];

const CONSTRAINTS = [
  "Available only on paid tier",
  "Node must support the debug_traceTransaction method",
  "High resource usage for tracing complex transactions",
];
