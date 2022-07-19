import React from "react"
import * as S from "./services-slider.styles"

import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { Container } from "@mui/material"
import ServiceCard from "../../components/service-card/service-card.component"

const ServicesSlider = ({ title, description, slides }) => {
  return (
    <S.Wrapper>
      <Container maxWidth="md">
        <S.TextWrapper>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description>{description}</S.Description>}
        </S.TextWrapper>
      </Container>
      <Container>
        <Swiper
          modules={[Navigation, Pagination]}
          //pagination={{ clickable: true }}
          spaceBetween={48}
          // loop={isSm}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          slidesPerView={1}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`service-card-${index}`}>
              <ServiceCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </S.Wrapper>
  )
}

export default ServicesSlider
