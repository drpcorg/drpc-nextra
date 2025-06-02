import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getTokenAccountBalance() {
  return (
    <SolanaMethod
      method="getTokenAccountBalance"
      network="solana"
      cu={20}
      description={"The method in Solana retrieves the balance of a specified SPL token account"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains details about the token supply and program state"
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
  --data '{"jsonrpc":"2.0", "id":1, "method":"getTokenAccountBalance", "params": ["DhzDoryP2a4rMK2bcWwJxrE2uW6ir81ES8ZwJJPPpxDN"]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getTokenAccountBalance",
  "params": ["DhzDoryP2a4rMK2bcWwJxrE2uW6ir81ES8ZwJJPPpxDN"]
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
  "method": "getTokenAccountBalance",
  "params": ["DhzDoryP2a4rMK2bcWwJxrE2uW6ir81ES8ZwJJPPpxDN"]
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
		"method":  "getTokenAccountBalance",
		"params":  []interface{}{"DhzDoryP2a4rMK2bcWwJxrE2uW6ir81ES8ZwJJPPpxDN"},
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
    "method": "getTokenAccountBalance",
    "params": ["DhzDoryP2a4rMK2bcWwJxrE2uW6ir81ES8ZwJJPPpxDN"]
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
        "method": "getTokenAccountBalance",
        "params": ["DhzDoryP2a4rMK2bcWwJxrE2uW6ir81ES8ZwJJPPpxDN"]
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
    "value": {
      "amount": "1000000",
      "decimals": 6,
      "uiAmount": 1.0,
      "uiAmountString": "1.0"
    }
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
          paramDescription: "Provides detailed token supply information:",
          childrenParams: [
              {
                paramName: "amount",
                type: "string",
                paramDescription: "The raw total token supply, represented as a string of a u64 integer.",
              },
              {
                paramName: "decimals",
                type: "integer",
                paramDescription: "The number of decimal places the token uses.",
              },
              {
                paramName: "uiAmount",
                type: "string",
                paramDescription: "The total token supply using the mint's decimal settings (DEPRECATED).",
              },
              {
                paramName: "uiAmountString",
                type: "string",
                paramDescription: "The total token supply as a string, formatted with the mint's decimal settings",
              },
          ],
        },
    ],
  },
];

const USE_CASES = [
  "Retrieve the balance of a specific token account",
  "Monitor token balances for account management",
  "Analyze token holdings for financial planning",
];

const CONSTRAINTS = [
  "Limited to the specified token account balance",
  "Requires up-to-date network information",
  "API rate limits may affect retrieval frequency",
];
