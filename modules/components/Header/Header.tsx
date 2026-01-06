import clsx from "clsx";
import css from "./Header.module.css";
import { Logo } from "@/modules/components/@ui/Logo/Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { LinkButton } from "../@ui/LinkButton/LinkButton";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("header");
  return (
    <header>
      <div className={clsx("container", css.headerContainer)}>
        <Logo />
        <DesktopNav />
        <LinkButton
          className={clsx(css.desktopOnly, css.link)}
          href="/consultation"
        >
          {t("consultation")}
        </LinkButton>
        <MobileNav />
      </div>
    </header>
  );
}
