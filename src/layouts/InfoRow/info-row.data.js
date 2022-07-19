import { graphql } from "gatsby"

export const query = graphql`
  fragment InfoRow on WpPage_Pagebuilder_Layouts_InfoRow {
    fieldGroupName
    title
    description
  }
`
