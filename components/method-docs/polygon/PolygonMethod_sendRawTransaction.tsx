import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_POLYGON } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import React from "react";
import {EthereumMethod_sendRawTransaction} from "../ethereum/EthereumMethod_sendRawTransaction";

export function PolygonMethod_sendRawTransaction() {
  return (
    <EthereumMethod_sendRawTransaction
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_POLYGON}
      network="polygon"
    />
  );
}
