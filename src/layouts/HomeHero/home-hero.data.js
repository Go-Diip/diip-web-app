import { graphql } from "gatsby"

export const query = graphql`
  fragment HomeHero on WpPage_Pagebuilder_Layouts_HomeHero {
    title
    fieldGroupName
  }
`
