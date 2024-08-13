import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_OPTIMISM } from "./constants";
import {EthereumMethod_chainId} from "../ethereum/EthereumMethod_chainId";
import {EthereumMethod_newFilter} from "../ethereum/EthereumMethod_newFilter";
import {EthereumMethod_newPendingTransactionFilter} from "../ethereum/EthereumMethod_newPendingTransactionFilter";
import {EthereumMethod_trace_replayTransaction} from "../ethereum/EthereumMethod_trace_replayTransaction";

export function OptimismMethod_trace_replayTransaction() {
  return (
    <EthereumMethod_trace_replayTransaction
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_OPTIMISM}
      network="optimism"
    />
  );
}
