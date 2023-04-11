/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
    ],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@tremor/react'],
  },
}

module.exports = nextConfig
