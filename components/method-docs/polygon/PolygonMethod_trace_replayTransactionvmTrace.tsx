import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_POLYGON } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_protocolVersion} from "../ethereum/EthereumMethod_protocolVersion";
import {EthereumMethod_trace_replayTransactionvmTrace} from "../ethereum/EthereumMethod_trace_replayTransactionvmTrace";

export function PolygonMethod_trace_replayTransactionvmTrace() {
  return (
    <EthereumMethod_trace_replayTransactionvmTrace
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_POLYGON}
      network="polygon"
    />
  );
}
