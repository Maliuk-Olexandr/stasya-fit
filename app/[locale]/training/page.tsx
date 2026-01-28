import HeroSection from "@/modules/home/components/Hero/Hero";
import FaqSection from "@/modules/home/components/Faq/Faq";
import TrainingMenu from "@/modules/training/components/TrainingMenu/TrainingMenu";
import PersonalTrainingSection from "@/modules/training/components/PersonalTraining/PersonalTraining";
import ServicesSection from "@/modules/training/components/Services/Services";
import SessionsSection from "@/modules/training/components/Sessions/Sessions";
import {RunningText} from "@/modules/shared";

export default function TrainingPage() {
  return (
    <>
      <HeroSection />
      <TrainingMenu />
      <PersonalTrainingSection />
      <ServicesSection />
      <FaqSection />
      <SessionsSection />
      <RunningText />
    </>
  );
}
