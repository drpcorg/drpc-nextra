import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";
import { DRPC_ENDPOINT_URL_WSCAT } from "./constants";

export function Solana_blockSubscribe() {
  return (
    <SolanaMethod
      method="blockSubscribe"
      network="solana"
      cu={10}
      description={"Allows to subscribe to updates for changes in the block of the blockchain"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The result object returned by the subscription"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `wscat -c ${DRPC_ENDPOINT_URL_WSCAT} \\
# wait for connection
{"id":1,"jsonrpc":"2.0","method":"blockSubscribe","params":["all"]}
`,
  },
  {
    language: "js",
    code: () => `const WebSocket = require('ws');

const ws = new WebSocket('${DRPC_ENDPOINT_URL_WSCAT}');

ws.on('open', function open() {
  ws.send(JSON.stringify({
    "id": 1,
    "jsonrpc": "2.0",
    "method": "blockSubscribe",
    "params": ["all"]
  }));
});

ws.on('message', function incoming(data) {
  console.log(data);
});

ws.on('error', function error(error) {
  console.error('WebSocket error:', error);
});
`,
  },
  {
    language: "python",
    code: () => `import websocket
import json

def on_message(ws, message):
    print(message)

def on_error(ws, error):
    print("WebSocket error:", error)

def on_open(ws):
    ws.send(json.dumps({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "blockSubscribe",
        "params": ["all"]
    }))

ws = websocket.WebSocketApp("${DRPC_ENDPOINT_URL_WSCAT}",
                            on_message=on_message,
                            on_error=on_error,
                            on_open=on_open)

ws.run_forever()
`,
  },
  {
    language: "node",
    code: () => `const WebSocket = require('ws');

const ws = new WebSocket('${DRPC_ENDPOINT_URL_WSCAT}');

ws.on('open', function open() {
  ws.send(JSON.stringify({
    "id": 1,
    "jsonrpc": "2.0",
    "method": "blockSubscribe",
    "params": ["all"]
  }));
});

ws.on('message', function incoming(data) {
  console.log(data);
});

ws.on('error', function error(error) {
  console.error('WebSocket error:', error);
});
`,
  },
  {
    language: "go",
    code: () => `package main

import (
	"log"
	"github.com/gorilla/websocket"
	"encoding/json"
)

func main() {
	url := "${DRPC_ENDPOINT_URL_WSCAT}"
	ws, _, err := websocket.DefaultDialer.Dial(url, nil)
	if err != nil {
		log.Fatal("WebSocket connection error:", err)
	}
	defer ws.Close()

	request := map[string]interface{}{
		"id": 1,
		"jsonrpc": "2.0",
		"method": "blockSubscribe",
		"params": []interface{}{"all"},
	}

	if err := ws.WriteJSON(request); err != nil {
		log.Fatal("Error sending request:", err)
	}

	for {
		_, message, err := ws.ReadMessage()
		if err != nil {
			log.Fatal("Error reading message:", err)
		}
		log.Printf("Received: %s", message)
	}
}
`,
  },
  {
    language: "rust",
    code: () => `use tokio_tungstenite::connect_async;
use tungstenite::protocol::Message;
use url::Url;
use serde_json::json;

#[tokio::main]
async fn main() {
    let url = "${DRPC_ENDPOINT_URL_WSCAT}";
    let (ws_stream, _) = connect_async(Url::parse(url).unwrap()).await.expect("Failed to connect");
    let (mut write, mut read) = ws_stream.split();

    let subscribe_request = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "blockSubscribe",
        "params": ["all"]
    });

    write.send(Message::Text(subscribe_request.to_string())).await.expect("Failed to send message");

    while let Some(msg) = read.next().await {
        match msg {
            Ok(message) => println!("Received: {:?}", message),
            Err(e) => println!("Error receiving message: {:?}", e),
        }
    }
}
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "subscription_id"
}
`;

const REQUEST_PARAMS: RequestParamProp = [
    {
  paramName: "filter",
  type: "string",
  paramDescription: "Defines the criteria for filtering logs based on account type. This determines which transactions in a block will trigger notifications.",
  childrenParams: [
    {
      paramName: "string",
      type: "string",
      paramDescription: "If set to 'all', the subscription will include all transactions in a block."
    },
    {
      paramName: "object",
      type: "object",
      paramDescription: "A JSON object used to filter transactions based on whether they reference a specific public key.",
      childrenParams: [
        {
          paramName: "mentionsAccountOrProgram",
          type: "string",
          paramDescription: "Retrieves only transactions that reference the specified public key (encoded as a base-58 string). If a block contains no such references, no notifications will be generated."
        }
      ]
    }
  ]
},
{
  paramName: "commitment",
  type: "string",
  paramDescription: "Specifies the level of finality required for the block data returned by the subscription. Options include 'finalized', 'confirmed', and 'processed'.",
  paramEnum: [
    {
      value: "finalized",
      description: "The subscription will return blocks confirmed by the supermajority of the cluster and recognized as finalized."
    },
    {
      value: "confirmed",
      description: "The subscription will return blocks that have been voted on by the supermajority of the cluster but may not yet be finalized."
    },
    {
      value: "processed",
      description: "The subscription will return the most recent block processed by the node, which may not be finalized or confirmed."
    }
  ]
},
{
  paramName: "transactionDetails",
  type: "string",
  paramDescription: "Specifies the level of detail to include for transactions within the block. Options include 'full' (complete transaction data), 'signatures' (only transaction signatures), or 'none' (no transaction details)."
},
{
  paramName: "showRewards",
  type: "boolean",
  paramDescription: "Indicates whether to include the 'rewards' array in the block data, detailing any rewards distributed as part of the block."
},
{
  paramName: "encoding",
  type: "string",
  paramDescription: "Specifies the encoding format for the block data returned by the subscription. Options include 'base58', 'base64', 'base64+zstd', and 'jsonParsed'.",
  paramEnum: [
    {
      value: "base58",
      description: "Returns data in base58 encoding, typically used for smaller datasets."
    },
    {
      value: "base64",
      description: "Returns data in base64 encoding, suitable for larger datasets."
    },
    {
      value: "base64+zstd",
      description: "Returns data in base64 encoding with Zstandard compression for efficiency."
    },
    {
      value: "jsonParsed",
      description: "Returns data in a parsed JSON format, useful for human-readable output."
    }
  ]
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
      childrenParams: [
        {
          paramName: "block",
          type: "object",
          paramDescription: "The block data including all transactions, signatures, and metadata associated with the block."
        },
        {
          paramName: "slot",
          type: "integer",
          paramDescription: "The corresponding slot"
        },
        {
          paramName: "err",
          type: "object",
          paramDescription: "Error if something went wrong publishing the notification otherwise null"
        }
      ]
    }
];

const USE_CASES = [
  "Subscribe to real-time block updates",
  "Monitor all block data as it's processed",
  "Receive notifications for each new block",
];

const CONSTRAINTS = [
  "Requires stable WebSocket connection for data flow",
  "High data flow could impact performance",
  "Unsubscription needed to stop receiving block updates",
];
