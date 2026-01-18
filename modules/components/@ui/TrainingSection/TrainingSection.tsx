"use client";

import clsx from "clsx";
import css from "./TrainingSection.module.css";

interface Props {
  title: string;
  description: string;
}


export default function TrainingSection({ title, description }: Props) {
  return (
    <section className="section">
      <div className={clsx("container", css.container)}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.description}>{description}</p>
      </div>
    </section>
  );
}
