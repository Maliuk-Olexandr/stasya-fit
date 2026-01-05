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

