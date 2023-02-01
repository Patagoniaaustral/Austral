/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
  swcMinify: true, 
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      path: '/_next/image',
      loader: 'default',
      loaderFile: '',
      disableStaticImages: false,
      minimumCacheTTL: 60,
      formats: ['image/webp'],
      dangerouslyAllowSVG: false,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [],
      unoptimized: false,
      domains: ['res.cloudinary.com'],
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

//module.exports = nextConfig



module.exports = withBundleAnalyzer(nextConfig)
