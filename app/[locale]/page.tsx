import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/modules/shared/i18n/routing";

import {
  HeroSection,
  AboutMeSection,
  BeforeAfterSection,
  CoursesListSection,
  ExpierienceSection,
  FaqSection,
  HowItWorksSection,
  JoinMeSection,
  ReviewsSection,
} from "@/modules/home";
import { RunningText } from "@/modules/shared"

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
      <ExpierienceSection />
      <RunningText />
      <CoursesListSection />
      <HowItWorksSection />
      <ReviewsSection />
      <FaqSection />
      <BeforeAfterSection />
      <JoinMeSection />
    </>
  );
}
