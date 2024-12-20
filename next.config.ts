// DONE REVIEWING: GITHUB COMMIT - 04
/** @type {import("next").NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "**"
      }
    ]
  }
}

module.exports = nextConfig
