import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
  PathParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getwalletnfts(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Get Wallet NFTs"
      network=""
      cu={3006}
      description={"Returns a list of NFTs owned by the specified wallet"}
      url={"GET https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nfts"}
      isRESTApi={true}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_objects"
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
  --url https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nfts \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nfts", {
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

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nfts", {
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
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nfts", nil)
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
        .get("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nfts")
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

url = "https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nfts"
headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": [
    {
      "type": "nft",
      "id": "0xe7b9d5a2b01b23985356f521e0f5016eec201234:ethereum:0x9690b63eb85467be5267a3603f770589ab12dc95:15060",
      "chain_id": "ethereum",
      "chain_id_numeric": 1,
      "chain_name": "Ethereum",
      "amount": 1,
      "price": 79.667354,
      "value_usd": 79.667354,
      "attributes": {
        "token_id": "15060",
        "contract_address": "0x9690b63eb85467be5267a3603f770589ab12dc95",
        "name": "Leila Lacerator of the Rune Raiders",
        "interface": "ERC721",
        "image_url": "https://lh3.googleusercontent.com/1YGMrTrpMkI9Ch7ZvDxkGzCyuUznBESmWwmSuHxSZx3iqczOEi1MZE9lXrC-xYVrq5mFnu8y9WB5MZSbacKvcms-tXOtfg_-ow=s250",
        "collection": {
          "id": "2695",
          "name": "Forgotten Runes Warriors Guild",
          "description": "Forgotten Runes Warriors Guild\\r\\n\\r\\n[Sister Collections](https://opensea.io/collection/forgottenrunes)",
          "icon_url": "https://lh3.googleusercontent.com/8uCBJ-m9No4zAPWuuvRz-2uxZ3uBt9HfYO0wUj_v-zLHvTAr9W2rpNGRRkTPyNfn8Q1HMvSvQEtlD22RVoWkn20E1_O-Mj9BBw",
          "banner_url": "https://lh3.googleusercontent.com/kjbHmiQhpsYIPy5RFdST8XNYIwg-5WTtWUGavhfaF_lXEzrMKtC_-nrdUrUt9cuejuOMv-CW5klEzqDPivHD5o6L6hSKEhUn_k8=w2500"
        }
      }
    },
    {
      "type": "nft",
      "id": "0xe7b9d5a2b01b23985356f521e0f5016eec201234:polygon:0x98e62fe371519d1d07e6f5bfce04737d4dacabfd:1",
      "chain_id": "polygon",
      "chain_id_numeric": 137,
      "chain_name": "Polygon",
      "amount": 5,
      "price": 6.660082750547,
      "value_usd": 33.300413752735,
      "attributes": {
        "token_id": "1",
        "contract_address": "0x98e62fe371519d1d07e6f5bfce04737d4dacabfd",
        "name": "Holiday Lootbox (1st Edition)",
        "interface": "ERC1155",
        "image_url": "https://lh3.googleusercontent.com/1YGMrTrpMkI9Ch7ZvDxkGzCyuUznBESmWwmSuHxSZx3iqczOEi1MZE9lXrC-xYVrq5mFnu8y9WB5MZSbacKvcms-tXOtfg_-ow=s250",
        "collection": {
          "id": "308732",
          "name": "NFT Worlds Items",
          "description": "The official items collection for NFT Worlds. \\r\\n\\r\\nItems and lootboxes within this collection are exclusively created by the NFT Worlds team.",
          "icon_url": "https://lh3.googleusercontent.com/cdYxiSmSB7iLLl8zMAX7PaTtq5NsAkJz2TFkn9aJATR8rjuCczf2JucdEyXmlLLDJxMxbSkLAAkfLSxR25mXaDoAF3QW3MORuOAN",
          "banner_url": "https://lh3.googleusercontent.com/hUFM5Je9hUAuLHOuEJ6ake5sVoVe0mX8HyGA1uaSBQIza2l7Tc9DgqMm4nK6JfR47FV6RSZvN0QzMTZFt4TTzL2qH21F0hSrWA=w2500"
        }
      }
    }
  ],
  "next_page_token": "IjIi"
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
    paramName: "address",
    type: "string",
    paramDescription: "[Required] Wallet address",
  },
];

const REQUEST_PARAMS: RequestParamProp = [
    {
      paramName: "chain_ids",
      type: "array",
      paramDescription: "IDs of chains (using Lambda API names) that support NFTs. Default: all supported chains. Max length: 19.",
      childrenParamsType: "string"
    },
    {
      paramName: "collection_ids",
      type: "array",
      paramDescription: "IDs of collections. Default: all collections.",
      childrenParamsType: "integer"
    },
    {
      paramName: "with_meta_data",
      type: "boolean",
      paramDescription: "Whether to include metadata enrichment. Default: false."
    },
    {
      paramName: "refresh_cache",
      type: "boolean",
      paramDescription: "Force-refresh metadata cache. Default: false."
    },
    {
      paramName: "page_token",
      type: "string",
      paramDescription: "Token to retrieve the next page."
    },
    {
      paramName: "limit",
      type: "integer",
      paramDescription: "[Required] ≤ 100. Number of NFTs to retrieve."
    }
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "data",
  type: "array",
  paramDescription: "[Required] NFT data",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "type",
      type: "string",
      paramDescription: "[Required] Type of the entity"
    },
    {
      paramName: "id",
      type: "string",
      paramDescription: "[Required] ID of the entity"
    },
    {
      paramName: "chain_id",
      type: "string",
      paramDescription: "[Required] ID of the chain"
    },
    {
      paramName: "chain_id_numeric",
      type: "integer",
      paramDescription: "Numeric ID of the chain"
    },
    {
      paramName: "chain_name",
      type: "string",
      paramDescription: "[Required] Name of the chain"
    },
    {
      paramName: "amount",
      type: "number",
      paramDescription: "[Required] Amount of tokens"
    },
    {
      paramName: "price",
      type: "number",
      paramDescription: "Price of the token"
    },
    {
      paramName: "value_usd",
      type: "number",
      paramDescription: "Value of the token in USD"
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
        }

  ]
},
        {
          paramName: "traits",
          type: "object",
          paramDescription: "NFT traits dictionary"
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
          paramName: "spam",
          type: "object",
          paramDescription: "Spam classification result"
        },
        {
          paramName: "raw_metadata",
          type: "object",
          paramDescription: "Raw metadata as returned by the NFT's tokenURI"
        },

  ]

},
{
  paramName: "next_page_token",
  type: "string",
  paramDescription: "Token to retrieve next page"
}

];

const USE_CASES = [
  "Display NFTs owned by a wallet",
  "Build NFT portfolio dashboards",
];

const CONSTRAINTS = [
  "Requires valid wallet address",
  "Only NFTs on supported chains are returned",
];