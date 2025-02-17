import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_POLYGON } from "./constants";
import {EthereumMethod_mining} from "../ethereum/EthereumMethod_mining";
import {EthereumMethod_trace_filter} from "../ethereum/EthereumMethod_trace_filter";

export function PolygonMethod_trace_filter() {
  return (
    <EthereumMethod_trace_filter
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_POLYGON}
      network="polygon"
    />
  );
}
