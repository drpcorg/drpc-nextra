import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_simulateTransaction() {
  return (
    <SolanaMethod
      method="simulateTransaction"
      network="solana"
      cu={11}
      description={"Simulates the execution of a transaction without submitting it to the network"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The simulation result, including details such as the status, logs, and any errors encountered during the simulation"
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --location --request POST '${DRPC_ENDPOINT_URL}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "method": "simulateTransaction",
    "jsonrpc": "2.0",
    "params": [
        "AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCAgiFt0xk+FyHf76k7/dkz9vjFqSY8vhrizSEx2GWidkQ5ewAKY7OUUt6ZEIryxOHEx1w1mGioe0SGujvGtbbPvaSDCG6EGTb0+Q1B98oAxfD0GiOZwOLQW1IkeOC71yX0NQm+LOK6+h53IwvrgMD9JNZme6u7PeARqlqZzOD4iRLRnyGE+3cPqKW5IiU66yIZZOgOtO4B9TYReBdaWsp+Dx5lyxj0FXRm/6oiIDpU9abZ6qIYeIKRR96fuhXeHpmjwUMJxNk9vhCZs3zhxL/0CZLdm0EbWEwrD4A7KBrPOYP2gbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCph9Yfdu8NCN6d9KtOQeMPovh7jKgKo56yxXQO8eTA6XUBBgcAAgEDBQQH4gMobmZ0X2FjY291bnQ6ICI5enlMTjVDUXd4V3JFUGl0MXNGeTVEWjV4TXFKZk5RVExpcUJWU2Z2UHZXWSIsCiAgICBkYXRhX2FjY291bnQ6ICIzZDhTcG5abnRtR0t0dlVtaHVhazdLU3U2WFQ3QVVNaW51VURtYTVobWlCWCIsCiAgICBjb2luX3NyY19hY2N0OiAiQkI3cGN0UGVWQ1FQalhNR2RrRFg5QURUOTk1Z1hDVkx5SEpVeWdwSlBOMngiLAogICAgY29pbl9kZXN0X2FjY3Q6ICI5UDY4a2J2VzlLelBIc1pURnE0eVFyUlZrWXNmNUNRRmc5aFZoeUJaZHBQMiIsCiAgICB0cmFuc2Zlcl9hdXRob3JpdHk6ICJwTWludFRaNUNFa0hVaGdydXJQZ29pTW50b0xnRndic0tkYnFOclhzcmR5IiwKICAgIGFjdGl2aXR5OiAxLCAKICAgIHBheV9wZXJpb2Q6IDYwNDgwMC4wMDAwMDAsIAogICAgcGF5X3JhdGU6IDguMDAwMDAwLAogICAgdGltZXN0YW1wOiAxNjU1MTg0ODYwLAogICAgbXVsdGlwbGllcjogMS4wLAogICAgbWF4X3BheW91dDogMTYuMDAwMDAwKQ==",
        {
            "encoding": "base64",
            "commitment": "recent",
            "sigVerify": false,
            "accounts": {
                "addresses": [
                    "9zyLN5CQwxWrEPit1sFy5DZ5xMqJfNQTLiqBVSfvPvWY",
                    "GtFMtrW31RdCeSdW4ot3jNVuoLtFywJGGTiF1Q8Uopky",
                    "pMintTZ5CEkHUhgrurPgoiMntoLgFwbsKdbqNrXsrdy",
                    "3d8SpnZntmGKtvUmhuak7KSu6XT7AUMinuUDma5hmiBX",
                    "9P68kbvW9KzPHsZTFq4yQrRVkYsf5CQFg9hVhyBZdpP2",
                    "BB7pctPeVCQPjXMGdkDX9ADT995gXCVLyHJUygpJPN2x",
                    "pSTAkE7Z2guBmSheg6tHdHk3rT1wmF1Mfuf52tnWeAd",
                    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                ]
            }
        }
    ],
    "id": "ea57afc0-7db8-4aa3-8ddb-a28c6099153c"
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "simulateTransaction",
  "params": [
    "AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCAgiFt0xk+FyHf76k7/dkz9vjFqSY8vhrizSEx2GWidkQ5ewAKY7OUUt6ZEIryxOHEx1w1mGioe0SGujvGtbbPvaSDCG6EGTb0+Q1B98oAxfD0GiOZwOLQW1IkeOC71yX0NQm+LOK6+h53IwvrgMD9JNZme6u7PeARqlqZzOD4iRLRnyGE+3cPqKW5IiU66yIZZOgOtO4B9TYReBdaWsp+Dx5lyxj0FXRm/6oiIDpU9abZ6qIYeIKRR96fuhXeHpmjwUMJxNk9vhCZs3zhxL/0CZLdm0EbWEwrD4A7KBrPOYP2gbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCph9Yfdu8NCN6d9KtOQeMPovh7jKgKo56yxXQO8eTA6XUBBgcAAgEDBQQH4gMobmZ0X2FjY291bnQ6ICI5enlMTjVDUXd4V3JFUGl0MXNGeTVEWjV4TXFKZk5RVExpcUJWU2Z2UHZXWSIsCiAgICBkYXRhX2FjY291bnQ6ICIzZDhTcG5abnRtR0t0dlVtaHVhazdLU3U2WFQ3QVVNaW51VURtYTVobWlCWCIsCiAgICBjb2luX3NyY19hY2N0OiAiQkI3cGN0UGVWQ1FQalhNR2RrRFg5QURUOTk1Z1hDVkx5SEpVeWdwSlBOMngiLAogICAgY29pbl9kZXN0X2FjY3Q6ICI5UDY4a2J2VzlLelBIc1pURnE0eVFyUlZrWXNmNUNRRmc5aFZoeUJaZHBQMiIsCiAgICB0cmFuc2Zlcl9hdXRob3JpdHk6ICJwTWludFRaNUNFa0hVaGdydXJQZ29pTW50b0xnRndic0tkYnFOclhzcmR5IiwKICAgIGFjdGl2aXR5OiAxLCAKICAgIHBheV9wZXJpb2Q6IDYwNDgwMC4wMDAwMDAsIAogICAgcGF5X3JhdGU6IDguMDAwMDAwLAogICAgdGltZXN0YW1wOiAxNjU1MTg0ODYwLAogICAgbXVsdGlwbGllcjogMS4wLAogICAgbWF4X3BheW91dDogMTYuMDAwMDAwKQ==",
    {
      "encoding": "base64",
      "commitment": "recent",
      "sigVerify": false,
      "accounts": {
        "addresses": [
          "9zyLN5CQwxWrEPit1sFy5DZ5xMqJfNQTLiqBVSfvPvWY",
          "GtFMtrW31RdCeSdW4ot3jNVuoLtFywJGGTiF1Q8Uopky",
          "pMintTZ5CEkHUhgrurPgoiMntoLgFwbsKdbqNrXsrdy",
          "3d8SpnZntmGKtvUmhuak7KSu6XT7AUMinuUDma5hmiBX",
          "9P68kbvW9KzPHsZTFq4yQrRVkYsf5CQFg9hVhyBZdpP2",
          "BB7pctPeVCQPjXMGdkDX9ADT995gXCVLyHJUygpJPN2x",
          "pSTAkE7Z2guBmSheg6tHdHk3rT1wmF1Mfuf52tnWeAd",
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623
`,
  },
  {
    language: "node",
    code: () => `const https = require('https');

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "simulateTransaction",
  "params": [
    "AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCAgiFt0xk+FyHf76k7/dkz9vjFqSY8vhrizSEx2GWidkQ5ewAKY7OUUt6ZEIryxOHEx1w1mGioe0SGujvGtbbPvaSDCG6EGTb0+Q1B98oAxfD0GiOZwOLQW1IkeOC71yX0NQm+LOK6+h53IwvrgMD9JNZme6u7PeARqlqZzOD4iRLRnyGE+3cPqKW5IiU66yIZZOgOtO4B9TYReBdaWsp+Dx5lyxj0FXRm/6oiIDpU9abZ6qIYeIKRR96fuhXeHpmjwUMJxNk9vhCZs3zhxL/0CZLdm0EbWEwrD4A7KBrPOYP2gbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCph9Yfdu8NCN6d9KtOQeMPovh7jKgKo56yxXQO8eTA6XUBBgcAAgEDBQQH4gMobmZ0X2FjY291bnQ6ICI5enlMTjVDUXd4V3JFUGl0MXNGeTVEWjV4TXFKZk5RVExpcUJWU2Z2UHZXWSIsCiAgICBkYXRhX2FjY291bnQ6ICIzZDhTcG5abnRtR0t0dlVtaHVhazdLU3U2WFQ3QVVNaW51VURtYTVobWlCWCIsCiAgICBjb2luX3NyY19hY2N0OiAiQkI3cGN0UGVWQ1FQalhNR2RrRFg5QURUOTk1Z1hDVkx5SEpVeWdwSlBOMngiLAogICAgY29pbl9kZXN0X2FjY3Q6ICI5UDY4a2J2VzlLelBIc1pURnE0eVFyUlZrWXNmNUNRRmc5aFZoeUJaZHBQMiIsCiAgICB0cmFuc2Zlcl9hdXRob3JpdHk6ICJwTWludFRaNUNFa0hVaGdydXJQZ29pTW50b0xnRndic0tkYnFOclhzcmR5IiwKICAgIGFjdGl2aXR5OiAxLCAKICAgIHBheV9wZXJpb2Q6IDYwNDgwMC4wMDAwMDAsIAogICAgcGF5X3JhdGU6IDguMDAwMDAwLAogICAgdGltZXN0YW1wOiAxNjU1MTg0ODYwLAogICAgbXVsdGlwbGllcjogMS4wLAogICAgbWF4X3BheW91dDogMTYuMDAwMDAwKQ==",
    {
      "encoding": "base64",
      "commitment": "recent",
      "sigVerify": false,
      "accounts": {
        "addresses": [
          "9zyLN5CQwxWrEPit1sFy5DZ5xMqJfNQTLiqBVSfvPvWY",
          "GtFMtr### JavaScript (using fetch)

\`\`\`javascript
const url = '${DRPC_ENDPOINT_URL}';

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "simulateTransaction",
  "params": [
    "AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCAgiFt0xk+FyHf76k7/dkz9vjFqSY8vhrizSEx2GWidkQ5ewAKY7OUUt6ZEIryxOHEx1w1mGioe0SGujvGtbbPvaSDCG6EGTb0+Q1B98oAxfD0GiOZwOLQW1IkeOC71yX0NQm+LOK6+h53IwvrgMD9JNZme6u7PeARqlqZzOD4iRLRnyGE+3cPqKW5IiU66yIZZOgOtO4B9TYReBdaWsp+Dx5lyxj0FXRm/6oiIDpU9abZ6qIYeIKRR96fuhXeHpmjwUMJxNk9vhCZs3zhxL/0CZLdm0EbWEwrD4A7KBrPOYP2gbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCph9Yfdu8NCN6d9KtOQeMPovh7jKgKo56yxXQO8eTA6XUBBgcAAgEDBQQH4gMobmZ0X2FjY291bnQ6ICI5enlMTjVDUXd4V3JFUGl0MXNGeTVEWjV4TXFKZk5RVExpcUJWU2Z2UHZXWSIsCiAgICBkYXRhX2FjY291bnQ6ICIzZDhTcG5abnRtR0t0dlVtaHVhazdLU3U2WFQ3QVVNaW51VURtYTVobWlCWCIsCiAgICBjb2luX3NyY19hY2N0OiAiQkI3cGN0UGVWQ1FQalhNR2RrRFg5QURUOTk1Z1hDVkx5SEpVeWdwSlBOMngiLAogICAgY29pbl9kZXN0X2FjY3Q6ICI5UDY4a2J2VzlLelBIc1pURnE0eVFyUlZrWXNmNUNRRmc5aFZoeUJaZHBQMiIsCiAgICB0cmFuc2Zlcl9hdXRob3JpdHk6ICJwTWludFRaNUNFa0hVaGdydXJQZ29pTW50b0xnRndic0tkYnFOclhzcmR5IiwKICAgIGFjdGl2aXR5OiAxLCAKICAgIHBheV9wZXJpb2Q6IDYwNDgwMC4wMDAwMDAsIAogICAgcGF5X3JhdGU6IDguMDAwMDAwLAogICAgdGltZXN0YW1wOiAxNjU1MTg0ODYwLAogICAgbXVsdGlwbGllcjogMS4wLAogICAgbWF4X3BheW91dDogMTYuMDAwMDAwKQ==",
    {
      "encoding": "base64",
      "commitment": "recent",
      "sigVerify": false,
      "accounts": {
        "addresses": [
          "9zyLN5CQwxWrEPit1sFy5DZ5xMqJfNQTLiqBVSfvPvWY",
          "GtFMtrW31RdCeSdW4ot3jNVuoLtFywJGGTiF1Q8Uopky",
          "pMintTZ5CEkHUhgrurPgoiMntoLgFwbsKdbqNrXsrdy",
          "3d8SpnZntmGKtvUmhuak7KSu6XT7AUMinuUDma5hmiBX",
          "9P68kbvW9KzPHsZTFq4yQrRVkYsf5CQFg9hVhyBZdpP2",
          "BB7pctPeVCQPjXMGdkDX9ADT995gXCVLyHJUygpJPN2x",
          "pSTAkE7Z2guBmSheg6tHdHk3rT1wmF1Mfuf52tnWeAd",
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        ]
      }
    }
  ],
  "id": "ea57afc0-7db8-4aa3-8ddb-a28c6099153c"
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
		"id":      1,
		"jsonrpc": "2.0",
		"method":  "simulateTransaction",
		"params": []interface{}{
			"base64-encoded-transaction", // Replace with actual base64 encoded transaction
			map[string]interface{}{
				"sigVerify": true,
				"commitment": "finalized",
			},
		},
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
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

data = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "simulateTransaction",
    "params": [
        "base64-encoded-transaction", # Replace with actual base64 encoded transaction
        {
            "sigVerify": True,
            "commitment": "finalized"
        }
    ]
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
        "id": 1,
        "jsonrpc": "2.0",
        "method": "simulateTransaction",
        "params": [
            "base64-encoded-transaction", // Replace with actual base64 encoded transaction
            {
                "sigVerify": true,
                "commitment": "finalized"
            }
        ]
    });

    let response = client.post(url)
        .json(&request_body)
        .send()
        .await?;

    let response_text = response.text().await?;
    println!("{}", response_text);

    Ok(())
}
    `
},
];

const RESPONSE_JSON = `{
    "jsonrpc": "2.0",
    "result": {
        "context": {
            "slot": 137569919
        },
        "value": {
            "accounts": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
            "err": "BlockhashNotFound",
            "logs": [],
            "unitsConsumed": 0
        }
    },
    "id": "ea57afc0-7db8-4aa3-8ddb-a28c6099153c"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transaction",
    type: "string",
    paramDescription:
      "The transaction as an encoded string. It must have a valid blockhash but does not need to be signed.",
  },
  {
    paramName: "config",
    type: "object",
    paramDescription: " Configuration options for the simulation",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "sigVerify",
        type: "boolean",
        paramDescription: " If true, the transaction signatures will be verified (default: false). This conflicts with replaceRecentBlockhash.",
      },
      {
        paramName: "commitment",
        type: "string",
        paramDescription: "Configures the commitment level for queried blocks. Options include \"finalized\", \"confirmed\", and \"processed\".",
      },
      {
        paramName: "encoding",
        type: "string",
        paramDescription: "Encoding used for the transaction data. Options are \"base58\" (slow, DEPRECATED) or \"base64\" (default: \"base58\").",
      },
      {
        paramName: "replaceRecentBlockhash",
        type: "boolean",
        paramDescription: "If true, replaces the transaction's recent blockhash with the most recent one (default: false). This conflicts with sigVerify.",
      },
      {
        paramName: "accounts",
        type: "object",
        paramDescription: "Configuration object for accounts",
        childrenParamsType: "object",
        childrenParams: [
            {
              paramName: "encoding",
              type: "string",
              paramDescription: "Data encoding for each returned transaction. Options include \"base64\" (default), \"base64+zstd\", or \"jsonParsed\".",
            },
            {
              paramName: "addresses",
              type: "array_of_strings",
              paramDescription: "An array of accounts to return.",
            },
        ],
      },
    ],
  },
  {
    paramName: "minContextSlot",
    type: "integer",
    paramDescription: "The minimum slot at which the request can be evaluated",
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
    type: "string",
    childrenParamsType: "object",
    childrenParams: [
       {
          paramName: "error",
          type: "object",
         paramDescription: "Contains error information if the transaction failed, or null if the transaction succeeded.",
        },
        {
          paramName: "logs",
          type: "array",
         paramDescription: "Array of log messages generated by transaction instructions during execution. Null if the simulation failed before execution (e.g., due to an invalid blockhash or signature verification failure).",
        },
        {
          paramName: "accounts",
          type: "object",
          paramDescription: "Contains error information if the transaction failed, or null if the transaction succeeded.",
          childrenParamsType: "object",
          childrenParams: [
              {
                paramName: "lamports",
                type: "int64",
                paramDescription: "The number of lamports (smallest unit of SOL) assigned to this account.",
              },
              {
                paramName: "owner",
                type: "string",
                paramDescription: "Base-58 encoded public key of the program assigned to this account",
              },
              {
                paramName: "data",
                type: "string",
                paramDescription: "Data associated with the account, either as encoded binary data or in JSON format, depending on the specified encoding. Format: [data, encoding] or JSON object",
              },
              {
                paramName: "executable",
                type: "string",
                paramDescription: "dicates if the account contains a program and is read-only.",
              },
              {
                paramName: "rentEpoch",
                type: "string",
                paramDescription: "The epoch at which this account will next owe rent.",
              },
          ],
        },
       {
          paramName: "unitsConsumed",
          type: "integer",
          paramDescription: "Indicates the total compute budget units utilized during the execution of the transaction.",
        },
        {
          paramName: "innerInstructions",
          type: "array",
          paramDescription: "A collection of inner instructions executed within the transaction.",
        },
        {
          paramName: "returnData",
          type: "object",
          paramDescription: "The latest return data produced by an instruction in the transaction, including",
          childrenParamsType: "object",
          childrenParams: [
                 {
                  paramName: "programId",
                  type: "string",
                  paramDescription: "The public key of the program that generated the return data, encoded in base-58.",
                 },
                 {
                  paramName: "data",
                  type: "array",
                  paramDescription: "A collection of inner instructions executed within the transaction.",
                 },
          ],
        },
    ],
  },
];

const USE_CASES = [
  "Simulate a transaction to verify outcomes before broadcasting",
  "Analyze potential transaction errors without actual execution",
  "Ensure transaction validity and estimate fees accurately",
];

const CONSTRAINTS = [
  "Requires a valid base64-encoded transaction",
  "Simulation results may not match network conditions",
  "High request frequency may trigger rate limiting",
];
