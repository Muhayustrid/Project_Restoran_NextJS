/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // domain gambar
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;