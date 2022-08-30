import { graphql } from "gatsby"

export const query = graphql`
  fragment StatsGrid on WpPage_Pagebuilder_Layouts_StatsGrid {
    fieldGroupName
    title
  }
`
