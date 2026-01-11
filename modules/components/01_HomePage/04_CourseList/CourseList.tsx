import css from "./CourseList.module.css";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import CourseCard from "./CourseCard";

type Course = {
  id: string;
  title: string;
  description: string;
  features: string[];
};

export default function CourseListSection() {
  const t = useTranslations("courseList");
  const courses = t.raw("courses") as Course[];

  return (
    <section id="courses" className="section">
      <div className={clsx("container", css.courseListContainer)}>
        <h2 className={css.title}>{t("title")}</h2>
        <div className={css.courseGrid}>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              features={course.features}
              buttonText={t("button")}
              href={course.id }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
