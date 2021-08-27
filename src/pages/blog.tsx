import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

interface BlogNode {
  name: string
}

interface Props {
  data: {
    allFile: {
      nodes: Array<BlogNode>
    }
  }
}

function BlogPage({ data } : Props) {

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
