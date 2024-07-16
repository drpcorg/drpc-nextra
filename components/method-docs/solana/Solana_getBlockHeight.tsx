import SolanaMethod from "../../SolanaMethod/SolanaMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function Solana_getBlockHeight() {
  return (
    <SolanaMethod
      method="getBlockHeight"
      network="solana"
      cu={0}
      description={"Retrieves the current block height"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_objects"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="array_of_objects"
      responseParamsDescription={
        "The current block height"
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
  "result": 0
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "commitment",
    type: "string",
    paramDescription: "The level of commitment required for the query",
    paramEnum: [
      {
        value: "finalized",
        description:
          "The node will query the most recent block confirmed by supermajority of the cluster as having reached maximum lockout, meaning the cluster has recognized this block as finalized",
      },
      {
        value: "confirmed",
        description:
          "The node will query the most recent block that has been voted on by supermajority of the cluster",
      },
      {
        value: "processed",
        description:
          "The node will query its most recent block. Note that the block may not be complete",
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
    type: "integer",
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
