import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import Bio from "../components/bio"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <article>
          <PageHeader title="About Me" />
          <p>
            Hey, I'm Matt Rapati and this is my personal blog. I'm a web
            developer from Ontario, Canada.
          </p>
          <p>
            I have a lot of different interests including art, design, music,
            cooking, skateboarding, programming, science, and photography. Which
            means that you'll find posts here on a wide variety of topics!
          </p>
          <p>
            You can follow me on Twitter, or drop me a message at [email
            address]. For business inquiries you can also find me on LinkedIn.
          </p>
          <footer>
            <Bio />
          </footer>
        </article>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
