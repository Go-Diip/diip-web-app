import React from "react"
import * as S from "./home-hero.styles"
import ScrollTo from "../../components/scroll-to/scroll-to.component"
import { Typewriter } from "react-simple-typewriter"
import parse from "html-react-parser"

const HomeHero = ({ title }) => {
  return (
    <S.Wrapper>
      <S.CustomContainer>
        <div>
          <S.Title>
            Digital Products that{parse("<br>")}
            <Typewriter
              words={["Deeply", "Diiply"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
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
