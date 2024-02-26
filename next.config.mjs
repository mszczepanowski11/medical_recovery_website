/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

export default nextConfig;
