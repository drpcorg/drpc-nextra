import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";
import { DRPC_ENDPOINT_URL_WSCAT } from "./constants";

export function Solana_signatureSubscribe() {
  return (
    <SolanaMethod
      method="signatureSubscribe"
      network="solana"
      cu={10}
      description={"Allows to subscribe to real-time updates for specific transaction signature"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns by the subscription, including the subscription ID and log data"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `wscat -c ${DRPC_ENDPOINT_URL_WSCAT} \\
# wait for connection
{"id":1,"jsonrpc":"2.0","method":"signatureSubscribe","params":["51y9Hf2cFzrUPDH24qvL6b6PtPMDGQSX3WwiHsSvkdfGiFTKdoJwGkvqS3gny6XNPLtUtRwGERAs45639EfR5XfT"]}
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
    "method": "signatureSubscribe",
    "params": ["51y9Hf2cFzrUPDH24qvL6b6PtPMDGQSX3WwiHsSvkdfGiFTKdoJwGkvqS3gny6XNPLtUtRwGERAs45639EfR5XfT"]
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
    language: "node",
    code: () => `const WebSocket = require('ws');

const ws = new WebSocket('${DRPC_ENDPOINT_URL_WSCAT}');

ws.on('open', function open() {
  ws.send(JSON.stringify({
    "id": 1,
    "jsonrpc": "2.0",
    "method": "signatureSubscribe",
    "params": ["51y9Hf2cFzrUPDH24qvL6b6PtPMDGQSX3WwiHsSvkdfGiFTKdoJwGkvqS3gny6XNPLtUtRwGERAs45639EfR5XfT"]
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
        "method": "signatureSubscribe",
        "params": ["51y9Hf2cFzrUPDH24qvL6b6PtPMDGQSX3WwiHsSvkdfGiFTKdoJwGkvqS3gny6XNPLtUtRwGERAs45639EfR5XfT"]
    }))

ws = websocket.WebSocketApp("${DRPC_ENDPOINT_URL_WSCAT}",
                            on_message=on_message,
                            on_error=on_error,
                            on_open=on_open)

ws.run_forever()
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
		"method": "signatureSubscribe",
		"params": []interface{}{
			"51y9Hf2cFzrUPDH24qvL6b6PtPMDGQSX3WwiHsSvkdfGiFTKdoJwGkvqS3gny6XNPLtUtRwGERAs45639EfR5XfT"
		},
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
        "method": "signatureSubscribe",
        "params": ["51y9Hf2cFzrUPDH24qvL6b6PtPMDGQSX3WwiHsSvkdfGiFTKdoJwGkvqS3gny6XNPLtUtRwGERAs45639EfR5XfT"]
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
    paramName: "commitment",
    type: "string",
    paramDescription: "Defines the level of assurance required for the data returned by the query.",
    paramEnum: [
      {
        value: "finalized",
        description: "The query returns the most recent block confirmed by the supermajority of the cluster as having reached maximum lockout, meaning the cluster has recognized this block as finalized."
      },
      {
        value: "confirmed",
        description: "The query returns the most recent block that has been voted on by the supermajority of the cluster."
      },
      {
        value: "processed",
        description: "The query returns its most recent block, though the block may not be complete."
      }
    ]
  },
  {
    paramName: "tx_sig",
    type: "string",
    paramDescription: "The transaction signature as base-58 encoded string",
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
    type: "object",
  }
];

const USE_CASES = [
  "Subscribe to specific transaction signature notifications",
  "Monitor a transaction status in real-time",
  "Receive updates for specific transaction signatures",
];

const CONSTRAINTS = [
  "Requires valid signature and active connection",
  "Subscription may terminate unexpectedly",
  "Possible delays in receiving real-time updates",
];
