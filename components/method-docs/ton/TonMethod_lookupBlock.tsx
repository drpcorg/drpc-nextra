import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_lookupBlock(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="lookupBlock"
      network="ton"
      cu = {100}
      description={"Look up block by its ID or other identifiers."}
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
     --url \ '${DRPC_ENDPOINT_URL_TON}lookupBlock?workchain=0&shard=-9223372036854775808&seqno=1000000&lt=1000000000&unixtime=1693527600' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}lookupBlock?workchain=0&shard=-9223372036854775808&seqno=1000000&lt=1000000000&unixtime=1693527600 \

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

const url = \`${DRPC_ENDPOINT_URL_TON}lookupBlock?workchain=0&shard=-9223372036854775808&seqno=1000000&lt=1000000000&unixtime=1693527600' \

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
	url := "${DRPC_ENDPOINT_URL_TON}lookupBlock?workchain=0&shard=-9223372036854775808&seqno=1000000&lt=1000000000&unixtime=1693527600'" \

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

url = '${DRPC_ENDPOINT_URL_TON}lookupBlock?workchain=0&shard=-9223372036854775808&seqno=1000000&lt=1000000000&unixtime=1693527600' \

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
    let url = "${DRPC_ENDPOINT_URL_TON}lookupBlock?workchain=0&shard=-9223372036854775808&seqno=1000000&lt=1000000000&unixtime=1693527600";

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
    "id": "block-id",
    "workchain": 0,
    "shard": -9223372036854775808,
    "seqno": 1000000,
    "lt": 1000000000,
    "unixtime": 1693527600,
    "prev": "previous-block-id",
    "block": {
        "gen_time": 1693527600,
        "masterchain_id": "masterchain-id",
        "data": {
            "transactions": [
                {
                    "id": "transaction-id",
                    "value": "1000",
                    "to": "recipient-address",
                    "from": "sender-address",
                    "status": "confirmed"
                }
            ],
            "message": "Block successfully retrieved."
        }
    },
    "status": "success"
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "workchain",
    type: "integer",
    paramDescription: "Represents the workchain ID; 0 denotes the masterchain (TON's main chain).",
  },
  {
    paramName: "shard",
    type: "integer",
    paramDescription: "Denotes the shard ID; -9223372036854775808 represents the leftmost shard.",
  },
  {
    paramName: "seqno",
    type: "integer",
    paramDescription: "The sequence number of the block.",
  },
  {
    paramName: "lt",
    type: "integer",
    paramDescription: "Logical time associated with the block.",
  },
  {
    paramName: "unixtime",
    type: "integer",
    paramDescription: "The Unix timestamp of the block.",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "id",
    type: "string",
    paramDescription: "Identifier of the block.",
  },
  {
    paramName: "workchain",
    type: "integer",
    paramDescription: "The workchain ID; 0 indicates the masterchain.",
  },
  {
    paramName: "shard",
    type: "integer",
    paramDescription: "The shard ID; -9223372036854775808 represents the leftmost shard.",
  },
  {
    paramName: "seqno",
    type: "integer",
    paramDescription: "The sequence number of the block.",
  },
  {
    paramName: "lt",
    type: "integer",
    paramDescription: "Logical time associated with the block.",
  },
  {
    paramName: "unixtime",
    type: "integer",
    paramDescription: "The Unix timestamp of the block.",
  },
  {
    paramName: "prev",
    type: "string",
    paramDescription: "Identifier of the previous block.",
  },
  {
    paramName: "block",
    type: "object",
    paramDescription: "Detailed information about the block.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "gen_time",
        type: "integer",
        paramDescription: "The generation time of the block.",
      },
      {
        paramName: "masterchain_id",
        type: "string",
        paramDescription: "Identifier of the masterchain.",
      },
      {
        paramName: "data",
        type: "object",
        paramDescription: "Additional data related to the block.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "transactions",
            type: "array",
            paramDescription: "List of transactions in the block.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "id",
                type: "string",
                paramDescription: "Identifier of the transaction.",
              },
              {
                paramName: "value",
                type: "string",
                paramDescription: "Value transferred in the transaction.",
              },
              {
                paramName: "to",
                type: "string",
                paramDescription: "Recipient address of the transaction.",
              },
              {
                paramName: "from",
                type: "string",
                paramDescription: "Sender address of the transaction.",
              },
              {
                paramName: "status",
                type: "string",
                paramDescription: "Status of the transaction (e.g., confirmed).",
              },
            ],
          },
          {
            paramName: "message",
            type: "string",
            paramDescription: "Message indicating the result of the block retrieval.",
          },
        ],
      },
    ],
  },
  {
    paramName: "status",
    type: "string",
    paramDescription: "The status of the request, indicating success or failure.",
  },
];

const USE_CASES = [
  "Retrieve details of a specific block by its ID or number",
  "Access transaction data within a given block",
  "Analyze block properties for auditing purposes",
];

const CONSTRAINTS = [
  "Requires a valid block ID or number",
  "Only provides information for existing blocks",
  "Dependent on node synchronization with the TON network",
];


