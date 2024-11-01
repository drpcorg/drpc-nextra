import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL_TON_NFT, DRPC_ENDPOINT_URL_TON_V3} from "./constants";

export function TonMethod_nfttransfers(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="nft/transfers"
      network="ton"
      cu = {100}
      description={
          "Retrieves a list of NFT transfer events."}
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
     --url '\ ${DRPC_ENDPOINT_URL_TON_NFT}transfers?direction=both&limit=128&offset=0&sort=desc' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_NFT}transfers?direction=both&limit=128&offset=0&sort=desc\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_NFT}transfers?direction=both&limit=128&offset=0&sort=desc\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_NFT}transfers?direction=both&limit=128&offset=0&sort=desc"

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

url = '${DRPC_ENDPOINT_URL_TON_NFT}transfers?direction=both&limit=128&offset=0&sort=desc'

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
    let url = "${DRPC_ENDPOINT_URL_TON_NFT}transfers?direction=both&limit=128&offset=0&sort=desc";

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
            "transfer_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "from": "EQD1Lp1KcmGHFpE8eIvL1mnHT83b4HdB8HJxuSfq6Rq4zGyN",
            "to": "EQDzSp9Qc6KcJXGJc7NkSVxj2pzLsmM4NdFpc8i2dZqjU9i9",
            "item_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "collection_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "timestamp": 1693527600,
            "amount": "1",
            "status": "completed",
            "message": "Gift transfer of TON Art #1"
        },
        {
            "transfer_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "from": "EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2",
            "to": "EQC7VpEHw2DA9hxkdx_WXv9NSkb_v_KVQMY2Le4a4Fk9DUqQ",
            "item_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "collection_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "timestamp": 1693527500,
            "amount": "1",
            "status": "completed",
            "message": "Auction transfer of TON Sports #5"
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
    paramDescription: "List of NFT transfer details.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "transfer_id",
        type: "string",
        paramDescription: "Unique identifier of the NFT transfer."
      },
      {
        paramName: "from",
        type: "string",
        paramDescription: "Address of the sender."
      },
      {
        paramName: "to",
        type: "string",
        paramDescription: "Address of the recipient."
      },
      {
        paramName: "item_id",
        type: "string",
        paramDescription: "Identifier of the specific NFT item being transferred."
      },
      {
        paramName: "collection_id",
        type: "string",
        paramDescription: "Identifier of the NFT collection to which the item belongs."
      },
      {
        paramName: "timestamp",
        type: "integer",
        paramDescription: "Unix timestamp when the transfer occurred."
      },
      {
        paramName: "amount",
        type: "string",
        paramDescription: "Quantity of the NFT transferred."
      },
      {
        paramName: "status",
        type: "string",
        paramDescription: "Status of the transfer (e.g., completed)."
      },
      {
        paramName: "message",
        type: "string",
        paramDescription: "Additional message associated with the transfer."
      }
    ]
  }
];

const USE_CASES = [
  "Get data on specific NFT items",
  "Analyze NFT item details",
  "Audit NFT metadata",
];

const CONSTRAINTS = [
  "Requires valid item ID",
  "Supports NFT Items V3 only",
  "Depends on sync",
];




