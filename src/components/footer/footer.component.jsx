import React from "react"

import * as S from "./footer.styles"
import { Container, Grid } from "@mui/material"

const Footer = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <S.TopWrapper>
        <Container maxWidth="md">
          <S.TopLinksWrapper>
            <S.Link href="mailto:hello@godiip.com">hello@godiip.com</S.Link>
            <S.Link>New York, NY</S.Link>
          </S.TopLinksWrapper>

          {/*<Grid container>*/}
          {/*  <Grid item xs={12} md={6}>*/}
          {/*    <S.Title>Address</S.Title>*/}
          {/*    <S.Link>337 E 10th St, New York, New York 10009</S.Link>*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={12} md={6}>*/}
          {/*    <S.Title>Email</S.Title>*/}
          {/*    <S.Link href="mailto:hello@godiip.com">hello@godiip.com</S.Link>*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
        </Container>
      </S.TopWrapper>
      <S.BottomWrapper>
        <Container maxWidth="md">
          <S.Description>
            © {new Date().getFullYear()} Diip. All Rights Reserved.
          </S.Description>
        </Container>
      </S.BottomWrapper>
    </S.Wrapper>
  )
}

export default Footer
