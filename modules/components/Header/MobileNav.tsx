"use client";
import css from "./MobileNav.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useNavigationStore } from "@/modules/store/useAppStore";
import { mainNavLinks } from "@/modules/constants/navLink";
import { LinkButton } from "../ui/LinkButton/LinkButton";
import { LanguageSwitcher } from "../ui/LanguageSwitcher/LanguageSwitcher";

export function MobileNav() {
  const t = useTranslations("Header");
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useNavigationStore();

  return (
    <div className={clsx(css.mobileNav)}>
      <button
        className={css.mobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label="Mobile menu"
      >
          <svg width={32} height={32}>
            <use href={isMobileMenuOpen ? "/icons.svg#close" : "/icons.svg#burger"}></use>
          </svg>
      </button>

        <div
          className={clsx(css.backdrop, isMobileMenuOpen && css.mobileMenuOpen)}
        >
          <nav className={css.mobileMenu}>
            <LanguageSwitcher />
            <ul className={css.mobileMenuList}>
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={closeMobileMenu}>
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
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
