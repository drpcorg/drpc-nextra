import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_tx_search() {
  return (
    <CosmosMethod
      method="tx_search"
      network="Cosmos"
      cu={20}
      description={"Retrieves how to search for transactions"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Containing the list of transactions that match the search query"
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
    "method": "tx_search",
    "params": ["YOUR_QUERY", PROVE, "1", "30", "ORDER_BY"],
    "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "tx_search",
  "params": [
    "YOUR_QUERY",
    PROVE,
    "1",
    "30",
    "ORDER_BY"
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
  "method": "tx_search",
  "params": [
    "YOUR_QUERY",
    PROVE,
    "1",
    "30",
    "ORDER_BY"
  ],
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
		"method":  "tx_search",
		"params":  []interface{}{
			"YOUR_QUERY",
			PROVE,
			"1",
			"30",
			"ORDER_BY",
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

url = '${DRPC_ENDPOINT_URL}'
headers = {
    'Content-Type': 'application/json'
}

data = {
    "jsonrpc": "2.0",
    "method": "tx_search",
    "params": [
        "YOUR_QUERY",
        PROVE,
        "1",
        "30",
        "ORDER_BY"
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
    let url = "${DRPC_ENDPOINT_URL}";

    let request_body = json!({
        "jsonrpc": "2.0",
        "method": "tx_search",
        "params": [
            "YOUR_QUERY",
            PROVE,
            "1",
            "30",
            "ORDER_BY"
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
    "txs": [
      {
        "hash": "0x29452510AC68D7C63E3B45024BE446DB03A3CFCC595AA88723C4DE4C8DB57956",
        "height": "20431584",
        "index": 0,
        "tx_result": {
          "code": 0,
          "log": "Transaction processed successfully",
          "info": "",
          "gas_wanted": "200000",
          "gas_used": "150000",
          "events": [
            {
              "type": "transfer",
              "attributes": [
                {
                  "key": "sender",
                  "value": "cosmos1..."
                },
                {
                  "key": "recipient",
                  "value": "cosmos1..."
                },
                {
                  "key": "amount",
                  "value": "1000uatom"
                }
              ]
            }
          ]
        },
        "tx": "Base64-encoded transaction data"
      }
    ],
    "total_count": 1
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
      paramName: "query",
      type: "string",
      paramDescription: "The search query to filter transactions. The query string can include conditions based on transaction attributes."
    },
    {
      paramName: "prove",
      type: "boolean",
      paramDescription: "Indicates whether a proof of the transactions should be included in the response. If true, Merkle proofs are provided."
    },
    {
      paramName: "page",
      type: "integer",
      paramDescription: "The page number to retrieve in a paginated result set."
    },
    {
      paramName: "per_page",
      type: "integer",
      paramDescription: "The number of transactions to display per page in a paginated result set."
    },
    {
      paramName: "order_by",
      type: "string",
      paramDescription: "The order in which to sort the transactions. Valid values are 'asc' for ascending and 'desc' for descending."
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
        paramName: "total_count",
        type: "integer",
        paramDescription: "The total number of transactions that match the search criteria."
      },
      {
        paramName: "txs",
        type: "array",
        paramDescription: "An array of transactions that match the search criteria.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "hash",
            type: "string",
            paramDescription: "The hash of the transaction."
          },
          {
            paramName: "height",
            type: "string",
            paramDescription: "The block height at which the transaction was included."
          },
          {
            paramName: "index",
            type: "integer",
            paramDescription: "The index of the transaction within the block."
          },
          {
            paramName: "tx_result",
            type: "object",
            paramDescription: "The result of executing the transaction, including logs, codes, and gas information.",
            childrenParams: [
              {
                paramName: "code",
                type: "integer",
                paramDescription: "The response code indicating the result of the transaction execution. A code of 0 indicates success."
              },
              {
                paramName: "data",
                type: "string",
                paramDescription: "Any data returned by the transaction execution."
              },
              {
                paramName: "log",
                type: "string",
                paramDescription: "The log output from the transaction execution, providing details about events and messages."
              },
              {
                paramName: "info",
                type: "string",
                paramDescription: "Additional information related to the transaction execution."
              },
              {
                paramName: "gas_wanted",
                type: "string",
                paramDescription: "The amount of gas requested by the transaction."
              },
              {
                paramName: "gas_used",
                type: "string",
                paramDescription: "The amount of gas actually used by the transaction."
              },
              {
                paramName: "events",
                type: "array",
                paramDescription: "An array of events emitted by the transaction during execution.",
                childrenParamsType: "object",
                childrenParams: [
                  {
                    paramName: "type",
                    type: "string",
                    paramDescription: "The type of event emitted."
                  },
                  {
                    paramName: "attributes",
                    type: "array",
                    paramDescription: "Key-value pairs providing additional information about the event.",
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
                paramDescription: "The namespace for the error code, if any."
              }
            ]
          },
          {
            paramName: "tx",
            type: "object",
            paramDescription: "The actual transaction data, typically encoded in base64.",
            childrenParams: [
              {
                paramName: "type",
                type: "string",
                paramDescription: "The type of the transaction."
              },
              {
                paramName: "value",
                type: "object",
                paramDescription: "The transaction's value, which includes all its fields and data."
              }
            ]
          },
          {
            paramName: "proof",
            type: "object",
            paramDescription: "The Merkle proof for the transaction, included if requested.",
            childrenParams: [
              {
                paramName: "root_hash",
                type: "string",
                paramDescription: "The root hash of the Merkle tree for the block."
              },
              {
                paramName: "data",
                type: "string",
                paramDescription: "The transaction data used in the Merkle proof."
              },
              {
                paramName: "proof",
                type: "object",
                paramDescription: "Details of the proof structure, including the hashes and paths used to verify the transaction's inclusion.",
                childrenParams: [
                  {
                    paramName: "total",
                    type: "string",
                    paramDescription: "The total number of leaf nodes in the Merkle tree."
                  },
                  {
                    paramName: "index",
                    type: "string",
                    paramDescription: "The index of the transaction within the Merkle tree."
                  },
                  {
                    paramName: "leaf_hash",
                    type: "string",
                    paramDescription: "The hash of the transaction leaf node."
                  },
                  {
                    paramName: "aunts",
                    type: "array",
                    paramDescription: "The sibling hashes on the path from the transaction leaf to the root.",
                    childrenParamsType: "string"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Search for transactions using custom query criteria",
  "Retrieve transaction details based on specific conditions",
  "Analyze transaction outcomes and associated events",
];

const CONSTRAINTS = [
  "Query syntax must be accurate",
  "Results may vary depending on prove flag",
  "Search results are limited to specified range",
];
