import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

import HeroSection from "@/modules/components/01_HomePage/01_Hero/Hero";
import AboutMeSection from "@/modules/components/01_HomePage/02_AboutMe/AboutMe";
import RunningText from "@/modules/components/ui/RunningText/RunningText";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
type PageProps = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: PageProps) {
  const { locale } = use(params);

  setRequestLocale(locale);


  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <RunningText />
    </>
  );
}
