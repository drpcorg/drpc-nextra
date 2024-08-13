import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getConfirmedBlock() {
  return (
    <SolanaMethod
      method="getConfirmedBlock"
      network="solana"
      cu={151}
      description={"Retrieves detailed information about a specific account on the Solana blockchain."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Object containing block details if the block is confirmed, otherwise null"
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
  --data '{"jsonrpc": "2.0","id":1,"method":"getConfirmedBlock","params":[94101948, {"encoding": "json","transactionDetails":"full","rewards":false}]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getConfirmedBlock",
  "params": [94101948, {"encoding": "json", "transactionDetails": "full", "rewards": false}]
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
  "method": "getConfirmedBlock",
  "params": [94101948, {"encoding": "json", "transactionDetails": "full", "rewards": false}]
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
		"method":  "getConfirmedBlock",
		"params":  []interface{}{94101948, map[string]interface{}{"encoding": "json", "transactionDetails": "full", "rewards": false}},
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
    "method": "getConfirmedBlock",
    "params": [94101948, {"encoding": "json", "transactionDetails": "full", "rewards": false}]
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
        "method": "getConfirmedBlock",
        "params": [94101948, {"encoding": "json", "transactionDetails": "full", "rewards": false}]
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
    "blockHeight": 94101948,
    "blockTime": 1625247600,
    "blockhash": "5mzZf8yd1Xe5GphbxxbBYKfyF2U2dHPuZbggyrB4GnNm",
    "parentSlot": 94101947,
    "previousBlockhash": "Esh6dbed4YGic9krv1FNZKoBfEZ7F1ox2JX7Wx3C1jti",
    "transactions": [
      {
        "meta": {
          "err": null,
          "fee": 5000,
          "innerInstructions": [],
          "loadedAddresses": {
            "readonly": [],
            "writable": []
          },
          "logMessages": [],
          "postBalances": [1000000000, 5000000],
          "postTokenBalances": [],
          "preBalances": [1000005000, 0],
          "preTokenBalances": []
        },
        "transaction": {
          "message": {
            "accountKeys": ["D8Vn4Xo...3Xx", "F5qT2...3yY"],
            "header": {
              "numRequiredSignatures": 1,
              "numReadonlySignedAccounts": 0,
              "numReadonlyUnsignedAccounts": 1
            },
            "instructions": [
              {
                "accounts": [0, 1],
                "data": "3Bxs2V...2c3",
                "programIdIndex": 2
              }
            ],
            "recentBlockhash": "5mzZf8yd1Xe5GphbxxbBYKfyF2U2dHPuZbggyrB4GnNm"
          },
          "signatures": [
            "4W3X9Qy...5Ds"
          ]
        }
      }
    ]
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "slot_number",
    type: "string",
    paramDescription:
      "The slot number represented as a 64-bit unsigned integer (u64).",
  },
  {
    paramName: "object",
    type: "array",
    paramDescription: "The configuration object containing the following fields:",
    childrenParams: [
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
      {
        paramName: "encoding",
        type: "object",
        paramDescription: " (Default: json) The encoding format for account data. Options include \"base58\" (slow), \"base64\", \"base64+zstd\", or \"jsonParsed\""
      },
      {
        paramName: "transactionDetails",
        type: "string",
        paramDescription: "(Default: full) Specifies the level of transaction details in the response. Options include \"full\", \"signatures\", and \"none\"."
      },
      {
        paramName: "rewards",
        type: "boolean",
        paramDescription: "(Default: true) Determines whether to include the rewards array in the response"
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
    childrenParamsType: "object",
    childrenParams: [
        {
          paramName: "blockHeight",
          type: "integer",
          paramDescription: "The height of the block in the blockchain"
        },
        {
          paramName: "blockTime",
          type: "int64",
          paramDescription: "The timestamp of the block. null indicates that the time is not available."
        },
        {
          paramName: "blockhash",
          type: "string",
          paramDescription: "The unique identifier (hash) of the block."
        },
        {
          paramName: "parentSlot",
          type: "integer",
          paramDescription: "The slot number of the parent block."
        },
        {
          paramName: "previousBlockhash",
          type: "string",
          paramDescription: "The hash of the previous block in the chain."
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
                      paramDescription: "List of inner instructions."
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
                paramName: "transaction",
                type: "object",
                paramDescription: " Details of the transaction",
                childrenParamsType: "object",
                childrenParams: [
                    {
                      paramName: "message",
                      type: "string",
                      paramDescription: "Transaction message.",
                      childrenParamsType: "object",
                      childrenParams: [
                        {
                          paramName: "accountKeys",
                          type: "array_of_strings",
                          paramDescription: "Array of public keys involved.",
                        },
                        {
                          paramName: "header",
                          type: "object",
                          paramDescription: "Transaction header",
                          childrenParamsType: "object",
                          childrenParams: [
                              {
                                paramName: "numRequiredSignatures",
                                type: "number",
                                paramDescription: "Number of required signatures.",
                              },
                              {
                                paramName: "numReadonlySignedAccounts",
                                type: "number",
                                paramDescription: "Number of read-only signed accounts.",
                              },
                              {
                                paramName: "numReadonlyUnsignedAccounts",
                                type: "number",
                                paramDescription: "Number of read-only unsigned accounts.",
                              },
                          ],
                        },
                        {
                          paramName: "recentBlockhash",
                          type: "number",
                          paramDescription: "Blockhash used for the transaction.",
                        },
                        {
                          paramName: "instructions",
                          type: "array",
                          paramDescription: "Array of instruction objects.",
                          childrenParamsType: "object",
                          childrenParams: [
                            {
                              paramName: "accounts",
                              type: "array_of_integers",
                              paramDescription: "Indices of accounts involved.",
                            },
                            {
                              paramName: "data",
                              type: "string",
                              paramDescription: "Instruction data in specified format.",
                            },
                            {
                              paramName: "programIdIndex",
                              type: "string",
                              paramDescription: "Index of the program ID in accountKeys.",
                            },
                          ],
                        },
                      ],
                    },
                ],
              },
              {
                paramName: "signatures",
                type: "array_of_strings",
                paramDescription: "List of signatures for the transaction.",
              },
              {
                paramName: "rewards",
                type: "boolean",
                paramDescription: " Indicates whether to include the rewards array",
                childrenParamsType: "object",
                childrenParams: [
                  {
                    paramName: "pubkey",
                    type: "string",
                    paramDescription: "The public key of the account that received the reward, encoded in base-58.",
                  },
                  {
                    paramName: "lamports",
                    type: "integer",
                    paramDescription: "The number of lamports (i64) credited or debited to the account as a reward.",
                  },
                  {
                    paramName: "postBalance",
                    type: "integer",
                    paramDescription: "The account's balance in lamports (u64) after the reward was applied.",
                  },
                  {
                    paramName: "rewardType",
                    type: "string",
                    paramDescription: "The type of reward received. Possible values are \"fee\", \"rent\", \"voting\", and \"staking\".",
                  },
                  {
                    paramName: "commission",
                    type: "integer",
                    paramDescription: "The commission taken by the vote account when the reward was credited. This is only present for voting and staking rewards.",
                  },
                ],
              },
          ],
        },
    ],
  },
];

const USE_CASES = [
  "Retrieve detailed information about a specific confirmed block",
  "Analyze transactions within a block for auditing purposes",
  "Verify block confirmations and associated transaction details",
];

const CONSTRAINTS = [
  "Requires valid block number parameter",
  "Network delays can affect data retrieval",
  "High-frequency requests may lead to rate limiting",
];
