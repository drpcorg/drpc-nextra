import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_ARBITRUM } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_net_version} from "../ethereum/EthereumMethod_net_version";
import {EthereumMethod_debug_traceBlockByHash} from "../ethereum/EthereumMethod_debug_traceBlockByHash";
import {EthereumMethod_debug_traceCall} from "../ethereum/EthereumMethod_debug_traceCall";

export function ArbitrumMethod_debug_traceCall() {
  return (
      <EthereumMethod_debug_traceCall
          replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
          replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARBITRUM}
          network="arbitrum"
      />
  );
}
