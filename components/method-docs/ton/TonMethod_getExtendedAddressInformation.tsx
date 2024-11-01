import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getExtendedAddressInformation(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getExtendedAddressInformation"
      network="ton"
      cu = {100}
      description={"Retrieves comprehensive details about a specified TON address, including balance, status, and additional metadata."}
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
     --url \ ${DRPC_ENDPOINT_URL_TON}getExtendedAddressInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getExtendedAddressInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}getExtendedAddressInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}getExtendedAddressInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

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

url = '${DRPC_ENDPOINT_URL_TON}getExtendedAddressInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'

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
    let url = "${DRPC_ENDPOINT_URL_TON}getExtendedAddressInformation?address=0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

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
        "@type": "fullAccountState",
        "address": {
            "@type": "accountAddress",
            "account_address": "EQASNFZ4kKvN7xI0VniQq83vEjRWeJCrze8SNFZ4kKvN7xSL"
        },
        "balance": "-1",
        "last_transaction_id": {
            "@type": "internal.transactionId",
            "lt": "0",
            "hash": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
        },
        "block_id": {
            "@type": "ton.blockIdExt",
            "workchain": -1,
            "shard": "-9223372036854775808",
            "seqno": 41577917,
            "root_hash": "DZkrzdACi9sh6Avq50YCAHAAe3zaFBNfkK3DwXe2Kuo=",
            "file_hash": "9dfTpBBiMewkbc1hH3DRFxYpXcydeJZrkq6bU+x1054="
        },
        "sync_utime": 1730406722,
        "account_state": {
            "@type": "uninited.accountState",
            "frozen_hash": ""
        },
        "revision": 0,
        "@extra": "1730406741.8864424:0:0.897691529035838"
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
        paramName: "address",
        type: "object",
        paramDescription: "The address of the account.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "The type of the account address.",
          },
          {
            paramName: "account_address",
            type: "string",
            paramDescription: "The account address in its encoded form.",
          },
        ],
      },
      {
        paramName: "balance",
        type: "string",
        paramDescription: "The balance of the account, represented as a string.",
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
        paramName: "sync_utime",
        type: "integer",
        paramDescription: "The synchronization time of the account state.",
      },
      {
        paramName: "account_state",
        type: "object",
        paramDescription: "The state of the account.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "The type of the account state.",
          },
          {
            paramName: "frozen_hash",
            type: "string",
            paramDescription: "The frozen hash of the account.",
          },
        ],
      },
      {
        paramName: "revision",
        type: "integer",
        paramDescription: "The revision number of the account state.",
      },
      {
        paramName: "@extra",
        type: "string",
        paramDescription: "Additional metadata related to the response.",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve detailed information about a TON address",
  "Check balance, transaction history",
  "Validate the status of a TON address in-depth",
];

const CONSTRAINTS = [
  "Requires a valid TON address as input",
  "Only provides information for active addresses",
];

