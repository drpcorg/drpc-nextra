import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_SONEIUM} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_getProof} from "../ethereum/EthereumMethod_getProof";

export function SoneiumMethod_getProof() {
  return (
    <EthereumMethod_getProof
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_SONEIUM}
      network="Soneium"
    />
  );
}
