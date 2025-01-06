import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_trace_call(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="trace_call"
      network="ethereum"
      cu={60}
      description={
        "Executes a new message call immediately without creating a transaction on the blockchain, and returns detailed trace information about the execution"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={"The trace results"}
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
-d '{"method":"trace_call",
    "params":[{
      "from": "0x6f1FB6EFDf50F34bFA3F2bC0E5576EdD71631638",
      "to": "0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e",
      "value": "0x0",
      "data": "0xa67a6a45000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000"},
      ["trace"]],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "trace_call",
  params: [
    {
      from: "0x6f1FB6EFDf50F34bFA3F2bC0E5576EdD71631638",
      to: "0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e",
      value: "0x0",
      data: "0xa67a6a45000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000"
    },
    ["trace"]
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
    code: () => `const fetch = require('node-fetch');

const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "trace_call",
  params: [
    {
      from: "0x6f1FB6EFDf50F34bFA3F2bC0E5576EdD71631638",
      to: "0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e",
      value: "0x0",
      data: "0xa67a6a45000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000"
    },
    ["trace"]
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
		"method":  "trace_call",
		"params": []interface{}{
			map[string]interface{}{
				"from":  "0x6f1FB6EFDf50F34bFA3F2bC0E5576EdD71631638",
				"to":    "0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e",
				"value": "0x0",
				"data":  "0xa67a6a45000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000",
			},
			[]string{"trace"},
		},
		"id": 1,
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
    "method": "trace_call",
    "params": [
        {
            "from": "0x6f1FB6EFDf50F34bFA3F2bC0E5576EdD71631638",
            "to": "0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e",
            "value": "0x0",
            "data": "0xa67a6a45000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000"
        },
        ["trace"]
    ],
    "id": 1
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
        "method": "trace_call",
        "params": [
            {
                "from": "0x6f1FB6EFDf50F34bFA3F2bC0E5576EdD71631638",
                "to": "0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e",
                "value": "0x0",
                "data": "0xa67a6a45000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000"
            },
            ["trace"]
        ],
        "id": 1,
        "jsonrpc": "2.0"
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
      "output": "0x",
      "stateDiff": null,
      "trace": [
        {
          "action": {
            "callType": "call",
            "from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
            "gas": "0x76c0",
            "input": "0x",
            "to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "value": "0x186a0"
          },
          "blockHash": "0x...",
          "blockNumber": 1234567,
          "result": {
            "gasUsed": "0x5208",
            "output": "0x"
          },
          "subtraces": 0,
          "traceAddress": [],
          "transactionHash": "0x...",
          "transactionPosition": 0,
          "type": "call"
        }
        // Additional trace objects can be included here
      ],
      "vmTrace": null
    },
    {
      "output": "0x",
      "stateDiff": null,
      "trace": [
        {
          "action": {
            "callType": "call",
            "from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
            "gas": "0x76c0",
            "input": "0x",
            "to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "value": "0x186a0"
          },
          "blockHash": "0x...",
          "blockNumber": 1234567,
          "result": {
            "gasUsed": "0x5208",
            "output": "0x"
          },
          "subtraces": 0,
          "traceAddress": [],
          "transactionHash": "0x...",
          "transactionPosition": 0,
          "type": "call"
        }
        // Additional trace objects can be included here
      ],
      "vmTrace": null
    }
  ]
}{
  "jsonrpc": "2.0",
  "result": {
    "output": "0x",
    "stateDiff": null,
    "trace": [
      {
        "action": {
          "callType": "call",
          "from": "0x6f1fb6efdf50f34bfa3f2bc0e5576edd71631638",
          "gas": "0x1dcd11f8",
          "input": "0xa67a6a45000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000",
          "to": "0x1e0447b19bb6ecfdae1e4ae1694b0c3659614e4e",
          "value": "0x0"
        },
        "error": "Reverted",
        "subtraces": 0,
        "traceAddress": [],
        "type": "call"
      }
    ],
    "vmTrace": null
  },
  "id": 0
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transaction",
    type: "object",
    paramDescription:
      "The transaction call object which contains the following fields.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "blockHash",
        type: "string",
        paramDescription: "Hash of the block containing the transaction.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription: "Block number containing the transaction.",
      },
      {
        paramName: "transactionIndex",
        type: "string",
        paramDescription:
          "Position of the transaction in the block (null if pending)",
      },
      {
        paramName: "from",
        type: "string",
        paramDescription: "Transaction hash.",
      },
      {
        paramName: "gas",
        type: "string",
        paramDescription: "Gas provided by the sender.",
      },
      {
        paramName: "gasPrice",
        type: "string",
        paramDescription: "Gas price provided by the sender in wei.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription: "Receiver's address (null if contract creation).",
      },
      {
        paramName: "value",
        type: "string",
        paramDescription: "Value transferred in Wei.",
      },
    ],
  },
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription: "(optional) Block number as an integer, or string",
    paramEnum: [
      {
        value: "latest",
        isDefault: true,
        description: "The most recent block in the blockchain (default).",
      },
      {
        value: "earliest",
        description: "The first block, also known as the genesis block.",
      },
      {
        value: "pending",
        description:
          "Transactions that have been broadcast but not yet included in a block.",
      },
    ],
  },
  {
    paramName: "traceType",
    type: "string",
    paramDescription:
      'Specifies the trace options, such as "vmTrace", "trace", and "stateDiff".',
    paramEnum: [
        {
        value: "trace",
        isDefault: true,
        description: "To get the basic trace of the given transaction.",
      },
      {
        value: "vmTrace",
        isDefault: false,
        description: "To get a full trace of the virtual machine's state during the execution of the given of given transaction, including for any subcalls",
      },
      {
        value: "stateDiff",
        isDefault: false,
        description: "To get information on altered Ethereum state due to execution of the given transaction.",
      },
    ]
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
  "Debug smart contract function calls by tracing",
  "Analyze specific transactions for internal operations",
  "Investigate gas usage of complex contract interactions",
];

const CONSTRAINTS = [
  "Available only on paid tier",
  "Node must support trace_call method",
  "Large data output for complex transactions",
];
