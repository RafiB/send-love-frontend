import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

interface BlogNode {
  frontmatter: {
    title: string
  },
  id: string,
  slug: string,
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
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
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
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
