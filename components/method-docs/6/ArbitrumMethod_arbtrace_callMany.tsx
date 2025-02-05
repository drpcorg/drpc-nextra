import ArbitrumMethodMethod from "../../ArbitrumMethod/ArbitrumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ARBITRUM } from "./constants";
import ArbitrumMethod from "../../ArbitrumMethod/ArbitrumMethod";

export function ArbitrumMethod_arbtrace_callMany(
  props: GenericMethodPropsReplacing
) {
  return (
    <ArbitrumMethod
      method="arbtrace_callMany"
      network="arbitrum"
      cu={90}
      description={
        "Executes multiple message calls sequentially without creating transactions on the blockchain"
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
        "An array of trace results, each containing detailed execution traces of the corresponding call"
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl ${DRPC_ENDPOINT_URL_ARBITRUM} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  --data '{
    "method": "arbtrace_callMany",
    "params": [
      [
        [
          {
            "from": null,
            "to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "value": "0x186a0"
          },
          ["trace"]
        ],
        [
          {
            "from": null,
            "to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "value": "0x186a0"
          },
          ["trace"]
        ]
      ],
      "latest"
    ],
    "id": 1,
    "jsonrpc": "2.0"
  }'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ARBITRUM}';

const data = {
  jsonrpc: "2.0",
  method: "arbtrace_callMany",
  params: [
    [
      [
        {
          from: null,
          to: "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
          value: "0x186a0"
        },
        ["trace"]
      ],
      [
        {
          from: null,
          to: "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
          value: "0x186a0"
        },
        ["trace"]
      ]
    ],
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

const url = '${DRPC_ENDPOINT_URL_ARBITRUM}';

const data = {
  jsonrpc: "2.0",
  method: "arbtrace_callMany",
  params: [
    [
      [
        {
          from: null,
          to: "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
          value: "0x186a0"
        },
        ["trace"]
      ],
      [
        {
          from: null,
          to: "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
          value: "0x186a0"
        },
        ["trace"]
      ]
    ],
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
	url := "${DRPC_ENDPOINT_URL_ARBITRUM}"

	data := map[string]interface{}{
		"id": 1,
		"jsonrpc": "2.0",
		"method": "arbtrace_callMany",
		"params": []interface{}{
			[]interface{}{
				[]interface{}{
					map[string]interface{}{
						"from": nil,
						"to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
						"value": "0x186a0",
					},
					[]string{"trace"},
				},
				[]interface{}{
					map[string]interface{}{
						"from": nil,
						"to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
						"value": "0x186a0",
					},
					[]string{"trace"},
				},
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

url = '${DRPC_ENDPOINT_URL_ARBITRUM}'

data = {
    "jsonrpc": "2.0",
    "method": "arbtrace_callMany",
    "params": [
        [
            [
                {
                    "from": None,
                    "to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
                    "value": "0x186a0"
                },
                ["trace"]
            ],
            [
                {
                    "from": None,
                    "to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
                    "value": "0x186a0"
                },
                ["trace"]
            ]
        ],
        "latest"
    ],
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
    let url = "${DRPC_ENDPOINT_URL_ARBITRUM}";

    let data = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "arbtrace_callMany",
        "params": [
            [
                [
                    {
                        "from": null,
                        "to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
                        "value": "0x186a0"
                    },
                    ["trace"]
                ],
                [
                    {
                        "from": null,
                        "to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
                        "value": "0x186a0"
                    },
                    ["trace"]
                ]
            ],
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
  "result": [
    {
      "output": "0x",
      "stateDiff": null,
      "trace": [
        {
          "action": {
            "callType": "call",
            "from": "0xb8351b61fa1eb007a9f80144c489d513e6a76b14",
            "gas": "0x7fffffff",
            "input": "0x",
            "to": "0x478fa4c971a077038b4fc5c172c3af5552224ccc",
            "value": "0xb1a2bc2ec50000"
          },
          "result": {
            "gasUsed": "0x0",
            "output": "0x"
          },
          "subtraces": 0,
          "traceAddress": [],
          "type": "call"
        }
      ],
      "vmTrace": null,
      "destroyedContracts": null
    },
    {
      "output": "0x",
      "stateDiff": null,
      "trace": [
        {
          "action": {
            "callType": "call",
            "from": "0xb8351b61fa1eb007a9f80144c489d513e6a76b14",
            "gas": "0x7fffffff",
            "input": "0x",
            "to": "0x988aa44e12c7bce07e449a4156b4a269d6642b3a",
            "value": "0x6f05b59d3b20000"
          },
          "result": {
            "gasUsed": "0x0",
            "output": "0x"
          },
          "subtraces": 0,
          "traceAddress": [],
          "type": "call"
        }
      ],
      "vmTrace": null,
      "destroyedContracts": null
    }
  ]
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
        paramName: "blockNumber",
        type: "string",
        paramDescription: "Block number containing the transaction.",
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
  "Simulate multiple transactions to debug contract interactions",
  "Analyze multiple transaction traces within a specific block",
  "Investigate gas usage for multiple hypothetical transactions",
];

const CONSTRAINTS = [
  "arbtrace_ methods can be used on blocks prior to 22207816, while debug_trace methods can be used for blocks after 22207818",
  "Block 22207817 cannot be traced but is empty.",
];
