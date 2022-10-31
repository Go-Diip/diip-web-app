import React from "react"
import * as S from "./clients-slider.styles"
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import CustomLink from "../../components/custom-link/custom-link.component"

import "swiper/css"
import "swiper/css/navigation"

const ClientSlider = ({ slides }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  if (!slides) return null

  return (
    <S.Wrapper>
      <Container maxWidth={isMobile?'md':'false'} disableGutters={isMobile?false:true}>
        <Swiper
          modules={[Navigation, Pagination]}
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
        >
          {slides.map(({ image, url }, index) => (
            <SwiperSlide key={`slider-item-${index}`}>
              <CustomLink url={url}>
                <S.SlideImage
                  fit="cover"
                  img={image}
                  arPaddingPercentage={114}
                />
              </CustomLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </S.Wrapper>
  )
}

export default ClientSlider
