import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_sendrawtransaction(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="sendrawtransaction"
      network="bitcoin"
      cu={20}
      description={"Submits a raw transaction to the network for processing."}
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
  --data '{ "method": "sendrawtransaction", "params": ["hexstring"] }'`,
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
    method: "sendrawtransaction",
    params: ["hexstring"]
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
    method: "sendrawtransaction",
    params: ["hexstring"]
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
		"method": "sendrawtransaction",
		"params": []interface{}{"hexstring"},
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
    "method": "sendrawtransaction",
    "params": ["hexstring"]
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
            "method": "sendrawtransaction",
            "params": ["hexstring"]
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
    "result": "f7a1b3c9e4e3f16383f7be9f33f8e37963b5f8a263b4fb0b24f8a8199055c23f"
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "hexstring",
    type: "string",
    paramDescription: "Required. The transaction hex string."
  },
  {
    paramName: "maxfeerate",
    type: "numeric",
    paramDescription: "Optional. Default is 0.10. It rejects transactions with a fee rate higher than the specified value. It can be set to 0 to accept any fee rate."
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
        paramName: "hex",
        type: "string",
        paramDescription: "The transaction hash in hexadecimal format."
      }
    ],
  },
];

const USE_CASES = [
  "Broadcast a raw transaction",
  "Submit signed transaction",
  "Send constructed transactions"
];

const CONSTRAINTS = [
  "Valid raw transaction required",
  "Transaction must be signed",
  "Invalid or malleable transactions may fail"
];




