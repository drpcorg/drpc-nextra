import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_block_results() {
  return (
    <CosmosMethod
      method="block_results"
      network="Cosmos"
      cu={10}
      description={"Retrieves the transaction and block results"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains the results of processing a block, including information about transactions"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --location '${DRPC_ENDPOINT_URL}' \\
--header 'Content-Type: application/json' \\
--data '{
    "jsonrpc": "2.0",
    "method": "block_results",
    "params": [
        20431584
    ],
    "id": 1
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';
    
  const data = JSON.stringify({
    "jsonrpc": "2.0",
    "method": "block_results",
    "params": [20431584],
    "id": 1
  });
  
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const https = require('https');

  const data = JSON.stringify({
    "jsonrpc": "2.0",
    "method": "block_results",
    "params": [20431584],
    "id": 1
  });
  
  const options = {
    hostname: '${DRPC_ENDPOINT_URL}',
    path: '',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const req = https.request(options, res => {
    let responseData = '';
  
    res.on('data', chunk => {
      responseData += chunk;
    });
  
    res.on('end', () => {
      console.log(JSON.parse(responseData));
    });
  });
  
  req.on('error', error => {
    console.error('Error:', error);
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
    )
    
    func main() {
     url := "${DRPC_ENDPOINT_URL}"
    
     requestBody, err := json.Marshal(map[string]interface{}{
      "jsonrpc": "2.0",
      "method":  "block_results",
      "params":  []interface{}{20431584},
      "id":      1,
     })
    
     if err != nil {
      fmt.Println("Error marshaling JSON:", err)
      return
     }
    
     resp, err := http.Post(url, "application/json", bytes.NewBuffer(requestBody))
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
  
  url = '${DRPC_ENDPOINT_URL}'
  headers = {
      'Content-Type': 'application/json'
  }
  
  data = {
      "jsonrpc": "2.0",
      "method": "block_results",
      "params": [20431584],
      "id": 1
  }
  
  response = requests.post(url, headers=headers, data=json.dumps(data))
  print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;
use tokio;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let url = "${DRPC_ENDPOINT_URL}";

    let request_body = json!({
        "jsonrpc": "2.0",
        "method": "block_results",
        "params": [20431584],
        "id": 1
    });

    let response = client.post(url)
        .json(&request_body)
        .send()
        .await?;

    let response_text = response.text().await?;
    println!("{}", response_text);

    Ok(())
}
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "result": {
    "height": "20431584",
    "txs_results": [
      {
        "code": 0,
        "data": "0A080A06726573756C74",
        "log": "Msg 0: ",
        "info": "",
        "gas_wanted": "200000",
        "gas_used": "76400",
        "events": [
          {
            "type": "transfer",
            "attributes": [
              {
                "key": "recipient",
                "value": "cosmos1xqyqszkn5lxsxgwk4rhdz5x4a4n7ynw83mp92d"
              },
              {
                "key": "sender",
                "value": "cosmos1xhxjm4lkfg4szg6rgfj3f8csz40l80cdg0v3nl"
              }
            ]
          }
        ]
      }
    ],
    "begin_block_events": [
      {
        "type": "mint",
        "attributes": [
          {
            "key": "amount",
            "value": "18640.370000000000000000"
          }
        ]
      }
    ],
    "end_block_events": [
      {
        "type": "validator_set_updates",
        "attributes": []
      }
    ],
    "validator_updates": [],
    "consensus_param_updates": {},
    "evidence": []
  },
  "id": 1
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
      paramName: "query",
      type: "string",
      paramDescription: "The query string used to search for blocks. The query should follow the Tendermint query format (e.g., 'tx.height=5')."
    },
    {
      paramName: "page",
      type: "integer",
      paramDescription: "The page number of the result set to retrieve. Used for pagination."
    },
    {
      paramName: "per_page",
      type: "integer",
      paramDescription: "The number of blocks to return per page. Used for pagination."
    },
    {
      paramName: "order_by",
      type: "string",
      paramDescription: "The order in which results should be returned. Accepts 'asc' for ascending and 'desc' for descending order."
    }
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
    type: "object",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "height",
        type: "string",
        paramDescription: "The height of the block in the blockchain."
      },
      {
        paramName: "txs_results",
        type: "array",
        paramDescription: "The results of executing the transactions in the block.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "code",
            type: "integer",
            paramDescription: "The response code of the transaction."
          },
          {
            paramName: "data",
            type: "string",
            paramDescription: "Any data returned from the transaction execution."
          },
          {
            paramName: "log",
            type: "string",
            paramDescription: "The log output of the transaction execution."
          },
          {
            paramName: "info",
            type: "string",
            paramDescription: "Additional information about the transaction execution."
          },
          {
            paramName: "gas_wanted",
            type: "string",
            paramDescription: "The amount of gas requested for the transaction."
          },
          {
            paramName: "gas_used",
            type: "string",
            paramDescription: "The amount of gas actually used by the transaction."
          },
          {
            paramName: "events",
            type: "array",
            paramDescription: "A list of events triggered by the transaction execution.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "type",
                type: "string",
                paramDescription: "The type of event triggered."
              },
              {
                paramName: "attributes",
                type: "array",
                paramDescription: "Attributes associated with the event.",
                childrenParamsType: "object",
                childrenParams: [
                  {
                    paramName: "key",
                    type: "string",
                    paramDescription: "The key of the attribute."
                  },
                  {
                    paramName: "value",
                    type: "string",
                    paramDescription: "The value of the attribute."
                  }
                ]
              }
            ]
          },
          {
            paramName: "codespace",
            type: "string",
            paramDescription: "The namespace for the error code, if any."
          }
        ]
      },
      {
        paramName: "begin_block_events",
        type: "array",
        paramDescription: "Events triggered at the beginning of the block.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "type",
            type: "string",
            paramDescription: "The type of event triggered at the beginning of the block."
          },
          {
            paramName: "attributes",
            type: "array",
            paramDescription: "Attributes associated with the event.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "key",
                type: "string",
                paramDescription: "The key of the attribute."
              },
              {
                paramName: "value",
                type: "string",
                paramDescription: "The value of the attribute."
              }
            ]
          }
        ]
      },
      {
        paramName: "end_block_events",
        type: "array",
        paramDescription: "Events triggered at the end of the block.",
        childrenParamsType: "object",
        childrenParams: [
            {
            paramName: "type",
            type: "string",
            paramDescription: "The type of event triggered at the end of the block."
          },
          {
            paramName: "attributes",
            type: "array",
            paramDescription: "Attributes associated with the event.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "key",
                type: "string",
                paramDescription: "The key of the attribute."
              },
              {
                paramName: "value",
                type: "string",
                paramDescription: "The value of the attribute."
              }
            ]
          }
        ]
      },
      {
        paramName: "validator_updates",
        type: "array",
        paramDescription: "List of updates to the validators.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "pub_key",
            type: "object",
            paramDescription: "The public key of the validator.",
            childrenParams: [
              {
                paramName: "type",
                type: "string",
                paramDescription: "The type of the public key."
              },
              {
                paramName: "value",
                type: "string",
                paramDescription: "The value of the public key."
              }
            ]
          },
          {
            paramName: "power",
            type: "string",
            paramDescription: "The power of the validator."
          }
        ]
      },
      {
        paramName: "consensus_param_updates",
        type: "object",
        paramDescription: "Updates to the consensus parameters.",
        childrenParams: [
          {
            paramName: "block",
            type: "object",
            paramDescription: "Updates to the block parameters.",
            childrenParams: [
              {
                paramName: "max_bytes",
                type: "string",
                paramDescription: "The maximum size of a block in bytes."
              },
              {
                paramName: "max_gas",
                type: "string",
                paramDescription: "The maximum amount of gas allowed in a block."
              }
            ]
          },
          {
            paramName: "evidence",
            type: "object",
            paramDescription: "Updates to the evidence parameters.",
            childrenParams: [
              {
                paramName: "max_age_num_blocks",
                type: "string",
                paramDescription: "The maximum age of evidence in terms of blocks."
              },
              {
                paramName: "max_age_duration",
                type: "string",
                paramDescription: "The maximum age of evidence in terms of time duration."
              }
            ]
          },
          {
            paramName: "validator",
            type: "object",
            paramDescription: "Updates to the validator parameters.",
            childrenParams: [
              {
                paramName: "pub_key_types",
                type: "array",
                paramDescription: "The list of public key types allowed for validators.",
                childrenParamsType: "string"
              }
            ]
          }
        ]
      },
      {
        paramName: "amount",
        type: "string",
        paramDescription: "The amount of coins transferred or involved in the block."
      },
    ],
  },
];

const USE_CASES = [
  "Analyze transactions and events within a specific block",
  "Validate block execution results",
  "Monitor changes to the validator set",
];

const CONSTRAINTS = [
  "Inconsistencies during chain reorganization",
  "Potential performance issues with large blocks",
  "Limited historical data availability",
];
