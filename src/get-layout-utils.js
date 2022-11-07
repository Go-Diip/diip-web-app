import React from "react"
import MiscContent from "./layouts/MiscContent"
import HomeHero from "./layouts/HomeHero"
import InfoRow from "./layouts/InfoRow"
import ServicesSlider from "./layouts/ServicesSlider"
import ContactSection from "./layouts/ContactSection"
import LogosGrid from "./layouts/LogosGrid"
import StatsGrid from "./layouts/StatsGrid"
import ClientSlider from "./layouts/ClientsSlider"
import FeaturesSection from "./layouts/FeaturesSection"
import ReadyBanner from "./layouts/ReadyBanner"

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
    case "ContactSection":
      return <ContactSection {...layout} />
    case "LogosGrid":
      return <LogosGrid {...layout} />
    case "StatsGrid":
      return <StatsGrid {...layout} />
    case "ClientsSlider":
      return <ClientSlider {...layout} />
    case "FeaturesSection":
      return <FeaturesSection {...layout} />
    case "ReadyBanner":
      return <ReadyBanner {...layout} />
  }
}
