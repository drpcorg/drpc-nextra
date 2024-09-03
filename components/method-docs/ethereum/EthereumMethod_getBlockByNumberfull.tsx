import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getBlockByNumberfull(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="eth_getBlockByNumber#full"
      network="ethereum"
      cu={60}
      description={
        "Retrieves detailed information about a specific block by its number, including comprehensive details for all transactions within that block"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Detailed block object if found, or null if no block is found."
      }
      {...props}
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
  "method": "eth_getBlockByNumber",
  "params": [
    "finalized",
    true
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const data = {
    id: 1,
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: ['finalized', true]
};

fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const data = {
    id: 1,
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: ['finalized', true]
};

fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
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
    url := "${DRPC_ENDPOINT_URL}"
    headers := map[string]string{
        "Accept":       "application/json",
        "Content-Type": "application/json",
    }

    data := map[string]interface{}{
        "id":      1,
        "jsonrpc": "2.0",
        "method":  "eth_getBlockByNumber",
        "params":  []interface{}{"finalized", true},
    }

    jsonData, err := json.Marshal(data)
    if err != nil {
        fmt.Println(err)
        return
    }

    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    if err != nil {
        fmt.Println(err)
        return
    }

    for key, value := range headers {
        req.Header.Set(key, value)
    }

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
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

url = '${DRPC_ENDPOINT_URL}'
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

data = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": ["finalized", true]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;
use tokio;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    let url = "${DRPC_ENDPOINT_URL}";
    let client = Client::new();

    let data = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_getBlockByNumber",
        "params": ["finalized", true]
    });

    let response = client.post(url)
        .header("Accept", "application/json")
        .header("Content-Type", "application/json")
        .json(&data)
        .send()
        .await?;

    let response_json: serde_json::Value = response.json().await?;
    println!("{:#?}", response_json);

    Ok(())
}
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0x4ea3f27bc",
    "extraData": "0x65746865726d696e652d6575312d32",
    "gasLimit": "0x47e7c4",
    "gasUsed": "0x6384",
    "hash": "0x5bad55fbd7e0f20eac95f45f55f997216de10aaf176314c236b0c3c93c5d1f17",
    "logsBloom": "0x0",
    "miner": "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5",
    "mixHash": "0x75b1f48901cf1d37ad43c2b29eafeb1f3ae5cf5c5d55b1b3be6b2be4a25d6ec6",
    "nonce": "0x539bd4979b50162d",
    "number": "0x1b4",
    "parentHash": "0x8e3d7ea52a14b9d773c37d67e2a4b8e6a12573c3d60a1cd1a58455d3008d1c9d",
    "receiptsRoot": "0xbcdfc35b86bedf72e283106f1f9a03c8d99a6de2b1cba6b01ff3e78e924e05c8",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad0d4e8eeb004cfe8dec7d1f3469a7f5f",
    "size": "0x220",
    "stateRoot": "0x7d00dcd0e0d14e6f7d9dc57116d0e5f76b0abdc716a1d7e6b4df87eae7795b7a",
    "timestamp": "0x55ba467c",
    "totalDifficulty": "0x78ed983323d",
    "transactions": [
      {
        "blockHash": "0x5bad55fbd7e0f20eac95f45f55f997216de10aaf176314c236b0c3c93c5d1f17",
        "blockNumber": "0x1b4",
        "from": "0x5cb2045c43d14a5f5e5f1ea60c5b02e0a93032cf",
        "gas": "0x7d3c",
        "gasPrice": "0xba43b7400",
        "hash": "0x1a85165ac88f73b7a290104f614cf08d8b4f3e193f41f209c3716d9c237139f5",
        "input": "0x",
        "nonce": "0x15",
        "to": "0x3535353535353535353535353535353535353535",
        "transactionIndex": "0x0",
        "value": "0x1bc16d674ec80000",
        "v": "0x1c",
        "r": "0x5e1d3a76fbf824220e68236e2d51cb98f349a5a6e4f43e3f471f5d0421d4aee2",
        "s": "0x5e1d3a76fbf824220e68236e2d51cb98f349a5a6e4f43e3f471f5d0421d4aee2"
      }
    ],
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription:
      'The block number or tag ("latest", "earliest", "pending") at which to get the balance.',
    paramEnum: [
      {
        value: "latest",
        isDefault: true,
        description: "The most recent block in the blockchain (default).",
      },
      {
        value: "safe",
        description: "A block that has been validated by the beacon chain.",
      },
      {
        value: "finalized",
        description: "a block confirmed by over two-thirds of validators",
      },
      {
        value: "earliest",
        description:
          "A block approved by more than two-thirds of the validators.",
      },
      {
        value: "pending",
        description:
          "Transactions that have been broadcast but not yet included in a block.",
      },
    ],
  },
  {
    paramName: "transaction_detail_flag",
    type: "boolean",
    paramDescription: "Must be true to retrieve full transaction details.",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "baseFeePerGas",
    type: "string",
    paramDescription: "Base fee per gas in hexadecimal.",
  },
  {
    paramName: "difficulty",
    type: "integer",
    paramDescription: "Block difficulty as an integer (hexadecimal).",
  },

  {
    paramName: "extraData",
    paramDescription: "Extra data field of the block.",
    type: "string",
  },

  {
    paramName: "gasLimit",
    paramDescription: "Maximum gas allowed in the block (hexadecimal string).",
    type: "string",
  },

  {
    paramName: "gasUsed",
    paramDescription:
      "Total gas used by all transactions (hexadecimal string).",
    type: "string",
  },

  {
    paramName: "hash",
    paramDescription: "Block hash (null if pending).",
    type: "string",
  },

  {
    paramName: "logsBloom",
    paramDescription: "Bloom filter for logs (null if pending).",
    type: "string",
  },

  {
    paramName: "miner",
    paramDescription: " Address of the mining reward recipient.",
    type: "string",
  },

  {
    paramName: "mixHash",
    paramDescription: "256-bit hash as a hexadecimal string.",
    type: "string",
  },

  {
    paramName: "nonce",
    paramDescription: "Number of prior transactions from the sender.",
    type: "string",
  },

  {
    paramName: "number",
    paramDescription:
      "The block number of the requested block encoded as hexadecimal.",
    type: "string",
  },

  {
    paramName: "parentHash",
    paramDescription: "Parent block hash.",
    type: "string",
  },

  {
    paramName: "receiptsRoot",
    paramDescription: "Root of the receipts trie.",
    type: "string",
  },

  {
    paramName: "sha3Uncles",
    paramDescription: "SHA3 hash of uncles data.",
    type: "string",
  },

  {
    paramName: "size",
    paramDescription: "Block size in bytes.",
    type: "string",
  },

  {
    paramName: "stateRoot",
    paramDescription: "Root of the final state trie.",
    type: "string",
  },

  {
    paramName: "timestamp",
    paramDescription: "UNIX timestamp of the block's creation.",
    type: "string",
  },

  {
    paramName: "totalDifficulty",
    paramDescription: "Total difficulty of the chain up to this block.",
    type: "string",
  },

  {
    paramName: "transactions",
    paramDescription: "Array of transaction objects, including:",
    type: "array",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "blockHash",
        type: "string",
        paramDescription: "Hash of the block containing the transaction.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription: "Block number containing the transaction.",
      },
      {
        paramName: "transactionIndex",
        type: "string",
        paramDescription:
          "Position of the transaction in the block (null if pending)",
      },
      {
        paramName: "nonce",
        type: "string",
        paramDescription: "Number of prior transactions from the sender.",
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription: "32 Bytes - hash of the transaction.",
      },
      {
        paramName: "from",
        type: "string",
        paramDescription: "Transaction hash.",
      },
      {
        paramName: "gas",
        type: "string",
        paramDescription: "Gas provided by the sender.",
      },
      {
        paramName: "gasPrice",
        type: "string",
        paramDescription: "Gas price provided by the sender in wei.",
      },
      {
        paramName: "input",
        type: "string",
        paramDescription: "Data sent with the transaction.",
      },
      {
        paramName: "r",
        type: "string",
        paramDescription: "ECDSA signature r.",
      },
      {
        paramName: "s",
        type: "string",
        paramDescription: "ECDSA signature r.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription: "Receiver's address (null if contract creation).",
      },
      {
        paramName: "v",
        type: "string",
        paramDescription: "ECDSA recovery id.",
      },
      {
        paramName: "value",
        type: "string",
        paramDescription: "Value transferred in Wei.",
      },
    ],
  },

  {
    paramName: "transactionsRoot",
    paramDescription: "The root of the transaction trie of the block",
    type: "string",
  },

  {
    paramName: "uncles",
    paramDescription: "Array of uncle block hashes",
    type: "array",
  },
];

const USE_CASES = [
  "Retrieve full block details for forensic analysis",
  "Get all transactions within a specific block",
  "Monitor blockchain activity for a specific block",
];

const CONSTRAINTS = [
  "Requires accurate block number or tag",
  "Full transaction data increases response size",
  "Node must be fully synchronized with network",
];
