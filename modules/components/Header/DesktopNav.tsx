import css from "./Header.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import path from "path";
import { mainNavLinks} from "@/modules/constants/navLink";

export function DesktopNav() {
  const t = useTranslations("Header");
  const pathname = path.normalize(typeof window !== "undefined" ? window.location.pathname : "/");

  function isActiveLink(href: string) {
    return pathname === href|| pathname.endsWith(href);
  }

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
