import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_SONIC} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_protocolVersion} from "../ethereum/EthereumMethod_protocolVersion";

export function SonicMethod_protocolVersion() {
  return (
    <EthereumMethod_protocolVersion
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_SONIC}
      network="Sonic"
    />
  );
}
