import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_MANTLE} from "./constants";
import {EthereumMethod_mining} from "../ethereum/EthereumMethod_mining";

export function MantleMethod_mining() {
  return (
    <EthereumMethod_mining
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_MANTLE}
      network="mantle"
    />
  );
}
