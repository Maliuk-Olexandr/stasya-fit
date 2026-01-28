import css from "./HowItWorks.module.css";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type Step = {
  id: string;
  title: string;
  description: string;
};

export default function HowItWorksSection() {
  const t = useTranslations("home.howItsWorks");
  const steps = t.raw("steps") as Step[];

  return (
    <section className={clsx("section", css.howItsWorks)}>
      <div className="container">
        <h2 className={css.title}>{t("title")}</h2>
        <ul className={css.steps}>
          {steps.map((step, index) => (
            <li key={index} className={css.step}>
              <p className={css.stepNum}>{index + 1}</p>
              <h3 className={css.stepTitle}>{step.title}</h3>
              <p className={css.stepDescription}>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
