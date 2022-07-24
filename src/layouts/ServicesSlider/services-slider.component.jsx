import React, { useState } from "react"
import * as S from "./services-slider.styles"

import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material"
import ServiceCard from "../../components/service-card/service-card.component"
import SliderArrow from "../../components/slider-arrow/slider-arrow.component"

const ServicesSlider = ({ title, description, slides }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleChangeSlide = value => {
    setSlideIndex(value)
  }

  return (
    <S.Wrapper>
      <Container maxWidth="md">
        <S.TextWrapper>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description>{description}</S.Description>}
        </S.TextWrapper>
      </Container>

      {!isMobile ? (
        <>
          <Container>
            <Swiper
              allowTouchMove={false}
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
          <Container maxWidth="md">
            <S.NavigationWrapper>
              <S.IndicatorWrapper>
                <S.Number>0{slideIndex + 1}</S.Number>
                <S.LineWrapper>
                  <S.WhiteLine
                    style={{ width: (290 / slides.length) * (slideIndex + 1) }}
                  />
                </S.LineWrapper>
                <S.Number>0{slides.length}</S.Number>
              </S.IndicatorWrapper>
              <S.ArrowGrid>
                <SliderArrow
                  className="prev"
                  onClick={() =>
                    handleChangeSlide(slideIndex !== 0 ? slideIndex - 1 : 0)
                  }
                />
                <SliderArrow
                  className="next"
                  onClick={() =>
                    handleChangeSlide(
                      slideIndex !== slides.length - 1
                        ? slideIndex + 1
                        : slides.length - 1
                    )
                  }
                />
              </S.ArrowGrid>
            </S.NavigationWrapper>
          </Container>
        </>
      ) : (
        <Container>
          <Grid container spacing={4}>
            {slides.map((slide, index) => (
              <Grid item xs={12} sm={6} key={`service-card-${index}`}>
                <ServiceCard {...slide} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </S.Wrapper>
  )
}

export default ServicesSlider
