import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_ARBITRUM} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import React from "react";
import {EthereumMethod_sendRawTransaction} from "../ethereum/EthereumMethod_sendRawTransaction";
import {EthereumMethod_newBlockFilter} from "../ethereum/EthereumMethod_newBlockFilter";
import {EthereumMethod_trace_replayBlockTransactions} from "../ethereum/EthereumMethod_trace_replayBlockTransactions";

export function ArbitrumMethod_trace_replayBlockTransactions() {
  return (
    <EthereumMethod_trace_replayBlockTransactions
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARBITRUM}
      network="arbitrum"
    />
  );
}
