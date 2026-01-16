type Props = {
  title?: string;
  description?: string;
};

import Head from "next/head";
import ogImage from "../public/images/docs-og.webp";
import { DEFAULT_META_TITLE, DEFAULT_META_DESCRIPTION, SITE_URL } from "../utils/text/seo";

const OG_IMAGE_URL = SITE_URL + ogImage.src;

export function Meta({ title = DEFAULT_META_TITLE, description = DEFAULT_META_DESCRIPTION}: Props) {

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
