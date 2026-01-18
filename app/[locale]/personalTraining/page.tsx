import HeroSection from "@/modules/components/01_HomePage/01_Hero/Hero";
import TrainingMenu from "@/modules/components/02_TrainingPage/02_TrainingMenu/TrainingMenu";
import PersonalTrainingSection from "@/modules/components/02_TrainingPage/03_PersonalTraining/PersonalTraining";
import RunningText from "@/modules/components/@ui/RunningText/RunningText";

export default function TrainingPage() {
  return (
    <>
      <HeroSection />
      <TrainingMenu />
      <PersonalTrainingSection />
      <RunningText />
    </>
  );
}
