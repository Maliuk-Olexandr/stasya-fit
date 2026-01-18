"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import css from "./Faq.module.css";
import FaqItemRow from "./FaqItem";
import { clsx } from "clsx";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as FaqItem[];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="section">
      <div className="container">
      <h2 className={css.title}>{t("title")}</h2>

      <ul>
        {items.map((item, index) => (
          <FaqItemRow
            key={index}
            item={item}
            isOpen={openIndexes.includes(index)}
            onToggle={() => toggle(index)}
            index={index}
          />
        ))}
        </ul>
      </div>
    </section>
  );
}
