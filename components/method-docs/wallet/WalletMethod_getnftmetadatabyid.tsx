import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
  PathParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getnftmetadatabyid(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Get NFT Metadata by Id"
      network=""
      cu={14796}
      description={"Fetches detailed information about a specific NFT by its unique identifier"}
      url={"GET https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}"}
      isRESTApi={true}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={""}
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request GET \\
  --url https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id} \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}", {
  method: "GET",
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

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}", {
  method: "GET",
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
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}", nil)
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
        .get("https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}")
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

url = "https://lb.drpc.live/{chain}/{key}/lambda/v1/contract-address/{contract}/nfts/{nft_id}"
headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": {
    "type": "nfts",
    "id": "arbitrum:0xc5295c6a183f29b7c962df076819d44e0076860e:10",
    "chain_id": "arbitrum",
    "chain_id_numeric": 42161,
    "chain_name": "Arbitrum",
    "price": 1.90573,
    "attributes": {
      "token_id": "10",
      "contract_address": "0xc5295c6a183f29b7c962df076819d44e0076860e",
      "name": "Rainbow Treasure",
      "interface": "ERC1155",
      "image_url": "https://lh3.googleusercontent.com/1YGMrTrpMkI9Ch7ZvDxkGzCyuUznBESmWwmSuHxSZx3iqczOEi1MZE9lXrC-xYVrq5mFnu8y9WB5MZSbacKvcms-tXOtfg_-ow=s250",
      "marketplace_urls": [],
      "collection": {
        "id": "1130824",
        "name": "Smol Treasures",
        "description": "Smols and Swols are currently farming Smol treasures on the moon.",
        "icon_url": "https://lh3.googleusercontent.com/mnPPP7C3XTYy6VF5tXYzk44zLQOknF0AP2c-bP2haeokr63GjqP-48fHdMpDhTGDkoXwouuDOn8pBEEO21mJ0uKU-LSZaHbTeFo",
        "banner_url": "https://lh3.googleusercontent.com/zcM24EwwI476WSxWMeeLghnH4RQUzSIdsldXfuw-6kN9iNd_P_8z4jt_fNlnnKO02PUlX7CW8tVPi53Scd_0_b7-c9Qy-RfGb0w=w2500",
        "number_of_assets": 10000,
        "number_of_owners": 5000,
        "marketplace_urls": []
      }
    },
    "traits": {
      "Background": "sunrise",
      "Race": "pink",
      "Eyes": "classic"
    },
    "owner_address": "0xd1D6bF2b014f0f2c53a54515D11e2D72D89B61b4"
  }
} }
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
    paramName: "contract_address",
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

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "data",
  type: "object",
  paramDescription: "[Required] NFT Details",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "type",
      type: "string",
      paramDescription: "[Required] Type of the item"
    },
    {
      paramName: "id",
      type: "string",
      paramDescription: "[Required] Internal ID of the item"
    },
    {
      paramName: "chain_id",
      type: "string",
      paramDescription: "[Required] Chain ID of the item"
    },
    {
      paramName: "chain_id_numeric",
      type: "integer",
      paramDescription: "Numeric chain ID of the item"
    },
    {
      paramName: "chain_name",
      type: "string",
      paramDescription: "[Required] Chain name of the item"
    },
    {
      paramName: "price",
      type: "number",
      paramDescription: "Price of the NFT"
    },
    {
      paramName: "attributes",
      type: "object",
      paramDescription: "[Required] NFT details",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "token_id",
          type: "string",
          paramDescription: "[Required] ID of the token"
        },
        {
          paramName: "contract_address",
          type: "string",
          paramDescription: "[Required] NFT address"
        },
        {
          paramName: "name",
          type: "string",
          paramDescription: "[Required] NFT name"
        },
        {
          paramName: "interface",
          type: "string",
          paramDescription: "[Required] NFT interface"
        },
        {
          paramName: "image_url",
          type: "string",
          paramDescription: "[Required] URL of image content, if any"
        },
        {
          paramName: "preview_url",
          type: "string",
          paramDescription: "[Required] URL of preview image content, if any"
        },
        {
          paramName: "video_url",
          type: "string",
          paramDescription: "[Required] URL of video content, if any"
        },
        {
          paramName: "audio_url",
          type: "string",
          paramDescription: "[Required] URL of audio content, if any"
        },
        {
          paramName: "last_update_time",
          type: "string",
          paramDescription: "Time of the last NFT update"
        },
        {
          paramName: "collection",
          type: "object",
          paramDescription: "[Required] NFT collection info",
          childrenParamsType: "object",
          childrenParams: [
            {
              paramName: "id",
              type: "string",
              paramDescription: "[Required] NFT collection ID"
            },
            {
              paramName: "name",
              type: "string",
              paramDescription: "[Required] NFT collection name"
            },
            {
              paramName: "description",
              type: "string",
              paramDescription: "[Required] NFT collection description"
            },
            {
              paramName: "icon_url",
              type: "string",
              paramDescription: "NFT collection icon URL, if any"
            },
            {
              paramName: "banner_url",
              type: "string",
              paramDescription: "NFT collection banner URL, if any"
            },
            {
              paramName: "number_of_assets",
              type: "integer",
              paramDescription: "Total number of NFTs in the collection, if known"
            },
            {
              paramName: "number_of_owners",
              type: "integer",
              paramDescription: "Number of unique owners in the collection, if known"
            },
            {
              paramName: "marketplace_urls",
              type: "array",
              paramDescription: "Marketplace URLs for the collection, if any"
            }
          ]
        },
        {
          paramName: "marketplace_urls",
          type: "array",
          paramDescription: "Marketplace URLs for the NFT"
        },
        {
          paramName: "traits",
          type: "object",
          paramDescription: "NFT traits dictionary",
          childrenParamsType: "object",
          childrenParams: []
        },
        {
          paramName: "spam",
          type: "object",
          paramDescription: "Spam classification result",
          childrenParamsType: "object",
          childrenParams: [
              {
          paramName: "score",
          type: "integer",
          paramDescription: "Spam/risk score from 0 (safe) to 100 (very risky)"
        },
              {
          paramName: "level",
          type: "string",
          paramDescription: "Risk level based on score: 'LOW', 'MEDIUM', or 'HIGH'"
        },
              {
          paramName: "reasons",
          type: "object",
          paramDescription: "Tagged explanations of why the NFT is considered risky"
        },
          ],
        },
        {
          paramName: "owner_address",
          type: "string",
          paramDescription: "Address of the NFT owner"
        },
        {
          paramName: "creator_address",
          type: "string",
          paramDescription: "Address of the NFT creator"
        },
        {
          paramName: "raw_metadata",
          type: "object",
          paramDescription: "Raw metadata as returned by the NFT's tokenURI",
          childrenParamsType: "object",
          childrenParams: [
              {
          paramName: "token_uri",
          type: "string",
          paramDescription: "Token URI from the smart contract"
        },
              {
          paramName: "metadata",
          type: "object",
          paramDescription: "Unmodified metadata JSON from tokenURI"
        },
          ]


        }
      ]
    }
    ]
}
];

const USE_CASES = [
  "Fetch metadata for a specific NFT",
  "Display detailed NFT information in portfolio dashboards",
];

const CONSTRAINTS = [
  "Requires valid contract address and token ID",
  "Only NFTs on supported chains are returned",
];