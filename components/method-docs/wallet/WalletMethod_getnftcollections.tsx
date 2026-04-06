import WalletMethod from "../../WalletMethod/WalletMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
  PathParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getnftcollections(props: GenericMethodPropsReplacing) {
  return (
    <WalletMethod
      method="Get NFT Collections"
      network=""
      cu={1837}
      description={"Returns NFT collections owned by the specified wallet"}
      url={"GET https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nft-collections"}
      isRESTApi={true}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      queryParams={QUERY_PARAMS}
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
  --url https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nft-collections \\
  --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nft-collections", {
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

const res = await fetch("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nft-collections", {
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
  req, _ := http.NewRequest("GET", "https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nft-collections", nil)
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
        .get("https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nft-collections")
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

url = "https://lb.drpc.live/{chain}/{key}/lambda/v1/wallets/{address}/nft-collections"
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
      "type": "nft_collections",
      "id": "0xe7b9d5a2b01b23985356f521e0f5016eec201234:78095",
      "collection_id": "78095",
      "chains": [
        {
          "chain_id": "ethereum",
          "chain_id_numeric": 1,
          "chain_name": "Ethereum"
        }
      ],
      "attributes": {
        "name": "Forgotten Runes Wizards Cult",
        "description": "The Forgotten Runes Wizard's Cult is a collaborative legendarium. 10,000 unique Wizard NFTs, fully encoded on-chain. \\r\\n\\r\\n[Website](http://forgottenrunes.com) | [Discord](https://discord.gg/forgottenrunes) | [Twitter](https://twitter.com/forgottenrunes) | [Book of Lore](https://www.forgottenrunes.com/lore) | [Principles](https://www.forgottenrunes.com/posts/principles) | [Goodies](https://www.forgottenrunes.com/posts/goodies)\\r\\n\\r\\n[All Sister Collections](https://opensea.io/collection/forgottenrunes):\\r\\n\\r\\n[Sacred Flame](https://opensea.io/assets/0x31158181b4b91a423bfdc758fc3bf8735711f9c5/0) | [Forgotten Souls](https://opensea.io/collection/forgottensouls) | [Forgotten Ponies](https://opensea.io/collection/forgottenrunesponies)\\r\\n\\r\\nWizard NFT holders have not only the _image_, but the _character_ of that Wizard. Day by day, the Wizards in our collection come alive as our community builds lore, maps, stories, poems, art, and animation.\\r\\n\\r\\nJoin the Cult",
        "number_of_assets": 2,
        "total_floor_price": 2302.322682,
        "icon_url": "https://lh3.googleusercontent.com/CeU1eMzjrYMG1CgdODpR8o6Av8aXUrUo3AayfZhWb-WKRCMTmg4EfHo1_fQ1lYOZBmvw9SpZB_8MdyZjkQfvTBmdJC9BLi_QHA",
        "banner_url": "https://lh3.googleusercontent.com/saANtWqFOM1vMCWN5tDoDIqyUeB35Rp21I2za0q_zXIiNL1SifGbZC-gWLD3ZvEmrXV8e6fsxW0oEXM67BRzzd-a_8-MTeoE8NKU=w2500"
      }
    },
    {
      "type": "nft_collections",
      "id": "0xe7b9d5a2b01b23985356f521e0f5016eec201234:325315",
      "collection_id": "325315",
      "chains": [
        {
          "chain_id": "ethereum",
          "chain_id_numeric": 1,
          "chain_name": "Ethereum"
        }
      ],
      "attributes": {
        "name": "Loot (for Adventurers)",
        "description": "Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.",
        "number_of_assets": 1,
        "total_floor_price": 318.640146,
        "icon_url": "https://lh3.googleusercontent.com/FhUGCaGIf0M44m-APikvSyXfcG4Ej-oQxv_KTbPccf-C6vbK0Ql9zkT8RQDflag97LpIedCqrh73J555KMkB_ZEywSGi5YuFFg",
        "banner_url": "https://lh3.googleusercontent.com/-cU6Juj7ohNXxk5DQLzojqrzvZMSNq0L60OQOhUz0_4Xktiw4PxcWqgurtn8BZ-HMFtuAqMnZ20XzoLUwUk9ZYD-RrUHNbhqThE=w2500"
      }
    }
  ]
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

const QUERY_PARAMS: RequestParamProp = [
    {
    paramName: "chain_ids",
    type: "string",
    paramDescription: "IDs of chains that support NFTs. Default: all supported chains.",
  },
];
const REQUEST_PARAMS: RequestParamProp = [];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "data",
  type: "array",
  paramDescription: "[Required] NFT collection data",
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
      paramName: "collection_id",
      type: "string",
      paramDescription: "[Required] ID of the collection"
    },
    {
      paramName: "chains",
      type: "array",
      paramDescription: "[Required] NFT collection chains",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "chain_id",
          type: "string",
          paramDescription: "[Required] ID of the chain in Lambda API"
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
        }
      ]
    },
    {
  paramName: "attributes",
  type: "object",
  paramDescription: "[Required] NFT collection attributes",
  childrenParamsType: "object",
  childrenParams: [
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
      paramName: "number_of_assets",
      type: "integer",
      paramDescription: "Total number of NFTs in the collection"
    },
    {
      paramName: "number_of_owners",
      type: "integer",
      paramDescription: "Number of unique owners in the collection"
    },
    {
      paramName: "total_floor_price",
      type: "number",
      paramDescription: "Total floor price of the collection"
    },
    {
      paramName: "icon_url",
      type: "string",
      paramDescription: "NFT collection icon URL"
    },
    {
      paramName: "banner_url",
      type: "string",
      paramDescription: "NFT collection banner URL"
    }
  ]
},
  ]
}
];

const USE_CASES = [
  "Display NFT collections owned by a wallet",
  "Group NFTs by collection for portfolio views",
];

const CONSTRAINTS = [
  "Requires valid wallet address",
  "Only collections on supported chains are returned",
];