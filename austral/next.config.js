/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
  swcMinify: true, 
}

module.exports = nextConfig
