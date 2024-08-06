import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getCode(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="eth_getCode"
      network="ethereum"
      cu={24}
      description={
        "Is essential for developers to inspect and verify contract code deployed on the Ethereum blockchain"
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
        "The smart contract code (EVM bytecode) stored at the specified address, returned as a hexadecimal string."
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
  --data '{"method":"eth_getCode","params":["0x5B56438000bAc5ed2c6E0c1EcFF4354aBfFaf889","latest"],"id":1,"jsonrpc":"2.0"}'
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  method: "eth_getCode",
  params: ["0x5B56438000bAc5ed2c6E0c1EcFF4354aBfFaf889", "latest"],
  id: 1,
  jsonrpc: "2.0"
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
  method: "eth_getCode",
  params: ["0x5B56438000bAc5ed2c6E0c1EcFF4354aBfFaf889", "latest"],
  id: 1,
  jsonrpc: "2.0"
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
		"method":  "eth_getCode",
		"params":  []interface{}{"0x5B56438000bAc5ed2c6E0c1EcFF4354aBfFaf889", "latest"},
		"id":      1,
		"jsonrpc": "2.0",
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
    "method": "eth_getCode",
    "params": ["0x5B56438000bAc5ed2c6E0c1EcFF4354aBfFaf889", "latest"],
    "id": 1,
    "jsonrpc": "2.0"
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
        "method": "eth_getCode",
        "params": ["0x5B56438000bAc5ed2c6E0c1EcFF4354aBfFaf889", "latest"],
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
  "result": "0x"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "address",
    type: "string",
  },
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription:
      'The block number or tag ("latest", "earliest", "pending") at which to get the balance.',
    paramEnum: [
      {
        value: "latest",
        isDefault: true,
        description: "The most recent block in the blockchain (default).",
      },
      {
        value: "safe",
        description: "A block that has been validated by the beacon chain.",
      },
      {
        value: "finalized",
        description: "a block confirmed by over two-thirds of validators",
      },
      {
        value: "earliest",
        description:
          "A block approved by more than two-thirds of the validators.",
      },
      {
        value: "pending",
        description:
          "Transactions that have been broadcast but not yet included in a block.",
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
    type: "string",
  },
];

const USE_CASES = [
  "Retrieve deployed smart contract bytecode from blockchain",
  "Retrieve bytecode for security analysis",
  "Verify contract code for upgrades",
];

const CONSTRAINTS = [
  "Requires precise contract address",
  'Limited to "latest" block state',
  "Dependent on network node availability",
];
