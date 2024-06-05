import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_feeHistory() {
  return (
    <EthereumMethod
      method="eth_feeHistory"
      network="ethereum"
      cu={15}
      description={"Returns the balance of the account of a given address."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL} \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_feeHistory",
  "params": [
    4,
    4,
    4
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const https = require('https');

const data = JSON.stringify({
  id: 1,
  jsonrpc: "2.0",
  method: "eth_feeHistory",
  params: [4, 4, 4]
});

const options = {
  hostname: '${DRPC_ENDPOINT_URL}',
  path: '/v2/docs-demo',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  let responseBody = '';
  
  res.on('data', chunk => {
    responseBody += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(responseBody));
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
`,
  },
  {
    language: "node",
    code: () => `const https = require('https');

const data = JSON.stringify({
  id: 1,
  jsonrpc: "2.0",
  method: "eth_feeHistory",
  params: [4, 4, 4]
});

const options = {
  hostname: '${DRPC_ENDPOINT_URL}',
  path: '/v2/docs-demo',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  let responseBody = '';
  
  res.on('data', chunk => {
    responseBody += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(responseBody));
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end(); 
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
  "io/ioutil"
)

func main() {
  url := "${DRPC_ENDPOINT_URL}"
  jsonData := map[string]interface{}{
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_feeHistory",
    "params": []interface{}{4, 4, 4},
  }
  
  jsonValue, _ := json.Marshal(jsonData)
  request, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonValue))
  if err != nil {
    fmt.Println(err)
    return
  }
  request.Header.Set("Accept", "application/json")
  request.Header.Set("Content-Type", "application/json")
  
  client := &http.Client{}
  response, err := client.Do(request)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer response.Body.Close()
  
  body, _ := ioutil.ReadAll(response.Body)
  fmt.Println(string(body))
}
`,
  },
  {
    language: "python",
    code: () => `import requests
import json

url = "${DRPC_ENDPOINT_URL}"

headers = {
    "accept": "application/json",
    "content-type": "application/json"
}

payload = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_feeHistory",
    "params": [4, 4, 4]
}

response = requests.post(url, headers=headers, data=json.dumps(payload))

print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::blocking::Client;
use serde_json::json;
use std::error::Error;

fn main() -> Result<(), Box<dyn Error>> {
    let client = Client::new();
    let url = "${DRPC_ENDPOINT_URL}";

    let request_body = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_feeHistory",
        "params": [4, 4, 4]
    });

    let response = client
        .post(url)
        .header("Accept", "application/json")
        .header("Content-Type", "application/json")
        .json(&request_body)
        .send()?;

    let response_text = response.text()?;
    println!("{}", response_text);

    Ok(())
}
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "oldestBlock": "0x130b1e6",
    "reward": [
      [
        "0x5041e1e",
        "0xdd221b80"
      ],
      [
        "0x5041e1e",
        "0xb8346df0"
      ],
      [
        "0x55d4a80",
        "0xb2d05e00"
      ],
      [
        "0x4dd9818",
        "0x3b9aca00"
      ]
    ],
    "baseFeePerGas": [
      "0x52d80a82c",
      "0x50f43f659",
      "0x50012de8d",
      "0x4e30357d6",
      "0x57efff9e7"
    ],
    "gasUsedRatio": [
      0.40875283333333334,
      0.45308523333333334,
      0.4091907,
      0.9987537
    ],
    "baseFeePerBlobGas": [
      "0x1",
      "0x1",
      "0x1",
      "0x1",
      "0x1"
    ],
    "blobGasUsedRatio": [
      0.5,
      1,
      0.6666666666666666,
      1
    ]
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "id",
    type: "integer",
  },
  {
    paramName: "jsonrpc",
    type: "string",
  },
  {
    paramName: "Block count or range",
    type: "integer",
  },
    {
    paramName: "Block number (in hex) or block tag",
    type: "string",
  },
    {
    paramName: "Reward percentiles to sample from each block",
    type: "array_of_integers",
    paramDescription:
      "optional",
  },
];

const RESPONSE_PARAMS: ResponseParam[] = [
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
    type: "array_of_objects",
    paramDescription:
      "Array of log objects, or an empty array if nothing has changed since last poll.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "oldestBlock",
        type: "int64",
        paramDescription:
          "Lowest number block of the returned range.",
      },
      {
        paramName: "baseFeePerGas",
        type: "array_of_strings",
        paramDescription:
          "An array of block base fees per gas. This includes the next block after the newest of the returned range, because this value can be derived from the newest block. Zeroes are returned for pre-EIP-1559 blocks.",
      },
      {
        paramName: "gasUsedRatio",
        type: "array_of_numbers",
        paramDescription:
          "An array representing the ratios of block gas used. These ratios are calculated by dividing gasUsed by gasLimit.",
      },
      {
        paramName: "reward",
        type: "array_of_arrays_of_strings",
        paramDescription: "A two-dimensional array showing the effective priority fees per gas at the specified block percentiles.",
      },
      {
        paramName: "baseFeePerBlobGas",
        type: "array_of_strings",
        paramDescription:
          "An array of base fees per blob gas for blocks.",
      },
      {
        paramName: "data",
        type: "string",
        paramDescription:
          "Contains one or more 32 Bytes non-indexed arguments of the log.",
      },
      {
        paramName: "blobGasUsedRatio\n",
        type: "array_of_numbers",
        paramDescription:
          "An array showing the ratios of blob gas used in blocks. T",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve gas price history.",
  "Estimate future gas prices.",
  "Analyze transaction fee trends.",
];

const CONSTRAINTS = [
  "Network-specific method.",
  "Requires JSON-RPC protocol.",
  "Limited to recent blocks.",
];
