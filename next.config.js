// DONE REVIEWING: GITHUB COMMIT - 01
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
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_APPLICATION_DOMAIN,
        pathname: "**"
      }
    ]
  }
}

module.exports = nextConfig
