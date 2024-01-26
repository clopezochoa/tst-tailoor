/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/app',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '**',
      },
    ],
  },}

module.exports = nextConfig
