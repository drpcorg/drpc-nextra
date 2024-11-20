import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_BASE} from "./constants";
import {EthereumMethod_hashrate} from "../ethereum/EthereumMethod_hashrate";

export function BaseMethod_hashrate() {
  return (
    <EthereumMethod_hashrate
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BASE}
      network="base"
    />
  );
}
