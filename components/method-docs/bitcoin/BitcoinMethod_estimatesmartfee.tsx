import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_estimatesmartfee(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="estimatesmartfee"
      network="bitcoin"
      cu={30}
      description={"Estimates the transaction fee based on current network conditions."}
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
  code: () => `curl \ ${DRPC_ENDPOINT_URL_BITCOIN} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  --data '{ "method": "estimatesmartfee", "params": [10] }'`,
},
{
  language: "js",
  code: () => `const url = \`${DRPC_ENDPOINT_URL_BITCOIN}\`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    method: "estimatesmartfee",
    params: [10]
  })
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));`,
},
{
  language: "node",
  code: () => `const axios = require('axios');

const url = \`${DRPC_ENDPOINT_URL_BITCOIN}\`;

axios.post(url, {
    method: "estimatesmartfee",
    params: [10]
}, {
    headers: {
        'Content-Type': 'application/json'
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
	url := "${DRPC_ENDPOINT_URL_BITCOIN}"

	data := map[string]interface{}{
		"method": "estimatesmartfee",
		"params": []interface{}{10},
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

url = '${DRPC_ENDPOINT_URL_BITCOIN}'

data = {
    "method": "estimatesmartfee",
    "params": [10]
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, json=data)
res = response.json()

print(res)
`,
},
{
  language: "rust",
  code: () => `use reqwest::Client;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "${DRPC_ENDPOINT_URL_BITCOIN}";

    let client = Client::new();
    let res = client.post(url)
        .header("Content-Type", "application/json")
        .json(&json!({
            "method": "estimatesmartfee",
            "params": [10]
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
    "id": "curltest",
    "result": {
        "feerate": 0.0001,
        "blocks": 10
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "conf_target",
    type: "numeric",
    paramDescription: "Required. The confirmation target in blocks."
  },
  {
    paramName: "estimate_mode",
    type: "string",
    paramDescription: "Optional. The fee estimate mode. By default, it is CONSERVATIVE."
  }
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "id",
    type: "integer",
  },
  {
    paramName: "jsonrpc",
    type: "string",
  },
  {
    paramName: "result",
    type: "numeric",
    childrenParamsType: "numeric",
    childrenParams: [
      {
    paramName: "blocks",
    type: "numeric",
    paramDescription: "The block number where the estimate was found."
  },
  {
    paramName: "feerate",
    type: "numeric",
    paramDescription: "The estimated fee rate in BTC/kB."
  },
  {
    paramName: "errors",
    type: "array",
    paramDescription: "Errors encountered during processing.",
    childrenParamsType: "string",
    childrenParams: [
      {
        paramName: "str",
        type: "string",
        paramDescription: "The error message."
      }
    ]
  }
    ],
  },
];

const USE_CASES = [
  "Estimate fee for confirmation target",
  "Determine optimal transaction fee",
  "Get recommended Bitcoin fee"
];

const CONSTRAINTS = [
  "Requires node connection",
  "Varies with network conditions",
  "Depends on recent block data"
];





