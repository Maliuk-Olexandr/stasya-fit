import clsx from "clsx";
import css from "./AboutMe.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMeSection() {
  const t = useTranslations("AboutMe");
  return (
    <section id="about" className="section">
      <div className={clsx("container", css.aboutMeContainer)}>
        <h2 className="text-3xl">{t("title")}</h2>
        <p className="text">{t("description.part1")}</p>
        <picture>
          <source
            srcSet="/images/about-me.jpg"
            type="image/webp"
            width={600}
            height={400}
            media="(min-width: 1440px)"
            className={css.aboutMeImage}
          />
          <source
            srcSet="/images/about-me.jpg"
            type="image/jpeg"
            width={600}
            height={400}
            media="(max-width: 1439px)"
            className={css.aboutMeImage}
          />
          <Image
            src="/images/about-me.jpg"
            alt={"About Me Image"}
            width={800}
            height={600}
            loading="lazy"
            className={css.aboutMeImage}
          />
        </picture>
        <p className="text">{t("description.part2")}</p>
      </div>
    </section>
  );
}
