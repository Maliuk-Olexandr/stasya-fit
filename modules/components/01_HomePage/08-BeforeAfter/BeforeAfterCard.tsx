import Image from "next/image";
import css from "./BeforeAfterCard.module.css";
import { useTranslations } from "next-intl";

interface BeforeAfterCardProps {
  beforePhoto: string;
  afterPhoto: string;
  description: string;
}

export default function BeforeAfterCard({
  beforePhoto,
  afterPhoto,
  description,
}: BeforeAfterCardProps) {

  const t = useTranslations("beforeAfter");
  return (
    <div className={css.beforeAfterCard}>
      <div className={css.imagesContainer}>
        <div className={css.imageWrapper}>
          <h3 className={css.imageLabel}>{t("before")}</h3>
          <Image
            className={css.image}
            src={beforePhoto}
            alt={`Photo${t("before")}`}
            width={720}
            height={1160}
            loading="lazy"
          />
        </div>
        <span className={css.separator}></span>
        <div className={css.imageWrapper}>
          <h3 className={css.imageLabel}>{t("after")}</h3>
          <Image
            className={css.image}
            src={afterPhoto}
            alt={`Photo${t("after")}`}
            width={720}
            height={1160}
            loading="lazy"
          />
        </div>
      </div>
      <p className={css.description}>{description}</p>
    </div>
  );
}
