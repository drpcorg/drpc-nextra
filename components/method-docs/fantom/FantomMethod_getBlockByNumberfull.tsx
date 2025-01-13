import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_FANTOM} from "./constants";
import {EthereumMethod_getBlockByNumberfull} from "../ethereum/EthereumMethod_getBlockByNumberfull";

export function FantomMethod_getBlockByNumberfull() {
  return (
    <EthereumMethod_getBlockByNumberfull
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_FANTOM}
      network="Fantom"
    />
  );
}
