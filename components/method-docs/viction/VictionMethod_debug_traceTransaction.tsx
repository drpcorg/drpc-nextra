import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_VICTION} from "./constants";
import {EthereumMethod_chainId} from "../ethereum/EthereumMethod_chainId";
import {EthereumMethod_newFilter} from "../ethereum/EthereumMethod_newFilter";
import {EthereumMethod_debug_traceTransaction} from "../ethereum/EthereumMethod_debug_traceTransaction";

export function VictionMethod_debug_traceTransaction() {
  return (
    <EthereumMethod_debug_traceTransaction
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_VICTION}
      network="Viction"
    />
  );
}
