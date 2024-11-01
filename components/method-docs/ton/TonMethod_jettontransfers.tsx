import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL_TON_JETTON, DRPC_ENDPOINT_URL_TON_NFT, DRPC_ENDPOINT_URL_TON_V3} from "./constants";

export function TonMethod_jettontransfers(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="jetton/transfers"
      network="ton"
      cu = {100}
      description={
          "Retrieves a list of Jetton transfer events."}
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
    code: () => `curl --request GET \\
     --url '\ ${DRPC_ENDPOINT_URL_TON_JETTON}transfers?direction=both&limit=128&offset=0&sort=desc' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_JETTON}transfers?direction=both&limit=128&offset=0&sort=desc\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_JETTON}transfers?direction=both&limit=128&offset=0&sort=desc\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_JETTON}transfers?direction=both&limit=128&offset=0&sort=desc"

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

url = '${DRPC_ENDPOINT_URL_TON_JETTON}transfers?direction=both&limit=128&offset=0&sort=desc'

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
    let url = "${DRPC_ENDPOINT_URL_TON_JETTON}transfers?direction=both&limit=128&offset=0&sort=desc";

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
    "result": [
        {
            "jetton": {
                "address": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
                "name": "TON Stablecoin",
                "symbol": "TONUSD"
            },
            "from": {
                "address": "EQD1Lp1KcmGHFpE8eIvL1mnHT83b4HdB8HJxuSfq6Rq4zGyN"
            },
            "to": {
                "address": "EQDzSp9Qc6KcJXGJc7NkSVxj2pzLsmM4NdFpc8i2dZqjU9i9"
            },
            "transaction": {
                "hash": "a9d39a7f1e5f849835496b052885ed2ac07d54d5e0e11f2b17c3b00e3295a2b0",
                "time": 1693527600,
                "amount": "1000000",
                "comment": "Transfer of TON Stablecoin"
            }
        },
        {
            "jetton": {
                "address": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                "name": "TON Energy Token",
                "symbol": "TONE"
            },
            "from": {
                "address": "EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2"
            },
            "to": {
                "address": "EQC7VpEHw2DA9hxkdx_WXv9NSkb_v_KVQMY2Le4a4Fk9DUqQ"
            },
            "transaction": {
                "hash": "b2c43e5f2f4a849835496b052885ed2ac07d54d5e0e11f2b17c3b00e3295a2a1",
                "time": 1693527500,
                "amount": "500000",
                "comment": "Energy token transfer"
            }
        }
    ]
}

`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "direction",
    type: "string",
    paramDescription: "Required. The direction of transfers to retrieve. Possible values are 'in', 'out', or 'both'. Default is 'both'."
  },
  {
    paramName: "limit",
    type: "integer",
    paramDescription: "Optional. The maximum number of transfers to return. Default is 128."
  },
  {
    paramName: "offset",
    type: "integer",
    paramDescription: "Optional. The number of transfers to skip before starting to return results. Default is 0."
  },
  {
    paramName: "sort",
    type: "string",
    paramDescription: "Optional. The sorting order of the transfers. Possible values are 'asc' for ascending or 'desc' for descending. Default is 'desc'."
  }
];

const RESPONSE_PARAMS: ReqResParam[] = [
   {
    paramName: "ok",
    type: "boolean",
    paramDescription: "Indicates if the request was successful."
  },
  {
    paramName: "result",
    type: "array",
    paramDescription: "List of jetton transfer details.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "jetton",
        type: "object",
        paramDescription: "Details of the jetton involved in the transfer.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "address",
            type: "string",
            paramDescription: "Unique identifier of the jetton."
          },
          {
            paramName: "name",
            type: "string",
            paramDescription: "Name of the jetton."
          },
          {
            paramName: "symbol",
            type: "string",
            paramDescription: "Symbol representing the jetton."
          }
        ]
      },
      {
        paramName: "from",
        type: "object",
        paramDescription: "Details of the sender.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "address",
            type: "string",
            paramDescription: "Address of the sender."
          }
        ]
      },
      {
        paramName: "to",
        type: "object",
        paramDescription: "Details of the recipient.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "address",
            type: "string",
            paramDescription: "Address of the recipient."
          }
        ]
      },
      {
        paramName: "transaction",
        type: "object",
        paramDescription: "Details of the transaction.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "hash",
            type: "string",
            paramDescription: "Hash of the transaction."
          },
          {
            paramName: "time",
            type: "integer",
            paramDescription: "Unix timestamp when the transaction occurred."
          },
          {
            paramName: "amount",
            type: "string",
            paramDescription: "Amount of the jetton transferred."
          },
          {
            paramName: "comment",
            type: "string",
            paramDescription: "Additional comment associated with the transaction."
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Get data on Jetton transfers",
  "Track Jetton transfer history",
  "Audit Jetton transfer details",
];

const CONSTRAINTS = [
  "Requires valid transfer ID",
  "Supports Jetton Transfers V3 only",
  "Depends on sync",
];




