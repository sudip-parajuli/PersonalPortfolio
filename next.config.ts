import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Required for GitHub Pages (Static Site Generation)
  images: {
    unoptimized: true, // Required as GitHub Pages doesn't support Next.js Image Optimization
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
