type Props = {
  title?: string;
  description?: string;
};

import Head from "next/head";
import { DEFAULT_META_TITLE, DEFAULT_META_DESCRIPTION } from "../utils/text/seo";

export function Meta({ title = DEFAULT_META_TITLE, description = DEFAULT_META_DESCRIPTION}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
