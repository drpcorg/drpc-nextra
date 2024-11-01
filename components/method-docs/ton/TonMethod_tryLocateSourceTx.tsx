import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_tryLocateSourceTx(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="tryLocateSourceTx"
      network="ton"
      cu = {100}
      description={
          "Attempts to locate the source transaction associated with a specified transaction hash on the TON blockchain, providing details about its origin and status."}
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
     --url '\b${DRPC_ENDPOINT_URL_TON}tryLocateSourceTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}tryLocateSourceTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}tryLocateSourceTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}tryLocateSourceTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002"

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

url = '${DRPC_ENDPOINT_URL_TON}tryLocateSourceTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002'

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
    let url = "${DRPC_ENDPOINT_URL_TON}tryLocateSourceTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002";

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
        "transaction_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        "status": "completed",
        "lt": 47597573000002,
        "from": "UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1",
        "to": "UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA",
        "amount": "1000000000",
        "timestamp": 1693527600,
        "fee": "50000",
        "message": "Payment for services",
        "block_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "source",
    type: "string",
    paramDescription: "Required. The source address of the result transaction.",
  },
  {
    paramName: "destination",
    type: "string",
    paramDescription: "Required. The destination address of the result transaction.",
  },
  {
    paramName: "created_lt",
    type: "string",
    paramDescription: "Required. The logical time when the result transaction was created.",
  }
];

const RESPONSE_PARAMS: ReqResParam[] = [
   {
    paramName: "block",
    type: "object",
    paramDescription: "Details of the block associated with the transaction.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "workchain",
        type: "integer",
        paramDescription: "The workchain ID of the block."
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
    paramDescription: "Details of the transaction ID.",
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
  "Find the source transaction in TON",
  "Trace transaction origins",
  "Verify source transaction details",
];

const CONSTRAINTS = [
  "Requires a valid source transaction ID",
  "Only locates existing source transactions",
];



