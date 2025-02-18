import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  // Ajoute les headers pour forcer Google à indexer le site
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow", // Autorise l'indexation et le crawl
          },
        ],
      },
    ];
  },
};

export default nextConfig;
