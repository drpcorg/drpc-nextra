import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getConfirmedSignaturesForAddress2() {
  return (
    <SolanaMethod
      method="getConfirmedSignaturesForAddress2"
      network="solana"
      cu={35}
      description={"Allows to fetch a list of confirmed transaction signatures for a specified address"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "An array of transaction signature details, ordered from newest to oldest."
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
  --data '{"jsonrpc": "2.0","id": 1,"method": "getConfirmedSignaturesForAddress2","params": ["Vote111111111111111111111111111111111111111",{"limit": 1}]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getConfirmedSignaturesForAddress2",
  "params": ["Vote111111111111111111111111111111111111111", {"limit": 1}]
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
  "method": "getConfirmedSignaturesForAddress2",
  "params": ["Vote111111111111111111111111111111111111111", {"limit": 1}]
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
		"method":  "getConfirmedSignaturesForAddress2",
		"params":  []interface{}{"Vote111111111111111111111111111111111111111", map[string]interface{}{"limit": 1}},
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
    "method": "getConfirmedSignaturesForAddress2",
    "params": ["Vote111111111111111111111111111111111111111", {"limit": 1}]
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
        "method": "getConfirmedSignaturesForAddress2",
        "params": ["Vote111111111111111111111111111111111111111", {"limit": 1}]
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
  "result": [
    {
      "signature": "5qzm9W1ckKgtDDm6NdQ1QcTzy9dr9WhdC27RFVdCpyyhv5QhyCR9Z43ZzQhy7o2a7yNVxgNTd29p2CCZQaYF7LCn",
      "slot": 94101948,
      "err": null,
      "memo": null,
      "blockTime": 1625247600
    }
  ],
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "acc_add",
    type: "string",
    paramDescription:
      "The account address encoded in base-58.",
  },
  {
    paramName: "object",
    type: "array",
    paramDescription: ": Configuration object containing the following fields:",
    childrenParams: [
      {
        paramName: "limit",
        type: "integer",
        paramDescription: "(Default: 1000) The maximum number of transaction signatures to return. Valid range is 1 to 1000."
      },
      {
        paramName: "before",
        type: "string",
        paramDescription: "A base-58 encoded transaction signature. If provided, only signatures before this transaction will be returned"
      },
      {
        paramName: "until",
        type: "string",
        paramDescription: "A base-58 encoded transaction signature. If provided, only signatures at or before this transaction will be returned"
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
          type: "integer",
          paramDescription: "The Unix timestamp of when the transaction was processed. Null if not available.",
        },
      {
        paramName: "confirmationStatus",
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
        paramName: "err",
        type: "string",
        paramDescription: "Error code if the transaction failed, or null if it succeeded",
      },
      {
        paramName: "memo",
        type: "string",
        paramDescription: "The memo associated with the transaction, or null if there is no memo.",
      },
      {
        paramName: "signature",
        type: "string",
        paramDescription: "The transaction's signature, encoded in base-58.",
      },
      {
        paramName: "slot",
        type: "string",
        paramDescription: "The slot number where the transaction was confirmed.",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve recent transactions for any address",
  "Track changes to specific Solana addresses",
  "Identify suspicious activities in transaction patterns",
];

const CONSTRAINTS = [
  "Restricted by API call limits",
  "Large data sets might affect performance",
  "Potential delays in data retrieval",
];
