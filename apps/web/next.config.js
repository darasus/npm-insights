module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  experimental: {
    transpilePackages: ['ui', 'lib', 'utils', 'hooks'],
  },
}
