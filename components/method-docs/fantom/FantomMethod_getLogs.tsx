import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_FANTOM} from "./constants";
import {EthereumMethod_getLogs} from "../ethereum/EthereumMethod_getLogs";
import {FantomMethod_chainId} from "./FantomMethod_chainId";

export function FantomMethod_getLogs() {
  return (
      <EthereumMethod_getLogs
          replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
          replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_FANTOM}
          network="Fantom"
      />
  );
}
