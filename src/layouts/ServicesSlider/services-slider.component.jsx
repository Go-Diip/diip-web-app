import React from "react"
import * as S from "./services-slider.styles"

import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { Container } from "@mui/material"

const ServicesSlider = ({ title, description, slides }) => {
  return (
    <S.Wrapper>
      <Container maxWidth="lg">
        <Swiper
          modules={[Navigation, Pagination]}
          //pagination={{ clickable: true }}
          spaceBetween={15}
          // loop={isSm}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <S.SlideWrapper></S.SlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <S.SlideWrapper></S.SlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <S.SlideWrapper></S.SlideWrapper>
          </SwiperSlide>
        </Swiper>
      </Container>
    </S.Wrapper>
  )
}

export default ServicesSlider
