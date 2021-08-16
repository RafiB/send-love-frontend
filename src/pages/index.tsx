import * as React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'

function IndexPage (props: PageProps) {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage
