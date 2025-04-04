import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_debug_traceTransaction(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="debug_traceTransaction"
      network="ethereum"
      cu={90}
      description={
        "Traces the execution of a given transaction, providing detailed information about its internal operations for debugging purposes"
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
--data '{"method":"debug_traceTransaction","params":["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", {"tracer": "callTracer"}], "id":1,"jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "debug_traceTransaction",
  params: ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { tracer: "callTracer" }],
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
  method: "debug_traceTransaction",
  params: ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { tracer: "callTracer" }],
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
		"method":  "debug_traceTransaction",
		"params":  []interface{}{"0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", map[string]string{"tracer": "callTracer"}},
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
    "method": "debug_traceTransaction",
    "params": ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { "tracer": "callTracer" }],
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
        "method": "debug_traceTransaction",
        "params": ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { "tracer": "callTracer" }],
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
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "from": "0x4bb4c1b0745ef7b4642feeccd0740dec417ca0a0",
        "gas": "0x40caa",
        "gasUsed": "0x34fe1",
        "to": "0x19b3eb3af5d93b77a5619b047de0eed7115a19e7",
        "input": "0x6a761202000000000000000000000000d9e1ce17f2641f24ae83637ab66a2cca9c378b9f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031434000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000001248803dbee0000000000000000000000000000000000000000000000000000001cdef9d800000000000000000000000000000000000000000000000230b3585896e930eb8500000000000000000000000000000000000000000000000000000000000000a000000000000000000000000019b3eb3af5d93b77a5619b047de0eed7115a19e7000000000000000000000000000000000000000000000000000000006118595000000000000000000000000000000000000000000000000000000000000000030000000000000000000000006b3595068778dd592e39a122f4f5a5cf09c90fe2000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c30000000000000000000000004bb4c1b0745ef7b4642feeccd0740dec417ca0a00000000000000000000000000000000000000000000000000000000000000000013409ad9803335eb97629dc2de61cb153a80427fc8bdd7226e0c7c5f640bbf9d677ac2bdd83773b497f04434b66802f04a60f9946d2bc80b42a4cea1466ab2abd1ba8be8eafa42b4590c707b0a85c6c7dd4be7f3cc6ecf85f0fd935c4e5d7df01440452c1fc6647631279cbb158d4735f415f95847475b61616f19b91f509b6f6bb1b0000000000000000000000000000000000000000000000000000000000",
        "output": "0x0000000000000000000000000000000000000000000000000000000000000001",
        "calls": [
            {
                "from": "0x19b3eb3af5d93b77a5619b047de0eed7115a19e7",
                "gas": "0x37cff",
                "gasUsed": "0x2e415",
                "to": "0x34cfac646f301356faa8b21e94227e3583fe3f5f",
                "input": "0x6a761202000000000000000000000000d9e1ce17f2641f24ae83637ab66a2cca9c378b9f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031434000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000001248803dbee0000000000000000000000000000000000000000000000000000001cdef9d800000000000000000000000000000000000000000000000230b3585896e930eb8500000000000000000000000000000000000000000000000000000000000000a000000000000000000000000019b3eb3af5d93b77a5619b047de0eed7115a19e7000000000000000000000000000000000000000000000000000000006118595000000000000000000000000000000000000000000000000000000000000000030000000000000000000000006b3595068778dd592e39a122f4f5a5cf09c90fe2000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c30000000000000000000000004bb4c1b0745ef7b4642feeccd0740dec417ca0a00000000000000000000000000000000000000000000000000000000000000000013409ad9803335eb97629dc2de61cb153a80427fc8bdd7226e0c7c5f640bbf9d677ac2bdd83773b497f04434b66802f04a60f9946d2bc80b42a4cea1466ab2abd1ba8be8eafa42b4590c707b0a85c6c7dd4be7f3cc6ecf85f0fd935c4e5d7df01440452c1fc6647631279cbb158d4735f415f95847475b61616f19b91f509b6f6bb1b0000000000000000000000000000000000000000000000000000000000",
                "output": "0x0000000000000000000000000000000000000000000000000000000000000001",
                "calls": [
                    {
                        "from": "0x19b3eb3af5d93b77a5619b047de0eed7115a19e7",
                        "gas": "0x33430",
                        "gasUsed": "0xbb8",
                        "to": "0x0000000000000000000000000000000000000001",
                        "input": "0x1d46146de9a554c9f76093d4b1dc7aa06165db86235e726c377a327ab94abe1e000000000000000000000000000000000000000000000000000000000000001b3409ad9803335eb97629dc2de61cb153a80427fc8bdd7226e0c7c5f640bbf9d677ac2bdd83773b497f04434b66802f04a60f9946d2bc80b42a4cea1466ab2abd",
                        "output": "0x0000000000000000000000008f99b0b48b23908da9f727b5083052d5099e6aea",
                        "type": "STATICCALL"
                    },
                    {
                        "from": "0x19b3eb3af5d93b77a5619b047de0eed7115a19e7",
                        "gas": "0x31d12",
                        "gasUsed": "0xbb8",
                        "to": "0x0000000000000000000000000000000000000001",
                        "input": "0x1d46146de9a554c9f76093d4b1dc7aa06165db86235e726c377a327ab94abe1e000000000000000000000000000000000000000000000000000000000000001ba8be8eafa42b4590c707b0a85c6c7dd4be7f3cc6ecf85f0fd935c4e5d7df01440452c1fc6647631279cbb158d4735f415f95847475b61616f19b91f509b6f6bb",
                        "output": "0x000000000000000000000000b4a3f907ec1611f22543219ae9bb33ec5e96e116",
                        "type": "STATICCALL"
                    },
                    {
                        "from": "0x19b3eb3af5d93b77a5619b047de0eed7115a19e7",
                        "gas": "0x2fc0c",
                        "gasUsed": "0x26897",
                        "to": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
                        "input": "0x8803dbee0000000000000000000000000000000000000000000000000000001cdef9d800000000000000000000000000000000000000000000000230b3585896e930eb8500000000000000000000000000000000000000000000000000000000000000a000000000000000000000000019b3eb3af5d93b77a5619b047de0eed7115a19e7000000000000000000000000000000000000000000000000000000006118595000000000000000000000000000000000000000000000000000000000000000030000000000000000000000006b3595068778dd592e39a122f4f5a5cf09c90fe2000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                        "output": "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000022de769e2b6a5d409910000000000000000000000000000000000000000000000021196bcd1acdc23a30000000000000000000000000000000000000000000000000000001cdef9d800",
                        "calls": [
                            {
                                "from": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
                                "gas": "0x2dd43",
                                "gasUsed": "0x9d5",
                                "to": "0x397ff1542f962076d0bfe58ea045ffa2d347aca0",
                                "input": "0x0902f1ac",
                                "output": "0x0000000000000000000000000000000000000000000000000000d1d55dbd5611000000000000000000000000000000000000000000000efb6c9a5ae9b236f51100000000000000000000000000000000000000000000000000000000611852e3",
                                "type": "STATICCALL"
                            },
                            {
                                "from": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
                                "gas": "0x2c046",
                                "gasUsed": "0x9d5",
                                "to": "0x795065dcc9f64b5614c407a6efdc400da6221fb0",
                                "input": "0x0902f1ac",
                                "output": "0x000000000000000000000000000000000000000000111405e9daa45d5d83eb55000000000000000000000000000000000000000000001044b007d0691cb8a3eb000000000000000000000000000000000000000000000000000000006118520d",
                                "type": "STATICCALL"
                            },
                            {
                                "from": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
                                "gas": "0x2a16e",
                                "gasUsed": "0x5000",
                                "to": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
                                "input": "0x23b872dd00000000000000000000000019b3eb3af5d93b77a5619b047de0eed7115a19e7000000000000000000000000795065dcc9f64b5614c407a6efdc400da6221fb000000000000000000000000000000000000000000000022de769e2b6a5d40991",
                                "output": "0x0000000000000000000000000000000000000000000000000000000000000001",
                                "value": "0x0",
                                "type": "CALL"
                            },
                            {
                                "from": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
                                "gas": "0x24671",
                                "gasUsed": "0xbc2a",
                                "to": "0x795065dcc9f64b5614c407a6efdc400da6221fb0",
                                "input": "0x022c0d9f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021196bcd1acdc23a3000000000000000000000000397ff1542f962076d0bfe58ea045ffa2d347aca000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000",
                                "calls": [
                                    {
                                        "from": "0x795065dcc9f64b5614c407a6efdc400da6221fb0",
                                        "gas": "0x20960",
                                        "gasUsed": "0x323e",
                                        "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                        "input": "0xa9059cbb000000000000000000000000397ff1542f962076d0bfe58ea045ffa2d347aca00000000000000000000000000000000000000000000000021196bcd1acdc23a3",
                                        "output": "0x0000000000000000000000000000000000000000000000000000000000000001",
                                        "value": "0x0",
                                        "type": "CALL"
                                    },
                                    {
                                        "from": "0x795065dcc9f64b5614c407a6efdc400da6221fb0",
                                        "gas": "0x1d580",
                                        "gasUsed": "0x242",
                                        "to": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
                                        "input": "0x70a08231000000000000000000000000795065dcc9f64b5614c407a6efdc400da6221fb0",
                                        "output": "0x000000000000000000000000000000000000000000111633d14487140357f4e6",
                                        "type": "STATICCALL"
                                    },
                                    {
                                        "from": "0x795065dcc9f64b5614c407a6efdc400da6221fb0",
                                        "gas": "0x1d19f",
                                        "gasUsed": "0x216",
                                        "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                        "input": "0x70a08231000000000000000000000000795065dcc9f64b5614c407a6efdc400da6221fb0",
                                        "output": "0x0000000000000000000000000000000000000000000010429e7113976fdc8048",
                                        "type": "STATICCALL"
                                    }
                                ],
                                "value": "0x0",
                                "type": "CALL"
                            },
                            {
                                "from": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
                                "gas": "0x18547",
                                "gasUsed": "0xf5f2",
                                "to": "0x397ff1542f962076d0bfe58ea045ffa2d347aca0",
                                "input": "0x022c0d9f0000000000000000000000000000000000000000000000000000001cdef9d800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019b3eb3af5d93b77a5619b047de0eed7115a19e700000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000",
                                "calls": [
                                    {
                                        "from": "0x397ff1542f962076d0bfe58ea045ffa2d347aca0",
                                        "gas": "0x14b59",
                                        "gasUsed": "0x6925",
                                        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                                        "input": "0xa9059cbb00000000000000000000000019b3eb3af5d93b77a5619b047de0eed7115a19e70000000000000000000000000000000000000000000000000000001cdef9d800",
                                        "output": "0x0000000000000000000000000000000000000000000000000000000000000001",
                                        "calls": [
                                            {
                                                "from": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                                                "gas": "0x12a50",
                                                "gasUsed": "0x4cac",
                                                "to": "0xa2327a938febf5fec13bacfb16ae10ecbc4cbdcf",
                                                "input": "0xa9059cbb00000000000000000000000019b3eb3af5d93b77a5619b047de0eed7115a19e70000000000000000000000000000000000000000000000000000001cdef9d800",
                                                "output": "0x0000000000000000000000000000000000000000000000000000000000000001",
                                                "value": "0x0",
                                                "type": "DELEGATECALL"
                                            }
                                        ],
                                        "value": "0x0",
                                        "type": "CALL"
                                    },
                                    {
                                        "from": "0x397ff1542f962076d0bfe58ea045ffa2d347aca0",
                                        "gas": "0xe15a",
                                        "gasUsed": "0x523",
                                        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                                        "input": "0x70a08231000000000000000000000000397ff1542f962076d0bfe58ea045ffa2d347aca0",
                                        "output": "0x0000000000000000000000000000000000000000000000000000d1b87ec37e11",
                                        "calls": [
                                            {
                                                "from": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                                                "gas": "0xdafb",
                                                "gasUsed": "0x211",
                                                "to": "0xa2327a938febf5fec13bacfb16ae10ecbc4cbdcf",
                                                "input": "0x70a08231000000000000000000000000397ff1542f962076d0bfe58ea045ffa2d347aca0",
                                                "output": "0x0000000000000000000000000000000000000000000000000000d1b87ec37e11",
                                                "value": "0x0",
                                                "type": "DELEGATECALL"
                                            }
                                        ],
                                        "type": "STATICCALL"
                                    },
                                    {
                                        "from": "0x397ff1542f962076d0bfe58ea045ffa2d347aca0",
                                        "gas": "0xdaa4",
                                        "gasUsed": "0x216",
                                        "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                        "input": "0x70a08231000000000000000000000000397ff1542f962076d0bfe58ea045ffa2d347aca0",
                                        "output": "0x000000000000000000000000000000000000000000000efd7e3117bb5f1318b4",
                                        "type": "STATICCALL"
                                    }
                                ],
                                "value": "0x0",
                                "type": "CALL"
                            }
                        ],
                        "value": "0x0",
                        "type": "CALL"
                    }
                ],
                "value": "0x0",
                "type": "DELEGATECALL"
            }
        ],
        "value": "0x0",
        "type": "CALL"
    }
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription: "Specifies the block number to locate the transaction.",
  },
  {
    paramName: "tracer",
    type: "object",
    paramDescription: "Supports callTracer and prestateTracer.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "tracer",
        type: "string",
        paramDescription: "Default value is callTracer.",
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
      {
        paramName: "timeout",
        type: "string",
        paramDescription:
          'Specifies a custom timeout for JavaScript-based tracing calls. Default is 5 seconds, maximum is 10 seconds. Valid units are "ns", "us", "ms", "s", with optional fractions, e.g., "200ms".',
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
      "Detailed trace data for the specified transaction, including call stack, gas usage, and execution results.",
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
  "Debug detailed execution of a specific transaction",
  "Analyze smart contract interactions within a transaction",
  "Trace internal operations and calls of a transaction",
];

const CONSTRAINTS = [
  "Available only on paid tier",
  "Node must support the debug_traceTransaction method",
  "High resource usage for tracing complex transactions",
];
