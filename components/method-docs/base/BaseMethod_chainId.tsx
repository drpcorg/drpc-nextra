import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_BASE} from "./constants";
import {EthereumMethod_chainId} from "../ethereum/EthereumMethod_chainId";

export function BaseMethod_chainId() {
  return (
    <EthereumMethod_chainId
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BASE}
      network="base"
    />
  );
}