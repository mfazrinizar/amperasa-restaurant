import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/error",
        destination: "/error", 
      },
    ];
  },
};

export default nextConfig;
