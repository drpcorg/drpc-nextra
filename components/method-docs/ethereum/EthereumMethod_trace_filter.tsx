import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_trace_filter(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="trace_filter"
      network="ethereum"
      cu={75}
      description={
        "Retrieves traces of all transactions that match specific filter criteria"
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
        "Array of trace objects matching the filter criteria, each containing details about the transaction trace"
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
  --data '{"method":"trace_filter","params":[{"fromBlock":"0xccb943","toBlock":"0xccb943","fromAddress":["0xEdC763b3e418cD14767b3Be02b667619a6374076"]}],"id":1,"jsonrpc":"2.0"}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "trace_filter",
  params: [{
    fromBlock: "0xccb943",
    toBlock: "0xccb943",
    fromAddress: ["0xEdC763b3e418cD14767b3Be02b667619a6374076"]
  }],
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
  method: "trace_filter",
  params: [{
    fromBlock: "0xccb943",
    toBlock: "0xccb943",
    fromAddress: ["0xEdC763b3e418cD14767b3Be02b667619a6374076"]
  }],
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
		"method":  "trace_filter",
		"params": []interface{}{
			map[string]interface{}{
				"fromBlock":   "0xccb943",
				"toBlock":     "0xccb943",
				"fromAddress": []string{"0xEdC763b3e418cD14767b3Be02b667619a6374076"},
			},
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
    "method": "trace_filter",
    "params": [{
        "fromBlock": "0xccb943",
        "toBlock": "0xccb943",
        "fromAddress": ["0xEdC763b3e418cD14767b3Be02b667619a6374076"]
    }],
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
        "method": "trace_filter",
        "params": [{
            "fromBlock": "0xccb943",
            "toBlock": "0xccb943",
            "fromAddress": ["0xEdC763b3e418cD14767b3Be02b667619a6374076"]
        }],
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
        "gas": "0x15f90",
        "input": "0x",
        "to": "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819",
        "value": "0x0"
      },
      "blockHash": "0x5c0b4b4d3a64311a802cd51e0dd0f656b5d4016a2cf2f3d780e8b1cfe1b6ac2e",
      "blockNumber": 13498499,
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 1,
      "type": "call"
    }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "fromBlock",
    type: "string",
    paramDescription:
      'Specifies the starting block number or tag (e.g., "latest", "earliest") from which to begin the trace.',
  },
  {
    paramName: "toBlock",
    type: "string",
    paramDescription:
      "Specifies the ending block number or tag up to which to include in the trace.",
  },
  {
    paramName: "fromAddress",
    type: "string",
    paramDescription: "An array of sender addresses to filter by.",
  },
  {
    paramName: "toAddress",
    type: "string",
    paramDescription: "An array of receiver addresses to filter by.",
  },
  {
    paramName: "after",
    type: "string",
    paramDescription: "The offset number for pagination purposes.",
  },
  {
    paramName: "count",
    type: "string",
    paramDescription:
      "The number of traces to retrieve starting from the offset.",
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
    ],
  },
];

const USE_CASES = [
  "Filter traces for transactions from specific addresses",
  "Analyze smart contract interactions in a block range",
  "Debug specific account activities within block intervals",
];

const CONSTRAINTS = [
  "Available only on paid tier",
  "Node must support the trace_filter method",
  "Accurate results depend on node's data completeness",
];
