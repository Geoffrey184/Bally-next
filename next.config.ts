const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/Bally-next',
  assetPrefix: isProd ? '/Bally-next/' : '',
  trailingSlash: true, // Assure des chemins avec des slashes finaux pour éviter les erreurs 404
};
  
export default nextConfig;
