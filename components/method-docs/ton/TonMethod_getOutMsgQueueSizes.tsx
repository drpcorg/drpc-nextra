import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getOutMsgQueueSizes(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getOutMsgQueueSizes"
      network="ton"
      cu = {100}
      description={
          "Retrieves the sizes of outgoing message queues for specified addresses, providing insights into message processing and network load."}
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
     --url \ '${DRPC_ENDPOINT_URL_TON}getOutMsgQueueSizes' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getOutMsgQueueSizes\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}getOutMsgQueueSizes\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}getOutMsgQueueSizes"

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

url = '${DRPC_ENDPOINT_URL_TON}getOutMsgQueueSizes'

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
    "status": "success",
    "data": {
        "queue_sizes": {
            "workchain_0": {
                "shard_0": 10,
                "shard_1": 5
            },
            "workchain_1": {
                "shard_0": 15,
                "shard_1": 3
            }
        }
    }
}`;

const REQUEST_PARAMS: RequestParamProp = null;

const RESPONSE_PARAMS: ReqResParam[] = [
   {
    paramName: "status",
    type: "string",
    paramDescription: "Indicates the status of the response (e.g., success or error).",
  },
  {
    paramName: "data",
    type: "object",
    paramDescription: "Contains the main data of the response.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "queue_sizes",
        type: "object",
        paramDescription: "Object containing the sizes of queues for each workchain.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "workchain_0",
            type: "object",
            paramDescription: "Queue sizes for workchain 0.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "shard_0",
                type: "integer",
                paramDescription: "Size of the queue for shard 0 in workchain 0.",
              },
              {
                paramName: "shard_1",
                type: "integer",
                paramDescription: "Size of the queue for shard 1 in workchain 0.",
              },
            ],
          },
          {
            paramName: "workchain_1",
            type: "object",
            paramDescription: "Queue sizes for workchain 1.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "shard_0",
                type: "integer",
                paramDescription: "Size of the queue for shard 0 in workchain 1.",
              },
              {
                paramName: "shard_1",
                type: "integer",
                paramDescription: "Size of the queue for shard 1 in workchain 1.",
              },
            ],
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve the sizes of outgoing message queues",
  "Monitor message traffic in the TON network",
  "Analyze performance metrics of message processing",
];

const CONSTRAINTS = [
  "Requires a synced node for accurate data",
  "Only provides information on active queues",
];




