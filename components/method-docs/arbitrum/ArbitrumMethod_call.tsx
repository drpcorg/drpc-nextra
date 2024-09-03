import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_ARBITRUM } from "./constants";

export function ArbitrumMethod_call() {
  return (
    <EthereumMethod_call
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARBITRUM}
      network="arbitrum"
    />
  );
}
