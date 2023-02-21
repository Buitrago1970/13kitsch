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
      "cdn-icons-png.flaticon.com",
      "play-lh.googleusercontent.com",
      "kitsch-backend.onrender.com",
      "images.ctfassets.net",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
