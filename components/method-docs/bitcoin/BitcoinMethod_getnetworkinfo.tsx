import BitcoinMethod from "../../BitcoinMethod/BitcoinMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_BITCOIN } from "./constants";

export function BitcoinMethod_getnetworkinfo(props: GenericMethodPropsReplacing) {
  return (
    <BitcoinMethod
      method="getnetworkinfo"
      network="bitcoin"
      cu={20}
      description={"Returns network-related information."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
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
  code: () => `curl \ ${DRPC_ENDPOINT_URL_BITCOIN} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  --data '{ "jsonrpc": "1.0", "id": "curltest", "method": "getnetworkinfo", "params": [] }'`,
},
{
  language: "js",
  code: () => `const url = \`${DRPC_ENDPOINT_URL_BITCOIN}\`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    jsonrpc: "1.0",
    id: "curltest",
    method: "getnetworkinfo",
    params: []
  })
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));`,
},
{
  language: "node",
  code: () => `const axios = require('axios');

const url = \`${DRPC_ENDPOINT_URL_BITCOIN}\`;

axios.post(url, {
    jsonrpc: "1.0",
    id: "curltest",
    method: "getnetworkinfo",
    params: []
}, {
    headers: {
        'Content-Type': 'application/json'
    }
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));`,
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
	url := "${DRPC_ENDPOINT_URL_BITCOIN}"

	data := map[string]interface{}{
		"jsonrpc": "1.0",
		"id": "curltest",
		"method": "getnetworkinfo",
		"params": []interface{}{},
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshalling JSON:", err)
		return
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}
	req.Header.Set("Content-Type", "application/json")

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

url = '${DRPC_ENDPOINT_URL_BITCOIN}'

data = {
    "jsonrpc": "1.0",
    "id": "curltest",
    "method": "getnetworkinfo",
    "params": []
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, json=data)
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
    let url = "${DRPC_ENDPOINT_URL_BITCOIN}";

    let client = Client::new();
    let res = client.post(url)
        .header("Content-Type", "application/json")
        .json(&json!({
            "jsonrpc": "1.0",
            "id": "curltest",
            "method": "getnetworkinfo",
            "params": []
        }))
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
    "jsonrpc": "1.0",
    "id": "curltest",
    "result": {
        "version": 180100,
        "subversion": "/Satoshi:0.18.1/",
        "protocolversion": 70015,
        "localservices": "000000000000000f",
        "timeoffset": 0,
        "connections": 8,
        "networks": [
            {
                "name": "ipv4",
                "limited": false,
                "reachable": true,
                "proxy": "",
                "proxy_randomize_credentials": false
            }
        ],
        "relayfee": 0.00001000,
        "localaddresses": [
            {
                "address": "192.168.1.2",
                "port": 8333
            }
        ],
        "warnings": ""
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = null;

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "version",
    type: "numeric",
    paramDescription: "The server version."
  },
  {
    paramName: "subversion",
    type: "string",
    paramDescription: "The server subversion string."
  },
  {
    paramName: "protocolversion",
    type: "numeric",
    paramDescription: "The protocol version."
  },
  {
    paramName: "localservices",
    type: "string",
    paramDescription: "The services we offer to the network (in hexadecimal format)."
  },
  {
    paramName: "localservicesnames",
    type: "array",
    paramDescription: "The services we offer to the network, in human-readable form.",
  },
  {
    paramName: "localrelay",
    type: "boolean",
    paramDescription: "True if transaction relay is requested from peers."
  },
  {
    paramName: "timeoffset",
    type: "numeric",
    paramDescription: "The time offset."
  },
  {
    paramName: "connections",
    type: "numeric",
    paramDescription: "The total number of connections."
  },
  {
    paramName: "connections_in",
    type: "numeric",
    paramDescription: "The number of inbound connections."
  },
  {
    paramName: "connections_out",
    type: "numeric",
    paramDescription: "The number of outbound connections."
  },
  {
    paramName: "networkactive",
    type: "boolean",
    paramDescription: "Whether P2P networking is enabled."
  },
  {
    paramName: "networks",
    type: "array",
    paramDescription: "Information per network.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "name",
        type: "string",
        paramDescription: "Network (ipv4, ipv6, or onion)."
      },
      {
        paramName: "limited",
        type: "boolean",
        paramDescription: "Indicates if the network is limited using -onlynet."
      },
      {
        paramName: "reachable",
        type: "boolean",
        paramDescription: "Indicates if the network is reachable."
      },
      {
        paramName: "proxy",
        type: "string",
        paramDescription: "The proxy used for this network, or empty if none."
      },
      {
        paramName: "proxy_randomize_credentials",
        type: "boolean",
        paramDescription: "Whether randomized credentials are used."
      }
    ]
  },
  {
    paramName: "relayfee",
    type: "numeric",
    paramDescription: "The minimum relay fee for transactions in BTC/kB."
  },
  {
    paramName: "incrementalfee",
    type: "numeric",
    paramDescription: "The minimum fee increment for mempool limiting or BIP 125 replacement in BTC/kB."
  },
  {
    paramName: "localaddresses",
    type: "array",
    paramDescription: "List of local addresses.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "address",
        type: "string",
        paramDescription: "The network address."
      },
      {
        paramName: "port",
        type: "numeric",
        paramDescription: "The network port."
      },
      {
        paramName: "score",
        type: "numeric",
        paramDescription: "The relative score."
      }
    ]
  },
  {
    paramName: "warnings",
    type: "string",
    paramDescription: "Any network and blockchain warnings."
  }
];

const USE_CASES = [
  "Access Bitcoin network data",
  "Interact with Bitcoin blockchain",
  "Perform transactions and network operations"
];

const CONSTRAINTS = [
  "Requires a running Bitcoin node",
  "Depends on node synchronization",
  "RPC methods vary by node configuration"
];




