import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export', // Si export statique (sinon enlever cette ligne)
  trailingSlash: true,
};

export default nextConfig;
