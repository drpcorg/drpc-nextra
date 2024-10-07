import PolygonMethod from "../../PolygonMethod/PolygonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_POLYGON } from "./constants";

export function PolygonMethod_bor_getCurrentValidators(props: GenericMethodPropsReplacing) {
  return (
    <PolygonMethod
      method="bor_getCurrentValidators"
      network="polygon"
      cu={10}
      description={"Retrieve the list of current validators"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The list of current validators"
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl ${DRPC_ENDPOINT_URL_POLYGON} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  --data '{
  "jsonrpc": "2.0",
  "method": "bor_getCurrentValidators",
  "params": [],
  "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_POLYGON}';

const data = {
  jsonrpc: "2.0",
  method: "bor_getCurrentValidators",
  params: [],
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
    code: () => `const axios = require('axios');

const url = '${DRPC_ENDPOINT_URL_POLYGON}';

const data = {
  jsonrpc: "2.0",
  method: "bor_getCurrentValidators",
  params: [],
  id: 1
};

axios.post(url, data)
  .then(response => console.log(response.data))
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
	url := "${DRPC_ENDPOINT_URL_POLYGON}"

	data := map[string]interface{}{
		"id": 1,
		"jsonrpc": "2.0",
		"method": "bor_getCurrentValidators",
		"params": []interface{}{},
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

url = '${DRPC_ENDPOINT_URL_POLYGON}'

data = {
    "jsonrpc": "2.0",
    "method": "bor_getCurrentValidators",
    "params": [],
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
    let url = "${DRPC_ENDPOINT_URL_POLYGON}";

    let data = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "bor_getCurrentValidators",
        "params": []
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
  "result": [
    {
      "ID": 0,
      "signer": "0x02f70172f7f490653665c9bfac0666147c8af1f5",
      "power": 3,
      "accum": 9
    },
    {
      "ID": 0,
      "signer": "0x048cfedf907c4c9ddd11ff882380906e78e84bbe",
      "power": 1,
      "accum": -23
    },
    {
      "ID": 0,
      "signer": "0x127685d6dd6683085da4b6a041efcef1681e5c9c",
      "power": 1,
      "accum": -23
    },
    {
      "ID": 0,
      "signer": "0x1b0840519a581f3779d0a10b77593d6d3894a76a",
      "power": 3,
      "accum": -12
    },
    {
      "ID": 0,
      "signer": "0x1bf10ff66e3a877e4a500f1a6a5097582a1815bb",
      "power": 1,
      "accum": -23
    },
    {
      "ID": 0,
      "signer": "0x1d25c827abd466387bda00b429fe728627d6eee6",
      "power": 2,
      "accum": 12
    },
    {
      "ID": 0,
      "signer": "0x1efecb61a2f80aa34d3b9218b564a64d05946290",
      "power": 1,
      "accum": 24
    },
    {
      "ID": 0,
      "signer": "0x67b94473d81d0cd00849d563c94d0432ac988b49",
      "power": 4,
      "accum": 2
    },
    {
      "ID": 0,
      "signer": "0x69f5c4d08f6bc8cd29fe5f004d46fb566270868d",
      "power": 5,
      "accum": -20
    },
    {
      "ID": 0,
      "signer": "0x794e44d1334a56fea7f4df12633b88820d0c5888",
      "power": 1,
      "accum": 23
    },
    {
      "ID": 0,
      "signer": "0x7c7379531b2aee82e4ca06d4175d13b9cbeafd49",
      "power": 2,
      "accum": -8
    },
    {
      "ID": 0,
      "signer": "0x83d69448f88bf9c701c1b93f43e1f753d39b2632",
      "power": 1,
      "accum": 17
    },
    {
      "ID": 0,
      "signer": "0x90b11143a0cb64e067402307bc7f2276dcec8250",
      "power": 1,
      "accum": -23
    },
    {
      "ID": 0,
      "signer": "0x950467af223a5095848c5ff618ff49cdad67db49",
      "power": 2,
      "accum": -7
    },
    {
      "ID": 0,
      "signer": "0x9ead03f7136fc6b4bdb0780b00a1c14ae5a8b6d0",
      "power": 4,
      "accum": -8
    },
    {
      "ID": 0,
      "signer": "0xa8b52f02108aa5f4b675bdcc973760022d7c6020",
      "power": 6,
      "accum": -16
    },
    {
      "ID": 0,
      "signer": "0xb9ede6f94d192073d8eaf85f8db677133d483249",
      "power": 1,
      "accum": -23
    },
    {
      "ID": 0,
      "signer": "0xbc6044f4a1688d8b8596a9f7d4659e09985eebe6",
      "power": 1,
      "accum": 27
    },
    {
      "ID": 0,
      "signer": "0xcdca2c8b4e0d889ca06f9d3f2a28aa8dd96f307a",
      "power": 1,
      "accum": 27
    },
    {
      "ID": 0,
      "signer": "0xea105ab4e3f01f7f8da09cb84ab501aeb02e9fc7",
      "power": 1,
      "accum": 27
    },
    {
      "ID": 0,
      "signer": "0xeedba2484aaf940f37cd3cd21a5d7c4a7dafbfc0",
      "power": 2,
      "accum": 20
    },
    {
      "ID": 0,
      "signer": "0xf0245f6251bef9447a08766b9da2b07b28ad80b0",
      "power": 2,
      "accum": 3
    },
    {
      "ID": 0,
      "signer": "0xfcccd43296d9c1601a904eca9b339d94a5e5e098",
      "power": 4,
      "accum": -1
    }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = null;

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
    childrenParamsType: "object",
    childrenParams: [
        {
    paramName: "ID",
    type: "string",
    paramDescription: "The ID of the validator.",
  },
  {
    paramName: "accum",
    type: "integer",
    paramDescription: "The proposer priority for the validator.",
  },
  {
    paramName: "power",
    type: "integer",
    paramDescription: "The voting power of the validator.",
  },
  {
    paramName: "signer",
    type: "string",
    paramDescription: "The address of the validator.",
  },
    ]
  },
];

const USE_CASES = [
  "Retrieve the current list of Polygon validators",
  "Monitor validator participation in block production",
  "Analyze the active validator set",
];

const CONSTRAINTS = [
  "Requires a synced Polygon (Bor) node",
  "Only shows current validators, not historical data",
  "Works only in PoS consensus networks",
];


