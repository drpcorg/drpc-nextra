import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

const nextConfig = withNextra({
  output: "standalone",
});

export default nextConfig;
