import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo/logo";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/p2p-org/drpc-nextra",
  },
  chat: {
    link: "https://drpc.org/discord",
  },
  docsRepositoryBase: "https://github.com/p2p-org/drpc-nextra/blob/main",
  footer: {
    component: <></>,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: "Documentation for dRPC | Docs for dRPC Platform",
      description: "Explore comprehensive documentation for dRPC and streamlining your development process. Discover guides, examples, and tips. 💻📗",
      ...(asPath === '/' ? {canonical: "https://docs.drpc.org/"} : {} )
    };
  },
};

export default config;
