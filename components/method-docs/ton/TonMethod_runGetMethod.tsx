import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_runGetMethod(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="runGetMethod"
      network="ton"
      cu = {100}
      description={"Processes incoming JSON-RPC requests, facilitating communication between clients and the TON blockchain by executing the requested operations and returning the appropriate responses."}
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
     --url '\ ${DRPC_ENDPOINT_URL_TON}runGetMethod' \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --header 'x-api-key: t-66a730ccccfd17001c479705-2f597d14ad7543f289a03418' \\
     --data '{
         "address": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
         "method": "getBalance",
         "stack": [
             ["num", 3],
             ["cell", "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="],
             ["slice", "ABCD1234"]
         ]
     }'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}runGetMethod\`;

fetch(url, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': 't-66a730ccccfd17001c479705-2f597d14ad7543f289a03418'
  },
  body: JSON.stringify({
    address: "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
    method: "getBalance",
    stack: [
      ["num", 3],
      ["cell", "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="],
      ["slice", "ABCD1234"]
    ]
  })
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

const url = \`${DRPC_ENDPOINT_URL_TON}runGetMethod\`;

axios.post(url, {
    address: "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
    method: "getBalance",
    stack: [
        ["num", 3],
        ["cell", "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="],
        ["slice", "ABCD1234"]
    ]
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
	url := "${DRPC_ENDPOINT_URL_TON}runGetMethod"

	data := map[string]interface{}{
		"address": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
		"method": "getBalance",
		"stack": []interface{}{
			[]interface{}{"num", 3},
			[]interface{}{"cell", "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="},
			[]interface{}{"slice", "ABCD1234"},
		},
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

url = '${DRPC_ENDPOINT_URL_TON}runGetMethod'

data = {
    "address": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
    "method": "getBalance",
    "stack": [
        ["num", 3],
        ["cell", "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="],
        ["slice", "ABCD1234"]
    ]
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
    let url = "${DRPC_ENDPOINT_URL_TON}runGetMethod";

    let client = Client::new();
    let res = client.post(url)
        .header("accept", "application/json")
        .header("content-type", "application/json")
        .header("x-api-key", "t-66a730ccccfd17001c479705-2f597d14ad7543f289a03418")
        .json(&json!({
            "address": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "method": "getBalance",
            "stack": [
                ["num", 3],
                ["cell", "te6cckEBAQEAAjz+9wAAMABBBIAgAAZL0AAdBGdZnYDAAUGdD59VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABAcAA=="],
                ["slice", "ABCD1234"]
            ]
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
    "data": {
        "result": [
            "0x00000000000000000000000000000001"
        ]
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "address",
    type: "string",
    paramDescription: "The contract address where the method will be executed."
  },
  {
    paramName: "method",
    type: "string",
    paramDescription: "The name or identifier of the method to be executed on the contract."
  },
  {
    paramName: "stack",
    type: "array",
    paramDescription: "A nested array representing stack elements for the method call."
  }
];

const RESPONSE_PARAMS: ReqResParam[] = [
      {
    paramName: "status",
    type: "string",
    paramDescription: "Indicates the success or failure status of the method execution."
  },
  {
    paramName: "data",
    type: "object",
    paramDescription: "Contains the result data of the executed method."
  },
  {
    paramName: "result",
    type: "array",
    paramDescription: "An array containing the result(s) returned by the executed method.",
  },
];

const USE_CASES = [
  "Run a specific method on a TON smart contract",
  "Retrieve data from contract state",
  "Test contract functions without executing a transaction",
];

const CONSTRAINTS = [
  "Requires a valid method and contract address",
  "Only supports existing contract methods",
  "Dependent on node synchronization",
];






