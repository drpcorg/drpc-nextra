import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getConsensusBlock(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getConsensusBlock"
      network="ton"
      cu = {100}
      description={
          "Retrieves information about a specific consensus block, including its details and transaction history."}
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
    code: () => `curl --request GET \\
     --url \ '${DRPC_ENDPOINT_URL_TON}getConsensusBlock' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getConsensusBlock\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}getConsensusBlock\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}getConsensusBlock"

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

url = '${DRPC_ENDPOINT_URL_TON}getConsensusBlock'

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
    let url = "${DRPC_ENDPOINT_URL_TON}getOutMsgQueueSizes";

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
        "consensus_block": 41579741,
        "timestamp": 1730411902.161082
    }
}`;

const REQUEST_PARAMS: RequestParamProp = null;

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "ok",
    type: "boolean",
    paramDescription: "Indicates whether the request was successful.",
  },
  {
    paramName: "result",
    type: "object",
    paramDescription: "Contains the main result data.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "consensus_block",
        type: "integer",
        paramDescription: "The number of the consensus block.",
      },
      {
        paramName: "timestamp",
        type: "number",
        paramDescription: "The timestamp associated with the consensus block in Unix time format.",
      },
    ],
  },
];

const USE_CASES = [
  "Get details of a specific consensus block",
  "Access data relevant to consensus validation",
  "Review block information for network analysis",
];

const CONSTRAINTS = [
  "Requires a valid consensus block ID",
  "Only supports existing blocks",
  "Depends on node synchronization",
];





