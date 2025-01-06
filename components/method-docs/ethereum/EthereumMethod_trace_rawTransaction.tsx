import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_trace_rawTransaction(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="trace_rawTransaction"
      network="ethereum"
      cu={75}
      description={
        "Executes a raw transaction and returns detailed trace information about its execution"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The trace results, including detailed execution traces such as opcodes executed, state changes, and call stack information"
      }
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
  --data '{"method":"trace_rawTransaction","params":["RAW_TRANSACTION_DATA",["trace"]],"id":1,"jsonrpc":"2.0"}' `,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "trace_rawTransaction",
  params: ["RAW_TRANSACTION_DATA", ["trace"]],
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
  method: "trace_rawTransaction",
  params: ["RAW_TRANSACTION_DATA", ["trace"]],
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
		"method":  "trace_rawTransaction",
		"params":  []interface{}{"RAW_TRANSACTION_DATA", []string{"trace"}},
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
    "method": "trace_rawTransaction",
    "params": ["RAW_TRANSACTION_DATA", ["trace"]],
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
        "method": "trace_rawTransaction",
        "params": ["RAW_TRANSACTION_DATA", ["trace"]],
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
  "result": [
    {
      "action": {
        "callType": "call",
        "from": "0xEdC763b3e418cD14767b3Be02b667619a6374076",
        "gas": "0x76c0",
        "input": "0x",
        "to": "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
        "value": "0x0"
      },
      "blockHash": "0x1e3b87c5ea233b9d8c19ad7d7beaf0fa8dd3d74157b1441a13f8a18e176a11db",
      "blockNumber": 13328707,
      "result": {
        "gasUsed": "0x5208",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 0,
      "type": "call"
    }
    // Additional traces can be included here
  ]
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "data",
    type: "string",
    paramDescription:
      "The raw transaction data, encoded as a hexadecimal string.",
  },
  {
    paramName: "array",
    type: "array",
    paramDescription:
      "The raw signed transaction data, provided as an array of objects.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "vmTrace",
        type: "string",
        paramDescription:
          " Provides a full trace of the virtual machine's state during the transaction execution, including any subcalls.",
      },
      {
        paramName: "traceType",
        type: "string",
        paramDescription:
          'Specifies the type of trace. Can include one or more of the following: "trace", "stateDiff".',
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
    type: "object",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "output",
        type: "string",
        paramDescription:
          "The output data returned by the transaction, encoded in hexadecimal format.",
      },
      {
        paramName: "stateDiff",
        type: "string",
        paramDescription:
          "Details the changes to the state as a result of the transaction execution.",
      },
      {
        paramName: "trace",
        type: "object",
        paramDescription:
          "Provides the basic trace information for the transaction execution.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "action",
            type: "object",
            childrenParamsType: "object",
            paramDescription: "Contains details about the trace action.",
            childrenParams: [
              {
                paramName: "callType",
                type: "string",
                paramDescription: "The type of call.",
              },
              {
                paramName: "from",
                type: "string",
                paramDescription: "The sender's address.",
              },
              {
                paramName: "to",
                type: "string",
                paramDescription: "The receiver's address.",
              },
              {
                paramName: "value",
                type: "string",
                paramDescription: "The value transferred in wei.",
              },
              {
                paramName: "gas",
                type: "string",
                paramDescription: "The gas provided for the call.",
              },
              {
                paramName: "input",
                type: "string",
                paramDescription: "The data sent with the call.",
              },
            ],
          },
          {
            paramName: "blockHash",
            type: "string",
            paramDescription: "The hash of the block where the trace occurred.",
          },
          {
            paramName: "blockNumber",
            type: "string",
            paramDescription:
              "The number of the block where the trace occurred.",
          },
          {
            paramName: "result",
            type: "string",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "gasUsed",
                type: "string",
                paramDescription: "Gas used by the trace.",
              },
              {
                paramName: "output",
                type: "string",
                paramDescription: "Call output.",
              },
            ],
          },
          {
            paramName: "subtraces",
            type: "integer",
            paramDescription: "Number of subtraces created by this trace..",
          },
          {
            paramName: "traceAddress",
            type: "array_of_strings",
            paramDescription: "Position of this trace in the call stack.",
          },
          {
            paramName: "transactionHash",
            type: "string",
            paramDescription: "Hash of the transaction containing this trace.",
          },
          {
            paramName: "transactionPosition",
            type: "string",
            paramDescription: "Transaction's position in the block.",
          },
          {
            paramName: "gas",
            type: "string",
            paramDescription: "The gas provided for the call.",
          },
          {
            paramName: "input",
            type: "string",
            paramDescription:
              "To get a full trace of the virtual machine's state during the execution of the given of given transaction, including for any subcalls",
          },
        ],
      },
      {
        paramName: "blockHash",
        type: "string",
        paramDescription: "The hash of the block where the trace occurred.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription: "The number of the block where the trace occurred.",
      },
      {
        paramName: "result",
        type: "string",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "gasUsed",
            type: "string",
            paramDescription: "Gas used by the trace.",
          },
          {
            paramName: "output",
            type: "string",
            paramDescription: "Call output.",
          },
        ],
      },
      {
        paramName: "subtraces",
        type: "integer",
        paramDescription: "Number of subtraces created by this trace..",
      },
      {
        paramName: "traceAddress",
        type: "array_of_strings",
        paramDescription: "Position of this trace in the call stack.",
      },
      {
        paramName: "transactionHash",
        type: "string",
        paramDescription: "Hash of the transaction containing this trace.",
      },
      {
        paramName: "transactionPosition",
        type: "string",
        paramDescription: "Transaction's position in the block.",
      },
      {
        paramName: "type",
        type: "string",
        paramDescription: "The type of trace.",
      },
      {
        paramName: "vmTrace",
        type: "string",
        paramDescription:
          "To get a full trace of the virtual machine's state during the execution of the given of given transaction, including for any subcalls",
      },
    ],
  },
];

const USE_CASES = [
  "Validate the execution paths of smart contracts",
  "Analyze the detailed gas usage of a transaction",
  "Investigate the root causes of transaction",
];

const CONSTRAINTS = [
  "Available only on paid tier",
  "Not all nodes may have tracing capabilities enabled",
  "The types of traces must be specified correctly in the request",
];
