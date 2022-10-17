import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  z-index: 4;
  .swiper {
    overflow: unset;
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
    &:hover {
      transition: 0.7s all ease;
      transform: translateY(40px);
    }
  }
`
export const ImageWrapper = styled.div``
