import React from "react";
import Logo from "./components/Logo/logo";
import { useRouter } from "next/router";
import { H1 } from "./components/mdx/H1";
import { DocsThemeConfig } from "nextra-theme-docs";
import { H2 } from "./components/mdx/H2";
import {
  DEFAULT_META_DESCRIPTION,
  DEFAULT_META_TITLE,
  isDocsInfoPage,
  isDocsMethodPage,
} from "./utils/text/seo";

const DocsBaseURL = "https://drpc.org/docs";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/p2p-org/drpc-nextra",
  },
  docsRepositoryBase: "https://github.com/p2p-org/drpc-nextra/blob/main",
  head: (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, maximum-scale=1, width=device-width"
      />
    </>
  ),
  footer: {
    component: <></>,
  },
  components: {
    h1: H1,
    h2: H2,
  },
  useNextSeoProps() {
    const router = useRouter();
    const { asPath } = router;
    const extra = { canonical: `${DocsBaseURL}${asPath}` };

    if (asPath === "/") {
      return {
        titleTemplate: DEFAULT_META_TITLE,
        description: DEFAULT_META_DESCRIPTION,
        keywords: "rpc documentation",
        ...extra,
      };
    }

    const checkDocsInfoPage = isDocsInfoPage(asPath);
    // If it's an info page, return the SEO tags for the info page
    if (checkDocsInfoPage.is) {
      return {
        titleTemplate: `${checkDocsInfoPage.blockchain} API Overview | dRPC`,
        description: `Explore dRPC's ${checkDocsInfoPage.blockchain} API with JSON-RPC methods for transactions, logs, balances, and more real-time blockchain insights.`,
        ...extra,
      };
    }

    const checkDocsMethodPage = isDocsMethodPage(asPath);
    // If it's a chapter or method page, return undefined to prevent NextSEO from rendering
    // This is because we want to render the SEO tags in the component itself
    if (checkDocsMethodPage.is) {
      return undefined;
    }

    return {
      // If we set up default title and description here, it will override the title and description that we set in the page via Head/Meta component
      ...extra,
    };
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark",
  },
  themeSwitch: {
    component: () => null,
  },
};

export default config;
