import React from "react"
import * as S from "./service-card.styles"
import { Grid } from "@mui/material"

const ServiceCard = ({ image, title, description }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md={4}>
          <S.Image img={image} arPaddingPercentage={90} />
        </Grid>
        <Grid item xs={12} md={8}>
          <S.TextWrapper>
            {title && <S.Title>{title}</S.Title>}
            {description && <S.Description>{description}</S.Description>}
          </S.TextWrapper>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default ServiceCard
