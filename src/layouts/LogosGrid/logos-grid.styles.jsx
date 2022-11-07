import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  z-index: 4;
  color: white;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 3em 0 5em 0;
  }
`

export const Title = styled.h2`
  margin-bottom: 3rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 4rem;
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.pxToRem(40)};
    line-height: 48px;
  }
`

export const Logo = styled(CustomImage)`
  //width: 70px;
  //height: 50px;
  img {
    //width: 70px;
    //height: 50px;
    object-fit: contain !important;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-wrap: wrap !important;
  }
`
