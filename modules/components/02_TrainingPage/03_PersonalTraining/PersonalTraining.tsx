"use client";

import { useTranslations } from 'use-intl';
import TrainingSection from '../../@ui/TrainingSection/TrainingSection';

export default function PersonalTrainingSection() {
  const t = useTranslations('personalTraining');
  return (
    <TrainingSection
      title={t('title')}
      description={t('description')}
    />
  );
}