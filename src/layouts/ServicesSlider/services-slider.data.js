import { graphql } from "gatsby"

export const query = graphql`
  fragment ServicesSlider on WpPage_Pagebuilder_Layouts_ServicesSlider {
    title
    description
    slides {
      title
      description
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
    fieldGroupName
  }
`
