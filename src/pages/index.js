import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants"
import { scale, rhythm } from "../utils/typography"
import kebabCase from "lodash/kebabCase"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const h1Scale = scale(1.5)
const h1ScaleMobile = scale(1)

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const tags = data.tagsGroup.group

    return (
      <Layout hideNav={true}>
        <header>
          <h1
            css={css`
              font-size: ${h1Scale.fontSize};
              letter-spacing: ${rhythm(0.4)};
              line-height: ${h1Scale.lineHeight};
              margin-top: ${rhythm(2.2)};
              padding-left: ${rhythm(3.6)};
              position: relative;
              word-wrap: normal;

              &:before {
                background-color: var(--secondary);
                border-top: ${rhythm(3 / 2)} solid #fc3;
                border-bottom: ${rhythm(3 / 2)} solid var(--primary);
                border-top-right-radius: ${rhythm(4 / 5)};
                border-bottom-right-radius: ${rhythm(4 / 5)};
                content: "";
                display: block;
                height: ${rhythm(4.5)};
                left: calc(-60vw + ${rhythm(2.4)});
                position: absolute;
                top: ${rhythm(1 / 10)};
                width: 60vw;
              }

              ${TABLET_MEDIA_QUERY} {
                font-size: ${h1ScaleMobile.fontSize};
                line-height: 2.2rem;
                letter-spacing: ${rhythm(1 / 5)};
                padding-left: ${rhythm(1.4)};
                margin-top: ${rhythm(2)};

                &:before {
                  border-top: ${rhythm(1.1)} solid #fc3;
                  border-bottom: ${rhythm(1.1)} solid var(--primary);
                  border-top-right-radius: ${rhythm(1 / 2)};
                  border-bottom-right-radius: ${rhythm(1 / 2)};
                  height: ${rhythm(3.3)};
                  left: calc(-60vw + ${rhythm(7 / 10)});
                  top: -${rhythm(1 / 5)};
                }
              }
            `}
          >
            <Link className="blog-name" title="Home" to={`/`}>
              <span>Hamburger</span>
              <br />
              <span>Sandwich</span>
            </Link>
          </h1>
        </header>
        <div
          css={css`
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
          `}
        >
          <p>
            A blog about web development, programming, graphic design, ux, and
            other things I find interesting, which does includes hamburgers.
          </p>
        </div>
        <SEO title="Home" />
        <h2>Recent Posts</h2>
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
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
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
        <hr />
        <div
          css={css`
            text-align: right;
          `}
        >
          <Link to={`/archive`}>Complete Post Archive</Link>
        </div>
        {tags && (
          <div>
            <h2>Posts by Tag</h2>
            <ul
              css={css`
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-column-gap: 1em;
                grid-row-gap: 1em;
                list-style: none;
                margin: 0;
                padding: 0;

                li {
                  margin: 0;
                }
              `}
            >
              {tags.map((tag, index) => {
                return (
                  <li key={index}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>{tag.fieldValue} ({tag.totalCount})</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
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
    allMarkdownRemark(limit: 2, sort: { fields: [frontmatter___date], order: DESC }) {
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
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
