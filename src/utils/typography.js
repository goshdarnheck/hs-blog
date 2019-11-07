import Typography from "typography"
import ThemeDoelger from "typography-theme-doelger"

ThemeDoelger.overrideThemeStyles = () => {
  return {
    "a": {
      color: `#f30`,
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #fc3 1px, #fc3 2px, rgba(0, 0, 0, 0) 2px)`
    },
    "a:hover": {
      color: `#fc3`,
      textShadow: `.03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff`,
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #03f 1px, #03f 2px, rgba(0, 0, 0, 0) 2px)`
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    }
    ,
    "a.blog-name": {
      color: `#03f`
    },
    "a.blog-name:hover span:first-child": {
      color: `#f30`
    },
    "a.blog-name:hover span:last-child": {
      color: `#fc3`
    }
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
