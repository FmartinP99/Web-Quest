import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jobicy.com",
        pathname: "/data/server-nyc0409/galaxy/mercury/**",
      },
    ],
  },
};

export default nextConfig;
