import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_broadcast_tx_commit() {
  return (
    <CosmosMethod
      method="broadcast_tx_commit"
      network="Cosmos"
      cu={20}
      description={"Retrieves how to broadcast and commit transactions"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="string"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains the result of the transaction broadcast"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
   {
    language: "shell",
    code: () => `curl --location '${DRPC_ENDPOINT_URL}' \\
--header 'Content-Type: application/json' \\
--data '{
    "jsonrpc": "2.0",
    "method": "broadcast_tx_commit",
    "params": ["YOUR_TRANSACTION"],
    "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "broadcast_tx_commit",
  "params": ["YOUR_TRANSACTION"],
  "id": 1
});

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: data
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const https = require('https');

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "broadcast_tx_commit",
  "params": ["YOUR_TRANSACTION"],
  "id": 1
});

const options = {
  hostname: '${DRPC_ENDPOINT_URL}',
  path: '',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, res => {
  let responseData = '';

  res.on('data', chunk => {
    responseData += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(responseData));
  });
});

req.on('error', error => {
  console.error('Error:', error);
});

req.write(data);
req.end();
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

	requestBody, err := json.Marshal(map[string]interface{}{
		"jsonrpc": "2.0",
		"method":  "broadcast_tx_commit",
		"params":  []interface{}{"YOUR_TRANSACTION"},
		"id": 1,
	})

	if err != nil {
		fmt.Println("Error marshaling JSON:", err)
		return
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(requestBody))
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
headers = {
    'Content-Type': 'application/json'
}

data = {
    "jsonrpc": "2.0",
    "method": "broadcast_tx_commit",
    "params": ["YOUR_TRANSACTION"],
    "id": 1
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;
use tokio;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let url = "${DRPC_ENDPOINT_URL}";

    let request_body = json!({
        "jsonrpc": "2.0",
        "method": "broadcast_tx_commit",
        "params": ["YOUR_TRANSACTION"],
        "id": 1
    });

    let response = client.post(url)
        .json(&request_body)
        .send()
        .await?;

    let response_text = response.text().await?;
    println!("{}", response_text);

    Ok(())
}
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "result": {
    "check_tx": {
      "code": 0,
      "data": "CHECK_TX_DATA",
      "log": "CheckTx passed successfully",
      "info": "",
      "gas_wanted": "200000",
      "gas_used": "150000",
      "events": [],
      "codespace": ""
    },
    "deliver_tx": {
      "code": 0,
      "data": "DELIVER_TX_DATA",
      "log": "DeliverTx passed successfully",
      "info": "",
      "gas_wanted": "200000",
      "gas_used": "150000",
      "events": [],
      "codespace": ""
    },
    "hash": "TX_HASH",
    "height": "100000"
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
      paramName: "tx",
      type: "string",
      paramDescription: "The encoded transaction to be broadcast. The transaction should be base64 encoded."
    }
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
        paramName: "check_tx",
        type: "object",
        paramDescription: "The result of the CheckTx phase, which checks the transaction's validity.",
        childrenParams: [
          {
            paramName: "code",
            type: "integer",
            paramDescription: "The response code of the CheckTx phase. A code of 0 indicates success."
          },
          {
            paramName: "data",
            type: "string",
            paramDescription: "Any data returned from the CheckTx phase."
          },
          {
            paramName: "log",
            type: "string",
            paramDescription: "The log output from the CheckTx phase."
          },
          {
            paramName: "info",
            type: "string",
            paramDescription: "Additional information about the CheckTx phase."
          },
          {
            paramName: "gas_wanted",
            type: "string",
            paramDescription: "The amount of gas requested for the transaction during the CheckTx phase."
          },
          {
            paramName: "gas_used",
            type: "string",
            paramDescription: "The amount of gas actually used by the transaction during the CheckTx phase."
          },
          {
            paramName: "events",
            type: "array",
            paramDescription: "A list of events triggered during the CheckTx phase.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "type",
                type: "string",
                paramDescription: "The type of event triggered."
              },
              {
                paramName: "attributes",
                type: "array",
                paramDescription: "Attributes associated with the event.",
                childrenParamsType: "object",
                childrenParams: [
                  {
                    paramName: "key",
                    type: "string",
                    paramDescription: "The key of the attribute."
                  },
                  {
                    paramName: "value",
                    type: "string",
                    paramDescription: "The value of the attribute."
                  }
                ]
              }
            ]
          },
          {
            paramName: "codespace",
            type: "string",
            paramDescription: "The namespace for the error code, if any, during the CheckTx phase."
          }
        ]
      },
      {
        paramName: "deliver_tx",
        type: "object",
        paramDescription: "The result of the DeliverTx phase, where the transaction is executed.",
        childrenParams: [
          {
            paramName: "code",
            type: "integer",
            paramDescription: "The response code of the DeliverTx phase. A code of 0 indicates success."
          },
          {
            paramName: "data",
            type: "string",
            paramDescription: "Any data returned from the DeliverTx phase."
          },
          {
            paramName: "log",
            type: "string",
            paramDescription: "The log output from the DeliverTx phase."
          },
          {
            paramName: "info",
            type: "string",
            paramDescription: "Additional information about the DeliverTx phase."
          },
          {
            paramName: "gas_wanted",
            type: "string",
            paramDescription: "The amount of gas requested for the transaction during the DeliverTx phase."
          },
          {
            paramName: "gas_used",
            type: "string",
            paramDescription: "The amount of gas actually used by the transaction during the DeliverTx phase."
          },
          {
            paramName: "events",
            type: "array",
            paramDescription: "A list of events triggered during the DeliverTx phase.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "type",
                type: "string",
                paramDescription: "The type of event triggered."
              },
              {
                paramName: "attributes",
                type: "array",
                paramDescription: "Attributes associated with the event.",
                childrenParamsType: "object",
                childrenParams: [
                  {
                    paramName: "key",
                    type: "string",
                    paramDescription: "The key of the attribute."
                  },
                  {
                    paramName: "value",
                    type: "string",
                    paramDescription: "The value of the attribute."
                  }
                ]
              }
            ]
          },
          {
            paramName: "codespace",
            type: "string",
            paramDescription: "The namespace for the error code, if any, during the DeliverTx phase."
          }
        ]
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription: "The transaction hash, which is unique for each transaction."
      },
      {
        paramName: "height",
        type: "string",
        paramDescription: "The height of the block that included this transaction."
      }
    ]
  }
];

const USE_CASES = [
  "Broadcast and confirm transaction within the same request",
  "Ensure transaction is included in the blockchain",
  "Validate transaction execution and get immediate feedback",
];

const CONSTRAINTS = [
  "Increased latency due to immediate commit",
  "Possible higher resource consumption on nodes",
  "Transaction could fail after initial check",
];
