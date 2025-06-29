/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize image loading
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Improve performance
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize for production
  swcMinify: true,
  // Configure output options
  output: 'standalone',
  // Enable experimental features
  experimental: {
    // Optimize styling and fonts
    optimizeCss: true,
    // Include server modules inline
    serverMinification: true,
  },
};

export default nextConfig;