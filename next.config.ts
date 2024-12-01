import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/__/auth/:path(.*)",
        destination: "https://amperasa-restaurant.firebaseapp.com/__/auth/:path*",
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
