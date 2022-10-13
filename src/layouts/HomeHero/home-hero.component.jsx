import React, { useEffect } from "react"
import * as S from "./home-hero.styles"
import ScrollTo from "../../components/scroll-to/scroll-to.component"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Typewriter from "typewriter-effect"
import { isBrowser } from "../../utils"
import parse from "html-react-parser"

const HomeHero = ({ title }) => {
  if (isBrowser) {
    gsap.registerPlugin(ScrollTrigger)
  }
  useEffect(() => {
    gsap.to(".gradient", {
      scrollTrigger: {
        trigger: ".wrapper",
        markers: true,
        scrub: true,
        scale: 2,
        duration: 2,
        start: "top top",
        end: "+=3000 +=3000",
      },
    })
  }, [])
  return (
    <S.Wrapper className="wrapper">
      <S.Gradient className="gradient" />
      <S.CustomContainer>
        <div>
          <S.Title>
            Digital Products that{parse("<br>")}
            <Typewriter
              options={{
                strings: ["deeply", "diiply"],
                autoStart: true,
                loop: true,
              }}
            />{" "}
            connect.
          </S.Title>
        </div>
      </S.CustomContainer>
      <S.ScrollWrapper>
        <ScrollTo />
      </S.ScrollWrapper>
    </S.Wrapper>
  )
}

export default HomeHero
