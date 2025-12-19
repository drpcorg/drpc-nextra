import Head from "next/head";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}