import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_TRON } from "./constants";
import {EthereumMethod_syncing} from "../ethereum/EthereumMethod_syncing";

export function TronMethod_syncing() {
  return (
    <EthereumMethod_syncing
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_TRON}
      network="tron"
    />
  );
}
