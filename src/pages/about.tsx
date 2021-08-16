import * as React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'

function AboutPage(props: PageProps) {
  return (
    <Layout pageTitle='About Me'>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default AboutPage
