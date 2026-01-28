"use client";

import { useTranslations } from "use-intl";
import {TrainingSection} from "@/modules/shared";

export default function OnlineTrainingSection() {
  const t = useTranslations("onlineTraining");
  return <TrainingSection title={t("title")} description={t("description")} />;
}
