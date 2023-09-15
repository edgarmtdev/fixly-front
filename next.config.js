/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "www.steren.com.mx"],
  },
};
