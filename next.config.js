/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Added to bypass turbopack error
  experimental: {
    turbo: {
      rules: {},
    },
  },
}
module.exports = nextConfig
