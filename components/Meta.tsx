type Props = {
  title: string;
  description?: string;
};

import Head from "next/head";

export function Meta(props: Props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
}
