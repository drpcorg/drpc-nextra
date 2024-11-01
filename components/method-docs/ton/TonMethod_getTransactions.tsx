import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getTransactions(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getTransactions"
      network="ton"
      cu = {100}
      description={
          "Retrieves a list of transactions associated with a specified address or block, providing details about each transaction's status and content."}
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
     --url '\${DRPC_ENDPOINT_URL_TON}getTransactions?address=EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2&limit=10&to_lt=0&archival=false' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getTransactions?address=EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2&limit=10&to_lt=0&archival=false\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}getTransactions?address=EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2&limit=10&to_lt=0&archival=false\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}getTransactions?address=EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2&limit=10&to_lt=0&archival=false"

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

url = '${DRPC_ENDPOINT_URL_TON}getTransactions?address=EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2&limit=10&to_lt=0&archival=false'

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
    let url = "${DRPC_ENDPOINT_URL_TON}getTransactions?address=EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2&limit=10&to_lt=0&archival=false";

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
            "transaction_id": "0:abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            "from": "EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2",
            "to": "EQBkQP48aUEDg5Y5RRc8SxFHm_C5tNcJDlh3e9pYHC-ZmG2M",
            "amount": "5000000000",
            "lt": 47597573000002,
            "fee": "100000",
            "timestamp": 1693527600,
            "status": "completed",
            "message": "Payment for services"
        },
        {
            "transaction_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "from": "EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2",
            "to": "EQC7VpEHw2DA9hxkdx_WXv9NSkb_v_KVQMY2Le4a4Fk9DUqQ",
            "amount": "2000000000",
            "lt": 47597573000001,
            "fee": "50000",
            "timestamp": 1693527500,
            "status": "completed",
            "message": "Subscription renewal"
        }
    ]
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "address",
    type: "string",
    paramDescription: "Required. The address for which to retrieve transactions.",
  },
  {
    paramName: "limit",
    type: "integer",
    paramDescription: "Optional. The maximum number of transactions to return. Default is 10."
  },
  {
    paramName: "to_lt",
    type: "integer",
    paramDescription: "Optional. The logical time to start the search from, with 0 indicating the latest. Default is 0."
  },
  {
    paramName: "archival",
    type: "boolean",
    paramDescription: "Optional. Indicates whether to use an archival node for the query. Default is false."
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
    type: "array",
    paramDescription: "List of transaction details.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "transaction_id",
        type: "string",
        paramDescription: "Unique identifier of the transaction."
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
        paramName: "amount",
        type: "string",
        paramDescription: "Amount transferred in the transaction, in the smallest units."
      },
      {
        paramName: "lt",
        type: "integer",
        paramDescription: "Logical time associated with the transaction."
      },
      {
        paramName: "fee",
        type: "string",
        paramDescription: "Fee paid for the transaction."
      },
      {
        paramName: "timestamp",
        type: "integer",
        paramDescription: "Unix timestamp when the transaction occurred."
      },
      {
        paramName: "status",
        type: "string",
        paramDescription: "Current status of the transaction (e.g., completed)."
      },
      {
        paramName: "message",
        type: "string",
        paramDescription: "Additional message associated with the transaction."
      }
    ]
  }
];

const USE_CASES = [
  "Get transactions for a TON address",
  "Monitor recent account activity",
  "Audit transaction history",
];

const CONSTRAINTS = [
  "Needs a valid TON address",
  "Only finds existing transactions",
];


