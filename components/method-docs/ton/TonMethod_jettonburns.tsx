import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL_TON_NFT, DRPC_ENDPOINT_URL_TON_JETTON} from "./constants";

export function TonMethod_jettonburns(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="jetton/burns"
      network="ton"
      cu = {100}
      description={
          "Provides information on Jetton burn events."}
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
     --url '\ ${DRPC_ENDPOINT_URL_TON_JETTON}burns?limit=128&offset=0' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_JETTON}burns?limit=128&offset=0\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_JETTON}burns?limit=128&offset=0\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_JETTON}burns?limit=128&offset=0"

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

url = '${DRPC_ENDPOINT_URL_TON_JETTON}burns?limit=128&offset=0'

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
    let url = "${DRPC_ENDPOINT_URL_TON_JETTON}burns?limit=128&offset=0";

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
            "burn_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "address": "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
            "amount": "1000000",
            "timestamp": 1693527600,
            "message": "Burn of excess tokens",
            "transaction_id": "0:a9d39a7f1e5f849835496b052885ed2ac07d54d5e0e11f2b17c3b00e3295a2b0"
        },
        {
            "burn_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "address": "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
            "amount": "500000",
            "timestamp": 1693527500,
            "message": "Burn for contract upgrade",
            "transaction_id": "0:b2c43e5f2f4a849835496b052885ed2ac07d54d5e0e11f2b17c3b00e3295a2a1"
        }
        // Additional burn events up to the limit...
    ]
}

`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "limit",
    type: "integer",
    paramDescription: "Optional. The maximum number of NFT collections to return. Default is 128."
  },
  {
    paramName: "offset",
    type: "integer",
    paramDescription: "Optional. The number of NFT collections to skip before starting to return results. Default is 0."
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
    paramDescription: "List of burn details.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "burn_id",
        type: "string",
        paramDescription: "Unique identifier of the burn operation."
      },
      {
        paramName: "address",
        type: "string",
        paramDescription: "Address associated with the burn operation."
      },
      {
        paramName: "amount",
        type: "string",
        paramDescription: "Amount of tokens burned."
      },
      {
        paramName: "timestamp",
        type: "integer",
        paramDescription: "Unix timestamp when the burn operation occurred."
      },
      {
        paramName: "message",
        type: "string",
        paramDescription: "Message associated with the burn operation."
      },
      {
        paramName: "transaction_id",
        type: "string",
        paramDescription: "Identifier of the transaction that recorded the burn."
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve data on Jetton burns",
  "Analyze burn transaction details",
  "Audit Jetton burn history",
];

const CONSTRAINTS = [
  "Requires valid burn ID",
  "Supports Jetton Burns V3 only",
];






