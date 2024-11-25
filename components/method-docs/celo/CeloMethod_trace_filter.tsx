import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_CELO} from "./constants";
import {EthereumMethod_syncing} from "../ethereum/EthereumMethod_syncing";
import {EthereumMethod_trace_block} from "../ethereum/EthereumMethod_trace_block";
import {EthereumMethod_trace_callMany} from "../ethereum/EthereumMethod_trace_callMany";
import {EthereumMethod_trace_filter} from "../ethereum/EthereumMethod_trace_filter";

export function CeloMethod_trace_filter() {
  return (
    <EthereumMethod_trace_filter
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_CELO}
      network="celo"
    />
  );
}
