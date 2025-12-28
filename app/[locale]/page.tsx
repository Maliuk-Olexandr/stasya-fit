import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import Hero from "@/modules/components/Hero/Hero";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
type PageProps = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: PageProps) {
  const { locale } = use(params);
  console.log("HomePage locale:", locale);

  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return <Hero />;
}
