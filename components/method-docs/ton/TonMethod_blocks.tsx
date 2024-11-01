import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL_TON_NFT, DRPC_ENDPOINT_URL_TON_V3} from "./constants";

export function TonMethod_blocks(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="blocks"
      network="ton"
      cu = {100}
      description={
          "Retrieves general block information from the TON blockchain, including block details like block ID, timestamp, and previous block reference."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
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
     --url '\ ${DRPC_ENDPOINT_URL_TON_V3}blocks?limit=128&offset=0&sort=desc' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_V3}blocks?limit=128&offset=0&sort=desc\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_V3}blocks?limit=128&offset=0&sort=desc\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_V3}blocks?limit=128&offset=0&sort=desc"

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

url = '${DRPC_ENDPOINT_URL_TON_V3}blocks?limit=128&offset=0&sort=desc'

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
    let url = "${DRPC_ENDPOINT_URL_TON_V3}blocks?limit=128&offset=0&sort=desc";

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
    "result": [
        {
            "block_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "workchain": -1,
            "shard": -9223372036854775808,
            "seqno": 39064874,
            "timestamp": 1693527600,
            "transactions_count": 35,
            "prev_block_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "root_hash": "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "file_hash": "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
        },
        {
            "block_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "workchain": -1,
            "shard": -9223372036854775808,
            "seqno": 39064873,
            "timestamp": 1693527500,
            "transactions_count": 40,
            "prev_block_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "root_hash": "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "file_hash": "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"
        }
    ]
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "limit",
    type: "integer",
    paramDescription: "The maximum number of blocks to return. Default is 128."
  },
  {
    paramName: "offset",
    type: "integer",
    paramDescription: "The number of blocks to skip before starting to return results. Default is 0."
  },
  {
    paramName: "sort",
    type: "string",
    paramDescription: "The sorting order of the blocks. Possible values are 'asc' for ascending or 'desc' for descending. Default is 'desc'."
  }
];

const RESPONSE_PARAMS: ReqResParam[] = [
   {
    paramName: "ok",
    type: "boolean",
    paramDescription: "Indicates if the request was successful."
  },
  {
    paramName: "result",
    type: "array",
    paramDescription: "List of block details.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "block_id",
        type: "string",
        paramDescription: "Unique identifier of the block."
      },
      {
        paramName: "workchain",
        type: "integer",
        paramDescription: "ID of the workchain; -1 represents the masterchain."
      },
      {
        paramName: "shard",
        type: "integer",
        paramDescription: "ID of the shard in which the block resides."
      },
      {
        paramName: "seqno",
        type: "integer",
        paramDescription: "Sequence number of the block."
      },
      {
        paramName: "timestamp",
        type: "integer",
        paramDescription: "Unix timestamp indicating when the block was created."
      },
      {
        paramName: "transactions_count",
        type: "integer",
        paramDescription: "Number of transactions included in the block."
      },
      {
        paramName: "prev_block_id",
        type: "string",
        paramDescription: "Identifier of the previous block in the sequence."
      },
      {
        paramName: "root_hash",
        type: "string",
        paramDescription: "Root hash of the block."
      },
      {
        paramName: "file_hash",
        type: "string",
        paramDescription: "File hash associated with the block."
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve data for TON Blocks V3",
  "Analyze block structure and contents",
  "Audit block transactions and metadata",
];

const CONSTRAINTS = [
  "Requires valid block ID",
  "Supports only Blocks V3 format",
  "Depends on network sync",
];



