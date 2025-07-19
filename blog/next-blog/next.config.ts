import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/blog',
  assetPrefix: '/blog',
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
