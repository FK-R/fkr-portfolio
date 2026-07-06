/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
  },
}

export default nextConfig
