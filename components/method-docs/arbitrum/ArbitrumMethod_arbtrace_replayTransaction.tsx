import ArbitrumMethod from "../../ArbitrumMethod/ArbitrumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ARBITRUM } from "./constants";

export function ArbitrumMethod_arbtrace_replayTransaction(
  props: GenericMethodPropsReplacing
) {
  return (
    <ArbitrumMethod
      method="arbtrace_replayBlockTransactions"
      network="arbitrum"
      cu={90}
      description={
        "Replays a transaction, providing detailed trace information about its execution"
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
        "Detailed trace information of the transaction, including execution traces"
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_ARBITRUM} \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "arbtrace_replayTransaction",
  "params": [
    "0xe8648e3ad982a3d67ef0880d6631343cffff364786994b34e5fa292cfef0e680",
    [
      "trace"
    ]
  ]
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ARBITRUM}';

const data = {
  jsonrpc: "2.0",
  method: "arbtrace_replayTransaction",
  params: [
    "0xe8648e3ad982a3d67ef0880d6631343cffff364786994b34e5fa292cfef0e680",
    ["trace"]
  ],
  id: 1
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
    code: () => `const axios = require('axios');

const url = '${DRPC_ENDPOINT_URL_ARBITRUM}';

const data = {
  jsonrpc: "2.0",
  method: "arbtrace_replayTransaction",
  params: [
    "0xe8648e3ad982a3d67ef0880d6631343cffff364786994b34e5fa292cfef0e680",
    ["trace"]
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
	url := "${DRPC_ENDPOINT_URL_ARBITRUM}"

	data := map[string]interface{}{
		"id": 1,
		"jsonrpc": "2.0",
		"method": "arbtrace_replayTransaction",
		"params": []interface{}{
			"0xe8648e3ad982a3d67ef0880d6631343cffff364786994b34e5fa292cfef0e680",
			[]string{"trace"},
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

url = '${DRPC_ENDPOINT_URL_ARBITRUM}'

data = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "arbtrace_replayTransaction",
    "params": [
        "0xe8648e3ad982a3d67ef0880d6631343cffff364786994b34e5fa292cfef0e680",
        ["trace"]
    ]
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
    let url = "${DRPC_ENDPOINT_URL_ARBITRUM}";

    let data = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "arbtrace_replayTransaction",
        "params": [
            "0xe8648e3ad982a3d67ef0880d6631343cffff364786994b34e5fa292cfef0e680",
            ["trace"]
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
    "output": "0x000000000000000000000000000000000000000000000000000000000e2627b4",
    "stateDiff": null,
    "trace": [
      {
        "action": {
          "callType": "call",
          "from": "0x492bf2ae22a0796ba5078d4db40ea14e41c73c54",
          "gas": "0x205c2",
          "input": "0xc4de93a50000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000e20b5f0000000000000000000000000492bf2ae22a0796ba5078d4db40ea14e41c73c54",
          "to": "0x53bf833a5d6c4dda888f69c22c88c9f356a41614",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0xd8cd",
          "output": "0x000000000000000000000000000000000000000000000000000000000e2627b4"
        },
        "subtraces": 2,
        "traceAddress": [],
        "type": "call"
      },
      {
        "action": {
          "callType": "staticcall",
          "from": "0x53bf833a5d6c4dda888f69c22c88c9f356a41614",
          "gas": "0x1fad9",
          "input": "0x068bcd8d0000000000000000000000000000000000000000000000000000000000000001",
          "to": "0x55bdb4164d28fbaf0898e0ef14a589ac09ac9970",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0x105",
          "output": "0x000000000000000000000000892785f33cdee22a30aef750f285e18c18040c3e"
        },
        "subtraces": 0,
        "traceAddress": [
          0
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "call",
          "from": "0x53bf833a5d6c4dda888f69c22c88c9f356a41614",
          "gas": "0x1f87e",
          "input": "0x0986b61a000000000000000000000000492bf2ae22a0796ba5078d4db40ea14e41c73c54000000000000000000000000000000000000000000000000000000000e20b5f0000000000000000000000000492bf2ae22a0796ba5078d4db40ea14e41c73c54",
          "to": "0x892785f33cdee22a30aef750f285e18c18040c3e",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0xd278",
          "output": "0x000000000000000000000000000000000000000000000000000000000e2627b4"
        },
        "subtraces": 1,
        "traceAddress": [
          1
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "call",
          "from": "0x892785f33cdee22a30aef750f285e18c18040c3e",
          "gas": "0x1e928",
          "input": "0xa9059cbb000000000000000000000000492bf2ae22a0796ba5078d4db40ea14e41c73c54000000000000000000000000000000000000000000000000000000000e2627b4",
          "to": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0xc92b",
          "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
        },
        "subtraces": 1,
        "traceAddress": [
          1,
          0
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "delegatecall",
          "from": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
          "gas": "0x1e089",
          "input": "0xa9059cbb000000000000000000000000492bf2ae22a0796ba5078d4db40ea14e41c73c54000000000000000000000000000000000000000000000000000000000e2627b4",
          "to": "0x1efb3f88bc88f03fd1804a5c53b7141bbef5ded8",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0xc804",
          "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
        },
        "subtraces": 0,
        "traceAddress": [
          1,
          0,
          0
        ],
        "type": "call"
      }
    ],
    "vmTrace": null,
    "destroyedContracts": null
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transactionHash",
    type: "string",
    paramDescription: "The hash of the transaction to replay.",
  },
  {
    paramName: "traceType",
    type: "array",
    paramDescription:
      'An array specifying the types of traces to include, such as "trace", "vmTrace", and "stateDiff".',
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
        paramName: "vmTrace",
        type: "string",
        paramDescription: "The virtual machine trace.",
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
  "Replay specific transaction to debug execution details",
  "Analyze transaction trace to optimize gas usage",
  "Investigate internal contract calls in a transaction",
];

const CONSTRAINTS = [
  "arbtrace_ methods can be used on blocks prior to 22207816, while debug_trace methods can be used for blocks after 22207818",
  "Block 22207817 cannot be traced but is empty.",
];
