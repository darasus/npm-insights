const withTM = require('next-transpile-modules')([
  'ui',
  'lib',
  'utils',
  'hooks',
])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  experimental: {},
})
