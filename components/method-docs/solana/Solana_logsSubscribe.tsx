import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";
import { DRPC_ENDPOINT_URL_WSCAT } from "./constants";

export function Solana_logsSubscribe() {
  return (
    <SolanaMethod
      method="logsSubscribe"
      network="solana"
      cu={20}
      description={"Allows to subscribe to updates for changes in the block"}
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
{"jsonrpc": "2.0", "id": 1, "method": "logsSubscribe", "params": [{"mentions": ["E645TckHQnDcavVv92Etc6xSWQaq8zzPtPRGBheviRAk"]}, {"commitment": "finalized"}]}
`,
  },
  {
    language: "js",
    code: () => `const WebSocket = require('ws');

const ws = new WebSocket('${DRPC_ENDPOINT_URL_WSCAT}');

ws.on('open', function open() {
  ws.send(JSON.stringify({
    "jsonrpc": "2.0",
    "id": 1,
    "method": "logsSubscribe",
    "params": [
      {
        "mentions": ["E645TckHQnDcavVv92Etc6xSWQaq8zzPtPRGBheviRAk"]
      },
      {
        "commitment": "finalized"
      }
    ]
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
        "jsonrpc": "2.0",
        "id": 1,
        "method": "logsSubscribe",
        "params": [
            {
                "mentions": ["E645TckHQnDcavVv92Etc6xSWQaq8zzPtPRGBheviRAk"]
            },
            {
                "commitment": "finalized"
            }
        ]
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
    "jsonrpc": "2.0",
    "id": 1,
    "method": "logsSubscribe",
    "params": [
      {
        "mentions": ["E645TckHQnDcavVv92Etc6xSWQaq8zzPtPRGBheviRAk"]
      },
      {
        "commitment": "finalized"
      }
    ]
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
		"jsonrpc": "2.0",
		"id": 1,
		"method": "logsSubscribe",
		"params": []interface{}{
			map[string]interface{}{
				"mentions": []string{"E645TckHQnDcavVv92Etc6xSWQaq8zzPtPRGBheviRAk"},
			},
			map[string]interface{}{
				"commitment": "finalized",
			},
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
        "jsonrpc": "2.0",
        "id": 1,
        "method": "logsSubscribe",
        "params": [
            {
                "mentions": ["E645TckHQnDcavVv92Etc6xSWQaq8zzPtPRGBheviRAk"]
            },
            {
                "commitment": "finalized"
            }
        ]
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
    paramName: "filters",
    type: "object",
    paramDescription: "Specifies the criteria for receiving log results based on the type of transaction or account involved. Only one filter can be applied per method call.",
    childrenParams: [
      {
        paramName: "all",
        type: "string",
        paramDescription: "Subscribes to all transactions except for simple vote transactions."
      },
      {
        paramName: "allWithVotes",
        type: "string",
        paramDescription: "Subscribes to all transactions, including simple vote transactions."
      },
      {
        paramName: "mentions",
        type: "object",
        paramDescription: "An object allowing subscription to all transactions that mention a specific public key. The 'mentions' field supports only one public key (encoded as a base-58 string) per method call. Listing additional addresses will result in an error.",
        childrenParams: [
          {
            paramName: "Pubkey",
            type: "string",
            paramDescription: "The public key of the account to monitor, encoded as a base-58 string."
          }
        ]
      }
    ]
  },
  {
    paramName: "encoding",
    type: "string",
    paramDescription: "Specifies the format for the returned account data. The available options are 'base58', 'base64', 'base64+zstd', and 'jsonParsed'.",
    paramEnum: [
      {
        value: "base58",
        description: "This format is slower and is typically used for small amounts of data."
      },
      {
        value: "base64",
        description: "A more common encoding format that is faster and suitable for larger amounts of data."
      },
      {
        value: "base64+zstd",
        description: "Base64 encoding with Zstandard compression for efficiency."
      },
      {
        value: "jsonParsed",
        description: "Returns the data in a parsed JSON format, useful for human-readable output."
      }
    ]
  },
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
        paramName: "logs",
        type: "object",
        paramDescription: "The object containing the logs data emitted by transactions that match the subscription criteria.",
        childrenParams: [
          {
            paramName: "signature",
            type: "string",
            paramDescription: "The transaction signature associated with the logs."
          },
          {
            paramName: "logs",
            type: "array",
            paramDescription: "An array of log messages emitted by the transaction."
          },
          {
            paramName: "err",
            type: "object",
            paramDescription: "Error if transaction failed, null if transaction succeeded"
          }
        ]
      }
    ]
  }
];

const USE_CASES = [
  "Subscribe to specific log events for an account",
  "Monitor on-chain events related to a particular address",
  "Receive real-time notifications of account activities",
];

const CONSTRAINTS = [
  "Requires WebSocket connection to remain active",
  "Potential delays in receiving real-time updates",
  "Subscription may be terminated if not maintained",
];
