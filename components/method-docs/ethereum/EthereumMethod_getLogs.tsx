import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParam } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";

const DRPC_API_URL = "https://eth.drpc.org";

export function EthereumMethod_getLogs() {
  return (
    <EthereumMethod
      method="getLogs"
      network="ethereum"
      cu={20}
      description={
        "Returns an array of all logs matching a given filter object"
      }
      useCases={[
        "monitoring smart contract events",
        "tracking token transfers",
        "analyzing blockchain data",
      ]}
      constraints={[
        "A maximuim of 5,000 parameters in a single request",
        "A maximum of 10,000 results can be returned by a single query",
        "Query duration must not exceed 10 seconds",
      ]}
      codeSnippets={CODE_SNIPPETS}
      requestParamsType="array_of_objects"
      requestParams={REQUEST_PARAMS}
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns array of log objects, or an empty array if nothing has changed since last poll."
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: `# Replace with your Alchemy API key
apiKey="demo"
# Query the blockchain (replace example parameters)
curl https://eth-mainnet.alchemyapi.io/v2/$apiKey \
-X POST \
-H "Content-Type: application/json" \
--data '{
"jsonrpc":"2.0",
"method":"eth_getLogs",
"params":[{
"fromBlock": "0x1000000",
"toBlock": "0x1000100",
"address": "0x6C8f2A1"
}],
"id":1
}'
`,
  },
  {
    language: "js",
    code: `// Request headers
const headers = new Headers();
headers.append("Content-Type", "application/json");

// Request body
const method = "eth_getLogs";

const body = JSON.stringify({ 
  method,
  id: 1,
  jsonrpc: "2.0",
  params: [{
    fromBlock: "0x1000000",
    toBlock: "0x1000100",
    address: "0x6C8f2A1"
  }]
});

fetch("${DRPC_API_URL}", { method: 'POST', headers, body })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
`,
  },
  {
    language: "node",
    code: `import fetch from 'node-fetch';
// Request headers
const headers = new Headers();
headers.append("Content-Type", "application/json");

// Request body
const method = "eth_getLogs";

const body = JSON.stringify({ 
  method,
  id: 1,
  jsonrpc: "2.0",
  params: [{
    fromBlock: "0x1000000",
    toBlock: "0x1000100",
    address: "0x6C8f2A1"
  }]
});

fetch("${DRPC_API_URL}", { method: 'POST', headers, body })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
`,
  },
  {
    language: "go",
    code: `package main
import (
"fmt"
"github.com/ethereum/go-ethereum"
"github.com/ethereum/go-ethereum/common"
"github.com/ethereum/go-ethereum/rpc"
)
func main() {
// Replace with your Alchemy API key
apiKey := "demo"
// Initialize a Web3.go instance
client, err := rpc.Dial("https://eth-mainnet.alchemyapi.io/v2/"+apiKey)
if err != nil {
fmt.Println(err)
}
// Query the blockchain (replace example parameters)
var logs []ethereum.Log
err = client.Call(&logs, "eth_getLogs", ethereum.FilterQuery{
FromBlock: "0x1000000",
ToBlock: "0x1000100",
Addresses: []common.Address{common.HexToAddress("0x6C8f2A1")},
})
if err != nil {
fmt.Println(err)
}
// Print the output to console
fmt.Println(logs)
}
`,
  },
  {
    language: "python",
    code: `# Installation Instructions: https://web3py.readthedocs.io/en/latest/quickstart.html#installation
from web3 import Web3, HTTPProvider
#Replace with your Alchemy API key:
apiKey = "demo"
# Initialize a Web3.py instance
web3 = Web3(Web3.HTTPProvider('https://eth-mainnet.g.alchemy.com/v2 /'+apiKey))
# Query the blockchain (replace example parameters)
logs = web3.eth.get_logs({
'fromBlock': 1000000, 
'toBlock': 1000100, 
'address': '0x6C8f2A1'
})
# Print the output to console
`,
  },
  {
    language: "rust",
    code: `// Installation Instructions:
// cargo add web3
// cargo add
use web3::transports::Http;
use web3::Web3;
// Replace with your Alchemy API key
let http = Http::new("https://eth-mainnet.alchemyapi.io/v2/demo").unwrap();
let web3 = Web3::new(http);
// Query the blockchain (replace example parameters)
let logs = web3.eth().get_logs(
Filter {
from_block: BlockNumber::Number(1000000.into()),
to_block: BlockNumber::Number(1000100.into()),
address: Some(vec!["0x6C8f2A1".parse().unwrap()]),
topics: None,
}).await.unwrap();
// Print the output to console
println!("{:?}", logs);
`,
  },
];

const REQUEST_PARAMS: RequestParam[] = [
  {
    paramName: "blockHash",
    type: "string",
    paramDescription:
      "The block hash to filter logs from. If this parameter is present, then the fromBlock and toBlock parameters are ignored.",
  },
  {
    paramName: "address",
    type: "string",
    paramDescription:
      "Contract address or a list of addresses from which logs should originate.",
  },
  {
    paramName: "fromBlock",
    type: "string",
  },
  {
    paramName: "toBlock",
    type: "string",
    paramDescription: "The block number or block hash to search up to",
    paramEnum: [
      {
        value: "latest",
        isDefault: true,
        description: "the blockchain's most recent block",
      },
      {
        value: "safe",
        description: "a block validated by the beacon chain",
      },
      {
        value: "finalized",
        description: "a block confirmed by over two-thirds of validators",
      },
      {
        value: "earliest",
        description: "the first or genesis block",
      },
      {
        value: "pending",
        description: "transactions broadcasted but not yet included in a block",
      },
    ],
  },
  {
    paramName: "topics",
    type: "array",
    paramDescription:
      "Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options.",
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "address": "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907",
      "blockHash": "0x8243343df08b9751f5ca0c5f8c9c0460d8a9b6351066fae0acbd4d3e776de8bb",
      "blockNumber": "0x429d3b",
      "data": "0x000000000000000000000000000000000000000000000000000000012a05f200",
      "logIndex": "0x56",
      "removed": false,
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
        "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078"
      ],
      "transactionHash": "0xab059a62e22e230fe0f56d8555340a29b2e9532360368f810595453f6fdd213b",
      "transactionIndex": "0xac"
    }
  ]
}`;

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
    childrenParams: [
      {
        paramName: "blockHash",
        type: "string",
        paramDescription:
          "32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription:
          "The block number where this log was in. null when its pending. null when its pending log.",
      },
      {
        paramName: "transactionIndex",
        type: "string",
        paramDescription:
          "Integer of the transactions index position log was created from. null when its pending log.",
      },
      {
        paramName: "address",
        type: "string",
        paramDescription: "20 Bytes - address from which this log originated.",
      },
      {
        paramName: "logIndex",
        type: "string",
        paramDescription:
          "Integer of the log index position in the block. null when its pending log.",
      },
      {
        paramName: "data",
        type: "string",
        paramDescription:
          "Contains one or more 32 Bytes non-indexed arguments of the log.",
      },
      {
        paramName: "removed",
        type: "boolean",
        paramDescription:
          "true when the log was removed, due to a chain reorganization. false if its a valid log.",
      },
      {
        paramName: "topics",
        type: "array_of_strings",
        paramDescription:
          "Array of zero to four 32 Bytes DATA of indexed log arguments. In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declare the event with the anonymous specifier.",
      },
      {
        paramName: "transactionHash",
        type: "string",
        paramDescription:
          "Hash of the transactions this log was created from. null when its pending log.",
      },
    ],
    childrenParamsType: "object",
  },
];
