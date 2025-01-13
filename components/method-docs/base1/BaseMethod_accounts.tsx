import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_BASE} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";

export function BaseMethod_accounts() {
  return (
    <EthereumMethod_accounts
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BASE}
      network="Base"
    />
  );
}
