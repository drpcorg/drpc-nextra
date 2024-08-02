import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_estimateGas(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="eth_getEstimateGas"
      network="ethereum"
      cu={60}
      description={
        "Calculates the exact amount of gas required, optimizing transaction efficiency and preventing out-of-gas errors"
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
        "The estimated gas amount needed for the transaction, returned as a hexadecimal string."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL} \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_estimateGas",
  "params": [
    {
      "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x0",
      "gasPrice": "0x9184e72a000",
      "value": "0x0",
      "data": "0x"
    },
    {
      "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x0",
      "gasPrice": "0x9184e72a000",
      "value": "0x0",
      "data": "0x"
    }
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `
const url = '${DRPC_ENDPOINT_URL}';

const data = {
  method: "eth_estimateGas",
  params: [
    {
      from: "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
      to: "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
      value: "0x186a0"
    }
  ],
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
  method: "eth_estimateGas",
  params: [
    {
      from: "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
      to: "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
      value: "0x186a0"
    }
  ],
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
		"method": "eth_estimateGas",
		"params": []interface{}{
			map[string]interface{}{
				"from":  "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
				"to":    "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
				"value": "0x186a0",
			},
		},
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
    "method": "eth_estimateGas",
    "params": [
        {
            "from": "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
            "to": "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
            "value": "0x186a0"
        }
    ],
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
        "method": "eth_estimateGas",
        "params": [
            {
                "from": "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
                "to": "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
                "value": "0x186a0"
            }
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
  "result": "0xb1770efb14906e509893b6190359658208ae64d0c56e22f748a1b0869885559e"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transaction",
    type: "object",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "from",
        type: "string",
        paramDescription: "(optional) The sender's address.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription: "The recipient's address.",
      },
      {
        paramName: "gas",
        type: "integer",
        paramDescription: "(optional) The gas limit for the transaction.",
      },
      {
        paramName: "gasPrice",
        type: "string",
        paramDescription: "(optional) The gas price in wei.",
      },
      {
        paramName: "value",
        type: "integer",
        paramDescription: "(optional) The value sent in wei.",
      },
      {
        paramName: "data",
        type: "string",
        paramDescription: "(optional) The data sent with the transaction.",
      },
    ],
  },
  {
    paramName: "object",
    type: "object",
    paramDescription:
      "A state override set, mapping addresses to their respective states. Each address maps to an object with:",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "balance",
        type: "string",
        paramDescription:
          "Simulated balance assigned to the account prior to executing the call.",
      },
      {
        paramName: "nonce",
        type: "string",
        paramDescription:
          "Simulated nonce assigned to the account before the call.",
      },
      {
        paramName: "code",
        type: "integer",
        paramDescription: "Simulated EVM bytecode inserted into the account.",
      },
      {
        paramName: "stateDiff",
        type: "string",
        paramDescription:
          "Simulated key-value pairs to override the account's storage slots.",
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
  "Estimate the gas needed for a transaction",
  "Plan transactions to use optimal gas amounts",
  "Optimize gas usage",
];

const CONSTRAINTS = [
  "Requires valid addresses",
  "Estimates vary with network conditions",
  "Calculation depends on the node's processing speed",
];
