import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_BSC} from "./constants";
import {EthereumMethod_coinbase} from "../ethereum/EthereumMethod_coinbase";

export function BSCMethod_coinbase() {
  return (
    <EthereumMethod_coinbase
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BSC}
      network="BNB Smart Chain"
    />
  );
}
