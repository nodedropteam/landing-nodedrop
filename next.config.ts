import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.cache = {
  //       type: 'filesystem',
  //       cacheDirectory: path.resolve('.next/cache/webpack'),
  //       compression: 'brotli', // Compress cache files to reduce size
  //     };
  //   }
  //   return config;
  // },
};

export default nextConfig;
