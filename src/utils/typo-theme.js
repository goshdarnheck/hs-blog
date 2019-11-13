import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

const theme = {
  title: "HsBLog",
  baseFontSize: "17px",
  baseLineHeight: 1.45,
  blockMarginBottom: 0.8,
  googleFonts: [
    {
      name: "Arvo",
      styles: ["700"],
    },
    {
      name: "Cabin",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Arvo", "sans-serif"],
  bodyFontFamily: ["Cabin", "serif"],
  headerColor: "var(--primary)",
  bodyColor: "var(--primary)",
  headerWeight: "700",
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    return {
      a: {
        color: `var(--secondary)`,
        textDecoration: `none`
      },
      "a:hover": {
        color: `var(--primary)`,
      },
      "a.blog-name ": {
        color: `var(--primary)`,
      },
      "a.blog-name:hover span:first-child": {
        color: `var(--secondary)`,
      },
      "a.blog-name:hover span:last-child": {
        color: `var(--tertiary)`,
      },
      "h1,h2,h3,h4,h5,h6": {
        lineHeight: 1.2,
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5),
      },
      "h3,h4,h5,h6": {
        fontFamily: "Cabin, serif",
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid var(--secondary)`,
        color: `var(--primary)`,
        paddingLeft: rhythm(10 / 16),
        fontStyle: "italic",
        marginLeft: 0,
        marginRight: 0,
      },
      "blockquote > :last-child": {
        marginBottom: 0,
      },
      "blockquote cite": {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: "normal",
        fontWeight: options.bodyWeight,
      },
      "blockquote cite:before": {
        content: '"— "',
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
  },
}

export default theme
