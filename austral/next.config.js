/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
  swcMinify: true, 
    images: {
      unoptimized: true,
  },
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

module.exports = nextConfig



//module.exports = withBundleAnalyzer(nextConfig)
