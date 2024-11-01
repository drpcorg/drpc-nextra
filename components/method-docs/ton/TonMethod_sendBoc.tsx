import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_sendBoc(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="sendBoc"
      network="ton"
      cu = {100}
      description={"Sends a Binary Object Container (BOC) to the TON blockchain, allowing for the execution of smart contracts or other operations that require BOC data."}
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
     --url '${DRPC_ENDPOINT_URL_TON}rest/sendBoc' \\
     --header 'accept: application/json' \\
     --data '{
         "boc": "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
    }'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}sendBoc\`;

fetch(url, {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    boc: "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
  })
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

const url = \`${DRPC_ENDPOINT_URL_TON}sendBoc\`;

axios.get(url, {
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  },
  data: {
    boc: "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
  }
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));`,
  },
  {
    language: "go",
    code: () => `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	url := "${DRPC_ENDPOINT_URL_TON}sendBoc"

	bocData := map[string]string{"boc": "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="}
	jsonData, err := json.Marshal(bocData)
	if err != nil {
		fmt.Println("Error marshalling JSON:", err)
		return
	}

	req, err := http.NewRequest("GET", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}
	req.Header.Set("accept", "application/json")
	req.Header.Set("Content-Type", "application/json")

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

url = '${DRPC_ENDPOINT_URL_TON}sendBoc'

data = {
    "boc": "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
}

response = requests.get(url, headers={'accept': 'application/json', 'Content-Type': 'application/json'}, json=data)
res = response.json()

print(res)
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::{Client, Error};
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Error> {
    let url = "${DRPC_ENDPOINT_URL_TON}sendBoc";

    let client = Client::new();
    let res = client.get(url)
        .header("accept", "application/json")
        .header("Content-Type", "application/json")
        .json(&json!({
            "boc": "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
        }))
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
    "status": "success",
    "transactionId": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
    "message": "BOC sent successfully."
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "boc",
    type: "string",
    paramDescription: "Encoded bag of cells",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
      {
        paramName: "status",
        type: "string",
        paramDescription: "Indicates the status of the request.",
      },
    {
      paramName: "transactionId",
      type: "string",
      paramDescription: "The unique identifier of the transaction.",
    },
    {
      paramName: "message",
      type: "string",
      paramDescription: "A message detailing the result of the operation.",
    },
];

const USE_CASES = [
  "Send a BOC to the TON network",
  "Submit smart contract messages",
  "Facilitate network transactions",
];

const CONSTRAINTS = [
  "Requires a valid BOC",
  "Depends on node connectivity",
  "Only processes valid formats",
];




