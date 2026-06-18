import React from "react"
import * as S from "./home-hero.styles"
import { Typewriter } from "react-simple-typewriter"
import parse from "html-react-parser"

const HomeHero = () => {
  return (
    <S.Wrapper>
      <S.CustomContainer maxWidth="md">
        <S.Content>
          <S.Eyebrow>
            <S.Dot aria-hidden="true" />
            Design &amp; development studio
          </S.Eyebrow>
          <S.Title>
            Something{parse("<br>")}
            <Typewriter
              words={["deep", "diip"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={1200}
            />{" "}
            is coming.
          </S.Title>
          <S.Subtitle>
            We&apos;re a design &amp; development boutique crafting digital
            products that deeply connect brands with the people who matter. Our
            new home is almost here — got a project in mind? Let&apos;s talk.
          </S.Subtitle>
        </S.Content>
      </S.CustomContainer>
    </S.Wrapper>
  )
}

export default HomeHero
