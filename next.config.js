/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  output: 'standalone',
}
const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname, 'src') // if using src directory
    };
    if (!isServer) {
      config.mode = process.env.NODE_ENV || 'production';
    }
    if (process.env.NODE_ENV !== 'production') {
      config.cache = false;
    }
    return config;
  }
};