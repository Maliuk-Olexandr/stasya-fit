import clsx from 'clsx';
import css from './Hero.module.css';
import { useTranslations  } from 'next-intl';


export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className={clsx('section', css.section)}>
      <div className={clsx('container', css.container)}>
        <h1 className={css.title}>{t("title")}</h1>
      </div>
    </section>
  );
}