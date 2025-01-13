import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_BSC} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import React from "react";
import {EthereumMethod_gasPrice} from "../ethereum/EthereumMethod_gasPrice";

export function BSCMethod_gasPrice() {
  return (
    <EthereumMethod_gasPrice
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_BSC}
      network="BNB Smart Chain"
    />
  );
}
