/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      css={css`
        display: flex;
        margin-top: ${rhythm(4)};
        margin-bottom: 0;
        position: relative;

        &:after {
          background-color: var(--secondary);
          border-top: ${rhythm(0.3)} solid var(--primary);
          border-bottom: ${rhythm(0.3)} solid var(--tertiary);
          border-top-right-radius: ${rhythm(0.2)};
          border-bottom-right-radius: ${rhythm(0.2)};
          content: "";
          display: block;
          height: ${rhythm(0.9)};
          left: -50vw;
          position: absolute;
          top: ${rhythm(-1.8)};
          width: calc(100% + 50vw);
        }
      `}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <Link to={`/about`}>{author}</Link> who lives and works in
        Toronto <Link to={`/projects`}>building apps, drawing comics</Link> and
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>tweeting</a>.
      </p>
    </div>
  )
}

export default Bio
