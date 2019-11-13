import Typography from "typography"
import TypoTheme from "./typo-theme.js"

const typography = new Typography(TypoTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
