import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "IAmJafeth",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google', tagId: 'G-SJSZL2JCL9',
    },
    locale: "es-ES",
    baseUrl: "iamjafeth.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f5",
          lightgray: "#9ca0b0",
          gray: "#7287fd",
          darkgray: "#4c4f69",
          dark: "#4c4f69",
          secondary: "#1e66f5",
          tertiary: "#40a02b",
          highlight: "rgba(30, 102, 245, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1e1e2e",
          lightgray: "#737994",
          gray: "#babbf1",
          darkgray: "#c6d0f5",
          dark: "#c6d0f5",
          secondary: "#8caaee",
          tertiary: "#a6d189",
          highlight: "rgba(140, 170, 238, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "catppuccin-latte",
          dark: "catppuccin-mocha",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

// theme: {
//   fontOrigin: "googleFonts",
//     cdnCaching: true,
//     typography: {
//     header: "Schibsted Grotesk",
//       body: "Source Sans Pro",
//       code: "IBM Plex Mono",
//   },
//   colors: {
//     lightMode: {
//       light: "#faf8f8",
//         lightgray: "#e5e5e5",
//         gray: "#b8b8b8",
//         darkgray: "#4e4e4e",
//         dark: "#2b2b2b",
//         secondary: "#284b63",
//         tertiary: "#84a59d",
//         highlight: "rgba(143, 159, 169, 0.15)",
//         textHighlight: "#fff23688",
//     },
//     darkMode: {
//       light: "#161618",
//         lightgray: "#393639",
//         gray: "#646464",
//         darkgray: "#d4d4d4",
//         dark: "#ebebec",
//         secondary: "#7b97aa",
//         tertiary: "#84a59d",
//         highlight: "rgba(143, 159, 169, 0.15)",
//         textHighlight: "#b3aa0288",
//     },
//   },
// },
export default config
