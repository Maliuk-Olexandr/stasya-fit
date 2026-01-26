"use client";

import { useEffect, useRef, useState } from "react";
import css from "./FaqItem.module.css";
import clsx from "clsx";

interface FaqItemProps {
  item: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export default function FaqItemRow({ item, isOpen, onToggle, index }: FaqItemProps) {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className={css.item}>
      <button
        type="button"
        className={css.questionButton}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={css.counter}>{`[${(index + 1).toString().padStart(2, "0")}]`}</span>
        <div className={css.questionWrapper}>
          <span className={css.question}>{item.question}</span>
  
          <svg
            className={clsx(css.icon, { [css.open]: isOpen })}
            width="28"
            height="28"
          >
            <use href="/icons.svg#arrow" />
          </svg>
        </div>
      </button>

      <div className={css.answerWrapper} style={{ height }}>
        <p ref={contentRef} className={css.answer}>
          {item.answer}
        </p>
      </div>
    </li>
  );
}
