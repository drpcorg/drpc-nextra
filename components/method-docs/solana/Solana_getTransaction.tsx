import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getTransaction() {
  return (
    <SolanaMethod
      method="getTransaction"
      network="solana"
      cu={20}
      description={"Retrieves detailed information about a specific transaction, including its status and metadata"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains detailed information about the transaction"
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
  --data '{"jsonrpc": "2.0","id": 1,"method": "getTransaction","params": ["D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff",{"encoding": "jsonParsed","maxSupportedTransactionVersion":0}]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getTransaction",
  "params": [
    "D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff",
    {"encoding": "jsonParsed", "maxSupportedTransactionVersion": 0}
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
  "method": "getTransaction",
  "params": [
    "D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff",
    {"encoding": "jsonParsed", "maxSupportedTransactionVersion": 0}
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
		"method":  "getTransaction",
		"params": []interface{}{
			"D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff",
			map[string]interface{}{"encoding": "jsonParsed", "maxSupportedTransactionVersion": 0},
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
    "method": "getTransaction",
    "params": [
        "D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff",
        {"encoding": "jsonParsed", "maxSupportedTransactionVersion": 0}
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
        "method": "getTransaction",
        "params": [
            "D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff",
            {"encoding": "jsonParsed", "maxSupportedTransactionVersion": 0}
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
    "slot": 98123569,
    "meta": {
      "err": null,
      "fee": 5000,
      "preBalances": [
        1000000,
        5000
      ],
      "postBalances": [
        995000,
        0
      ],
      "innerInstructions": [],
      "logMessages": [],
      "preTokenBalances": [],
      "postTokenBalances": [],
      "rewards": [],
      "loadedAddresses": {
        "writable": [],
        "readonly": []
      }
    },
    "transaction": {
      "signatures": [
        "5f84uRa5xsJv7iyzVfXTXQJ7ySskAqYYeXYaz5VUKxf2FLVzFfcs8QePFE3yQieYMDm4K8F1wfwStP6dTrY7gjvZ"
      ],
      "message": {
        "accountKeys": [
          {
            "pubkey": "9vNYXEehFV8V1jxzjH7Sv3BBtsYZ92HPKYP1stgNGHJE",
            "signer": true,
            "writable": true
          },
          {
            "pubkey": "HUNMbn6FnUDoFmrATKUkq3GjSRjWX4ytkX4nvP7XNYfH",
            "signer": false,
            "writable": true
          }
        ],
        "instructions": [],
        "recentBlockhash": "8LiyWuxtdHEH7ik6u1E5yy8TP4Fm1ZJdN6K8zmrtyjsW"
      }
    }
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "tx_sig",
    type: "string",
    paramDescription:
      "The transaction signature encoded in base-58 format",
  },
  {
    paramName: "maxSupportedTransactionVersion",
    type: "string",
    paramDescription:
      "The highest transaction version to return in responses. If a block contains a higher version, an error is returned. If omitted, only legacy transactions are returned, and blocks with versioned transactions will cause an error.",
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
          paramName: "blockTime",
          type: "int64",
          paramDescription: "The timestamp of the block. null indicates that the time is not available."
        },
        {
          paramName: "version",
          type: "number",
          paramDescription: "The version of the transaction. It is undefined if maxSupportedTransactionVersion was not set in the request parameters."
        },
        {
          paramName: "parentSlot",
          type: "integer",
          paramDescription: "The slot number of the parent block."
        },
        {
          paramName: "slot",
          type: "string",
          paramDescription: "The slot number in which the transaction was processed."
        },
        {
          paramName: "transactions",
          type: "array_of_objects",
          paramDescription: "A list of transactions included in the block.",
          childrenParamsType: "object",
          childrenParams: [
              {
                paramName: "meta",
                type: "object",
                paramDescription: "Metadata about the transaction",
                childrenParamsType: "object",
                childrenParams: [
                    {
                      paramName: "err",
                      type: "object",
                      paramDescription: "Error information, null if no error."
                    },
                    {
                      paramName: "fee",
                      type: "uint64",
                      paramDescription: "Transaction fee in lamports."
                    },
                    {
                      paramName: "innerInstructions",
                      type: "array",
                      paramDescription: "List of inner instructions.",
                      childrenParamsType: "object",
                      childrenParams: [
                        {
                          paramName: "index",
                          type: "integer",
                          paramDescription: "Specifies the order in which the instruction was executed within the transaction."
                        },
                        {
                          paramName: "program",
                          type: "string",
                          paramDescription: "Data associated with the program executed in the block's transactions."
                        },
                        {
                          paramName: "programId",
                          type: "string",
                          paramDescription: "The ID of the program that executed the instruction."
                        },
                        {
                          paramName: "stackHeight",
                          type: "string",
                          paramDescription: "The current depth of the execution stack."
                        },
                        {
                          paramName: "instructions",
                          type: "array",
                          paramDescription: "A list of instructions executed within the block's transactions.",
                          childrenParamsType: "object",
                          childrenParams: [
                              {
                                paramName: "parsed",
                                type: "array",
                                paramDescription: "A list of instructions parsed and executed within the block's transactions.",
                                childrenParamsType: "object",
                                childrenParams: [
                                    {
                                        paramName: "info",
                                        type: "array",
                                        paramDescription: "Additional details about the transactions within the block",
                                        childrenParamsType: "object",
                                        childrenParams: [
                                            {
                                              paramName: "lamports",
                                              type: "int64",
                                              paramDescription: "The number of lamports (smallest unit of SOL) assigned to this account.",
                                            },
                                            {
                                              paramName: "owner",
                                              type: "string",
                                              paramDescription: "Base-58 encoded public key of the program assigned to this account",
                                            },
                                            {
                                              paramName: "newAccount",
                                              type: "string",
                                              paramDescription: "The new account created as part of the transaction.",
                                            },
                                            {
                                              paramName: "executable",
                                              type: "string",
                                              paramDescription: "dicates if the account contains a program and is read-only.",
                                            },
                                            {
                                              paramName: "source",
                                              type: "string",
                                              paramDescription: "The source account that funded the transaction.",
                                            },
                                            {
                                              paramName: "space",
                                              type: "integer",
                                              paramDescription: "The storage space required for the transaction.",
                                            },
                                            {
                                              paramName: "source",
                                              type: "string",
                                              paramDescription: "The type of block, used to differentiate between regular and special blocks like snapshots or transaction confirmations",
                                            },
                                        ],
                                      },
                                ],
                              },
                          ],
                        },
                      ]
                    },
                    {
                      paramName: "logMessages",
                      type: "array",
                      paramDescription: "Log messages from the transaction execution."
                    },
                    {
                      paramName: "postBalances",
                      type: "array",
                      paramDescription: "Balances of accounts after the transaction."
                    },
                    {
                      paramName: "postTokenBalances",
                      type: "array",
                      paramDescription: "Token balances of accounts after the transaction"
                    },
                    {
                      paramName: "preBalances",
                      type: "array",
                      paramDescription: "TBalances of accounts before the transaction."
                    },
                    {
                      paramName: "preTokenBalances",
                      type: "array",
                      paramDescription: "Token balances of accounts before the transaction"
                    },
                    {
                      paramName: "status",
                      type: "array",
                    },
                    {
                      paramName: "loadedAddresses",
                      type: "object",
                      paramDescription: "Addresses loaded from address lookup tables for the transaction. This is undefined if maxSupportedTransactionVersion was not specified in the request parameters.",
                      childrenParamsType: "array_of_arrays_of_strings",
                      childrenParams: [
                          {
                            paramName: "writable",
                            type: "array_of_strings",
                          },
                          {
                            paramName: "readonly",
                            type: "array_of_strings",
                          },
                      ],
                    },
                ],
              },
              {
                paramName: "logMessages",
                type: "array",
                paramDescription: "A list of log messages generated by the block's transactions, not included if inner instruction recording is disabled",
              },
              {
                paramName: "postBalances",
                type: "array",
                paramDescription: "Lamport balances for each account in the block after processing the transactions.",
              },
              {
                paramName: "postTokenBalances",
                type: "array",
                paramDescription: "Token balances for each token account in the block after processing the transactions, omitted if inner instruction recording is disabled",
                childrenParamsType: "object",
                childrenParams: [
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
                            paramName: "accountIndex",
                            type: "integer",
                            paramDescription: "The position of an account within a transaction.",
                          },
                ],
              },
              {
                paramName: "uiTokenAmount",
                type: "object",
                childrenParamsType: "object",
                childrenParams: [
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
                paramName: "preBalances",
                type: "array",
                paramDescription: "Lamport balances for each account in the block before processing the transactions.",
              },
              {
                paramName: "preTokenBalances",
                type: "array",
                paramDescription: "Token balances for each token account in the block before processing the transactions, omitted if inner instruction recording is disabled",
                childrenParamsType: "object",
                childrenParams: [
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
                            paramName: "accountIndex",
                            type: "integer",
                            paramDescription: "The position of an account within a transaction.",
                          },
                ],
              },
              {
                paramName: "uiTokenAmount",
                type: "object",
                childrenParamsType: "object",
                childrenParams: [
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
                paramName: "rewards",
                type: "boolean",
                paramDescription: " Indicates whether to include the rewards array",
              },
              {
                paramName: "status",
                type: "boolean",
              },
          ],
        },
        {
          paramName: "signatures",
          type: "array",
        },
        {
          paramName: "transaction",
          type: "object",
          paramDescription: "The transaction object, which can be in JSON format or encoded binary data, depending on the specified encoding.",
          childrenParamsType: "object",
          childrenParams: [
              {
                paramName: "recentBlockHash",
                type: "string",
              },
              {
                paramName: "message",
                type: "array",
                paramDescription: "A list of transactions included in the block.",
                childrenParamsType: "object",
                childrenParams: [
                    {
                      paramName: "program",
                      type: "string",
                      paramDescription: "Data associated with the program executed in the block's transactions.",
                    },
                    {
                      paramName: "programID",
                      type: "string",
                      paramDescription: "The ID of the program that executed the instruction.",
                    },
                    {
                      paramName: "accountKeys",
                      type: "array",
                      paramDescription: "A list of public keys for accounts accessed during transaction execution in the block.",
                      childrenParamsType: "object",
                      childrenParams: [
                          {
                            paramName: "pubkey",
                            type: "string",
                            paramDescription: "The public key of the program, encoded in base-58.",
                          },
                          {
                            paramName: "signer",
                            type: "string",
                            paramDescription: "Used to sign transactions in the block and to verify the authenticity of signatures.",
                          },
                          {
                            paramName: "source",
                            type: "string",
                            paramDescription: "The account that funded the transaction.",
                          },
                          {
                            paramName: "writable",
                            type: "boolean",
                            paramDescription: " Indicates whether the accounts associated with the given public keys were modified by the transactions.",
                          },
                      ],
                    },
                    {
                      paramName: "instructions",
                      type: "array",
                      paramDescription: "A list of instructions executed within the block's transactions.",
                      childrenParamsType: "array",
                      childrenParams: [
                          {
                            paramName: "type",
                            type: "string",
                            paramDescription: "The type of block, distinguishing between regular blocks and special blocks such as snapshot or transaction confirmation blocks.",
                          },
                          {
                            paramName: "parsed",
                            type: "array",
                            paramDescription: "A list of parsed instructions executed within the block's transactions.",
                            childrenParamsType: "array",
                            childrenParams: [
                                {
                                  paramName: "info",
                                  type: "array",
                                  paramDescription: "Additional details about the transactions within the block.",
                                  childrenParamsType: "array",
                                  childrenParams: [
                                    {
                                      paramName: "account",
                                      type: "string",
                                      paramDescription: "An address on the Solana blockchain used to store assets",
                                    },
                                    {
                                      paramName: "mint",
                                      type: "object",
                                      paramDescription: "Information about the creation of new tokens.",
                                    },
                                    {
                                      paramName: "systemProgram",
                                      type: "string",
                                      paramDescription: "The system program that executed the transaction.",
                                    },
                                    {
                                      paramName: "tokenProgram",
                                      type: "object",
                                      paramDescription: "Manages the supply and balance of the token and executes transfers between accounts.",
                                    },
                                    {
                                      paramName: "wallet",
                                      type: "object",
                                      paramDescription: " Used for managing and storing assets",
                                    },
                                  ],
                                },
                            ],
                          },

                      ],
                    },
                ],
              },
          ],
        },
    ],
  },
];

const USE_CASES = [
  "Fetch detailed information about a specific transaction",
  "Verify transaction details for auditing and compliance",
  "Analyze transaction data for security and tracking",
];

const CONSTRAINTS = [
  "Only provides information for the specified transaction",
  "Requires real-time network data for accuracy",
  "API rate limits may restrict frequent requests",
];
