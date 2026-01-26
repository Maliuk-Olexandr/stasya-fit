"use client";

import css from "./TrainingMenu.module.css";
import { useLocale, useTranslations } from "next-intl";
import { isActiveLink } from "@/modules/shared/utils/isActiveLink";
import { Link, usePathname } from "@/modules/shared/i18n/navigation";
import clsx from "clsx";
import { trainingMenuLinks } from "../../types/navLink";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TrainingMenu() {
  const t = useTranslations("training.trainingMenu");
  const pathname = usePathname();
  const locale = useLocale();

  const itemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((item) => {
      const line = item.querySelector<HTMLElement>(`.${css.underline}`);
      if (!line) return;

      const isActive = item.dataset.active === "true";

      gsap.set(line, {
        scaleX: isActive ? 1 : 0,
        transformOrigin: "center",
        backgroundColor: isActive
          ? "var(--third-text-color)"
          : "var(--main-text-color)",
      });

      const onEnter = () => {
        gsap.killTweensOf(line);
        gsap.to(line, {
          scaleX: 1,
          duration: 0.35,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        if (item.dataset.active !== "true") {
          gsap.killTweensOf(line);
          gsap.to(line, {
            scaleX: 0,
            duration: 0.25,
            ease: "power2.in",
          });
        }
      };

      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);

      return () => {
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  return (
    <section className={css.section}>
      <nav className="container">
        <ul className={css.menuList}>
          {trainingMenuLinks.map((link, index) => {
            const isActive = isActiveLink(link.href, pathname, locale);

            return (
              <li
                key={link.labelKey}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                data-active={isActive}
                className={clsx(css.menuItem, {
                  [css.active]: isActive,
                })}
              >
                <Link className={css.navLink} href={{ pathname: link.href }}>
                  {t(link.labelKey)}
                </Link>

                {/* underline */}
                <span className={css.underline} />
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
