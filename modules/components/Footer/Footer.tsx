import { useTranslations } from "next-intl";
import css from "./Footer.module.css";
import clsx from "clsx";
import { LinkButton } from "../@ui/LinkButton/LinkButton";
import { Link } from "@/i18n/navigation";

type SocialLink = {
  id: string;
  label: string;
  url: string;
};

export default function Footer() {
  const t = useTranslations("footer");
  const st = useTranslations("socials");
  const socialLinks = st.raw("links") as SocialLink[];
  return (
    <footer className={clsx("section", css.footer)}>
      <div className="container">
        <div className={css.footerContent}>
          <div className={css.contactInfo}>
            <address>
              <ul className={css.infoList}>
                <li>
                  <p className={css.infoItemTitle}>Phone</p>
                  <Link href="tel:+12345678901">+1 (234) 567-8901</Link>
                </li>
                <li>
                  <p className={css.infoItemTitle}>Address</p>
                  <p>123 Fitness Street, Los Angeles, CA</p>
                </li>
                <li>
                  <p className={css.infoItemTitle}>Email</p>
                  <Link href="mailto:contact@stasyafit.com">contact@stasyafit.com</Link>
                </li>
              </ul>
            </address>
            <ul className={css.socialsList}>
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <Link className={css.link} href={link.url} target="_blank" rel="noopener noreferrer">
                    <svg width="40" height="40">
                      <use href={`/icons.svg#${link.id}`}></use>
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={css.contactDetails}>
            <h2 className={css.title}>
              {t("title.0")} <span className={css.titleSpan}>{t("title.1")}</span>
            </h2>
            <p className={css.description}>{t("description")}</p>
            <LinkButton className={css.linkButton} href={socialLinks[0].url} target="_blank" rel="noopener nofeferrer">
              {st("links.0.label")}
            </LinkButton>
          </div>
        </div>
        <div className={css.footerBottom}>
          <p className={css.copyright}>{t("copyright")}</p>
          <p className={css.madeBy}>{t("Made")}</p></div>
      </div>
    </footer>
  );
}
