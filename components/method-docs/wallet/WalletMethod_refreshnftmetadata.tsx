import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
  PathParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_refreshnftmetadata(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Refresh NFT Metadata"
      network=""
      cu={1837}
      description={"Refreshes metadata for a specific NFT by contract address and token ID"}
      url={"POST https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}/refresh"}
      isRESTApi={true}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      queryParamsType="none"
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="none"
      responseParamsDescription={""}
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
  --url https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}/refresh \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}/refresh", {
  method: "POST",
  headers: {
    "accept": "application/json"
  }
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);`,
  },
  {
    language: "node",
    code: () => `import fetch from "node-fetch";

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}/refresh", {
  method: "POST",
  headers: {
    "accept": "application/json"
  }
});

const data = await res.json();
console.log(data);`,
  },
  {
    language: "go",
    code: () => `package main

import (
  "fmt"
  "io"
  "net/http"
)

func main() {
  req, _ := http.NewRequest("POST", "https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}/refresh", nil)
  req.Header.Set("accept", "application/json")

  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()

  body, _ := io.ReadAll(resp.Body)
  fmt.Println(string(body))
}`,
  },
  {
    language: "rust",
    code: () => `use reqwest::header::ACCEPT;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();

    let res = client
        .post("https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}/refresh")
        .header(ACCEPT, "application/json")
        .send()
        .await?;

    let body = res.text().await?;
    println!("{}", body);

    Ok(())
}`,
  },
  {
    language: "python",
    code: () => `import requests

url = "https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}/refresh"
headers = {
    "accept": "application/json"
}

response = requests.post(url, headers=headers)
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "status": "success",
}`;

const PATH_PARAMS: PathParamProp = [
  {
    paramName: "chain",
    type: "string",
    paramDescription: "[Required] Chain name (e.g. ethereum, polygon)",
  },
  {
    paramName: "key",
    type: "string",
    paramDescription: "[Required] Your dRPC API key",
  },
  {
    paramName: "contract",
    type: "string",
    paramDescription: "[Required] NFT contract address",
  },
  {
    paramName: "nft_id",
    type: "string",
    paramDescription: "[Required] NFT token ID",
  },
];

const REQUEST_PARAMS: RequestParamProp = [];

const RESPONSE_PARAMS: ReqResParam[] = [];

const USE_CASES = [
  "Trigger a refresh of NFT metadata",
  "Ensure the latest NFT attributes and images are available",
];

const CONSTRAINTS = [
  "Requires valid contract address and token ID",
  "Only NFTs on supported chains can be refreshed",
];