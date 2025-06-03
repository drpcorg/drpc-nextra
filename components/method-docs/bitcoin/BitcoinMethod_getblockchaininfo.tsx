import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_getblockchaininfo(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="getblockchaininfo"
      network="bitcoin"
      cu={20}
      description={"Provides an overview of the blockchain’s status, including network and difficulty information."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
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
  --data '{ "method": "getblockchaininfo" }'`,
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
    method: "getblockchaininfo"
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
    method: "getblockchaininfo"
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
		"method": "getblockchaininfo",
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
    "method": "getblockchaininfo"
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
            "method": "getblockchaininfo"
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
        "chain": "main",
        "blocks": 681543,
        "headers": 681543,
        "bestblockhash": "0000000000000000000abcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        "difficulty": 1234567.89012345,
        "mediantime": 1625569780,
        "verificationprogress": 0.999999,
        "initialblockdownload": false,
        "chainwork": "0000000000000000000000000000000000000000000000000000000000000000",
        "size_on_disk": 4294967296,
        "pruned": false
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = null;

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
    paramName: "chain",
    type: "string",
    paramDescription: "The name of the current network (main, test, regtest)."
  },
  {
    paramName: "blocks",
    type: "numeric",
    paramDescription: "The height of the most-work fully-validated chain. The genesis block has height 0."
  },
  {
    paramName: "headers",
    type: "numeric",
    paramDescription: "The current number of headers validated."
  },
  {
    paramName: "bestblockhash",
    type: "string",
    paramDescription: "The hash of the current best block."
  },
  {
    paramName: "difficulty",
    type: "numeric",
    paramDescription: "The difficulty of the highest height block."
  },
  {
    paramName: "time",
    type: "numeric",
    paramDescription: "The time for the current best block."
  },
  {
    paramName: "mediantime",
    type: "numeric",
    paramDescription: "The median time for the current best block."
  },
  {
    paramName: "verificationprogress",
    type: "number",
    paramDescription: "An estimate of verification progress [0..1]."
  },
  {
    paramName: "initialblockdownload",
    type: "boolean",
    paramDescription: "(Debug information) An estimate of whether this node is in Initial Block Download mode."
  },
  {
    paramName: "chainwork",
    type: "string",
    paramDescription: "Total amount of work in the active chain in hexadecimal form."
  },
  {
    paramName: "size_on_disk",
    type: "numeric",
    paramDescription: "The estimated size of the block and undo files on disk."
  },
  {
    paramName: "pruned",
    type: "boolean",
    paramDescription: "Indicates if the blocks are subject to pruning."
  },
  {
    paramName: "warnings",
    type: "string",
    paramDescription: "Any network and blockchain warnings."
  },
  {
    paramName: "error",
    type: "string",
    paramDescription: "The error message, if any."
  }
    ],
  },
];

const USE_CASES = [
  "Retrieve blockchain status",
  "Get current block height",
  "Check node's blockchain info"
];

const CONSTRAINTS = [
  "Requires running node",
  "Depends on node sync",
  "Varies with node state"
];






