import HeroSection from "@/modules/home/components/Hero/Hero";
import TrainingMenu from "@/modules/training/components/TrainingMenu/TrainingMenu";
import NutritionPlansSection from "@/modules/nutrition/ui/NutritionPlans/NutritionPlans";
import {RunningText} from "@/modules/shared/";

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
