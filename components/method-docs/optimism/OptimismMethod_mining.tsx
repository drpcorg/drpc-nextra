import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_OPTIMISM } from "./constants";
import {EthereumMethod_mining} from "../ethereum/EthereumMethod_mining";

export function OptimismMethod_mining() {
  return (
    <EthereumMethod_mining
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_OPTIMISM}
      network="optimism"
    />
  );
}
