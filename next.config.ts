import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ariesphysiocare.in",
      },
    ],
  },
  webpack: (config) => {
    config.externals = [...(config.externals || [])];
    return config;
  },
};

export default nextConfig;
