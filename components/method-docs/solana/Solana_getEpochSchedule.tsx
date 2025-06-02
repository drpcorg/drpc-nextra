import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getEpochSchedule() {
  return (
    <SolanaMethod
      method="getEpochSchedule"
      network="solana"
      cu={20}
      description={"Offers comprehensive information about the epoch schedule"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        " Contains various fields related to epoch and slot information."
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
  "method": "getEpochSchedule"
}
'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getEpochSchedule"
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
  "method": "getEpochSchedule"
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
		"method":  "getEpochSchedule",
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
    "method": "getEpochSchedule"
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
        "method": "getEpochSchedule"
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
    "slotsPerEpoch": 0,
    "leaderScheduleSlotOffset": 0,
    "warmup": true,
    "firstNormalEpoch": 0,
    "firstNormalSlot": 0
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = null;

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
          paramName: "firstNormalEpoch",
          type: "integer",
          paramDescription: "The epoch number when the blockchain first reached a standard epoch length, calculated as log2(slotsPerEpoch) - log2(MINIMUM_SLOTS_PER_EPOCH).",
        },
        {
          paramName: "firstNormalSlot",
          type: "integer",
          paramDescription: "The slot number marking the beginning of the first normal-length epoch, calculated as MINIMUM_SLOTS_PER_EPOCH * (2.pow(firstNormalEpoch) - 1)."
        },
        {
          paramName: "leaderScheduleSlotOffset",
          type: "integer",
          paramDescription: "The number of slots before an epoch starts for which the leader schedule is calculated."
        },
        {
          paramName: "slotsPerEpoch",
          type: "integer",
          paramDescription: "The maximum number of slots that can exist in an epoch."
        },
        {
          paramName: "warmup",
          type: "boolean",
          paramDescription: "Indicates whether epochs start short and gradually increase in length."
        },
    ],
  },
];

const USE_CASES = [
  "Obtain detailed schedule information for Solana epochs",
  "Track the timing and duration of Solana epochs",
  "Evaluate epoch schedules for system performance analysis",
];

const CONSTRAINTS = [
  "Limited to current and upcoming epochs",
  "Subject to API rate limitations and restrictions",
  "Potential latency issues when fetching epoch schedules",
];
