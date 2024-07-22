import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getConfirmedTransaction() {
  return (
    <SolanaMethod
      method="getConfirmedTransaction"
      network="solana"
      cu={38}
      description={"Retrieves information about a specific confirmed transaction"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains detailed information about the account"
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
  --data '{"jsonrpc": "2.0","id": 1,"method": "getConfirmedTransaction","params": ["3Pdh1xgS7HYXcPquN1JQQXs8C6Tn2ZTkHg86wXMwDEEnJxVVZsE3WgxHSx258boUtHcMVkKCGbT9dYWWfk7CWV2m","json"]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getConfirmedTransaction",
  "params": ["3Pdh1xgS7HYXcPquN1JQQXs8C6Tn2ZTkHg86wXMwDEEnJxVVZsE3WgxHSx258boUtHcMVkKCGbT9dYWWfk7CWV2m", "json"]
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
  "method": "getConfirmedTransaction",
  "params": ["3Pdh1xgS7HYXcPquN1JQQXs8C6Tn2ZTkHg86wXMwDEEnJxVVZsE3WgxHSx258boUtHcMVkKCGbT9dYWWfk7CWV2m", "json"]
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
		"method":  "getConfirmedTransaction",
		"params":  []interface{}{"3Pdh1xgS7HYXcPquN1JQQXs8C6Tn2ZTkHg86wXMwDEEnJxVVZsE3WgxHSx258boUtHcMVkKCGbT9dYWWfk7CWV2m", "json"},
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
    "method": "getConfirmedTransaction",
    "params": ["3Pdh1xgS7HYXcPquN1JQQXs8C6Tn2ZTkHg86wXMwDEEnJxVVZsE3WgxHSx258boUtHcMVkKCGbT9dYWWfk7CWV2m", "json"]
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
        "method": "getConfirmedTransaction",
        "params": ["3Pdh1xgS7HYXcPquN1JQQXs8C6Tn2ZTkHg86wXMwDEEnJxVVZsE3WgxHSx258boUtHcMVkKCGbT9dYWWfk7CWV2m", "json"]
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
    "slot": 94101948,
    "blockTime": 1625247600,
    "transaction": {
      "signatures": [
        "3Pdh1xgS7HYXcPquN1JQQXs8C6Tn2ZTkHg86wXMwDEEnJxVVZsE3WgxHSx258boUtHcMVkKCGbT9dYWWfk7CWV2m"
      ],
      "message": {
        "accountKeys": [
          "F5qT2...3yY",
          "D8Vn4Xo...3Xx"
        ],
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
      }
    },
    "meta": {
      "err": null,
      "fee": 5000,
      "preBalances": [1000005000, 0],
      "postBalances": [1000000000, 5000000],
      "preTokenBalances": [],
      "postTokenBalances": [],
      "logMessages": [],
      "innerInstructions": [],
      "loadedAddresses": {
        "readonly": [],
        "writable": []
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
      "The transaction signature encoded in base-58.",
  },
      {
        paramName: "encoding",
        type: "string",
        paramDescription: "(Default: json) The format for the transaction data. Possible values are \"json\", \"jsonParsed\", \"base58\" (slow), or \"base64\".",
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
                              paramDescription: "Instruction data in specified format",
                            },
                            {
                              paramName: "programIdIndex",
                              type: "string",
                              paramDescription: "Index of the program ID in accountKeys",
                            },
                            {
                              paramName: "stackHeight",
                              type: "string",
                              paramDescription: "The current depth of the execution stack",
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
  "Verify the details of specific Solana transactions",
  "Analyze transaction data for detailed reporting",
  "Debugging and troubleshooting issues in transaction processes",
];

const CONSTRAINTS = [
  "Limited to confirmed Solana transactions only",
  "API call frequency restrictions may apply",
  "Possible delays in fetching transaction details",
];
