import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_FANTOM} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_net_version} from "../ethereum/EthereumMethod_net_version";
import {EthereumMethod_debug_traceBlockByHash} from "../ethereum/EthereumMethod_debug_traceBlockByHash";
import {EthereumMethod_trace_block} from "../ethereum/EthereumMethod_trace_block";
import {EthereumMethod_trace_call} from "../ethereum/EthereumMethod_trace_call";

export function FantomMethod_trace_call() {
  return (
      <EthereumMethod_trace_call
          replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
          replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_FANTOM}
          network="Fantom"
      />
  );
}
