import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getBlockByNumber(
  props: GenericMethodPropsReplacing
) {
  return (
    <EthereumMethod
      method="eth_getBlockByNumber"
      network="ethereum"
      cu={24}
      description={
        "Retrieves detailed information about a specific block on the blockchain by its number"
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
        "The block object if the block is found, containing detailed information such as block hash, parent hash, miner, transactions, gas used, and more. If the block is not found, it returns null."
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
   false
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
    params: ['finalized', false]
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
    params: ['finalized', false]
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
        "params":  []interface{}{"finalized", false},
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
    "params": ["finalized", "false"]
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
        "params": ["finalized", false]
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
  "id": 0,
  "result": {
    "number": "0x1b4",
    "difficulty": "0x4ea3f27bc",
    "extraData": "0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32",
    "gasLimit": "0x1388",
    "gasUsed": "0x0",
    "hash": "0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "miner": "0xbb7b8287f3f0a933474a79eae42cbca977791171",
    "mixHash": "0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843",
    "nonce": "0x689056015818adbe",
    "parentHash": "0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54",
    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x220",
    "stateRoot": "0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d",
    "timestamp": "0x55ba467c",
    "totalDifficulty": "0x78ed983323d",
    "transactions": [],
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  }
}`;

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
    paramDescription:
      "If set to true, returns the full transaction objects for all transactions in the block; if false, returns only the transaction hashes.",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "baseFeePerGas",
    type: "string",
    paramDescription:
      "Hexadecimal string of the base fee per gas. Not included for blocks before the EIP-1559 upgrade.",
  },
  {
    paramName: "difficulty",
    type: "integer",
    paramDescription: "The block's difficulty level, encoded as a hexadecimal.",
  },

  {
    paramName: "extraData",
    paramDescription: "Additional data field of the block.",
    type: "string",
  },

  {
    paramName: "gasLimit",
    paramDescription: "Maximum gas allowed in the block, in hexadecimal.",
    type: "string",
  },

  {
    paramName: "gasUsed",
    paramDescription:
      "Total gas used by all transactions in the block, in hexadecimal.",
    type: "string",
  },

  {
    paramName: "hash",
    paramDescription: "Hash of the block, null if pending.",
    type: "string",
  },

  {
    paramName: "logsBloom",
    paramDescription: "Bloom filter for the block's logs, null if pending.",
    type: "string",
  },

  {
    paramName: "miner",
    paramDescription: "Address of the block's mining reward beneficiary.",
    type: "string",
  },

  {
    paramName: "mixHash",
    paramDescription: "256-bit hash as a hexadecimal string.",
    type: "string",
  },

  {
    paramName: "nonce",
    paramDescription: "Proof-of-work hash, null if pending.",
    type: "string",
  },

  {
    paramName: "number",
    paramDescription: "Block number as a hexadecimal, null if pending.",
    type: "string",
  },

  {
    paramName: "parentHash",
    paramDescription: "Hash of the parent block.",
    type: "string",
  },

  {
    paramName: "receiptsRoot",
    paramDescription: "Root of the block's receipts trie.",
    type: "string",
  },

  {
    paramName: "sha3Uncles",
    paramDescription: "SHA3 hash of the block's uncles data.",
    type: "string",
  },

  {
    paramName: "size",
    paramDescription: "Size of the block in bytes, as a hexadecimal integer.",
    type: "string",
  },

  {
    paramName: "stateRoot",
    paramDescription: "Root of the block's final state trie.",
    type: "string",
  },

  {
    paramName: "timestamp",
    paramDescription: "UNIX timestamp of the block's collation.",
    type: "string",
  },

  {
    paramName: "totalDifficulty",
    paramDescription:
      "Total difficulty of the blockchain up to this block, in hexadecimal.",
    type: "string",
  },

  {
    paramName: "transactions",
    paramDescription:
      "List of transaction objects; refer to eth_getTransactionByHash for details.",
    type: "array",
  },

  {
    paramName: "transactionsRoot",
    paramDescription: "Root of the block's transaction trie.",
    type: "string",
  },

  {
    paramName: "uncles",
    paramDescription: "List of uncle block hashes.",
    type: "array",
  },
];

const USE_CASES = [
  "Verify transactions in a specific block",
  "Compare block details for node sync",
  "Monitor contract events for off-chain triggers",
];

const CONSTRAINTS = [
  "Response delays due to network latency",
  "Slight data discrepancies until finality",
  "Strain on resources with frequent requests",
];
