import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Si export statique (sinon enlever cette ligne)
  trailingSlash: true,
};

export default nextConfig;
