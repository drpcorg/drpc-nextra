import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL_TON_NFT, DRPC_ENDPOINT_URL_TON_V3} from "./constants";

export function TonMethod_nftcollections(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="nft/collections"
      network="ton"
      cu = {100}
      description={
          "Retrieves data on NFT collections."}
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
     --url '\ ${DRPC_ENDPOINT_URL_TON_NFT}collections?limit=128&offset=0' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_NFT}collections?limit=128&offset=0\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_NFT}collections?limit=128&offset=0\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_NFT}collections?limit=128&offset=0"

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

url = '${DRPC_ENDPOINT_URL_TON_NFT}collections?limit=128&offset=0'

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
    let url = "${DRPC_ENDPOINT_URL_TON_NFT}collections?limit=128&offset=0";

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
            "collection_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "name": "TON Art Collection",
            "symbol": "TONART",
            "creator": "EQD1Lp1KcmGHFpE8eIvL1mnHT83b4HdB8HJxuSfq6Rq4zGyN",
            "total_supply": "10000",
            "base_uri": "https://tonart.example.com/metadata/",
            "created_at": 1693527600,
            "description": "A unique collection of digital art on the TON blockchain."
        },
        {
            "collection_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "name": "TON Sports Collection",
            "symbol": "TONSPORTS",
            "creator": "EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2",
            "total_supply": "5000",
            "base_uri": "https://tonsports.example.com/metadata/",
            "created_at": 1693527500,
            "description": "An exclusive sports memorabilia collection on the TON blockchain."
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
    paramDescription: "List of NFT collection details.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "collection_id",
        type: "string",
        paramDescription: "Unique identifier of the NFT collection."
      },
      {
        paramName: "name",
        type: "string",
        paramDescription: "Name of the NFT collection."
      },
      {
        paramName: "symbol",
        type: "string",
        paramDescription: "Symbol representing the NFT collection."
      },
      {
        paramName: "creator",
        type: "string",
        paramDescription: "Address of the creator of the collection."
      },
      {
        paramName: "total_supply",
        type: "string",
        paramDescription: "Total supply of NFTs in the collection."
      },
      {
        paramName: "base_uri",
        type: "string",
        paramDescription: "Base URI for accessing metadata of NFTs in the collection."
      },
      {
        paramName: "created_at",
        type: "integer",
        paramDescription: "Unix timestamp indicating when the collection was created."
      },
      {
        paramName: "description",
        type: "string",
        paramDescription: "Description of the NFT collection."
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve data on NFT collections",
  "Analyze NFT collection details",
  "Audit collection metadata",
];

const CONSTRAINTS = [
  "Requires valid collection ID",
  "Supports NFT Collections V3 only",
  "Depends on sync",
];




