/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    domains: [
      "cdn.discordapp.com",
      "images.unsplash.com",
      "images.prismic.io",
      "prismic-pp.cdn.prismic.io",
      "www.passagenspromo.com.br",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
