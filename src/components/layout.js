import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import { rhythm, scale } from "../utils/typography"

const Wrapper = styled.div`
  border-top: 2em solid #f30;
  border-right: 2em solid #f30;
  min-height: 100vh;
`

const BlogName = styled.h1`
  position: relative;
  color: #03f;
  background-image: none;
  letter-spacing: 0.3em;

  &:before {
    content: "";
    background-color: #f30;
    display: block;
    position: absolute;
    left: -1.6em;
    top: 0;
    height: 2.4em;
    border-top: 0.8em solid #fc3;
    border-bottom: 0.8em solid #03f;
    width: 0.8em;
  }
`
const BlogNameLittle = styled.h3`
  position: relative;
  color: #03f;
  background-image: none;
  letter-spacing: 0.3em;
`
class Layout extends React.Component {
  render() {
    const { title, bigHeader, children } = this.props
    let header

    if (bigHeader) {
      header = (
        <BlogName
          style={{
            ...scale(1.5),
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Link
            className="blog-name"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              backgroundImage: `none`,
            }}
            title="Home"
            to={`/`}
          >
            <span>Hamburger</span>{` `}
            <span>Sandwich</span>
          </Link>
        </BlogName>
      )
    } else {
      header = (
        <BlogNameLittle>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              backgroundImage: `none`,
            }}
            to={`/`}
          >
            ◀ {title}
          </Link>
        </BlogNameLittle>
      )
    }
    return (
      <Wrapper>
        <Global
          styles={css`
            html {
              box-sizing: border-box;
            }
            *,
            *:before,
            *:after {
              box-sizing: border-box;
            }
          `}
        />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <footer style={{ textAlign: `center` }}>
            © {new Date().getFullYear()} Matt Rapati, built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> ♥
          </footer>
        </div>
      </Wrapper>
    )
  }
}

export default Layout
