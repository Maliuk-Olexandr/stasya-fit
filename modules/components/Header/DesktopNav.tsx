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
          const isActive = link.hash
            ? false
            : isActiveLink(link.href, pathname, locale);
          const isAnchorLink = !!link.hash && pathname === "/";
          const href = isAnchorLink
            ? `#${link.hash}`
            : {
                pathname: link.href,
                hash: link.hash,
            };
        
          return (
            <li key={link.labelKey}>
              <Link
                className={clsx(css.navLink, {
                  [css.active]: isActive,
                })}
                href={href}
              >
                {t(link.labelKey)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
