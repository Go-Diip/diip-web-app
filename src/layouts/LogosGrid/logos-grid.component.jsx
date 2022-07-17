import React from "react"
import * as S from "./logos-grid.styles"
import { Container, Grid } from "@mui/material"

const LogosGrid = ({ title, logos }) => {
  if (!logos) return null
  return (
    <S.Wrapper>
      <Container maxWidth="md">
        {title && <S.Title>{title}</S.Title>}
        <Grid container>
          {logos.map(({ logo }, index) => (
            <Grid item xs={6} md={3} key={`logo-${index}`}>
              <S.ImageWrapper>
                <S.Logo img={logo} />
              </S.ImageWrapper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default LogosGrid
