"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import css from "./BeforeAfterSlider.module.css";
import { beforeAfterData } from "./data";
import BeforeAfterCard from "./BeforeAfterCard";

export default function BeforeAfterSlider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      // navigation={{
      //   prevEl: "." + css.prevBtn,
      //   nextEl: "." + css.nextBtn,
      // }}
      // navigation={false}
      // breakpoints={{
      //   1440: {
      //     navigation: {
      //       prevEl: "." + css.prevBtn,
      //       nextEl: "." + css.nextBtn,
      //     },
      //   },
      // }}
      navigation

      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: true,
      //   pauseOnMouseEnter: true,
      // }}
    >
      {beforeAfterData.map((item, index) => (
        <SwiperSlide key={index}>
          <BeforeAfterCard slide={item} />
        </SwiperSlide>
      ))}
      {/* <button className={css.prevBtn}>Prev</button>
      <button className={css.nextBtn}>Next</button> */}
    </Swiper>
  );
}
