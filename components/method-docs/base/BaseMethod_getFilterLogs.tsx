import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_BASE} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_net_listening} from "../ethereum/EthereumMethod_net_listening";
import {EthereumMethod_getFilterLogs} from "../ethereum/EthereumMethod_getFilterLogs";

export function BaseMethod_getFilterLogs() {
  return (
    <EthereumMethod_getFilterLogs
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BASE}
      network="base"
    />
  );
}
