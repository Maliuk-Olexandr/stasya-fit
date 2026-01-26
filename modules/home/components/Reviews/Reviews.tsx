import { useTranslations } from "next-intl";
import css from "./Reviews.module.css";
import ReviewsSlider from "./ReviewsSlider";

export default function ReviewsSection() {
  const t = useTranslations("home.reviews");
  return (
    <section className="section">
      <div className="container">
        <h2 className={css.title}>{t("title")}</h2>
        <ReviewsSlider />
      </div>
    </section>
  );
}
