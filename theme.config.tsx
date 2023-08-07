import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo/logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/p2p-org/drpc-nextra",
  },
  chat: {
    link: "https://discord.gg/Kyu3zt42bJ",
  },
  docsRepositoryBase: "https://github.com/p2p-org/drpc-nextra/blob/main",
  footer: {
    component: <></>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "DRPC – %s",
    };
  },
};

export default config;
