import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_jsonRPC(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="jsonRPC"
      network="ton"
      cu = {100}
      description={"Executes a specified GET method against the TON blockchain and returns the result, allowing users to retrieve information or data based on their request."}
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
     --url '\ ${DRPC_ENDPOINT_URL_TON}jsonRPC' \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --header 'x-api-key: t-66a730ccccfd17001c479705-2f597d14ad7543f289a03418' \\
     --data '{
         "jsonrpc": "2.0",
         "method": "subtract",
         "params": [42, 23],
         "id": 1
     }'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}jsonRPC\`;

fetch(url, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': 't-66a730ccccfd17001c479705-2f597d14ad7543f289a03418'
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    method: "subtract",
    params: [42, 23],
    id: 1
  })
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

const url = \`${DRPC_ENDPOINT_URL_TON}jsonRPC\`;

axios.post(url, {
    jsonrpc: "2.0",
    method: "subtract",
    params: [42, 23],
    id: 1
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
	url := "${DRPC_ENDPOINT_URL_TON}jsonRPC"

	data := map[string]interface{}{
		"jsonrpc": "2.0",
		"method": "subtract",
		"params": []interface{}{42, 23},
		"id":     1,
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

url = '${DRPC_ENDPOINT_URL_TON}jsonRPC'

data = {
    "jsonrpc": "2.0",
    "method": "subtract",
    "params": [42, 23],
    "id": 1
}

response = requests.post(url, headers={
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': 't-66a730ccccfd17001c479705-2f597d14ad7543f289a03418'
}, json=data)

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
    let url = "${DRPC_ENDPOINT_URL_TON}jsonRPC";

    let client = Client::new();
    let res = client.post(url)
        .header("accept", "application/json")
        .header("content-type", "application/json")
        .header("x-api-key", "t-66a730ccccfd17001c479705-2f597d14ad7543f289a03418")
        .json(&json!({
            "jsonrpc": "2.0",
            "method": "subtract",
            "params": [42, 23],
            "id": 1
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
    "jsonrpc": "2.0",
    "result": 19,
    "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "jsonrpc",
    type: "string",
    paramDescription: "Specifies the version of the JSON-RPC protocol."
  },
  {
    paramName: "method",
    type: "string",
    paramDescription: "The name or identifier of the method to be executed on the contract."
  },
  {
    paramName: "params",
    type: "array",
    paramDescription: "An array of parameters being passed to the method."
  },
  {
    paramName: "id",
    type: "integer",
    paramDescription: "A unique identifier for the request, useful for matching responses."
  }
];

const RESPONSE_PARAMS: ReqResParam[] = [
      {
    paramName: "jsonrpc",
    type: "string",
    paramDescription: "Specifies the JSON-RPC protocol version."
  },
  {
    paramName: "result",
    type: "integer",
    paramDescription: "The result of the method execution."
  },
  {
    paramName: "id",
    type: "integer",
    paramDescription: "The unique identifier matching the original request ID."
  }
];

const USE_CASES = [
  "Handle JSON-RPC requests",
  "Execute various commands via JSON-RPC",
  "Enable interaction with TON network",
];

const CONSTRAINTS = [
  "Requires formatted JSON-RPC requests",
  "Dependent on node connectivity",
  "Only standard JSON-RPC methods",
];







