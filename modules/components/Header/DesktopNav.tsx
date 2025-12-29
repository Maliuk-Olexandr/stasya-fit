import css from "./Header.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { mainNavLinks } from "@/modules/constants/navLink";
import { isActiveLink } from "@/modules/utils/pathname";

export function DesktopNav() {
  const t = useTranslations("Header");

  

  return (
    <nav >
     <ul className={css.desktopNav}>
        {mainNavLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={clsx(css.navLink, { [css.active]: isActiveLink(link.href) })}
              href={link.href}
            >
              {t(link.labelKey)}
            </Link>
          </li>
        ))}
     </ul>
    </nav>
  );
}
