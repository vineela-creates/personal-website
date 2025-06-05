/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure API routes are properly handled
  async rewrites() {
    return [
      {
        source: "/api/forms/:path*",
        destination: "/api/forms/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
