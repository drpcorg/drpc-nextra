import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_VICTION} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_getTransactionCount} from "../ethereum/EthereumMethod_getTransactionCount";

export function VictionMethod_getTransactionCount() {
  return (
    <EthereumMethod_getTransactionCount
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_VICTION}
      network="Viction"
    />
  );
}
