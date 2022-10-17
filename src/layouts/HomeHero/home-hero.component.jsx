import React, { useEffect } from "react"
import * as S from "./home-hero.styles"
import ScrollTo from "../../components/scroll-to/scroll-to.component"
import Typewriter from "typewriter-effect"
import parse from "html-react-parser"

const HomeHero = ({ title }) => {
  return (
    <S.Wrapper>
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
            />
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
