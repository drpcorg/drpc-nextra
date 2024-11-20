import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_CELO} from "./constants";
import {EthereumMethod_syncing} from "../ethereum/EthereumMethod_syncing";
import {EthereumMethod_trace_block} from "../ethereum/EthereumMethod_trace_block";
import {EthereumMethod_trace_callMany} from "../ethereum/EthereumMethod_trace_callMany";
import {EthereumMethod_trace_filter} from "../ethereum/EthereumMethod_trace_filter";
import {EthereumMethod_trace_get} from "../ethereum/EthereumMethod_trace_get";

export function CeloMethod_trace_get() {
  return (
    <EthereumMethod_trace_get
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_CELO}
      network="celo"
    />
  );
}
