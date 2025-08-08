/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  output: 'standalone',
  experimental: {
    // This helps with path issues on Windows
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;