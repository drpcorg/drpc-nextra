import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_CELO} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_getUncleCountByBlockHash} from "../ethereum/EthereumMethod_getUncleCountByBlockHash";
import {EthereumMethod_getUncleByBlockHashAndIndex} from "../ethereum/EthereumMethod_getUncleByBlockHashAndIndex";
import {EthereumMethod_getUncleByBlockNumberAndIndex} from "../ethereum/EthereumMethod_getUncleByBlockNumberAndIndex";

export function CeloMethod_getUncleByBlockNumberAndIndex() {
  return (
    <EthereumMethod_getUncleByBlockNumberAndIndex
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_CELO}
      network="celo"
    />
  );
}
