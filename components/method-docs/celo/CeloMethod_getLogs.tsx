import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_CELO} from "./constants";
import {EthereumMethod_getLogs} from "../ethereum/EthereumMethod_getLogs";
import {CeloMethod_chainId} from "./CeloMethod_chainId";

export function CeloMethod_getLogs() {
  return (
      <EthereumMethod_getLogs
          replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
          replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_CELO}
          network="celo"
      />
  );
}
