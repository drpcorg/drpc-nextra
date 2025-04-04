import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_SONIC} from "./constants";
import {EthereumMethod_getLogs} from "../ethereum/EthereumMethod_getLogs";
import {SonicMethod_chainId} from "./SonicMethod_chainId";

export function SonicMethod_getLogs() {
  return (
      <EthereumMethod_getLogs
          replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
          replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_SONIC}
          network="Sonic"
      />
  );
}
