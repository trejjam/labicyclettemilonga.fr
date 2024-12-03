import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  trailingSlash: true,
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
