import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_FANTOM} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_getBlockByHashfull} from "../ethereum/EthereumMethod_getBlockByHashfull";

export function FantomMethod_getBlockByHashfull() {
  return (
    <EthereumMethod_getBlockByHashfull
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_FANTOM}
      network="Fantom"
    />
  );
}