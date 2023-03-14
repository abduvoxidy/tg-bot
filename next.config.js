/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
  reactStrictMode: false,
  images: {
    domains: ["test.cdn.rasta.app"],
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
    NEXT_X_API_KEY: "P-lc7prRbwHd8kZk57CwFvpx6N95at1xbV",
    REDUX_PERSIST_MIGRATION_VERSION: 1,
    COOKIE_TIME: 30 * 24 * 60 * 60,
  },
});

module.exports = nextConfig;
