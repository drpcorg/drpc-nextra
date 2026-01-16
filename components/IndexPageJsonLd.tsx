import Head from "next/head";
import ogImage from "../public/images/docs-og.webp";
import { SITE_URL } from "../utils/text/seo";

const OG_IMAGE_URL = SITE_URL + ogImage.src;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
    "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://drpc.org/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Docs",
      "item": "https://drpc.org/docs"
    }
  ]
};

export function IndexPageJsonLd() {
  return (
      <Head>
        <meta property="og:image" content={OG_IMAGE_URL}/>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </Head>
  );
}
