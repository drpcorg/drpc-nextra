import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getBlockProduction() {
  return (
    <SolanaMethod
      method="getBlockProduction"
      network="solana"
      cu={20}
      description={
        "Retrieves block production information for the current epoch or a specified slot range"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_objects"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={"Contains block production information"}
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
 "method": "getBlockProduction"
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "id": 1,
  "jsonrpc": "2.0",
  "method": "getBlockProduction"
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
  "method": "getBlockProduction"
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
		"method":  "getBlockProduction"
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
    "method": "getBlockProduction"
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
        "method": "getBlockProduction"
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
    "byIdentity": {},
    "range": {
      "firstSlot": 0,
      "lastSlot": 0
    }
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "range",
    type: "string",
    paramDescription: "Specifies the slot range to query block production for",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "firstSlot",
        type: "integer",
        paramDescription: "The starting slot of the range.",
      },
      {
        paramName: "lastSlot",
        type: "integer",
        paramDescription: " The ending slot of the range",
      },
    ],
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
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "byIdentity",
        type: "object",
        paramDescription: "A dictionary of validator identities",
      },
      {
        paramName: "range",
        type: "string",
        paramDescription:
          "Specifies the slot range to query block production for",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "firstSlot",
            type: "integer",
            paramDescription: "The starting slot of the range.",
          },
          {
            paramName: "lastSlot",
            type: "integer",
            paramDescription: " The ending slot of the range",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Track validator block production rates for performance analysis",
  "Monitor Solana network health by checking block production",
  "Ensure validators consistently produce blocks",
];

const CONSTRAINTS = [
  "Requires connection to an active Solana node",
  "Network delays might affect timely data retrieval",
  "Frequent requests may trigger rate limiting mechanisms",
];
