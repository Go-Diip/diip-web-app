import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

import MiscContent from "../layouts/MiscContent"
import { LayoutTitle } from "../styles/app.styles"
import CustomButton from "../components/custom-button/custom-button.component"
import ComingSoon from "../layouts/ComingSoon"
import HomeHero from "../layouts/HomeHero"
import InfoRow from "../layouts/InfoRow"
import LogosGrid from "../layouts/LogosGrid"

const Layouts = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  return (
    <Layout
      seo={{
        title: "Layouts - ONLY FOR DEV",
        metaRobotsNoindex: "noindex",
        metaRobotsNofollow: "nofollow",
      }}
    >
      {/*<LayoutTitle>MiscContent</LayoutTitle>*/}
      {/*<MiscContent content={`<p>Some content Here</p>`} />*/}
      {/*<LayoutTitle>Coming Soon</LayoutTitle>*/}
      {/*<ComingSoon />*/}
      {/*<LayoutTitle>HomeHero</LayoutTitle>*/}
      <HomeHero title="The next step for your company." />
      {/*<LayoutTitle>Info Row</LayoutTitle>*/}
      <InfoRow
        title="Welcome to diip"
        description="We help you elevate your brand, grow revenue, and use technology to reduce business costs by building customized digital products for your company."
      />
      {/*<LayoutTitle>LogosGrid</LayoutTitle>*/}
      <LogosGrid
        title="Trusted by"
        logos={[
          { logo: staticQuery.logo },
          { logo: staticQuery.logo },
          { logo: staticQuery.logo },
          { logo: staticQuery.logo },
        ]}
      />
    </Layout>
  )
}

export default Layouts
