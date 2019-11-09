import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const StyledIntro = styled.div`
  margin-top: ${rhythm(2)};
  margin-bottom: ${rhythm(2)};
  position: relative;

  &:after {
    background-color: var(--tertiary);
    display: block;
    height: ${rhythm(1)};
    left: 0;
    top: 0;
    position: absolute;
    width: ${rhythm(1)};
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout indexHeader={true} location={this.props.location} title={siteTitle}>
        <StyledIntro>
          <p>A blog about web development, programming, graphic design, ux, and other things I find interesting!</p>
        </StyledIntro>
        <SEO title="Hamburger Sandwich Blog - Home" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
        <Bio />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
