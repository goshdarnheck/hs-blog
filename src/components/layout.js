import React from "react"
import { Global as GlobalEmotion, css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Footer from "../components/footer"
import Nav from "../components/nav"

class Layout extends React.Component {
  render() {
    const { children, hideNav } = this.props

    return (
      <div>
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
              --background: #fff;
              --primary: #320;
              --secondary: #f50;
              --tertiary: #fc3;
            }
          `}
        />
        <div
          css={css`
            background-color: var(--primary);
            height: ${rhythm(1)};
          `}
        >
          {!hideNav && <Nav />}
        </div>
        <div
          css={css`
            margin-left: auto;
            margin-right: auto;
            max-width: ${rhythm(24)};
            padding: 0 ${rhythm(3 / 4)};
          `}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
