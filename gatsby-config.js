module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld', /* TODO: real URL */
    title: 'Send Love'
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-typescript',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ]
}
