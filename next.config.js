/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "balenciaga.dam.kering.com",
      "instagram.fbog2-4.fna.fbcdn.net",
      "localhost",
      "strapikitsch-app-lpgoh.ondigitalocean.app",
    ],
  },
};

module.exports = nextConfig;
