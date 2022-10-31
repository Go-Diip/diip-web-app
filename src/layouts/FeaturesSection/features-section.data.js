import { graphql } from "gatsby"

export const query = graphql`
  fragment FeaturesSection on WpPage_Pagebuilder_Layouts_FeaturesSection {
    fieldGroupName
    title
    features {
      feature
    }
  }
`
