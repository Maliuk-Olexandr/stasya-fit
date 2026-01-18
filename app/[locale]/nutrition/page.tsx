import HeroSection from "@/modules/components/01_HomePage/01_Hero/Hero";
import TrainingMenu from "@/modules/components/02_TrainingPage/02_TrainingMenu/TrainingMenu";
import NutritionPlansSection from "@/modules/components/04_Nutrition/02_NutritionPlans/NutritionPlans";
import RunningText from "@/modules/components/@ui/RunningText/RunningText";


export default function nutritionPage() {
  return (
    <>
      <HeroSection />
      <TrainingMenu />
      <NutritionPlansSection />
      <RunningText />
    </>
  );
}