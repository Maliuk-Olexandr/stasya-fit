import HeroSection from "@/modules/components/01_HomePage/01_Hero/Hero";
import TrainingMenu from "@/modules/components/02_TrainingPage/02_TrainingMenu/TrainingMenu";
import OnlineTrainingSection from "@/modules/components/03_OnlineTrainingPage/02_OnlineTraining/OnlineTraining";
import RunningText from "@/modules/components/@ui/RunningText/RunningText";


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