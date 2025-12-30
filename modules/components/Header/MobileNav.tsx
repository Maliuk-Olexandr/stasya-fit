"use client";
import css from "./MobileNav.module.css";

import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useNavigationStore } from "@/modules/store/useAppStore";
import { mainNavLinks } from "@/modules/constants/navLink";
import { LinkButton } from "../ui/LinkButton/LinkButton";
import { LanguageSwitcher } from "../ui/LanguageSwitcher/LanguageSwitcher";
import { isActiveLink } from "@/modules/utils/isActiveLink";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const t = useTranslations("Header");
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useNavigationStore();
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className={clsx(css.mobileNav)}>
      <button
        className={clsx(css.burger, isMobileMenuOpen && css.active)}
        onClick={toggleMobileMenu}
        aria-label="Mobile menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={clsx(css.backdrop, isMobileMenuOpen && css.mobileMenuOpen)}
      >
        <nav className={css.mobileMenu}>
          <LanguageSwitcher />
          <ul className={css.mobileMenuList}>
            {mainNavLinks.map((link) => {
              const isActive = isActiveLink(link.href, pathname, locale);

              return (
                <li key={link.href}>
                  <Link
                    className={clsx(css.navLink, {
                      [css.active]: isActive,
                    })}
                    href={link.href}
                    onClick={closeMobileMenu}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LinkButton
            className={css.mobileOnly}
            label={t("consultation")}
            href="/consultation"
          />
        </nav>
      </div>
    </div>
  );
}
