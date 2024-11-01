import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getTokenData(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getTokenData"
      network="ton"
      cu = {100}
      description={
          "Retrieves detailed information about a specific token, including its attributes, supply, and ownership details."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="string"
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
     --url \ '${DRPC_ENDPOINT_URL_TON}getTokenData?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getTokenData?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}getTokenData?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}getTokenData?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

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

url = '${DRPC_ENDPOINT_URL_TON}getTokenData?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'

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
    let url = "${DRPC_ENDPOINT_URL_TON}getTokenData?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

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
        "total_supply": 1030000002000000,
        "mintable": true,
        "admin_address": "EQBkQP48aUEDg5Y5RRc8SxFHm_C5tNcJDlh3e9pYHC-ZmG2M",
        "jetton_content": {
            "type": "onchain",
            "data": {
                "uri": "https://tether.to/usdt-ton.json",
                "decimals": "6"
            }
        },
        "jetton_wallet_code": "te6cckEBAQEAIwAIQgKPRS16Tf10BmtoI2UXclntBXNENb52tf1L1divK3w9aCBrv3Y=",
        "contract_type": "jetton_master"
    }
}`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "address",
    type: "string",
    paramDescription: "Identifier of the target TON account in any form.",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
   {
    paramName: "ok",
    type: "boolean",
    paramDescription: "Indicates if the request was successful."
  },
  {
    paramName: "result",
    type: "object",
    paramDescription: "Contains the details of the jetton contract.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "total_supply",
        type: "integer",
        paramDescription: "The total supply of the jetton."
      },
      {
        paramName: "mintable",
        type: "boolean",
        paramDescription: "Indicates if more jettons can be minted."
      },
      {
        paramName: "admin_address",
        type: "string",
        paramDescription: "The address of the administrator of the jetton."
      },
      {
        paramName: "jetton_content",
        type: "object",
        paramDescription: "Content information related to the jetton.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "type",
            type: "string",
            paramDescription: "Type of content storage for the jetton (e.g., onchain)."
          },
          {
            paramName: "data",
            type: "object",
            paramDescription: "Additional data related to the jetton content.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "uri",
                type: "string",
                paramDescription: "URI linking to the jetton's metadata."
              },
              {
                paramName: "decimals",
                type: "string",
                paramDescription: "The number of decimal places for the jetton."
              }
            ]
          }
        ]
      },
      {
        paramName: "jetton_wallet_code",
        type: "string",
        paramDescription: "The code for the jetton wallet."
      },
      {
        paramName: "contract_type",
        type: "string",
        paramDescription: "The type of contract, which is 'jetton_master' in this case."
      }
    ]
  }
];

const USE_CASES = [
  "Get metadata for a TON token",
  "Access token name, symbol, and supply",
  "Validate token details",
];

const CONSTRAINTS = [
  "Needs a valid token address",
  "Only supports existing tokens",
  "Depends on node sync",
];



