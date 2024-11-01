import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getConfigParam(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getConfigParam"
      network="ton"
      cu = {100}
      description={"Retrieves the value of a specific configuration parameter, providing insights into its settings and operational behavior."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="integer"
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
     --url \ '${DRPC_ENDPOINT_URL_TON}getConfigParam?config_id=1' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getConfigParam?config_id=1' \

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

const url = \`${DRPC_ENDPOINT_URL_TON}getConfigParam?config_id=1' \

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
	url := "${DRPC_ENDPOINT_URL_TON}getConfigParam?config_id=1' \

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

url = '${DRPC_ENDPOINT_URL_TON}getConfigParam?config_id=1' \

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
    let url = "${DRPC_ENDPOINT_URL_TON}getConfigParam?config_id=1";

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
        "@type": "configInfo",
        "config": {
            "@type": "tvm.cell",
            "bytes": "te6cckEBAQEAIgAAQDMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzwqnziA=="
        },
        "@extra": "1730412523.9205265:0:0.9905079592801663"
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "config_id",
    type: "integer",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "ok",
  type: "boolean",
  paramDescription: "Indicates whether the request was successful.",
  },
    {
      paramName: "result",
      type: "object",
      paramDescription: "The main result object containing configuration information.",
    },
        {
          paramName: "@type",
          type: "string",
          paramDescription: "The type of the result object.",
        },
        {
          paramName: "config",
          type: "object",
          paramDescription: "Configuration details in a specific format.",
        },

            {
              paramName: "@type",
              type: "string",
              paramDescription: "Type of the configuration cell.",
            },
            {
              paramName: "bytes",
              type: "string",
              paramDescription: "Byte representation of the configuration.",
        },
        {
          paramName: "@extra",
          type: "string",
          paramDescription: "Additional metadata associated with the result.",
        },
];

const USE_CASES = [
  "Get a specific configuration parameter",
  "Access details of individual network settings",
  "Analyze parameters for performance tuning",
];

const CONSTRAINTS = [
  "Requires a valid parameter name",
  "Only supports existing parameters",
  "Depends on node synchronization",
];




