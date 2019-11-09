import Typography from "typography"
import ThemeDoelger from "typography-theme-doelger"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

ThemeDoelger.headerColor = "var(--secondary)"
ThemeDoelger.bodyColor = "var(--primary)"
ThemeDoelger.overrideThemeStyles = ({ scale, rhythm }) => {
  return {
    a: {
      color: `var(--secondary)`,
      backgroundImage: `none`
    },
    "a:hover": {
      color: `var(--primary)`,
      textShadow: `none`,
      backgroundImage: `none`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a.blog-name:hover span:first-child": {
      color: `var(--tertiary)`,
    },
    "a.blog-name:hover span:last-child": {
      color: `var(--primary)`,
    },
    blockquote: {
      ...scale(1 / 5),
      borderLeft: `${rhythm(6 / 16)} solid var(--secondary)`,
      color: `var(--primary)`,
      paddingLeft: rhythm(10 / 16),
      fontStyle: "italic",
      marginLeft: 0,
      marginRight: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        borderLeft: `${rhythm(3 / 16)} solid var(--secondary)`,
        paddingLeft: rhythm(9 / 16),
        fontStyle: "italic",
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
      },
    },
  }
}

const typography = new Typography(ThemeDoelger)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
