import css from "./HowItsWorks.module.css";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function HowItsWorks() {
const t = useTranslations("howItsWorks");

  return (
    <section className={clsx("section", css.howItsWorks)}>
      <div className="container">
        <h2 className={css.title}>{t("title")}</h2>
        </div>
    </section>
  );
}