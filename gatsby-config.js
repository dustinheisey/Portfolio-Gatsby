module.exports = {
  siteMetadata: {
    title: 'Dallas Web Design | Dustin Heisey',
    siteUrl: 'https://www.getdallaswebdesign.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet', // Meta
    `gatsby-plugin-sass`, // Sass
    {
      resolve: `gatsby-plugin-purgecss`, // Purge CSS
      options: {
        rejected: true
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`, // Loader
      options: {
        color: `#00459c`,
        minimum: 0.1,
        showSpinner: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`, // Manifest.json
      options: {
        name: 'Portfolio of Dustin Heisey',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#00459c',
        display: 'standalone',
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-offline', // Service Worker
    {
      resolve: `gatsby-plugin-canonical-urls`, // Canonical Urls
      options: {
        siteUrl: `https://www.getdallaswebdesign.com`
      }
    },
    'gatsby-plugin-robots-txt', // Robots.txt
    {
      resolve: `gatsby-plugin-sitemap` // Sitemap
    },
    {
      resolve: `gatsby-plugin-google-analytics`, // Google Analytics
      options: {
        trackingId: 'UA-45565383-6',
        // Puts tracking script in the head instead of the body
        head: true
      }
    },
    `gatsby-plugin-netlify` // Netlify
  ]
}
