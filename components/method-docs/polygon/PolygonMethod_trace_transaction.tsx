import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_POLYGON} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import React from "react";
import {EthereumMethod_sendRawTransaction} from "../ethereum/EthereumMethod_sendRawTransaction";
import {EthereumMethod_newBlockFilter} from "../ethereum/EthereumMethod_newBlockFilter";
import {EthereumMethod_trace_transaction} from "../ethereum/EthereumMethod_trace_transaction";

export function PolygonMethod_trace_transaction() {
  return (
    <EthereumMethod_trace_transaction
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_POLYGON}
      network="polygon"
    />
  );
}
