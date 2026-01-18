import HeroSection from "@/modules/components/01_HomePage/01_Hero/Hero";
import FaqSection from "@/modules/components/01_HomePage/07-Faq/Faq";
import TrainingMenu from "@/modules/components/02_TrainingPage/02_TrainingMenu/TrainingMenu";
import PersonalTrainingSection from "@/modules/components/02_TrainingPage/03_PersonalTraining/PersonalTraining";
import ServicesSection from "@/modules/components/02_TrainingPage/04_Services/Services";
import RunningText from "@/modules/components/@ui/RunningText/RunningText";

export default function TrainingPage() {
  return (
    <>
      <HeroSection />
      <TrainingMenu />
      <PersonalTrainingSection />
      <ServicesSection />
      <FaqSection />
      <RunningText />
    </>
  );
}
