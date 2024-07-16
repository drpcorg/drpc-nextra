import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getAccountInfo() {
  return (
    <SolanaMethod
      method="getAccountInfo"
      network="solana"
      cu={10}
      description={"Retrieves detailed information about a specific account on the Solana blockchain."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_objects"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Contains detailed information about the account"
      }
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
 "method": "getBlockHeight"
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';
const headers = {
    'Content-Type': 'application/json'
};

const data = {
    jsonrpc: "2.0",
    id: 1,
    method: "getBlockHeight"
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
    code: () => `// First, install node-fetch if you haven't already:
// npm install node-fetch

const fetch = require('node-fetch');

const url = '${DRPC_ENDPOINT_URL}';
const headers = {
    'Content-Type': 'application/json'
};

const data = {
    jsonrpc: "2.0",
    id: 1,
    method: "getBlockHeight"
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
];

const RESPONSE_JSON = `{
  "id": 0,
  "jsonrpc": "string",
  "result": {
    "context": {
      "slot": 0
    },
    "value": 0
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "accountPublicKey",
    type: "string",
    paramDescription:
      "The public key of the account to query.",
  },
  {
    paramName: "config",
    type: "object",
    paramDescription: "Configuration object containing optional parameters:",
    childrenParams: [
      {
        paramName: "encoding",
        type: "string",
        paramDescription: "Specifies the data encoding for the returned account information"
      },
      {
        paramName: "dataSlice",
        type: "object",
        paramDescription: "Limits the returned account data based on the specified offset and length fields. Available only for \"base58\", \"base64\", or \"base64+zstd\" encodings."
      },
    ],
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
    childrenParamsType: "array",
    childrenParams: [
        {
          paramName: "slot",
          type: "int64",
        },
        {
          paramName: "value",
          type: "object",
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
          ]
        },
    ],
  },
];

const USE_CASES = [
  "Track the current height of the blockchain for real-time updates.",
  "Verify if a node or client is fully synced with the blockchain.",
  "Use block height as a reference for querying historical transactions and events.",
];

const CONSTRAINTS = [
  "Delays in response during high network activity.",
  "Potential discrepancies in height during network forks or reorganizations.",
  "Subject to rate limits, affecting frequent data retrieval.",
];
