import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import { DRPC_ENDPOINT_URL_POLYGON } from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import React from "react";
import {EthereumMethod_web3_clientVersion} from "../ethereum/EthereumMethod_web3_clientVersion";
import {EthereumMethod_web3_sha3} from "../ethereum/EthereumMethod_web3_sha3";

export function PolygonMethod_web3_sha3() {
  return (
    <EthereumMethod_web3_sha3
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_POLYGON}
      network="polygon"
    />
  );
}
