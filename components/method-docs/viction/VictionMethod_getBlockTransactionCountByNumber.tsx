import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_VICTION} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import React from "react";
import {
  EthereumMethod_getBlockTransactionCountByNumber
} from "../ethereum/EthereumMethod_getBlockTransactionCountByNumber";

export function VictionMethod_getBlockTransactionCountByNumber() {
  return (
    <EthereumMethod_getBlockTransactionCountByNumber
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_VICTION}
      network="Viction"
    />
  );
}
