import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_BASE} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_getBlockByHashfull} from "../ethereum/EthereumMethod_getBlockByHashfull";

export function BaseMethod_getBlockByHashfull() {
  return (
    <EthereumMethod_getBlockByHashfull
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BASE}
      network="base"
    />
  );
}