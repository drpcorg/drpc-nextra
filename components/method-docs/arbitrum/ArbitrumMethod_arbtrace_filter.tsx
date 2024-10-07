import ArbitrumMethod from "../../ArbitrumMethod/ArbitrumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ARBITRUM } from "./constants";

export function ArbitrumMethod_arbtrace_filter(
  props: GenericMethodPropsReplacing
) {
  return (
    <ArbitrumMethod
      method="arbtrace_filter"
      network="arbitrum"
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
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_ARBITRUM} \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "arbtrace_filter",
  "params": [
    {
      "fromBlock": "0x152dd40",
      "toBlock": "0x152dd42"
    }
  ]
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ARBITRUM}';

const data = {
  jsonrpc: "2.0",
  method: "arbtrace_filter",
  params: [
    {
      fromBlock: "0x152dd40",
      toBlock: "0x152dd42"
    }
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
  method: "arbtrace_filter",
  params: [
    {
      fromBlock: "0x152dd40",
      toBlock: "0x152dd42"
    }
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
		"method": "arbtrace_filter",
		"params": []interface{}{
			map[string]string{
				"fromBlock": "0x152dd40",
				"toBlock": "0x152dd42",
			},
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
    "method": "arbtrace_filter",
    "params": [
        {
            "fromBlock": "0x152dd40",
            "toBlock": "0x152dd42"
        }
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
    let url = "https://nd-954-882-037.p2pify.com/66f812de2a6724a75a51f60dd6f2a154/";

    let data = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "arbtrace_filter",
        "params": [
            {
                "fromBlock": "0x152dd40",
                "toBlock": "0x152dd42"
            }
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
      "action": {
        "callType": "call",
        "from": "0xeb2c22088d0b90d0616e23168e833a3b98a4c74c",
        "gas": "0x8290e",
        "input": "0x2e4dbe8f0000000000000000000000000000000000000000000000000000000000000fb1000000000000000000000000fae39ec09730ca0f14262a636d2d7c5539353752000000000000000000000000000000000000000000000000000000000383cc390000000000000000000000000000000000000000000000000000000000000fb100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000041936bd5c64a55f2b1e7e8329752ec242bca3a33de464372eb8f83d89502f6023d490f25cf294df7c652ca523919930c8c2f945b79226ba305d67ff0ce993a432e1c00000000000000000000000000000000000000000000000000000000000000",
        "to": "0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281",
        "value": "0x0"
      },
      "blockHash": "0xc9ce718d55e84374197bc5fbc2c886375171a6e9b958fba573a39d193452ab01",
      "blockNumber": 22207808,
      "result": {
        "gasUsed": "0x62cb8",
        "output": "0x"
      },
      "subtraces": 2,
      "traceAddress": [],
      "transactionHash": "0x00ec52160968120dda19653b17abf61bdb2aee98e8af1923a2fc281867ac6178",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "callType": "staticcall",
        "from": "0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281",
        "gas": "0x801fc",
        "input": "0xb37c5b274a9b697d1f3085036acb2286b01f9f78b9b5ee111e1b9ca3636c7876000000000000000000000000000000000000000000000000000000000000001c936bd5c64a55f2b1e7e8329752ec242bca3a33de464372eb8f83d89502f6023d490f25cf294df7c652ca523919930c8c2f945b79226ba305d67ff0ce993a432e",
        "to": "0x0000000000000000000000000000000000000001",
        "value": "0x0"
      },
      "blockHash": "0xc9ce718d55e84374197bc5fbc2c886375171a6e9b958fba573a39d193452ab01",
      "blockNumber": 22207808,
      "result": {
        "gasUsed": "0xed",
        "output": "0x0000000000000000000000005ffc120734ce00002b43919d27e70d881f02f8ef"
      },
      "subtraces": 0,
      "traceAddress": [
        0
      ],
      "transactionHash": "0x00ec52160968120dda19653b17abf61bdb2aee98e8af1923a2fc281867ac6178",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "callType": "call",
        "from": "0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281",
        "gas": "0x73ecd",
        "input": "0x40c10f19000000000000000000000000eb2c22088d0b90d0616e23168e833a3b98a4c74c0000000000000000000000000000000000000000000000000000000000000fb1",
        "to": "0xfae39ec09730ca0f14262a636d2d7c5539353752",
        "value": "0x0"
      },
      "blockHash": "0xc9ce718d55e84374197bc5fbc2c886375171a6e9b958fba573a39d193452ab01",
      "blockNumber": 22207808,
      "result": {
        "gasUsed": "0x55d8b",
        "output": "0x000000000000000000000000000000000000000000000000000000000004874e"
      },
      "subtraces": 0,
      "traceAddress": [
        1
      ],
      "transactionHash": "0x00ec52160968120dda19653b17abf61bdb2aee98e8af1923a2fc281867ac6178",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "callType": "call",
        "from": "0x58942b2b3ee2f338df1778c0c8376a3a18a34f02",
        "gas": "0x1ff7f",
        "input": "0x095ea7b30000000000000000000000001f80c96ca521d7247a818a09b0b15c38e3e58a28ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "to": "0x0c1cf6883efa1b496b01f654e247b9b419873054",
        "value": "0x0"
      },
      "blockHash": "0x858f066ffce7403a11fff1af2e78106018e7359620181a9e2e393375c7f91ee5",
      "blockNumber": 22207809,
      "result": {
        "gasUsed": "0xc632",
        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
      },
      "subtraces": 0,
      "traceAddress": [],
      "transactionHash": "0xc11092adb06969f40d947e6a9c1e41c9dca688ee3f748cf370fffe86c8948def",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "callType": "call",
        "from": "0x38201633a07c0381196faff86711f95192ee5042",
        "gas": "0x2c09e",
        "input": "0xa694fc3a000000000000000000000000000000000000000000000000000003a352944000",
        "to": "0x1f80c96ca521d7247a818a09b0b15c38e3e58a28",
        "value": "0x0"
      },
      "blockHash": "0xb99fb5a03d31b8323b84ff66615c05e4a6b7c33968ab5035c832093cee0ee6f1",
      "blockNumber": 22207810,
      "result": {
        "gasUsed": "0x1971e",
        "output": "0x"
      },
      "subtraces": 1,
      "traceAddress": [],
      "transactionHash": "0x2c3b706e8a25b20560bb5b7fb161a3ddbd9a54b72e3e0265c9cc1d6ebe15d4fe",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "callType": "call",
        "from": "0x1f80c96ca521d7247a818a09b0b15c38e3e58a28",
        "gas": "0x12915",
        "input": "0x23b872dd00000000000000000000000038201633a07c0381196faff86711f95192ee50420000000000000000000000001f80c96ca521d7247a818a09b0b15c38e3e58a28000000000000000000000000000000000000000000000000000003a352944000",
        "to": "0x0c1cf6883efa1b496b01f654e247b9b419873054",
        "value": "0x0"
      },
      "blockHash": "0xb99fb5a03d31b8323b84ff66615c05e4a6b7c33968ab5035c832093cee0ee6f1",
      "blockNumber": 22207810,
      "result": {
        "gasUsed": "0x263",
        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
      },
      "subtraces": 0,
      "traceAddress": [
        0
      ],
      "transactionHash": "0x2c3b706e8a25b20560bb5b7fb161a3ddbd9a54b72e3e0265c9cc1d6ebe15d4fe",
      "transactionPosition": 0,
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
  "arbtrace_ methods can be used on blocks prior to 22207816, while debug_trace methods can be used for blocks after 22207818",
  "Block 22207817 cannot be traced but is empty.",
];
