import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";

import HeroSection from "@/modules/components/11_Hero/Hero";
import AboutMeSection from "@/modules/components/12_AboutMe/AboutMe";
import RunningText from "@/modules/components/ui/RunningText/RunningText";

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

  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <RunningText />
    </>
  );
}
