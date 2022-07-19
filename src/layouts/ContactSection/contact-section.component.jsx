import React from "react"
import { Grid } from "@mui/material"

import * as S from "./contact-section.styles.jsx"

const ContactSection = ({ title, description }) => {
  return (
    <S.Wrapper contained>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </Grid>
        <Grid xs={12} md={6}></Grid>
      </Grid>
    </S.Wrapper>
  )
}
export default ContactSection
