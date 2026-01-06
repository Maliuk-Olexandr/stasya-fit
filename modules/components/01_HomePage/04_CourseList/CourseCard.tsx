import { LinkButton } from "../../@ui/LinkButton/LinkButton";
import css from "./CourseCard.module.css";
import clsx from "clsx";

interface CourseCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  href: string;
}

export default function CourseCard({
  title,
  description,
  features,
  buttonText,
  href,
}: CourseCardProps) {
  return (
    <div className={clsx(css.courseCard)}>
      <h3 className={css.courseTitle}>{title}</h3>
      <p className={css.courseDescription}>{description}</p>
      <ul className={css.featureList}>
        {features.map((feature, index) => (
          <li className={css.listItem} key={index}>
            {feature}
          </li>
        ))}
      </ul>
      <LinkButton href={href} className={css.button}>
        {buttonText}
        <svg className={css.svgIcon} width={28} height={28}>
          <use href="/icons.svg#arrow"></use>
        </svg>
      </LinkButton>
    </div>
  );
}
