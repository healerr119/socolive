/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['sta.cvndnss.com'],
  },
}

module.exports = nextConfig
