import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: 1000 * 1024 * 1024,
    },
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://your-backend-ip:port/:path*", // 👈 Replace with your backend URL
      },
    ];
  },
};

export default nextConfig;
