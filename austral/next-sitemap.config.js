module.exports={
    siteUrl: `${process.env.SITE_URL}`,
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.SITE_URL}/sitemap.xml`,
        ],
      },
      alternateRefs: [
        {
          href: `${process.env.SITE_URL}/en`,
          hreflang: 'en',
        },
      ],
} 