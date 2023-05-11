/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wellmedic2.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
