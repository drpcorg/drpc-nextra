import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getWalletInformation(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getWalletInformation"
      network="ton"
      cu = {100}
      description={"Retrieves detailed information about a specified TON wallet, including its addresses, balances, and transaction history."}
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
     --url \ ${DRPC_ENDPOINT_URL_TON}getWalletInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getWalletInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}getWalletInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}getWalletInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

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

url = '${DRPC_ENDPOINT_URL_TON}getWalletInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'

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
    let url = "${DRPC_ENDPOINT_URL_TON}getWalletInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

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
        "@type": "raw.fullAccountState",
        "balance": 0,
        "code": "",
        "data": "",
        "last_transaction_id": {
            "@type": "internal.transactionId",
            "lt": "0",
            "hash": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
        },
        "block_id": {
            "@type": "ton.blockIdExt",
            "workchain": -1,
            "shard": "-9223372036854775808",
            "seqno": 41577435,
            "root_hash": "x6//Dtq9GSyRK2wh10tlaAK9SkN03eZuX/20YR98cXU=",
            "file_hash": "JTDWIbrcGgnHS20FYgWaT+15WPKx2/oapkEOqmM3iWQ="
        },
        "frozen_hash": "",
        "sync_utime": 1730405370,
        "@extra": "1730405389.6133153:0:0.662717656910006",
        "state": "uninitialized"
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
    paramDescription: "Indicates if the request was successful.",
  },
  {
    paramName: "result",
    type: "object",
    paramDescription: "The detailed account state result.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "@type",
        type: "string",
        paramDescription: "The type of the account state representation.",
      },
      {
        paramName: "balance",
        type: "integer",
        paramDescription: "The balance of the account.",
      },
      {
        paramName: "code",
        type: "string",
        paramDescription: "The contract code associated with the account.",
      },
      {
        paramName: "data",
        type: "string",
        paramDescription: "The data stored in the account.",
      },
      {
        paramName: "last_transaction_id",
        type: "object",
        paramDescription: "The ID of the last transaction made by the account.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "The type of the transaction ID.",
          },
          {
            paramName: "lt",
            type: "string",
            paramDescription: "The logical timestamp of the transaction.",
          },
          {
            paramName: "hash",
            type: "string",
            paramDescription: "The hash of the last transaction.",
          },
        ],
      },
      {
        paramName: "block_id",
        type: "object",
        paramDescription: "Details of the block in which the last transaction was included.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "The type of block ID.",
          },
          {
            paramName: "workchain",
            type: "integer",
            paramDescription: "The workchain ID of the block.",
          },
          {
            paramName: "shard",
            type: "string",
            paramDescription: "The shard ID of the block.",
          },
          {
            paramName: "seqno",
            type: "integer",
            paramDescription: "The sequence number of the block.",
          },
          {
            paramName: "root_hash",
            type: "string",
            paramDescription: "The root hash of the block.",
          },
          {
            paramName: "file_hash",
            type: "string",
            paramDescription: "The file hash of the block.",
          },
        ],
      },
      {
        paramName: "frozen_hash",
        type: "string",
        paramDescription: "The frozen hash of the account.",
      },
      {
        paramName: "sync_utime",
        type: "integer",
        paramDescription: "The synchronization time of the account state.",
      },
      {
        paramName: "@extra",
        type: "string",
        paramDescription: "Additional metadata related to the response.",
      },
      {
        paramName: "state",
        type: "string",
        paramDescription: "The state of the account (e.g., uninitialized).",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve information about a specific TON wallet",
  "Check wallet balance and transaction history",
  "Validate wallet status and associated addresses",
];

const CONSTRAINTS = [
  "Requires a valid wallet address as input",
  "Only provides information for active wallets",
  "Dependent on the node's synchronization",
];

