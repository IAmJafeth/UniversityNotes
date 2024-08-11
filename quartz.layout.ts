import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'IAmJafeth/UniversityNotes',
        // from data-repo-id
        repoId: 'R_kgDOMhU05A',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOMhU05M4ChhN8',
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      "Codigo Fuente": "https://github.com/IAmJafeth/UniversityNotes",
      "Discord": "https://discord.gg/QMCtcS5svv",
    },
    acknowledgement: "Las notas compartidas en este blog están destinadas a ser ayudas para el estudio y no deben reemplazar los materiales oficiales del curso. Consulte siempre los recursos de su universidad para obtener la información más precisa.t",
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
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.RecentNotes())
  ],
  right: [
    Component.Graph(),
    Component.MobileOnly(Component.Explorer()),
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
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
