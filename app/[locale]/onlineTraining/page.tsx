import HeroSection from "@/modules/components/01_HomePage/01_Hero/Hero";
import TrainingMenu from "@/modules/components/02_TrainingPage/02_TrainingMenu/TrainingMenu";
import RunningText from "@/modules/components/@ui/RunningText/RunningText";


export default function onlineTrainingPage() {
  return (  
    <>
      <HeroSection />
      <TrainingMenu />
      <RunningText />
    </>
  );
}