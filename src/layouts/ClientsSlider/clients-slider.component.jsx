import React from "react"
import * as S from "./clients-slider.styles"
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import CustomLink from "../../components/custom-link/custom-link.component"
import "swiper/css/autoplay"

import "swiper/css"
import "swiper/css/navigation"
import parse from "html-react-parser"

const ClientSlider = ({ slides, title }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))


  if (!slides && !slides.length) return null

  return (
    <S.Wrapper>
      <Container
        maxWidth={isMobile ? "md" : "false"}
        disableGutters={!isMobile}
      >
        <S.TextWrapper>
          <S.Title>{parse(title)}</S.Title>
        </S.TextWrapper>
        <S.SwiperWrapper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              disableOnInteraction: false,
            }}
            spaceBetween={8}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-slider",
              nextEl: ".next-slider",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            loop={true}
          >
            {slides?.map(({ image, url }, index) => (
              <SwiperSlide key={`slider-client-item-${index}`}>
                <CustomLink url={url} target="_blank">
                  <S.SlideImage
                    fit="cover"
                    img={image}
                    arPaddingPercentage={114}
                  />
                </CustomLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default ClientSlider
