"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import css from "./BeforeAfterSlider.module.css";
import { beforeAfterData } from "./data";
import BeforeAfterCard from "./BeforeAfterCard";

export default function BeforeAfterSlider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      loop
      navigation={{
        prevEl: "." + css.prevBtn,
        nextEl: "." + css.nextBtn,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        el: "." + css.pagination,
        renderBullet: (index, className) => {
          const img = beforeAfterData[index].thumpnail;
          return `
        <span class="${className} ${css.thumb}">
          <img src="${img}" alt="Before photo ${index + 1}" />
        </span>
      `;
        },
      }}
    >
      {beforeAfterData.map((item, index) => (
        <SwiperSlide key={index}>
          <BeforeAfterCard slide={item} />
        </SwiperSlide>
      ))}
      <button className={css.prevBtn}>
        <svg width="20" height="30">
          <use href="/icons.svg#chevron"></use>
        </svg>
      </button>
      <button className={css.nextBtn}>
        <svg width="20" height="30">
          <use href="/icons.svg#chevron"></use>
        </svg>
      </button>
      <div className={css.pagination} />
    </Swiper>
  );
}
