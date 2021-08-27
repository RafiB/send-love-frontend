import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

interface BlogNode {
  frontmatter: {
    title: string
  },
  id: string,
  body: string,
}

interface Props {
  data: {
    allMdx: {
      nodes: Array<BlogNode>
    }
  }
}

function BlogPage({ data } : Props) {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___title, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
        }
        body
      }
    }
  }
`

export default BlogPage
