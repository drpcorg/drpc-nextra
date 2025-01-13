import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_BSC } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_net_version} from "../ethereum/EthereumMethod_net_version";
import {EthereumMethod_debug_traceBlockByHash} from "../ethereum/EthereumMethod_debug_traceBlockByHash";
import {EthereumMethod_trace_block} from "../ethereum/EthereumMethod_trace_block";
import {EthereumMethod_trace_filter} from "../ethereum/EthereumMethod_trace_filter";
import React from "react";
import {EthereumMethod_trace_get} from "../ethereum/EthereumMethod_trace_get";
import {EthereumMethod_trace_replayBlockTransactions} from "../ethereum/EthereumMethod_trace_replayBlockTransactions";

export function BSCMethod_trace_replayBlockTransactions() {
  return (
      <EthereumMethod_trace_replayBlockTransactions
          replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
          replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BSC}
          network="BNB Smart Chain"
      />
  );
}
