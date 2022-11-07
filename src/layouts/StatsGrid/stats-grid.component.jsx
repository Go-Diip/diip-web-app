import React, { useEffect, useState } from "react"
import * as S from "./stats-grid.styles"
import { Container, Grid } from "@mui/material"
import { isBrowser } from "../../utils"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CountUp } from "use-count-up"

const StatsGrid = ({ title }) => {
  const [startCounter, setStartCounter] = useState(false)
  if (isBrowser) {
    gsap.registerPlugin(ScrollTrigger)
  }
  useEffect(() => {
    gsap.to(".line", {
      scrollTrigger: {
        trigger: ".statsWrapper",
        // markers: true,
        start: "top center",
        duration: 1.5,
        onEnter: startCounters,
        onLeaveBack: self => self.disable(),
      },
      ease: "none",
      stagger: 0.5,
      width: "100%",
    })
  }, [])

  const startCounters = () => {
    setStartCounter(true)
  }

  return (
    <S.Wrapper className="statsWrapper">
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            {title && <S.Title>{title}</S.Title>}
          </Grid>
          <Grid item xs={12} md={6}>
            <S.RightWrapper>
              <S.Line className="line" />
              <S.InfoWrapper>
                <S.InfoColumn>
                  <S.Value className="right">
                    {/*<S.Value ref={top} />%*/}
                    <S.Value>
                      <CountUp
                        isCounting={startCounter}
                        end={65}
                        duration={1.5}
                      />
                      %
                    </S.Value>
                  </S.Value>
                </S.InfoColumn>
                <S.InfoColumn>
                  <S.Description>
                    of consumers expect to use digital shopping channels more in
                    the future.
                  </S.Description>
                  <S.Description className="small">
                    Wunderman Thompson
                  </S.Description>
                </S.InfoColumn>
              </S.InfoWrapper>
              <S.Line className="line" />
              <S.InfoWrapper>
                <S.InfoColumn>
                  <S.Description className="right">
                    Ecommerce sales are expected to reach
                  </S.Description>
                </S.InfoColumn>
                <S.InfoColumn>
                  <S.Value>
                    <CountUp
                      isCounting={startCounter}
                      end={6.3}
                      duration={1.5}
                    />
                    $
                  </S.Value>
                  <S.Description>trillion by 2024.</S.Description>
                  <S.Description className="small">Statista</S.Description>
                </S.InfoColumn>
              </S.InfoWrapper>
              <S.Line className="line" />
            </S.RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default StatsGrid
