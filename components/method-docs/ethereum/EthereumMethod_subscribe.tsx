import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import {DRPC_ENDPOINT_URL, DRPC_ENDPOINT_URL_WSCAT} from "./constants";

export function EthereumMethod_subscribe(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="eth_subscribe"
      network="ethereum"
      cu={10}
      description={
        "Creates a subscription to receive real-time updates for various events on the blockchain"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_strings"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The subscription ID, represented as a hexadecimal string. "
      }
      {...props}               
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `
wscat -c ${DRPC_ENDPOINT_URL_WSCAT}

{"jsonrpc":"2.0","id": 2, "method": "eth_subscribe", "params": ["newHeads"]}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_WSCAT}';

const data = {
  jsonrpc: "2.0",
  method: "eth_subscribe",
  params: ["newHeads"],
  id: 1
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const fetch = require('node-fetch');

const url = '${DRPC_ENDPOINT_URL_WSCAT}';

const data = {
  jsonrpc: "2.0",
  method: "eth_subscribe",
  params: ["newHeads"],
  id: 1
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));
`,
  },
  {
    language: "go",
    code: () => `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	url := "${DRPC_ENDPOINT_URL_WSCAT}"

	data := map[string]interface{}{
		"jsonrpc": "2.0",
		"method":  "eth_subscribe",
		"params":  []interface{}{"newHeads"},
		"id":      1,
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshaling JSON:", err)
		return
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
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
import json

url = '${DRPC_ENDPOINT_URL_WSCAT}'

data = {
    "jsonrpc": "2.0",
    "method": "eth_subscribe",
    "params": ["newHeads"],
    "id": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "${DRPC_ENDPOINT_URL_WSCAT}";

    let data = json!({
        "jsonrpc": "2.0",
        "method": "eth_subscribe",
        "params": ["newHeads"],
        "id": 1
    });

    let client = Client::new();
    let res = client.post(url)
        .json(&data)
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
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1234567890abcdef1234567890abcdef"
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "subscription_name",
    type: "string",
    paramDescription:
      "Specifies the event type for subscription. Supported types include:",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "newHeads",
        type: "string",
        paramDescription:
          "Triggers a notification for each new block header added, including chain reorganizations.",
      },
      {
        paramName: "logs",
        type: "string",
        paramDescription:
          "Returns logs matching filter criteria in newly imported blocks.",
      },
    ],
  },
  {
    paramName: "data",
    type: "object",
    paramDescription: "Is specifically used for logs subscriptions. Arguments like address, multiple addresses, and topics.",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "id",
    type: "integer",
  },
  {
    paramName: "jsonrpc",
    type: "string",
  },
  {
    paramName: "result",
    type: "string",
  },
];

const USE_CASES = [
  "Subscribe to new block headers for monitoring",
  "Track blockchain head changes in real-time",
  "Receive updates when new blocks are mined",
];

const CONSTRAINTS = [
  "newPendingTransaction subscription is not supported",
  "Requires continuous WebSocket connection to the node",
  "Node must support eth_subscribe method",
];
