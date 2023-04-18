/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const path = require("path");

const nextConfig = nextTranslate({
  reactStrictMode: false,
  images: {
    domains: ["test.cdn.u-code.io", "cdn.u-code.io"],
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // env: {
  //   BASE_URL: baseUrl,
  // },
  env: {
    SOURCE: "website",
    REDUX_PERSIST_MIGRATION_VERSION: 1,
    COOKIE_TIME: 30 * 24 * 60 * 60,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./src/styles/unit.scss";`,
  },
});

module.exports = nextConfig;
