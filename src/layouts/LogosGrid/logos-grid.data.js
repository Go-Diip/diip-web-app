import { graphql } from "gatsby"

export const query = graphql`
  fragment LogosGrid on WpPage_Pagebuilder_Layouts_LogosGrid {
    fieldGroupName
    title
    logos {
      logo {
        altText
        sourceUrl
        title
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
  }
`
