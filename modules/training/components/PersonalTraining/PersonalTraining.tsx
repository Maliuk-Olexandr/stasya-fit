"use client";

import { useTranslations } from "use-intl";
import TrainingSection from "../../../shared/ui/TrainingSection/TrainingSection";

export default function PersonalTrainingSection() {
  const t = useTranslations("training.training");
  return <TrainingSection title={t("title")} description={t("description")} />;
}
