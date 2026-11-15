import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',          // Root URL
        destination: '/home', // Where you want them to go
        permanent: false,     // Set to true if this is a permanent move (SEO-wise)
      },
    ];
  },
  basePath: 'http://jessecallahan.github.io/Portfolio',
  assetPrefix: 'http://jessecallahan.github.io/Portfolio',
};

export default nextConfig;
