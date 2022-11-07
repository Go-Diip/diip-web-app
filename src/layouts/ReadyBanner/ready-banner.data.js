import { graphql } from "gatsby"

export const query = graphql`
  fragment ReadyBanner on WpPage_Pagebuilder_Layouts_ReadyBanner {
    fieldGroupName
    title
  }
`
