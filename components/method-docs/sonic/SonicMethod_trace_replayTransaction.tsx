import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_SONIC} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_net_version} from "../ethereum/EthereumMethod_net_version";
import {EthereumMethod_debug_traceBlockByHash} from "../ethereum/EthereumMethod_debug_traceBlockByHash";
import {EthereumMethod_trace_block} from "../ethereum/EthereumMethod_trace_block";
import {EthereumMethod_trace_filter} from "../ethereum/EthereumMethod_trace_filter";
import React from "react";
import {EthereumMethod_trace_get} from "../ethereum/EthereumMethod_trace_get";
import {EthereumMethod_trace_replayBlockTransactions} from "../ethereum/EthereumMethod_trace_replayBlockTransactions";
import {EthereumMethod_trace_replayTransaction} from "../ethereum/EthereumMethod_trace_replayTransaction";

export function SonicMethod_trace_replayTransaction() {
  return (
      <EthereumMethod_trace_replayTransaction
          replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
          replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_SONIC}
          network="Sonic"
      />
  );
}
