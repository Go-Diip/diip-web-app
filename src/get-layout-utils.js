import React from "react"
import MiscContent from "./layouts/MiscContent"
import HomeHero from "./layouts/HomeHero"
import InfoRow from "./layouts/InfoRow"
import ServicesSlider from "./layouts/ServicesSlider"

export const getPageLayout = layout => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  if (!layoutName) return null
  switch (layoutName) {
    case "MiscContent":
      return <MiscContent {...layout} />
    case "HomeHero":
      return <HomeHero {...layout} />
    case "ServicesSlider":
      return <ServicesSlider {...layout} />
    case "InfoRow":
      return <InfoRow {...layout} />
  }
}
