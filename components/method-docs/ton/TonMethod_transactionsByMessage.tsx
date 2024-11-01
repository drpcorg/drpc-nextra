import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL_TON_NFT, DRPC_ENDPOINT_URL_TON_V3} from "./constants";

export function TonMethod_transactionsByMessage(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="transactionsByMessage"
      network="ton"
      cu = {100}
      description={
          "Fetches transactions associated with a specific message."}
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
     --url '\ ${DRPC_ENDPOINT_URL_TON_V3}/transactionsByMessage?direction=out&msg_hash=po4%2FF9OgHrJGTUCtobScZrW%2FgOwVPj7s3f40HV32EII%3D&limit=128&offset=0' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON_V3}/transactionsByMessage?direction=out&msg_hash=po4%2FF9OgHrJGTUCtobScZrW%2FgOwVPj7s3f40HV32EII%3D&limit=128&offset=0\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON_V3}/transactionsByMessage?direction=out&msg_hash=po4%2FF9OgHrJGTUCtobScZrW%2FgOwVPj7s3f40HV32EII%3D&limit=128&offset=0\`;

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
	url := "${DRPC_ENDPOINT_URL_TON_V3}/transactionsByMessage?direction=out&msg_hash=po4%2FF9OgHrJGTUCtobScZrW%2FgOwVPj7s3f40HV32EII%3D&limit=128&offset=0"

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

url = '${DRPC_ENDPOINT_URL_TON_V3}/transactionsByMessage?direction=out&msg_hash=po4%2FF9OgHrJGTUCtobScZrW%2FgOwVPj7s3f40HV32EII%3D&limit=128&offset=0'

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
    let url = "${DRPC_ENDPOINT_URL_TON_V3}/transactionsByMessage?direction=out&msg_hash=po4%2FF9OgHrJGTUCtobScZrW%2FgOwVPj7s3f40HV32EII%3D&limit=128&offset=0";

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
            "from": "EQD1Lp1KcmGHFpE8eIvL1mnHT83b4HdB8HJxuSfq6Rq4zGyN",
            "to": "EQDzSp9Qc6KcJXGJc7NkSVxj2pzLsmM4NdFpc8i2dZqjU9i9",
            "amount": "2500000000",
            "lt": 47597573000002,
            "fee": "100000",
            "timestamp": 1693527600,
            "status": "completed",
            "message_hash": "po4/F9OgHrJGTUCtobScZrW/gOwVPj7s3f40HV32EII=",
            "message": "Payment for services"
        },
        {
            "transaction_id": "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "from": "EQDtFpEwcFAEcRe5mLVh2N6C0x-_hJEM7W61_JLnSF74p4q2",
            "to": "EQC7VpEHw2DA9hxkdx_WXv9NSkb_v_KVQMY2Le4a4Fk9DUqQ",
            "amount": "1000000000",
            "lt": 47597573000001,
            "fee": "75000",
            "timestamp": 1693527500,
            "status": "completed",
            "message_hash": "po4/F9OgHrJGTUCtobScZrW/gOwVPj7s3f40HV32EII=",
            "message": "Monthly subscription payment"
        }
    ]
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "direction",
    type: "string",
    paramDescription: "Required. The direction of the message. Possible values are 'in' or 'out'. Default is 'out'."
  },
  {
    paramName: "msg_hash",
    type: "string",
    paramDescription: "Required. The hash of the message.",
  },
  {
    paramName: "limit",
    type: "integer",
    paramDescription: "Optional. The maximum number of transactions to return. Default is 128."
  },
  {
    paramName: "offset",
    type: "integer",
    paramDescription: "Optional. The number of transactions to skip before starting to return results. Default is 0."
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
        paramName: "block_id",
        type: "string",
        paramDescription: "Identifier of the block containing the transaction."
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
  "Find transactions by message ID",
  "Trace message-related transactions",
  "Audit message-based transaction flow",
];

const CONSTRAINTS = [
  "Needs valid message ID",
  "Supports Transactions V3 only",
];





