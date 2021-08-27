import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

interface LoveGifNode {
  name: string,
  price: string,
  gif: {
    id: number,
    localFile: {
      url: string,
    }
  },
}

interface Props {
  data: {
    allStrapiLoveGifs: {
      nodes: Array<LoveGifNode>
    }
  }
}

function LovePage({ data } : Props) {
  return (
    <Layout pageTitle="Love">
      <ul>
      {
        data.allStrapiLoveGifs.nodes.map(node => (
          <article key={node.gif[0].id}>
            <h2>
              <Link to={`/love/${node.gif[0].id}`}>
                {node.name}
              </Link>
              <span> - ${node.price}</span>
            </h2>
            <img src={node.gif[0].localFile.url} />
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiLoveGifs(sort: {fields: price, order: ASC}) {
      nodes {
        name
        price
        gif {
          id
          localFile {
            url
          }
        }
      }
    }
  }
`

export default LovePage
