import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_AVALANCHE } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_getTransactionByHash} from "../ethereum/EthereumMethod_getTransactionByHash";

export function AvalancheMethod_getTransactionByHash() {
  return (
    <EthereumMethod_getTransactionByHash
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_AVALANCHE}
      network="avalanche"
    />
  );
}
