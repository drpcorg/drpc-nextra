import ArbitrumMethod from "../../ArbitrumMethod/ArbitrumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ARBITRUM } from "./constants";

export function ArbitrumMethod_arbtrace_block(props: GenericMethodPropsReplacing) {
  return (
    <ArbitrumMethod
      method="arbtrace_block"
      network="arbitrum"
      cu={90}
      description={
        "Retrieves detailed execution traces of all transactions included in a specific block"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_strings"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "An array containing trace objects for each transaction in the block. "
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
     --data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "arbtrace_block",
  "params": [
    "0x123456789abcdef"  # Replace with actual block hash
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ARBITRUM}';

const data = {
  jsonrpc: "2.0",
  method: "arbtrace_block",
  params: ["0x123456789abcdef"],  
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
  method: "arbtrace_block",
  params: ["0x123456789abcdef"],  
  id: 1
};

axios.post(url, data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
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
		"jsonrpc": "2.0",
		"method":  "arbtrace_block",
		"params":  []interface{}{"0x123456789abcdef"}, 
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

url = '${DRPC_ENDPOINT_URL_ARBITRUM}'

data = {
    "jsonrpc": "2.0",
    "method": "arbtrace_block",
    "params": ["0x123456789abcdef"],  # Replace with actual block hash
    "id": 1
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
        "jsonrpc": "2.0",
        "method": "arbtrace_block",
        "params": ["0x123456789abcdef"],  
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
    paramName: "blockNumber",
    type: "string",
    paramDescription: "The integer of a block encoded as hexadecimal or the string.",
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
  "Analyze internal transactions for the latest block",
  "Trace smart contract executions in the newest block",
  "Investigate transaction behavior within the most recent block",
];

const CONSTRAINTS = [
  "arbtrace_ methods can be used on blocks prior to 22207816, while debug_trace methods can be used for blocks after 22207818",
  "Block 22207817 cannot be traced but is empty.",
];
