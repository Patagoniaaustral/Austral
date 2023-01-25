/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  experimental: {
        amp: true,
        esmExternals: true,
        optimizeFonts: true,
        optimizeImages: true,
        optimizeCss: true,
        // scrollRestoration: true,
        // workerThreads: true,
        // modern: true,
        // polyfillsOptimization: true,
        // basePath: true,
        // plugins: true,
        // profiling: true,
        // reactMode: true,
        // redirects: true,
        // rewrites: true,
        // trailingSlash: true,
        // swcMinify: true,
        // swcLoader: true,
        // swcLoaderOptions: true,
        // swcMinifyOptions: true,
        // swcOptions: true,
        // swcRegisterOptions: true,
        // swcTransformOptions: true,
        // swcLoaderOptions: true,
    },
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
}

module.exports = nextConfig
