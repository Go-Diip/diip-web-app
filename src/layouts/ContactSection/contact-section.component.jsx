import React from "react"
import { Grid } from "@mui/material"
import ContactForm from "../../components/contact-form/contact-form.component"

import * as S from "./contact-section.styles.jsx"

const ContactSection = ({ title, description }) => {
  return (
    <S.Wrapper contained maxWidth="md">
      <Grid container spacing={{ xs: 1, md: 8 }}>
        <Grid item xs={12} md={6}>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description>{description}</S.Description>}
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}
export default ContactSection
