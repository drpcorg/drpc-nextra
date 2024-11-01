import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getMasterchainInfo(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getMasterchainInfo"
      network="ton"
      cu = {100}
      description={
          "Provides information about the current state of the masterchain, including its latest block details and other relevant metadata."}
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
     --url \ '${DRPC_ENDPOINT_URL_TON}getMasterchainInfo' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getMasterchainInfo\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}getMasterchainInfo\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}getMasterchainInfo"

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

url = '${DRPC_ENDPOINT_URL_TON}getMasterchainInfo'

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
    let url = "${DRPC_ENDPOINT_URL_TON}getMasterchainInfo";

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
        "@type": "blocks.masterchainInfo",
        "last": {
            "@type": "ton.blockIdExt",
            "workchain": -1,
            "shard": "-9223372036854775808",
            "seqno": 41579322,
            "root_hash": "cbKM7O8sO62lSHGEkTvzziOnsz/dKyWoUm3KH/jVy2Y=",
            "file_hash": "+Zw6wiciKr263nTKNj5sv9M/oktH0+fvzSFnAr3hc34="
        },
        "state_root_hash": "+VEFfbRE6vNcH1i3uU5dqAlyckasYo6JmrhJl9aRLdA=",
        "init": {
            "@type": "ton.blockIdExt",
            "workchain": -1,
            "shard": "0",
            "seqno": 0,
            "root_hash": "F6OpKZKqvqeFp6CQmFomXNMfMj2EnaUSOXN+Mh+wVWk=",
            "file_hash": "XplPz01CXAps5qeSWUtxcyBfdAo5zVb1N979KLSKD24="
        },
        "@extra": "1730410713.161648:0:0.9739182289304882"
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
    paramDescription: "Contains the result data.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "@type",
        type: "string",
        paramDescription: "Type of the result structure, indicating it's masterchain information.",
      },
      {
        paramName: "last",
        type: "object",
        paramDescription: "Details of the last block in the masterchain.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "Type of the block identifier.",
          },
          {
            paramName: "workchain",
            type: "integer",
            paramDescription: "ID of the workchain; -1 represents the masterchain.",
          },
          {
            paramName: "shard",
            type: "integer",
            paramDescription: "ID of the shard, represented as a signed integer.",
          },
          {
            paramName: "seqno",
            type: "integer",
            paramDescription: "Sequence number of the last block.",
          },
          {
            paramName: "root_hash",
            type: "string",
            paramDescription: "Root hash of the last block.",
          },
          {
            paramName: "file_hash",
            type: "string",
            paramDescription: "File hash associated with the last block.",
          },
        ],
      },
      {
        paramName: "state_root_hash",
        type: "string",
        paramDescription: "Root hash representing the state of the masterchain.",
      },
      {
        paramName: "init",
        type: "object",
        paramDescription: "Initialization block details.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "Type of the initialization block identifier.",
          },
          {
            paramName: "workchain",
            type: "integer",
            paramDescription: "ID of the workchain; -1 represents the masterchain.",
          },
          {
            paramName: "shard",
            type: "string",
            paramDescription: "ID of the shard for the initialization block.",
          },
          {
            paramName: "seqno",
            type: "integer",
            paramDescription: "Sequence number of the initialization block.",
          },
          {
            paramName: "root_hash",
            type: "string",
            paramDescription: "Root hash of the initialization block.",
          },
          {
            paramName: "file_hash",
            type: "string",
            paramDescription: "File hash associated with the initialization block.",
          },
        ],
      },
      {
        paramName: "@extra",
        type: "string",
        paramDescription: "Extra information related to the response.",
      },
    ],
  },
];

const USE_CASES = [
  "Get details of the TON masterchain",
  "Monitor masterchain status and properties",
  "Access the latest masterchain block info",
];

const CONSTRAINTS = [
  "Requires a synced node for accurate data",
  "Only provides current masterchain info",
  "Dependent on node connectivity to the network",
];



