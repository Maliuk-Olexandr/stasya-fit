export function isActiveLink(href: string, pathname: string, locale: string) {
  if (!pathname) return false;

  const normalizedPath = pathname.startsWith(`/${locale}`)
    ? pathname.slice(locale.length + 1) || "/"
    : pathname;

  return normalizedPath === href;
}
