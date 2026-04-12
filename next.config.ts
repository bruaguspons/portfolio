import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  ...(isProd && {
    output: "export",
    distDir: "dist",
    basePath: "/portfolio",
    trailingSlash: true,
  }),
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
