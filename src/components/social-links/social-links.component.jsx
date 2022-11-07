import React from "react"
import * as S from "./social-links.styles"
import Instagram from "../../assets/insta.svg"
import Facebook from "../../assets/fb.svg"
import LinkedIn from "../../assets/linkedin.svg"
const SocialLinks = () => {
  return (
    <S.Wrapper>
      <S.ExternalLink target="_blank" href="https://www.instagram.com/go.diip/">
        <Instagram />
      </S.ExternalLink>
      <S.ExternalLink
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100079237462109"
      >
        <Facebook />
      </S.ExternalLink>
      <S.ExternalLink
        target="_blank"
        href="https://www.linkedin.com/company/go-diip/about/?viewAsMember=true"
      >
        <LinkedIn />
      </S.ExternalLink>
    </S.Wrapper>
  )
}

export default SocialLinks
