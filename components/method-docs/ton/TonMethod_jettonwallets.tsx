import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL_TON_NFT, DRPC_ENDPOINT_URL_TON_JETTON} from "./constants";

export function TonMethod_jettonwallets(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="jetton/masters"
      network="ton"
      cu = {100}
      description={
          "Provides details on Jetton wallets."}
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
     --url '\ ${DRPC_ENDPOINT_URL_TON_JETTON}wallets?limit=128&offset=0' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_JETTON}wallets?limit=128&offset=0\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_JETTON}wallets?limit=128&offset=0\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_JETTON}wallets?limit=128&offset=0"

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

url = '${DRPC_ENDPOINT_URL_TON_JETTON}wallets?limit=128&offset=0'

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
    let url = "${DRPC_ENDPOINT_URL_TON_JETTON}wallets?limit=128&offset=0";

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
            "wallet_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "owner": "EQD1Lp1KcmGHFpE8eIvL1mnHT83b4HdB8HJxuSfq6Rq4zGyN",
            "balance": "5000000",
            "jetton_master_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "jetton_name": "TON Stablecoin",
            "jetton_symbol": "TONUSD",
            "decimals": 6,
            "created_at": 1693527600
        },
        {
            "wallet_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "owner": "EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2",
            "balance": "2000000000",
            "jetton_master_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "jetton_name": "TON Energy Token",
            "jetton_symbol": "TONE",
            "decimals": 18,
            "created_at": 1693527500
        }
    ]
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "limit",
    type: "integer",
    paramDescription: "Optional. The maximum number of NFT collections to return. Default is 128."
  },
  {
    paramName: "offset",
    type: "integer",
    paramDescription: "Optional. The number of NFT collections to skip before starting to return results. Default is 0."
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
    paramDescription: "List of jetton wallet details.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "wallet_id",
        type: "string",
        paramDescription: "Unique identifier of the jetton wallet."
      },
      {
        paramName: "owner",
        type: "string",
        paramDescription: "Address of the wallet owner."
      },
      {
        paramName: "balance",
        type: "string",
        paramDescription: "Current balance of the jetton wallet in the smallest units."
      },
      {
        paramName: "jetton_master_id",
        type: "string",
        paramDescription: "Identifier of the jetton master associated with this wallet."
      },
      {
        paramName: "jetton_name",
        type: "string",
        paramDescription: "Name of the jetton token associated with this wallet."
      },
      {
        paramName: "jetton_symbol",
        type: "string",
        paramDescription: "Symbol representing the jetton token."
      },
      {
        paramName: "decimals",
        type: "integer",
        paramDescription: "Number of decimal places used by the jetton token."
      },
      {
        paramName: "created_at",
        type: "integer",
        paramDescription: "Unix timestamp when the jetton wallet was created."
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve data on Jetton wallets",
  "Analyze Jetton wallet details",
  "Audit Jetton wallet balances",
];

const CONSTRAINTS = [
  "Requires valid wallet ID",
  "Supports Jetton Wallets V3 only",
  "Depends on sync",
];






