"use client";

import { useTranslations } from "use-intl";
import TrainingSection from "../../../shared/ui/TrainingSection/TrainingSection";

export default function NutritionPlansSection() {
  const t = useTranslations("nutritionPlans");
  return <TrainingSection title={t("title")} description={t("description")} />;
}
