import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "disnaker.slemankab.go.id",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
