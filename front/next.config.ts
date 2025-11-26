import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },
    webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@context": path.resolve(__dirname, "src/app/context"),
      "@components": path.resolve(__dirname, "src/app/components"),
      "@app-types": path.resolve(__dirname, "src/app/types"),
      "@lib": path.resolve(__dirname, "src/app/lib"),
    };
    
    return config;
  },
};

export default nextConfig;
