import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_AVALANCHE} from "./constants";
import {EthereumMethod_chainId} from "../ethereum/EthereumMethod_chainId";
import {EthereumMethod_maxPriorityFeePerGas} from "../ethereum/EthereumMethod_maxPriorityFeePerGas";

export function AvalancheMethod_maxPriorityFeePerGas() {
  return (
    <EthereumMethod_maxPriorityFeePerGas
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_AVALANCHE}
      network="avalanche"
    />
  );
}
