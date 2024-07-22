import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getFeeCalculatorForBlockhash() {
  return (
    <SolanaMethod
      method="getFeeCalculatorForBlockhash"
      network="solana"
      cu={11}
      description={"The method in Solana retrieves the fee calculator associated with a blockhash"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains information about the fee calculator if the blockhash is valid, otherwise null."
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
  --data '{"jsonrpc": "2.0","id": 1,"method": "getFeeCalculatorForBlockhash","params": ["6EUDAG2UBZ1J7CbpixutsELc5c6s4k8YzaWawyKH2Pit"]}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getFeeCalculatorForBlockhash",
  "params": ["6EUDAG2UBZ1J7CbpixutsELc5c6s4k8YzaWawyKH2Pit"]
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
  "method": "getFeeCalculatorForBlockhash",
  "params": ["6EUDAG2UBZ1J7CbpixutsELc5c6s4k8YzaWawyKH2Pit"]
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
		"method":  "getFeeCalculatorForBlockhash",
		"params":  []interface{}{"6EUDAG2UBZ1J7CbpixutsELc5c6s4k8YzaWawyKH2Pit"},
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
    "method": "getFeeCalculatorForBlockhash",
    "params": ["6EUDAG2UBZ1J7CbpixutsELc5c6s4k8YzaWawyKH2Pit"]
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
        "method": "getFeeCalculatorForBlockhash",
        "params": ["6EUDAG2UBZ1J7CbpixutsELc5c6s4k8YzaWawyKH2Pit"]
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
      "slot": 98108954
    },
    "value": {
      "feeCalculator": {
        "lamportsPerSignature": 5000
      }
    }
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "minContextSlot",
    type: "object",
    paramDescription: "The minimum slot number at which the request can be evaluated."
  },
  {
    paramName: "blockhash",
    type: "string",
    paramDescription: "The blockhash for which the fee calculator should be retrieved."
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
    type: "object",
    childrenParamsType: "array",
    childrenParams: [
        {
          paramName: "value",
          type: "object",
          paramDescription: "A JSON object describing the cluster fee rate at the queried blockhash.",
        },
        {
          paramName: "context",
          type: "object",
          childrenParamsType: "object",
          childrenParams: [
              {
                paramName: "apiVersion",
                type: "string",
                paramDescription: "The Solana RPC API version being used.",
              },
              {
                paramName: "slot",
                type: "integer",
                paramDescription: "The slot number corresponding to the fee calculator information.",
              },
          ],
        },
    ],
  },
];

const USE_CASES = [
  "Acquire fee calculations for specific Solana blockhashes",
  "Determine transaction fees for financial planning",
  "Evaluate fee structures for cost optimization strategies",
];

const CONSTRAINTS = [
  "Limited to specific blockhash data only",
  "API call frequency limitations may apply",
  "Potential latency in retrieving fee data",
];
