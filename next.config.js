/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com", "images.unsplash.com", "images.prismic.io"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
