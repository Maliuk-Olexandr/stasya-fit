import clsx from "clsx";
import css from "./JoinMe.module.css";
import { LinkButton } from "../../../shared/ui/LinkButton/LinkButton";
import { useTranslations } from "next-intl";

export default function JoinMe() {
  const t = useTranslations("header");
  const tJoinMe = useTranslations("home.joinMe");

  return (
    <section className={clsx("section", css.joinMeSection)}>
      <div className={clsx("container", css.content)}>
        <h2 className="visually-hidden">{tJoinMe("title")}</h2>
        <LinkButton href="/join" className={css.button}>
          {tJoinMe("button")}
        </LinkButton>
        <LinkButton className={css.button} href="/consultation">
          {t("consultation")}
        </LinkButton>
      </div>
    </section>
  );
}
