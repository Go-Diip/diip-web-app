import React from "react"
import * as S from "./features-section.styles"
import { Container, Grid } from "@mui/material"

const FeaturesSection = ({ title, features }) => {
  if (!features) return null
  return (
    <S.Wrapper>
      <Container maxWidth="md">
        <S.Title>{title}</S.Title>
        <Grid container spacing={4}>
          {features?.map(({ feature }, index) => (
            <Grid item xs={12} md={6} key={`feature-${index}`}>
              <S.FeatureWrapper>
                <S.Icon />
                <S.Feature> {feature} </S.Feature>
              </S.FeatureWrapper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default FeaturesSection
