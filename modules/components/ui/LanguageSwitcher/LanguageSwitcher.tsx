"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { LOCALES } from "@/modules/constants/locales";
import css from "./LanguageSwitcher.module.css";

type Locale = (typeof LOCALES)[number];

function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

interface LanguageSwitcherProps {
  className?: string;

}

export function LanguageSwitcher(props?: LanguageSwitcherProps) {
  const pathname = usePathname();
  const locale = useLocale();

  function getHref(nextLocale: Locale) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] && isLocale(segments[0])) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }

    return "/" + segments.join("/");
  }

  return (
    <div className={clsx(css.switcher, props?.className)}>
      {LOCALES.map((lng, i) => (
        <span key={lng}>
          <Link
            href={getHref(lng)}
            className={clsx(css.link, locale === lng && css.active)}
          >
            {lng.toUpperCase()}
          </Link>
          {i < LOCALES.length - 1 && <span className={css.separator}>|</span>}
        </span>
      ))}
    </div>
  );
}
