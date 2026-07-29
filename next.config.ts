import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix Next.js blocking HMR dev resource from local IP
  allowedDevOrigins: ['127.0.0.1', 'localhost', '0.0.0.0'],
  trailingSlash: false,
} as any;

export default nextConfig;
