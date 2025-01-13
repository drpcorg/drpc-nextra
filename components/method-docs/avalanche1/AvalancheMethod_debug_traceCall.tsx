import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_AVALANCHE} from "./constants";
import {EthereumMethod_debug_traceCall} from "../ethereum/EthereumMethod_debug_traceCall";

export function AvalancheMethod_debug_traceCall() {
  return (
    <EthereumMethod_debug_traceCall
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_AVALANCHE}
      network="avalanche"
    />
  );
}
