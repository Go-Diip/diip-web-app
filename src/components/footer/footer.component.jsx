import React from "react"

import * as S from "./footer.styles"
import { Container, Grid } from "@mui/material"
import SocialLinks from "../social-links/social-links.component"

const Footer = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <S.TopWrapper>
        <Container maxWidth="md">
          <S.TopLinksWrapper>
            <S.Link href="mailto:hello@godiip.com">hello@godiip.com</S.Link>
            <S.Link>New York, NY</S.Link>
          </S.TopLinksWrapper>
        </Container>
      </S.TopWrapper>
      <S.BottomWrapper>
        <Container maxWidth="md">
          <S.BottomContent>
            <S.Description>
              © {new Date().getFullYear()} Diip. All Rights Reserved.
            </S.Description>
            <SocialLinks />
          </S.BottomContent>
        </Container>
      </S.BottomWrapper>
    </S.Wrapper>
  )
}

export default Footer
