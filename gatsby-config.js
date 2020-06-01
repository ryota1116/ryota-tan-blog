module.exports = {
  siteMetadata: {
    title: `りょうたたんの技術ブログ`,
    name: `りょうたたんの技術ブログ`,
    siteUrl: `https://novela.narative.co`,
    description: `エンジニアを目指す金融マンが、未来の自分を助けるためにアウトプットするブログ`,
    hero: {
      heading: `未来の自分を助ける技術ブログ`,
      maxWidth: 800,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `りょうたたんの技術ブログ`,
        short_name: `りょうたたんの技術ブログ`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
