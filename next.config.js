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
});

module.exports = nextConfig;
