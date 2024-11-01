import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_estimateFee(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="estimateFee"
      network="ton"
      cu = {100}
      description={"Calculates the estimated transaction fee for a specified operation on the TON blockchain, helping users understand the cost of their transactions."}
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
     --url '${DRPC_ENDPOINT_URL_TON}estimateFee' \\
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
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}estimateFee\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}estimateFee\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}estimateFee"

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

url = '${DRPC_ENDPOINT_URL_TON}estimateFee'

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
    let url = "${DRPC_ENDPOINT_URL_TON}estimateFee";

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
    "fee": "0.0001", 
    "message": "Fee estimated successfully."
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
      paramName: "fee",
  type: "string",
  paramDescription: "The estimated fee for the transaction.",
  },
    {
     paramName: "message",
  type: "string",
  paramDescription: "A message indicating the result of the fee estimation."
},
];

const USE_CASES = [
  "Estimate transaction fees on the TON network",
  "Calculate costs for BOC submissions",
  "Plan budgets for transactions",
];

const CONSTRAINTS = [
  "Requires valid transaction input",
  "Depends on network conditions",
  "Only estimates supported operations",
];






