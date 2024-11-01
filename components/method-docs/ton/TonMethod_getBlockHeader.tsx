import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getBlockHeader(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getBlockHeader"
      network="ton"
      cu = {100}
      description={"Retrieves the header information for a specified block, including metadata such as the block's ID, timestamp, and previous block reference."}
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
     --url \ '${DRPC_ENDPOINT_URL_TON}getBlockHeader?workchain=0&shard=-9223372036854775808&seqno=1000000' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getBlockHeader?workchain=0&shard=-9223372036854775808&seqno=1000000' \
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

const url = \`${DRPC_ENDPOINT_URL_TON}getBlockHeader?workchain=0&shard=-9223372036854775808&seqno=1000000' \
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
	url := "${DRPC_ENDPOINT_URL_TON}getBlockHeader?workchain=0&shard=-9223372036854775808&seqno=1000000' \
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

url = '${DRPC_ENDPOINT_URL_TON}getBlockHeader?workchain=0&shard=-9223372036854775808&seqno=1000000' \
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
    let url = "${DRPC_ENDPOINT_URL_TON}getBlockHeader?workchain=0&shard=-9223372036854775808&seqno=1000000";

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
    "id": "0:1c23f2f29e4b4ef09e10c5a3eec7f6c0c95bc8b1cdca9d2b7e10fdb0eb872130",
    "workchain": 0,
    "shard": -9223372036854775808,
    "seqno": 1000000,
    "proof": {
        "block_id": "0:1c23f2f29e4b4ef09e10c5a3eec7f6c0c95bc8b1cdca9d2b7e10fdb0eb872130",
        "prev_block_id": "0:af0c98a1d5098bbff3f9d8c40e46f59315e0c3f51e2377c888899e94e97b8c2",
        "shard_state": {
            "last_seqno": 999999,
            "root_hash": "e0c53bb6f6e4f8e4506f00b6e940f8c58cbd0843b7f67f290f99c2c2e303aef",
            "state_hash": "b21dfd4091fcb42c7bcf0b21c885ff704dc78b5929af6de249dc58b2c8f144e"
        },
        "transactions": [
            {
                "id": "trans1_id",
                "status": "confirmed",
                "value": "2500",
                "to": "0:abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234",
                "from": "0:efgh5678efgh5678efgh5678efgh5678efgh5678efgh5678efgh5678efgh5678",
                "created_at": 1693527600
            },
            {
                "id": "trans2_id",
                "status": "pending",
                "value": "7500",
                "to": "0:ijkl9012ijkl9012ijkl9012ijkl9012ijkl9012ijkl9012ijkl9012ijkl9012",
                "from": "0:mnop3456mnop3456mnop3456mnop3456mnop3456mnop3456mnop3456mnop3456",
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
    paramDescription: "Unique identifier of the block.",
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
    paramDescription: "Contains proof information related to the block.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "block_id",
        type: "string",
        paramDescription: "ID of the block being referenced.",
      },
      {
        paramName: "prev_block_id",
        type: "string",
        paramDescription: "ID of the previous block.",
      },
      {
        paramName: "shard_state",
        type: "object",
        paramDescription: "State of the shard at the time of the block.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "last_seqno",
            type: "integer",
            paramDescription: "The last sequence number for this shard.",
          },
          {
            paramName: "root_hash",
            type: "string",
            paramDescription: "Root hash of the shard state.",
          },
          {
            paramName: "state_hash",
            type: "string",
            paramDescription: "Hash representing the state of the shard.",
          },
        ],
      },
      {
        paramName: "transactions",
        type: "array",
        paramDescription: "Array of transactions included in the block.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "id",
            type: "string",
            paramDescription: "Unique identifier of the transaction.",
          },
          {
            paramName: "status",
            type: "string",
            paramDescription: "Current status of the transaction (e.g., confirmed, pending).",
          },
          {
            paramName: "value",
            type: "string",
            paramDescription: "Amount/value involved in the transaction.",
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
            paramDescription: "Unix timestamp of when the transaction was created.",
          },
        ],
      },
    ],
  },
  {
    paramName: "status",
    type: "string",
    paramDescription: "Indicates the status of the response.",
  },
];

const USE_CASES = [
  "Retrieve the header of a specific block",
  "Access metadata about block properties",
  "Verify block information for audits",
];

const CONSTRAINTS = [
  "Requires a valid block ID or number",
  "Only provides headers for existing blocks",
  "Dependent on node synchronization",
];




