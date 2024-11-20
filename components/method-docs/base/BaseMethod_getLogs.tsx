import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_BASE} from "./constants";
import {EthereumMethod_getLogs} from "../ethereum/EthereumMethod_getLogs";
import {BaseMethod_chainId} from "./BaseMethod_chainId";

export function BaseMethod_getLogs() {
  return (
      <EthereumMethod_getLogs
          replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
          replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BASE}
          network="base"
      />
  );
}
