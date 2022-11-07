import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  position: relative;

  z-index: 4;
  .swiper {
    overflow: unset;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 10rem;
  }
`

export const SliderWrapper = styled.div`
  position: relative;
`

export const SlideImage = styled(CustomImage)`
  height: 430px;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.secondary.main};

  img {
    object-fit: cover !important;
    transition: all 0.3s ease !important;
    &:hover {
      //transform: translateY(40px);
      transform: scale(0.9);
    }
  }
`
export const ImageWrapper = styled.div``

export const TextWrapper = styled.div``

export const Title = styled.h2`
  text-align: center;
  max-width: 630px;
  margin: auto;
  color: white;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.pxToRem(40)};
  line-height: 120%;
  letter-spacing: -0.02em;
`

export const SwiperWrapper = styled.div`
  padding: ${({ theme }) => theme.typography.pxToRem(70)} 0;
`
