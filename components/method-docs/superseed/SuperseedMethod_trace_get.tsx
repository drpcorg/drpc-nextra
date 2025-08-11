import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_SUPERSEED} from "./constants";
import {EthereumMethod_mining} from "../ethereum/EthereumMethod_mining";
import {EthereumMethod_trace_get} from "../ethereum/EthereumMethod_trace_get";

export function SuperseedMethod_trace_get() {
  return (
    <EthereumMethod_trace_get
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_SUPERSEED}
      network="superseed"
    />
  );
}
