"use client";
import css from "./MobileNav.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useNavigationStore } from "@/modules/store/useAppStore";
import { mainNavLinks } from "@/modules/constants/navLink";

export function MobileNav() {
  const t = useTranslations("Header");
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useNavigationStore();

  return (
    <div className={css.mobileNav}>
      <button
        className={css.mobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label="Mobile menu"
      >
        {isMobileMenuOpen ? (
          <svg width={32} height={32}>
            <use href="/icons.svg#close"></use>
          </svg>
        ) : (
          <svg width={32} height={32}>
            <use href="/icons.svg#burger"></use>
          </svg>
        )}
      </button>
        <div className={clsx("container", css.backdrop, isMobileMenuOpen && css.mobileMenuOpen)}>
          <nav >
            <ul>
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={closeMobileMenu}>
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
  );
}
