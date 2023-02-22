/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

// let baseUrl = 'https://development.com'

// if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
//   baseUrl = 'https://production.com'
// }

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["test.cdn.rasta.app"],
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  },
  // env: {
  //   BASE_URL: baseUrl,
  // },
});

module.exports = nextConfig;
