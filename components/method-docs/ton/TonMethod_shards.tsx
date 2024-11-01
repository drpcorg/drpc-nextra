import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_shards(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="shards"
      network="ton"
      cu = {100}
      description={"Retrieves information about the available shards in the TON blockchain, including their current states and details."}
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
     --url \ '${DRPC_ENDPOINT_URL_TON}shards?seqno=41089440' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}shards?seqno=41089440' \
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

const url = \`${DRPC_ENDPOINT_URL_TON}shards?seqno=41089440' \;

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
	url := "${DRPC_ENDPOINT_URL_TON}shards?seqno=41089440' \ "

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

url = '${DRPC_ENDPOINT_URL_TON}shards?seqno=41089440' \


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
    let url = "${DRPC_ENDPOINT_URL_TON}shards?seqno=41089440";

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
        "@type": "blocks.shards",
        "shards": [
            {
                "@type": "ton.blockIdExt",
                "workchain": 0,
                "shard": "2305843009213693952",
                "seqno": 46318027,
                "root_hash": "nDcQoEXk51uIA81rM2kwc/ceQpDxLXj+sQwlm37bbx0=",
                "file_hash": "2xs8ZzUvIMVst2Y4V5wUi3SHmwS057ogEci0XfTTs5U="
            },
            {
                "@type": "ton.blockIdExt",
                "workchain": 0,
                "shard": "6917529027641081856",
                "seqno": 46325559,
                "root_hash": "1/qSS3XGjt9DfTWoprnU9mRTBFOL76mI++06+8qzwQU=",
                "file_hash": "dEi45pexXnnhbZVBz6ABAjlmmC3VDteTjMJ+k5QJIPg="
            },
            {
                "@type": "ton.blockIdExt",
                "workchain": 0,
                "shard": "-6917529027641081856",
                "seqno": 46204566,
                "root_hash": "/LIdp0yNWqiag0UuGVyJ0brkqx20GD2y0ybVzeUFbFA=",
                "file_hash": "ANLBgEkWZIQ4ywmZxLZ/+j5J/6un6dRtCi9I47zQrsI="
            },
            {
                "@type": "ton.blockIdExt",
                "workchain": 0,
                "shard": "-2305843009213693952",
                "seqno": 46311381,
                "root_hash": "arjn0Rzg5a0vJ50pkLQcbXmBa8T0N0yqsocwVtJyXOw=",
                "file_hash": "RSWUebKiSZF3ecC4vyJ2kuQO/EyMQMdlilwq2Ob04To="
            }
        ],
        "@extra": "1730410285.710065:0:0.42444265563423145"
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
    paramDescription: "Indicates if the request was successful.",
  },
  {
    paramName: "result",
    type: "object",
    paramDescription: "Contains the result of the request.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "@type",
        type: "string",
        paramDescription: "Type of the result; indicates the response type.",
      },
      {
        paramName: "shards",
        type: "array",
        paramDescription: "List of shard block identifiers.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "Type of the shard block identifier.",
          },
          {
            paramName: "workchain",
            type: "integer",
            paramDescription: "The workchain ID; 0 indicates the masterchain.",
          },
          {
            paramName: "shard",
            type: "string",
            paramDescription: "The shard ID, represented as a string.",
          },
          {
            paramName: "seqno",
            type: "integer",
            paramDescription: "The sequence number of the block in the shard.",
          },
          {
            paramName: "root_hash",
            type: "string",
            paramDescription: "The root hash of the block.",
          },
          {
            paramName: "file_hash",
            type: "string",
            paramDescription: "The file hash associated with the block.",
          },
        ],
      },
      {
        paramName: "@extra",
        type: "string",
        paramDescription: "Additional metadata related to the request.",
      },
    ],
  },
];

const USE_CASES = [
  "Get details of available TON shards",
  "Monitor shard performance and status",
  "Analyze shard distribution across the network",
];

const CONSTRAINTS = [
  "Requires a synced node for accurate info",
  "Only active shards are reported",
  "Depends on the current network state",
];



