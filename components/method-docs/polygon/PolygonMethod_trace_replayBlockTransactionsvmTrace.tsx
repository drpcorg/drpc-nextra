import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_POLYGON } from "./constants";
import {EthereumMethod_chainId} from "../ethereum/EthereumMethod_chainId";
import {EthereumMethod_newFilter} from "../ethereum/EthereumMethod_newFilter";
import {
  EthereumMethod_trace_replayBlockTransactionsvmTrace
} from "../ethereum/EthereumMethod_trace_replayBlockTransactionsvmTrace";

export function PolygonMethod_trace_replayBlockTransactionsvmTrace() {
  return (
    <EthereumMethod_trace_replayBlockTransactionsvmTrace
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_POLYGON}
      network="polygon"
    />
  );
}
