import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_MANTLE } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import React from "react";
import {EthereumMethod_getStorageAt} from "../ethereum/EthereumMethod_getStorageAt";

export function MantleMethod_getStorageAt() {
  return (
    <EthereumMethod_getStorageAt
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_MANTLE}
      network="mantle"
    />
  );
}
