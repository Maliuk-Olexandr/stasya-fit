import BeforeAfterSlider from "./BeforeAfterSlider";
import { useTranslations } from "next-intl";

export default function BeforeAfter() {
  const t = useTranslations("beforeAfter");
  return (
    <section className="section">
      <div className="container">
        <h2 className="visually-hidden">{t("title")}</h2>
        <BeforeAfterSlider />
      </div>
    </section>
  );
}
