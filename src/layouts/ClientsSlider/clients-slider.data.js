import { graphql } from "gatsby"

export const query = graphql`
  fragment ClientsSlider on WpPage_Pagebuilder_Layouts_ClientsSlider {
    fieldGroupName
    slides {
      url
      image {
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
