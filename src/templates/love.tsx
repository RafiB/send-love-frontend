import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

interface CategoryProp {
  name: string
}

interface SimilarNodeProp {
  name: string,
  id: number,
}

interface CategoryEdgeNodeProp {
  node: {
    gifs: Array<SimilarNodeProp>
  }
}

interface Props {
  data: {
    strapiLoveGifs: {
      name: string,
      price: string,
      gif: {
        localFile: {
          url: string
        }
      },
      categories: Array<CategoryProp>
    },
    allStrapiCategories: {
      edges: Array<CategoryEdgeNodeProp>
    }
  }
}

function LoveGifPage({ data } : Props) {
  let seenIds = new Set<number>();
  let similarNodes: Array<SimilarNodeProp> = [];
  data.allStrapiCategories.edges.forEach((edge) => {
    edge.node.gifs.forEach((gifNode) => {
      if (gifNode.id === data.strapiLoveGifs.gif[0].id) {
        return;
      }
      if (seenIds.has(gifNode.id)) {
        return;
      }
      seenIds.add(gifNode.id);
      similarNodes.push(gifNode);
    })
  })

  return (
    <Layout pageTitle={data.strapiLoveGifs.name}>
      <h4>${data.strapiLoveGifs.price}</h4>
      <img src={data.strapiLoveGifs.gif[0].localFile.url} />
      <p>
        Categories: {data.strapiLoveGifs.categories.map((category) => {
          return category.name
        }).join(", ")}
      </p>
      <p>
        More like this:
        <ul>
          {
            Array.from(similarNodes.values()).map((node) => {
              return <li>
                <Link to={`/love/${node.id}`}>{node.name}</Link>
              </li>;
            })
          }
        </ul>
      </p>
    </Layout>
  )
}

export const query = graphql`
  query ($id: Int) {
    strapiLoveGifs(gif: {elemMatch: {id: {eq: $id}}}) {
      name
      price
      gif {
        id
        localFile {
          url
        }
      }
      categories {
        name
      }
    }
    allStrapiCategories(filter: {gifs: {elemMatch: {id: {eq: $id}}}}) {
      edges {
        node {
          gifs {
            name
            id
          }
        }
      }
    }
  }

`

export default LoveGifPage
