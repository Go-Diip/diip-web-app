import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  backdrop-filter: blur(16px);
  .swiper {
    padding: 1rem;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      padding: 0;
      margin-bottom: 0;
    }
    overflow: unset;
  }
  .swiper-slide {
    height: auto;
    box-sizing: border-box;
  }
  .MuiContainer-root {
    position: relative;
  }
`
