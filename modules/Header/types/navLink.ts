import type { Messages } from "../../shared/types/messages";

type NavLinkKey = keyof Messages["header"];

export type mainNavLinksType = {
  href: string;
  hash?: string;
  labelKey: NavLinkKey;
};

export const mainNavLinks: mainNavLinksType[] = [
  { href: "/", labelKey: "home" },
  { href: "/", hash: "about", labelKey: "about" },
  { href: "/training", labelKey: "training" },
  { href: "/nutrition", labelKey: "nutrition" },
];


