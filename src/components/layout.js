/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo/seo.component"
import Header from "../components/header/header.component"
import { AppContainer, Gradient, GradientWrapper } from "../styles/app.styles"
import Footer from "./footer/footer.component"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { isBrowser } from "../utils"

const Layout = ({ seo, children, hideGradient }) => {
  if (isBrowser) {
    gsap.registerPlugin(ScrollTrigger)
  }
  useEffect(() => {
    gsap.to(".gradient", {
      scale: 0.8,
      duration: 5,
      ease: "none",
      yoyo: true,
      repeat: -1,
      pin: true,
    })
    gsap.to(".gradientWrapper", {
      scrollTrigger: {
        trigger: ".wrapper",
        start: "+=600 center",
        end: "bottom +=500",
        scrub: true,
        duration: 60,
      },
      ease: "none",
      y: 2600,
    })
  }, [])
  return (
    <>
      {seo && <SEO data={seo} />}
      <Header />
      <AppContainer className="wrapper">
        {!hideGradient && (
          <GradientWrapper className="gradientWrapper">
            <Gradient className="gradient" />
          </GradientWrapper>
        )}

        {children}
      </AppContainer>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
