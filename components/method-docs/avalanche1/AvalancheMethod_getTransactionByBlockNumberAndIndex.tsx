import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_AVALANCHE } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_blockNumber} from "../ethereum/EthereumMethod_blockNumber";
import {
  EthereumMethod_getTransactionByBlockNumberAndIndex
} from "../ethereum/EthereumMethod_getTransactionByBlockNumberAndIndex";

export function AvalancheMethod_getTransactionByBlockNumberAndIndex() {
  return (
    <EthereumMethod_getTransactionByBlockNumberAndIndex
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_AVALANCHE}
      network="avalanche"
    />
  );
}
