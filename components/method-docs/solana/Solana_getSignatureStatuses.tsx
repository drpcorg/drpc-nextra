import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getSignatureStatuses() {
  return (
    <SolanaMethod
      method="getSignatureStatuses"
      network="solana"
      cu={11}
      description={"Checks the status of multiple transaction signatures"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains details about the transaction and its status."
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
  --data '{"jsonrpc": "2.0","id": 1,"method": "getSignatureStatuses","params": [["5tGfZLNDxtCtWsW1BJoeTyHvnfGqpADDfBkUgkKENQJ8iz5yTN3ae51j8m8GRFevJx82gyuKnEX7iexFsqf7X2vS","D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff"],{"searchTransactionHistory": true}]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getSignatureStatuses",
  "params": [
    [
      "5tGfZLNDxtCtWsW1BJoeTyHvnfGqpADDfBkUgkKENQJ8iz5yTN3ae51j8m8GRFevJx82gyuKnEX7iexFsqf7X2vS",
      "D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff"
    ],
    {"searchTransactionHistory": true}
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
  "method": "getSignatureStatuses",
  "params": [
    [
      "5tGfZLNDxtCtWsW1BJoeTyHvnfGqpADDfBkUgkKENQJ8iz5yTN3ae51j8m8GRFevJx82gyuKnEX7iexFsqf7X2vS",
      "D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff"
    ],
    {"searchTransactionHistory": true}
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
		"method":  "getSignatureStatuses",
		"params":  []interface{}{
			[]string{
				"5tGfZLNDxtCtWsW1BJoeTyHvnfGqpADDfBkUgkKENQJ8iz5yTN3ae51j8m8GRFevJx82gyuKnEX7iexFsqf7X2vS",
				"D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff",
			},
			map[string]interface{}{"searchTransactionHistory": true},
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
    "method": "getSignatureStatuses",
    "params": [
        [
            "5tGfZLNDxtCtWsW1BJoeTyHvnfGqpADDfBkUgkKENQJ8iz5yTN3ae51j8m8GRFevJx82gyuKnEX7iexFsqf7X2vS",
            "D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff"
        ],
        {"searchTransactionHistory": true}
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
        "method": "getSignatureStatuses",
        "params": [
            [
                "5tGfZLNDxtCtWsW1BJoeTyHvnfGqpADDfBkUgkKENQJ8iz5yTN3ae51j8m8GRFevJx82gyuKnEX7iexFsqf7X2vS",
                "D13jTJYXoQBcRY9AfT5xRtsew7ENgCkNs6mwwwAcUCp4ZZCEM7YwZ7en4tVsoDa7Gu75Jjj2FgLXNUz8Zmgedff"
            ],
            {"searchTransactionHistory": true}
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
        "slot": 98123568,
        "confirmations": null,
        "err": null,
        "status": {"Ok":null},
        "confirmationStatus": "finalized"
      },
      {
        "slot": 98123567,
        "confirmations": null,
        "err": null,
        "status": {"Ok":null},
        "confirmationStatus": "finalized"
      }
    ]
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "tx signatures",
    type: "string",
    paramDescription:
      "An array of transaction signatures to be confirmed, encoded as base-58 strings.",
  },
  {
    paramName: "config",
    type: "object",
    paramDescription:
      "Configuration options for the query, including:",
    childrenParamsType: "object",
    childrenParams: [
        {
          paramName: "searchTransactionHistory",
          type: "boolean",
          paramDescription:
            "(Default: false) If true, includes the entire transaction history in the search. If false, only recent transactions in the latest confirmed block are included.",
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
          paramName: "slot",
          type: "int64",
        },
        {
          paramName: "value",
          type: "object",
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
                paramName: "data",
                type: "string",
                paramDescription: "Data associated with the account, either as encoded binary data or in JSON format, depending on the specified encoding. Format: [data, encoding] or JSON object",
              },
              {
                paramName: "executable",
                type: "string",
                paramDescription: "dicates if the account contains a program and is read-only.",
              },
              {
                paramName: "rentEpoch",
                type: "string",
                paramDescription: "The epoch at which this account will next owe rent.",
              },
          ]
        },
    ],
  },
];

const USE_CASES = [
  "Fetch statuses of specific transaction signatures",
  "Verify completion status of submitted transactions",
  "Monitor transaction confirmations for accuracy",
];

const CONSTRAINTS = [
  "Limited to provided transaction signatures",
  "Dependent on real-time network data",
  "API rate limits may restrict frequent checks",
];
