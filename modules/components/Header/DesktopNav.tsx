"use client";
import css from "./Header.module.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import clsx from "clsx";
import { mainNavLinks } from "@/modules/constants/navLink";
import { isActiveLink } from "@/modules/utils/isActiveLink";
import { usePathname } from "@/i18n/navigation";

export function DesktopNav() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav>
      <ul className={css.desktopNav}>
        {mainNavLinks.map((link) => {
          const isActive = isActiveLink(link.href, pathname, locale);
          return(
          <li key={link.href}>
            <Link
              className={clsx(css.navLink, {
                [css.active]: isActive,
              })}
              href={link.href}
            >
              {t(link.labelKey)}
            </Link>
          </li>
        )})}
      </ul>
    </nav>
  );
}
