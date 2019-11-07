/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const StyledBio = styled.div`
  display: flex;
  marginBottom: ${rhythm(2.5)};
  marginTop: ${rhythm(2.5)};
  position: relative;

  &:after {
    background-color: #fc3;
    border-left: 1em solid #f30;
    border-right: 1em solid #03f;
    content: "";
    display: block;
    height: 1em;
    left: 0;
    position: absolute;
    top: -2rem;
    width: 3em;
  }
`

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
    <StyledBio
      style={{
        marginTop: rhythm(4),
        marginBottom: rhythm(2)
      }}
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
        {` `}<a href={`https://twitter.com/${social.twitter}`}>tweeting</a>.
      </p>
    </StyledBio>
  )
}

export default Bio
