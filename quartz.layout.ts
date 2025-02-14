import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import * as ExtraComponent from "./quartz/extra"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "IAmJafeth/UniversityNotes",
        // from data-repo-id
        repoId: "R_kgDOMhU05A",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDOMhU05M4ChhN8",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      "Codigo Fuente": "https://github.com/IAmJafeth/UniversityNotes",
      Discord: "https://discord.gg/QMCtcS5svv",
    },
    acknowledgement:
      "Las notas compartidas en este blog están destinadas a ser ayudas para el estudio y no deben reemplazar los materiales oficiales del curso. Consulte siempre los recursos de su universidad para obtener la información más precisa.",
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(
      ExtraComponent.OverlayExplorer({
        filterFn: (node) => node.name !== "tags" && node.name !== "License",
      }),
    ),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.RecentNotes({ linkToMore: "tags", limit: 2 })),
  ],
  right: [
    Component.Graph({
      localGraph: {
        showTags: false, // whether to show tags in the graph
      },
      globalGraph: {
        showTags: false, // whether to show tags in the graph
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(
      ExtraComponent.OverlayExplorer({
        filterFn: (node) => node.name !== "tags" && node.name !== "License",
      }),
    ),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
