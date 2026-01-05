import clsx from "clsx";
import css from "./AboutMe.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { LinkButton } from "../../ui/LinkButton/LinkButton";

type Props = { title: string; paragraphs: string[] };

type ExperienceItem = {
  id: string | number;
  label: string;
  value: string | number;
};

export default function AboutMeSection() {
  const t = useTranslations("aboutMe");
  const ht = useTranslations("social");
  const experienceItems = t.raw("experience.items") as ExperienceItem[];
  const story = t.raw("story") as Props;

  return (
    <section id="about" className="section">
      <div className={clsx("container", css.aboutMeContainer)}>
        <div className={css.content1}>
          <h2 className={css.title}>{t("intro.title")}</h2>
          <p className={css.text}>{t("intro.texts.0")}</p>

          <Image
            src="/AboutMe1.webp"
            alt={"About Me Image"}
            width={550}
            height={332}
            loading="lazy"
            className={css.image1}
          />
          <p className={css.text}>{t("intro.texts.1")}</p>
        </div>

        <div className={css.content2}>
          <h3 className={css.title}>{ht("title")}</h3>

          <Image
            src="/AboutMe2.webp"
            alt={"About Me Image"}
            width={550}
            height={332}
            loading="lazy"
            className={css.image2}
          />
          <LinkButton className={css.linkButton} href="https://instagram.com">
            {ht("links.0.label")}
          </LinkButton>
        </div>

        <div className={css.content3}>
          <h3 className={css.title}>{t("story.title")}</h3>

          <div className={css.story}>
            <Image
              src="/AboutMe3.webp"
              alt={"About Me Image"}
              width={550}
              height={332}
              loading="lazy"
              className={css.image3}
            />
  
            <ul className={css.storyList}>
              {story.paragraphs.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={css.content4}>
          {experienceItems.map(({ id, label, value }) => (
            <div key={id}>
              <p className={css.label}>{label}</p>
              <p className={css.value}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
