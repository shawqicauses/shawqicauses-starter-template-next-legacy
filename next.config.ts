// DONE REVIEWING: GITHUB COMMIT - 03
/** @type {import("next").NextConfig} */

require("dotenv").config()

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: process.env.APPLICATION_DOMAIN,
        pathname: "**"
      }
    ]
  }
}

module.exports = nextConfig
