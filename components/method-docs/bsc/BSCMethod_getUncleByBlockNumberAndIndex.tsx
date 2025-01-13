import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_BSC} from "./constants";
import {EthereumMethod_chainId} from "../ethereum/EthereumMethod_chainId";
import {EthereumMethod_getUncleCountByBlockNumber} from "../ethereum/EthereumMethod_getUncleCountByBlockNumber";
import {EthereumMethod_getUncleByBlockNumberAndIndex} from "../ethereum/EthereumMethod_getUncleByBlockNumberAndIndex";

export function BSCMethod_getUncleByBlockNumberAndIndex() {
  return (
    <EthereumMethod_getUncleByBlockNumberAndIndex
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BSC}
      network="BNB Smart Chain"
    />
  );
}