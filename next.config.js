/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/books/:search/:page',
        destination: `${process.env.API_URL}/books/:search/:page`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/books',
        permanent: true,
      },
    ];
  },
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
