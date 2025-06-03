import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getTokenAccountsByDelegate() {
  return (
    <SolanaMethod
      method="getTokenAccountsByDelegate"
      network="solana"
      cu={20}
      description={"Retrieves all token accounts for which a specified delegate is authorized, assisting developers in managing delegated token activities"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the token accounts for a specified mint, including their addresses and balances, providing a snapshot of the largest holders of that token"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl ${DRPC_ENDPOINT_URL} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  --data '{"jsonrpc": "2.0","id": 1,"method": "getTokenAccountsByDelegate","params": ["4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",{"programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"encoding": "jsonParsed"}]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getTokenAccountsByDelegate",
  "params": [
    "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
    {"programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},
    {"encoding": "jsonParsed"}
  ]
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
  "id": 1,
  "method": "getTokenAccountsByDelegate",
  "params": [
    "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
    {"programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},
    {"encoding": "jsonParsed"}
  ]
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
		"id":      1,
		"method":  "getTokenAccountsByDelegate",
		"params": []interface{}{
			"4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
			map[string]interface{}{"programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},
			map[string]interface{}{"encoding": "jsonParsed"},
		},
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
    "id": 1,
    "method": "getTokenAccountsByDelegate",
    "params": [
        "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
        {"programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},
        {"encoding": "jsonParsed"}
    ]
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
        "id": 1,
        "method": "getTokenAccountsByDelegate",
        "params": [
            "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
            {"programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},
            {"encoding": "jsonParsed"}
        ]
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
    "context": {
      "slot": 98123569
    },
    "value": [
      {
        "pubkey": "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
        "account": {
          "data": {
            "parsed": {
              "info": {
                "mint": "1YDQ35V8g68FGvcT85haHwAXv1U7XMzuc4mZeEXfrjE",
                "owner": "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
                "tokenAmount": {
                  "amount": "1000000",
                  "decimals": 6,
                  "uiAmount": 1.0,
                  "uiAmountString": "1.0"
                }
              },
              "type": "account"
            },
            "program": "spl-token",
            "space": 165
          },
          "executable": false,
          "lamports": 2039280,
          "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "rentEpoch": 42
        }
      }
    ]
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "accountPublicKey",
    type: "string",
    paramDescription:
      "The public key of the account to query.",
  },
  {
    paramName: "encoding",
    type: "string",
    paramDescription: "Specifies the data encoding for the returned account information"
  },
  {
    paramName: "dataSlice",
    type: "object",
    paramDescription: "Limits the returned account data based on the specified offset and length fields. Available only for \"base58\", \"base64\", or \"base64+zstd\" encodings."
  },
  {
    paramName: "object",
    type: "object",
    childrenParamsType: "object",
    childrenParams: [
        {
          paramName: "mint",
          type: "string",
          paramDescription: "The public key of the specific token Mint, encoded in base-58 format, to restrict accounts to"
        },
        {
          paramName: "programId",
          type: "string",
          paramDescription: "The public key of the Token program ID that owns the accounts, encoded in base-58 format."
        },
    ],
  },
  {
    paramName: "commitment",
    type: "string",
    paramDescription: "The level of commitment required for the query",
    paramEnum: [
      {
        value: "finalized",
        description:
          "The node will query the most recent block confirmed by supermajority of the cluster as having reached maximum lockout, meaning the cluster has recognized this block as finalized",
      },
      {
        value: "confirmed",
        description:
          "The node will query the most recent block that has been voted on by supermajority of the cluster",
      },
      {
        value: "processed",
        description:
          "The node will query its most recent block. Note that the block may not be complete",
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
    childrenParamsType: "array",
    childrenParams: [
      {
        paramName: "context",
        type: "object",
        paramDescription: "Contains information about the current state of the program",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "slot",
            type: "integer",
            paramDescription: "The slot number used to retrieve the fee calculator.",
          },
          {
            paramName: "apiVersion",
            type: "string",
            paramDescription: "The version of the Solana RPC API being used",
          },
        ],
      },
      {
        paramName: "value",
        type: "object",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "account",
            type: "string",
            paramDescription: "The address used to store assets on the Solana blockchain.",
            childrenParamsType: "object",
            childrenParams: [
               {
                paramName: "space",
                type: "integer",
                paramDescription: "The amount of storage space required to store the token account.",
              },
              {
                paramName: "data",
                type: "string",
                paramDescription: "Encoded data to be passed to the instruction.",
                childrenParamsType: "object",
                childrenParams: [
                    {
                      paramName: "program",
                      type: "string",
                      paramDescription: "The program managing the token.",
                    },
                    {
                      paramName: "type",
                      type: "string",
                    },
                    {
                      paramName: "parsed",
                      type: "array",
                      paramDescription: "List of parsed instructions executed in the block's transactions.",
                      childrenParamsType: "array",
                      childrenParams: [
                          {
                            paramName: "delegate",
                            type: "string",
                            paramDescription: "Public address of the delegate for retrieving account tokens, encoded as base-58.",
                          },
                          {
                            paramName: "isNative",
                            type: "boolean",
                            paramDescription: "Indicates if the token is native to the Solana blockchain",
                          },
                          {
                            paramName: "mint",
                            type: "string",
                            paramDescription: "Information about the creation of new tokens",
                          },
                          {
                            paramName: "owner",
                            type: "string",
                            paramDescription: "The base-58 encoded public key of the program assigned to this account",
                          },
                          {
                            paramName: "state",
                            type: "string",
                            paramDescription: "Current state of the token account",
                          },
                          {
                            paramName: "info",
                            type: "array",
                            paramDescription: "Additional details about the transactions.",
                            childrenParamsType: "object",
                            childrenParams: [
                               {
                                paramName: "tokenAmount",
                                type: "string",
                                paramDescription: "Balance of tokens in the account.",
                              },
                              {
                                paramName: "amount",
                                type: "string",
                                paramDescription: "Raw token supply, without decimals, as a u64 integer.",
                              },
                              {
                                paramName: "decimals",
                                type: "integer",
                                paramDescription: "Number of decimal places the token uses.",
                              },
                              {
                                paramName: "uiAmount",
                                type: "string",
                                paramDescription: "Total token supply with mint-prescribed decimals (DEPRECATED).",
                              },
                              {
                                paramName: "uiAmountString",
                                type: "string",
                                paramDescription: "Total token supply as a string, with mint-prescribed decimals.",
                              },
                            ],
                          },
                          {
                            paramName: "delegateAmount",
                            type: "object",
                            paramDescription: "Configuration for delegate amount.",
                            childrenParamsType: "object",
                            childrenParams: [
                               {
                                paramName: "tokenAmount",
                                type: "string",
                                paramDescription: "Balance of tokens in the account.",
                              },
                              {
                                paramName: "amount",
                                type: "string",
                                paramDescription: "Raw token supply, without decimals, as a u64 integer.",
                              },
                              {
                                paramName: "decimals",
                                type: "integer",
                                paramDescription: "Number of decimal places the token uses.",
                              },
                              {
                                paramName: "uiAmount",
                                type: "string",
                                paramDescription: "Total token supply with mint-prescribed decimals (DEPRECATED).",
                              },
                              {
                                paramName: "uiAmountString",
                                type: "string",
                                paramDescription: "Total token supply as a string, with mint-prescribed decimals.",
                              },
                            ],
                          },
                      ],
                    },
                ],
              },
            ],
          },
          {
            paramName: "owner",
            type: "string",
            paramDescription: "Base-58 encoded public key of the program assigned to this account",
          },
          {
            paramName: "data",
            type: "string",
            paramDescription: "Data associated with the account, either as encoded binary data or in JSON format, depending on the specified encoding. Format: [data, encoding] or JSON object",
          },
          {
            paramName: "executable",
            type: "boolean",
            paramDescription: "dicates if the account contains a program and is read-only.",
          },
          {
            paramName: "rentEpoch",
            type: "integer",
            paramDescription: "The epoch at which this account will next owe rent.",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve token accounts associated with a specific delegate",
  "Monitor delegated token accounts for management purposes",
  "Analyze tokens controlled by delegates for auditing",
];

const CONSTRAINTS = [
  "Limited to accounts linked to the specified delegate",
  "Requires accurate and up-to-date network data",
  "API rate limits may impact data retrieval frequency",
];
