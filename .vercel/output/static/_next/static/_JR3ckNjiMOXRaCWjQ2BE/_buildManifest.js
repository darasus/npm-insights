;(self.__BUILD_MANIFEST = (function (e) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    '/': [e, 'static/chunks/pages/index-ed6d202fb41f3500.js'],
    '/_error': ['static/chunks/pages/_error-cf50ea534a578f50.js'],
    '/package/[...pkgId]': [
      e,
      'static/chunks/276-3da9cd4d5c4d389b.js',
      'static/chunks/pages/package/[...pkgId]-d80b399711a0d8c2.js',
    ],
    sortedPages: ['/', '/_app', '/_error', '/package/[...pkgId]'],
  }
})('static/chunks/335-5ae6063ad1f53745.js')),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
