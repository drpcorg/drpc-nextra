import React, { PropsWithChildren } from "react";
import Logo from "./components/Logo/logo";
import { useRouter } from "next/router";
import { H1 } from "./components/mdx/H1";
import { DocsThemeConfig } from "nextra-theme-docs";
import { H2 } from "./components/mdx/H2";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/p2p-org/drpc-nextra",
  },
  chat: {
    link: "https://drpc.org/discord",
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
    const { asPath } = useRouter();
    return {
      titleTemplate: "Documentation for dRPC | Docs for dRPC Platform",
      description:
        "Explore comprehensive documentation for dRPC and streamlining your development process. Discover guides, examples, and tips. 💻📗",
      ...(asPath === "/" ? { canonical: "https://drpc.org/docs" } : {}),
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
