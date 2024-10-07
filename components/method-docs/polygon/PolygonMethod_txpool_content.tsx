import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_POLYGON} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_txpool_content} from "../ethereum/EthereumMethod_txpool_content";

export function PolygonMethod_txpool_content() {
  return (
    <EthereumMethod_txpool_content
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_POLYGON}
      network="polygon"
    />
  );
}
