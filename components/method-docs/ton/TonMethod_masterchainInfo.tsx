import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON_V3 } from "./constants";

export function TonMethod_masterchainInfo(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="masterchainInfo"
      network="ton"
      cu = {100}
      description={
          "Retrieves the sizes of outgoing message queues for specified addresses, providing insights into message processing and network load."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
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
     --url \ '${DRPC_ENDPOINT_URL_TON_V3}masterchainInfo' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_V3}masterchainInfo\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_V3}masterchainInfo\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_V3}masterchainInfo"

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

url = '${DRPC_ENDPOINT_URL_TON_V3}masterchainInfo'

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
    let url = "${DRPC_ENDPOINT_URL_TON_V3}masterchainInfo";

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
        "last_seqno": 40467413,
        "last_block_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        "last_block_time": 1693527600,
        "masterchain_info": {
            "total_blocks": 500000,
            "total_transactions": 1500000,
            "block_time": 5,
            "average_transaction_size": 200,
            "root_hash": "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"
        }
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = null;

const RESPONSE_PARAMS: ReqResParam[] = [
   {
    paramName: "ok",
    type: "boolean",
    paramDescription: "Indicates if the request was successful."
  },
  {
    paramName: "result",
    type: "object",
    paramDescription: "Details of the blockchain state.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "last_seqno",
        type: "integer",
        paramDescription: "Sequence number of the last block in the masterchain."
      },
      {
        paramName: "last_block_id",
        type: "string",
        paramDescription: "Unique identifier of the last block."
      },
      {
        paramName: "last_block_time",
        type: "integer",
        paramDescription: "Unix timestamp of when the last block was created."
      },
      {
        paramName: "masterchain_info",
        type: "object",
        paramDescription: "Information about the masterchain.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "total_blocks",
            type: "integer",
            paramDescription: "Total number of blocks in the masterchain."
          },
          {
            paramName: "total_transactions",
            type: "integer",
            paramDescription: "Total number of transactions processed in the masterchain."
          },
          {
            paramName: "block_time",
            type: "integer",
            paramDescription: "Average time taken to create a block, in seconds."
          },
          {
            paramName: "average_transaction_size",
            type: "integer",
            paramDescription: "Average size of transactions in bytes."
          },
          {
            paramName: "root_hash",
            type: "string",
            paramDescription: "Root hash of the masterchain state."
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve information about the TON masterchain",
  "Analyze masterchain status and metrics",
  "Audit masterchain properties",
];

const CONSTRAINTS = [
  "Requires a synced node for accurate data",
  "Supports Masterchain Info V3 only",
  "Depends on network connectivity",
];





