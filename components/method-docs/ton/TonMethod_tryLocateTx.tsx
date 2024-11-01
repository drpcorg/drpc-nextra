import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_tryLocateTx(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="tryLocateTx"
      network="ton"
      cu = {100}
      description={
          "Attempts to find and retrieve information about a specified transaction on the TON blockchain, including its status and related details.\n"}
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
     --url '\ ${DRPC_ENDPOINT_URL_TON}tryLocateTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}tryLocateTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}tryLocateTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}tryLocateTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002"

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

url = '${DRPC_ENDPOINT_URL_TON}tryLocateTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002'

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
    let url = "${DRPC_ENDPOINT_URL_TON}tryLocateTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002";

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
  "block": {
    "workchain": 0,
    "shard": "string",
    "seqno": 0,
    "root_hash": "string",
    "file_hash": "string"
  },
  "transaction_id": {
    "lt": "string",
    "hash": "string"
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "source",
    type: "string",
    paramDescription: "Required. The source address of the transaction.",
  },
  {
    paramName: "destination",
    type: "string",
    paramDescription: "Required. The destination address of the transaction.",
  },
  {
    paramName: "created_lt",
    type: "string",
    paramDescription: "Required. The logical time when the transaction was created.",
  }
];

const RESPONSE_PARAMS: ReqResParam[] = [
   {
    paramName: "block",
    type: "object",
    paramDescription: "Details of the block where the transaction is located.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "workchain",
        type: "integer",
        paramDescription: "The ID of the workchain."
      },
      {
        paramName: "shard",
        type: "string",
        paramDescription: "The identifier of the shard."
      },
      {
        paramName: "seqno",
        type: "integer",
        paramDescription: "The sequence number of the block."
      },
      {
        paramName: "root_hash",
        type: "string",
        paramDescription: "The root hash of the block."
      },
      {
        paramName: "file_hash",
        type: "string",
        paramDescription: "The file hash associated with the block."
      }
    ]
  },
  {
    paramName: "transaction_id",
    type: "object",
    paramDescription: "Identifier details of the transaction.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "lt",
        type: "string",
        paramDescription: "The logical time of the transaction."
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription: "The hash of the transaction."
      }
    ]
  }
];

const USE_CASES = [
  "Locate a transaction in TON",
  "Track transaction status",
  "Verify transaction details",
];

const CONSTRAINTS = [
  "Needs valid transaction ID",
  "Only finds existing transactions",
  "Depends on node sync",
];



