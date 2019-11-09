import React from "react"
import { Link } from "gatsby"
import { Global as GlobalEmotion, css } from "@emotion/core"
import styled from "@emotion/styled"
import { scale, rhythm } from "../utils/typography"
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from "typography-breakpoint-constants"

const Wrapper = styled.div`
  border-top: 32px solid var(--secondary);
  border-right: 32px solid var(--secondary);
  min-height: 100vh;

  ${MOBILE_MEDIA_QUERY} {
    border-top: 16px solid var(--secondary);
    border-right: 16px solid var(--secondary);
  }
`

const StyledLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: 0 ${rhythm(3 / 4)};

  ${TABLET_MEDIA_QUERY} {
    padding: 0 ${rhythm(3 / 4)};
  }
`

const h1Scale = scale(1.5)
const h1ScaleMobile = scale(1)
const BlogName = styled.h1`
  color: var(--secondary);
  background-image: none;
  font-size: ${h1Scale.fontSize};
  letter-spacing: ${(rhythm(0.6))};
  line-height: ${h1Scale.lineHeight};
  margin-top: ${rhythm(2.3)};
  padding-left: ${rhythm(3)};
  position: relative;
  word-wrap: normal;

  &:before {
    background-color: var(--secondary);
    border-top: 0.8em solid #fc3;
    border-bottom: 0.8em solid var(--primary);
    content: "";
    display: block;
    height: 2.4em;
    left: calc(-60vw + ${rhythm(2)});
    position: absolute;
    top: ${(rhythm(0.1))};
    width: 60vw;
  }

  ${TABLET_MEDIA_QUERY} {
    font-size: ${h1ScaleMobile.fontSize};
    line-height: 2.2rem;
    padding-left: ${rhythm(0.2)};
    margin-top: ${rhythm(2)};

    &:before {
      top: -${(rhythm(0.2))};
      left: calc(-60vw - ${(rhythm(0.3))});
    }
  }
`
const h1ScaleLittle = scale(0);
const BlogNameLittle = styled.h3`
  background-image: none;
  color: var(--secondary);
  letter-spacing: ${(rhythm(0.2))};
  font-size: ${h1ScaleLittle.fontSize};
  padding-left: ${(rhythm(1.5))};
  position: relative;
  margin: ${rhythm(0.8)} 0 0 0;

  :before {
    content: "◀";
    position: absolute;
    top: -${(rhythm(0.05))};
    left: -${(rhythm(0))};
  }

  :hover:before {
    color: var(--primary)
  }
`

const footerScale = scale(-0.3);
const StyledFooter = styled.footer`
  font-size: ${footerScale.fontSize};
  line-height: ${footerScale.lineHeight};
  padding: ${rhythm(1)} 0 ;
  text-align: center;
`

class Layout extends React.Component {
  render() {
    const { children, indexHeader } = this.props
    let header

    if (indexHeader) {
      header = (
        <BlogName>
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
            <span>Hamburger</span>
            {` `}
            <span>Sandwich</span>
          </Link>
        </BlogName>
      )
    } else {
      header = (
        <BlogNameLittle>
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
            <span>Hamburger</span>
            {` `}
            <span>Sandwich</span>
          </Link>
        </BlogNameLittle>
      )
    }

    return (
      <Wrapper>
        <GlobalEmotion
          styles={css`
            html {
              box-sizing: border-box;
            }
            *,
            *:before,
            *:after {
              box-sizing: border-box;
            }
            :root {
              --primary: #320;
              --secondary: #f50;
              --tertiary: #fc3;
            }
          `}
        />
        <StyledLayout>
          <header>{header}</header>
          <main>{children}</main>
          <StyledFooter>
            © {new Date().getFullYear()} Matthew Rapati, built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> ♥
          </StyledFooter>
        </StyledLayout>
      </Wrapper>
    )
  }
}

export default Layout
