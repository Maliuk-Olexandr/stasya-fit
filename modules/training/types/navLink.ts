import type { Messages } from "../../shared/types/messages";

type trainingMenuLinkKey = keyof Messages["training.trainingMenu"];

export type trainingMenuLinksType = {
  href: string;
  labelKey: trainingMenuLinkKey;
};

export const trainingMenuLinks: trainingMenuLinksType[] = [
  { href: "/training", labelKey: "personalTraining" },
  { href: "/online-training", labelKey: "onlineTraining" },
  { href: "/nutrition", labelKey: "onlineNutrition" },
];
