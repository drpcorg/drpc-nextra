import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_COSMOS } from "./constants";
import CosmosMethod from "../../CosmosMethod/CosmosMethod";
import {DRPC_ENDPOINT_URL} from "../ethereum/constants";

export function Cosmos_status() {
  return (
    <CosmosMethod
      method="status"
      network="Cosmos"
      cu={20}
      description={"Retrieves real-time information about the Cosmos blockchain node"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Containing comprehensive details about the node's curre"
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
      "method": "status",
      "params": [],
      "id": 1
    }'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "status",
  "params": [],
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
  "method": "status",
  "params": [],
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
		"method":  "status",
		"params":  []interface{}{},
		"id": 1
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
    "method": "status",
    "params": [],
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
        "method": "status",
        "params": [],
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
    "node_info": {
      "id": "node_id",
      "network": "cosmoshub-4",
      "version": "v0.34.13",
      "moniker": "node_name",
      "other": {
        "tx_index": "on",
        "rpc_address": "tcp://0.0.0.0:26657"
      }
    },
    "sync_info": {
      "latest_block_hash": "0x1234567890ABCDEF...",
      "latest_app_hash": "0xABCDEF1234567890...",
      "latest_block_height": "20431584",
      "latest_block_time": "2022-10-12T10:55:50.385Z",
      "catching_up": false
    },
    "validator_info": {
      "address": "cosmosvaloper1...",
      "pub_key": "PubKeyEd25519{...",
      "voting_power": "100"
    }
  },
  "id": 1
}
`;

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
    type: "object",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "node_info",
        type: "object",
        paramDescription: "Information about the node, including its protocol versions, network details, and other identifiers.",
        childrenParams: [
          {
            paramName: "protocol_version",
            type: "object",
            paramDescription: "The protocol versions used by the node for peer-to-peer communication, block processing, and application interaction.",
            childrenParams: [
              {
                paramName: "p2p",
                type: "string",
                paramDescription: "The version of the peer-to-peer protocol."
              },
              {
                paramName: "block",
                type: "string",
                paramDescription: "The version of the block processing protocol."
              },
              {
                paramName: "app",
                type: "string",
                paramDescription: "The version of the application protocol."
              }
            ]
          },
          {
            paramName: "id",
            type: "string",
            paramDescription: "The unique identifier assigned to the node."
          },
          {
            paramName: "listen_addr",
            type: "string",
            paramDescription: "The address at which the node is listening for connections."
          },
          {
            paramName: "network",
            type: "string",
            paramDescription: "The identifier of the network that the node is connected to."
          },
          {
            paramName: "version",
            type: "string",
            paramDescription: "The version of the Tendermint software the node is running."
          },
          {
            paramName: "channels",
            type: "string",
            paramDescription: "The communication channels on which the node is active."
          },
          {
            paramName: "moniker",
            type: "string",
            paramDescription: "The name or alias assigned to the node."
          },
          {
            paramName: "other",
            type: "object",
            paramDescription: "Miscellaneous information about the node, such as transaction indexing and RPC server details.",
            childrenParams: [
              {
                paramName: "tx_index",
                type: "string",
                paramDescription: "Indicates whether transaction indexing is enabled."
              },
              {
                paramName: "rpc_address",
                type: "string",
                paramDescription: "The address of the node's RPC server."
              }
            ]
          }
        ]
      },
      {
        paramName: "application_info",
        type: "object",
        paramDescription: "Information about the application running on the node, including version details.",
        childrenParams: [
          {
            paramName: "version",
            type: "string",
            paramDescription: "The version of the application running on the node."
          }
        ]
      },
      {
        paramName: "sync_info",
        type: "object",
        paramDescription: "Details about the node's synchronization status, including block heights, hashes, and sync progress.",
        childrenParams: [
          {
            paramName: "latest_block_hash",
            type: "string",
            paramDescription: "The hash of the latest block the node has processed."
          },
          {
            paramName: "latest_app_hash",
            type: "string",
            paramDescription: "The application state hash of the latest block."
          },
          {
            paramName: "latest_block_height",
            type: "string",
            paramDescription: "The height of the latest block the node has processed."
          },
          {
            paramName: "latest_block_time",
            type: "string",
            paramDescription: "The timestamp of the latest block the node has processed."
          },
          {
            paramName: "earliest_block_hash",
            type: "string",
            paramDescription: "The hash of the earliest block the node has processed."
          },
          {
            paramName: "earliest_app_hash",
            type: "string",
            paramDescription: "The application state hash of the earliest block."
          },
          {
            paramName: "earliest_block_height",
            type: "string",
            paramDescription: "The height of the earliest block the node has processed."
          },
          {
            paramName: "earliest_block_time",
            type: "string",
            paramDescription: "The timestamp of the earliest block the node has processed."
          },
          {
            paramName: "max_peer_block_height",
            type: "string",
            paramDescription: "The maximum block height observed among all peers connected to the node."
          },
          {
            paramName: "catching_up",
            type: "boolean",
            paramDescription: "Indicates whether the node is currently syncing and catching up to the latest block height."
          },
          {
            paramName: "total_synced_time",
            type: "string",
            paramDescription: "The total time the node has spent synchronizing with the blockchain."
          },
          {
            paramName: "remaining_time",
            type: "string",
            paramDescription: "The estimated remaining time to complete synchronization."
          },
          {
            paramName: "total_snapshots",
            type: "integer",
            paramDescription: "The total number of snapshots the node has processed."
          },
          {
            paramName: "chunk_process_avg_time",
            type: "string",
            paramDescription: "The average time taken to process a snapshot chunk."
          },
          {
            paramName: "snapshot_height",
            type: "string",
            paramDescription: "The block height at which the latest snapshot was taken."
          },
          {
            paramName: "snapshot_chunks_count",
            type: "integer",
            paramDescription: "The count of chunks in the current snapshot."
          },
          {
            paramName: "snapshot_chunks_total",
            type: "integer",
            paramDescription: "The total number of chunks in the snapshot."
          },
          {
            paramName: "backfilled_blocks",
            type: "integer",
            paramDescription: "The number of blocks that have been backfilled during sync."
          },
          {
            paramName: "backfill_blocks_total",
            type: "integer",
            paramDescription: "The total number of blocks that need to be backfilled."
          }
        ]
      },
      {
        paramName: "validator_info",
        type: "object",
        paramDescription: "Details about the node's role as a validator, including its address, public key, and voting power.",
        childrenParams: [
          {
            paramName: "address",
            type: "string",
            paramDescription: "The address of the node in its role as a validator."
          },
          {
            paramName: "pub_key",
            type: "object",
            paramDescription: "The public key associated with the node's validator role.",
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
            paramName: "voting_power",
            type: "string",
            paramDescription: "The voting power assigned to the validator node."
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Retrieve node status and sync information",
  "Check validator status and voting power",
  "Monitor node network and software version",
];

const CONSTRAINTS = [
  "Node status may change rapidly",
  "Network issues could delay or alter response",
  "Limited detail on synchronization progress",
];
