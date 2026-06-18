import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { getPageLayout } from "../../get-layout-utils"
import SEO from "../../components/seo/seo.component"
import HomeHero from "../../layouts/HomeHero"

// While the site is in "Coming Soon" mode we only surface two things:
// the home hero (used as the coming-soon screen) and the contact section.
// Every other page builder layout is intentionally hidden.
const COMING_SOON_ALLOWED_LAYOUTS = ["ContactSection"]

const getLayoutName = layout => layout?.fieldGroupName?.split("_").pop().trim()

export const query = graphql`
  query PageQuery($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      isFrontPage
      title
      content
      uri
      slug
      parentId
      seo {
        canonical
        title
        focuskw
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphImage {
          altText
          sourceUrl
          title
        }
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          title
        }
      }
      pageBuilder {
        layouts {
          ... on WpPage_Pagebuilder_Layouts_MiscContent {
            ...MiscContent
          }
          ... on WpPage_Pagebuilder_Layouts_HomeHero {
            ...HomeHero
          }
          ... on WpPage_Pagebuilder_Layouts_ServicesSlider {
            ...ServicesSlider
          }
          ... on WpPage_Pagebuilder_Layouts_InfoRow {
            ...InfoRow
          }
          ... on WpPage_Pagebuilder_Layouts_ContactSection {
            ...ContactSection
          }
          ... on WpPage_Pagebuilder_Layouts_LogosGrid {
            ...LogosGrid
          }
          ... on WpPage_Pagebuilder_Layouts_StatsGrid {
            ...StatsGrid
          }
          ... on WpPage_Pagebuilder_Layouts_ClientsSlider {
            ...ClientsSlider
          }
          ... on WpPage_Pagebuilder_Layouts_FeaturesSection {
            ...FeaturesSection
          }
          ... on WpPage_Pagebuilder_Layouts_ReadyBanner {
            ...ReadyBanner
          }
        }
        pageConfiguration {
          hideFooter
          hideHeaderItems
          hideGradient
        }
      }
    }
  }
`

export const Head = ({ data }) => <SEO data={data?.wpPage?.seo} />

const PageTemplate = ({ data }) => {
  const { seo, pageBuilder, isFrontPage } = data.wpPage
  const layouts = pageBuilder?.layouts || []

  // The front page becomes the Coming Soon screen: hero only.
  if (isFrontPage) {
    return (
      <Layout {...pageBuilder?.pageConfiguration} seo={seo}>
        <HomeHero />
      </Layout>
    )
  }

  // Any other page (e.g. Contact) only keeps the allow-listed layouts.
  const visibleLayouts = layouts.filter(layout =>
    COMING_SOON_ALLOWED_LAYOUTS.includes(getLayoutName(layout))
  )

  return (
    <Layout {...pageBuilder?.pageConfiguration} seo={seo}>
      {visibleLayouts.map(layout => getPageLayout(layout))}
    </Layout>
  )
}

export default PageTemplate
