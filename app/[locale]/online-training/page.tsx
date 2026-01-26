import HeroSection from "@/modules/home/components/Hero/Hero";
import TrainingMenu from "@/modules/training/components/TrainingMenu/TrainingMenu";
import OnlineTrainingSection from "@/modules/onlineTraining/ui/OnlineTraining/OnlineTraining";
import RunningText from "@/modules/shared/ui/RunningText/RunningText";

export default function OnlineTrainingPage() {
  return (
    <>
      <HeroSection />
      <TrainingMenu />
      <OnlineTrainingSection />
      <RunningText />
    </>
  );
}
