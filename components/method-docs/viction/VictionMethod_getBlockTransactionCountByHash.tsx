import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_VICTION} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import React from "react";
import {EthereumMethod_getBlockTransactionCountByHash} from "../ethereum/EthereumMethod_getBlockTransactionCountByHash";

export function VictionMethod_getBlockTransactionCountByHash() {
  return (
    <EthereumMethod_getBlockTransactionCountByHash
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_VICTION}
      network="Viction"
    />
  );
}
