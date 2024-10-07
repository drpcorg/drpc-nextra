import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_MANTLE } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {
  EthereumMethod_getTransactionByBlockHashAndIndex
} from "../ethereum/EthereumMethod_getTransactionByBlockHashAndIndex";

export function MantleMethod_getTransactionByBlockHashAndIndex() {
  return (
    <EthereumMethod_getTransactionByBlockHashAndIndex
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_MANTLE}
      network="mantle"
    />
  );
}
