import {DRPC_ENDPOINT_URL, DRPC_ENDPOINT_URL_WSCAT} from "../ethereum/constants";
import { EthereumMethod_call } from "../ethereum/EthereumMethod_call";
import {DRPC_ENDPOINT_URL_VICTION, DRPC_ENDPOINT_URL_VICTION_WSCAT} from "./constants";
import {EthereumMethod_accounts} from "../ethereum/EthereumMethod_accounts";
import {EthereumMethod_net_listening} from "../ethereum/EthereumMethod_net_listening";
import React from "react";
import {EthereumMethod_unsubscribe} from "../ethereum/EthereumMethod_unsubscribe";

export function VictionMethod_unsubscribe() {
  return (
    <EthereumMethod_unsubscribe
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL_WSCAT}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_VICTION_WSCAT}
      network="Viction"
    />
  );
}
