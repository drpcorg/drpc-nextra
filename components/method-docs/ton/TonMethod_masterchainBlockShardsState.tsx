import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON_V3} from "./constants";

export function TonMethod_masterchainBlockShardsState(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="masterchainBlockShardsState"
      network="ton"
      cu = {100}
      description={"Provides the state of each shard in a specified masterchain block"}
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
     --url \ '${DRPC_ENDPOINT_URL_TON_V3}masterchainBlockShardsState?seqno=41089440' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_V3}masterchainBlockShardsState?seqno=41089440' \

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

const url = \`${DRPC_ENDPOINT_URL_TON_V3}masterchainBlockShardsState?seqno=41089440' \

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
	url := "${DRPC_ENDPOINT_URL_TON_V3}masterchainBlockShardsState?seqno=41089440' \

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

url = '${DRPC_ENDPOINT_URL_TON_V3}masterchainBlockShardsState?seqno=41089440' \

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
    let url = "${DRPC_ENDPOINT_URL_TON_V3}masterchainBlockShardsState?seqno=41089440";

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
    "ok": true,
    "result": {
        "seqno": 40467413,
        "workchain": -1,
        "shards": [
            {
                "workchain": 0,
                "shard": -9223372036854775808,
                "seqno": 40467413,
                "state_root_hash": "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
                "block_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
                "transactions_count": 42
            },
            {
                "workchain": 0,
                "shard": -9223372036854775807,
                "seqno": 40467413,
                "state_root_hash": "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                "block_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                "transactions_count": 30
            }
        ]
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
    paramName: "ok",
    type: "boolean",
    paramDescription: "Indicates if the request was successful."
  },
  {
    paramName: "result",
    type: "object",
    paramDescription: "Details of the masterchain block and its associated shards.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "seqno",
        type: "integer",
        paramDescription: "Sequence number of the masterchain block."
      },
      {
        paramName: "workchain",
        type: "integer",
        paramDescription: "ID of the workchain; -1 represents the masterchain."
      },
      {
        paramName: "shards",
        type: "array",
        paramDescription: "List of shard blocks associated with the masterchain block.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "workchain",
            type: "integer",
            paramDescription: "ID of the workchain where the shard resides."
          },
          {
            paramName: "shard",
            type: "integer",
            paramDescription: "ID of the shard in the specified workchain."
          },
          {
            paramName: "seqno",
            type: "integer",
            paramDescription: "Sequence number of the shard block."
          },
          {
            paramName: "state_root_hash",
            type: "string",
            paramDescription: "Root hash of the shard block's state."
          },
          {
            paramName: "block_id",
            type: "string",
            paramDescription: "Unique identifier of the shard block."
          },
          {
            paramName: "transactions_count",
            type: "integer",
            paramDescription: "Number of transactions in the shard block."
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Get shard state of a masterchain block",
  "Analyze shard state data",
  "Audit shard information",
];

const CONSTRAINTS = [
  "Needs valid masterchain block ID",
  "Supports Blocks V3 only",


];




