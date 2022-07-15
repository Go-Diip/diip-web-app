import React from "react"
import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"
import { LayoutTitle } from "../styles/app.styles"
import CustomButton from "../components/custom-button/custom-button.component"
import ComingSoon from "../layouts/ComingSoon"
import HomeHero from "../layouts/HomeHero"

const Layouts = () => {
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
      <HomeHero />
    </Layout>
  )
}

export default Layouts
