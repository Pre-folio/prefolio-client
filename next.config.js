/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // 아래를 추가합니다.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
