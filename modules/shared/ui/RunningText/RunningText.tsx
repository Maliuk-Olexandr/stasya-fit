"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import css from "./RunningText.module.css";

export function RunningText() {
  const t = useTranslations("runningText");
  const texts = t.raw("texts") as string[];

  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const track = trackRef.current;
    if (!marquee || !track) return;

    // заповнюємо трек, поки він не стане ширше контейнера × 2
    const trackWidth = track.scrollWidth;
    const marqueeWidth = marquee.offsetWidth;

    if (trackWidth < marqueeWidth * 2) {
      const clonesNeeded = Math.ceil((marqueeWidth * 2) / trackWidth);

      for (let i = 0; i < clonesNeeded; i++) {
        track.innerHTML += track.innerHTML;
      }
    }

    const totalWidth = track.scrollWidth / 2;

    const tl = gsap.to(track, {
      x: -totalWidth,
      duration: 80,
      ease: "none",
      repeat: -1,
    });

    marquee.addEventListener("mouseenter", () => tl.pause());
    marquee.addEventListener("mouseleave", () => tl.resume());

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={marqueeRef} className={css.marquee}>
      <div ref={trackRef} className={css.track}>
        {texts.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>
    </div>
  );
}
