module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld', /* TODO: real URL */
    title: 'Send Love'
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-typescript',
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`love-gifs`, `categories`],
      },
    },
  ]
}
