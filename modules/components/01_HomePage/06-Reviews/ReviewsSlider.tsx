"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper/types";

import clsx from "clsx";
import { useRef, useState } from "react";
import css from "./ReviewsSlider.module.css";
import { reviewsData } from "./reviewsData";
import ReviewCard from "./ReviewCard";

export default function ReviewsSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={24}
      slidesPerView={1}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      onBeforeInit={(swiper) => {
        // @ts-expect-error Swiper types are incorrect here
        swiper.params.navigation.prevEl = prevRef.current;
        // @ts-expect-error Swiper types are incorrect here
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      navigation
    >
      {reviewsData.map((review, index) => (
        <SwiperSlide key={index}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}

      {/* Кастомні кнопки */}
      <div className={css.nav}>
        <button className={clsx(css.prevBtn)} ref={prevRef} disabled={isBeginning}>
          <svg width="28" height="28">
            <use href="/icons.svg#arrow"></use>
          </svg>
        </button>
        <button className={css.nextBtn} ref={nextRef} disabled={isEnd}>
          <svg width="28" height="28">
            <use href="/icons.svg#arrow"></use>
          </svg>
        </button>
      </div>
    </Swiper>
  );
}
