"use client";

import clsx from 'clsx';
import css from './PersonalTraining.module.css';
import { useTranslations } from 'use-intl';

export default function PersonalTrainingSection() {
  const t = useTranslations('personalTraining');
  return (
    <section className="section">
      <div className={clsx("container", css.container)}>
        <h2 className={css.title}>{t('title')}</h2>
        <p className={css.description}>
          {t('description')}
        </p>
      </div>
    </section>
  );
}