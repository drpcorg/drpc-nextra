import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_CELO} from "./constants";
import {EthereumMethod_syncing} from "../ethereum/EthereumMethod_syncing";
import {EthereumMethod_trace_block} from "../ethereum/EthereumMethod_trace_block";
import {EthereumMethod_trace_call} from "../ethereum/EthereumMethod_trace_call";

export function CeloMethod_trace_call() {
  return (
    <EthereumMethod_trace_call
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_CELO}
      network="celo"
    />
  );
}
