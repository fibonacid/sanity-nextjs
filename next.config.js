/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/studio/:path*",
        destination: "/studio/index.html", // The :path parameter is used here so will not be automatically passed in the query
      },
    ];
  },
};

module.exports = nextConfig;
