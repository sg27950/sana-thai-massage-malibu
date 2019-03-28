const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Sana Thai Massage Malibu', // Navigation and Site Title
  siteTitleAlt: 'Sana Malibu Thai Massage', // Alternative Site title for SEO
  siteTitleShort: 'Sana', // short_name for manifest
  siteHeadline: 'Experience the best healing from the best healer.', // Headline for schema.org JSONLD
  siteUrl: 'https://sanathaimassagemalibu.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription:
    'Sana is an expert at healing areas where there is a lot of tension or limited mobility. Her services include Thai, TMJ, Swedish, deep tissue. She recently incorporated CBD oil into her massage services and that is an available option if you are looking for extra healing.',
  author: 'DRW', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: '', // Facebook Language
  googleAnalyticsID: 'UA-137072656-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
