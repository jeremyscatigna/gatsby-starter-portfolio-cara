const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Geekpreneur - Frenchy Front-end Engineer', // Navigation and Site Title
  siteTitleAlt: 'Geekpreneur', // Alternative Site title for SEO
  siteTitleShort: 'Geekpreneur', // short_name for manifest
  siteHeadline: 'Frenchy Front-end Engineer', // Headline for schema.org JSONLD
  siteUrl: 'https://geekpreneur.tech', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Frenchy Front-end Engineer',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@cara', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
