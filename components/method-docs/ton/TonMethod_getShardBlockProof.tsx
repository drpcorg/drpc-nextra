import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getShardBlockProof(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getShardBlockProof"
      network="ton"
      cu = {100}
      description={"Retrieves the proof for a specified block within a shard, allowing verification of its validity."}
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
     --url \ '${DRPC_ENDPOINT_URL_TON}getShardBlockProof?workchain=0&shard=-9223372036854775808&seqno=1000000' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getShardBlockProof?workchain=0&shard=-9223372036854775808&seqno=1000000' \
     --header 'accept: application/json'\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}getShardBlockProof?workchain=0&shard=-9223372036854775808&seqno=1000000' \
     --header 'accept: application/json'\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}getShardBlockProof?workchain=0&shard=-9223372036854775808&seqno=1000000' \
     --header 'accept: application/json'"

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

url = '${DRPC_ENDPOINT_URL_TON}getShardBlockProof?workchain=0&shard=-9223372036854775808&seqno=1000000' \
     --header 'accept: application/json''

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
    let url = "${DRPC_ENDPOINT_URL_TON}getShardBlockProof?workchain=0&shard=-9223372036854775808&seqno=1000000";

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
    "id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    "workchain": 0,
    "shard": -9223372036854775808,
    "seqno": 1000000,
    "proof": {
        "block_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        "prev_block_id": "0:abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        "shard_state": {
            "last_seqno": 1000000,
            "root_hash": "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "state_hash": "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
        },
        "transactions": [
            {
                "id": "transaction1-id",
                "status": "confirmed",
                "value": "5000",
                "to": "recipient-address-1",
                "from": "sender-address-1",
                "created_at": 1693527600
            },
            {
                "id": "transaction2-id",
                "status": "pending",
                "value": "2000",
                "to": "recipient-address-2",
                "from": "sender-address-2",
                "created_at": 1693527700
            }
        ]
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
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "id",
    type: "string",
    paramDescription: "Unique identifier for the block.",
  },
  {
    paramName: "workchain",
    type: "integer",
    paramDescription: "ID of the workchain; 0 represents the masterchain.",
  },
  {
    paramName: "shard",
    type: "integer",
    paramDescription: "ID of the shard, represented as a signed integer.",
  },
  {
    paramName: "seqno",
    type: "integer",
    paramDescription: "Sequence number of the block.",
  },
  {
    paramName: "proof",
    type: "object",
    paramDescription: "Proof data related to the block.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "block_id",
        type: "string",
        paramDescription: "Identifier of the block.",
      },
      {
        paramName: "prev_block_id",
        type: "string",
        paramDescription: "Identifier of the previous block.",
      },
      {
        paramName: "shard_state",
        type: "object",
        paramDescription: "State information for the shard.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "last_seqno",
            type: "integer",
            paramDescription: "The last sequence number for the shard.",
          },
          {
            paramName: "root_hash",
            type: "string",
            paramDescription: "Root hash of the shard's state.",
          },
          {
            paramName: "state_hash",
            type: "string",
            paramDescription: "Hash representing the current state of the shard.",
          },
        ],
      },
      {
        paramName: "transactions",
        type: "array",
        paramDescription: "List of transactions included in the block.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "id",
            type: "string",
            paramDescription: "Identifier for the transaction.",
          },
          {
            paramName: "status",
            type: "string",
            paramDescription: "Current status of the transaction (e.g., confirmed, pending).",
          },
          {
            paramName: "value",
            type: "string",
            paramDescription: "Amount of value transferred in the transaction.",
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
            paramName: "created_at",
            type: "integer",
            paramDescription: "Timestamp when the transaction was created.",
          },
        ],
      },
    ],
  },
  {
    paramName: "status",
    type: "string",
    paramDescription: "Status of the request.",
  },
];
const USE_CASES = [
  "Retrieve proof of a specific block in a TON shard",
  "Verify block validity within a shard context",
  "Audit blockchain data for integrity checks",
];

const CONSTRAINTS = [
  "Requires a valid shard ID and block ID",
  "Only provides proof for existing blocks",
];



