import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_SONIC} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_net_listening} from "../ethereum/EthereumMethod_net_listening";
import {EthereumMethod_subscribe} from "../ethereum/EthereumMethod_subscribe";
import React from "react";
import {EthereumMethod_getBlockReceipts} from "../ethereum/EthereumMethod_getBlockReceipts";

export function SonicMethod_getBlockReceipts() {
  return (
    <EthereumMethod_getBlockReceipts
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_SONIC}
      network="Sonic"
    />
  );
}
