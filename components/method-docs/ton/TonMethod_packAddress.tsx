import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_packAddress(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="packAddress"
      network="ton"
      cu = {100}
      description={"Encodes a given TON blockchain address into a format suitable for transmission and storage."}
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
     --url \ ${DRPC_ENDPOINT_URL_TON}packAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}packAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}packAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}packAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

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

url = '${DRPC_ENDPOINT_URL_TON}packAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'

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
    let url = "${DRPC_ENDPOINT_URL_TON}packAddress?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

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
    "result": "EQASNFZ4kKvN7xI0VniQq83vEjRWeJCrze8SNFZ4kKvN7xSL"
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
    type: "string",
    paramDescription: "The packed address in its encoded form.",
  },
];

const USE_CASES = [
  "Encode a TON address into a specific format",
  "Prepare an address for secure storage",
  "Standardize address format for compatibility",
];

const CONSTRAINTS = [
  "Requires a valid TON address as input",
  "Only supports certain encoding formats",
  "Depends on node compatibility with TON encoding",
];



