import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_MANTLE } from "./constants";
import {EthereumMethod_chainId} from "../ethereum/EthereumMethod_chainId";
import {EthereumMethod_getBlockByNumber} from "../ethereum/EthereumMethod_getBlockByNumber";

export function MantleMethod_getBlockByNumber() {
  return (
    <EthereumMethod_getBlockByNumber
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_MANTLE}
      network="mantle"
    />
  );
}