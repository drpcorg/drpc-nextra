import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_debug_traceCall(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="debug_traceCall"
      network="ethereum"
      cu={90}
      description={
        "Trace the execution of a call without broadcasting"
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
    code: () => `curl ${DRPC_ENDPOINT_URL} \\
-X POST \\
-H "Content-Type: application/json" \\
--data '{
  "method": "debug_traceCall",
  "params": [
    {
      "from": null,
      "to": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "data": "0x70a082310000000000000000000000006E0d01A76C3Cf4288372a29124A26D4353EE51BE"
    },
    "latest"
  ],
  "id": 1,
  "jsonrpc": "2.0"
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "debug_traceCall",
  params: [
    {
      from: null,
      to: "0x6b175474e89094c44da98b954eedeac495271d0f",
      data: "0x70a082310000000000000000000000006E0d01A76C3Cf4288372a29124A26D4353EE51BE"
    },
    "latest"
  ],
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
    code: () => `const axios = require('axios');

const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "debug_traceCall",
  params: [
    {
      from: null,
      to: "0x6b175474e89094c44da98b954eedeac495271d0f",
      data: "0x70a082310000000000000000000000006E0d01A76C3Cf4288372a29124A26D4353EE51BE"
    },
    "latest"
  ],
  id: 1
};

axios.post(url, data)
  .then(response => console.log(response.data))
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
		"id": 1,
		"jsonrpc": "2.0",
		"method": "debug_traceCall",
		"params": []interface{}{
			map[string]interface{}{
				"from": nil,
				"to": "0x6b175474e89094c44da98b954eedeac495271d0f",
				"data": "0x70a082310000000000000000000000006E0d01A76C3Cf4288372a29124A26D4353EE51BE",
			},
			"latest",
		},
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
    "method": "debug_traceCall",
    "params": [
        {
            "from": None,
            "to": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "data": "0x70a082310000000000000000000000006E0d01A76C3Cf4288372a29124A26D4353EE51BE"
        },
        "latest"
    ]
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
        "id": 1,
        "jsonrpc": "2.0",
        "method": "debug_traceCall",
        "params": [
            {
                "from": null,
                "to": "0x6b175474e89094c44da98b954eedeac495271d0f",
                "data": "0x70a082310000000000000000000000006E0d01A76C3Cf4288372a29124A26D4353EE51BE"
            },
            "latest"
        ]
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
    "from": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    "gas": "0x1e9ef",
    "gasUsed": "0x7657",
    "to": "0x0000000000a39bb272e79075ade125fd351887ac",
    "input": "0xd0e30db0",
    "calls": [
      {
        "from": "0x0000000000a39bb272e79075ade125fd351887ac",
        "gas": "0x17eab",
        "gasUsed": "0x10ff",
        "to": "0x01a656024de4b89e2d0198bf4d468e8fd2358b17",
        "input": "0xd0e30db0",
        "value": "0x0",
        "type": "DELEGATECALL"
      }
    ],
    "value": "0x0",
    "type": "CALL"
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transactionCall",
    type: "object",
    paramDescription: "The transaction call object containing the following fields:",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "from",
        type: "string",
        paramDescription: "The address the transaction is sent from.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription: "REQUIRED. The address the transaction is directed to.",
      },
      {
        paramName: "gas",
        type: "integer",
        paramDescription: "The integer of the gas provided for the transaction execution.",
      },
      {
        paramName: "gasPrice",
        type: "integer",
        paramDescription: "The integer of the gas price used for each paid gas.",
      },
      {
        paramName: "value",
        type: "integer",
        paramDescription: "The integer value sent with this transaction.",
      },
      {
        paramName: "data",
        type: "string",
        paramDescription: "The hash of the method signature and encoded parameters.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription: `The block number in hexadecimal format, the block hash, or tags.`,
      },
    ],
  },
  {
    paramName: "tracer",
    type: "object",
    paramDescription: "REQUIRED. The tracer object specifying the following fields:",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "tracer",
        type: "string",
        paramDescription: "Type of tracer. Could be 'callTracer' or 'prestateTracer'.",
      },
      {
        paramName: "tracerConfig",
        type: "object",
        paramDescription: "Configuration settings for the tracer.",
        childrenParams: [
          {
            paramName: "onlyTopCall",
            type: "boolean",
            paramDescription: "If true, traces only the top-level call (primary call) and skips sub-calls.",
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
    paramDescription:
      "The transaction trace object containing details of the trace.",
    childrenParamsType: "object",
    childrenParams: [
       {
        paramName: "failed",
        type: "boolean",
        paramDescription: "Indicates whether the transaction was successful or not.",
      },
      {
        paramName: "gas",
        type: "integer",
        paramDescription: "Total gas consumed during the transaction.",
      },
      {
        paramName: "returnValue",
        type: "string",
        paramDescription: "The return value of the executed contract call.",
      },
      {
        paramName: "structLogs",
        type: "array",
        paramDescription: "Detailed logs of each step of the trace, including the following fields:",
        childrenParams: [
          {
            paramName: "pc",
            type: "integer",
            paramDescription: "Current program counter (bytecode index).",
          },
          {
            paramName: "op",
            type: "string",
            paramDescription: "Name of the current executing operation.",
          },
          {
            paramName: "gas",
            type: "integer",
            paramDescription: "Available gas at this step.",
          },
          {
            paramName: "gasCost",
            type: "integer",
            paramDescription: "Gas cost of the current operation.",
          },
          {
            paramName: "depth",
            type: "integer",
            paramDescription: "Number of call frames deep this operation is.",
          },
          {
            paramName: "error",
            type: "string",
            paramDescription: "Error encountered during execution, if any.",
          },
          {
            paramName: "stack",
            type: "array",
            paramDescription: "Current state of the EVM stack at this step.",
          },
          {
            paramName: "memory",
            type: "array",
            paramDescription: "Current state of the EVM memory at this step.",
          },
          {
            paramName: "storage",
            type: "string",
            paramDescription: "Current state of the contract’s storage at this step.",
          },
          {
            paramName: "refund",
            type: "integer",
            paramDescription: "Total gas refund available at this step.",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Simulate a transaction execution without sending it on-chain",
  "Trace internal smart contract operations during a call",
  "Debug gas usage and execution logic before broadcasting",
];

const CONSTRAINTS = [
  "Available only on paid tier",
  "Node must support `debug_traceCall`",
  "High resource usage for large or complex calls",
];

