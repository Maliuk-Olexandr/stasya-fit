"use client";

import { useTranslations } from "use-intl";
import {TrainingSection} from "@/modules/shared"

export default function PersonalTrainingSection() {
  const t = useTranslations("training.training");
  return <TrainingSection title={t("title")} description={t("description")} />;
}
