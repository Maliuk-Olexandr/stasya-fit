"use client";
import css from "./experience.module.css";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useInViewOnce } from "../../../shared/ui/ExpirienceCounter/useInViewOnce";
import { ExperienceCounter } from "./ExperienceCounter";

type ExperienceItem = {
  id: string;
  label: string;
  value: number;
};

export default function ExperienceSection() {
  const t = useTranslations("home.experience");
  const experienceItems = t.raw("items") as ExperienceItem[];

  const { ref, inView } = useInViewOnce<HTMLDivElement>({
    threshold: 0.1,
  });
  return (
    <section id="experience" className={clsx("section", css.experienceSection)}>
      <div className={clsx("container", css.experienceContainer)} ref={ref}>
        <h2 className="visually-hidden">Experience</h2>
        {experienceItems.map((i) => (
          <ExperienceCounter
            key={i.id}
            label={i.label}
            value={i.value}
            start={inView}
          />
        ))}
      </div>
    </section>
  );
}
