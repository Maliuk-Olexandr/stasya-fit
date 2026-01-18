import type { Messages } from "../types/messages";

type NavLinkKey = keyof Messages["header"];

export type mainNavLinksType = {
  href: string;
  hash?: string;
  labelKey: NavLinkKey;
}; 

export const mainNavLinks: mainNavLinksType[] = [
  { href: "/", labelKey: "home" },
  { href: "/", hash: "about", labelKey: "about" },
  { href: "/personalTraining", labelKey: "training" },
  { href: "/nutrition", labelKey: "nutrition" },
];


type trainingMenuLinkKey = keyof Messages["trainingMenu"];

export type trainingMenuLinksType = {
  href: string;
  labelKey: trainingMenuLinkKey;
};

export const trainingMenuLinks: trainingMenuLinksType[] = [
  { href: "/personalTraining", labelKey: "personalTraining" },
  { href: "/onlineTraining", labelKey: "onlineTraining" },
  { href: "/nutrition", labelKey: "onlineNutrition" },
];
