import ArbitrumMethod from "../../ArbitrumMethod/ArbitrumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ARBITRUM } from "./constants";

export function ArbitrumMethod_arbtrace_call(props: GenericMethodPropsReplacing) {
  return (
    <ArbitrumMethod
      method="arbtrace_call"
      network="arbitrum"
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
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_ARBITRUM} \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "arbtrace_call",
  "params": [
    {
      "from": "0xeff678bf68ca0da9dfdac0c88f431e8d0e2f7116",
      "to": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
      "gas": "0xfa4d9",
      "gasPrice": "0x9c1e25d",
      "data": "0x18cbafe5..."
    },
    [
      "trace"
    ],
    "0x152dd44"
  ]
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ARBITRUM}';

const data = {
  id: 1,
  jsonrpc: "2.0",
  method: "arbtrace_call",
  params: [
    {
      from: "0xeff678bf68ca0da9dfdac0c88f431e8d0e2f7116",
      to: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
      gas: "0xfa4d9",
      gasPrice: "0x9c1e25d",
      data: "0x18cbafe5..."
    },
    ["trace"],
    "0x152dd44"
  ]
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
  id: 1,
  jsonrpc: "2.0",
  method: "arbtrace_call",
  params: [
    {
      from: "0xeff678bf68ca0da9dfdac0c88f431e8d0e2f7116",
      to: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
      gas: "0xfa4d9",
      gasPrice: "0x9c1e25d",
      data: "0x18cbafe5..."
    },
    ["trace"],
    "0x152dd44"
  ]
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
		"method": "arbtrace_call",
		"params": []interface{}{
			map[string]string{
				"from": "0xeff678bf68ca0da9dfdac0c88f431e8d0e2f7116",
				"to": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
				"gas": "0xfa4d9",
				"gasPrice": "0x9c1e25d",
				"data": "0x18cbafe5...",
			},
			[]string{"trace"},
			"0x152dd44",
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
    "method": "arbtrace_call",
    "params": [
        {
            "from": "0xeff678bf68ca0da9dfdac0c88f431e8d0e2f7116",
            "to": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
            "gas": "0xfa4d9",
            "gasPrice": "0x9c1e25d",
            "data": "0x18cbafe5..."
        },
        ["trace"],
        "0x152dd44"
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
        "method": "arbtrace_call",
        "params": [
            {
                "from": "0xeff678bf68ca0da9dfdac0c88f431e8d0e2f7116",
                "to": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
                "gas": "0xfa4d9",
                "gasPrice": "0x9c1e25d",
                "data": "0x18cbafe5..."
            },
            ["trace"],
            "0x152dd44"
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
    "output": "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000303862420000000000000000000000000000000000000000000000000707f7e0b0fa93ff",
    "stateDiff": null,
    "trace": [
      {
        "action": {
          "callType": "call",
          "from": "0xeff678bf68ca0da9dfdac0c88f431e8d0e2f7116",
          "gas": "0xfa4d9",
          "input": "0x18cbafe5000000000000000000000000000000000000000000000000000000003038624200000000000000000000000000000000000000000000000006ff882fdeb13bd100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000eff678bf68ca0da9dfdac0c88f431e8d0e2f711600000000000000000000000000000000000000000000000000000000630f76620000000000000000000000000000000000000000000000000000000000000002000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1",
          "to": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0xf74f",
          "output": "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000303862420000000000000000000000000000000000000000000000000707f7e0b0fa93ff"
        },
        "subtraces": 5,
        "traceAddress": [],
        "type": "call"
      },
      {
        "action": {
          "callType": "staticcall",
          "from": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
          "gas": "0xf60c5",
          "input": "0x0902f1ac",
          "to": "0x905dfcd5649217c42684f23958568e533c711aa3",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0xfc",
          "output": "0x0000000000000000000000000000000000000000000001b2b40b20b290e7715f00000000000000000000000000000000000000000000000000000b9c1cc05dc500000000000000000000000000000000000000000000000000000000630f7041"
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
          "from": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
          "gas": "0xf5ab0",
          "input": "0x23b872dd000000000000000000000000eff678bf68ca0da9dfdac0c88f431e8d0e2f7116000000000000000000000000905dfcd5649217c42684f23958568e533c711aa30000000000000000000000000000000000000000000000000000000030386242",
          "to": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0x859",
          "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
        },
        "subtraces": 1,
        "traceAddress": [
          1
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "delegatecall",
          "from": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
          "gas": "0xf1c3c",
          "input": "0x23b872dd000000000000000000000000eff678bf68ca0da9dfdac0c88f431e8d0e2f7116000000000000000000000000905dfcd5649217c42684f23958568e533c711aa30000000000000000000000000000000000000000000000000000000030386242",
          "to": "0x1efb3f88bc88f03fd1804a5c53b7141bbef5ded8",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0x723",
          "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
        },
        "subtraces": 0,
        "traceAddress": [
          1,
          0
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "call",
          "from": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
          "gas": "0xf4dce",
          "input": "0x022c0d9f0000000000000000000000000000000000000000000000000707f7e0b0fa93ff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000001b02da8cb0d097eb8d57a175b88c7d8b4799750600000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000",
          "to": "0x905dfcd5649217c42684f23958568e533c711aa3",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0x19892",
          "output": "0x"
        },
        "subtraces": 3,
        "traceAddress": [
          2
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "call",
          "from": "0x905dfcd5649217c42684f23958568e533c711aa3",
          "gas": "0xf0da2",
          "input": "0xa9059cbb0000000000000000000000001b02da8cb0d097eb8d57a175b88c7d8b479975060000000000000000000000000000000000000000000000000707f7e0b0fa93ff",
          "to": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0xc8c7",
          "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
        },
        "subtraces": 1,
        "traceAddress": [
          2,
          0
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "delegatecall",
          "from": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
          "gas": "0xed071",
          "input": "0xa9059cbb0000000000000000000000001b02da8cb0d097eb8d57a175b88c7d8b479975060000000000000000000000000000000000000000000000000707f7e0b0fa93ff",
          "to": "0x8b194beae1d3e0788a1a35173978001acdfba668",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0xc7a0",
          "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
        },
        "subtraces": 0,
        "traceAddress": [
          2,
          0,
          0
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "staticcall",
          "from": "0x905dfcd5649217c42684f23958568e533c711aa3",
          "gas": "0xe4707",
          "input": "0x70a08231000000000000000000000000905dfcd5649217c42684f23958568e533c711aa3",
          "to": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0x25b",
          "output": "0x0000000000000000000000000000000000000000000001b2ad0328d1dfecdd60"
        },
        "subtraces": 1,
        "traceAddress": [
          2,
          1
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "delegatecall",
          "from": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
          "gas": "0xe0cf3",
          "input": "0x70a08231000000000000000000000000905dfcd5649217c42684f23958568e533c711aa3",
          "to": "0x8b194beae1d3e0788a1a35173978001acdfba668",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0x137",
          "output": "0x0000000000000000000000000000000000000000000001b2ad0328d1dfecdd60"
        },
        "subtraces": 0,
        "traceAddress": [
          2,
          1,
          0
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "staticcall",
          "from": "0x905dfcd5649217c42684f23958568e533c711aa3",
          "gas": "0xe4431",
          "input": "0x70a08231000000000000000000000000905dfcd5649217c42684f23958568e533c711aa3",
          "to": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0x252",
          "output": "0x00000000000000000000000000000000000000000000000000000b9c4cf8c007"
        },
        "subtraces": 1,
        "traceAddress": [
          2,
          2
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "delegatecall",
          "from": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
          "gas": "0xe0a29",
          "input": "0x70a08231000000000000000000000000905dfcd5649217c42684f23958568e533c711aa3",
          "to": "0x1efb3f88bc88f03fd1804a5c53b7141bbef5ded8",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0x12e",
          "output": "0x00000000000000000000000000000000000000000000000000000b9c4cf8c007"
        },
        "subtraces": 0,
        "traceAddress": [
          2,
          2,
          0
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "call",
          "from": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
          "gas": "0xdbaf6",
          "input": "0x2e1a7d4d0000000000000000000000000000000000000000000000000707f7e0b0fa93ff",
          "to": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0x5b0",
          "output": "0x"
        },
        "subtraces": 1,
        "traceAddress": [
          3
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "delegatecall",
          "from": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
          "gas": "0xd8313",
          "input": "0x2e1a7d4d0000000000000000000000000000000000000000000000000707f7e0b0fa93ff",
          "to": "0x8b194beae1d3e0788a1a35173978001acdfba668",
          "value": "0x0"
        },
        "result": {
          "gasUsed": "0x49c",
          "output": "0x"
        },
        "subtraces": 1,
        "traceAddress": [
          3,
          0
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "call",
          "from": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
          "gas": "0xd4934",
          "input": "0x",
          "to": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
          "value": "0x707f7e0b0fa93ff"
        },
        "result": {
          "gasUsed": "0x45",
          "output": "0x"
        },
        "subtraces": 0,
        "traceAddress": [
          3,
          0,
          0
        ],
        "type": "call"
      },
      {
        "action": {
          "callType": "call",
          "from": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
          "gas": "0xdec99",
          "input": "0x",
          "to": "0xeff678bf68ca0da9dfdac0c88f431e8d0e2f7116",
          "value": "0x707f7e0b0fa93ff"
        },
        "result": {
          "gasUsed": "0x0",
          "output": "0x"
        },
        "subtraces": 0,
        "traceAddress": [
          4
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
    paramName: "transaction",
    type: "object",
    paramDescription:
      "The transaction call object which contains the following fields.",
    childrenParamsType: "object",
    childrenParams: [
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
      {
        paramName: "data",
        type: "string",
        paramDescription: "The hash of the method signature followed by encoded parameters",
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
  "arbtrace_ methods can be used on blocks prior to 22207816, while debug_trace methods can be used for blocks after 22207818",
  "Block 22207817 cannot be traced but is empty.",
];
