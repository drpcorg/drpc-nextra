import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getBlock() {
  return (
    <SolanaMethod
      method="getBlock"
      network="solana"
      cu={66}
      description={"Retrieves detailed information about a specific block"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains detailed information about the block"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --location --request POST '${DRPC_ENDPOINT_URL}' \\
--header 'Content-Type: application/json' \\
--data-raw '{"jsonrpc": "2.0","id":1,"method":"getBlock","params":[430, {"encoding": "json","transactionDetails":"full","rewards":false}]}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getBlock",
  "params": [430, {
    "encoding": "json",
    "transactionDetails": "full",
    "rewards": false
  }]
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
  "method": "getBlock",
  "params": [430, {
    "encoding": "json",
    "transactionDetails": "full",
    "rewards": false
  }]
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
		"method":  "getBlock",
		"params": []interface{}{430, map[string]interface{}{
			"encoding":          "json",
			"transactionDetails": "full",
			"rewards":           false,
		}},
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
    "method": "getBlock",
    "params": [430, {
        "encoding": "json",
        "transactionDetails": "full",
        "rewards": False
    }]
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
        "method": "getBlock",
        "params": [430, {
            "encoding": "json",
            "transactionDetails": "full",
            "rewards": false
        }]
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
    "blockHeight": 428,
    "blockTime": null,
    "blockhash": "3Eq21vXNB5s86c62bVuUfTeaMif1N2kUqRPBmGRJhyTA",
    "parentSlot": 429,
    "previousBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B",
    "transactions": [
      {
        "meta": {
          "err": null,
          "fee": 5000,
          "innerInstructions": [],
          "logMessages": [],
          "postBalances": [499998932500, 26858640, 1, 1, 1],
          "postTokenBalances": [],
          "preBalances": [499998937500, 26858640, 1, 1, 1],
          "preTokenBalances": [],
          "status": {
            "Ok": null
          }
        },
        "transaction": {
          "message": {
            "accountKeys": [
              "3UVYmECPPMZSCqWKfENfuoTv51fTDTWicX9xmBD2euKe",
              "AjozzgE83A3x1sHNUR64hfH7zaEBWeMaFuAN9kQgujrc",
              "SysvarS1otHashes111111111111111111111111111",
              "SysvarC1ock11111111111111111111111111111111",
              "Vote111111111111111111111111111111111111111"
            ],
            "header": {
              "numReadonlySignedAccounts": 0,
              "numReadonlyUnsignedAccounts": 3,
              "numRequiredSignatures": 1
            },
            "instructions": [
              {
                "accounts": [1, 2, 3, 0],
                "data": "37u9WtQpcm6ULa3WRQHmj49EPs4if7o9f1jSRVZpm2dvihR9C8jY4NqEwXUbLwx15HBSNcP1",
                "programIdIndex": 4
              }
            ],
            "recentBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B"
          },
          "signatures": [
            "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv"
          ]
        }
      }
    ]
  },
  "id": 1
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription:
      "This describes the block number to fetch the transaction by.",
  },
  {
    paramName: "config",
    type: "object",
    paramDescription: "Configuration object containing optional parameters:",
    childrenParams: [
      {
        paramName: "encoding",
        type: "string",
        paramDescription: "Specifies the data encoding for each returned transaction. Options include: json, jsonParsed, base58, base64",
      },
      {
        paramName: "transactionDetails",
        type: "string",
        paramDescription: " Determines the level of transaction detail returned. Options include: full, signatures, none"
      },
      {
        paramName: "rewards",
        type: "boolean",
        paramDescription: " Indicates whether to include the rewards array"
      },
      {
        paramName: "commitment",
        type: "string",
        paramDescription: "Sets the commitment level for the blocks queried. Valid options are: finalized, confirmed, processed",
      },
      {
        paramName: "minContextSlot",
        type: "object",
        paramDescription: "The minimum slot number at which the request can be evaluated."
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
                paramName: "version",
                type: "number",
                paramDescription: "The version of the transaction. It is undefined if maxSupportedTransactionVersion was not set in the request parameters."
              },
              {
                paramName: "transaction",
                type: "object",
                paramDescription: " Details of the transaction",
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
  "Retrieve detailed block data for analysis",
  "Monitor transaction details within specific blocks for auditing",
  "Extract transaction data for blockchain application development",
];

const CONSTRAINTS = [
  "Requires valid block number parameter",
  "Network latency may delay response time",
  "High traffic may lead to rate limiting",
];
