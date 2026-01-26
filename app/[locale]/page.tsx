import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/modules/shared/i18n/routing";

import HeroSection from "@/modules/home/components/Hero/Hero";
import AboutMeSection from "@/modules/home/components/AboutMe/AboutMe";
import ExperienceSection from "@/modules/home/components/Experience/experience";
import RunningText from "@/modules/shared/ui/RunningText/RunningText";
import CourseListSection from "@/modules/home/components/CourseList/CourseList";
import HowItsWorksSection from "@/modules/home/components/HowItsWorks/HowItsWorks";
import ReviewsSection from "@/modules/home/components/Reviews/Reviews";
import FaqSection from "@/modules/home/components/Faq/Faq";
import BeforeAfter from "@/modules/home/components/BeforeAfter/BeforeAfter";
import JoinMe from "@/modules/home/components/JoinMe/JoinMe";

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
      <ExperienceSection />
      <RunningText />
      <CourseListSection />
      <HowItsWorksSection />
      <ReviewsSection />
      <FaqSection />
      <BeforeAfter />
      <JoinMe />
    </>
  );
}
