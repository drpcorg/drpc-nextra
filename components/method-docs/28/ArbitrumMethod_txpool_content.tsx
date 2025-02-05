import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_ARBITRUM } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import React from "react";
import {EthereumMethod_web3_clientVersion} from "../ethereum/EthereumMethod_web3_clientVersion";
import {EthereumMethod_txpool_content} from "../ethereum/EthereumMethod_txpool_content";

export function ArbitrumMethod_txpool_content() {
  return (
    <EthereumMethod_txpool_content
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARBITRUM}
      network="arbitrum"
    />
  );
}
