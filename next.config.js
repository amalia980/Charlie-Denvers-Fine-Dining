/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'server',
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
