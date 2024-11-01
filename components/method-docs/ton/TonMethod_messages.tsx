import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL_TON_NFT, DRPC_ENDPOINT_URL_TON_V3} from "./constants";

export function TonMethod_messages(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="messages"
      network="ton"
      cu = {100}
      description={
          "Retrieves a list of messages"}
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
     --url '\ ${DRPC_ENDPOINT_URL_TON_V3}messages?limit=128&offset=0&sort=desc' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_V3}messages?limit=128&offset=0&sort=desc\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_V3}messages?limit=128&offset=0&sort=desc\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_V3}messages?limit=128&offset=0&sort=desc"

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

url = '${DRPC_ENDPOINT_URL_TON_V3}messages?limit=128&offset=0&sort=desc'

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
    let url = "${DRPC_ENDPOINT_URL_TON_V3}messages?limit=128&offset=0&sort=desc";

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
            "message_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "from": "EQD1Lp1KcmGHFpE8eIvL1mnHT83b4HdB8HJxuSfq6Rq4zGyN",
            "to": "EQDzSp9Qc6KcJXGJc7NkSVxj2pzLsmM4NdFpc8i2dZqjU9i9",
            "body": "Hello, this is a test message.",
            "timestamp": 1693527600,
            "status": "sent",
            "transaction_id": "0:a9d39a7f1e5f849835496b052885ed2ac07d54d5e0e11f2b17c3b00e3295a2b0"
        },
        {
            "message_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "from": "EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2",
            "to": "EQC7VpEHw2DA9hxkdx_WXv9NSkb_v_KVQMY2Le4a4Fk9DUqQ",
            "body": "Monthly subscription payment notification.",
            "timestamp": 1693527500,
            "status": "delivered",
            "transaction_id": "0:b2c43e5f2f4a849835496b052885ed2ac07d54d5e0e11f2b17c3b00e3295a2a1"
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
    paramDescription: "List of message details.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "message_id",
        type: "string",
        paramDescription: "Unique identifier of the message."
      },
      {
        paramName: "from",
        type: "string",
        paramDescription: "Address of the sender."
      },
      {
        paramName: "to",
        type: "string",
        paramDescription: "Address of the recipient."
      },
      {
        paramName: "body",
        type: "string",
        paramDescription: "Content of the message."
      },
      {
        paramName: "timestamp",
        type: "integer",
        paramDescription: "Unix timestamp when the message was sent."
      },
      {
        paramName: "status",
        type: "string",
        paramDescription: "Current status of the message (e.g., sent, delivered)."
      },
      {
        paramName: "transaction_id",
        type: "string",
        paramDescription: "Identifier of the transaction associated with the message."
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve data on TON messages",
  "Analyze message details and history",
  "Audit message transactions",
];

const CONSTRAINTS = [
  "Requires valid message ID",
  "Supports Messages V3 only",
  "Depends on sync",
];




