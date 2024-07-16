import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getBlockCommitment() {
  return (
    <SolanaMethod
      method="getBlockCommitment"
      network="solana"
      cu={0}
      description={"Retrieves the commitment levels for a specific block"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_objects"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="string"
      responseParamsDescription={
        "Contains commitment information for the block"
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
    "commitment": [
      0
    ],
    "totalStake": 0
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription:
      "The number of the block to retrieve commitment information for.",
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
    childrenParamsType: "array",
    childrenParams: [
        {
          paramName: "commitment",
          type: "array_of_integers",
          paramDescription: "The commitment level of the block.",
        },
        {
          paramName: "totalStake",
          type: "int64",
          paramDescription: "The total stake of validators confirming the block.",
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