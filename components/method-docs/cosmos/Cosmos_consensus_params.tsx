import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_consensus_params() {
  return (
    <CosmosMethod
      method="consensus_params"
      network="Cosmos"
      cu={20}
      description={"Retrieves how to access and update consensus parameters"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="integer"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains the consensus parameters for the specified block heigh"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --location '${DRPC_ENDPOINT_URL_COSMOS}' \\
--header 'Content-Type: application/json' \\
--data '{
    "jsonrpc": "2.0",
    "method": "consensus_params",
    "params": [
        20431584
    ],
    "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_COSMOS}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "consensus_params",
  "params": [20431584],
  "id": 1
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
  "method": "consensus_params",
  "params": [20431584],
  "id": 1
});

const options = {
  hostname: '${DRPC_ENDPOINT_URL_COSMOS}',
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
	url := "${DRPC_ENDPOINT_URL_COSMOS}"

	requestBody, err := json.Marshal(map[string]interface{}{
		"jsonrpc": "2.0",
		"method":  "consensus_params",
		"params":  []interface{}{20431584},
		"id": 1,
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

url = '${DRPC_ENDPOINT_URL_COSMOS}'
headers = {
    'Content-Type': 'application/json'
}

data = {
    "jsonrpc": "2.0",
    "method": "consensus_params",
    "params": [20431584],
    "id": 1
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
    let url = "${DRPC_ENDPOINT_URL_COSMOS}";

    let request_body = json!({
        "jsonrpc": "2.0",
        "method": "consensus_params",
        "params": [20431584],
        "id": 1
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
    "block": {
      "max_bytes": "22020096",
      "max_gas": "-1",
      "time_iota_ms": "1000"
    },
    "evidence": {
      "max_age_num_blocks": "100000",
      "max_age_duration": "172800000000000",
      "max_bytes": "1048576"
    },
    "validator": {
      "pub_key_types": ["ed25519"]
    },
    "version": "v0.34.13"
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
      paramName: "height",
      type: "string",
      paramDescription: "The block height for which the consensus parameters are being requested. If omitted, the latest consensus parameters are returned."
    }
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
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "block_height",
        type: "string",
        paramDescription: "Indicates the block height for which the consensus parameters were retrieved."
      },
      {
        paramName: "consensus_params",
        type: "object",
        paramDescription: "Object holding various consensus settings, including those related to blocks, evidence, validators, and more.",
        childrenParams: [
          {
            paramName: "block",
            type: "object",
            paramDescription: "Parameters defining block constraints, such as maximum size and gas limits.",
            childrenParams: [
              {
                paramName: "max_bytes",
                type: "string",
                paramDescription: "The maximum allowable size of a block in bytes."
              },
              {
                paramName: "max_gas",
                type: "string",
                paramDescription: "The maximum gas limit a block can have."
              }
            ]
          },
          {
            paramName: "evidence",
            type: "object",
            paramDescription: "Parameters governing the handling of evidence within the blockchain.",
            childrenParams: [
              {
                paramName: "max_age_num_blocks",
                type: "string",
                paramDescription: "The maximum number of blocks within which evidence remains valid."
              },
              {
                paramName: "max_age_duration",
                type: "string",
                paramDescription: "The maximum time duration for which evidence is considered valid, in nanoseconds."
              },
              {
                paramName: "max_bytes",
                type: "string",
                paramDescription: "The maximum size of evidence allowed, in bytes."
              }
            ]
          },
          {
            paramName: "validator",
            type: "object",
            paramDescription: "Parameters related to the validators, including supported public key types.",
            childrenParams: [
              {
                paramName: "pub_key_types",
                type: "array",
                paramDescription: "An array listing the types of public keys that validators can use.",
                childrenParamsType: "string"
              }
            ]
          },
          {
            paramName: "version",
            type: "object",
            paramDescription: "Information about the application version.",
            childrenParams: [
              {
                paramName: "app_version",
                type: "string",
                paramDescription: "Specifies the version of the application running on the network."
              }
            ]
          },
          {
            paramName: "synchrony",
            type: "object",
            paramDescription: "Settings related to the timing and synchronization of events on the blockchain.",
            childrenParams: [
              {
                paramName: "precision",
                type: "string",
                paramDescription: "Defines the precision for synchronization, in nanoseconds."
              },
              {
                paramName: "message_delay",
                type: "string",
                paramDescription: "Specifies the delay for message synchronization, in nanoseconds."
              }
            ]
          },
          {
            paramName: "timeout",
            type: "object",
            paramDescription: "Timeout settings for various stages of block creation and validation.",
            childrenParams: [
              {
                paramName: "propose",
                type: "string",
                paramDescription: "The duration allowed for proposing a block, in nanoseconds."
              },
              {
                paramName: "propose_delta",
                type: "string",
                paramDescription: "The additional time given for proposing a block, in nanoseconds."
              },
              {
                paramName: "vote",
                type: "string",
                paramDescription: "The time allocated for voting on a block, in nanoseconds."
              },
              {
                paramName: "vote_delta",
                type: "string",
                paramDescription: "The additional time given for voting, in nanoseconds."
              },
              {
                paramName: "commit",
                type: "string",
                paramDescription: "The duration allowed for committing a block, in nanoseconds."
              },
              {
                paramName: "bypass_commit_timeout",
                type: "boolean",
                paramDescription: "Indicates whether the commit timeout can be bypassed."
              }
            ]
          },
          {
            paramName: "abci",
            type: "object",
            paramDescription: "Application Blockchain Interface (ABCI) related settings.",
            childrenParams: [
              {
                paramName: "vote_extensions_enable_height",
                type: "string",
                paramDescription: "The block height at which vote extensions are enabled."
              },
              {
                paramName: "recheck_tx",
                type: "boolean",
                paramDescription: "Indicates whether transactions should be rechecked."
              }
            ]
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve consensus parameters for a specific block height",
  "Analyze block size, gas limits, and evidence parameters",
  "Validate validator key types and consensus rules",
];

const CONSTRAINTS = [
  "Only valid for finalized blocks",
  "May vary significantly between versions",
  "Limited to current consensus rules at block height",
];
