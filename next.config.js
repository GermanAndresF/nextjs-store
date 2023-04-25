/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos', 'futureworld.com.vn', 'api.escuelajs.co', 'placeimg.com', 'api.lorem.space'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  include: ['production'],
  register: true,
});

module.exports = withPWA(nextConfig);
