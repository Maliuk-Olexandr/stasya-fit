import clsx from "clsx";
import css from "./AboutMe.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

type ExperienceItem = {
  id: string | number;
  label: string;
  value: string | number;
};

export default function AboutMeSection() {
  const t = useTranslations("aboutMe");
  const experienceItems = t.raw("experience.items") as ExperienceItem[];

  return (
    <section id="about" className="section">
      <div className={clsx("container", css.aboutMeContainer)}>
        <h2 className="text">{t("intro.title")}</h2>
        <p>{t("intro.texts.0")}</p>

        <Image
          src="/aboutMe.webp"
          alt={"About Me Image"}
          width={550}
          height={332}
          loading="lazy"
          className={css.aboutMeImage}
        />
        <p className="text">{t("intro.texts.1")}</p>

        <h3 className="text-2">{t("story.title")}</h3>
        <p>{t("story.paragraphs.0")}</p>
        <p>{t("story.paragraphs.1")}</p>
        <div>
          {experienceItems.map(({ id, label, value }) => (
            <div key={id}>
              <p>{label}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
