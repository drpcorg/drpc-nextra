import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getConfigAll(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getConfigAll"
      network="ton"
      cu = {100}
      description={"Retrieves the complete configuration settings, including parameters related to network behavior and consensus rules."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="integer"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={""}
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
    {
    language: "shell",
    code: () => `curl --request GET \\
     --url \ '${DRPC_ENDPOINT_URL_TON}getConfigAll?seqno=41089440' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getConfigAll?seqno=41089440' \

fetch(url, {
  method: 'GET',
  headers: {
    'accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

const url = \`${DRPC_ENDPOINT_URL_TON}getConfigAll?seqno=41089440' \

axios.get(url, {
  headers: {
    'accept': 'application/json'
  }
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));`,
  },
  {
    language: "go",
    code: () => `package main

import (
	"fmt"
	"net/http"
)

func main() {
	url := "${DRPC_ENDPOINT_URL_TON}getConfigAll?seqno=41089440' \

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}
	req.Header.Set("accept", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
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

url = '${DRPC_ENDPOINT_URL_TON}getConfigAll?seqno=41089440' \

response = requests.get(url, headers={'accept': 'application/json'})
res = response.json()

print(res)
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "${DRPC_ENDPOINT_URL_TON}getConfigAll?seqno=41089440";

    let client = Client::new();
    let res = client.get(url)
        .header("accept", "application/json")
        .send()
        .await?
        .json::<serde_json::Value>()
        .await?;

    println!("{:#?}", res);

    Ok(())
}
`,
  },

];

const RESPONSE_JSON = `{
    "status": "success",
    "data": {
        "config": {
            "workchain": 0,
            "shard": -9223372036854775808,
            "seqno": 41089440,
            "current_time": 1693527600,
            "global_state": {
                "root_hash": "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
                "state_hash": "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
            },
            "shard_states": [
                {
                    "shard_id": -9223372036854775808,
                    "last_seqno": 41089440,
                    "root_hash": "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"
                },
                {
                    "shard_id": -9223372036854775807,
                    "last_seqno": 41089439,
                    "root_hash": "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
                }
            ]
        }
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "seqno",
    type: "integer",
    paramDescription: "The sequence number of the block.",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "status",
    type: "string",
    paramDescription: "Indicates the status of the request.",
  },
  {
    paramName: "data",
    type: "object",
    paramDescription: "Contains the main data object.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "config",
        type: "object",
        paramDescription: "Configuration details of the specified workchain.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "workchain",
            type: "integer",
            paramDescription: "The identifier of the workchain.",
          },
          {
            paramName: "shard",
            type: "integer",
            paramDescription: "The identifier of the shard.",
          },
          {
            paramName: "seqno",
            type: "integer",
            paramDescription: "The sequence number of the block.",
          },
          {
            paramName: "current_time",
            type: "integer",
            paramDescription: "The current time in Unix time format.",
          },
          {
            paramName: "global_state",
            type: "object",
            paramDescription: "The global state information.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "root_hash",
                type: "string",
                paramDescription: "The root hash of the global state.",
              },
              {
                paramName: "state_hash",
                type: "string",
                paramDescription: "The state hash of the global state.",
              },
            ],
          },
          {
            paramName: "shard_states",
            type: "array",
            paramDescription: "An array of shard state objects.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "shard_id",
                type: "integer",
                paramDescription: "The identifier of the shard.",
              },
              {
                paramName: "last_seqno",
                type: "integer",
                paramDescription: "The last sequence number for the shard.",
              },
              {
                paramName: "root_hash",
                type: "string",
                paramDescription: "The root hash for the shard state.",
              },
            ],
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Get all configuration settings for the TON network",
  "Access parameters for performance tuning",
  "Analyze current configuration for audits",
];

const CONSTRAINTS = [
  "Requires a synced node for accurate data",
  "Depends on network access",
  "Only shows current configuration settings",
];




