import path from "path";

export function isActiveLink(href: string) {
  const pathname = path.normalize(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  return pathname === href || pathname.endsWith(href);
}
