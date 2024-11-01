import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_detectAddress(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="detectAddress"
      network="ton"
      cu = {100}
      description={
          "Checks if a given string is a valid TON blockchain address."}
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
     --url \ '${DRPC_ENDPOINT_URL_TON}detectAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}detectAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}detectAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}detectAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

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

url = '${DRPC_ENDPOINT_URL_TON}detectAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'

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
    let url = "${DRPC_ENDPOINT_URL_TON}detectAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

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
        "raw_form": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        "bounceable": {
            "b64": "EQASNFZ4kKvN7xI0VniQq83vEjRWeJCrze8SNFZ4kKvN7xSL",
            "b64url": "EQASNFZ4kKvN7xI0VniQq83vEjRWeJCrze8SNFZ4kKvN7xSL"
        },
        "non_bounceable": {
            "b64": "UQASNFZ4kKvN7xI0VniQq83vEjRWeJCrze8SNFZ4kKvN70lO",
            "b64url": "UQASNFZ4kKvN7xI0VniQq83vEjRWeJCrze8SNFZ4kKvN70lO"
        },
        "given_type": "raw_form",
        "test_only": false
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
    paramDescription: "Indicates if the request was successful.",
  },
  {
    paramName: "result",
    type: "object",
    paramDescription: "The detailed account address information.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "raw_form",
        type: "string",
        paramDescription: "The raw form of the account address.",
      },
      {
        paramName: "bounceable",
        type: "object",
        paramDescription: "Bounceable address representations.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "b64",
            type: "string",
            paramDescription: "Base64 encoded bounceable address.",
          },
          {
            paramName: "b64url",
            type: "string",
            paramDescription: "URL-safe Base64 encoded bounceable address.",
          },
        ],
      },
      {
        paramName: "non_bounceable",
        type: "object",
        paramDescription: "Non-bounceable address representations.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "b64",
            type: "string",
            paramDescription: "Base64 encoded non-bounceable address.",
          },
          {
            paramName: "b64url",
            type: "string",
            paramDescription: "URL-safe Base64 encoded non-bounceable address.",
          },
        ],
      },
      {
        paramName: "given_type",
        type: "string",
        paramDescription: "The specified format type of the address (e.g., raw_form).",
      },
      {
        paramName: "test_only",
        type: "boolean",
        paramDescription: "Indicates if the address is for test-only purposes.",
      },
    ],
  },
];

const USE_CASES = [
  "Check if a TON address is active",
  "Identify the validity of a given address",
  "Confirm address status in the network",
];

const CONSTRAINTS = [
  "Requires a valid TON address",
  "Only detects active addresses",
  "Relies on node synchronization with TON",
];


