import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getRecentPerformanceSamples() {
  return (
    <SolanaMethod
      method="getRecentPerformanceSamples"
      network="solana"
      cu={8}
      description={"Provides recent performance samples, including transaction and slot statistics"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "A JSON object containing statistics for the specified sample period."
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
  --data '{"jsonrpc":"2.0", "id":1, "method":"getRecentPerformanceSamples", "params": [4]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getRecentPerformanceSamples",
  "params": [4]
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
  "method": "getRecentPerformanceSamples",
  "params": [4]
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
		"method":  "getRecentPerformanceSamples",
		"params":  []interface{}{4},
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
    "method": "getRecentPerformanceSamples",
    "params": [4]
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
        "method": "getRecentPerformanceSamples",
        "params": [4]
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
      "slot": 98123569,
      "numTransactions": 5000,
      "numSlots": 100,
      "samplePeriodSecs": 60
    },
    {
      "slot": 98123568,
      "numTransactions": 4500,
      "numSlots": 100,
      "samplePeriodSecs": 60
    },
    {
      "slot": 98123567,
      "numTransactions": 4000,
      "numSlots": 100,
      "samplePeriodSecs": 60
    },
    {
      "slot": 98123566,
      "numTransactions": 3500,
      "numSlots": 100,
      "samplePeriodSecs": 60
    }
  ],
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "limit",
    type: "string",
    paramDescription:
      "Specifies the number of samples to return, with a maximum limit of 720",
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
          paramName: "numNonVoteTransactions",
          type: "integer",
          paramDescription: "The count of non-vote transactions during the sample period.",
        },
        {
          paramName: "numSlots",
          type: "integer",
          paramDescription: "The number of slots included in the sample.",
        },
        {
          paramName: "numTransactions",
          type: "integer",
          paramDescription: "The total number of transactions in the sample period.",
        },
        {
          paramName: "samplePeriodSecs",
          type: "integer",
          paramDescription: "The duration of the sample window in seconds.",
        },
        {
          paramName: "slot",
          type: "integer",
          paramDescription: "The slot number when the sample was taken.",
        },
    ],
  },
];

const USE_CASES = [
  "Retrieve recent performance samples for Solana network analysis",
  "Monitor performance metrics to assess network health",
  "Analyze performance data for optimization strategies",
];

const CONSTRAINTS = [
  "Limited to recent performance sample data",
  "Dependent on real-time data availability",
  "API rate limits may restrict data access",
];
