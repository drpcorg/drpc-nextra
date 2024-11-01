import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_tryLocateResultTx(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="tryLocateResultTx"
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
     --url '\ ${DRPC_ENDPOINT_URL_TON}tryLocateResultTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}tryLocateResultTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002\`;

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

const url = \`${DRPC_ENDPOINT_URL_TON}tryLocateResultTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002\`;

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
	url := "${DRPC_ENDPOINT_URL_TON}tryLocateResultTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002"

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

url = '${DRPC_ENDPOINT_URL_TON}tryLocateResultTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002'

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
    let url = "${DRPC_ENDPOINT_URL_TON}tryLocateResultTx?source=UQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zTI1&destination=UQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm73vA&created_lt=47597573000002";

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

const RESPONSE_JSON = `
    "ok": true,
    "result": {
        "@type": "raw.transaction",
        "address": {
            "@type": "accountAddress",
            "account_address": "EQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm7yYF"
        },
        "utime": 1720370807,
        "data": "te6cckECCAEAAcYAA7N0/ibOkMjLAvVJX5an1m4EGXOmtH15dCBJgYReJQQebvAAArSixuS0NxLUvVgs8QeGGFM2MZwhibMZb5gyItVOLXOT/S0xskoAAAK0graeWDZorGdwABRUR+gBAgMBAaAEAIJyQ6mmQyZ39HLmBav8jckU7IrGamu4wzwWzKlJuYOGa/n6kZCfzjVebR8px97WNeOqId7XzjMSA2dM8e5vAZIEWgIVDIF/yMPQkBhTiBEGBwGvSAAvs7wFs7x4S8B9plt/S8M02irdNOUxttiffJcI1kFvmwAT+Js6QyMsC9UlflqfWbgQZc6a0fXl0IEmBhF4lBB5u8w9CQAGDGcIAABWlFjcloTNFYzuwAUAagAAAABidWdhdHRpYm95dmljZSAyNjUsMDAwIPCfko4gYXZhaWxhYmxlIG9uIGZyYWdtZW50AJonyCcQAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbwAAAAAAAAAAAAAAAAS1FLaRJ5QuM990nhh8UYSKv4bVGu4tw/IIW8MYUE5+OBHSfO+8=",
        "transaction_id": {
            "@type": "internal.transactionId",
            "lt": "47597573000003",
            "hash": "mlVb0ixiGkELIAog5jwcqDOEcJa3R1CQk/20yaYAQ10="
        },
        "fee": "41535",
        "storage_fee": "1535",
        "other_fee": "40000",
        "in_msg": {
            "@type": "raw.message",
            "source": "EQAX2d4C2d48JeA-0y2_peGabRVumnKY22xPvkuEayC3zW_w",
            "destination": "EQBP4mzpDIywL1SV-Wp9ZuBBlzprR9eXQgSYGEXiUEHm7yYF",
            "value": "1000000",
            "fwd_fee": "406404",
            "ihr_fee": "0",
            "created_lt": "47597573000002",
            "body_hash": "0+UqzPwXQY+jCm7ohKTneJ+Yi3q08vctwy000JALqts=",
            "msg_data": {
                "@type": "msg.dataText",
                "text": "YnVnYXR0aWJveXZpY2UgMjY1LDAwMCDwn5KOIGF2YWlsYWJsZSBvbiBmcmFnbWVudA=="
            },
            "message": "bugattiboyvice 265,000 available on fragment"
        },
        "out_msgs": []
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
    paramName: "ok",
    type: "boolean",
    paramDescription: "Indicates if the request was successful."
  },
  {
    paramName: "result",
    type: "object",
    paramDescription: "Details of the raw transaction.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "@type",
        type: "string",
        paramDescription: "Type of the transaction data."
      },
      {
        paramName: "address",
        type: "object",
        paramDescription: "Address details of the transaction.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "Type of the address data."
          },
          {
            paramName: "account_address",
            type: "string",
            paramDescription: "Account address involved in the transaction."
          }
        ]
      },
      {
        paramName: "utime",
        type: "integer",
        paramDescription: "Unix timestamp of the transaction."
      },
      {
        paramName: "data",
        type: "string",
        paramDescription: "Encoded transaction data."
      },
      {
        paramName: "transaction_id",
        type: "object",
        paramDescription: "Identifier details of the transaction.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "Type of the transaction ID."
          },
          {
            paramName: "lt",
            type: "string",
            paramDescription: "Logical time of the transaction."
          },
          {
            paramName: "hash",
            type: "string",
            paramDescription: "Hash of the transaction."
          }
        ]
      },
      {
        paramName: "fee",
        type: "string",
        paramDescription: "Total transaction fee."
      },
      {
        paramName: "storage_fee",
        type: "string",
        paramDescription: "Fee for storage used in the transaction."
      },
      {
        paramName: "other_fee",
        type: "string",
        paramDescription: "Other fees associated with the transaction."
      },
      {
        paramName: "in_msg",
        type: "object",
        paramDescription: "Details of the incoming message in the transaction.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "Type of the incoming message."
          },
          {
            paramName: "source",
            type: "string",
            paramDescription: "Source address of the incoming message."
          },
          {
            paramName: "destination",
            type: "string",
            paramDescription: "Destination address of the incoming message."
          },
          {
            paramName: "value",
            type: "string",
            paramDescription: "Value transferred in the incoming message."
          },
          {
            paramName: "fwd_fee",
            type: "string",
            paramDescription: "Forwarding fee of the incoming message."
          },
          {
            paramName: "ihr_fee",
            type: "string",
            paramDescription: "Instant Hypercube Routing fee of the incoming message."
          },
          {
            paramName: "created_lt",
            type: "string",
            paramDescription: "Logical time when the incoming message was created."
          },
          {
            paramName: "body_hash",
            type: "string",
            paramDescription: "Hash of the message body."
          },
          {
            paramName: "msg_data",
            type: "object",
            paramDescription: "Data contained in the message.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "@type",
                type: "string",
                paramDescription: "Type of the message data."
              },
              {
                paramName: "text",
                type: "string",
                paramDescription: "Text content of the message data, encoded in Base64."
              }
            ]
          },
          {
            paramName: "message",
            type: "string",
            paramDescription: "Decoded message content."
          }
        ]
      },
      {
        paramName: "out_msgs",
        type: "array",
        paramDescription: "Array of outgoing messages, if any.",
        childrenParamsType: "object",
        childrenParams: []
      }
    ]
  }
];

const USE_CASES = [
  "Identify the result transaction in TON",
  "Trace outcomes of specific transactions",
  "Confirm details of resulting transactions",
];

const CONSTRAINTS = [
  "Requires a valid result transaction ID",
  "Only finds existing result transactions",
  "Relies on node synchronization",
];




