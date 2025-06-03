import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getBlockCommitment() {
  return (
    <SolanaMethod
      method="getBlockCommitment"
      network="solana"
      cu={20}
      description={"Retrieves the commitment levels for a specific block"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_integers"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="string"
      responseParamsDescription={
        "Contains commitment information for the block"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL} \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "getBlockCommitment",
  "params": [
    165768577
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "id": 1,
  "jsonrpc": "2.0",
  "method": "getBlockCommitment",
  "params": [165768577]
});

fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
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
  "id": 1,
  "jsonrpc": "2.0",
  "method": "getBlockCommitment",
  "params": [165768577]
});

const options = {
  hostname: '${DRPC_ENDPOINT_URL}',
  path: '',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
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
		"id":      1,
		"jsonrpc": "2.0",
		"method":  "getBlockCommitment",
		"params":  []interface{}{165768577},
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
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

data = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "getBlockCommitment",
    "params": [165768577]
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
        "id": 1,
        "jsonrpc": "2.0",
        "method": "getBlockCommitment",
        "params": [165768577]
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
  "id": 0,
  "jsonrpc": "string",
  "result": {
    "commitment": [
      0
    ],
    "totalStake": 0
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription:
      "The number of the block to retrieve commitment information for.",
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
    type: "object",
    childrenParamsType: "array",
    childrenParams: [
      {
        paramName: "commitment",
        type: "array_of_integers",
        paramDescription: "The commitment level of the block.",
      },
      {
        paramName: "totalStake",
        type: "int64",
        paramDescription: "The total stake of validators confirming the block.",
      },
    ],
  },
];

const USE_CASES = [
  "Check block commitment status for transaction finality",
  "Monitor commitment levels for recent blocks to ensure security",
  "Verify block inclusion in the blockchain for auditing purposes",
];

const CONSTRAINTS = [
  "Requires valid block number parameter",
  "Network delays might affect timely data retrieval",
  "High query volume can lead to rate limiting",
];
