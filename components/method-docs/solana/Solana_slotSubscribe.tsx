import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";
import { DRPC_ENDPOINT_URL_WSCAT } from "./constants";

export function Solana_slotSubscribe() {
  return (
    <SolanaMethod
      method="slotSubscribe"
      network="solana"
      cu={20}
      description={"Allows to subscribe to real-time updates for specific slot numbers"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The result object returned by the subscription, including the subscription ID and real-time slot information updates"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `wscat -c ${DRPC_ENDPOINT_URL_WSCAT} \\
# wait for connection
{"id":1,"jsonrpc":"2.0","method":"slotSubscribe"}
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
    "method": "slotSubscribe"
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
    "method": "slotSubscribe"
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
        "method": "slotSubscribe"
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
		"method": "slotSubscribe",
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
        "method": "slotSubscribe"
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
        paramName: "subscription",
        type: "integer",
        paramDescription: "The subscription ID that uniquely identifies the slot subscription."
      },
      {
        paramName: "result",
        type: "object",
        paramDescription: "An object containing real-time updates about slots as they are processed by the node.",
        childrenParams: [
          {
            paramName: "parent",
            type: "integer",
            paramDescription: "The parent slot of the current slot being processed."
          },
          {
            paramName: "root",
            type: "integer",
            paramDescription: "The root slot, which is the highest confirmed slot known by the node."
          },
          {
            paramName: "slot",
            type: "integer",
            paramDescription: "The current slot being processed by the node."
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Subscribe to real-time slot updates",
  "Monitor new slots as they are processed",
  "Receive continuous slot information for tracking",
];

const CONSTRAINTS = [
  "Requires an active WebSocket connection",
  "Unsubscription needed to avoid unnecessary data flow",
  "Network instability may affect real-time updates",
];
