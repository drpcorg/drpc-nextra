type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  ogDescription?: string;
  ogImg?: any;
  pageUrl?: string;
  type?: string;
  twitterDescription?: string;
  twitterCard?: string;
  jsonLd?: any;
};

import Head from "next/head";
import ogImage from "../public/images/docs-og.webp";
import {
  DEFAULT_META_TITLE,
  DEFAULT_META_DESCRIPTION,
  SITE_URL,
} from "../utils/text/seo";

const OG_IMAGE_URL = SITE_URL + ogImage.src;

export function Meta({
  title = DEFAULT_META_TITLE,
  description = DEFAULT_META_DESCRIPTION,
  keywords,
  ogDescription,
  ogImg = OG_IMAGE_URL,
  pageUrl,
  type = "website",
  twitterDescription,
  twitterCard,
  jsonLd,
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={ogDescription || description} />
      {pageUrl && <meta property="og:url" content={SITE_URL + pageUrl} />}
      <meta property="og:image" content={ogImg} />
      <meta property="og:type" content={type} />
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={twitterDescription || description}
      />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
