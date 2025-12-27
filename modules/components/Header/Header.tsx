import Link from "next/link";
import clsx from "clsx";
import css from "./Header.module.css";
import { Logo } from "@/modules/components/ui/Logo/Logo";
import { DesktopNav } from "./DesktopNav";
import { useTranslations } from "next-intl";
import { MobileNav } from "./MobileNav";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header>
      <div className={clsx("container", css.headerContainer)}>
        <Logo />
        <DesktopNav />
        <Link className={css.bookingLink} href="/consultation">
          {t("consultation")}
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
