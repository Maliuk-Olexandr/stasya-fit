import clsx from "clsx";
import css from "./Hero.module.css";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../../../shared/ui/LanguageSwitcher/LanguageSwitcher";

export default function HeroSection() {
  const t = useTranslations("home.hero");
  return (
    <section className={clsx("section", css.section)}>
      <div className={clsx("container", css.container)}>
        <h1 className={css.title}>{t("title")}</h1>
        <LanguageSwitcher className={css.languageSwitcher} />
      </div>
    </section>
  );
}
