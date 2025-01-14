import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async rewrites() {
    return [
      {
        source: "/:path*/favicon.ico",
        destination: "/favicon.ico",
      },
    ];
  },
};

export default nextConfig;
