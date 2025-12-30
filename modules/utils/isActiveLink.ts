

export function isActiveLink(href: string, pathname: string, locale: string) {
  if (!pathname || !locale) return false;

  const pathWithoutLocale =
    pathname.replace(new RegExp(`^/${locale}`), "") || "/";

  return pathWithoutLocale === href || pathWithoutLocale.startsWith(href + "/");
}