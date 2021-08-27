import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

interface Props {
  data: {
    mdx: {
      frontmatter: {
        title: String
      },
      body: string,
    }
  }
}

function BlogPage({ data } : Props) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default BlogPage
