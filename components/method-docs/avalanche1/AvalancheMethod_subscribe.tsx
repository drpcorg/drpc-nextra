import { DRPC_ENDPOINT_URL_WSCAT } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_AVALANCHE, DRPC_ENDPOINT_URL_AVALANCHE_WSCAT} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_net_listening} from "../ethereum/EthereumMethod_net_listening";
import {EthereumMethod_subscribe} from "../ethereum/EthereumMethod_subscribe";
import {DRPC_ENDPOINT_URL_POLYGON} from "../polygon/constants";

export function AvalancheMethod_subscribe() {
  return (
    <EthereumMethod_subscribe
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL_WSCAT}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_AVALANCHE_WSCAT}
      network="avalanche"
    />
  );
}
