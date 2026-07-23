import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Substack serves post cover images from these CDN hosts.
      { protocol: "https", hostname: "substackcdn.com" },
      { protocol: "https", hostname: "*.substackcdn.com" },
      { protocol: "https", hostname: "substack-post-media.s3.amazonaws.com" },
    ],
  },
};

export default nextConfig;
