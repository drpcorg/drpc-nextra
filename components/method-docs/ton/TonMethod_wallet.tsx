import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL_TON_NFT, DRPC_ENDPOINT_URL_TON_V3} from "./constants";

export function TonMethod_wallet(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="wallet"
      network="ton"
      cu = {100}
      description={
          "Retrieves detailed information about a specific wallet."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="string"
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
     --url \ '${DRPC_ENDPOINT_URL_TON_V3}wallet?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_V3}wallet?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_V3}wallet?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_V3}wallet?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

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

url = '${DRPC_ENDPOINT_URL_TON_V3}wallet?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'

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
    let url = "${DRPC_ENDPOINT_URL_TON_V3}wallet?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

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
        "address": "0QAvTjjA5ZBbHN3a-SYnO1qvzlgNx09OC2bhYBPAbfs3S6q7",
        "balance": "1500000000",
        "status": "active",
        "account_type": "wallet",
        "last_transaction_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        "last_transaction_lt": 47597573000002,
        "last_transaction_timestamp": 1693527600
    }
}`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "address",
    type: "string",
    paramDescription: "Identifier of the target TON account in any form.",
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
    paramDescription: "Details of the account.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "address",
        type: "string",
        paramDescription: "The account's address."
      },
      {
        paramName: "balance",
        type: "string",
        paramDescription: "Current balance of the account, in the smallest units."
      },
      {
        paramName: "status",
        type: "string",
        paramDescription: "The current status of the account (e.g., active)."
      },
      {
        paramName: "account_type",
        type: "string",
        paramDescription: "Type of the account (e.g., wallet)."
      },
      {
        paramName: "last_transaction_id",
        type: "string",
        paramDescription: "Identifier of the last transaction associated with the account."
      },
      {
        paramName: "last_transaction_lt",
        type: "integer",
        paramDescription: "Logical time of the last transaction."
      },
      {
        paramName: "last_transaction_timestamp",
        type: "integer",
        paramDescription: "Unix timestamp of the last transaction."
      }
    ]
  }
];

const USE_CASES = [
  "Create or manage a TON Wallet V3",
  "Generate keys for secure transactions",
  "Store and transfer TON assets",
];

const CONSTRAINTS = [
  "Requires valid key pair",
  "Supports Wallet V3 format only",
  "Depends on network sync",
];


