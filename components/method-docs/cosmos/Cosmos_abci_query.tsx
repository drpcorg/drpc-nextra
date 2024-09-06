import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_abci_query() {
  return (
    <CosmosMethod
      method="abci_query"
      network="Cosmos"
      cu={20}
      description={"Performs precise queries on the Cosmos blockchain"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Queries specific information from the Cosmos blockchain"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --location '${DRPC_ENDPOINT_URL_COSMOS}' \\
--header 'Content-Type: application/json' \\
--data '{
    "jsonrpc": "2.0",
    "method": "abci_query",
    "params": [
        "PATH_VALUE",
        "DATA_VALUE",
        HEIGHT,
        true
    ],
    "id": 1
}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_COSMOS}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "abci_query",
  "params": [
    "PATH_VALUE",
    "DATA_VALUE",
    HEIGHT,
    true
  ],
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
  "method": "abci_query",
  "params": [
    "PATH_VALUE",
    "DATA_VALUE",
    HEIGHT,
    true
  ],
  "id": 1
});

const options = {
  hostname: '${DRPC_ENDPOINT_URL_COSMOS}',
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
	url := "${DRPC_ENDPOINT_URL_COSMOS}"

	requestBody, err := json.Marshal(map[string]interface{}{
		"jsonrpc": "2.0",
		"method":  "abci_query",
		"params": []interface{}{
			"PATH_VALUE",
			"DATA_VALUE",
			HEIGHT,
			true,
		},
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

url = '${DRPC_ENDPOINT_URL_COSMOS}'
headers = {
    'Content-Type': 'application/json'
}

data = {
    "jsonrpc": "2.0",
    "method": "abci_query",
    "params": [
        "PATH_VALUE",
        "DATA_VALUE",
        HEIGHT,
        True
    ],
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
    let url = "${DRPC_ENDPOINT_URL_COSMOS}";

    let request_body = json!({
        "jsonrpc": "2.0",
        "method": "abci_query",
        "params": [
            "PATH_VALUE",
            "DATA_VALUE",
            HEIGHT,
            true
        ],
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
    "response": {
      "code": 0,
      "log": "",
      "info": "",
      "index": "0",
      "key": "data",
      "value": "value",
      "proof": {
        "ops": [
          {
            "type": "iavl:v",
            "key": "data",
            "data": "proof_data"
          }
        ]
      },
      "height": "1234567",
      "codespace": ""
    }
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
      paramName: "path",
      type: "string",
      paramDescription:
        "The specific path to the data you want to query.",
    },
    {
      paramName: "data",
      type: "string",
      paramDescription:
        "The data you want to query for, usually a key or identifier.",
    },
    {
      paramName: "height",
      type: "integer",
      paramDescription:
        "The block height at which to perform the query. Setting this to 0 queries the latest block.",
    },
    {
      paramName: "prove",
      type: "boolean",
      paramDescription:
        "If set to true, it adds proof of the transaction's inclusion in the block. The default value is false.",
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
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "error",
        type: "object",
        paramDescription: "If there's an error with the query, this field will provide details.",
      },
      {
        paramName: "response",
        type: "string",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "log",
            type: "string",
            paramDescription: "Status log of the requested data.",
          },
          {
            paramName: "height",
            type: "string",
            paramDescription: "Height of the block where the data resides.",
          },
          {
            paramName: "proof",
            type: "string",
            paramDescription: "Proof of the existence of the data if prove is true.",
          },
          {
            paramName: "value",
            type: "string",
            paramDescription: "The value associated with the key.",
          },
          {
            paramName: "key",
            type: "string",
            paramDescription: "The key of the requested data.",
          },
          {
            paramName: "index",
            type: "integer",
            paramDescription: "Index of the requested data.",
          },
          {
            paramName: "code",
            type: "string",
            paramDescription: "Error code if any.",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Query specific data on the ABCI application using a path",
  "Retrieve historical data from a specific block height",
  "Verify the integrity of the data using proofs",
];

const CONSTRAINTS = [
  "Network latency can delay data retrieval",
  "Requires access to a Cosmos RPC endpoint",
  "Data may change frequently depending on network activity",
];
