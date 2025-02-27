/** @type {import('next').NextConfig} */
import withNextIntl from 'next-intl/plugin';
const withIntl = withNextIntl();

const nextConfig = withIntl({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
});

export default nextConfig;
