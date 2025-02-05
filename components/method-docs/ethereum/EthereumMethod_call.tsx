import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_call(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="eth_call"
      network="ethereum"
      cu={21}
      description={
        "Performs a message call instantly without recording it as a transaction on the blockchain"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_objects"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={"The result of the call."}
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl ${DRPC_ENDPOINT_URL} \\
--request POST \\
--header "Content-Type: application/json" \\
--data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_call",
  "params": [
    "0x10F558C",
    {
      "from": "0x4B275BDea1cA622256ebb8B15B51861b52703d16",
      "to": "0xa62894D5196bC44e4C3978400Ad07E7b30352372",
      "gas": "0x13880",
      "gasPrice": "0x4B3ECF6D4",
      "data": "0xa9059cbb0000000000000000000000007422172afc6ea4da9c011e87b7cb002d55b754430000000000000000000000000000000000000000000000000c7d713b0e3f3600"
    },
    {"0x4B275BDea1cA622256ebb8B15B51861b52703d16":{
      "balance": "0x277BFC44534B0000"
    }}
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  id: 1,
  jsonrpc: "2.0",
  method: "eth_call",
  params: [
    "0x10F558C",
    {
      from: "0x4B275BDea1cA622256ebb8B15B51861b52703d16",
      to: "0xa62894D5196bC44e4C3978400Ad07E7b30352372",
      gas: "0x13880",
      gasPrice: "0x4B3ECF6D4",
      data: "0xa9059cbb0000000000000000000000007422172afc6ea4da9c011e87b7cb002d55b754430000000000000000000000000000000000000000000000000c7d713b0e3f3600"
    },
    {
      "0x4B275BDea1cA622256ebb8B15B51861b52703d16": {
        balance: "0x277BFC44534B0000"
      }
    }
  ]
};

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(console.log)
  .catch(console.error);
`,
  },
  {
    language: "node",
    code: () => `const fetch = require('node-fetch');

const url = '${DRPC_ENDPOINT_URL}';

const data = {
  id: 1,
  jsonrpc: "2.0",
  method: "eth_call",
  params: [
    "0x10F558C",
    {
      from: "0x4B275BDea1cA622256ebb8B15B51861b52703d16",
      to: "0xa62894D5196bC44e4C3978400Ad07E7b30352372",
      gas: "0x13880",
      gasPrice: "0x4B3ECF6D4",
      data: "0xa9059cbb0000000000000000000000007422172afc6ea4da9c011e87b7cb002d55b754430000000000000000000000000000000000000000000000000c7d713b0e3f3600"
    },
    {
      "0x4B275BDea1cA622256ebb8B15B51861b52703d16": {
        balance: "0x277BFC44534B0000"
      }
    }
  ]
};

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(console.log)
  .catch(console.error);
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
  "id":      1,
  "jsonrpc": "2.0",
  "method":  "eth_call",
  "params": []interface{}{
  "0x10F558C",
    map[string]string{
      "from":     "0x4B275BDea1cA622256ebb8B15B51861b52703d16",
      "to":       "0xa62894D5196bC44e4C3978400Ad07E7b30352372",
      "gas":      "0x13880",
      "gasPrice": "0x4B3ECF6D4",
      "data":     "0xa9059cbb0000000000000000000000007422172afc6ea4da9c011e87b7cb002d55b754430000000000000000000000000000000000000000000000000c7d713b0e3f3600",
    },
    map[string]interface{}{
      "0x4B275BDea1cA622256ebb8B15B51861b52703d16": map[string]string{
          "balance": "0x277BFC44534B0000",
      },
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

url = '${DRPC_ENDPOINT_URL}'

ddata = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_call",
    "params": [
        "0x10F558C",
        {
            "from": "0x4B275BDea1cA622256ebb8B15B51861b52703d16",
            "to": "0xa62894D5196bC44e4C3978400Ad07E7b30352372",
            "gas": "0x13880",
            "gasPrice": "0x4B3ECF6D4",
            "data": "0xa9059cbb0000000000000000000000007422172afc6ea4da9c011e87b7cb002d55b754430000000000000000000000000000000000000000000000000c7d713b0e3f3600"
        },
        {
            "0x4B275BDea1cA622256ebb8B15B51861b52703d16": {
                "balance": "0x277BFC44534B0000"
            }
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
    let url = "${DRPC_ENDPOINT_URL}";

    et payload = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_call",
        "params": [
            "0x10F558C",
            {
                "from": "0x4B275BDea1cA622256ebb8B15B51861b52703d16",
                "to": "0xa62894D5196bC44e4C3978400Ad07E7b30352372",
                "gas": "0x13880",
                "gasPrice": "0x4B3ECF6D4",
                "data": "0xa9059cbb0000000000000000000000007422172afc6ea4da9c011e87b7cb002d55b754430000000000000000000000000000000000000000000000000c7d713b0e3f3600"
            },
            {
                "0x4B275BDea1cA622256ebb8B15B51861b52703d16": {
                    "balance": "0x277BFC44534B0000"
                }
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
  "result": "0xb1770efb14906e509893b6190359658208ae64d0c56e22f748a1b0869885559e"
}`;

const REQUEST_PARAMS: RequestParamProp = [
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
    paramName: "transaction",
    type: "object",
    paramDescription:
      "The transaction call object which contains the following fields.",
    childrenParamsType: "object",
    childrenParams: [

      {
        paramName: "from",
        type: "string",
        paramDescription: "(optional) Sender's address.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription: "Recipient's address.",
      },
      {
        paramName: "gas",
        type: "integer",
        paramDescription: "(optional) Gas limit for the transaction.",
      },
      {
        paramName: "gasPrice",
        type: "integer",
        paramDescription: "(optional) Gas price in wei.",
      },
      {
        paramName: "value",
        type: "integer",
        paramDescription: "(optional) Amount of wei to send.",
      },
      {
        paramName: "data",
        type: "string",
        paramDescription: "(optional) Encoded method signature and parameters.",
      },
    ],
  },
  {
    paramName: "State Override",
    type: "object",
    paramDescription:
      "Tenables temporary modifications to a contract’s state for a specific call without altering the actual contract. Each address maps to an object containing:",
    childrenParamsType: "object",
    childrenParams: [

      {
        paramName: "balance",
        type: "string",
        paramDescription: "Specifies a temporary balance for the account before executing the call.",
      },
      {
        paramName: "nonce",
        type: "string",
        paramDescription: "Sets a temporary nonce for the account before executing the call.",
      },
      {
        paramName: "code",
        type: "string",
        paramDescription: "(Injects temporary EVM bytecode into the account before executing the call.",
      },
      {
        paramName: "state",
        type: "object",
        paramDescription: "Replaces all storage slots of the account with specified key-value pairs before executing the call.",
      },
      {
        paramName: "stateDiff",
        type: "integer",
        paramDescription: "Modifies specific storage slots in the account while keeping the rest unchanged before executing the call.",
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
  "Simulate contract function execution without blockchain state change",
  "Retrieve return values from smart contract functions",
  "Estimate gas usage for contract function calls",
];

const CONSTRAINTS = [
  "Starting from Geth 1.9.13, eth_call checks the sender's " +
    " " +
    "balance to ensure sufficient gas for execution if either:" +
    " " +
    "The gas_price parameter is populated," +
    " " +
    "the contract function modifies the blockchain state.",
  "In these cases, the from address must have enough gas as if" +
    "executing a write transaction, even though eth_call itself doesn't consume gas.",
];
