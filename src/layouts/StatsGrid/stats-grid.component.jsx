import React, { useRef } from "react"
import * as S from "./stats-grid.styles"
import { Container, Grid } from "@mui/material"
import CountUp, { useCountUp } from "react-countup"

const StatsGrid = ({ title }) => {
  useCountUp({ ref: "bottomCounter", end: 6.3, decimals: 1, duration: 1 })
  useCountUp({ ref: "topCounter", end: 65, duration: 1 })

  return (
    <S.Wrapper>
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            {title && <S.Title>{title}</S.Title>}
          </Grid>
          <Grid item xs={12} md={6}>
            <S.RightWrapper>
              <S.InfoWrapper className="border">
                <S.InfoColumn>
                  <S.Value className="right">
                    <S.Value id="topCounter" />%
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
              <S.InfoWrapper>
                <S.InfoColumn>
                  <S.Description className="right">
                    Ecommerce sales are expected to reach
                  </S.Description>
                </S.InfoColumn>
                <S.InfoColumn>
                  <S.Value>
                    $<S.Value id="bottomCounter" />
                  </S.Value>
                  <S.Description>trillion by 2024.</S.Description>
                  <S.Description className="small">Statista</S.Description>
                </S.InfoColumn>
              </S.InfoWrapper>
            </S.RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default StatsGrid
