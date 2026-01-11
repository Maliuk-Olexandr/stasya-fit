import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

import HeroSection from "@/modules/components/01_HomePage/01_Hero/Hero";
import AboutMeSection from "@/modules/components/01_HomePage/02_AboutMe/AboutMe";
import ExperienceSection from "@/modules/components/01_HomePage/03_experience/experience";
import RunningText from "@/modules/components/@ui/RunningText/RunningText";
import CourseListSection from "@/modules/components/01_HomePage/04_CourseList/CourseList";
import HowItsWorksSection from "@/modules/components/01_HomePage/05-HowItsWorks/HowItsWorks";
import ReviewsSection from "@/modules/components/01_HomePage/06-Reviews/Reviews";
import FaqSection from "@/modules/components/01_HomePage/07-Faq/Faq";
import BeforeAfter from "@/modules/components/01_HomePage/08-BeforeAfter/BeforeAfter";
import JoinMe from "@/modules/components/01_HomePage/09-JoinMe/JoinMe";

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
