import Image from "next/image";
import css from "./BeforeAfterCard.module.css";

export default function BeforeAfterCard({
  slide,
}: {
  slide: {
    beforePhoto: string;
    afterPhoto: string;
    description: string;
  };
}) {
  return (
    <div className={css.beforeAfterCard}>
      <div className={css.imagesContainer}>
        <div className={css.imageWrapper}>
          <h3 className={css.imageLabel}>Before</h3>
          <Image
            className={css.image}
            src={slide.beforePhoto}
            alt="Before image"
            width={720}
            height={1160}
            loading="lazy"
          />
        </div>
        <span className={css.separator}></span>
        <div className={css.imageWrapper}>
          <h3 className={css.imageLabel}>After</h3>
          <Image
            className={css.image}
            src={slide.afterPhoto}
            alt="After image"
            width={720}
            height={1160}
            loading="lazy"
          />
        </div>
      </div>
      <p className={css.description}>{slide.description}</p>
    </div>
  );
}
