/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
  swcMinify: true, 
  image : {
    domains : ["res.cloudinary.com"]
  }
}

module.exports = nextConfig
