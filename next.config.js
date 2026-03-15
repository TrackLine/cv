/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages
  output: 'export',

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization is not supported in static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  // Compress output
  compress: true,

  // Reduce bundle size by excluding source maps in production
  productionBrowserSourceMaps: false,

  // Remove the X-Powered-By header
  poweredByHeader: false,
}

module.exports = nextConfig
