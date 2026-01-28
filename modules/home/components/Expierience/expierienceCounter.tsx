"use client";
import css from "./expierienceCounter.module.css";
import { useCountUp } from "./ExpirienceCounter/useCountUp";

type Props = {
  label: string;
  value: number;
  start: boolean;
};

export function ExperienceCounter({ label, value, start }: Props) {
  const count = useCountUp(value, start);

  return (
    <div className={css.experienceItem}>
      <p className={css.label}>{label}</p>
      <p className={css.value}>{count}</p>
    </div>
  );
}
