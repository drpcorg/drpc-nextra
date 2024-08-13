import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_debug_traceBlockByNumber(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="debug_traceBlockByNumber"
      network="ethereum"
      cu={90}
      description={
        "The debug_traceBlockByNumber method traces the execution of all transactions within a specified block, identified by its block number"
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
--data '{"method":"debug_traceBlockByNumber","params":["0xccde12", {"tracer": "callTracer"}],"id":1,"jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "debug_traceBlockByNumber",
  params: ["0xccde12", { "tracer": "callTracer" }],
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
  method: "debug_traceBlockByNumber",
  params: ["0xccde12", { "tracer": "callTracer" }],
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
		"method":  "debug_traceBlockByNumber",
		"params":  []interface{}{"0xccde12", map[string]interface{}{"tracer": "callTracer"}},
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
    "method": "debug_traceBlockByNumber",
    "params": ["0xccde12", { "tracer": "callTracer" }],
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
        "method": "debug_traceBlockByNumber",
        "params": ["0xccde12", { "tracer": "callTracer" }],
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
    "type": "CALL",
    "from": "0x0000000000000000000000000000000000000000",
    "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
    "value": "0x0",
    "gas": "0x7fffffffffffadf7",
    "gasUsed": "0x0",
    "input": "0x",
    "output": "0x"
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription:
      "Specifies the block number for fetching the transaction.",
  },
  {
    paramName: "tracer",
    type: "object",
    paramDescription:
      "Supports callTracer and prestateTracer for detailed trace analysis.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "tracer",
        type: "string",
        paramDescription: "Default: callTracer",
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
    paramDescription: "Varies for callTracer and prestateTracer.",
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
  "Analyze block's internal transactions for debugging purposes",
  "Trace smart contract interactions within a specific block",
  "Investigate gas usage for all transactions in block",
];

const CONSTRAINTS = [
  "Requires valid block number as input parameter",
  "Node must support the debug_traceBlockByNumber method",
  "High computational cost for tracing complex blocks",
];
