module.exports = {
  siteMetadata: {
    siteUrl: "https://www.sergiocabral.dev",
    title: "sergiocabral.dev",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Encode Sans SC`,
          `Roboto`
        ],
        display: 'swap'
      }
    }
  ],
};
