import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_SONIC} from "./constants";
import {EthereumMethod_coinbase} from "../ethereum/EthereumMethod_coinbase";
import {EthereumMethod_getFilterChanges} from "../ethereum/EthereumMethod_getFilterChanges";

export function SonicMethod_getFilterChanges() {
  return (
    <EthereumMethod_getFilterChanges
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_SONIC}
      network="Sonic"
    />
  );
}
