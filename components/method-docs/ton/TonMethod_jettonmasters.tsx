import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL_TON_NFT, DRPC_ENDPOINT_URL_TON_JETTON} from "./constants";

export function TonMethod_jettonmasters(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="jetton/masters"
      network="ton"
      cu = {100}
      description={
          "Retrieves information about Jetton master contracts."}
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
     --url '\ ${DRPC_ENDPOINT_URL_TON_JETTON}masters?limit=128&offset=0' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_JETTON}masters?limit=128&offset=0\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_JETTON}masters?limit=128&offset=0\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_JETTON}masters?limit=128&offset=0"

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

url = '${DRPC_ENDPOINT_URL_TON_JETTON}masters?limit=128&offset=0'

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
    let url = "${DRPC_ENDPOINT_URL_TON_JETTON}masters?limit=128&offset=0";

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
            "master_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "name": "TON Stablecoin",
            "symbol": "TONUSD",
            "decimals": 6,
            "total_supply": "1000000000000000",
            "admin_address": "EQD1Lp1KcmGHFpE8eIvL1mnHT83b4HdB8HJxuSfq6Rq4zGyN",
            "created_at": 1693527600,
            "metadata_uri": "https://tonstablecoin.example.com/metadata.json",
            "description": "A stablecoin pegged to USD on the TON blockchain."
        },
        {
            "master_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "name": "TON Energy Token",
            "symbol": "TONE",
            "decimals": 18,
            "total_supply": "5000000000000000000",
            "admin_address": "EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2",
            "created_at": 1693527500,
            "metadata_uri": "https://tonenergy.example.com/metadata.json",
            "description": "A token representing energy credits on the TON blockchain."
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
    paramDescription: "List of jetton master details.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "master_id",
        type: "string",
        paramDescription: "Unique identifier of the jetton master contract."
      },
      {
        paramName: "name",
        type: "string",
        paramDescription: "Name of the jetton token."
      },
      {
        paramName: "symbol",
        type: "string",
        paramDescription: "Symbol representing the jetton token."
      },
      {
        paramName: "decimals",
        type: "integer",
        paramDescription: "Number of decimal places used by the jetton token."
      },
      {
        paramName: "total_supply",
        type: "string",
        paramDescription: "Total supply of the jetton token in the smallest units."
      },
      {
        paramName: "admin_address",
        type: "string",
        paramDescription: "Address of the administrator of the jetton master."
      },
      {
        paramName: "created_at",
        type: "integer",
        paramDescription: "Unix timestamp when the jetton master was created."
      },
      {
        paramName: "metadata_uri",
        type: "string",
        paramDescription: "URI for accessing metadata associated with the jetton."
      },
      {
        paramName: "description",
        type: "string",
        paramDescription: "Description of the jetton token."
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve data on Jetton master contracts",
  "Analyze Jetton master details",
  "Audit Jetton master metadata",
];

const CONSTRAINTS = [
  "Requires valid master ID",
  "Supports Jetton Masters V3 only",
];





