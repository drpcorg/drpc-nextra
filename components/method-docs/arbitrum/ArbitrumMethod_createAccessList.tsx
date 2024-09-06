import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_ARBITRUM } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import React from "react";
import {EthereumMethod_createAccessList} from "../ethereum/EthereumMethod_createAccessList";

export function ArbitrumMethod_createAccessList() {
  return (
    <EthereumMethod_createAccessList
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARBITRUM}
      network="arbitrum"
    />
  );
}
