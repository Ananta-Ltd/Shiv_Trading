/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir:true,
  },
};

module.exports = {
    // Other Next.js config options
    // ...
  
    // Enable CSS modules
    cssModules: true,
  
    // Enable CSS import from node_modules
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]',
    },
  };
  
  
  
  
  
  
  
  
