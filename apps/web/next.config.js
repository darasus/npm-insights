const withTM = require("next-transpile-modules")(["ui", "lib"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
});
