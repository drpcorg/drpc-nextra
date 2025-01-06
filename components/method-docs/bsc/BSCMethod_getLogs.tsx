import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_BSC} from "./constants";
import {EthereumMethod_getLogs} from "../ethereum/EthereumMethod_getLogs";
import {BSCMethod_chainId} from "./BSCMethod_chainId";

export function BSCMethod_getLogs() {
  return (
      <EthereumMethod_getLogs
          replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
          replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BSC}
          network="BNB Smart Chain"
      />
  );
}
