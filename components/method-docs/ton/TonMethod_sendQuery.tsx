import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_sendQuery(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="sendQuery"
      network="ton"
      cu = {100}
      description={"Sends a query to the TON blockchain and returns the result, allowing users to execute commands and retrieve information from the network."}
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
    code: () => `curl --request POST \\
     --url '${DRPC_ENDPOINT_URL_TON}sendQuery' \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --header 'x-api-key: t-66a730ccccfd17001c479705-2f597d14ad7543f289a03418' \\
     --data '{
         "address": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
         "body": "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
     }'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}sendQuery\`;

fetch(url, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': 't-66a730ccccfd17001c479705-2f597d14ad7543f289a03418'
  },
  body: JSON.stringify({
    address: "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
   "body": "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
      
   
  })
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

const url = \`${DRPC_ENDPOINT_URL_TON}sendQuery\`;

axios.post(url, {
    address: "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
   "body": "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
     
}, {
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'x-api-key': 't-66a730ccccfd17001c479705-2f597d14ad7543f289a03418'
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
	url := "${DRPC_ENDPOINT_URL_TON}sendQuery"

	data := map[string]interface{}{
		"address": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
		"body": "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
     
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshalling JSON:", err)
		return
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}
	req.Header.Set("accept", "application/json")
	req.Header.Set("content-type", "application/json")
	req.Header.Set("x-api-key", "t-66a730ccccfd17001c479705-2f597d14ad7543f289a03418")

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

url = '${DRPC_ENDPOINT_URL_TON}sendQuery'

data = {
    "address": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
    "body": "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
     
}

response = requests.post(url, headers={'accept': 'application/json', 'content-type': 'application/json', 'x-api-key': 't-66a730ccccfd17001c479705-2f597d14ad7543f289a03418'}, json=data)
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
    let url = "${DRPC_ENDPOINT_URL_TON}sendQuery";

    let client = Client::new();
    let res = client.post(url)
        .header("accept", "application/json")
        .header("content-type", "application/json")
        .header("x-api-key", "t-66a730ccccfd17001c479705-2f597d14ad7543f289a03418")
        .json(&json!({
            "address": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "body": "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="
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
    "transactionHash": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
    "message": "Query sent successfully."
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "address",
    type: "string",
    paramDescription: "Identifier of the target TON account in any form.",
  },
    {
    paramName: "body",
    type: "string",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
      {
       paramName: "status",
        type: "string",
        paramDescription: "Indicates the status of the request.",
      },
    {
      paramName: "transactionHash",
  type: "string",
  paramDescription: "The hash of the transaction that was processed.",
    },
    {
     paramName: "message",
  type: "string",
  paramDescription: "A message indicating the result of the query."
},
];

const USE_CASES = [
  "Send a query to the TON network",
  "Retrieve data from smart contracts",
  "Facilitate interaction with blockchain services",
];

const CONSTRAINTS = [
  "Requires a valid query structure",
  "Dependent on network connectivity",
  "Only processes supported query types",
];





