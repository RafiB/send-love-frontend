const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getGifs = makeRequest(graphql, `
    {
      allStrapiLoveGifs {
        nodes {
          gif {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiLoveGifs.nodes.forEach(( node ) => {
      createPage({
        path: `/love/${node.gif[0].id}`,
        component: path.resolve(`src/templates/love.tsx`),
        context: {
          id: node.gif[0].id,
        },
      })
    })
  });

  // Query for articles nodes to use in creating pages.
  return getGifs;
};
