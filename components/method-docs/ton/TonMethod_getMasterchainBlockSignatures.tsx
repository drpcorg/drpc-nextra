import TonMethod from "../../TonMethod/TonMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TON } from "./constants";

export function TonMethod_getMasterchainBlockSignatures(props: GenericMethodPropsReplacing) {
  return (
    <TonMethod
      method="getMasterchainBlockSignatures"
      network="ton"
      cu = {100}
      description={"Retrieves the signatures for a specified block in the masterchain."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="integer"
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
     --url \ '${DRPC_ENDPOINT_URL_TON}getMasterchainBlockSignatures?seqno=41089440' \\
     --header 'accept: application/json'`,
  },
  {
    language: "js",
    code: () => `const url = \`${DRPC_ENDPOINT_URL_TON}getMasterchainBlockSignatures?seqno=41089440' \
     --header 'accept: application/json'\`;

fetch(url, {
  method: 'GET',
  headers: {
    'accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

const url = \`${DRPC_ENDPOINT_URL_TON}getMasterchainBlockSignatures?seqno=41089440' \

axios.get(url, {
  headers: {
    'accept': 'application/json'
  }
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));`,
  },
  {
    language: "go",
    code: () => `package main

import (
	"fmt"
	"net/http"
)

func main() {
	url := "${DRPC_ENDPOINT_URL_TON}getMasterchainBlockSignatures?seqno=41089440' \

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}
	req.Header.Set("accept", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error making request:", err)
		return
	}
	defer resp.Body.Close()

	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)

	fmt.Println(result)
}
`,
  },
  {
    language: "python",
    code: () => `import requests

url = '${DRPC_ENDPOINT_URL_TON}getMasterchainBlockSignatures?seqno=41089440' \

response = requests.get(url, headers={'accept': 'application/json'})
res = response.json()

print(res)
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "${DRPC_ENDPOINT_URL_TON}getMasterchainBlockSignatures?seqno=41089440";

    let client = Client::new();
    let res = client.get(url)
        .header("accept", "application/json")
        .send()
        .await?
        .json::<serde_json::Value>()
        .await?;

    println!("{:#?}", res);

    Ok(())
}
`,
  },

];

const RESPONSE_JSON = `
    {
    "ok": true,
    "result": {
        "@type": "blocks.blockSignatures",
        "id": {
            "@type": "ton.blockIdExt",
            "workchain": -1,
            "shard": "-9223372036854775808",
            "seqno": 41089440,
            "root_hash": "ZcjQ3pQZtjFYGY39J/WrQH4X3K3m+624g5Q1Zc5YP0Y=",
            "file_hash": "BspNU6iMUc4hbsQUDtXefU8c92cJHJj6yZuKaTWRjVg="
        },
        "signatures": [
            {
                "@type": "blocks.signature",
                "node_id_short": "lFGx4NzAhZAoT7W4nYYqoUZ1mqebF2cAY5zt0N3YnJM=",
                "signature": "2nrIitGL3YTM7+C9MYrt6LkgKChc6R+oPXGFMEBjYr+QKtQxSZhJYodUBbutZS1tjT/zpQRadAoqr/bIRAs3Dg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "ikR0MkM8c/DUbjv97Gei3fnQqX8j4Ex8F7bHxmvjHQw=",
                "signature": "EondcT4VH1L49l4ydFJfizSDNwg5unnl4sgRXv8DpLyJLUFw/lpOBTm+tNExilmr3kz4V01a8Pb6pbOfva2DDQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "jEvamvxDOboCsa0pl0Y+Wt8Uag8yzzT8P0nXNJ2h0hg=",
                "signature": "YMJymOrgoJ4eOBetDJHVV2iiqqphXidtEOh5se/h1L4LQHQ70sJLfbRCHLOKflBl6ZRLqn4E21AKCszbafYYBQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "tVj1p1V/dHzclMjEUAPu9Pmzhu3D3vXYdoxgQSWNquE=",
                "signature": "5VK2k0RqKajxLVNUTU8I78zSsQXcLLc8971Aiu4di92jkojiKAynO8Zl3EbYu850HtFMV7gGKKRlp9R5nLwSDg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "jZwaXhdMz8jo9QmZqGHDzXE6GfXFShtuVJnHOIhUb+4=",
                "signature": "qDchjRP9EgcwS9oyAfHdo6TXrdtNQbI7wKS1fnk+2TpdtCeG8wMliD4my6sxDV1KJKSLpGwjMGyn3IbpzlamCg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "DhQ5erj5Ou24YyidbYpM4j9ZzFUYd1Opn+gQ1/W4fkg=",
                "signature": "6Ks3DXchMwHB2/wsFxX6qOBnjF2UVZXBNDV9yZ7mLV1Ap2TuE+SSLep04OYbVW8FALS4oAtfWPkiBjxLKXl2Bg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "3/Sudqh1JVcV8MneO1a/jYSY3UQjH84n+u3p1j55850=",
                "signature": "Uqd0JETlp0myZzN6b/7pT7cCeyDXVjoOmkWm1wLIey0BOWhhkOpE+mnEu/+VFE0bBXH26k67AyD5CWx9jWWtCQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "aGA94U8+eQZZGhzz8fMrXKhOYtERoUEOMejcLDz1Gqg=",
                "signature": "C3B/o5lUho7SqQHAuNgQnTrVjD8rH87BrKyYEklYyH7DfvbxB1UXGk4CewaIm4hAiQkfRF0MxyeimO09ysGSDg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "g+XEGZAgoHqZqIzoF1o1g+PyuHucVW8eFhSkUgoj5fM=",
                "signature": "ikycu+V8X+9aVhqAP02yAc+hP8ZZMsH0C07r/RsIHOwVhd/HsApy/rKr0P3pexRtOk6976DAbZ0H51eCRUPCAQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "D5k8G/m+9JLT/HZ17czXQdVy0dgf8rYR5Ech13XL67Y=",
                "signature": "jeWlbpTBQQ8vYfQdKRUB4pj1IEtlB4C9mc4jVUy577pOoEAXsw8rv6obqypdV2OJZLM4dekdd5Qiik6toPUKAA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "GVSYWIflvxGfzKkogUgewLExs4nSI98MAOiWk8VnwAs=",
                "signature": "XPDTb5arGrZMnqx/936yaQYMt5uM2bgWS6pIYgj7X9a7zXs7+sCeLIntHmYPvHFq8Ebw/EFNfRjBBXBzAu/ADw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "+28m7FsvnkIinnsAdhWnQ9qAi+Ir4nKkOhXw+kraIYE=",
                "signature": "24mV2fhj+k1rg0v+g+1/8zjq+dHsgEAZPHhdyA8qAMfR77oBoVKp02kyTaxrKICWx9mzbn+T3JLIKX3S+tSbCQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "xqBPlQhNyZ5iYsohGL2bUNIkMD7CjSDSinZvlneLhsU=",
                "signature": "RbGtlF/zQwOvCByH6JyAuj9ZiXDQ3fO2ZP9zwUlaCp3WjqlODDAHSnf9fXObJSoD+94NFzuVfbw5b2sU1+hICg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "JFEXSAaScNEbyZbnDV0wD5hub9e84hVrUxy9MeHXSwY=",
                "signature": "d0XX1D/y5T9ZUMs0dHE3fp6oJYSLtH+a/C9AAypmGYOX+cWR1y/cVms5tOv3UetE1mZwBMl6QJT8d+mCMv8SDg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "i0XnIGcMhSMw/OOH9W6tmXalXVNDjfXRIaeJdwrdwYQ=",
                "signature": "MSjwTEAbYvhJSqCzPgK0sUcs8IQAIsQ+KE8V8J+EPzu1ml8QSo/g3UoT8sFz1drgYoSPADmXP6BvlJ71fsAwBg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "89KWHkS7D8wfMByEgRQcBE6K1ZwlPJOqnSsrij3V7S4=",
                "signature": "LIssR/QCCL5OAJMv/94UryiL0h7/TAqZKtsxCoF+ILGJTMSBqhb14e2N2FCrZVecTSF6iRAC6bDhUDu8sCq5Cw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "8F4E17PRQ6VSeHvfb3ZQlkUDOEepoLYbBXy7iUNO9g0=",
                "signature": "aAqIbV3qRFuHbD0c6yETVVOLCJxtxn+uztajb/5gXU36UHDs8AuHgJnuOgaSmu6FmfsnPbKXrQV6fApE34I8Dg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "oVw/noOaMLc6O++46H+yaWS8PrkJKea91KNu3y6xgHU=",
                "signature": "Bfj7F9upZZvBZ1hzAk4fioLAS2InxS/lmgVfD9MYiQzaonzLwHMK4KpGKk/e0OZkZQxcbto0hGdglItkpdgQBw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "/bVqXr8/apK5lhlNsd5ccAVz4gsSEbPjlI4x3Ff2Ct0=",
                "signature": "pI17phJQTXSvI4HvopT9H4jOK22s3s6l63CfpZDfe6RQoxoS6Him+jus9pg4Qc0W/8fUSmZw1VkvLTNcva9ADQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "9YSt58EoVsoEPztZ3bcXcsZVS5uxCKK/yi65fcyXaSo=",
                "signature": "Pv4Wc5CuzWugD6949zv76hxOhIQH3EKYxmjUmzZfzgLRZVIn1RGFNoP+YX+yDEEno3VaCJnKPcj5hFaZayUJDA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "vwIzBGTmAfoDz9w1/oJlZTSzJJgQPDDQyp/oUL4KH1c=",
                "signature": "ULj31sLxhXvVIU8ArDd5TyugBUqjo2ICCA2Xx9ohja+Dy3ol41GwkliwmNUZVJsil/v1lpC/u/4oED2kqDIXCQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "QdfQSNAgi8UeJ0c9bYTk+J/CY89eiXpPJz/HRHTJo9M=",
                "signature": "lDOUDSKGPi2w0gdCNecoEf9Ekx7qlek0oGN8NhtmqQUhnAOT7wCy+jHWp7TZuHFZKgHF+dDnYmX5E0HS3DMfDQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "kqUcgioRATqmGZRZ1Ow9g3IpF7ahTHCrK0sQ9d/O+fk=",
                "signature": "+JsE25E02Zji1/B4+zEkeiLftNPJoPghF09PNTLRKV2gl7azM7vqERmXJvWgC+8CKqLd9XttcBV8aU0a3kNeBQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "4Mdxqo95GSzfKtPNia4BLTE2u0BursAbjIST9SUg2+8=",
                "signature": "P6DBAO6QWHZbPQAWXVAthTZh/+tyJkjFUfaUlCeSPXQgTKN6wIlvB+Dldvd98tVhla1fRT1dMHT1r2Q7fbVeCQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "fuLz04qz0fkfzc+PZrKp9BehNF6oXiy4fw9mdR6gtKk=",
                "signature": "pJQ+k8a6BGts8NyVatoCAp/vlKXOMoszm5VY09KcaDljmNN5HB/K1A3GXhgJ+KArsjDwSeEUNL74zqeEK/NDAA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "j1O+8vZYnEMxD7y95ZyMcCuuKNQUolYXqaqO9VCXrO8=",
                "signature": "XW8pDs2eBUzrtDFzsXmbzSEjHkfYkd7E66wEHQ3FaN6HYgBSjhanK/nxCYc2l5blmY5x4YYfU8Z1IwQbBA1pAQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "FtJoyKtqHk1QRxqkMD8tK1/T33I/yBfTuQTyvpuq0d8=",
                "signature": "2CRFM/8YO2nfTIpWWD0lsHCbdhwfMNo1kh06Lf1GmJoIrA3z9fsKEzlFxg4I97YalAZQIHoRieqJ8SpeutrTAw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "Y0Cybg5DOHG6cJsS+yCtYqUQikgbqzjRz1IaJ7F9CS0=",
                "signature": "JjEKtnZ1CpbRxGMZ6h7dX8MqQodkgN96qnlKevJ+Zlc9smd4/LxQOreoXNtf3HiG+6B9OvqLIutb3lv37fq0Cg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "9Rf6H95SAg/n56vpsdlnwL6zCWjHRA4/R4gE8oc6rGI=",
                "signature": "bSt6ineN1pAStTQ/BWB2WuXq5WJ4OkF9LkOnlEGCgu4w6czQvgYxsULDS5fysDGYv76doa9FjRY6WBitqWlqDQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "gqEP8dGyZYzGzkvOzFwnO5+kGLBP5o+Ak6vWAEAuCpc=",
                "signature": "W/GqlPI6HgZRccK4mGBMS1cl4VkJ0l1xLyjPQ85/wFkYaH3EDqW6BvLRkMYADcVA5ech+VSHLXuOQoAqOAsZCQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "4Sh33VXGeA8VzMxNo+Gbw5+a992kxK+dH98Y/8fqSso=",
                "signature": "66TAUGw5/ao58z0VojR3piZF5CK+V5IvHjoy2s2BlOpZZgCaYU0fsz3HHaYqggnkfas3BFT8FpedgvDl+7cZCQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "b9Y0ZFLoaB8EmXXxEvgUerJJgfSeaUQresAkkM0db/Q=",
                "signature": "NaRE2PWGiST2RaNOGAGBEjs1THa4E6XlJcDQME8U7SYdbmgjyxZxF1T2qoURQE60JiEAP9uDLWVnc7+Wwt/ADw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "+u89AXCgXwt86fvHJJbdHphrC9CZu379GRIKA/bJUOg=",
                "signature": "l1oqV/z0FjCcgXAMYaFE/aHOvhd2YDhAPa4WgQstJCgYyoGZrhN8Bt+CcFtRphlQWsnZEn5Hbk/+6zpGpcFJBg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "Vj4w85rZiqAXkPTWViw7fClZWcBuWy2eYtQN6lX1P9Y=",
                "signature": "Rcwlcckg55guJZJJStpIQ0PhosJqeyFNsS7Wly8I6WQFKtUYAOXyMMEr+7owkNRgGy0hyWmiYbKLu6wdHAZhBA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "bdlylSXpcHvl87lD/dS+QayQm4MRHCVFrSTdcC+C1u4=",
                "signature": "Kz3z28tZ6WZe1frEacvcy3IkOzucki8Q95LhWTFmfOmYulRfVS/pSCqhrttOrHzuNO9MWHwwgrqeYo4Nu8fZCw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "oU3Fzswa1vyGl072LuDUyFEEl/RIzoQMMnG/o+gINmk=",
                "signature": "Qltgy1K+9FVQl9uD02rwQ7pULuk3g6mxliMpIcMfUZMg2bMnZU2RDwXEx2zW6IXi78BW0PMfoeu7b9fGdbTyBA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "t8WbRYuQzz/ZhKBYhx5Dyc9uB1tXSNMu0/OXRrjWk6w=",
                "signature": "tk1WDVr9liBiik6gqYQszsrHMOotmX/A/R+IK6ALFU+M9PmRgyGqSaBEzOSSf5zC/kJu4BZ9ye++jNGKZ+pFBw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "QZtHc4pdgXSbmsZZWtn5wOejkKfELyg03hG5Uw0ej6U=",
                "signature": "trBwncyLARJBQvbzvjzYXZnhv7Op28hxQBHO53EvKv/BSy64CRoRrva0uh7suFMvAh0JALB9bxcRN7zzuDh5BA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "37CBPAhJuAUobipdRc3MK5blzgs9SmYWf4dAknN42ms=",
                "signature": "6v/0LZQeMIqUQWvexrZIlw2ZaFDXsAuOG3H+TI595U5AZuPJswRDHms9fBznPutIGGDotTQIp7zDIon4R5D1CQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "SAuEjjK27Z5cGz+Ve7V8rfPpQqa/aI2m7x9MBmQxZSc=",
                "signature": "3am6Evq5ySnLtb0/Z2XF04Q3T/2QW34OZibQSMjCe36+gOs2Rm1GEIUKSAk/Xnacos26AD74ga2x5Qfcm2GeCA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "uab7ObhBNMYGSmHOGaK9iX7sTAen47igbSWzwGQwKN8=",
                "signature": "HEbcWI8xHw1UX+YHtvwyDjl7EXfmZtqYBxCby9T1Bo+G268uwq33R/H/eXHQoG+dslWToDjzHwERW4KLmxwwDg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "pHyWg9P9+AcLLAVAvrEPwKYTMfwijyGwg3zn1Q8rOqY=",
                "signature": "+PIstBrJ0oJZrTqAeJ5Fng2agiBxeDVuEMF2y+aLu2AFx+dZAqSNEig+rxjlTFw9JYX7Rjvrt3D7tHm4wGrWCw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "RtArYdkMiYtTZHfoEYP6ljlGJKqjgrPb6zXmgs/72+g=",
                "signature": "KGe32r78FuRw2P9FDEe9xr2Z7mx/8pbAxtb4L81LI35zPaSqagZUTAC9RBRLr1/x2SzUCs16zjWtD1SSYvwhAw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "hZ0Cm9EEN1nsrZxfX/EEr8ahlNyu2WY0sF6Kgt2FFa8=",
                "signature": "p7TxRoZ1QFhH4c68eXCvG+ILzWTJEWZgte5b2ih7/vnzrKIC8NQwkXNLm8DfYCUXitmxyFLsMoZIDWvWQK+nAw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "v0+BOZS1egvky3eLIYSXbuyOS1qegaSZzIffdZQ6GGo=",
                "signature": "P0xWVgzg7xqwXkYH5DxBofbgUgyHBIScPpCnz63Jh9aQP/SaXn+8i+EF84sA00M9ysCbNXk1SSeaIngO3GOaCw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "P911BNVGHIUkqvgdfIBkLCZOEofdDurooD8gnpqOaIA=",
                "signature": "siX6j0TRUwkJ4ge8C4o0HOiGLJ9Iz51+4kRtbQRYcKNHbDCyBSCTd5jrtJnTChmfFpr1UVApG5PJRc4vCut9DQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "qjZP6syjC/26/Y2rfW0ibrcgG7ysH+roG8TyjznlxNI=",
                "signature": "i14aR7c1Hqn7PAT2tCf/gsk+QjFkMrCZnC49p7Ul1wu3ZSVr3KSVwT2VTrN2QlDnFLnXo1Fhz2qvwxJZBDUMBA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "LYU1PXr49YwYlzb6nXEhyuNno9xhRXHDcH6396ngjrE=",
                "signature": "2iP/h0zONNDqbjf0Xs78hpPzcTDwT3qqN1/QaAUbUL0hOoouqHg7JZvCga5tytiraV/xYgfNWSE5Br3Wth99AQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "AJEIK9Dand+kjpCxp5bD1T0XQ2Txq+XbU8sF/ZhhNwo=",
                "signature": "hsn66F2TzcViOJYESrv36m5tleAaYLbxYphh5f6QT+bgqMbmbfhDpmqtAp1DZ73+S2qQJF+yhYZt+SkO8eK7AA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "opUkNNF2X7ZL0gaJzBTyqykxjT9RgVN7yzMM3whZ44o=",
                "signature": "6Aaxi0bxZSyqerHx6TKkJ4m+QfgV0nWHswOU65OY8U8YmJ7UsVlObp54HTz2wcItD80+kdwKKFiWCMVBYaFoDg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "i6VQwvtxmx0x3AXXS4GDmfAbIajWG96cDzaal+n2NVY=",
                "signature": "+fcb8gTJFpA3ynLLiFDksXvFevHHhTnOXI96c4XNBRaoznAnpGCBujV4Sv+3gi4e5AXKPkFajXzUNbUq9Hc9AA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "kqkKB4nK2wex/y1ScThPZ0c/hCdmj0fvSZFARlngInE=",
                "signature": "7X0WO6xQLBzlFDg27wXSzVtGrIExFEthU7qKybPHpa7bGw2LHrooQaoz0TREiv/Qgv4OPS2dF+smLTBCdvPBBA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "VQHAFXgpSiFGdA0cc7+/R/eh3USpTnd+eSbLqi6OhyE=",
                "signature": "cn2zeaSRVRs53gJG2jsNvMcJ6Ps97GW6wRZRm48G8HXjpIa/fDspJ/CXzthgdwDE6FLKA9AML9AjyqVbjIjpAA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "of3jxPmuVOi+rOTYDck4XNGhmd6Zf8Bg7nfGNJM2ZLk=",
                "signature": "K9N4GMzZohh2rBh/tuN+fTtrSpFYbNKtYLsucbFkt4FgNMWPdnq/6CvkaznPx6TtGUDr2c1+ezcZiEs3inMaBw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "iQn3zBwkOnM1rMYav25s6bMYd3qG+chDgjIejR1m2ek=",
                "signature": "7zeuTq4t+h5Di9DTp0Ik5tH0hYJ4pTdrPViLZv/STYcTC/JfysKAzCAMxLiIqRiU/VlvN+KOJRon6fUNquNQBg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "k40KNtGhq0H0RP4B90bAJM0AD+hOT7nbcXNirFhQPx8=",
                "signature": "kN8LJ7uv+1OJwsNOjRbpM4PRSDTwOrUOSy8/IxlAh9clwTwTGWmx4k/+7fO09CokzAHS1clGBWsVP5q7k+1UBQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "2OJF7zRBHvb0F+oKH66wh0ANpPVTTT2wVz8jaFRlNac=",
                "signature": "UE3pXKvzRnJmwIlm5oxfU2wwfZrn+9O3AJ5bRBwNeDPYM1ab2NPpGRmdT8Nduk02H4xHjy1KTrV05Z4hIdXyBw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "wjGg5Wo0iHrhI9PQlOs+wa+bzYJHUzUDr+5/uyJQmdw=",
                "signature": "f5Dc0PIcPUzQxXnLnPRe6qv9JbW7pZF1Z5KtL8oW7jrKRpu7vhcmLD1k7Xf1xVgnoq2sBMLoW+Ib6r7YWQfKAg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "KrU5hL3bWwQflcFuxQygxuUOlHiccUSmZ4vieUZrpd8=",
                "signature": "2n5QGviIuhtr1m+vaqmogqEt7DS6MhgTK8os47Otyn+3MzpIzdOXAyjiwdBBIlN0A8c0YGkcurUiG0N3PQvvDg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "9LHzWYVgd15+Tq/D7nqp85urSI3zk812LvW1CKh8ICw=",
                "signature": "wuO0jGFRiCHlxxN0jszX1vlBBXBwSy/qdGHcPwsBzpvXuCbtLRqzNuRV7+k8eNV/ciME1O/6AkoyJVXf9d0nCw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "H1cgWxhufu3ZY8vI/BnU3iAC5m1vtvIbKzb5ohg/2wQ=",
                "signature": "mLzuNoLL+DQOvo8nh/1EHmziK+2J1ipmZK8gxu9ywQIG/4R5pCoXZRLf3SyhHkrMPfDTLyWIwDvT79pbJuchAA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "CdWKpVJ3I/UAU17bAL5jHZ2cwF/xXAAul7jWFbG/6Pg=",
                "signature": "aLEJNG/Ujdn007XNEVzPfWIlMgofH0F3ITqrBJfxmMgdcTyvY1vkeA4/eXWa5iDneqHze7fSyP4tjNNiCrRlBg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "9QkyYffknEdXTcTYSgkIfXRwNMngIrfLff3EcSS+gtc=",
                "signature": "6hY8nLKLGV8yMjQ5FY1VTwhsW2OX1sh7byCvrResxMUjQZmBIGRT+SYfKIBH2HhWo04lKB/5sR53MpnP9XgpAA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "nrHbr0yRkPDhM7h6LGt6YXUEM0I89M2qADiA5uZipOE=",
                "signature": "GkNKQk1oz7ndVOulrqU6Sw4dnInkcvs+Gby4SW03jlzdJkcOllmRc1a40x/CXbXLlV0og1zIT2uRdxUZV7JKCA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "/LoT82m/FfDyhb+NNiE1WfqSwFfqeaLfU0xFUl78HPY=",
                "signature": "i79M/3n0maB6cPWG1PfUGlTDbVewxmQKBhpirYEuMhkLAouAij7RPKT5+O9nHdAoUGgQ341+XMpepSAScBsAAA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "rgUFkP4c8P4+XkKhpCYQoYrZryLhTKHo456wOm/fRe8=",
                "signature": "okGe7LmoFxYkOPyb9X7Yojed1kQUTlUXiURQBNwdVgR3xBnk68wcyt9RpNPzs4fuvUmnuvrHhtqBySmbNszdDw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "LdNx24cL0wdPUcm6gfmbOLA8K/vWPGtJEjWxdI1Jvow=",
                "signature": "V4RSFZrb8TOOfxRFm6yptG09V1UUdTd2totUq+x1Qt5DwD8ssqeUfoi2GSXseW4QIa/c923xJ+t0Hxlap3GoAw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "zUG30h/J84CpTe5u4oMqkKWMKQG4voNVYSBImeqcof8=",
                "signature": "IqKfIMJNkTKLedXL1tlPmAJZ1G2BdfCQZ1DL7Mg/w+Am/upm5Z6iVa7wlpr9iDkdJ+O1nwih6PrNADQDgWP0Dg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "9rfNW+jM7x3eXjxCij6yCtuaZe2c4z/W+FMmDh8EXZw=",
                "signature": "UZm2JB/5iApZkqSxp0KQ767rALefMYGmhWM9a7f5KKxGhzTpXaetMy9BWkNKVes7hiBGAP9NVxV4l1Fy6FsmBA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "HXe7ooRwUAWYcNJqUyixvWhf2sbpHC2hS07liQiv9uI=",
                "signature": "+/lcTaeYKs+RUEi/JAPVFakB9M6ZAhr7byzHUTOZiQb5s2dt5LerpORwTZ1eK+myQwwg0VHJ3eKMT7ZtEt0ODw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "BTAPQJbfUIocN0Er9EnBZnmedOZCQKqJ9eBl40xfRyY=",
                "signature": "2emShqvRqIc5YYCv3uyhV9Jo5BpvO4ALoF0tsQdUCIs8A4F4ceH/2IT61iwueCdVa46IrHv+VY86fM4Pvrl7CA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "Jf8Q0St09ovPf7RJUvs+BjBTHqEagz+7PcAIiKIoTdA=",
                "signature": "x05rsHvj1eT0uNIM092qFkm/JOjbNoGCRldGiRYOecuyt2gjm5pkm/jfdfY9saMd3Vsty95NxGvYajd3WoYXAQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "98KDSADJgxLofTbpitwCrUWytDKDRvBvsslZ0pMM0Qo=",
                "signature": "7sSyFXqRbWbg3KfgbznspZLB/s75YUrbkyWhAI0wIvQ856YWP1j037uCynqGnKki9fGaWh9+Ijxs1jcJsBr6Dg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "izREoKRHtTciZCCjzF7bYbmsK4EnC6R/3sVa7NLPIyo=",
                "signature": "Bb3Vct/rd5G1ujJQAi9VBdUmPhVYJ2BuqmTKAML5T7KFUw61gess43udbD4j0fmP2scyoTK/P4gDZCG6JwQ7Bw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "E2Zf/qohrIM3mRyJdO9gdIUminM29l94kp8poN8no1I=",
                "signature": "vJ+H5PTfihaZJPrinMCvT5Uj21r5y0A3o24odHMj2Re6TGtn6NrRpGFOkW20tGw0ibPeUBPFn5lypEq9mGydBA=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "B1HJreC+zEyO/GBfLD54eaeizPLa7RwCPFqXjnuiRN0=",
                "signature": "e2cJvtCGi1nQBPrFtChIU0hevVL/KBHhghO3oD8oO/AxfmrVDKI/tK2/bEmsiv+Gh95V6gyANPffUtuONW1cAw=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "CjFLrhlxMLN3w744b+a0gGklVqcYiMGni5t9s7zuK8I=",
                "signature": "20w0Hih7a2K7KKRiN/p+lk93ZP0Sf7rn4FsN9+dWbTDN3xbryCoz387JyYZFCP6FEj0Ox6LEkZpYml8/wozcCQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "SMipC1rWKxc/qoT5l27o7CeufxQXdcoActeQYl4q7wI=",
                "signature": "woARoatQHjntJ0N7yvZOUyPxh83aq8lgOAby6REtmLROSb3zbp/53A3zznys3l0vtzT2o/o//OME/ywNpjh7CQ=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "O92yNF8WfQPnUH2+K+9HVX51SofIo5MZCJBGZWeEqyc=",
                "signature": "BgPm1E2HPKSVCDR9FvuwG+uMOe8W94z9jmK9aEkpe4m9vdcZtkTJe1g2I05URk135/JCDZRcxmv/UgagAg36Cg=="
            },
            {
                "@type": "blocks.signature",
                "node_id_short": "N6KExjDh58GmD2YGSXFVXB65F1RuoXxUsFqtupJw5FU=",
                "signature": "EUJa48zVAy7jLkeAwWcmyo0xSxN7li58i2Z7eCO2a6fMh7I6/ZAHiOUy7LAzpjkrCUTBM+euEVAmtGDzPTAyDQ=="
            }
        ],
        "@extra": "1730410970.0881805:0:0.718530258924173"
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "seqno",
    type: "integer",
    paramDescription: "The sequence number of the block.",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "ok",
    type: "boolean",
    paramDescription: "Indicates whether the request was successful.",
  },
  {
    paramName: "result",
    type: "object",
    paramDescription: "Contains the result data.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "@type",
        type: "string",
        paramDescription: "Type of the result structure, indicating it's block signatures.",
      },
      {
        paramName: "id",
        type: "object",
        paramDescription: "Details of the block identifier.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "Type of the block identifier.",
          },
          {
            paramName: "workchain",
            type: "integer",
            paramDescription: "ID of the workchain; -1 represents the masterchain.",
          },
          {
            paramName: "shard",
            type: "string",
            paramDescription: "ID of the shard, represented as a signed integer.",
          },
          {
            paramName: "seqno",
            type: "integer",
            paramDescription: "Sequence number of the block.",
          },
          {
            paramName: "root_hash",
            type: "string",
            paramDescription: "Root hash of the block.",
          },
          {
            paramName: "file_hash",
            type: "string",
            paramDescription: "File hash associated with the block.",
          },
        ],
      },
      {
        paramName: "signatures",
        type: "array",
        paramDescription: "Array of signatures for the block.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "@type",
            type: "string",
            paramDescription: "Type of the signature structure.",
          },
          {
            paramName: "node_id_short",
            type: "string",
            paramDescription: "Short identifier for the node that generated the signature.",
          },
          {
            paramName: "signature",
            type: "string",
            paramDescription: "The signature itself.",
          },
        ],
      },
      {
        paramName: "@extra",
        type: "string",
        paramDescription: "Extra information related to the response.",
      },
    ],
  },
];

const USE_CASES = [
  "Get signatures for a masterchain block",
  "Verify block authenticity via signatures",
  "Analyze validator participation in signing",
];

const CONSTRAINTS = [
  "Requires a valid masterchain block ID",
  "Only provides signatures for existing blocks",
];




