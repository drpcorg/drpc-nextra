import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_OPTIMISM } from "./constants";
import {EthereumMethod_chainId} from "../ethereum/EthereumMethod_chainId";
import {EthereumMethod_getUncleCountByBlockNumber} from "../ethereum/EthereumMethod_getUncleCountByBlockNumber";

export function OptimismMethod_getUncleCountByBlockNumber() {
  return (
    <EthereumMethod_getUncleCountByBlockNumber
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_OPTIMISM}
      network="optimism"
    />
  );
}
